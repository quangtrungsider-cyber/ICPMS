// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package coredata

import (
	"time"

	"go.probo.inc/probo/pkg/gid"
)

type (
	IcpmsDocumentParseJob struct {
		ID                  gid.GID                 `db:"id"`
		TenantID            gid.TenantID            `db:"tenant_id"`
		OrganizationID      gid.GID                 `db:"organization_id"`
		DocumentID          gid.GID                 `db:"document_id"`
		DocumentVersionID   gid.GID                 `db:"document_version_id"`
		DocumentFileID      gid.GID                 `db:"document_file_id"`
		IngestionJobID      gid.GID                 `db:"ingestion_job_id"`
		ParserType          IcpmsParseJobParserType `db:"parser_type"`
		Status              IcpmsParseJobStatus     `db:"status"`
		TotalSections       int                     `db:"total_sections"`
		MaxDepth            int                     `db:"max_depth"`
		Language            string                  `db:"language"`
		ErrorMessage        *string                 `db:"error_message"`
		WarningMessage      *string                 `db:"warning_message"`
		TotalChapters       int                     `db:"total_chapters"`
		TotalParagraphs     int                     `db:"total_paragraphs"`
		TotalSubparagraphs  int                     `db:"total_subparagraphs"`
		TotalAppendices     int                     `db:"total_appendices"`
		TotalTables         int                     `db:"total_tables"`
		TotalFigures        int                     `db:"total_figures"`
		StartedAt           *time.Time              `db:"started_at"`
		FinishedAt          *time.Time              `db:"finished_at"`
		CreatedBy           gid.GID                 `db:"created_by"`
		CreatedAt           time.Time               `db:"created_at"`
		UpdatedAt           time.Time               `db:"updated_at"`
		DeletedAt           *time.Time              `db:"deleted_at"`
	}

	IcpmsDocumentParseJobs []*IcpmsDocumentParseJob
)

func (j *IcpmsDocumentParseJob) GetID() gid.GID {
	return j.ID
}

func (IcpmsDocumentParseJob) IsNode() {}
