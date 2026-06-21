// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package coredata

import (
	"time"

	"go.probo.inc/probo/pkg/gid"
)

type IcpmsAiReviewJobStatus string

const (
	IcpmsAiReviewJobStatusQueued    IcpmsAiReviewJobStatus = "QUEUED"
	IcpmsAiReviewJobStatusRunning   IcpmsAiReviewJobStatus = "RUNNING"
	IcpmsAiReviewJobStatusCompleted IcpmsAiReviewJobStatus = "COMPLETED"
	IcpmsAiReviewJobStatusFailed    IcpmsAiReviewJobStatus = "FAILED"
	IcpmsAiReviewJobStatusCancelled IcpmsAiReviewJobStatus = "CANCELLED"
	IcpmsAiReviewJobStatusPartial   IcpmsAiReviewJobStatus = "PARTIAL"
)

type IcpmsAiReviewScope string

const (
	IcpmsAiReviewScopeAll         IcpmsAiReviewScope = "ALL"
	IcpmsAiReviewScopeNeedsReview IcpmsAiReviewScope = "NEEDS_REVIEW"
	IcpmsAiReviewScopeSelected    IcpmsAiReviewScope = "SELECTED"
)

type IcpmsAiProvider string

const (
	IcpmsAiProviderRuleBased IcpmsAiProvider = "RULE_BASED"
	IcpmsAiProviderOpenAI    IcpmsAiProvider = "OPENAI"
	IcpmsAiProviderAnthropic IcpmsAiProvider = "ANTHROPIC"
	IcpmsAiProviderGemini    IcpmsAiProvider = "GEMINI"
)

type IcpmsAiReviewJob struct {
	ID                    gid.GID                `db:"id"`
	TenantID              gid.TenantID           `db:"tenant_id"`
	OrganizationID        gid.GID                `db:"organization_id"`
	DocumentID            gid.GID                `db:"document_id"`
	DocumentVersionID     gid.GID                `db:"document_version_id"`
	JobCode               string                 `db:"job_code"`
	ReviewScope           IcpmsAiReviewScope     `db:"review_scope"`
	Status                IcpmsAiReviewJobStatus `db:"status"`
	ProgressPercent       int                    `db:"progress_percent"`
	TotalRequirements     int                    `db:"total_requirements"`
	ProcessedRequirements int                    `db:"processed_requirements"`
	TotalSuggestions      int                    `db:"total_suggestions"`
	TotalAccepted         int                    `db:"total_accepted"`
	TotalRejected         int                    `db:"total_rejected"`
	AiProvider            IcpmsAiProvider        `db:"ai_provider"`
	AiModel               *string                `db:"ai_model"`
	ErrorMessage          *string                `db:"error_message"`
	WarningMessage        *string                `db:"warning_message"`
	CreatedBy             gid.GID                `db:"created_by"`
	StartedAt             *time.Time             `db:"started_at"`
	FinishedAt            *time.Time             `db:"finished_at"`
	CreatedAt             time.Time              `db:"created_at"`
	UpdatedAt             time.Time              `db:"updated_at"`
	DeletedAt             *time.Time             `db:"deleted_at"`
}

func (j *IcpmsAiReviewJob) GetID() gid.GID { return j.ID }
func (IcpmsAiReviewJob) IsNode()            {}
