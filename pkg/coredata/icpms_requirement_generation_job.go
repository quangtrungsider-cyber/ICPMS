// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package coredata

import (
	"time"

	"go.probo.inc/probo/pkg/gid"
)

type (
	IcpmsRequirementGenerationJob struct {
		ID              gid.GID                             `db:"id"`
		TenantID        gid.TenantID                        `db:"tenant_id"`
		OrganizationID  gid.GID                             `db:"organization_id"`
		ParseJobID      gid.GID                             `db:"parse_job_id"`
		Status          IcpmsRequirementGenerationJobStatus `db:"status"`
		TotalCandidates int                                 `db:"total_candidates"`
		TotalCreated    int                                 `db:"total_created"`
		TotalSkipped    int                                 `db:"total_skipped"`
		TotalDuplicates int                                 `db:"total_duplicates"`
		ErrorMessage    *string                             `db:"error_message"`
		CreatedBy       *gid.GID                            `db:"created_by"`
		StartedAt       *time.Time                          `db:"started_at"`
		FinishedAt      *time.Time                          `db:"finished_at"`
		CreatedAt       time.Time                           `db:"created_at"`
		UpdatedAt       time.Time                           `db:"updated_at"`
	}
)

func (j *IcpmsRequirementGenerationJob) GetID() gid.GID { return j.ID }
func (IcpmsRequirementGenerationJob) IsNode()           {}
