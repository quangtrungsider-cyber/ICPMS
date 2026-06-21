// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package coredata

import (
	"time"

	"go.probo.inc/probo/pkg/gid"
)

type (
	IcpmsParsedDocumentSection struct {
		ID                gid.GID                  `db:"id"`
		TenantID          gid.TenantID             `db:"tenant_id"`
		OrganizationID    gid.GID                  `db:"organization_id"`
		ParseJobID        gid.GID                  `db:"parse_job_id"`
		DocumentID        gid.GID                  `db:"document_id"`
		DocumentVersionID gid.GID                  `db:"document_version_id"`
		ParentID          *gid.GID                 `db:"parent_id"`
		SectionType       IcpmsDocumentSectionType `db:"section_type"`
		SectionNumber     *string                  `db:"section_number"`
		Title             string                   `db:"title"`
		FullHeading       string                   `db:"full_heading"`
		ContentStartLine  int                      `db:"content_start_line"`
		ContentEndLine    int                      `db:"content_end_line"`
		DepthLevel        int                      `db:"depth_level"`
		SortOrder         int                      `db:"sort_order"`
		ConfidenceScore   int                      `db:"confidence_score"`
		RawText           *string                  `db:"raw_text"`
		ContentText       *string                  `db:"content_text"`
		Path              *string                  `db:"path"`
		Warnings          *string                  `db:"warnings"`
		SourcePageStart   *int                     `db:"source_page_start"`
		SourcePageEnd     *int                     `db:"source_page_end"`
		CreatedAt         time.Time                `db:"created_at"`
		UpdatedAt         time.Time                `db:"updated_at"`
		DeletedAt         *time.Time               `db:"deleted_at"`
	}

	IcpmsParsedDocumentSections []*IcpmsParsedDocumentSection
)

func (s *IcpmsParsedDocumentSection) GetID() gid.GID {
	return s.ID
}

func (IcpmsParsedDocumentSection) IsNode() {}
