// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package probo

import (
	"context"
	"errors"
	"fmt"
	"time"

	"github.com/jackc/pgx/v5"
	"go.gearno.de/kit/pg"
	"go.probo.inc/probo/pkg/coredata"
	"go.probo.inc/probo/pkg/gid"
)

type IcpmsAiReviewService struct {
	svc *Service
}

func (s *IcpmsAiReviewService) Get(
	ctx context.Context,
	scope coredata.Scoper,
	jobID gid.GID,
) (*coredata.IcpmsAiReviewJob, error) {
	var job coredata.IcpmsAiReviewJob
	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		rows, err := conn.Query(ctx,
			`SELECT * FROM icpms_ai_review_jobs WHERE tenant_id = @tenant_id AND id = @id AND deleted_at IS NULL`,
			pgx.StrictNamedArgs{
				"tenant_id": scope.GetTenantID(),
				"id":        jobID,
			},
		)
		if err != nil {
			return err
		}
		job, err = pgx.CollectExactlyOneRow(rows, pgx.RowToStructByName[coredata.IcpmsAiReviewJob])
		return err
	})
	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			return nil, fmt.Errorf("ai review job not found")
		}
		return nil, err
	}
	return &job, nil
}

func (s *IcpmsAiReviewService) ListForOrganization(
	ctx context.Context,
	scope coredata.Scoper,
	orgID gid.GID,
) ([]*coredata.IcpmsAiReviewJob, error) {
	var jobs []*coredata.IcpmsAiReviewJob
	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		rows, err := conn.Query(ctx,
			`SELECT * FROM icpms_ai_review_jobs WHERE tenant_id = @tenant_id AND organization_id = @org_id AND deleted_at IS NULL ORDER BY created_at DESC LIMIT 100`,
			pgx.StrictNamedArgs{
				"tenant_id": scope.GetTenantID(),
				"org_id":    orgID,
			},
		)
		if err != nil {
			return err
		}
		jobs, err = pgx.CollectRows(rows, pgx.RowToAddrOfStructByName[coredata.IcpmsAiReviewJob])
		return err
	})
	return jobs, err
}

func (s *IcpmsAiReviewService) Create(
	ctx context.Context,
	scope coredata.Scoper,
	job *coredata.IcpmsAiReviewJob,
) error {
	job.ID = gid.New(scope.GetTenantID(), coredata.IcpmsAiReviewJobEntityType)
	return s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		_, err := tx.Exec(ctx, `
			INSERT INTO icpms_ai_review_jobs (
				id, tenant_id, organization_id, document_id, document_version_id,
				job_code, review_scope, status, progress_percent,
				total_requirements, processed_requirements, total_suggestions,
				total_accepted, total_rejected, ai_provider, ai_model,
				error_message, warning_message, created_by, started_at, finished_at,
				created_at, updated_at
			) VALUES (
				@id, @tenant_id, @organization_id, @document_id, @document_version_id,
				@job_code, @review_scope, @status, @progress_percent,
				@total_requirements, @processed_requirements, @total_suggestions,
				@total_accepted, @total_rejected, @ai_provider, @ai_model,
				@error_message, @warning_message, @created_by, @started_at, @finished_at,
				NOW(), NOW()
			)`,
			pgx.StrictNamedArgs{
				"id":                     job.ID,
				"tenant_id":              scope.GetTenantID(),
				"organization_id":        job.OrganizationID,
				"document_id":            job.DocumentID,
				"document_version_id":    job.DocumentVersionID,
				"job_code":               job.JobCode,
				"review_scope":           job.ReviewScope,
				"status":                 job.Status,
				"progress_percent":       job.ProgressPercent,
				"total_requirements":     job.TotalRequirements,
				"processed_requirements": job.ProcessedRequirements,
				"total_suggestions":      job.TotalSuggestions,
				"total_accepted":         job.TotalAccepted,
				"total_rejected":         job.TotalRejected,
				"ai_provider":            job.AiProvider,
				"ai_model":               job.AiModel,
				"error_message":          job.ErrorMessage,
				"warning_message":        job.WarningMessage,
				"created_by":             job.CreatedBy,
				"started_at":             job.StartedAt,
				"finished_at":            job.FinishedAt,
			},
		)
		return err
	})
}

func (s *IcpmsAiReviewService) updateJob(
	ctx context.Context,
	job *coredata.IcpmsAiReviewJob,
) error {
	return s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		_, err := tx.Exec(ctx, `
			UPDATE icpms_ai_review_jobs SET
				status = @status,
				progress_percent = @progress_percent,
				total_requirements = @total_requirements,
				processed_requirements = @processed_requirements,
				total_suggestions = @total_suggestions,
				total_accepted = @total_accepted,
				total_rejected = @total_rejected,
				error_message = @error_message,
				warning_message = @warning_message,
				started_at = @started_at,
				finished_at = @finished_at,
				updated_at = NOW()
			WHERE id = @id AND tenant_id = @tenant_id`,
			pgx.StrictNamedArgs{
				"id":                     job.ID,
				"tenant_id":              job.TenantID,
				"status":                 job.Status,
				"progress_percent":       job.ProgressPercent,
				"total_requirements":     job.TotalRequirements,
				"processed_requirements": job.ProcessedRequirements,
				"total_suggestions":      job.TotalSuggestions,
				"total_accepted":         job.TotalAccepted,
				"total_rejected":         job.TotalRejected,
				"error_message":          job.ErrorMessage,
				"warning_message":        job.WarningMessage,
				"started_at":             job.StartedAt,
				"finished_at":            job.FinishedAt,
			},
		)
		return err
	})
}

func (s *IcpmsAiReviewService) createSuggestion(
	ctx context.Context,
	sug *coredata.IcpmsAiReviewSuggestion,
) error {
	sug.ID = gid.New(sug.TenantID, coredata.IcpmsAiReviewSuggestionEntityType)
	return s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		_, err := tx.Exec(ctx, `
			INSERT INTO icpms_ai_review_suggestions (
				id, tenant_id, organization_id, ai_review_job_id, requirement_id,
				document_id, document_version_id,
				suggested_implementation_method, suggested_responsible_unit,
				suggested_responsible_role, suggested_evidence, suggested_current_status,
				suggested_action_plan, suggested_checklist_question,
				suggested_risk_if_not_complied, suggested_plain_language_text,
				suggested_requirement_type, suggested_applicability_status,
				suggested_priority, suggested_compliance_domain,
				ai_confidence, status, created_at, updated_at
			) VALUES (
				@id, @tenant_id, @organization_id, @ai_review_job_id, @requirement_id,
				@document_id, @document_version_id,
				@suggested_implementation_method, @suggested_responsible_unit,
				@suggested_responsible_role, @suggested_evidence, @suggested_current_status,
				@suggested_action_plan, @suggested_checklist_question,
				@suggested_risk_if_not_complied, @suggested_plain_language_text,
				@suggested_requirement_type, @suggested_applicability_status,
				@suggested_priority, @suggested_compliance_domain,
				@ai_confidence, @status, NOW(), NOW()
			)`,
			pgx.StrictNamedArgs{
				"id":                              sug.ID,
				"tenant_id":                       sug.TenantID,
				"organization_id":                 sug.OrganizationID,
				"ai_review_job_id":                sug.AiReviewJobID,
				"requirement_id":                  sug.RequirementID,
				"document_id":                     sug.DocumentID,
				"document_version_id":             sug.DocumentVersionID,
				"suggested_implementation_method": sug.SuggestedImplementationMethod,
				"suggested_responsible_unit":      sug.SuggestedResponsibleUnit,
				"suggested_responsible_role":      sug.SuggestedResponsibleRole,
				"suggested_evidence":              sug.SuggestedEvidence,
				"suggested_current_status":        sug.SuggestedCurrentStatus,
				"suggested_action_plan":           sug.SuggestedActionPlan,
				"suggested_checklist_question":    sug.SuggestedChecklistQuestion,
				"suggested_risk_if_not_complied":  sug.SuggestedRiskIfNotComplied,
				"suggested_plain_language_text":   sug.SuggestedPlainLanguageText,
				"suggested_requirement_type":      sug.SuggestedRequirementType,
				"suggested_applicability_status":  sug.SuggestedApplicabilityStatus,
				"suggested_priority":              sug.SuggestedPriority,
				"suggested_compliance_domain":     sug.SuggestedComplianceDomain,
				"ai_confidence":                   sug.AiConfidence,
				"status":                          sug.Status,
			},
		)
		return err
	})
}

// ListSuggestionsForJob returns all non-deleted suggestions for a given job.
func (s *IcpmsAiReviewService) ListSuggestionsForJob(
	ctx context.Context,
	scope coredata.Scoper,
	jobID gid.GID,
	statusFilter *coredata.IcpmsAiReviewSuggestionStatus,
) ([]*coredata.IcpmsAiReviewSuggestion, error) {
	query := `SELECT * FROM icpms_ai_review_suggestions WHERE tenant_id = @tenant_id AND ai_review_job_id = @job_id AND deleted_at IS NULL`
	args := pgx.NamedArgs{
		"tenant_id": scope.GetTenantID(),
		"job_id":    jobID,
	}
	if statusFilter != nil {
		query += ` AND status = @status`
		args["status"] = *statusFilter
	}
	query += ` ORDER BY created_at ASC`

	var sugs []*coredata.IcpmsAiReviewSuggestion
	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		rows, err := conn.Query(ctx, query, args)
		if err != nil {
			return err
		}
		sugs, err = pgx.CollectRows(rows, pgx.RowToAddrOfStructByName[coredata.IcpmsAiReviewSuggestion])
		return err
	})
	return sugs, err
}

// GetSuggestion returns a single suggestion by ID.
func (s *IcpmsAiReviewService) GetSuggestion(
	ctx context.Context,
	scope coredata.Scoper,
	id gid.GID,
) (*coredata.IcpmsAiReviewSuggestion, error) {
	var sug coredata.IcpmsAiReviewSuggestion
	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		rows, err := conn.Query(ctx,
			`SELECT * FROM icpms_ai_review_suggestions WHERE tenant_id = @tenant_id AND id = @id AND deleted_at IS NULL`,
			pgx.StrictNamedArgs{"tenant_id": scope.GetTenantID(), "id": id},
		)
		if err != nil {
			return err
		}
		sug, err = pgx.CollectExactlyOneRow(rows, pgx.RowToStructByName[coredata.IcpmsAiReviewSuggestion])
		return err
	})
	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			return nil, fmt.Errorf("suggestion not found")
		}
		return nil, err
	}
	return &sug, nil
}

// AcceptSuggestion marks a suggestion as ACCEPTED by a user. AI cannot auto-accept.
func (s *IcpmsAiReviewService) AcceptSuggestion(
	ctx context.Context,
	scope coredata.Scoper,
	id gid.GID,
	acceptedBy gid.GID,
) (*coredata.IcpmsAiReviewSuggestion, error) {
	sug, err := s.GetSuggestion(ctx, scope, id)
	if err != nil {
		return nil, err
	}
	now := time.Now()
	sug.Status = coredata.IcpmsAiReviewSuggestionStatusAccepted
	sug.AcceptedBy = &acceptedBy
	sug.AcceptedAt = &now

	err = s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		_, err := tx.Exec(ctx, `
			UPDATE icpms_ai_review_suggestions SET
				status = @status, accepted_by = @accepted_by, accepted_at = @accepted_at, updated_at = NOW()
			WHERE id = @id AND tenant_id = @tenant_id`,
			pgx.StrictNamedArgs{
				"id":          id,
				"tenant_id":   scope.GetTenantID(),
				"status":      sug.Status,
				"accepted_by": acceptedBy,
				"accepted_at": now,
			},
		)
		if err != nil {
			return err
		}
		// Update job counter
		_, err = tx.Exec(ctx, `
			UPDATE icpms_ai_review_jobs SET total_accepted = total_accepted + 1, updated_at = NOW()
			WHERE id = @job_id AND tenant_id = @tenant_id`,
			pgx.StrictNamedArgs{"job_id": sug.AiReviewJobID, "tenant_id": scope.GetTenantID()},
		)
		return err
	})
	return sug, err
}

// RejectSuggestion marks a suggestion as REJECTED by a user. AI cannot auto-reject.
func (s *IcpmsAiReviewService) RejectSuggestion(
	ctx context.Context,
	scope coredata.Scoper,
	id gid.GID,
	rejectedBy gid.GID,
	reason *string,
) (*coredata.IcpmsAiReviewSuggestion, error) {
	sug, err := s.GetSuggestion(ctx, scope, id)
	if err != nil {
		return nil, err
	}
	now := time.Now()
	sug.Status = coredata.IcpmsAiReviewSuggestionStatusRejected
	sug.RejectedBy = &rejectedBy
	sug.RejectedAt = &now
	sug.RejectionReason = reason

	err = s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		_, err := tx.Exec(ctx, `
			UPDATE icpms_ai_review_suggestions SET
				status = @status, rejected_by = @rejected_by, rejected_at = @rejected_at,
				rejection_reason = @rejection_reason, updated_at = NOW()
			WHERE id = @id AND tenant_id = @tenant_id`,
			pgx.StrictNamedArgs{
				"id":               id,
				"tenant_id":        scope.GetTenantID(),
				"status":           sug.Status,
				"rejected_by":      rejectedBy,
				"rejected_at":      now,
				"rejection_reason": reason,
			},
		)
		if err != nil {
			return err
		}
		_, err = tx.Exec(ctx, `
			UPDATE icpms_ai_review_jobs SET total_rejected = total_rejected + 1, updated_at = NOW()
			WHERE id = @job_id AND tenant_id = @tenant_id`,
			pgx.StrictNamedArgs{"job_id": sug.AiReviewJobID, "tenant_id": scope.GetTenantID()},
		)
		return err
	})
	return sug, err
}

// RunJob processes the review job synchronously. Call in a goroutine.
func (s *IcpmsAiReviewService) RunJob(
	ctx context.Context,
	scope coredata.Scoper,
	job *coredata.IcpmsAiReviewJob,
	provider AIReviewProvider,
) error {
	now := time.Now()
	job.Status = coredata.IcpmsAiReviewJobStatusRunning
	job.StartedAt = &now
	if err := s.updateJob(ctx, job); err != nil {
		return fmt.Errorf("cannot mark job running: %w", err)
	}

	// Load requirements for this document version
	filter := &IcpmsRequirementsFilter{}
	reqs, err := s.svc.IcpmsRequirements.List(ctx, scope, job.OrganizationID, filter)
	if err != nil {
		errMsg := err.Error()
		job.Status = coredata.IcpmsAiReviewJobStatusFailed
		job.ErrorMessage = &errMsg
		finishedAt := time.Now()
		job.FinishedAt = &finishedAt
		_ = s.updateJob(ctx, job)
		return fmt.Errorf("cannot list requirements: %w", err)
	}

	// Filter by document version if needed
	var filtered []*coredata.IcpmsRequirement
	for _, r := range reqs {
		if r.DocumentVersionID == job.DocumentVersionID {
			filtered = append(filtered, r)
		}
	}

	if job.ReviewScope == coredata.IcpmsAiReviewScopeNeedsReview {
		var needsReview []*coredata.IcpmsRequirement
		for _, r := range filtered {
			if r.ReviewStatus == coredata.IcpmsRequirementReviewStatusNeedsReview ||
				r.ReviewStatus == coredata.IcpmsRequirementReviewStatusCandidate {
				needsReview = append(needsReview, r)
			}
		}
		filtered = needsReview
	}

	job.TotalRequirements = len(filtered)
	if err := s.updateJob(ctx, job); err != nil {
		return fmt.Errorf("cannot update job total: %w", err)
	}

	created := 0
	for i, req := range filtered {
		lang := "en"
		if req.KeywordMatches != nil {
			lang = "vi"
		}

		input := AIReviewInput{
			RequirementCode: req.RequirementCode,
			Title:           req.Title,
			Language:        lang,
		}
		if req.Description != nil {
			input.Description = *req.Description
		}
		input.RequirementType = string(req.RequirementType)

		output, err := provider.Review(input)
		if err != nil {
			continue
		}

		sug := &coredata.IcpmsAiReviewSuggestion{
			TenantID:          scope.GetTenantID(),
			OrganizationID:    job.OrganizationID,
			AiReviewJobID:     job.ID,
			RequirementID:     req.ID,
			DocumentID:        job.DocumentID,
			DocumentVersionID: job.DocumentVersionID,
			Status:            coredata.IcpmsAiReviewSuggestionStatusNeedsHumanReview,

			SuggestedImplementationMethod: output.SuggestedImplementationMethod,
			SuggestedResponsibleUnit:      output.SuggestedResponsibleUnit,
			SuggestedResponsibleRole:      output.SuggestedResponsibleRole,
			SuggestedEvidence:             output.SuggestedEvidence,
			SuggestedCurrentStatus:        output.SuggestedCurrentStatus,
			SuggestedActionPlan:           output.SuggestedActionPlan,
			SuggestedChecklistQuestion:    output.SuggestedChecklistQuestion,
			SuggestedRiskIfNotComplied:    output.SuggestedRiskIfNotComplied,
			SuggestedPlainLanguageText:    output.SuggestedPlainLanguageText,
			SuggestedRequirementType:      output.SuggestedRequirementType,
			SuggestedApplicabilityStatus:  output.SuggestedApplicabilityStatus,
			SuggestedPriority:             output.SuggestedPriority,
			SuggestedComplianceDomain:     output.SuggestedComplianceDomain,
			AiConfidence:                  output.AiConfidence,
		}

		if createErr := s.createSuggestion(ctx, sug); createErr == nil {
			created++
		}

		job.ProcessedRequirements = i + 1
		job.TotalSuggestions = created
		if job.TotalRequirements > 0 {
			job.ProgressPercent = (job.ProcessedRequirements * 100) / job.TotalRequirements
		}
		_ = s.updateJob(ctx, job)
	}

	finishedAt := time.Now()
	job.Status = coredata.IcpmsAiReviewJobStatusCompleted
	job.ProgressPercent = 100
	job.TotalSuggestions = created
	job.FinishedAt = &finishedAt
	return s.updateJob(ctx, job)
}
