// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package probo

import (
	"context"
	"fmt"
	"time"

	"go.gearno.de/kit/pg"
	"go.probo.inc/probo/pkg/coredata"
	"go.probo.inc/probo/pkg/gid"
	"go.probo.inc/probo/pkg/page"
)

type IcpmsDocumentVersionService struct {
	svc *Service
}

func (s *IcpmsDocumentVersionService) Get(
	ctx context.Context,
	scope coredata.Scoper,
	versionID gid.GID,
) (*coredata.IcpmsDocumentVersion, error) {
	var version coredata.IcpmsDocumentVersion

	err := s.svc.pg.WithConn(
		ctx,
		func(ctx context.Context, conn pg.Querier) error {
			if err := version.LoadByID(ctx, conn, scope, versionID); err != nil {
				return fmt.Errorf("cannot load icpms_document_version: %w", err)
			}

			return nil
		},
	)

	return &version, err
}

func (s *IcpmsDocumentVersionService) ListForDocumentID(
	ctx context.Context,
	scope coredata.Scoper,
	documentID gid.GID,
	cursor *page.Cursor[coredata.IcpmsDocumentVersionOrderField],
	filter *coredata.IcpmsDocumentVersionFilter,
) (*page.Page[*coredata.IcpmsDocumentVersion, coredata.IcpmsDocumentVersionOrderField], error) {
	var versions coredata.IcpmsDocumentVersions

	err := s.svc.pg.WithConn(
		ctx,
		func(ctx context.Context, conn pg.Querier) error {
			if err := versions.LoadByDocumentID(ctx, conn, scope, documentID, cursor, filter); err != nil {
				return fmt.Errorf("cannot load icpms_document_versions: %w", err)
			}

			return nil
		},
	)

	if err != nil {
		return nil, err
	}

	return page.NewPage(versions, cursor), nil
}

func (s *IcpmsDocumentVersionService) CountForDocumentID(
	ctx context.Context,
	scope coredata.Scoper,
	documentID gid.GID,
	filter *coredata.IcpmsDocumentVersionFilter,
) (int, error) {
	var count int

	err := s.svc.pg.WithConn(
		ctx,
		func(ctx context.Context, conn pg.Querier) error {
			var versions coredata.IcpmsDocumentVersions
			c, err := versions.CountByDocumentID(ctx, conn, scope, documentID, filter)
			if err != nil {
				return fmt.Errorf("cannot count icpms_document_versions: %w", err)
			}

			count = c

			return nil
		},
	)

	return count, err
}

func (s *IcpmsDocumentVersionService) Create(
	ctx context.Context,
	scope coredata.Scoper,
	version *coredata.IcpmsDocumentVersion,
) error {
	version.ID = gid.New(scope.GetTenantID(), coredata.IcpmsDocumentVersionEntityType)

	err := s.svc.pg.WithTx(
		ctx,
		func(ctx context.Context, tx pg.Tx) error {
			// Check for duplicate VersionCode
			var existing coredata.IcpmsDocumentVersions
			filter := &coredata.IcpmsDocumentVersionFilter{
				DocumentID:  &version.DocumentID,
				VersionCode: &version.VersionCode,
			}
			c, err := existing.CountByDocumentID(ctx, tx, scope, version.DocumentID, filter)
			if err != nil {
				return fmt.Errorf("cannot count existing versions: %w", err)
			}
			if c > 0 {
				return fmt.Errorf("phiên bản '%s' đã tồn tại", version.VersionCode)
			}

			if err := version.Insert(ctx, tx, scope); err != nil {
				return fmt.Errorf("cannot insert icpms_document_version: %w", err)
			}

			return nil
		},
	)

	return err
}

func (s *IcpmsDocumentVersionService) Update(
	ctx context.Context,
	scope coredata.Scoper,
	version *coredata.IcpmsDocumentVersion,
) error {
	err := s.svc.pg.WithTx(
		ctx,
		func(ctx context.Context, tx pg.Tx) error {
			if err := version.Update(ctx, tx, scope); err != nil {
				return fmt.Errorf("cannot update icpms_document_version: %w", err)
			}

			return nil
		},
	)

	return err
}

func (s *IcpmsDocumentVersionService) Delete(
	ctx context.Context,
	scope coredata.Scoper,
	version *coredata.IcpmsDocumentVersion,
) error {
	err := s.svc.pg.WithTx(
		ctx,
		func(ctx context.Context, tx pg.Tx) error {
			if err := version.SoftDelete(ctx, tx, scope); err != nil {
				return fmt.Errorf("cannot soft delete icpms_document_version: %w", err)
			}

			return nil
		},
	)

	return err
}

func (s *IcpmsDocumentVersionService) SetCurrentVersion(
	ctx context.Context,
	scope coredata.Scoper,
	versionID gid.GID,
) error {
	err := s.svc.pg.WithTx(
		ctx,
		func(ctx context.Context, tx pg.Tx) error {
			var newCurrentVersion coredata.IcpmsDocumentVersion
			if err := newCurrentVersion.LoadByID(ctx, tx, scope, versionID); err != nil {
				return fmt.Errorf("cannot load new current version: %w", err)
			}

			// 1. Find the current version(s) for this document and mark them as superseded
			isCurrentTrue := true
			filter := &coredata.IcpmsDocumentVersionFilter{
				DocumentID: &newCurrentVersion.DocumentID,
				IsCurrent:  &isCurrentTrue,
			}
			cursor := page.NewCursor(
				100,
				nil,
				page.Head,
				page.OrderBy[coredata.IcpmsDocumentVersionOrderField]{
					Field:     coredata.IcpmsDocumentVersionOrderFieldCreatedAt,
					Direction: page.OrderDirectionAsc,
				},
			)
			var oldVersions coredata.IcpmsDocumentVersions
			if err := oldVersions.LoadByDocumentID(ctx, tx, scope, newCurrentVersion.DocumentID, cursor, filter); err != nil {
				return fmt.Errorf("cannot load old current versions: %w", err)
			}

			now := time.Now()
			for _, oldVer := range oldVersions {
				if oldVer.ID == newCurrentVersion.ID {
					continue
				}
				oldVer.IsCurrent = false
				oldVer.Status = coredata.IcpmsDocumentVersionStatusSuperseded
				oldVer.SupersededDate = &now
				oldVer.SupersededByVersionID = &newCurrentVersion.ID
				oldVer.UpdatedAt = now

				if err := oldVer.Update(ctx, tx, scope); err != nil {
					return fmt.Errorf("cannot update old version: %w", err)
				}
			}

			// 2. Mark the new version as current
			newCurrentVersion.IsCurrent = true
			newCurrentVersion.Status = coredata.IcpmsDocumentVersionStatusCurrent
			newCurrentVersion.UpdatedAt = now
			if newCurrentVersion.SupersedesVersionID == nil && len(oldVersions) > 0 {
				// If not explicitly set, use the first old current version as supersedes_version_id
				newCurrentVersion.SupersedesVersionID = &oldVersions[0].ID
			}
			if err := newCurrentVersion.Update(ctx, tx, scope); err != nil {
				return fmt.Errorf("cannot update new current version: %w", err)
			}

			return nil
		},
	)

	return err
}
