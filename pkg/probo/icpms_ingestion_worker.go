// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package probo

import (
	"context"
	"fmt"
	"strings"
	"time"

	"go.probo.inc/probo/pkg/coredata"
	"go.probo.inc/probo/pkg/gid"
)

// ProcessIngestionJob downloads the file, extracts text blocks, persists them,
// and updates the job status. Call this in a goroutine after creating a job.
func (s *IcpmsIngestionJobService) ProcessJob(
	ctx context.Context,
	scope coredata.Scoper,
	job *coredata.IcpmsIngestionJob,
) error {
	now := time.Now()

	// Mark job as RUNNING.
	job.Status = coredata.IcpmsIngestionJobStatusRunning
	job.StartedAt = &now
	job.ProgressPercent = 5
	if err := s.Update(ctx, scope, job); err != nil {
		return fmt.Errorf("cannot update job to RUNNING: %w", err)
	}

	markFailed := func(reason error) error {
		msg := reason.Error()
		finished := time.Now()
		job.Status = coredata.IcpmsIngestionJobStatusFailed
		job.ErrorMessage = &msg
		job.FinishedAt = &finished
		job.ProgressPercent = 0
		_ = s.Update(ctx, scope, job)
		return reason
	}

	// Load the IcpmsDocumentFile metadata.
	icpmsFile, err := s.svc.IcpmsDocumentFiles.GetByID(ctx, scope, job.DocumentFileID)
	if err != nil {
		return markFailed(fmt.Errorf("cannot load document file: %w", err))
	}

	// Load the underlying coredata.File (holds S3 bucket + key).
	coreFile, err := s.svc.Files.Get(ctx, scope, icpmsFile.FileID)
	if err != nil {
		return markFailed(fmt.Errorf("cannot load core file record: %w", err))
	}

	job.ProgressPercent = 15
	_ = s.Update(ctx, scope, job)

	// Download file bytes from S3.
	data, err := s.svc.fileManager.GetFileBytes(ctx, coreFile)
	if err != nil {
		return markFailed(fmt.Errorf("cannot download file from storage: %w", err))
	}

	job.ProgressPercent = 30
	_ = s.Update(ctx, scope, job)

	// Extract text blocks based on file extension.
	ext := strings.ToLower(icpmsFile.FileExtension)
	var rawBlocks []textBlock

	switch ext {
	case ".pdf":
		ocrCfg := s.svc.OCRCfg
		forceOCR := false
		switch job.ExtractionMode {
		case coredata.IcpmsIngestionExtractionModeOCR:
			// Chế độ OCR: bỏ qua native/pdftotext, gọi VietOCR trực tiếp.
			forceOCR = true
		case coredata.IcpmsIngestionExtractionModePdfText:
			// Chế độ PDF thường: chỉ dùng native/pdftotext, tắt OCR fallback.
			ocrCfg.Enabled = false
		}
		rawBlocks, err = extractPDF(ctx, data, ocrCfg, forceOCR)
		if err != nil {
			return markFailed(fmt.Errorf("PDF extraction failed: %w", err))
		}
	case ".docx":
		rawBlocks, err = extractDOCX(data)
		if err != nil {
			return markFailed(fmt.Errorf("DOCX extraction failed: %w", err))
		}
	case ".txt":
		rawBlocks = extractTXT(data)
	case ".doc":
		// Legacy DOC: attempt basic TXT fallback (not binary-clean but functional for text-heavy files).
		rawBlocks = extractTXT(data)
		warnMsg := "DOC format: basic text extraction used; results may include artifacts"
		job.WarningMessage = &warnMsg
	default:
		return markFailed(fmt.Errorf("unsupported file extension: %s", ext))
	}

	job.ProgressPercent = 70
	_ = s.Update(ctx, scope, job)

	if len(rawBlocks) == 0 {
		warnMsg := "Không trích xuất được text nào. File có thể là bản scan (chỉ chứa hình ảnh) hoặc dùng font mã hóa đặc biệt. Hãy thử định dạng DOCX hoặc TXT."
		job.WarningMessage = &warnMsg
	} else if len(rawBlocks) == 1 && ext == ".pdf" {
		warnMsg := "Chỉ trích xuất được 1 block từ PDF. Nội dung tài liệu có thể là hình ảnh scan hoặc dùng font đặc biệt — hãy thử chuyển đổi sang DOCX để có kết quả tốt hơn."
		job.WarningMessage = &warnMsg
	}

	// Detect language from first 5000 chars of all text combined.
	var sampleBuilder strings.Builder
	for _, b := range rawBlocks {
		if sampleBuilder.Len() >= 5000 {
			break
		}
		sampleBuilder.WriteString(b.normText)
		sampleBuilder.WriteByte(' ')
	}
	lang := detectLanguage(sampleBuilder.String())
	job.LanguageDetected = &lang

	// Convert to coredata entities.
	now2 := time.Now()
	dbBlocks := make([]*coredata.IcpmsExtractedTextBlock, 0, len(rawBlocks))
	totalChars := 0
	maxPage := 0

	for i, rb := range rawBlocks {
		pageNum := rb.pageNum
		var pageNumPtr *int
		if pageNum > 0 {
			p := pageNum
			pageNumPtr = &p
			if pageNum > maxPage {
				maxPage = pageNum
			}
		}

		// Sanitize before DB insert — files encoded in Windows-1252 or other
		// legacy encodings produce invalid UTF-8 byte sequences (e.g. 0xe1 0xba)
		// that PostgreSQL rejects with SQLSTATE 22021.
		rawText, _ := sanitizeText(rb.rawText, 100_000)
		normText, _ := sanitizeText(rb.normText, 100_000)

		hash := rb.hash
		chars := len(normText)
		totalChars += chars

		dbBlocks = append(dbBlocks, &coredata.IcpmsExtractedTextBlock{
			ID:                gid.New(scope.GetTenantID(), coredata.IcpmsExtractedTextBlockEntityType),
			TenantID:          scope.GetTenantID(),
			OrganizationID:    icpmsFile.OrganizationID,
			IngestionJobID:    job.ID,
			DocumentID:        job.DocumentID,
			DocumentVersionID: job.DocumentVersionID,
			DocumentFileID:    job.DocumentFileID,
			BlockIndex:        i,
			PageNumber:        pageNumPtr,
			SourceOrder:       i,
			BlockType:         rb.blockType,
			RawText:           rawText,
			NormalizedText:    normText,
			LanguageDetected:  &lang,
			CharCount:         chars,
			WordCount:         wordCount(rb.normText),
			Hash:              &hash,
			CreatedAt:         now2,
			UpdatedAt:         now2,
		})
	}

	// Bulk insert text blocks.
	if err := s.BulkInsertTextBlocks(ctx, scope, dbBlocks); err != nil {
		return markFailed(fmt.Errorf("cannot insert text blocks: %w", err))
	}

	// Update job as COMPLETED with stats.
	finished := time.Now()
	job.Status = coredata.IcpmsIngestionJobStatusCompleted
	job.FinishedAt = &finished
	job.ProgressPercent = 100
	job.TotalBlocks = len(dbBlocks)
	job.TotalPages = maxPage
	job.TotalChars = totalChars

	if err := s.Update(ctx, scope, job); err != nil {
		return fmt.Errorf("cannot update job to COMPLETED: %w", err)
	}

	return nil
}
