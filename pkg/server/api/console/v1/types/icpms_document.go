// Copyright (c) 2025-2026 Probo Inc <hello@probo.com>.
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

package types

import (
	"go.probo.inc/probo/pkg/coredata"
	"go.probo.inc/probo/pkg/gid"
	"go.probo.inc/probo/pkg/page"
)

type (
	IcpmsDocumentConnection struct {
		TotalCount int
		Edges      []*IcpmsDocumentEdge
		PageInfo   PageInfo

		Resolver any
		ParentID gid.GID
		Filters  *coredata.IcpmsDocumentFilter
	}
)

func NewIcpmsDocumentConnection(
	p *page.Page[*coredata.IcpmsDocument, coredata.IcpmsDocumentOrderField],
	parentType any,
	parentID gid.GID,
	filters *coredata.IcpmsDocumentFilter,
) *IcpmsDocumentConnection {
	var edges = make([]*IcpmsDocumentEdge, len(p.Data))

	for i := range edges {
		edges[i] = NewIcpmsDocumentEdge(p.Data[i], p.Cursor.OrderBy.Field)
	}

	return &IcpmsDocumentConnection{
		Edges:    edges,
		PageInfo: *NewPageInfo(p),

		Resolver: parentType,
		ParentID: parentID,
		Filters:  filters,
	}
}

func NewIcpmsDocumentEdges(documents []*coredata.IcpmsDocument, orderBy coredata.IcpmsDocumentOrderField) []*IcpmsDocumentEdge {
	edges := make([]*IcpmsDocumentEdge, len(documents))

	for i := range edges {
		edges[i] = NewIcpmsDocumentEdge(documents[i], orderBy)
	}

	return edges
}

func NewIcpmsDocumentEdge(document *coredata.IcpmsDocument, orderBy coredata.IcpmsDocumentOrderField) *IcpmsDocumentEdge {
	return &IcpmsDocumentEdge{
		Cursor: document.CursorKey(orderBy),
		Node:   NewIcpmsDocument(document),
	}
}

func NewIcpmsDocument(document *coredata.IcpmsDocument) *IcpmsDocument {
	return &IcpmsDocument{
		ID: document.ID,
		Organization: &Organization{
			ID: document.OrganizationID,
		},
		Code:               document.Code,
		DocumentCode:       document.DocumentCode,
		Title:              document.Title,
		DocumentType:       IcpmsDocumentType(document.DocumentType),
		DocumentGroup:      (*IcpmsDocumentGroup)(document.DocumentGroup),
		SourceOrganization: document.SourceOrganization,
		Issuer:             document.Issuer,
		MainDomain:         document.MainDomain,
		PageCount:          document.PageCount,
		IssuedDate:         document.IssuedDate,
		EffectiveDate:      document.EffectiveDate,
		Language:           document.Language,
		Classification:     (*IcpmsDocumentClassification)(document.Classification),
		ApplicableToVatm:   (*IcpmsDocumentApplicability)(document.ApplicableToVatm),
		Priority:           (*IcpmsDocumentPriority)(document.Priority),
		Status:             IcpmsDocumentStatus(document.Status),
		Description:        document.Description,
		Notes:              document.Notes,
		OwningUnitID:       document.OwningUnitID,
		CreatedBy:          document.CreatedBy,
		UpdatedBy:          document.UpdatedBy,
		CreatedAt:          document.CreatedAt,
		UpdatedAt:          document.UpdatedAt,
		DeletedAt:          document.DeletedAt,
	}
}
