// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package types

import (
	"go.probo.inc/probo/pkg/coredata"
	"go.probo.inc/probo/pkg/gid"
	"go.probo.inc/probo/pkg/page"
)

type (
	IcpmsDocumentFileConnection struct {
		TotalCount int
		Edges      []*IcpmsDocumentFileEdge
		PageInfo   PageInfo

		Resolver any
		ParentID gid.GID
		Filters  *coredata.IcpmsDocumentFileFilter
	}
)

func NewIcpmsDocumentFileConnection(
	p *page.Page[*coredata.IcpmsDocumentFile, coredata.IcpmsDocumentFileOrderField],
	parentType any,
	parentID gid.GID,
	filters *coredata.IcpmsDocumentFileFilter,
) *IcpmsDocumentFileConnection {
	var edges = make([]*IcpmsDocumentFileEdge, len(p.Data))

	for i := range edges {
		edges[i] = NewIcpmsDocumentFileEdge(p.Data[i], p.Cursor.OrderBy.Field)
	}

	return &IcpmsDocumentFileConnection{
		Edges:    edges,
		PageInfo: *NewPageInfo(p),

		Resolver: parentType,
		ParentID: parentID,
		Filters:  filters,
	}
}

func NewIcpmsDocumentFileEdges(files []*coredata.IcpmsDocumentFile, orderBy coredata.IcpmsDocumentFileOrderField) []*IcpmsDocumentFileEdge {
	edges := make([]*IcpmsDocumentFileEdge, len(files))

	for i := range edges {
		edges[i] = NewIcpmsDocumentFileEdge(files[i], orderBy)
	}

	return edges
}

func NewIcpmsDocumentFileEdge(file *coredata.IcpmsDocumentFile, orderBy coredata.IcpmsDocumentFileOrderField) *IcpmsDocumentFileEdge {
	return &IcpmsDocumentFileEdge{
		Cursor: file.CursorKey(orderBy),
		Node:   NewIcpmsDocumentFile(file),
	}
}

func NewIcpmsDocumentFile(file *coredata.IcpmsDocumentFile) *IcpmsDocumentFile {
	return &IcpmsDocumentFile{
		ID: file.ID,
		Organization: &Organization{
			ID: file.OrganizationID,
		},
		Document: &IcpmsDocument{
			ID: file.DocumentID,
		},
		DocumentVersion: &IcpmsDocumentVersion{
			ID: file.DocumentVersionID,
		},
		OriginalFileName: file.OriginalFileName,
		StoredFileName:   file.StoredFileName,
		FileType:         file.FileType,
		FileExtension:    file.FileExtension,
		MimeType:         file.MimeType,
		FileSize:         file.FileSize,
		StoragePath:      file.StoragePath,
		UploadStatus:     IcpmsDocumentFileStatus(file.UploadStatus),
		IsActive:         file.IsActive,
		TextExtractable:  file.TextExtractable,
		ScanWarning:      file.ScanWarning,
		Checksum:         file.Checksum,
		Notes:            file.Notes,
		UploadedBy:       file.UploadedBy,
		UploadedAt:       file.UploadedAt,
		DeletedAt:        file.DeletedAt,
		CreatedAt:        file.CreatedAt,
		UpdatedAt:        file.UpdatedAt,
	}
}
