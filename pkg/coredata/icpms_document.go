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
	IcpmsDocument struct {
		ID                 gid.GID                      `db:"id"`
		TenantID           gid.TenantID                 `db:"tenant_id"`
		OrganizationID     gid.GID                      `db:"organization_id"`
		Code               string                       `db:"code"`
		DocumentCode       *string                      `db:"document_code"`
		Title              string                       `db:"title"`
		DocumentType       IcpmsDocumentType            `db:"document_type"`
		DocumentGroup      *IcpmsDocumentGroup          `db:"document_group"`
		SourceOrganization *string                      `db:"source_organization"`
		Issuer             *string                      `db:"issuer"`
		MainDomain         *string                      `db:"main_domain"`
		PageCount          *int                         `db:"page_count"`
		IssuedDate         *time.Time                   `db:"issued_date"`
		EffectiveDate      *time.Time                   `db:"effective_date"`
		Language           *string                      `db:"language"`
		Classification     *IcpmsDocumentClassification `db:"classification"`
		ApplicableToVatm   *IcpmsDocumentApplicability  `db:"applicable_to_vatm"`
		Priority           *IcpmsDocumentPriority       `db:"priority"`
		Status             IcpmsDocumentStatus          `db:"status"`
		Description        *string                      `db:"description"`
		Notes              *string                      `db:"notes"`
		OwningUnitID       *gid.GID                     `db:"owning_unit_id"`
		CreatedBy          gid.GID                      `db:"created_by"`
		UpdatedBy          gid.GID                      `db:"updated_by"`
		CreatedAt          time.Time                    `db:"created_at"`
		UpdatedAt          time.Time                    `db:"updated_at"`
		DeletedAt          *time.Time                   `db:"deleted_at"`
	}

	IcpmsDocuments []*IcpmsDocument
)

func (IcpmsDocument) IsNode() {}

func (p IcpmsDocument) CursorKey(orderBy IcpmsDocumentOrderField) page.CursorKey {
	switch orderBy {
	case IcpmsDocumentOrderFieldCreatedAt:
		return page.NewCursorKey(p.ID, p.CreatedAt)
	case IcpmsDocumentOrderFieldUpdatedAt:
		return page.NewCursorKey(p.ID, p.UpdatedAt)
	case IcpmsDocumentOrderFieldCode:
		return page.NewCursorKey(p.ID, p.Code)
	case IcpmsDocumentOrderFieldTitle:
		return page.NewCursorKey(p.ID, p.Title)
	}

	panic(fmt.Sprintf("unsupported order by: %s", orderBy))
}

// AuthorizationAttributes returns the authorization attributes for policy evaluation.
func (d *IcpmsDocument) AuthorizationAttributes(
	ctx context.Context,
	conn pg.Querier,
	resourceIDs []gid.GID,
) (policy.AttributesByID, error) {
	q := `SELECT id, organization_id FROM icpms_documents WHERE id = ANY(@resource_ids::text[])`

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

func (p *IcpmsDocument) LoadByID(
	ctx context.Context,
	conn pg.Querier,
	scope Scoper,
	documentID gid.GID,
) error {
	q := `
SELECT * FROM icpms_documents
WHERE %s AND deleted_at IS NULL AND id = @document_id
LIMIT 1;
`
	q = fmt.Sprintf(q, scope.SQLFragment())

	args := pgx.StrictNamedArgs{"document_id": documentID}
	maps.Copy(args, scope.SQLArguments())

	rows, err := conn.Query(ctx, q, args)
	if err != nil {
		return fmt.Errorf("cannot query icpms_documents: %w", err)
	}

	document, err := pgx.CollectExactlyOneRow(rows, pgx.RowToStructByName[IcpmsDocument])
	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			return ErrResourceNotFound
		}

		return fmt.Errorf("cannot collect icpms_document: %w", err)
	}

	*p = document
	return nil
}

func (p *IcpmsDocument) LoadByCode(
	ctx context.Context,
	conn pg.Querier,
	scope Scoper,
	organizationID gid.GID,
	code string,
) error {
	q := `
SELECT * FROM icpms_documents
WHERE %s AND deleted_at IS NULL AND organization_id = @organization_id AND code = @code
LIMIT 1;
`
	q = fmt.Sprintf(q, scope.SQLFragment())

	args := pgx.StrictNamedArgs{"organization_id": organizationID, "code": code}
	maps.Copy(args, scope.SQLArguments())

	rows, err := conn.Query(ctx, q, args)
	if err != nil {
		return fmt.Errorf("cannot query icpms_documents by code: %w", err)
	}

	document, err := pgx.CollectExactlyOneRow(rows, pgx.RowToStructByName[IcpmsDocument])
	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			return ErrResourceNotFound
		}

		return fmt.Errorf("cannot collect icpms_document by code: %w", err)
	}

	*p = document
	return nil
}

func (p *IcpmsDocuments) LoadByOrganizationID(
	ctx context.Context,
	conn pg.Querier,
	scope Scoper,
	organizationID gid.GID,
	cursor *page.Cursor[IcpmsDocumentOrderField],
	filter *IcpmsDocumentFilter,
) error {
	q := `
WITH base AS (
    SELECT *
    FROM icpms_documents
    WHERE
        %s
        AND deleted_at IS NULL
        AND organization_id = @organization_id
        AND %s
)
SELECT * FROM base WHERE %s
`

	q = fmt.Sprintf(q, scope.SQLFragment(), filter.SQLFragment(), cursor.SQLFragment())

	args := pgx.NamedArgs{"organization_id": organizationID}
	maps.Copy(args, scope.SQLArguments())
	maps.Copy(args, filter.SQLArguments())
	maps.Copy(args, cursor.SQLArguments())

	rows, err := conn.Query(ctx, q, args)
	if err != nil {
		return fmt.Errorf("cannot query icpms_documents: %w", err)
	}

	documents, err := pgx.CollectRows(rows, pgx.RowToAddrOfStructByName[IcpmsDocument])
	if err != nil {
		return fmt.Errorf("cannot collect icpms_documents: %w", err)
	}

	*p = documents

	return nil
}

func (p *IcpmsDocuments) CountByOrganizationID(
	ctx context.Context,
	conn pg.Querier,
	scope Scoper,
	organizationID gid.GID,
	filter *IcpmsDocumentFilter,
) (int, error) {
	q := `
SELECT
	COUNT(id)
FROM
    icpms_documents
WHERE
    %s
    AND deleted_at IS NULL
    AND organization_id = @organization_id
    AND %s
`

	q = fmt.Sprintf(q, scope.SQLFragment(), filter.SQLFragment())

	args := pgx.NamedArgs{"organization_id": organizationID}
	maps.Copy(args, scope.SQLArguments())
	maps.Copy(args, filter.SQLArguments())

	row := conn.QueryRow(ctx, q, args)

	var count int
	if err := row.Scan(&count); err != nil {
		return 0, fmt.Errorf("cannot scan count: %w", err)
	}

	return count, nil
}

func (p *IcpmsDocuments) LoadAllByOrganizationID(
	ctx context.Context,
	conn pg.Querier,
	scope Scoper,
	organizationID gid.GID,
	filter *IcpmsDocumentFilter,
) error {
	q := `
SELECT *
FROM icpms_documents
WHERE
    %s
    AND deleted_at IS NULL
    AND organization_id = @organization_id
    AND %s
ORDER BY title ASC
`

	q = fmt.Sprintf(q, scope.SQLFragment(), filter.SQLFragment())

	args := pgx.NamedArgs{"organization_id": organizationID}
	maps.Copy(args, scope.SQLArguments())
	maps.Copy(args, filter.SQLArguments())

	rows, err := conn.Query(ctx, q, args)
	if err != nil {
		return fmt.Errorf("cannot query all icpms_documents: %w", err)
	}

	documents, err := pgx.CollectRows(rows, pgx.RowToAddrOfStructByName[IcpmsDocument])
	if err != nil {
		return fmt.Errorf("cannot collect all icpms_documents: %w", err)
	}

	*p = documents

	return nil
}

func (p IcpmsDocument) Insert(
	ctx context.Context,
	conn pg.Tx,
	scope Scoper,
) error {
	q := `
INSERT INTO
    icpms_documents (
        tenant_id,
        id,
        organization_id,
        code,
        document_code,
        title,
        document_type,
        document_group,
        source_organization,
        issuer,
        main_domain,
        page_count,
        issued_date,
        effective_date,
        language,
        classification,
        applicable_to_vatm,
        priority,
        status,
        description,
        notes,
        owning_unit_id,
        created_by,
        updated_by,
        created_at,
        updated_at
    )
VALUES (
    @tenant_id,
    @document_id,
    @organization_id,
    @code,
    @document_code,
    @title,
    @document_type,
    @document_group,
    @source_organization,
    @issuer,
    @main_domain,
    @page_count,
    @issued_date,
    @effective_date,
    @language,
    @classification,
    @applicable_to_vatm,
    @priority,
    @status,
    @description,
    @notes,
    @owning_unit_id,
    @created_by,
    @updated_by,
    @created_at,
    @updated_at
);
`

	args := pgx.StrictNamedArgs{
		"tenant_id":           scope.GetTenantID(),
		"document_id":         p.ID,
		"organization_id":     p.OrganizationID,
		"code":                p.Code,
		"document_code":       p.DocumentCode,
		"title":               p.Title,
		"document_type":       p.DocumentType,
		"document_group":      p.DocumentGroup,
		"source_organization": p.SourceOrganization,
		"issuer":              p.Issuer,
		"main_domain":         p.MainDomain,
		"page_count":          p.PageCount,
		"issued_date":         p.IssuedDate,
		"effective_date":      p.EffectiveDate,
		"language":            p.Language,
		"classification":      p.Classification,
		"applicable_to_vatm":  p.ApplicableToVatm,
		"priority":            p.Priority,
		"status":              p.Status,
		"description":         p.Description,
		"notes":               p.Notes,
		"owning_unit_id":      p.OwningUnitID,
		"created_by":          p.CreatedBy,
		"updated_by":          p.UpdatedBy,
		"created_at":          p.CreatedAt,
		"updated_at":          p.UpdatedAt,
	}
	_, err := conn.Exec(ctx, q, args)

	return err
}

func (p *IcpmsDocument) Update(
	ctx context.Context,
	conn pg.Tx,
	scope Scoper,
) error {
	q := `
UPDATE
	icpms_documents
SET
	code = @code,
	document_code = @document_code,
	title = @title,
	document_type = @document_type,
	document_group = @document_group,
	source_organization = @source_organization,
	issuer = @issuer,
	main_domain = @main_domain,
	page_count = @page_count,
	issued_date = @issued_date,
	effective_date = @effective_date,
	language = @language,
	classification = @classification,
	applicable_to_vatm = @applicable_to_vatm,
	priority = @priority,
	status = @status,
	description = @description,
	notes = @notes,
	owning_unit_id = @owning_unit_id,
	updated_by = @updated_by,
	updated_at = @updated_at
WHERE
	%s
	AND id = @document_id
	AND deleted_at IS NULL
`
	q = fmt.Sprintf(q, scope.SQLFragment())

	args := pgx.StrictNamedArgs{
		"document_id":         p.ID,
		"code":                p.Code,
		"document_code":       p.DocumentCode,
		"title":               p.Title,
		"document_type":       p.DocumentType,
		"document_group":      p.DocumentGroup,
		"source_organization": p.SourceOrganization,
		"issuer":              p.Issuer,
		"main_domain":         p.MainDomain,
		"page_count":          p.PageCount,
		"issued_date":         p.IssuedDate,
		"effective_date":      p.EffectiveDate,
		"language":            p.Language,
		"classification":      p.Classification,
		"applicable_to_vatm":  p.ApplicableToVatm,
		"priority":            p.Priority,
		"status":              p.Status,
		"description":         p.Description,
		"notes":               p.Notes,
		"owning_unit_id":      p.OwningUnitID,
		"updated_by":          p.UpdatedBy,
		"updated_at":          time.Now(),
	}
	maps.Copy(args, scope.SQLArguments())

	_, err := conn.Exec(ctx, q, args)
	if err != nil {
		return fmt.Errorf("cannot update icpms_document: %w", err)
	}

	return nil
}

func (p IcpmsDocument) SoftDelete(
	ctx context.Context,
	conn pg.Tx,
	scope Scoper,
) error {
	q := `
UPDATE icpms_documents SET deleted_at = @deleted_at, status = @deleted_status WHERE %s AND id = @document_id
`
	q = fmt.Sprintf(q, scope.SQLFragment())

	args := pgx.StrictNamedArgs{"document_id": p.ID, "deleted_at": time.Now(), "deleted_status": IcpmsDocumentStatusDeleted}
	maps.Copy(args, scope.SQLArguments())

	_, err := conn.Exec(ctx, q, args)

	return err
}
