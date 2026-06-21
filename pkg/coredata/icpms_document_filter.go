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
)

type IcpmsDocumentFilter struct {
	Query           *string
	Types           []IcpmsDocumentType
	Groups          []IcpmsDocumentGroup
	Statuses        []IcpmsDocumentStatus
	Priorities      []IcpmsDocumentPriority
	Applicabilities []IcpmsDocumentApplicability
	SourceOrgs      []string
	MainDomains     []string
}

func NewIcpmsDocumentFilter() *IcpmsDocumentFilter {
	return &IcpmsDocumentFilter{}
}

func (f *IcpmsDocumentFilter) WithQuery(query string) *IcpmsDocumentFilter {
	if query == "" {
		f.Query = nil
	} else {
		f.Query = &query
	}
	return f
}

func (f *IcpmsDocumentFilter) WithTypes(types ...IcpmsDocumentType) *IcpmsDocumentFilter {
	f.Types = types
	return f
}

func (f *IcpmsDocumentFilter) WithGroups(groups ...IcpmsDocumentGroup) *IcpmsDocumentFilter {
	f.Groups = groups
	return f
}

func (f *IcpmsDocumentFilter) WithStatuses(statuses ...IcpmsDocumentStatus) *IcpmsDocumentFilter {
	f.Statuses = statuses
	return f
}

func (f *IcpmsDocumentFilter) WithPriorities(priorities ...IcpmsDocumentPriority) *IcpmsDocumentFilter {
	f.Priorities = priorities
	return f
}

func (f *IcpmsDocumentFilter) WithApplicabilities(apps ...IcpmsDocumentApplicability) *IcpmsDocumentFilter {
	f.Applicabilities = apps
	return f
}

func (f *IcpmsDocumentFilter) WithSourceOrgs(sources ...string) *IcpmsDocumentFilter {
	f.SourceOrgs = sources
	return f
}

func (f *IcpmsDocumentFilter) WithMainDomains(domains ...string) *IcpmsDocumentFilter {
	f.MainDomains = domains
	return f
}

func (f *IcpmsDocumentFilter) SQLFragment() string {
	var conditions []string

	if f.Query != nil {
		conditions = append(conditions, "(icpms_documents.code ILIKE '%' || @query || '%' OR icpms_documents.title ILIKE '%' || @query || '%' OR icpms_documents.source_organization ILIKE '%' || @query || '%' OR icpms_documents.main_domain ILIKE '%' || @query || '%' OR icpms_documents.description ILIKE '%' || @query || '%' OR icpms_documents.notes ILIKE '%' || @query || '%')")
	}

	if len(f.Types) > 0 {
		conditions = append(conditions, "icpms_documents.document_type = ANY(@filter_types)")
	}

	if len(f.Groups) > 0 {
		conditions = append(conditions, "icpms_documents.document_group = ANY(@filter_groups)")
	}

	if len(f.Statuses) > 0 {
		conditions = append(conditions, "icpms_documents.status = ANY(@filter_statuses)")
	}

	if len(f.Priorities) > 0 {
		conditions = append(conditions, "icpms_documents.priority = ANY(@filter_priorities)")
	}

	if len(f.Applicabilities) > 0 {
		conditions = append(conditions, "icpms_documents.applicable_to_vatm = ANY(@filter_applicabilities)")
	}

	if len(f.SourceOrgs) > 0 {
		conditions = append(conditions, "icpms_documents.source_organization = ANY(@filter_source_orgs)")
	}

	if len(f.MainDomains) > 0 {
		conditions = append(conditions, "icpms_documents.main_domain = ANY(@filter_main_domains)")
	}

	if len(conditions) == 0 {
		return "TRUE"
	}

	return strings.Join(conditions, " AND ")
}

func (f *IcpmsDocumentFilter) SQLArguments() pgx.StrictNamedArgs {
	args := pgx.StrictNamedArgs{}

	if f.Query != nil {
		args["query"] = *f.Query
	}

	if len(f.Types) > 0 {
		args["filter_types"] = f.Types
	}

	if len(f.Groups) > 0 {
		args["filter_groups"] = f.Groups
	}

	if len(f.Statuses) > 0 {
		args["filter_statuses"] = f.Statuses
	}

	if len(f.Priorities) > 0 {
		args["filter_priorities"] = f.Priorities
	}

	if len(f.Applicabilities) > 0 {
		args["filter_applicabilities"] = f.Applicabilities
	}

	if len(f.SourceOrgs) > 0 {
		args["filter_source_orgs"] = f.SourceOrgs
	}

	if len(f.MainDomains) > 0 {
		args["filter_main_domains"] = f.MainDomains
	}

	return args
}
