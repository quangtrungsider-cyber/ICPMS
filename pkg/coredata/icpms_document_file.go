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
	"context"
	"fmt"
	"maps"
	"time"

	"github.com/jackc/pgx/v5"
	"go.gearno.de/kit/pg"
	"go.probo.inc/probo/pkg/gid"
	"go.probo.inc/probo/pkg/page"
)



type (
	IcpmsDocumentFile struct {
		ID                gid.GID                       `db:"id"`
		TenantID          gid.TenantID                  `db:"tenant_id"`
		OrganizationID    gid.GID                       `db:"organization_id"`
		DocumentID        gid.GID                       `db:"document_id"`
		DocumentVersionID gid.GID                       `db:"document_version_id"`
		FileID            gid.GID                       `db:"file_id"`
		OriginalFileName  string                        `db:"original_file_name"`
		StoredFileName    string                        `db:"stored_file_name"`
		FileType          string                        `db:"file_type"`
		FileExtension     string                        `db:"file_extension"`
		MimeType          string                        `db:"mime_type"`
		FileSize          int64                         `db:"file_size"`
		StoragePath       string                        `db:"storage_path"`
		UploadStatus      IcpmsDocumentFileStatus       `db:"upload_status"`
		IsActive          bool                          `db:"is_active"`
		TextExtractable   bool                          `db:"text_extractable"`
		ScanWarning       bool                          `db:"scan_warning"`
		Checksum          *string                       `db:"checksum"`
		Notes             *string                       `db:"notes"`
		UploadedBy        gid.GID                       `db:"uploaded_by"`
		UploadedAt        time.Time                     `db:"uploaded_at"`
		DeletedAt         *time.Time                    `db:"deleted_at"`
		CreatedAt         time.Time                     `db:"created_at"`
		UpdatedAt         time.Time                     `db:"updated_at"`
	}

	IcpmsDocumentFiles []*IcpmsDocumentFile
)

func (f IcpmsDocumentFile) CursorKey(orderBy IcpmsDocumentFileOrderField) page.CursorKey {
	switch orderBy {
	case IcpmsDocumentFileOrderFieldCreatedAt:
		return page.NewCursorKey(f.ID, f.CreatedAt)
	}

	panic(fmt.Sprintf("unsupported order by: %s", orderBy))
}

func (f *IcpmsDocumentFile) LoadByID(
	ctx context.Context,
	conn pg.Querier,
	scope Scoper,
	fileID gid.GID,
) error {
	q := `
SELECT
    tenant_id,
    id,
    organization_id,
    document_id,
    document_version_id,
    file_id,
    original_file_name,
    stored_file_name,
    file_type,
    file_extension,
    mime_type,
    file_size,
    storage_path,
    upload_status,
    is_active,
    text_extractable,
    scan_warning,
    checksum,
    notes,
    uploaded_by,
    uploaded_at,
    deleted_at,
    created_at,
    updated_at
FROM
    icpms_document_files
WHERE
    %s
    AND id = @id
LIMIT 1;
`

	q = fmt.Sprintf(q, scope.SQLFragment())

	args := pgx.StrictNamedArgs{"id": fileID}
	maps.Copy(args, scope.SQLArguments())

	rows, err := conn.Query(ctx, q, args)
	if err != nil {
		return fmt.Errorf("cannot query icpms document file: %w", err)
	}

	file, err := pgx.CollectExactlyOneRow(rows, pgx.RowToStructByName[IcpmsDocumentFile])
	if err != nil {
		return fmt.Errorf("cannot collect icpms document file: %w", err)
	}

	*f = file

	return nil
}

func (f IcpmsDocumentFile) Insert(
	ctx context.Context,
	conn pg.Tx,
	scope Scoper,
) error {
	q := `
INSERT INTO
    icpms_document_files (
        tenant_id,
        id,
        organization_id,
        document_id,
        document_version_id,
        file_id,
        original_file_name,
        stored_file_name,
        file_type,
        file_extension,
        mime_type,
        file_size,
        storage_path,
        upload_status,
        is_active,
        text_extractable,
        scan_warning,
        checksum,
        notes,
        uploaded_by,
        uploaded_at,
        deleted_at,
        created_at,
        updated_at
    )
VALUES (
    @tenant_id,
    @id,
    @organization_id,
    @document_id,
    @document_version_id,
    @file_id,
    @original_file_name,
    @stored_file_name,
    @file_type,
    @file_extension,
    @mime_type,
    @file_size,
    @storage_path,
    @upload_status,
    @is_active,
    @text_extractable,
    @scan_warning,
    @checksum,
    @notes,
    @uploaded_by,
    @uploaded_at,
    @deleted_at,
    @created_at,
    @updated_at
)
`

	args := pgx.StrictNamedArgs{
		"tenant_id":           scope.GetTenantID(),
		"id":                  f.ID,
		"organization_id":     f.OrganizationID,
		"document_id":         f.DocumentID,
		"document_version_id": f.DocumentVersionID,
		"file_id":             f.FileID,
		"original_file_name":  f.OriginalFileName,
		"stored_file_name":    f.StoredFileName,
		"file_type":           f.FileType,
		"file_extension":      f.FileExtension,
		"mime_type":           f.MimeType,
		"file_size":           f.FileSize,
		"storage_path":        f.StoragePath,
		"upload_status":       f.UploadStatus,
		"is_active":           f.IsActive,
		"text_extractable":    f.TextExtractable,
		"scan_warning":        f.ScanWarning,
		"checksum":            f.Checksum,
		"notes":               f.Notes,
		"uploaded_by":         f.UploadedBy,
		"uploaded_at":         f.UploadedAt,
		"deleted_at":          f.DeletedAt,
		"created_at":          f.CreatedAt,
		"updated_at":          f.UpdatedAt,
	}

	_, err := conn.Exec(ctx, q, args)
	if err != nil {
		return fmt.Errorf("cannot insert icpms document file: %w", err)
	}

	return nil
}

func (f IcpmsDocumentFile) Update(
	ctx context.Context,
	conn pg.Tx,
	scope Scoper,
) error {
	q := `
UPDATE
    icpms_document_files
SET
    upload_status = @upload_status,
    is_active = @is_active,
    text_extractable = @text_extractable,
    scan_warning = @scan_warning,
    notes = @notes,
    deleted_at = @deleted_at,
    updated_at = @updated_at
WHERE
    %s
    AND id = @id
`

	q = fmt.Sprintf(q, scope.SQLFragment())

	args := pgx.StrictNamedArgs{
		"id":               f.ID,
		"upload_status":    f.UploadStatus,
		"is_active":        f.IsActive,
		"text_extractable": f.TextExtractable,
		"scan_warning":     f.ScanWarning,
		"notes":            f.Notes,
		"deleted_at":       f.DeletedAt,
		"updated_at":       f.UpdatedAt,
	}
	maps.Copy(args, scope.SQLArguments())

	_, err := conn.Exec(ctx, q, args)

	return err
}

func (f IcpmsDocumentFile) SoftDelete(
	ctx context.Context,
	conn pg.Tx,
	scope Scoper,
) error {
	q := `
UPDATE
    icpms_document_files
SET
    upload_status = 'DELETED',
    is_active = false,
    deleted_at = @deleted_at,
    updated_at = @updated_at
WHERE
    %s
    AND id = @id
`

	q = fmt.Sprintf(q, scope.SQLFragment())

	args := pgx.StrictNamedArgs{
		"id":         f.ID,
		"deleted_at": time.Now(),
		"updated_at": time.Now(),
	}
	maps.Copy(args, scope.SQLArguments())

	_, err := conn.Exec(ctx, q, args)
	if err != nil {
		return fmt.Errorf("cannot soft delete icpms document file: %w", err)
	}

	return nil
}

func (f IcpmsDocumentFile) ReplaceActiveFiles(
	ctx context.Context,
	conn pg.Tx,
	scope Scoper,
) error {
	q := `
UPDATE
    icpms_document_files
SET
    is_active = false,
    updated_at = @updated_at
WHERE
    %s
    AND document_version_id = @document_version_id
    AND id != @id
    AND is_active = true
`

	q = fmt.Sprintf(q, scope.SQLFragment())

	args := pgx.StrictNamedArgs{
		"id":                  f.ID,
		"document_version_id": f.DocumentVersionID,
		"updated_at":          time.Now(),
	}
	maps.Copy(args, scope.SQLArguments())

	_, err := conn.Exec(ctx, q, args)
	if err != nil {
		return fmt.Errorf("cannot update old active icpms document files: %w", err)
	}

	return nil
}

func (f *IcpmsDocumentFiles) LoadByDocumentVersionID(
	ctx context.Context,
	conn pg.Querier,
	scope Scoper,
	documentVersionID gid.GID,
	cursor *page.Cursor[IcpmsDocumentFileOrderField],
	filter *IcpmsDocumentFileFilter,
) error {
	q := `
SELECT
    tenant_id,
    id,
    organization_id,
    document_id,
    document_version_id,
    file_id,
    original_file_name,
    stored_file_name,
    file_type,
    file_extension,
    mime_type,
    file_size,
    storage_path,
    upload_status,
    is_active,
    text_extractable,
    scan_warning,
    checksum,
    notes,
    uploaded_by,
    uploaded_at,
    deleted_at,
    created_at,
    updated_at
FROM
    icpms_document_files
WHERE
    %s
    AND document_version_id = @document_version_id
    AND deleted_at IS NULL
    AND %s
    AND %s
`

	q = fmt.Sprintf(q, scope.SQLFragment(), filter.SQLFragment(), cursor.SQLFragment())

	args := pgx.StrictNamedArgs{"document_version_id": documentVersionID}
	maps.Copy(args, scope.SQLArguments())
	maps.Copy(args, filter.SQLArguments())
	maps.Copy(args, cursor.SQLArguments())

	rows, err := conn.Query(ctx, q, args)
	if err != nil {
		return fmt.Errorf("cannot query icpms document files: %w", err)
	}

	files, err := pgx.CollectRows(rows, pgx.RowToAddrOfStructByName[IcpmsDocumentFile])
	if err != nil {
		return fmt.Errorf("cannot collect icpms document files: %w", err)
	}

	*f = files

	return nil
}

func (f *IcpmsDocumentFiles) CountByDocumentVersionID(
	ctx context.Context,
	conn pg.Querier,
	scope Scoper,
	documentVersionID gid.GID,
	filter *IcpmsDocumentFileFilter,
) (int, error) {
	q := `
SELECT
    COUNT(id)
FROM
    icpms_document_files
WHERE
    %s
    AND document_version_id = @document_version_id
    AND deleted_at IS NULL
    AND %s
`

	q = fmt.Sprintf(q, scope.SQLFragment(), filter.SQLFragment())

	args := pgx.StrictNamedArgs{"document_version_id": documentVersionID}
	maps.Copy(args, scope.SQLArguments())
	maps.Copy(args, filter.SQLArguments())

	row := conn.QueryRow(ctx, q, args)

	var count int

	err := row.Scan(&count)
	if err != nil {
		return 0, fmt.Errorf("cannot count icpms document files: %w", err)
	}

	return count, nil
}
