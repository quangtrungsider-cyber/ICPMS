// Copyright (c) 2026 Probo Inc <hello@probo.com>.

package types

import (
	"go.probo.inc/probo/pkg/coredata"
	"go.probo.inc/probo/pkg/gid"
	"go.probo.inc/probo/pkg/page"
)

type (
	IcpmsDocumentVersionConnection struct {
		TotalCount int
		Edges      []*IcpmsDocumentVersionEdge
		PageInfo   PageInfo

		Resolver any
		ParentID gid.GID
		Filters  *coredata.IcpmsDocumentVersionFilter
	}
)

func NewIcpmsDocumentVersionConnection(
	p *page.Page[*coredata.IcpmsDocumentVersion, coredata.IcpmsDocumentVersionOrderField],
	parentType any,
	parentID gid.GID,
	filters *coredata.IcpmsDocumentVersionFilter,
) *IcpmsDocumentVersionConnection {
	var edges = make([]*IcpmsDocumentVersionEdge, len(p.Data))

	for i := range edges {
		edges[i] = NewIcpmsDocumentVersionEdge(p.Data[i], p.Cursor.OrderBy.Field)
	}

	return &IcpmsDocumentVersionConnection{
		Edges:    edges,
		PageInfo: *NewPageInfo(p),

		Resolver: parentType,
		ParentID: parentID,
		Filters:  filters,
	}
}

func NewIcpmsDocumentVersionEdges(versions []*coredata.IcpmsDocumentVersion, orderBy coredata.IcpmsDocumentVersionOrderField) []*IcpmsDocumentVersionEdge {
	edges := make([]*IcpmsDocumentVersionEdge, len(versions))

	for i := range edges {
		edges[i] = NewIcpmsDocumentVersionEdge(versions[i], orderBy)
	}

	return edges
}

func NewIcpmsDocumentVersionEdge(version *coredata.IcpmsDocumentVersion, orderBy coredata.IcpmsDocumentVersionOrderField) *IcpmsDocumentVersionEdge {
	return &IcpmsDocumentVersionEdge{
		Cursor: version.CursorKey(orderBy),
		Node:   NewIcpmsDocumentVersion(version),
	}
}

func NewIcpmsDocumentVersion(version *coredata.IcpmsDocumentVersion) *IcpmsDocumentVersion {
	return &IcpmsDocumentVersion{
		ID: version.ID,
		Organization: &Organization{
			ID: version.OrganizationID,
		},
		Document: &IcpmsDocument{
			ID: version.DocumentID,
		},
		VersionCode:           version.VersionCode,
		VersionName:           version.VersionName,
		Edition:               version.Edition,
		Amendment:             version.Amendment,
		VersionNumber:         version.VersionNumber,
		PublicationDate:       version.PublicationDate,
		EffectiveDate:         version.EffectiveDate,
		ExpiryDate:            version.ExpiryDate,
		SupersedesVersionID:   version.SupersedesVersionID,
		SupersededByVersionID: version.SupersededByVersionID,
		SupersededDate:        version.SupersededDate,
		Status:                IcpmsDocumentVersionStatus(version.Status),
		IsCurrent:             version.IsCurrent,
		ChangeSummary:         version.ChangeSummary,
		Notes:                 version.Notes,
		RawFileStatus:         IcpmsDocumentVersionRawFileStatus(version.RawFileStatus),
		CreatedBy:             version.CreatedBy,
		UpdatedBy:             version.UpdatedBy,
		CreatedAt:             version.CreatedAt,
		UpdatedAt:             version.UpdatedAt,
	}
}
