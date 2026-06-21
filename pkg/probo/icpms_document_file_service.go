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
	"fmt"
	"path/filepath"
	"strings"
	"time"

	"go.gearno.de/kit/pg"
	"go.probo.inc/probo/pkg/coredata"
	"go.probo.inc/probo/pkg/filevalidation"
	"go.probo.inc/probo/pkg/gid"
	"go.probo.inc/probo/pkg/page"
	"go.probo.inc/probo/pkg/validator"
)

type (
	IcpmsDocumentFileService struct {
		svc           *Service
		fileValidator *filevalidation.FileValidator
	}

	UploadIcpmsDocumentFileRequest struct {
		DocumentVersionID gid.GID
		File              FileUpload
		UploadedBy        gid.GID
	}
)

func (r *UploadIcpmsDocumentFileRequest) Validate() error {
	v := validator.New()

	v.Check(r.DocumentVersionID, "document_version_id", validator.Required(), validator.GID(coredata.IcpmsDocumentVersionEntityType))
	v.Check(r.File, "file", validator.Required())

	return v.Error()
}

func (s IcpmsDocumentFileService) GetByID(
	ctx context.Context, scope coredata.Scoper,
	fileID gid.GID,
) (*coredata.IcpmsDocumentFile, error) {
	file := &coredata.IcpmsDocumentFile{}

	err := s.svc.pg.WithConn(
		ctx,
		func(ctx context.Context, conn pg.Querier) error {
			if err := file.LoadByID(ctx, conn, scope, fileID); err != nil {
				return fmt.Errorf("cannot load file: %w", err)
			}
			return nil
		},
	)
	if err != nil {
		return nil, fmt.Errorf("cannot load icpms document file: %w", err)
	}

	return file, nil
}

func (s IcpmsDocumentFileService) ListForDocumentVersion(
	ctx context.Context, scope coredata.Scoper,
	documentVersionID gid.GID,
	cursor *page.Cursor[coredata.IcpmsDocumentFileOrderField],
	filter *coredata.IcpmsDocumentFileFilter,
) (*page.Page[*coredata.IcpmsDocumentFile, coredata.IcpmsDocumentFileOrderField], error) {
	var files coredata.IcpmsDocumentFiles

	err := s.svc.pg.WithConn(
		ctx,
		func(ctx context.Context, conn pg.Querier) error {
			return files.LoadByDocumentVersionID(
				ctx,
				conn,
				scope,
				documentVersionID,
				cursor,
				filter,
			)
		},
	)
	if err != nil {
		return nil, err
	}

	return page.NewPage(files, cursor), nil
}

func (s IcpmsDocumentFileService) Upload(
	ctx context.Context, scope coredata.Scoper,
	req UploadIcpmsDocumentFileRequest,
	replace bool,
) (*coredata.IcpmsDocumentFile, error) {
	if err := req.Validate(); err != nil {
		return nil, fmt.Errorf("invalid request: %w", err)
	}

	// 1. Validate file extension strictly (PDF, DOC, DOCX, TXT)
	ext := strings.ToLower(filepath.Ext(req.File.Filename))
	if ext != ".pdf" && ext != ".doc" && ext != ".docx" && ext != ".txt" {
		return nil, fmt.Errorf("định dạng file không được hỗ trợ. vui lòng upload file PDF, DOC, DOCX hoặc TXT")
	}

	// 2. Validate maximum file size 100MB
	if req.File.Size > 100*1024*1024 {
		return nil, fmt.Errorf("file vượt quá dung lượng cho phép (tối đa 100MB)")
	}

	docFileID := gid.New(scope.GetTenantID(), coredata.IcpmsDocumentFileEntityType)
	now := time.Now()

	// 3. Simple text extractable & scan warning logic based on extension
	textExtractable := true
	scanWarning := false
	if ext == ".pdf" {
		// Trong Phase 5, chưa làm OCR/trích xuất text thật sự,
		// nên cảnh báo chung cho PDF là true để người dùng lưu ý.
		scanWarning = true
	}

	var icpmsFile *coredata.IcpmsDocumentFile

	err := s.svc.pg.WithTx(
		ctx,
		func(ctx context.Context, conn pg.Tx) error {
			// Get document version to ensure it exists and get DocumentID
			var docVersion coredata.IcpmsDocumentVersion
			if err := docVersion.LoadByID(ctx, conn, scope, req.DocumentVersionID); err != nil {
				return fmt.Errorf("cannot load document version %q: %w", req.DocumentVersionID, err)
			}

			// If replace = true, soft delete current active files
			icpmsFilePlaceholder := coredata.IcpmsDocumentFile{
				ID:                docFileID,
				DocumentVersionID: req.DocumentVersionID,
			}

			if replace {
				if err := icpmsFilePlaceholder.ReplaceActiveFiles(ctx, conn, scope); err != nil {
					return fmt.Errorf("cannot replace active files: %w", err)
				}
			} else {
				if docVersion.RawFileStatus != coredata.IcpmsDocumentVersionRawFileStatusNotUploaded {
					return fmt.Errorf("phiên bản này đã có file gốc. bạn có muốn thay thế file hiện tại không?")
				}
			}

			// Upload and save raw file using Probo FileService
			storedFileName := fmt.Sprintf("%s_%d_%s%s",
				req.DocumentVersionID.String(),
				now.Unix(),
				docFileID.String()[len(docFileID.String())-8:],
				ext)

			file, err := s.svc.Files.UploadAndSaveFile(
				ctx,
				scope,
				s.fileValidator,
				map[string]string{
					"type":                "icpms-document",
					"document-id":         docVersion.DocumentID.String(),
					"document-version-id": req.DocumentVersionID.String(),
					"organization-id":     docVersion.OrganizationID.String(),
				},
				&req.File)
			if err != nil {
				// Mark as failed if we can't upload
				docVersion.RawFileStatus = coredata.IcpmsDocumentVersionRawFileStatusFailed
				_ = docVersion.Update(ctx, conn, scope)
				return fmt.Errorf("cannot upload file: %w", err)
			}

			// Insert metadata
			icpmsFile = &coredata.IcpmsDocumentFile{
				ID:                docFileID,
				OrganizationID:    docVersion.OrganizationID,
				DocumentID:        docVersion.DocumentID,
				DocumentVersionID: req.DocumentVersionID,
				FileID:            file.ID,
				OriginalFileName:  req.File.Filename,
				StoredFileName:    storedFileName, // Logical reference name
				FileType:          strings.TrimPrefix(ext, "."),
				FileExtension:     ext,
				MimeType:          file.MimeType,
				FileSize:          file.FileSize,
				StoragePath:       file.FileKey,
				UploadStatus:      coredata.IcpmsDocumentFileStatusUploaded,
				IsActive:          true,
				TextExtractable:   textExtractable,
				ScanWarning:       scanWarning,
				Checksum:          nil,
				Notes:             nil,
				UploadedBy:        req.UploadedBy,
				UploadedAt:        now,
				CreatedAt:         now,
				UpdatedAt:         now,
			}

			if err := icpmsFile.Insert(ctx, conn, scope); err != nil {
				return fmt.Errorf("cannot insert icpms document file metadata: %w", err)
			}

			// Update document version raw_file_status to UPLOADED
			docVersion.RawFileStatus = coredata.IcpmsDocumentVersionRawFileStatusUploaded
			if err := docVersion.Update(ctx, conn, scope); err != nil {
				return fmt.Errorf("cannot update document version status: %w", err)
			}

			return nil
		},
	)
	if err != nil {
		return nil, err
	}

	return icpmsFile, nil
}

func (s IcpmsDocumentFileService) SoftDelete(
	ctx context.Context, scope coredata.Scoper,
	fileID gid.GID,
) error {
	return s.svc.pg.WithTx(
		ctx,
		func(ctx context.Context, tx pg.Tx) error {
			file := &coredata.IcpmsDocumentFile{}
			if err := file.LoadByID(ctx, tx, scope, fileID); err != nil {
				return fmt.Errorf("cannot load file: %w", err)
			}

			if err := file.SoftDelete(ctx, tx, scope); err != nil {
				return fmt.Errorf("cannot soft delete file: %w", err)
			}

			// Check if there are any active files left
			filter := &coredata.IcpmsDocumentFileFilter{IsActive: new(bool)}
			*filter.IsActive = true
			var existingFiles coredata.IcpmsDocumentFiles
			count, err := existingFiles.CountByDocumentVersionID(ctx, tx, scope, file.DocumentVersionID, filter)
			if err != nil {
				return err
			}

			if count == 0 {
				var docVersion coredata.IcpmsDocumentVersion
				if err := docVersion.LoadByID(ctx, tx, scope, file.DocumentVersionID); err == nil {
					docVersion.RawFileStatus = coredata.IcpmsDocumentVersionRawFileStatusNotUploaded
					_ = docVersion.Update(ctx, tx, scope)
				}
			}

			return nil
		},
	)
}

func (s IcpmsDocumentFileService) GenerateDownloadURL(
	ctx context.Context, scope coredata.Scoper,
	fileID gid.GID,
	expiresIn time.Duration,
) (string, error) {
	file, err := s.GetByID(ctx, scope, fileID)
	if err != nil {
		return "", err
	}

	return s.svc.Files.GenerateFileURL(ctx, scope, file.FileID, expiresIn)
}
