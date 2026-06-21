// Copyright (c) 2025-2026 VATM ICPMS <sms@vatm.vn>.
//
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
// REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
// AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
// INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
// LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
// OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
// PERFORMANCE OF THIS SOFTWARE.

package coredata

import (
	"strings"

	"github.com/jackc/pgx/v5"
	"go.probo.inc/probo/pkg/gid"
)

type IcpmsDocumentFileFilter struct {
	DocumentID        *gid.GID
	DocumentVersionID *gid.GID
	UploadStatuses    []IcpmsDocumentFileStatus
	IsActive          *bool
}

func (f *IcpmsDocumentFileFilter) SQLFragment() string {
	if f == nil {
		return "1=1"
	}

	var conditions []string

	if f.DocumentID != nil {
		conditions = append(conditions, "document_id = @filter_document_id")
	}

	if f.DocumentVersionID != nil {
		conditions = append(conditions, "document_version_id = @filter_document_version_id")
	}

	if len(f.UploadStatuses) > 0 {
		conditions = append(conditions, "upload_status = ANY(@filter_upload_statuses)")
	}

	if f.IsActive != nil {
		conditions = append(conditions, "is_active = @filter_is_active")
	}

	if len(conditions) == 0 {
		return "1=1"
	}

	return strings.Join(conditions, " AND ")
}

func (f *IcpmsDocumentFileFilter) SQLArguments() pgx.StrictNamedArgs {
	args := pgx.StrictNamedArgs{}

	if f == nil {
		return args
	}

	if f.DocumentID != nil {
		args["filter_document_id"] = *f.DocumentID
	}

	if f.DocumentVersionID != nil {
		args["filter_document_version_id"] = *f.DocumentVersionID
	}

	if len(f.UploadStatuses) > 0 {
		args["filter_upload_statuses"] = f.UploadStatuses
	}

	if f.IsActive != nil {
		args["filter_is_active"] = *f.IsActive
	}

	return args
}
