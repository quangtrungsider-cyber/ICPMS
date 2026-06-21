// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package probo

import (
	"context"
	"fmt"
	"strings"
	"time"

	"github.com/jackc/pgx/v5"
	"go.gearno.de/kit/pg"
	"go.probo.inc/probo/pkg/coredata"
	"go.probo.inc/probo/pkg/gid"
)

// IcpmsChecklistService handles checklist business logic.
type IcpmsChecklistService struct {
	svc *Service
}

// ListForOrganization returns all non-deleted checklists for an organization.
func (s *IcpmsChecklistService) ListForOrganization(
	ctx context.Context,
	scope coredata.Scoper,
	organizationID gid.GID,
) ([]*coredata.IcpmsChecklist, error) {
	var items []*coredata.IcpmsChecklist
	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		rows, err := conn.Query(ctx, `
			SELECT * FROM icpms_checklists
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
		items, err = pgx.CollectRows(rows, pgx.RowToAddrOfStructByName[coredata.IcpmsChecklist])
		return err
	})
	return items, err
}

// ListForDocument returns checklists scoped to a specific document version.
func (s *IcpmsChecklistService) ListForDocument(
	ctx context.Context,
	scope coredata.Scoper,
	documentID gid.GID,
	documentVersionID *gid.GID,
) ([]*coredata.IcpmsChecklist, error) {
	var items []*coredata.IcpmsChecklist
	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		query := `
			SELECT * FROM icpms_checklists
			WHERE tenant_id = @tenant_id
			  AND document_id = @doc_id
			  AND deleted_at IS NULL`
		args := pgx.StrictNamedArgs{
			"tenant_id": scope.GetTenantID(),
			"doc_id":    documentID,
		}
		if documentVersionID != nil {
			query += " AND document_version_id = @doc_ver_id"
			args["doc_ver_id"] = *documentVersionID
		}
		query += " ORDER BY created_at DESC"
		rows, err := conn.Query(ctx, query, args)
		if err != nil {
			return err
		}
		items, err = pgx.CollectRows(rows, pgx.RowToAddrOfStructByName[coredata.IcpmsChecklist])
		return err
	})
	return items, err
}

// ListForRequirement returns checklists linked to a requirement.
func (s *IcpmsChecklistService) ListForRequirement(
	ctx context.Context,
	scope coredata.Scoper,
	requirementID gid.GID,
) ([]*coredata.IcpmsChecklist, error) {
	var items []*coredata.IcpmsChecklist
	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		rows, err := conn.Query(ctx, `
			SELECT * FROM icpms_checklists
			WHERE tenant_id = @tenant_id
			  AND requirement_id = @req_id
			  AND deleted_at IS NULL
			ORDER BY created_at DESC
		`, pgx.StrictNamedArgs{
			"tenant_id": scope.GetTenantID(),
			"req_id":    requirementID,
		})
		if err != nil {
			return err
		}
		items, err = pgx.CollectRows(rows, pgx.RowToAddrOfStructByName[coredata.IcpmsChecklist])
		return err
	})
	return items, err
}

// Get fetches a single checklist by ID.
func (s *IcpmsChecklistService) Get(
	ctx context.Context,
	scope coredata.Scoper,
	id gid.GID,
) (*coredata.IcpmsChecklist, error) {
	var item coredata.IcpmsChecklist
	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		rows, err := conn.Query(ctx, `
			SELECT * FROM icpms_checklists
			WHERE tenant_id = @tenant_id AND id = @id AND deleted_at IS NULL
			LIMIT 1
		`, pgx.StrictNamedArgs{
			"tenant_id": scope.GetTenantID(),
			"id":        id,
		})
		if err != nil {
			return err
		}
		item, err = pgx.CollectOneRow(rows, pgx.RowToStructByName[coredata.IcpmsChecklist])
		return err
	})
	if err != nil {
		return nil, err
	}
	return &item, nil
}

// Create inserts a new checklist.
func (s *IcpmsChecklistService) Create(
	ctx context.Context,
	scope coredata.Scoper,
	item *coredata.IcpmsChecklist,
) error {
	now := time.Now()
	item.ID = gid.New(scope.GetTenantID(), coredata.IcpmsChecklistEntityType)
	item.TenantID = scope.GetTenantID()
	item.CreatedAt = now
	item.UpdatedAt = now
	if item.Status == "" {
		item.Status = coredata.IcpmsChecklistStatusNeedsReview
	}
	if item.ApprovalStatus == "" {
		item.ApprovalStatus = coredata.IcpmsChecklistApprovalStatusPendingReview
	}
	if item.CreatedFrom == "" {
		item.CreatedFrom = coredata.IcpmsChecklistCreatedFromManual
	}
	if item.Priority == "" {
		item.Priority = "MEDIUM"
	}

	return s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		_, err := tx.Exec(ctx, `
			INSERT INTO icpms_checklists (
				tenant_id, id, organization_id, document_id, document_version_id,
				requirement_id, ai_review_job_id, ai_review_suggestion_id,
				checklist_code, checklist_question, requirement_text, source_reference, source_text,
				implementation_method, responsible_unit, responsible_role, required_evidence,
				current_status_text, action_plan, risk_if_not_complied,
				priority, compliance_domain, frequency, due_days,
				status, approval_status, created_from, created_by,
				created_at, updated_at
			) VALUES (
				@tenant_id, @id, @org_id, @doc_id, @doc_ver_id,
				@req_id, @ai_job_id, @ai_sug_id,
				@code, @question, @req_text, @source_ref, @source_text,
				@impl_method, @responsible_unit, @responsible_role, @required_evidence,
				@current_status_text, @action_plan, @risk,
				@priority, @compliance_domain, @frequency, @due_days,
				@status, @approval_status, @created_from, @created_by,
				@created_at, @updated_at
			)`,
			pgx.StrictNamedArgs{
				"tenant_id":           item.TenantID,
				"id":                  item.ID,
				"org_id":              item.OrganizationID,
				"doc_id":              item.DocumentID,
				"doc_ver_id":          item.DocumentVersionID,
				"req_id":              item.RequirementID,
				"ai_job_id":           item.AiReviewJobID,
				"ai_sug_id":           item.AiReviewSuggestionID,
				"code":                item.ChecklistCode,
				"question":            item.ChecklistQuestion,
				"req_text":            item.RequirementText,
				"source_ref":          item.SourceReference,
				"source_text":         item.SourceText,
				"impl_method":         item.ImplementationMethod,
				"responsible_unit":    item.ResponsibleUnit,
				"responsible_role":    item.ResponsibleRole,
				"required_evidence":   item.RequiredEvidence,
				"current_status_text": item.CurrentStatusText,
				"action_plan":         item.ActionPlan,
				"risk":                item.RiskIfNotComplied,
				"priority":            item.Priority,
				"compliance_domain":   item.ComplianceDomain,
				"frequency":           item.Frequency,
				"due_days":            item.DueDays,
				"status":              item.Status,
				"approval_status":     item.ApprovalStatus,
				"created_from":        item.CreatedFrom,
				"created_by":          item.CreatedBy,
				"created_at":          item.CreatedAt,
				"updated_at":          item.UpdatedAt,
			},
		)
		return err
	})
}

// Update persists changes to a checklist.
func (s *IcpmsChecklistService) Update(
	ctx context.Context,
	scope coredata.Scoper,
	item *coredata.IcpmsChecklist,
) error {
	item.UpdatedAt = time.Now()
	return s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		_, err := tx.Exec(ctx, `
			UPDATE icpms_checklists SET
				checklist_question   = @question,
				implementation_method = @impl_method,
				responsible_unit     = @responsible_unit,
				responsible_role     = @responsible_role,
				required_evidence    = @required_evidence,
				current_status_text  = @current_status_text,
				action_plan          = @action_plan,
				risk_if_not_complied = @risk,
				priority             = @priority,
				compliance_domain    = @compliance_domain,
				frequency            = @frequency,
				due_days             = @due_days,
				source_reference     = @source_ref,
				status               = @status,
				updated_at           = @updated_at
			WHERE tenant_id = @tenant_id AND id = @id AND deleted_at IS NULL
		`, pgx.StrictNamedArgs{
			"question":            item.ChecklistQuestion,
			"impl_method":         item.ImplementationMethod,
			"responsible_unit":    item.ResponsibleUnit,
			"responsible_role":    item.ResponsibleRole,
			"required_evidence":   item.RequiredEvidence,
			"current_status_text": item.CurrentStatusText,
			"action_plan":         item.ActionPlan,
			"risk":                item.RiskIfNotComplied,
			"priority":            item.Priority,
			"compliance_domain":   item.ComplianceDomain,
			"frequency":           item.Frequency,
			"due_days":            item.DueDays,
			"source_ref":          item.SourceReference,
			"status":              item.Status,
			"updated_at":          item.UpdatedAt,
			"tenant_id":           scope.GetTenantID(),
			"id":                  item.ID,
		})
		return err
	})
}

// Approve sets approval_status = APPROVED, status = ACTIVE.
func (s *IcpmsChecklistService) Approve(
	ctx context.Context,
	scope coredata.Scoper,
	id gid.GID,
	approvedBy gid.GID,
) (*coredata.IcpmsChecklist, error) {
	now := time.Now()
	err := s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		_, err := tx.Exec(ctx, `
			UPDATE icpms_checklists SET
				approval_status = 'APPROVED',
				status          = 'ACTIVE',
				approved_by     = @approved_by,
				approved_at     = @approved_at,
				updated_at      = @updated_at
			WHERE tenant_id = @tenant_id AND id = @id AND deleted_at IS NULL
		`, pgx.StrictNamedArgs{
			"approved_by":  approvedBy,
			"approved_at":  now,
			"updated_at":   now,
			"tenant_id":    scope.GetTenantID(),
			"id":           id,
		})
		return err
	})
	if err != nil {
		return nil, fmt.Errorf("cannot approve checklist: %w", err)
	}
	return s.Get(ctx, scope, id)
}

// Reject sets approval_status = REJECTED.
func (s *IcpmsChecklistService) Reject(
	ctx context.Context,
	scope coredata.Scoper,
	id gid.GID,
	rejectedBy gid.GID,
	reason string,
) (*coredata.IcpmsChecklist, error) {
	now := time.Now()
	err := s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		_, err := tx.Exec(ctx, `
			UPDATE icpms_checklists SET
				approval_status  = 'REJECTED',
				rejected_by      = @rejected_by,
				rejected_at      = @rejected_at,
				rejection_reason = @reason,
				updated_at       = @updated_at
			WHERE tenant_id = @tenant_id AND id = @id AND deleted_at IS NULL
		`, pgx.StrictNamedArgs{
			"rejected_by": rejectedBy,
			"rejected_at": now,
			"reason":      reason,
			"updated_at":  now,
			"tenant_id":   scope.GetTenantID(),
			"id":          id,
		})
		return err
	})
	if err != nil {
		return nil, fmt.Errorf("cannot reject checklist: %w", err)
	}
	return s.Get(ctx, scope, id)
}

// RequestRevision sets approval_status = NEEDS_REVISION.
func (s *IcpmsChecklistService) RequestRevision(
	ctx context.Context,
	scope coredata.Scoper,
	id gid.GID,
	reason string,
) (*coredata.IcpmsChecklist, error) {
	now := time.Now()
	err := s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		_, err := tx.Exec(ctx, `
			UPDATE icpms_checklists SET
				approval_status  = 'NEEDS_REVISION',
				rejection_reason = @reason,
				updated_at       = @updated_at
			WHERE tenant_id = @tenant_id AND id = @id AND deleted_at IS NULL
		`, pgx.StrictNamedArgs{
			"reason":    reason,
			"updated_at": now,
			"tenant_id": scope.GetTenantID(),
			"id":        id,
		})
		return err
	})
	if err != nil {
		return nil, fmt.Errorf("cannot request revision: %w", err)
	}
	return s.Get(ctx, scope, id)
}

// Archive sets status = ARCHIVED.
func (s *IcpmsChecklistService) Archive(
	ctx context.Context,
	scope coredata.Scoper,
	id gid.GID,
) (*coredata.IcpmsChecklist, error) {
	now := time.Now()
	err := s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		_, err := tx.Exec(ctx, `
			UPDATE icpms_checklists SET status = 'ARCHIVED', updated_at = @updated_at
			WHERE tenant_id = @tenant_id AND id = @id AND deleted_at IS NULL
		`, pgx.StrictNamedArgs{
			"updated_at": now,
			"tenant_id":  scope.GetTenantID(),
			"id":         id,
		})
		return err
	})
	if err != nil {
		return nil, fmt.Errorf("cannot archive checklist: %w", err)
	}
	return s.Get(ctx, scope, id)
}

// Delete soft-deletes a checklist.
func (s *IcpmsChecklistService) Delete(
	ctx context.Context,
	scope coredata.Scoper,
	id gid.GID,
) error {
	now := time.Now()
	return s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		_, err := tx.Exec(ctx, `
			UPDATE icpms_checklists SET deleted_at = @deleted_at, status = 'DELETED', updated_at = @updated_at
			WHERE tenant_id = @tenant_id AND id = @id AND deleted_at IS NULL
		`, pgx.StrictNamedArgs{
			"deleted_at": now,
			"updated_at": now,
			"tenant_id":  scope.GetTenantID(),
			"id":         id,
		})
		return err
	})
}

// CreateFromAiSuggestion creates a checklist from an accepted AI Review suggestion.
// Returns the existing checklist if one already exists for the same suggestion.
func (s *IcpmsChecklistService) CreateFromAiSuggestion(
	ctx context.Context,
	scope coredata.Scoper,
	sug *coredata.IcpmsAiReviewSuggestion,
	createdBy gid.GID,
	codePrefix string,
) (*coredata.IcpmsChecklist, bool, error) {
	// Check for duplicate
	existing, err := s.findBySuggestionID(ctx, scope, sug.ID)
	if err == nil && existing != nil {
		return existing, false, nil
	}

	req, err := s.svc.IcpmsRequirements.Get(ctx, scope, sug.RequirementID)
	if err != nil {
		return nil, false, fmt.Errorf("cannot load requirement: %w", err)
	}

	question := ""
	if sug.SuggestedChecklistQuestion != nil {
		question = *sug.SuggestedChecklistQuestion
	} else {
		question = req.Title
	}

	sourceRef := ""
	if req.Description != nil {
		sourceRef = truncate(*req.Description, 500)
	}

	// Generate business code: CHK-[DOCUMENT_CODE]-[YEAR]-[SEQ] if document_code is set.
	fallbackChkCode := fmt.Sprintf("%s-%s", codePrefix, sug.ID.String()[len(sug.ID.String())-6:])
	chkCode := fallbackChkCode
	if chkDoc, docErr := s.svc.IcpmsDocuments.Get(ctx, scope, sug.DocumentID); docErr == nil {
		chkCode = s.svc.IcpmsCodes.BusinessCodeForDocument(ctx, scope, sug.OrganizationID, "CHK", chkDoc, fallbackChkCode)
	}

	item := &coredata.IcpmsChecklist{
		OrganizationID:       sug.OrganizationID,
		DocumentID:           sug.DocumentID,
		DocumentVersionID:    sug.DocumentVersionID,
		RequirementID:        &sug.RequirementID,
		AiReviewJobID:        &sug.AiReviewJobID,
		AiReviewSuggestionID: &sug.ID,
		ChecklistCode:        chkCode,
		ChecklistQuestion:    question,
		RequirementText:      strPtr(req.Title),
		SourceReference:      strPtr(sourceRef),
		ImplementationMethod: sug.SuggestedImplementationMethod,
		ResponsibleUnit:      sug.SuggestedResponsibleUnit,
		ResponsibleRole:      sug.SuggestedResponsibleRole,
		RequiredEvidence:     sug.SuggestedEvidence,
		CurrentStatusText:    sug.SuggestedCurrentStatus,
		ActionPlan:           sug.SuggestedActionPlan,
		RiskIfNotComplied:    sug.SuggestedRiskIfNotComplied,
		Priority:             coalesceStr(sug.SuggestedPriority, "MEDIUM"),
		ComplianceDomain:     sug.SuggestedComplianceDomain,
		Status:               coredata.IcpmsChecklistStatusNeedsReview,
		ApprovalStatus:       coredata.IcpmsChecklistApprovalStatusPendingReview,
		CreatedFrom:          coredata.IcpmsChecklistCreatedFromAiReview,
		CreatedBy:            &createdBy,
	}

	if err := s.Create(ctx, scope, item); err != nil {
		return nil, false, err
	}
	return item, true, nil
}

// findBySuggestionID returns a checklist if one already exists for this suggestion.
func (s *IcpmsChecklistService) findBySuggestionID(
	ctx context.Context,
	scope coredata.Scoper,
	suggestionID gid.GID,
) (*coredata.IcpmsChecklist, error) {
	var item coredata.IcpmsChecklist
	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		rows, err := conn.Query(ctx, `
			SELECT * FROM icpms_checklists
			WHERE tenant_id = @tenant_id AND ai_review_suggestion_id = @sug_id AND deleted_at IS NULL
			LIMIT 1
		`, pgx.StrictNamedArgs{
			"tenant_id": scope.GetTenantID(),
			"sug_id":    suggestionID,
		})
		if err != nil {
			return err
		}
		item, err = pgx.CollectOneRow(rows, pgx.RowToStructByName[coredata.IcpmsChecklist])
		return err
	})
	if err != nil {
		return nil, err
	}
	return &item, nil
}

func strPtr(s string) *string {
	if s == "" {
		return nil
	}
	return &s
}

func coalesceStr(p *string, fallback string) string {
	if p != nil && *p != "" {
		return *p
	}
	return fallback
}

func truncate(s string, max int) string {
	runes := []rune(strings.TrimSpace(s))
	if len(runes) <= max {
		return string(runes)
	}
	return string(runes[:max])
}
