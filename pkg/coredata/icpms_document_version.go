// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package coredata

import (
	"context"
	"errors"
	"fmt"
	"maps"
	"time"

	"github.com/jackc/pgx/v5"
	"go.gearno.de/kit/pg"
	"go.probo.inc/probo/pkg/gid"
	"go.probo.inc/probo/pkg/iam/policy"
	"go.probo.inc/probo/pkg/page"
)

type (
	IcpmsDocumentVersion struct {
		ID                      gid.GID                           `db:"id"`
		TenantID                gid.TenantID                      `db:"tenant_id"`
		OrganizationID          gid.GID                           `db:"organization_id"`
		DocumentID              gid.GID                           `db:"document_id"`
		VersionCode             string                            `db:"version_code"`
		VersionName             string                            `db:"version_name"`
		Edition                 *string                           `db:"edition"`
		Amendment               *string                           `db:"amendment"`
		VersionNumber           *string                           `db:"version_number"`
		PublicationDate         *time.Time                        `db:"publication_date"`
		EffectiveDate           *time.Time                        `db:"effective_date"`
		ExpiryDate              *time.Time                        `db:"expiry_date"`
		SupersedesVersionID     *gid.GID                          `db:"supersedes_version_id"`
		SupersededByVersionID   *gid.GID                          `db:"superseded_by_version_id"`
		SupersededDate          *time.Time                        `db:"superseded_date"`
		Status                  IcpmsDocumentVersionStatus        `db:"status"`
		IsCurrent               bool                              `db:"is_current"`
		ChangeSummary           *string                           `db:"change_summary"`
		Notes                   *string                           `db:"notes"`
		RawFileStatus           IcpmsDocumentVersionRawFileStatus `db:"raw_file_status"`
		CreatedBy               gid.GID                           `db:"created_by"`
		UpdatedBy               gid.GID                           `db:"updated_by"`
		CreatedAt               time.Time                         `db:"created_at"`
		UpdatedAt               time.Time                         `db:"updated_at"`
		DeletedAt               *time.Time                        `db:"deleted_at"`
	}

	IcpmsDocumentVersions []*IcpmsDocumentVersion
)

func (IcpmsDocumentVersion) IsNode() {}

func (p IcpmsDocumentVersion) CursorKey(orderBy IcpmsDocumentVersionOrderField) page.CursorKey {
	switch orderBy {
	case IcpmsDocumentVersionOrderFieldCreatedAt:
		return page.NewCursorKey(p.ID, p.CreatedAt)
	case IcpmsDocumentVersionOrderFieldUpdatedAt:
		return page.NewCursorKey(p.ID, p.UpdatedAt)
	case IcpmsDocumentVersionOrderFieldEffectiveDate:
		return page.NewCursorKey(p.ID, p.EffectiveDate)
	case IcpmsDocumentVersionOrderFieldVersionCode:
		return page.NewCursorKey(p.ID, p.VersionCode)
	}

	panic(fmt.Sprintf("unsupported order by: %s", orderBy))
}

// AuthorizationAttributes returns the authorization attributes for policy evaluation.
func (d *IcpmsDocumentVersion) AuthorizationAttributes(
	ctx context.Context,
	conn pg.Querier,
	resourceIDs []gid.GID,
) (policy.AttributesByID, error) {
	q := `SELECT id, organization_id FROM icpms_document_versions WHERE id = ANY(@resource_ids::text[])`

	args := pgx.StrictNamedArgs{
		"resource_ids": resourceIDs,
	}

	rows, err := conn.Query(ctx, q, args)
	if err != nil {
		return nil, fmt.Errorf("cannot query authorization attributes: %w", err)
	}
	defer rows.Close()

	attrsByID := make(policy.AttributesByID)

	for rows.Next() {
		var id, organizationID gid.GID

		if err := rows.Scan(&id, &organizationID); err != nil {
			return nil, fmt.Errorf("cannot scan authorization attributes: %w", err)
		}

		attrsByID[id] = policy.Attributes{
			"organization_id": organizationID.String(),
		}
	}

	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("cannot iterate authorization attributes: %w", err)
	}

	return attrsByID, nil
}

func (p *IcpmsDocumentVersion) LoadByID(
	ctx context.Context,
	conn pg.Querier,
	scope Scoper,
	versionID gid.GID,
) error {
	q := `
SELECT * FROM icpms_document_versions
WHERE %s AND deleted_at IS NULL AND id = @version_id
LIMIT 1;
`
	q = fmt.Sprintf(q, scope.SQLFragment())

	args := pgx.StrictNamedArgs{"version_id": versionID}
	maps.Copy(args, scope.SQLArguments())

	rows, err := conn.Query(ctx, q, args)
	if err != nil {
		return fmt.Errorf("cannot query icpms_document_versions: %w", err)
	}

	version, err := pgx.CollectExactlyOneRow(rows, pgx.RowToStructByName[IcpmsDocumentVersion])
	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			return ErrResourceNotFound
		}
		return fmt.Errorf("cannot collect icpms_document_version: %w", err)
	}

	*p = version
	return nil
}

func (p *IcpmsDocumentVersions) LoadByDocumentID(
	ctx context.Context,
	conn pg.Querier,
	scope Scoper,
	documentID gid.GID,
	cursor *page.Cursor[IcpmsDocumentVersionOrderField],
	filter *IcpmsDocumentVersionFilter,
) error {
	q := `
WITH base AS (
    SELECT *
    FROM icpms_document_versions
    WHERE
        %s
        AND deleted_at IS NULL
        AND document_id = @document_id
        AND %s
)
SELECT * FROM base WHERE %s
`

	q = fmt.Sprintf(q, scope.SQLFragment(), filter.SQLFragment(), cursor.SQLFragment())

	args := pgx.NamedArgs{"document_id": documentID}
	maps.Copy(args, scope.SQLArguments())
	maps.Copy(args, filter.SQLArguments())
	maps.Copy(args, cursor.SQLArguments())

	rows, err := conn.Query(ctx, q, args)
	if err != nil {
		return fmt.Errorf("cannot query icpms_document_versions: %w", err)
	}

	versions, err := pgx.CollectRows(rows, pgx.RowToAddrOfStructByName[IcpmsDocumentVersion])
	if err != nil {
		return fmt.Errorf("cannot collect icpms_document_versions: %w", err)
	}

	*p = versions
	return nil
}

func (p *IcpmsDocumentVersions) CountByDocumentID(
	ctx context.Context,
	conn pg.Querier,
	scope Scoper,
	documentID gid.GID,
	filter *IcpmsDocumentVersionFilter,
) (int, error) {
	q := `
SELECT
	COUNT(id)
FROM
    icpms_document_versions
WHERE
    %s
    AND deleted_at IS NULL
    AND document_id = @document_id
    AND %s
`

	q = fmt.Sprintf(q, scope.SQLFragment(), filter.SQLFragment())

	args := pgx.NamedArgs{"document_id": documentID}
	maps.Copy(args, scope.SQLArguments())
	maps.Copy(args, filter.SQLArguments())

	row := conn.QueryRow(ctx, q, args)

	var count int
	if err := row.Scan(&count); err != nil {
		return 0, fmt.Errorf("cannot scan count: %w", err)
	}

	return count, nil
}

func (p IcpmsDocumentVersion) Insert(
	ctx context.Context,
	conn pg.Tx,
	scope Scoper,
) error {
	q := `
INSERT INTO
    icpms_document_versions (
        tenant_id,
        id,
        organization_id,
        document_id,
        version_code,
        version_name,
        edition,
        amendment,
        version_number,
        publication_date,
        effective_date,
        expiry_date,
        supersedes_version_id,
        superseded_by_version_id,
        superseded_date,
        status,
        is_current,
        change_summary,
        notes,
        raw_file_status,
        created_by,
        updated_by,
        created_at,
        updated_at
    )
VALUES (
    @tenant_id,
    @version_id,
    @organization_id,
    @document_id,
    @version_code,
    @version_name,
    @edition,
    @amendment,
    @version_number,
    @publication_date,
    @effective_date,
    @expiry_date,
    @supersedes_version_id,
    @superseded_by_version_id,
    @superseded_date,
    @status,
    @is_current,
    @change_summary,
    @notes,
    @raw_file_status,
    @created_by,
    @updated_by,
    @created_at,
    @updated_at
);
`

	args := pgx.StrictNamedArgs{
		"tenant_id":                scope.GetTenantID(),
		"version_id":               p.ID,
		"organization_id":          p.OrganizationID,
		"document_id":              p.DocumentID,
		"version_code":             p.VersionCode,
		"version_name":             p.VersionName,
		"edition":                  p.Edition,
		"amendment":                p.Amendment,
		"version_number":           p.VersionNumber,
		"publication_date":         p.PublicationDate,
		"effective_date":           p.EffectiveDate,
		"expiry_date":              p.ExpiryDate,
		"supersedes_version_id":    p.SupersedesVersionID,
		"superseded_by_version_id": p.SupersededByVersionID,
		"superseded_date":          p.SupersededDate,
		"status":                   p.Status,
		"is_current":               p.IsCurrent,
		"change_summary":           p.ChangeSummary,
		"notes":                    p.Notes,
		"raw_file_status":          p.RawFileStatus,
		"created_by":               p.CreatedBy,
		"updated_by":               p.UpdatedBy,
		"created_at":               p.CreatedAt,
		"updated_at":               p.UpdatedAt,
	}
	_, err := conn.Exec(ctx, q, args)

	return err
}

func (p *IcpmsDocumentVersion) Update(
	ctx context.Context,
	conn pg.Tx,
	scope Scoper,
) error {
	q := `
UPDATE
	icpms_document_versions
SET
	version_code = @version_code,
	version_name = @version_name,
	edition = @edition,
	amendment = @amendment,
	version_number = @version_number,
	publication_date = @publication_date,
	effective_date = @effective_date,
	expiry_date = @expiry_date,
	supersedes_version_id = @supersedes_version_id,
	superseded_by_version_id = @superseded_by_version_id,
	superseded_date = @superseded_date,
	status = @status,
	is_current = @is_current,
	change_summary = @change_summary,
	notes = @notes,
	raw_file_status = @raw_file_status,
	updated_by = @updated_by,
	updated_at = @updated_at
WHERE
	%s
	AND id = @version_id
	AND deleted_at IS NULL
`
	q = fmt.Sprintf(q, scope.SQLFragment())

	args := pgx.StrictNamedArgs{
		"version_id":               p.ID,
		"version_code":             p.VersionCode,
		"version_name":             p.VersionName,
		"edition":                  p.Edition,
		"amendment":                p.Amendment,
		"version_number":           p.VersionNumber,
		"publication_date":         p.PublicationDate,
		"effective_date":           p.EffectiveDate,
		"expiry_date":              p.ExpiryDate,
		"supersedes_version_id":    p.SupersedesVersionID,
		"superseded_by_version_id": p.SupersededByVersionID,
		"superseded_date":          p.SupersededDate,
		"status":                   p.Status,
		"is_current":               p.IsCurrent,
		"change_summary":           p.ChangeSummary,
		"notes":                    p.Notes,
		"raw_file_status":          p.RawFileStatus,
		"updated_by":               p.UpdatedBy,
		"updated_at":               time.Now(),
	}
	maps.Copy(args, scope.SQLArguments())

	_, err := conn.Exec(ctx, q, args)
	if err != nil {
		return fmt.Errorf("cannot update icpms_document_version: %w", err)
	}

	return nil
}

func (p IcpmsDocumentVersion) SoftDelete(
	ctx context.Context,
	conn pg.Tx,
	scope Scoper,
) error {
	q := `
UPDATE icpms_document_versions SET deleted_at = @deleted_at, status = @deleted_status WHERE %s AND id = @version_id
`
	q = fmt.Sprintf(q, scope.SQLFragment())

	args := pgx.StrictNamedArgs{"version_id": p.ID, "deleted_at": time.Now(), "deleted_status": IcpmsDocumentVersionStatusDeleted}
	maps.Copy(args, scope.SQLArguments())

	_, err := conn.Exec(ctx, q, args)

	return err
}
