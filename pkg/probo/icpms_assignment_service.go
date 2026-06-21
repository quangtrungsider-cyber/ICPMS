// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package probo

import (
	"context"
	"fmt"
	"strings"
	"time"

	"github.com/jackc/pgx/v5"
	"go.probo.inc/probo/pkg/coredata"
	"go.probo.inc/probo/pkg/gid"
	"go.gearno.de/kit/pg"
)

// IcpmsAssignmentService manages work assignments for VATM ICPMS compliance checklists.
type IcpmsAssignmentService struct {
	svc *Service
}

// ListForOrganization returns all non-deleted assignments for an organization.
func (s *IcpmsAssignmentService) ListForOrganization(
	ctx context.Context,
	scope coredata.Scoper,
	organizationID gid.GID,
) ([]*coredata.IcpmsAssignment, error) {
	var items []*coredata.IcpmsAssignment
	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		rows, err := conn.Query(ctx, `
			SELECT * FROM icpms_assignments
			WHERE tenant_id = @tenant_id
			  AND organization_id = @org_id
			  AND deleted_at IS NULL
			ORDER BY created_at DESC
		`, pgx.StrictNamedArgs{
			"tenant_id": scope.GetTenantID(),
			"org_id":    organizationID,
		})
		if err != nil {
			return err
		}
		items, err = pgx.CollectRows(rows, pgx.RowToAddrOfStructByName[coredata.IcpmsAssignment])
		return err
	})
	return items, err
}

// ListForChecklist returns assignments linked to a specific checklist.
func (s *IcpmsAssignmentService) ListForChecklist(
	ctx context.Context,
	scope coredata.Scoper,
	checklistID gid.GID,
) ([]*coredata.IcpmsAssignment, error) {
	var items []*coredata.IcpmsAssignment
	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		rows, err := conn.Query(ctx, `
			SELECT * FROM icpms_assignments
			WHERE tenant_id = @tenant_id
			  AND checklist_id = @checklist_id
			  AND deleted_at IS NULL
			ORDER BY created_at DESC
		`, pgx.StrictNamedArgs{
			"tenant_id":    scope.GetTenantID(),
			"checklist_id": checklistID,
		})
		if err != nil {
			return err
		}
		items, err = pgx.CollectRows(rows, pgx.RowToAddrOfStructByName[coredata.IcpmsAssignment])
		return err
	})
	return items, err
}

// Get fetches a single assignment by ID.
func (s *IcpmsAssignmentService) Get(
	ctx context.Context,
	scope coredata.Scoper,
	id gid.GID,
) (*coredata.IcpmsAssignment, error) {
	var item coredata.IcpmsAssignment
	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		rows, err := conn.Query(ctx, `
			SELECT * FROM icpms_assignments
			WHERE tenant_id = @tenant_id AND id = @id AND deleted_at IS NULL
			LIMIT 1
		`, pgx.StrictNamedArgs{
			"tenant_id": scope.GetTenantID(),
			"id":        id,
		})
		if err != nil {
			return err
		}
		item, err = pgx.CollectOneRow(rows, pgx.RowToStructByName[coredata.IcpmsAssignment])
		return err
	})
	if err != nil {
		return nil, err
	}
	return &item, nil
}

// findDuplicateActive checks if a non-closed/cancelled/deleted assignment already exists for the same checklist+lead_unit.
func (s *IcpmsAssignmentService) findDuplicateActive(
	ctx context.Context,
	conn pg.Querier,
	scope coredata.Scoper,
	checklistID gid.GID,
	leadUnitName string,
) (bool, error) {
	rows, err := conn.Query(ctx, `
		SELECT id FROM icpms_assignments
		WHERE tenant_id = @tenant_id
		  AND checklist_id = @checklist_id
		  AND lead_unit_name = @lead_unit_name
		  AND status NOT IN ('CLOSED', 'CANCELLED', 'DELETED')
		  AND deleted_at IS NULL
		LIMIT 1
	`, pgx.StrictNamedArgs{
		"tenant_id":      scope.GetTenantID(),
		"checklist_id":   checklistID,
		"lead_unit_name": leadUnitName,
	})
	if err != nil {
		return false, err
	}
	ids, err := pgx.CollectRows(rows, pgx.RowTo[string])
	if err != nil {
		return false, err
	}
	return len(ids) > 0, nil
}

// Create inserts a new assignment.
func (s *IcpmsAssignmentService) Create(
	ctx context.Context,
	scope coredata.Scoper,
	item *coredata.IcpmsAssignment,
) error {
	now := time.Now()
	item.ID = gid.New(scope.GetTenantID(), coredata.IcpmsAssignmentEntityType)
	item.TenantID = scope.GetTenantID()
	item.CreatedAt = now
	item.UpdatedAt = now
	if item.Status == "" {
		item.Status = coredata.IcpmsAssignmentStatusAssigned
	}
	if item.Priority == "" {
		item.Priority = "MEDIUM"
	}
	if item.CreatedFrom == "" {
		item.CreatedFrom = coredata.IcpmsAssignmentCreatedFromManual
	}
	if item.EvidenceStatus == "" {
		if item.RequiresEvidence {
			item.EvidenceStatus = coredata.IcpmsAssignmentEvidenceStatusRequiredNotSubmitted
		} else {
			item.EvidenceStatus = coredata.IcpmsAssignmentEvidenceStatusNotRequired
		}
	}
	if item.AssignedAt == nil && item.Status == coredata.IcpmsAssignmentStatusAssigned {
		item.AssignedAt = &now
	}

	return s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		// Anti-duplicate check
		if item.ChecklistID != nil {
			dup, err := s.findDuplicateActive(ctx, tx, scope, *item.ChecklistID, item.LeadUnitName)
			if err != nil {
				return err
			}
			if dup {
				return fmt.Errorf("duplicate: checklist already assigned to this unit with an active assignment")
			}
		}

		_, err := tx.Exec(ctx, `
			INSERT INTO icpms_assignments (
				tenant_id, id, organization_id,
				assignment_code, assignment_title, assignment_description,
				document_id, document_version_id, requirement_id, checklist_id,
				source_reference, requirement_text, checklist_question,
				lead_unit_name, coordination_unit_names,
				assignee_user_id, assignee_name, assigned_by, assigned_at,
				due_date, due_days, priority,
				status, progress_percent,
				current_status_text, action_plan_text, response_note,
				requires_evidence, evidence_status,
				created_from, ai_review_job_id, ai_review_suggestion_id,
				accepted_by_unit_at, started_at, submitted_at, completed_at, closed_at, cancelled_at,
				closed_by, cancelled_by, cancel_reason,
				created_at, updated_at
			) VALUES (
				@tenant_id, @id, @organization_id,
				@assignment_code, @assignment_title, @assignment_description,
				@document_id, @document_version_id, @requirement_id, @checklist_id,
				@source_reference, @requirement_text, @checklist_question,
				@lead_unit_name, @coordination_unit_names,
				@assignee_user_id, @assignee_name, @assigned_by, @assigned_at,
				@due_date, @due_days, @priority,
				@status, @progress_percent,
				@current_status_text, @action_plan_text, @response_note,
				@requires_evidence, @evidence_status,
				@created_from, @ai_review_job_id, @ai_review_suggestion_id,
				@accepted_by_unit_at, @started_at, @submitted_at, @completed_at, @closed_at, @cancelled_at,
				@closed_by, @cancelled_by, @cancel_reason,
				@created_at, @updated_at
			)
		`, pgx.StrictNamedArgs{
			"tenant_id":               item.TenantID,
			"id":                      item.ID,
			"organization_id":         item.OrganizationID,
			"assignment_code":         item.AssignmentCode,
			"assignment_title":        item.AssignmentTitle,
			"assignment_description":  item.AssignmentDescription,
			"document_id":             item.DocumentID,
			"document_version_id":     item.DocumentVersionID,
			"requirement_id":          item.RequirementID,
			"checklist_id":            item.ChecklistID,
			"source_reference":        item.SourceReference,
			"requirement_text":        item.RequirementText,
			"checklist_question":      item.ChecklistQuestion,
			"lead_unit_name":          item.LeadUnitName,
			"coordination_unit_names": item.CoordinationUnitNames,
			"assignee_user_id":        item.AssigneeUserID,
			"assignee_name":           item.AssigneeName,
			"assigned_by":             item.AssignedBy,
			"assigned_at":             item.AssignedAt,
			"due_date":                item.DueDate,
			"due_days":                item.DueDays,
			"priority":                item.Priority,
			"status":                  item.Status,
			"progress_percent":        item.ProgressPercent,
			"current_status_text":     item.CurrentStatusText,
			"action_plan_text":        item.ActionPlanText,
			"response_note":           item.ResponseNote,
			"requires_evidence":       item.RequiresEvidence,
			"evidence_status":         item.EvidenceStatus,
			"created_from":            item.CreatedFrom,
			"ai_review_job_id":        item.AiReviewJobID,
			"ai_review_suggestion_id": item.AiReviewSuggestionID,
			"accepted_by_unit_at":     item.AcceptedByUnitAt,
			"started_at":              item.StartedAt,
			"submitted_at":            item.SubmittedAt,
			"completed_at":            item.CompletedAt,
			"closed_at":               item.ClosedAt,
			"cancelled_at":            item.CancelledAt,
			"closed_by":               item.ClosedBy,
			"cancelled_by":            item.CancelledBy,
			"cancel_reason":           item.CancelReason,
			"created_at":              item.CreatedAt,
			"updated_at":              item.UpdatedAt,
		})
		return err
	})
}

// CreateFromChecklist creates an assignment from a checklist, pre-filling fields.
// Returns (assignment, isDuplicate, error).
func (s *IcpmsAssignmentService) CreateFromChecklist(
	ctx context.Context,
	scope coredata.Scoper,
	checklist *coredata.IcpmsChecklist,
	createdBy gid.GID,
	codePrefix string,
	leadUnitName string,
	coordinationUnitNames string,
	dueDate *time.Time,
	priority string,
	requiresEvidence bool,
	description string,
) (*coredata.IcpmsAssignment, bool, error) {
	// Check for duplicate
	var isDup bool
	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		var err error
		isDup, err = s.findDuplicateActive(ctx, conn, scope, checklist.ID, leadUnitName)
		return err
	})
	if err != nil {
		return nil, false, err
	}
	if isDup {
		return nil, true, nil
	}

	now := time.Now()
	shortID := checklist.ID.String()[len(checklist.ID.String())-6:]
	maxLen := 8
	if len(checklist.ChecklistCode) < maxLen {
		maxLen = len(checklist.ChecklistCode)
	}
	code := fmt.Sprintf("%s-%s-%s", codePrefix, strings.ToUpper(checklist.ChecklistCode[:maxLen]), shortID)

	title := fmt.Sprintf("Thực hiện: %s", checklist.ChecklistCode)
	if len(checklist.ChecklistQuestion) > 0 {
		q := checklist.ChecklistQuestion
		if len(q) > 60 {
			q = q[:60] + "..."
		}
		title = "Thực hiện checklist: " + q
	}

	if priority == "" {
		priority = checklist.Priority
	}
	if priority == "" {
		priority = "MEDIUM"
	}

	var coordPtr *string
	if coordinationUnitNames != "" {
		coordPtr = &coordinationUnitNames
	}
	var descPtr *string
	if description != "" {
		descPtr = &description
	}

	item := &coredata.IcpmsAssignment{
		OrganizationID:        checklist.OrganizationID,
		AssignmentCode:        code,
		AssignmentTitle:       title,
		AssignmentDescription: descPtr,
		DocumentID:            &checklist.DocumentID,
		DocumentVersionID:     &checklist.DocumentVersionID,
		RequirementID:         checklist.RequirementID,
		ChecklistID:           &checklist.ID,
		SourceReference:       checklist.SourceReference,
		RequirementText:       checklist.RequirementText,
		ChecklistQuestion:     &checklist.ChecklistQuestion,
		LeadUnitName:          leadUnitName,
		CoordinationUnitNames: coordPtr,
		AssignedBy:            &createdBy,
		AssignedAt:            &now,
		DueDate:               dueDate,
		Priority:              priority,
		Status:                coredata.IcpmsAssignmentStatusAssigned,
		RequiresEvidence:      requiresEvidence,
		CreatedFrom:           coredata.IcpmsAssignmentCreatedFromChecklist,
	}

	if err := s.Create(ctx, scope, item); err != nil {
		return nil, false, err
	}
	return item, false, nil
}


// Update saves changes to an existing assignment.
func (s *IcpmsAssignmentService) Update(
	ctx context.Context,
	scope coredata.Scoper,
	item *coredata.IcpmsAssignment,
) error {
	item.UpdatedAt = time.Now()
	return s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		_, err := tx.Exec(ctx, `
			UPDATE icpms_assignments SET
				assignment_title = @assignment_title,
				assignment_description = @assignment_description,
				lead_unit_name = @lead_unit_name,
				coordination_unit_names = @coordination_unit_names,
				assignee_user_id = @assignee_user_id,
				assignee_name = @assignee_name,
				due_date = @due_date,
				due_days = @due_days,
				priority = @priority,
				current_status_text = @current_status_text,
				action_plan_text = @action_plan_text,
				response_note = @response_note,
				progress_percent = @progress_percent,
				requires_evidence = @requires_evidence,
				updated_at = @updated_at
			WHERE tenant_id = @tenant_id AND id = @id AND deleted_at IS NULL
		`, pgx.StrictNamedArgs{
			"tenant_id":               item.TenantID,
			"id":                      item.ID,
			"assignment_title":        item.AssignmentTitle,
			"assignment_description":  item.AssignmentDescription,
			"lead_unit_name":          item.LeadUnitName,
			"coordination_unit_names": item.CoordinationUnitNames,
			"assignee_user_id":        item.AssigneeUserID,
			"assignee_name":           item.AssigneeName,
			"due_date":                item.DueDate,
			"due_days":                item.DueDays,
			"priority":                item.Priority,
			"current_status_text":     item.CurrentStatusText,
			"action_plan_text":        item.ActionPlanText,
			"response_note":           item.ResponseNote,
			"progress_percent":        item.ProgressPercent,
			"requires_evidence":       item.RequiresEvidence,
			"updated_at":              item.UpdatedAt,
		})
		return err
	})
}

// Accept transitions ASSIGNED → ACCEPTED.
func (s *IcpmsAssignmentService) Accept(ctx context.Context, scope coredata.Scoper, id gid.GID) (*coredata.IcpmsAssignment, error) {
	return s.transition(ctx, scope, id, coredata.IcpmsAssignmentStatusAssigned, coredata.IcpmsAssignmentStatusAccepted, func(item *coredata.IcpmsAssignment, now time.Time) {
		item.AcceptedByUnitAt = &now
	})
}

// Start transitions ACCEPTED/ASSIGNED → IN_PROGRESS.
func (s *IcpmsAssignmentService) Start(ctx context.Context, scope coredata.Scoper, id gid.GID) (*coredata.IcpmsAssignment, error) {
	item, err := s.Get(ctx, scope, id)
	if err != nil {
		return nil, err
	}
	now := time.Now()
	item.Status = coredata.IcpmsAssignmentStatusInProgress
	item.StartedAt = &now
	item.UpdatedAt = now
	if err := s.updateStatus(ctx, scope, item); err != nil {
		return nil, err
	}
	return item, nil
}

// SubmitUpdate saves progress update and transitions to SUBMITTED.
func (s *IcpmsAssignmentService) SubmitUpdate(
	ctx context.Context,
	scope coredata.Scoper,
	id gid.GID,
	currentStatusText, actionPlanText, responseNote string,
	progressPercent int,
) (*coredata.IcpmsAssignment, error) {
	item, err := s.Get(ctx, scope, id)
	if err != nil {
		return nil, err
	}
	now := time.Now()
	item.CurrentStatusText = strPtr(currentStatusText)
	item.ActionPlanText = strPtr(actionPlanText)
	item.ResponseNote = strPtr(responseNote)
	item.ProgressPercent = progressPercent
	item.Status = coredata.IcpmsAssignmentStatusSubmitted
	item.SubmittedAt = &now
	item.UpdatedAt = now
	if err := s.updateStatus(ctx, scope, item); err != nil {
		return nil, err
	}
	return item, nil
}

// Return transitions status → RETURNED with a reason.
func (s *IcpmsAssignmentService) Return(ctx context.Context, scope coredata.Scoper, id gid.GID, reason string) (*coredata.IcpmsAssignment, error) {
	item, err := s.Get(ctx, scope, id)
	if err != nil {
		return nil, err
	}
	now := time.Now()
	item.Status = coredata.IcpmsAssignmentStatusReturned
	item.ResponseNote = strPtr(reason)
	item.UpdatedAt = now
	if err := s.updateStatus(ctx, scope, item); err != nil {
		return nil, err
	}
	return item, nil
}

// Complete transitions → COMPLETED.
func (s *IcpmsAssignmentService) Complete(ctx context.Context, scope coredata.Scoper, id gid.GID) (*coredata.IcpmsAssignment, error) {
	item, err := s.Get(ctx, scope, id)
	if err != nil {
		return nil, err
	}
	now := time.Now()
	item.Status = coredata.IcpmsAssignmentStatusCompleted
	item.CompletedAt = &now
	item.UpdatedAt = now
	if err := s.updateStatus(ctx, scope, item); err != nil {
		return nil, err
	}
	return item, nil
}

// Close transitions → CLOSED by the assigner.
func (s *IcpmsAssignmentService) Close(ctx context.Context, scope coredata.Scoper, id gid.GID, closedBy gid.GID) (*coredata.IcpmsAssignment, error) {
	item, err := s.Get(ctx, scope, id)
	if err != nil {
		return nil, err
	}
	now := time.Now()
	item.Status = coredata.IcpmsAssignmentStatusClosed
	item.ClosedAt = &now
	item.ClosedBy = &closedBy
	item.UpdatedAt = now
	if err := s.updateStatus(ctx, scope, item); err != nil {
		return nil, err
	}
	return item, nil
}

// Cancel transitions → CANCELLED with a reason.
func (s *IcpmsAssignmentService) Cancel(ctx context.Context, scope coredata.Scoper, id gid.GID, cancelledBy gid.GID, reason string) (*coredata.IcpmsAssignment, error) {
	item, err := s.Get(ctx, scope, id)
	if err != nil {
		return nil, err
	}
	now := time.Now()
	item.Status = coredata.IcpmsAssignmentStatusCancelled
	item.CancelledAt = &now
	item.CancelledBy = &cancelledBy
	item.CancelReason = strPtr(reason)
	item.UpdatedAt = now
	if err := s.updateStatus(ctx, scope, item); err != nil {
		return nil, err
	}
	return item, nil
}

// Delete soft-deletes an assignment.
func (s *IcpmsAssignmentService) Delete(ctx context.Context, scope coredata.Scoper, id gid.GID) error {
	now := time.Now()
	return s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		_, err := tx.Exec(ctx, `
			UPDATE icpms_assignments
			SET status = 'DELETED', deleted_at = @now, updated_at = @now
			WHERE tenant_id = @tenant_id AND id = @id AND deleted_at IS NULL
		`, pgx.StrictNamedArgs{
			"tenant_id": scope.GetTenantID(),
			"id":        id,
			"now":       now,
		})
		return err
	})
}

// transition is a helper for simple status transitions.
func (s *IcpmsAssignmentService) transition(
	ctx context.Context,
	scope coredata.Scoper,
	id gid.GID,
	_ coredata.IcpmsAssignmentStatus,
	toStatus coredata.IcpmsAssignmentStatus,
	mutate func(*coredata.IcpmsAssignment, time.Time),
) (*coredata.IcpmsAssignment, error) {
	item, err := s.Get(ctx, scope, id)
	if err != nil {
		return nil, err
	}
	now := time.Now()
	item.Status = toStatus
	item.UpdatedAt = now
	mutate(item, now)
	if err := s.updateStatus(ctx, scope, item); err != nil {
		return nil, err
	}
	return item, nil
}

// updateStatus updates status, progress, and key timestamp fields.
func (s *IcpmsAssignmentService) updateStatus(ctx context.Context, scope coredata.Scoper, item *coredata.IcpmsAssignment) error {
	return s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		_, err := tx.Exec(ctx, `
			UPDATE icpms_assignments SET
				status = @status,
				progress_percent = @progress_percent,
				current_status_text = @current_status_text,
				action_plan_text = @action_plan_text,
				response_note = @response_note,
				accepted_by_unit_at = @accepted_by_unit_at,
				started_at = @started_at,
				submitted_at = @submitted_at,
				completed_at = @completed_at,
				closed_at = @closed_at,
				closed_by = @closed_by,
				cancelled_at = @cancelled_at,
				cancelled_by = @cancelled_by,
				cancel_reason = @cancel_reason,
				updated_at = @updated_at
			WHERE tenant_id = @tenant_id AND id = @id AND deleted_at IS NULL
		`, pgx.StrictNamedArgs{
			"tenant_id":            item.TenantID,
			"id":                   item.ID,
			"status":               item.Status,
			"progress_percent":     item.ProgressPercent,
			"current_status_text":  item.CurrentStatusText,
			"action_plan_text":     item.ActionPlanText,
			"response_note":        item.ResponseNote,
			"accepted_by_unit_at":  item.AcceptedByUnitAt,
			"started_at":           item.StartedAt,
			"submitted_at":         item.SubmittedAt,
			"completed_at":         item.CompletedAt,
			"closed_at":            item.ClosedAt,
			"closed_by":            item.ClosedBy,
			"cancelled_at":         item.CancelledAt,
			"cancelled_by":         item.CancelledBy,
			"cancel_reason":        item.CancelReason,
			"updated_at":           item.UpdatedAt,
		})
		return err
	})
}

