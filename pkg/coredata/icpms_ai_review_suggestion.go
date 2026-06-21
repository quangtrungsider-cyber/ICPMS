// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package coredata

import (
	"time"

	"go.probo.inc/probo/pkg/gid"
)

type IcpmsAiReviewSuggestionStatus string

const (
	IcpmsAiReviewSuggestionStatusAiSuggested     IcpmsAiReviewSuggestionStatus = "AI_SUGGESTED"
	IcpmsAiReviewSuggestionStatusNeedsHumanReview IcpmsAiReviewSuggestionStatus = "NEEDS_HUMAN_REVIEW"
	IcpmsAiReviewSuggestionStatusAccepted         IcpmsAiReviewSuggestionStatus = "ACCEPTED"
	IcpmsAiReviewSuggestionStatusRejected         IcpmsAiReviewSuggestionStatus = "REJECTED"
	IcpmsAiReviewSuggestionStatusEdited           IcpmsAiReviewSuggestionStatus = "EDITED"
	IcpmsAiReviewSuggestionStatusArchived         IcpmsAiReviewSuggestionStatus = "ARCHIVED"
	IcpmsAiReviewSuggestionStatusDeleted          IcpmsAiReviewSuggestionStatus = "DELETED"
)

type IcpmsAiReviewSuggestion struct {
	ID                gid.GID                       `db:"id"`
	TenantID          gid.TenantID                  `db:"tenant_id"`
	OrganizationID    gid.GID                       `db:"organization_id"`
	AiReviewJobID     gid.GID                       `db:"ai_review_job_id"`
	RequirementID     gid.GID                       `db:"requirement_id"`
	DocumentID        gid.GID                       `db:"document_id"`
	DocumentVersionID gid.GID                       `db:"document_version_id"`

	SuggestedImplementationMethod *string `db:"suggested_implementation_method"`
	SuggestedResponsibleUnit      *string `db:"suggested_responsible_unit"`
	SuggestedResponsibleRole      *string `db:"suggested_responsible_role"`
	SuggestedEvidence             *string `db:"suggested_evidence"`
	SuggestedCurrentStatus        *string `db:"suggested_current_status"`
	SuggestedActionPlan           *string `db:"suggested_action_plan"`
	SuggestedChecklistQuestion    *string `db:"suggested_checklist_question"`
	SuggestedRiskIfNotComplied    *string `db:"suggested_risk_if_not_complied"`
	SuggestedPlainLanguageText    *string `db:"suggested_plain_language_text"`
	SuggestedRequirementType      *string `db:"suggested_requirement_type"`
	SuggestedApplicabilityStatus  *string `db:"suggested_applicability_status"`
	SuggestedPriority             *string `db:"suggested_priority"`
	SuggestedComplianceDomain     *string `db:"suggested_compliance_domain"`

	AiConfidence float64                       `db:"ai_confidence"`
	Status       IcpmsAiReviewSuggestionStatus `db:"status"`
	AcceptedBy   *gid.GID                      `db:"accepted_by"`
	AcceptedAt   *time.Time                    `db:"accepted_at"`
	RejectedBy   *gid.GID                      `db:"rejected_by"`
	RejectedAt   *time.Time                    `db:"rejected_at"`
	RejectionReason *string                    `db:"rejection_reason"`
	CreatedAt    time.Time                     `db:"created_at"`
	UpdatedAt    time.Time                     `db:"updated_at"`
	DeletedAt    *time.Time                    `db:"deleted_at"`
}

func (s *IcpmsAiReviewSuggestion) GetID() gid.GID { return s.ID }
func (IcpmsAiReviewSuggestion) IsNode()            {}
