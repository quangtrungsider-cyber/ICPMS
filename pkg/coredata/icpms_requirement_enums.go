// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package coredata

type IcpmsRequirementType string

const (
	IcpmsRequirementTypeObligation     IcpmsRequirementType = "OBLIGATION"
	IcpmsRequirementTypeProhibition    IcpmsRequirementType = "PROHIBITION"
	IcpmsRequirementTypeResponsibility IcpmsRequirementType = "RESPONSIBILITY"
	IcpmsRequirementTypeProcess        IcpmsRequirementType = "PROCESS"
	IcpmsRequirementTypeRecord         IcpmsRequirementType = "RECORD"
	IcpmsRequirementTypeReporting      IcpmsRequirementType = "REPORTING"
	IcpmsRequirementTypeTraining       IcpmsRequirementType = "TRAINING"
	IcpmsRequirementTypeMonitoring     IcpmsRequirementType = "MONITORING"
	IcpmsRequirementTypeReview         IcpmsRequirementType = "REVIEW"
	IcpmsRequirementTypeEvidence       IcpmsRequirementType = "EVIDENCE"
	IcpmsRequirementTypeInformation    IcpmsRequirementType = "INFORMATION"
	IcpmsRequirementTypeOther          IcpmsRequirementType = "OTHER"
)

type IcpmsApplicabilityStatus string

const (
	IcpmsApplicabilityStatusApplicable         IcpmsApplicabilityStatus = "APPLICABLE"
	IcpmsApplicabilityStatusNotApplicable       IcpmsApplicabilityStatus = "NOT_APPLICABLE"
	IcpmsApplicabilityStatusNeedsReview         IcpmsApplicabilityStatus = "NEEDS_REVIEW"
	IcpmsApplicabilityStatusPartiallyApplicable IcpmsApplicabilityStatus = "PARTIALLY_APPLICABLE"
	IcpmsApplicabilityStatusUnknown             IcpmsApplicabilityStatus = "UNKNOWN"
)

type IcpmsRequirementReviewStatus string

const (
	IcpmsRequirementReviewStatusCandidate   IcpmsRequirementReviewStatus = "CANDIDATE"
	IcpmsRequirementReviewStatusNeedsReview IcpmsRequirementReviewStatus = "NEEDS_REVIEW"
	IcpmsRequirementReviewStatusReviewed    IcpmsRequirementReviewStatus = "REVIEWED"
	IcpmsRequirementReviewStatusApproved    IcpmsRequirementReviewStatus = "APPROVED"
	IcpmsRequirementReviewStatusRejected    IcpmsRequirementReviewStatus = "REJECTED"
	IcpmsRequirementReviewStatusArchived    IcpmsRequirementReviewStatus = "ARCHIVED"
)

type IcpmsRequirementPriority string

const (
	IcpmsRequirementPriorityHigh   IcpmsRequirementPriority = "HIGH"
	IcpmsRequirementPriorityMedium IcpmsRequirementPriority = "MEDIUM"
	IcpmsRequirementPriorityLow    IcpmsRequirementPriority = "LOW"
)

type IcpmsRequirementGenerationJobStatus string

const (
	IcpmsRequirementGenerationJobStatusPending   IcpmsRequirementGenerationJobStatus = "PENDING"
	IcpmsRequirementGenerationJobStatusRunning   IcpmsRequirementGenerationJobStatus = "RUNNING"
	IcpmsRequirementGenerationJobStatusCompleted IcpmsRequirementGenerationJobStatus = "COMPLETED"
	IcpmsRequirementGenerationJobStatusFailed    IcpmsRequirementGenerationJobStatus = "FAILED"
)
