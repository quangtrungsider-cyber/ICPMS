// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package coredata

import (
	"time"

	"go.probo.inc/probo/pkg/gid"
)

type IcpmsChecklistStatus string

const (
	IcpmsChecklistStatusDraft       IcpmsChecklistStatus = "DRAFT"
	IcpmsChecklistStatusNeedsReview IcpmsChecklistStatus = "NEEDS_REVIEW"
	IcpmsChecklistStatusActive      IcpmsChecklistStatus = "ACTIVE"
	IcpmsChecklistStatusInactive    IcpmsChecklistStatus = "INACTIVE"
	IcpmsChecklistStatusArchived    IcpmsChecklistStatus = "ARCHIVED"
	IcpmsChecklistStatusDeleted     IcpmsChecklistStatus = "DELETED"
)

type IcpmsChecklistApprovalStatus string

const (
	IcpmsChecklistApprovalStatusPendingReview IcpmsChecklistApprovalStatus = "PENDING_REVIEW"
	IcpmsChecklistApprovalStatusApproved      IcpmsChecklistApprovalStatus = "APPROVED"
	IcpmsChecklistApprovalStatusRejected      IcpmsChecklistApprovalStatus = "REJECTED"
	IcpmsChecklistApprovalStatusNeedsRevision IcpmsChecklistApprovalStatus = "NEEDS_REVISION"
)

type IcpmsChecklistCreatedFrom string

const (
	IcpmsChecklistCreatedFromAiReview IcpmsChecklistCreatedFrom = "AI_REVIEW"
	IcpmsChecklistCreatedFromManual   IcpmsChecklistCreatedFrom = "MANUAL"
	IcpmsChecklistCreatedFromImport   IcpmsChecklistCreatedFrom = "IMPORT"
	IcpmsChecklistCreatedFromSystem   IcpmsChecklistCreatedFrom = "SYSTEM"
)

type IcpmsChecklist struct {
	ID                   gid.GID                      `db:"id"`
	TenantID             gid.TenantID                 `db:"tenant_id"`
	OrganizationID       gid.GID                      `db:"organization_id"`
	DocumentID           gid.GID                      `db:"document_id"`
	DocumentVersionID    gid.GID                      `db:"document_version_id"`
	RequirementID        *gid.GID                     `db:"requirement_id"`
	AiReviewJobID        *gid.GID                     `db:"ai_review_job_id"`
	AiReviewSuggestionID *gid.GID                     `db:"ai_review_suggestion_id"`

	ChecklistCode       string  `db:"checklist_code"`
	ChecklistQuestion   string  `db:"checklist_question"`
	RequirementText     *string `db:"requirement_text"`
	SourceReference     *string `db:"source_reference"`
	SourceText          *string `db:"source_text"`

	ImplementationMethod *string `db:"implementation_method"`
	ResponsibleUnit      *string `db:"responsible_unit"`
	ResponsibleRole      *string `db:"responsible_role"`
	RequiredEvidence     *string `db:"required_evidence"`
	CurrentStatusText    *string `db:"current_status_text"`
	ActionPlan           *string `db:"action_plan"`
	RiskIfNotComplied    *string `db:"risk_if_not_complied"`

	Priority         string  `db:"priority"`
	ComplianceDomain *string `db:"compliance_domain"`
	Frequency        *string `db:"frequency"`
	DueDays          *int    `db:"due_days"`

	Status         IcpmsChecklistStatus         `db:"status"`
	ApprovalStatus IcpmsChecklistApprovalStatus `db:"approval_status"`

	CreatedFrom     IcpmsChecklistCreatedFrom `db:"created_from"`
	CreatedBy       *gid.GID                  `db:"created_by"`
	ReviewedBy      *gid.GID                  `db:"reviewed_by"`
	ReviewedAt      *time.Time                `db:"reviewed_at"`
	ApprovedBy      *gid.GID                  `db:"approved_by"`
	ApprovedAt      *time.Time                `db:"approved_at"`
	RejectedBy      *gid.GID                  `db:"rejected_by"`
	RejectedAt      *time.Time                `db:"rejected_at"`
	RejectionReason *string                   `db:"rejection_reason"`

	CreatedAt time.Time  `db:"created_at"`
	UpdatedAt time.Time  `db:"updated_at"`
	DeletedAt *time.Time `db:"deleted_at"`
}

func (c *IcpmsChecklist) GetID() gid.GID { return c.ID }
func (IcpmsChecklist) IsNode()            {}
