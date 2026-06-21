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
	IcpmsExtractedTextBlock struct {
		ID                gid.GID    `db:"id"`
		TenantID          gid.TenantID `db:"tenant_id"`
		OrganizationID    gid.GID    `db:"organization_id"`
		IngestionJobID    gid.GID    `db:"ingestion_job_id"`
		DocumentID        gid.GID    `db:"document_id"`
		DocumentVersionID gid.GID    `db:"document_version_id"`
		DocumentFileID    gid.GID    `db:"document_file_id"`
		BlockIndex        int        `db:"block_index"`
		PageNumber        *int       `db:"page_number"`
		SourceOrder       int        `db:"source_order"`
		SectionNumber     *string    `db:"section_number"`
		SectionHint       *string    `db:"section_hint"`
		BlockType         IcpmsExtractedTextBlockType `db:"block_type"`
		RawText           string     `db:"raw_text"`
		NormalizedText    string     `db:"normalized_text"`
		LanguageDetected  *string    `db:"language_detected"`
		CharCount         int        `db:"char_count"`
		WordCount         int        `db:"word_count"`
		Hash              *string    `db:"hash"`
		CreatedAt         time.Time  `db:"created_at"`
		UpdatedAt         time.Time  `db:"updated_at"`
	}

	IcpmsExtractedTextBlocks []*IcpmsExtractedTextBlock
)

func (b *IcpmsExtractedTextBlock) GetID() gid.GID {
	return b.ID
}

func (IcpmsExtractedTextBlock) IsNode() {}
