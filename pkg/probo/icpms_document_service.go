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

package probo

import (
	"context"
	"errors"
	"fmt"
	"time"

	"github.com/jackc/pgx/v5/pgconn"
	"go.gearno.de/kit/pg"
	"go.probo.inc/probo/pkg/coredata"
	"go.probo.inc/probo/pkg/gid"
	"go.probo.inc/probo/pkg/page"
)

type IcpmsDocumentService struct {
	svc *Service
}

func (s *IcpmsDocumentService) Get(
	ctx context.Context,
	scope coredata.Scoper,
	documentID gid.GID,
) (*coredata.IcpmsDocument, error) {
	var document coredata.IcpmsDocument

	err := s.svc.pg.WithConn(
		ctx,
		func(ctx context.Context, conn pg.Querier) error {
			if err := document.LoadByID(ctx, conn, scope, documentID); err != nil {
				return fmt.Errorf("cannot load icpms_document: %w", err)
			}

			return nil
		},
	)

	return &document, err
}

func (s *IcpmsDocumentService) GetByCode(
	ctx context.Context,
	scope coredata.Scoper,
	organizationID gid.GID,
	code string,
) (*coredata.IcpmsDocument, error) {
	var document coredata.IcpmsDocument

	err := s.svc.pg.WithConn(
		ctx,
		func(ctx context.Context, conn pg.Querier) error {
			if err := document.LoadByCode(ctx, conn, scope, organizationID, code); err != nil {
				return fmt.Errorf("cannot load icpms_document by code: %w", err)
			}

			return nil
		},
	)

	return &document, err
}

func (s *IcpmsDocumentService) CountForOrganizationID(
	ctx context.Context,
	scope coredata.Scoper,
	organizationID gid.GID,
	filter *coredata.IcpmsDocumentFilter,
) (int, error) {
	var count int

	err := s.svc.pg.WithConn(
		ctx,
		func(ctx context.Context, conn pg.Querier) error {
			var documents coredata.IcpmsDocuments
			c, err := documents.CountByOrganizationID(ctx, conn, scope, organizationID, filter)
			if err != nil {
				return fmt.Errorf("cannot count icpms_documents: %w", err)
			}

			count = c

			return nil
		},
	)

	return count, err
}

func (s *IcpmsDocumentService) ListForOrganizationID(
	ctx context.Context,
	scope coredata.Scoper,
	organizationID gid.GID,
	cursor *page.Cursor[coredata.IcpmsDocumentOrderField],
	filter *coredata.IcpmsDocumentFilter,
) (*page.Page[*coredata.IcpmsDocument, coredata.IcpmsDocumentOrderField], error) {
	var documents coredata.IcpmsDocuments

	err := s.svc.pg.WithConn(
		ctx,
		func(ctx context.Context, conn pg.Querier) error {
			if err := documents.LoadByOrganizationID(ctx, conn, scope, organizationID, cursor, filter); err != nil {
				return fmt.Errorf("cannot load icpms_documents: %w", err)
			}

			return nil
		},
	)

	if err != nil {
		return nil, err
	}

	return page.NewPage(documents, cursor), nil
}

func (s *IcpmsDocumentService) ListAllForOrganizationID(
	ctx context.Context,
	scope coredata.Scoper,
	organizationID gid.GID,
	filter *coredata.IcpmsDocumentFilter,
) (coredata.IcpmsDocuments, error) {
	var documents coredata.IcpmsDocuments

	err := s.svc.pg.WithConn(
		ctx,
		func(ctx context.Context, conn pg.Querier) error {
			if err := documents.LoadAllByOrganizationID(ctx, conn, scope, organizationID, filter); err != nil {
				return fmt.Errorf("cannot load all icpms_documents: %w", err)
			}

			return nil
		},
	)

	return documents, err
}

func (s *IcpmsDocumentService) Create(
	ctx context.Context,
	scope coredata.Scoper,
	document *coredata.IcpmsDocument,
) error {
	document.ID = gid.New(scope.GetTenantID(), coredata.IcpmsDocumentEntityType)
	document.TenantID = scope.GetTenantID()
	document.CreatedAt = time.Now()
	document.UpdatedAt = time.Now()

	err := s.svc.pg.WithTx(
		ctx,
		func(ctx context.Context, tx pg.Tx) error {
			if err := document.Insert(ctx, tx, scope); err != nil {
				var pgErr *pgconn.PgError
				if errors.As(err, &pgErr) && pgErr.Code == "23505" {
					return fmt.Errorf("mã tài liệu '%s' đã tồn tại trong tổ chức này, vui lòng sử dụng mã khác", document.Code)
				}
				return fmt.Errorf("cannot insert icpms_document: %w", err)
			}

			return nil
		},
	)

	return err
}

func (s *IcpmsDocumentService) Update(
	ctx context.Context,
	scope coredata.Scoper,
	document *coredata.IcpmsDocument,
) error {
	err := s.svc.pg.WithTx(
		ctx,
		func(ctx context.Context, tx pg.Tx) error {
			if err := document.Update(ctx, tx, scope); err != nil {
				return fmt.Errorf("cannot update icpms_document: %w", err)
			}

			return nil
		},
	)

	return err
}

func (s *IcpmsDocumentService) Delete(
	ctx context.Context,
	scope coredata.Scoper,
	document *coredata.IcpmsDocument,
) error {
	err := s.svc.pg.WithTx(
		ctx,
		func(ctx context.Context, tx pg.Tx) error {
			if err := document.SoftDelete(ctx, tx, scope); err != nil {
				return fmt.Errorf("cannot soft delete icpms_document: %w", err)
			}

			return nil
		},
	)

	return err
}
