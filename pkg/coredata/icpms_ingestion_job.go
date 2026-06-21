// Copyright (c) 2025-2026 VATM ICPMS <sms@vatm.vn>.
//
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.

package coredata

import (
	"time"

	"go.probo.inc/probo/pkg/gid"
)

type (
	IcpmsIngestionJob struct {
		ID                gid.GID    `db:"id"`
		TenantID          gid.TenantID `db:"tenant_id"`
		OrganizationID    gid.GID    `db:"organization_id"`
		DocumentID        gid.GID    `db:"document_id"`
		DocumentVersionID gid.GID    `db:"document_version_id"`
		DocumentFileID    gid.GID    `db:"document_file_id"`
		JobCode           string     `db:"job_code"`
		JobType           IcpmsIngestionJobType      `db:"job_type"`
		ExtractionMode    IcpmsIngestionExtractionMode `db:"extraction_mode"`
		FileNameSnapshot  string                     `db:"file_name_snapshot"`
		FileTypeSnapshot  string                     `db:"file_type_snapshot"`
		FileSizeSnapshot  int64                      `db:"file_size_snapshot"`
		Status            IcpmsIngestionJobStatus    `db:"status"`
		ProgressPercent   int        `db:"progress_percent"`
		TotalBlocks       int        `db:"total_blocks"`
		TotalPages        int        `db:"total_pages"`
		TotalChars        int        `db:"total_chars"`
		LanguageDetected  *string    `db:"language_detected"`
		StartedAt         *time.Time `db:"started_at"`
		FinishedAt        *time.Time `db:"finished_at"`
		ErrorMessage      *string    `db:"error_message"`
		WarningMessage    *string    `db:"warning_message"`
		CreatedBy         gid.GID    `db:"created_by"`
		CreatedAt         time.Time  `db:"created_at"`
		UpdatedAt         time.Time  `db:"updated_at"`
		DeletedAt         *time.Time `db:"deleted_at"`
	}

	IcpmsIngestionJobs []*IcpmsIngestionJob
)

func (i *IcpmsIngestionJob) GetID() gid.GID {
	return i.ID
}

func (IcpmsIngestionJob) IsNode() {}
