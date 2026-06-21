// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package coredata

import (
	"time"

	"go.probo.inc/probo/pkg/gid"
)

type IcpmsAssignmentStatus string

const (
	IcpmsAssignmentStatusDraft      IcpmsAssignmentStatus = "DRAFT"
	IcpmsAssignmentStatusAssigned   IcpmsAssignmentStatus = "ASSIGNED"
	IcpmsAssignmentStatusAccepted   IcpmsAssignmentStatus = "ACCEPTED"
	IcpmsAssignmentStatusInProgress IcpmsAssignmentStatus = "IN_PROGRESS"
	IcpmsAssignmentStatusSubmitted  IcpmsAssignmentStatus = "SUBMITTED"
	IcpmsAssignmentStatusReturned   IcpmsAssignmentStatus = "RETURNED"
	IcpmsAssignmentStatusCompleted  IcpmsAssignmentStatus = "COMPLETED"
	IcpmsAssignmentStatusClosed     IcpmsAssignmentStatus = "CLOSED"
	IcpmsAssignmentStatusOverdue    IcpmsAssignmentStatus = "OVERDUE"
	IcpmsAssignmentStatusCancelled  IcpmsAssignmentStatus = "CANCELLED"
	IcpmsAssignmentStatusDeleted    IcpmsAssignmentStatus = "DELETED"
)

type IcpmsAssignmentPriority string

const (
	IcpmsAssignmentPriorityLow      IcpmsAssignmentPriority = "LOW"
	IcpmsAssignmentPriorityMedium   IcpmsAssignmentPriority = "MEDIUM"
	IcpmsAssignmentPriorityHigh     IcpmsAssignmentPriority = "HIGH"
	IcpmsAssignmentPriorityCritical IcpmsAssignmentPriority = "CRITICAL"
)

type IcpmsAssignmentCreatedFrom string

const (
	IcpmsAssignmentCreatedFromChecklist          IcpmsAssignmentCreatedFrom = "CHECKLIST"
	IcpmsAssignmentCreatedFromAiReviewSuggestion IcpmsAssignmentCreatedFrom = "AI_REVIEW_SUGGESTION"
	IcpmsAssignmentCreatedFromManual             IcpmsAssignmentCreatedFrom = "MANUAL"
	IcpmsAssignmentCreatedFromSystem             IcpmsAssignmentCreatedFrom = "SYSTEM"
)

type IcpmsAssignmentEvidenceStatus string

const (
	IcpmsAssignmentEvidenceStatusNotRequired       IcpmsAssignmentEvidenceStatus = "NOT_REQUIRED"
	IcpmsAssignmentEvidenceStatusRequiredNotSubmitted IcpmsAssignmentEvidenceStatus = "REQUIRED_NOT_SUBMITTED"
	IcpmsAssignmentEvidenceStatusSubmitted         IcpmsAssignmentEvidenceStatus = "SUBMITTED"
	IcpmsAssignmentEvidenceStatusApproved          IcpmsAssignmentEvidenceStatus = "APPROVED"
	IcpmsAssignmentEvidenceStatusRejected          IcpmsAssignmentEvidenceStatus = "REJECTED"
)

type IcpmsAssignment struct {
	ID             gid.GID      `db:"id"`
	TenantID       gid.TenantID `db:"tenant_id"`
	OrganizationID gid.GID      `db:"organization_id"`

	AssignmentCode        string  `db:"assignment_code"`
	AssignmentTitle       string  `db:"assignment_title"`
	AssignmentDescription *string `db:"assignment_description"`

	DocumentID        *gid.GID `db:"document_id"`
	DocumentVersionID *gid.GID `db:"document_version_id"`
	RequirementID     *gid.GID `db:"requirement_id"`
	ChecklistID       *gid.GID `db:"checklist_id"`

	SourceReference   *string `db:"source_reference"`
	RequirementText   *string `db:"requirement_text"`
	ChecklistQuestion *string `db:"checklist_question"`

	LeadUnitName            string  `db:"lead_unit_name"`
	CoordinationUnitNames   *string `db:"coordination_unit_names"`

	AssigneeUserID *gid.GID `db:"assignee_user_id"`
	AssigneeName   *string  `db:"assignee_name"`
	AssignedBy     *gid.GID `db:"assigned_by"`
	AssignedAt     *time.Time `db:"assigned_at"`

	DueDate  *time.Time `db:"due_date"`
	DueDays  *int       `db:"due_days"`
	Priority string     `db:"priority"`

	Status          IcpmsAssignmentStatus `db:"status"`
	ProgressPercent int                   `db:"progress_percent"`

	CurrentStatusText *string `db:"current_status_text"`
	ActionPlanText    *string `db:"action_plan_text"`
	ResponseNote      *string `db:"response_note"`

	RequiresEvidence bool                          `db:"requires_evidence"`
	EvidenceStatus   IcpmsAssignmentEvidenceStatus `db:"evidence_status"`

	CreatedFrom          IcpmsAssignmentCreatedFrom `db:"created_from"`
	AiReviewJobID        *gid.GID                   `db:"ai_review_job_id"`
	AiReviewSuggestionID *gid.GID                   `db:"ai_review_suggestion_id"`

	AcceptedByUnitAt *time.Time `db:"accepted_by_unit_at"`
	StartedAt        *time.Time `db:"started_at"`
	SubmittedAt      *time.Time `db:"submitted_at"`
	CompletedAt      *time.Time `db:"completed_at"`
	ClosedAt         *time.Time `db:"closed_at"`
	CancelledAt      *time.Time `db:"cancelled_at"`

	ClosedBy     *gid.GID `db:"closed_by"`
	CancelledBy  *gid.GID `db:"cancelled_by"`
	CancelReason *string  `db:"cancel_reason"`

	CreatedAt time.Time  `db:"created_at"`
	UpdatedAt time.Time  `db:"updated_at"`
	DeletedAt *time.Time `db:"deleted_at"`
}

func (a *IcpmsAssignment) GetID() gid.GID { return a.ID }
func (IcpmsAssignment) IsNode()            {}
