// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package coredata

import (
	"strings"

	"github.com/jackc/pgx/v5"
	"go.probo.inc/probo/pkg/gid"
)

type IcpmsDocumentVersionFilter struct {
	DocumentID    *gid.GID
	VersionCode   *string
	Statuses      []IcpmsDocumentVersionStatus
	IsCurrent     *bool
	RawFileStatus *IcpmsDocumentVersionRawFileStatus
}

func (f *IcpmsDocumentVersionFilter) SQLFragment() string {
	if f == nil {
		return "1=1"
	}

	var conditions []string

	if f.DocumentID != nil {
		conditions = append(conditions, "document_id = @filter_document_id")
	}

	if f.VersionCode != nil {
		conditions = append(conditions, "version_code = @filter_version_code")
	}

	if len(f.Statuses) > 0 {
		conditions = append(conditions, "status = ANY(@filter_statuses)")
	}

	if f.IsCurrent != nil {
		conditions = append(conditions, "is_current = @filter_is_current")
	}

	if f.RawFileStatus != nil {
		conditions = append(conditions, "raw_file_status = @filter_raw_file_status")
	}

	if len(conditions) == 0 {
		return "1=1"
	}

	return strings.Join(conditions, " AND ")
}

func (f *IcpmsDocumentVersionFilter) SQLArguments() pgx.StrictNamedArgs {
	if f == nil {
		return pgx.StrictNamedArgs{}
	}

	args := pgx.StrictNamedArgs{}

	if f.DocumentID != nil {
		args["filter_document_id"] = *f.DocumentID
	}

	if f.VersionCode != nil {
		args["filter_version_code"] = *f.VersionCode
	}

	if len(f.Statuses) > 0 {
		var statuses []string
		for _, s := range f.Statuses {
			statuses = append(statuses, string(s))
		}
		args["filter_statuses"] = statuses
	}

	if f.IsCurrent != nil {
		args["filter_is_current"] = *f.IsCurrent
	}

	if f.RawFileStatus != nil {
		args["filter_raw_file_status"] = *f.RawFileStatus
	}

	return args
}
