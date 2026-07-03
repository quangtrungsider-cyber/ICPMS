// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package probo

import (
	"context"
	"errors"
	"fmt"
	"strings"
	"time"

	"github.com/jackc/pgx/v5"
	"go.gearno.de/kit/pg"
	"go.probo.inc/probo/pkg/coredata"
	"go.probo.inc/probo/pkg/gid"
)

type IcpmsParseJobService struct {
	svc *Service
}

// CreateAndRunVietnamese creates a parse job and synchronously runs the Vietnamese parser.
func (s *IcpmsParseJobService) CreateAndRunVietnamese(
	ctx context.Context,
	scope coredata.Scoper,
	ingestionJobID gid.GID,
	createdBy gid.GID,
) (*coredata.IcpmsDocumentParseJob, error) {
	// Load the ingestion job for document metadata
	ingestionJob, err := s.svc.IcpmsIngestionJobs.Get(ctx, scope, ingestionJobID)
	if err != nil {
		return nil, fmt.Errorf("cannot load ingestion job: %w", err)
	}

	now := time.Now()
	parseJob := &coredata.IcpmsDocumentParseJob{
		ID:                gid.New(scope.GetTenantID(), coredata.IcpmsDocumentParseJobEntityType),
		TenantID:          scope.GetTenantID(),
		OrganizationID:    ingestionJob.OrganizationID,
		DocumentID:        ingestionJob.DocumentID,
		DocumentVersionID: ingestionJob.DocumentVersionID,
		DocumentFileID:    ingestionJob.DocumentFileID,
		IngestionJobID:    ingestionJobID,
		ParserType:        coredata.IcpmsParseJobParserTypeVietnamese,
		Status:            coredata.IcpmsParseJobStatusRunning,
		Language:          "vi",
		StartedAt:         &now,
		CreatedBy:         createdBy,
	}

	if err := s.createParseJob(ctx, parseJob); err != nil {
		return nil, fmt.Errorf("cannot create parse job: %w", err)
	}

	// Run parser synchronously
	runErr := s.runVietnameseParser(ctx, scope, parseJob, ingestionJob)
	if runErr != nil {
		errMsg := runErr.Error()
		parseJob.Status = coredata.IcpmsParseJobStatusFailed
		parseJob.ErrorMessage = &errMsg
		finished := time.Now()
		parseJob.FinishedAt = &finished
		_ = s.updateParseJob(ctx, parseJob)
		return parseJob, nil
	}

	// Auto-trigger requirement generation + AI applicability review in background.
	go s.svc.RunFullPipelineForParseJob(
		context.Background(), scope, parseJob.ID, parseJob.OrganizationID, createdBy,
	)

	return parseJob, nil
}

// applyGeminiCleaningToBlocks applies Gemini OCR cleanup to text blocks that were stored
// without AI cleaning (RULE_BASED ingestion). Updates raw_text and normalized_text in the DB
// so that future parse runs and the Text Extraction view also use cleaned data.
// Returns the model name used, or empty string if Gemini is not available.
func (s *IcpmsParseJobService) applyGeminiCleaningToBlocks(
	ctx context.Context,
	scope coredata.Scoper,
	blocks []*coredata.IcpmsExtractedTextBlock,
	organizationID gid.GID,
) string {
	aiCfg, _ := s.svc.IcpmsAiConfigs.Get(ctx, scope, organizationID, "GEMINI")
	if aiCfg == nil || !aiCfg.IsEnabled || aiCfg.APIKey == nil ||
		aiCfg.DefaultModel == nil || *aiCfg.DefaultModel == "RULE_BASED" || *aiCfg.DefaultModel == "" {
		return ""
	}

	textBlocks := make([]textBlock, len(blocks))
	for i, b := range blocks {
		textBlocks[i] = textBlock{
			rawText:   b.RawText,
			normText:  b.NormalizedText,
			blockType: b.BlockType,
		}
	}

	cleaner := NewGeminiCleaner(GeminiCleanerConfig{
		Enabled: true,
		APIKey:  *aiCfg.APIKey,
		Model:   *aiCfg.DefaultModel,
	})
	cleanedBlocks := cleaner.CleanBlocks(ctx, textBlocks)

	for i, cb := range cleanedBlocks {
		if cb.rawText == blocks[i].RawText {
			continue
		}
		blocks[i].RawText = cb.rawText
		blocks[i].NormalizedText = cb.normText
		bid := blocks[i].ID
		raw := cb.rawText
		norm := cb.normText
		_ = s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
			args := pgx.StrictNamedArgs{"raw_text": raw, "norm": norm, "id": bid}
			for k, v := range scope.SQLArguments() {
				args[k] = v
			}
			_, err := conn.Exec(ctx,
				`UPDATE icpms_extracted_text_blocks SET raw_text = @raw_text, normalized_text = @norm, updated_at = NOW() WHERE id = @id AND `+scope.SQLFragment(),
				args,
			)
			return err
		})
	}

	return *aiCfg.DefaultModel
}

func (s *IcpmsParseJobService) runVietnameseParser(
	ctx context.Context,
	scope coredata.Scoper,
	parseJob *coredata.IcpmsDocumentParseJob,
	ingestionJob *coredata.IcpmsIngestionJob,
) error {
	// Load PARAGRAPH blocks only — excludes duplicate PAGE blocks that old
	// extractions may have created alongside PARAGRAPH blocks for the same page.
	blocks, err := s.loadParagraphTextBlocks(ctx, scope, ingestionJob.ID)
	if err != nil {
		return fmt.Errorf("cannot load text blocks: %w", err)
	}

	if len(blocks) == 0 {
		return fmt.Errorf("no text blocks found for ingestion job %s", ingestionJob.ID)
	}

	// If the ingestion ran without AI cleaning (RULE_BASED), apply Gemini now if configured.
	// Cleaned text is stored back to DB so future parse runs and the Text view also benefit.
	needsCleaning := ingestionJob.AIModelUsed == nil || *ingestionJob.AIModelUsed == "RULE_BASED"
	if needsCleaning {
		if model := s.applyGeminiCleaningToBlocks(ctx, scope, blocks, ingestionJob.OrganizationID); model != "" {
			ingestionJob.AIModelUsed = &model
			_ = s.svc.IcpmsIngestionJobs.Update(ctx, scope, ingestionJob)
		}
	}

	// Rebuild line-by-line text from the raw (un-collapsed) block content.
	// NormalizedText collapses all internal newlines to spaces, so the Vietnamese
	// section-header regexes (which anchor on "^") would never match mid-block.
	// RawText still contains the (possibly Gemini-cleaned) PDF line breaks.
	var allLines []string
	for _, b := range blocks {
		for _, line := range strings.Split(b.RawText, "\n") {
			if norm := normalizeText(line); norm != "" {
				allLines = append(allLines, norm)
			}
		}
	}
	fullText := strings.Join(allLines, "\n")

	// Parse Vietnamese structure
	result := ParseVietnameseDocument(fullText)

	// Flatten tree and build section records
	flat := FlattenSections(result.Roots)

	// Assign GIDs and parent GIDs
	gids := make([]gid.GID, len(flat))
	for i := range flat {
		gids[i] = gid.New(scope.GetTenantID(), coredata.IcpmsParsedDocumentSectionEntityType)
	}

	// Build a map from node pointer to its index for parent resolution
	nodeIndex := make(map[*ParsedSectionNode]int, len(flat))
	for i, node := range flat {
		nodeIndex[node] = i
	}

	sections := make([]*coredata.IcpmsParsedDocumentSection, len(flat))
	for i, node := range flat {
		sec := &coredata.IcpmsParsedDocumentSection{
			ID:                gids[i],
			TenantID:          scope.GetTenantID(),
			OrganizationID:    parseJob.OrganizationID,
			ParseJobID:        parseJob.ID,
			DocumentID:        parseJob.DocumentID,
			DocumentVersionID: parseJob.DocumentVersionID,
			SectionType:       node.Type,
			Title:             node.Title,
			FullHeading:       node.FullHeading,
			ContentStartLine:  node.LineIndex,
			ContentEndLine:    node.LineIndex,
			DepthLevel:        node.DepthLevel,
			SortOrder:         i,
			ConfidenceScore:   node.ConfidenceScore,
		}

		if node.SectionNumber != "" {
			num := node.SectionNumber
			sec.SectionNumber = &num
		}

		if node.ContentText != "" {
			ct := node.ContentText
			sec.ContentText = &ct
		}

		if node.Parent != nil {
			if parentIdx, ok := nodeIndex[node.Parent]; ok {
				parentGID := gids[parentIdx]
				sec.ParentID = &parentGID
			}
		}

		sections[i] = sec
	}

	// Save sections in one transaction
	if err := s.saveSections(ctx, sections); err != nil {
		return fmt.Errorf("cannot save sections: %w", err)
	}

	// Update parse job as COMPLETED
	finished := time.Now()
	parseJob.Status = coredata.IcpmsParseJobStatusCompleted
	parseJob.TotalSections = len(sections)
	parseJob.MaxDepth = result.MaxDepth
	parseJob.FinishedAt = &finished
	return s.updateParseJob(ctx, parseJob)
}

func (s *IcpmsParseJobService) loadTextBlocks(
	ctx context.Context,
	scope coredata.Scoper,
	ingestionJobID gid.GID,
) ([]*coredata.IcpmsExtractedTextBlock, error) {
	var blocks []*coredata.IcpmsExtractedTextBlock

	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		query := `
		SELECT * FROM icpms_extracted_text_blocks
		WHERE ingestion_job_id = @ingestion_job_id AND ` + scope.SQLFragment() + `
		ORDER BY source_order ASC`

		args := pgx.StrictNamedArgs{"ingestion_job_id": ingestionJobID}
		for k, v := range scope.SQLArguments() {
			args[k] = v
		}

		rows, err := conn.Query(ctx, query, args)
		if err != nil {
			return err
		}
		blocks, err = pgx.CollectRows(rows, pgx.RowToAddrOfStructByName[coredata.IcpmsExtractedTextBlock])
		return err
	})

	return blocks, err
}

// loadParagraphTextBlocks loads only PARAGRAPH-type blocks for a given ingestion job.
// Used by the Vietnamese parser to avoid processing duplicate PAGE blocks.
func (s *IcpmsParseJobService) loadParagraphTextBlocks(
	ctx context.Context,
	scope coredata.Scoper,
	ingestionJobID gid.GID,
) ([]*coredata.IcpmsExtractedTextBlock, error) {
	var blocks []*coredata.IcpmsExtractedTextBlock

	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		query := `
		SELECT * FROM icpms_extracted_text_blocks
		WHERE ingestion_job_id = @ingestion_job_id AND ` + scope.SQLFragment() + `
		  AND block_type = 'PARAGRAPH'
		ORDER BY source_order ASC`

		args := pgx.StrictNamedArgs{"ingestion_job_id": ingestionJobID}
		for k, v := range scope.SQLArguments() {
			args[k] = v
		}

		rows, err := conn.Query(ctx, query, args)
		if err != nil {
			return err
		}
		blocks, err = pgx.CollectRows(rows, pgx.RowToAddrOfStructByName[coredata.IcpmsExtractedTextBlock])
		return err
	})

	return blocks, err
}

// loadNonPageTextBlocks loads PARAGRAPH and HEADING blocks (excludes PAGE fallback blocks
// that old extractions may have stored for the entire page content).
// Used by the ICAO parser which needs both HEADING blocks (e.g. "CHAPTER 1") and
// PARAGRAPH blocks (body text, numeric sections, subparagraphs).
func (s *IcpmsParseJobService) loadNonPageTextBlocks(
	ctx context.Context,
	scope coredata.Scoper,
	ingestionJobID gid.GID,
) ([]*coredata.IcpmsExtractedTextBlock, error) {
	var blocks []*coredata.IcpmsExtractedTextBlock

	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		query := `
		SELECT * FROM icpms_extracted_text_blocks
		WHERE ingestion_job_id = @ingestion_job_id AND ` + scope.SQLFragment() + `
		  AND block_type IN ('PARAGRAPH', 'HEADING')
		ORDER BY source_order ASC`

		args := pgx.StrictNamedArgs{"ingestion_job_id": ingestionJobID}
		for k, v := range scope.SQLArguments() {
			args[k] = v
		}

		rows, err := conn.Query(ctx, query, args)
		if err != nil {
			return err
		}
		blocks, err = pgx.CollectRows(rows, pgx.RowToAddrOfStructByName[coredata.IcpmsExtractedTextBlock])
		return err
	})

	// Fall back to all blocks if no PARAGRAPH/HEADING blocks exist (old extractions
	// that only have PAGE-type blocks).
	if err == nil && len(blocks) == 0 {
		return s.loadTextBlocks(ctx, scope, ingestionJobID)
	}

	return blocks, err
}

func (s *IcpmsParseJobService) createParseJob(ctx context.Context, job *coredata.IcpmsDocumentParseJob) error {
	return s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		query := `
		INSERT INTO icpms_document_parse_jobs (
			id, tenant_id, organization_id, document_id, document_version_id, document_file_id,
			ingestion_job_id, parser_type, status, total_sections, max_depth, language,
			started_at, created_by, created_at, updated_at
		) VALUES (
			@id, @tenant_id, @organization_id, @document_id, @document_version_id, @document_file_id,
			@ingestion_job_id, @parser_type, @status, @total_sections, @max_depth, @language,
			@started_at, @created_by, NOW(), NOW()
		)`

		args := pgx.StrictNamedArgs{
			"id":                  job.ID,
			"tenant_id":           job.TenantID,
			"organization_id":     job.OrganizationID,
			"document_id":         job.DocumentID,
			"document_version_id": job.DocumentVersionID,
			"document_file_id":    job.DocumentFileID,
			"ingestion_job_id":    job.IngestionJobID,
			"parser_type":         job.ParserType,
			"status":              job.Status,
			"total_sections":      job.TotalSections,
			"max_depth":           job.MaxDepth,
			"language":            job.Language,
			"started_at":          job.StartedAt,
			"created_by":          job.CreatedBy,
		}

		_, err := tx.Exec(ctx, query, args)
		return err
	})
}

// CreateAndRunIcaoEnglish creates a parse job and synchronously runs the ICAO/English parser.
func (s *IcpmsParseJobService) CreateAndRunIcaoEnglish(
	ctx context.Context,
	scope coredata.Scoper,
	ingestionJobID gid.GID,
	createdBy gid.GID,
) (*coredata.IcpmsDocumentParseJob, error) {
	ingestionJob, err := s.svc.IcpmsIngestionJobs.Get(ctx, scope, ingestionJobID)
	if err != nil {
		return nil, fmt.Errorf("cannot load ingestion job: %w", err)
	}

	now := time.Now()
	parseJob := &coredata.IcpmsDocumentParseJob{
		ID:                gid.New(scope.GetTenantID(), coredata.IcpmsDocumentParseJobEntityType),
		TenantID:          scope.GetTenantID(),
		OrganizationID:    ingestionJob.OrganizationID,
		DocumentID:        ingestionJob.DocumentID,
		DocumentVersionID: ingestionJob.DocumentVersionID,
		DocumentFileID:    ingestionJob.DocumentFileID,
		IngestionJobID:    ingestionJobID,
		ParserType:        coredata.IcpmsParseJobParserTypeIcaoEnglish,
		Status:            coredata.IcpmsParseJobStatusRunning,
		Language:          "en",
		StartedAt:         &now,
		CreatedBy:         createdBy,
	}

	if err := s.createParseJob(ctx, parseJob); err != nil {
		return nil, fmt.Errorf("cannot create parse job: %w", err)
	}

	runErr := s.runIcaoParser(ctx, scope, parseJob, ingestionJob)
	if runErr != nil {
		errMsg := runErr.Error()
		parseJob.Status = coredata.IcpmsParseJobStatusFailed
		parseJob.ErrorMessage = &errMsg
		finished := time.Now()
		parseJob.FinishedAt = &finished
		_ = s.updateParseJob(ctx, parseJob)
		return parseJob, nil
	}

	// Auto-trigger requirement generation + AI applicability review in background.
	go s.svc.RunFullPipelineForParseJob(
		context.Background(), scope, parseJob.ID, parseJob.OrganizationID, createdBy,
	)

	return parseJob, nil
}

func (s *IcpmsParseJobService) runIcaoParser(
	ctx context.Context,
	scope coredata.Scoper,
	parseJob *coredata.IcpmsDocumentParseJob,
	ingestionJob *coredata.IcpmsIngestionJob,
) error {
	blocks, err := s.loadNonPageTextBlocks(ctx, scope, ingestionJob.ID)
	if err != nil {
		return fmt.Errorf("cannot load text blocks: %w", err)
	}

	if len(blocks) == 0 {
		return fmt.Errorf("no text blocks found for ingestion job %s", ingestionJob.ID)
	}

	// If the ingestion ran without AI cleaning (RULE_BASED), apply Gemini now if configured.
	needsCleaning := ingestionJob.AIModelUsed == nil || *ingestionJob.AIModelUsed == "RULE_BASED"
	if needsCleaning {
		if model := s.applyGeminiCleaningToBlocks(ctx, scope, blocks, ingestionJob.OrganizationID); model != "" {
			ingestionJob.AIModelUsed = &model
			_ = s.svc.IcpmsIngestionJobs.Update(ctx, scope, ingestionJob)
		}
	}

	// Process RawText line-by-line (same approach as Vietnamese parser) so that
	// multiple headings or subparagraphs within a single PDF block are each matched
	// individually instead of being collapsed into one NormalizedText line.
	var allLines []string
	for _, b := range blocks {
		for _, line := range strings.Split(b.RawText, "\n") {
			if norm := normalizeText(line); norm != "" {
				allLines = append(allLines, norm)
			}
		}
	}
	fullText := strings.Join(allLines, "\n")

	result := ParseIcaoDocument(fullText)

	flat := FlattenIcaoSections(result.Roots)

	gids := make([]gid.GID, len(flat))
	for i := range flat {
		gids[i] = gid.New(scope.GetTenantID(), coredata.IcpmsParsedDocumentSectionEntityType)
	}

	nodeIndex := make(map[*IcaoParsedNode]int, len(flat))
	for i, node := range flat {
		nodeIndex[node] = i
	}

	sections := make([]*coredata.IcpmsParsedDocumentSection, len(flat))
	for i, node := range flat {
		sec := &coredata.IcpmsParsedDocumentSection{
			ID:                gids[i],
			TenantID:          scope.GetTenantID(),
			OrganizationID:    parseJob.OrganizationID,
			ParseJobID:        parseJob.ID,
			DocumentID:        parseJob.DocumentID,
			DocumentVersionID: parseJob.DocumentVersionID,
			SectionType:       node.Type,
			Title:             node.Title,
			FullHeading:       node.FullHeading,
			ContentStartLine:  node.LineIndex,
			ContentEndLine:    node.LineIndex,
			DepthLevel:        node.DepthLevel,
			SortOrder:         i,
			ConfidenceScore:   node.ConfidenceScore,
		}

		if node.SectionNumber != "" {
			num := node.SectionNumber
			sec.SectionNumber = &num
		}

		if node.Parent != nil {
			if parentIdx, ok := nodeIndex[node.Parent]; ok {
				parentGID := gids[parentIdx]
				sec.ParentID = &parentGID
			}
		}

		if len(node.ContentLines) > 0 {
			ct := strings.Join(node.ContentLines, "\n")
			sec.ContentText = &ct
		}

		path := BuildIcaoPath(node)
		sec.Path = &path

		if len(node.Warnings) > 0 {
			w := strings.Join(node.Warnings, "\n")
			sec.Warnings = &w
		}

		sections[i] = sec
	}

	if err := s.saveSections(ctx, sections); err != nil {
		return fmt.Errorf("cannot save sections: %w", err)
	}

	finished := time.Now()
	parseJob.Status = coredata.IcpmsParseJobStatusCompleted
	parseJob.TotalSections = len(sections)
	parseJob.MaxDepth = result.MaxDepth
	parseJob.TotalChapters = result.Counts.Chapters
	parseJob.TotalParagraphs = result.Counts.Paragraphs
	parseJob.TotalSubparagraphs = result.Counts.Subparagraphs
	parseJob.TotalAppendices = result.Counts.Appendices
	parseJob.TotalTables = result.Counts.Tables
	parseJob.TotalFigures = result.Counts.Figures
	parseJob.FinishedAt = &finished
	return s.updateParseJob(ctx, parseJob)
}

// GetLatestIcaoForIngestionJob returns the most recent ICAO parse job for a given ingestion job.
func (s *IcpmsParseJobService) GetLatestIcaoForIngestionJob(
	ctx context.Context,
	scope coredata.Scoper,
	ingestionJobID gid.GID,
) (*coredata.IcpmsDocumentParseJob, error) {
	var job coredata.IcpmsDocumentParseJob

	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		query := `
		SELECT * FROM icpms_document_parse_jobs
		WHERE ingestion_job_id = @ingestion_job_id
		  AND parser_type = @parser_type
		  AND ` + scope.SQLFragment() + ` AND deleted_at IS NULL
		ORDER BY created_at DESC LIMIT 1`

		args := pgx.StrictNamedArgs{
			"ingestion_job_id": ingestionJobID,
			"parser_type":      coredata.IcpmsParseJobParserTypeIcaoEnglish,
		}
		for k, v := range scope.SQLArguments() {
			args[k] = v
		}

		rows, err := conn.Query(ctx, query, args)
		if err != nil {
			return err
		}
		job, err = pgx.CollectExactlyOneRow(rows, pgx.RowToStructByName[coredata.IcpmsDocumentParseJob])
		return err
	})

	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			return nil, nil
		}
		return nil, err
	}

	return &job, nil
}

func (s *IcpmsParseJobService) updateParseJob(ctx context.Context, job *coredata.IcpmsDocumentParseJob) error {
	return s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		query := `
		UPDATE icpms_document_parse_jobs SET
			status               = @status,
			total_sections       = @total_sections,
			max_depth            = @max_depth,
			error_message        = @error_message,
			warning_message      = @warning_message,
			total_chapters       = @total_chapters,
			total_paragraphs     = @total_paragraphs,
			total_subparagraphs  = @total_subparagraphs,
			total_appendices     = @total_appendices,
			total_tables         = @total_tables,
			total_figures        = @total_figures,
			finished_at          = @finished_at,
			updated_at           = NOW()
		WHERE id = @id AND tenant_id = @tenant_id`

		args := pgx.StrictNamedArgs{
			"status":              job.Status,
			"total_sections":      job.TotalSections,
			"max_depth":           job.MaxDepth,
			"error_message":       job.ErrorMessage,
			"warning_message":     job.WarningMessage,
			"total_chapters":      job.TotalChapters,
			"total_paragraphs":    job.TotalParagraphs,
			"total_subparagraphs": job.TotalSubparagraphs,
			"total_appendices":    job.TotalAppendices,
			"total_tables":        job.TotalTables,
			"total_figures":       job.TotalFigures,
			"finished_at":         job.FinishedAt,
			"id":                  job.ID,
			"tenant_id":           job.TenantID,
		}

		_, err := tx.Exec(ctx, query, args)
		return err
	})
}

func (s *IcpmsParseJobService) saveSections(ctx context.Context, sections []*coredata.IcpmsParsedDocumentSection) error {
	if len(sections) == 0 {
		return nil
	}

	return s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		for _, sec := range sections {
			// Sanitize text fields in case extraction produced invalid UTF-8 bytes
			// (e.g. legacy-encoded PDFs or Windows-1252 files). PostgreSQL rejects
			// invalid UTF-8 with SQLSTATE 22021, so clean before every insert.
			title, _ := sanitizeText(sec.Title, 500)
			fullHeading, _ := sanitizeText(sec.FullHeading, 2000)
			var contentText *string
			if sec.ContentText != nil {
				ct, _ := sanitizeText(*sec.ContentText, 50_000)
				contentText = &ct
			}
			var rawText *string
			if sec.RawText != nil {
				rt, _ := sanitizeText(*sec.RawText, 50_000)
				rawText = &rt
			}

			query := `
			INSERT INTO icpms_parsed_document_sections (
				id, tenant_id, organization_id, parse_job_id, document_id, document_version_id,
				parent_id, section_type, section_number, title, full_heading,
				content_start_line, content_end_line, depth_level, sort_order, confidence_score,
				raw_text, content_text, path, warnings,
				created_at, updated_at
			) VALUES (
				@id, @tenant_id, @organization_id, @parse_job_id, @document_id, @document_version_id,
				@parent_id, @section_type, @section_number, @title, @full_heading,
				@content_start_line, @content_end_line, @depth_level, @sort_order, @confidence_score,
				@raw_text, @content_text, @path, @warnings,
				NOW(), NOW()
			)`

			args := pgx.StrictNamedArgs{
				"id":                  sec.ID,
				"tenant_id":           sec.TenantID,
				"organization_id":     sec.OrganizationID,
				"parse_job_id":        sec.ParseJobID,
				"document_id":         sec.DocumentID,
				"document_version_id": sec.DocumentVersionID,
				"parent_id":           sec.ParentID,
				"section_type":        sec.SectionType,
				"section_number":      sec.SectionNumber,
				"title":               title,
				"full_heading":        fullHeading,
				"content_start_line":  sec.ContentStartLine,
				"content_end_line":    sec.ContentEndLine,
				"depth_level":         sec.DepthLevel,
				"sort_order":          sec.SortOrder,
				"confidence_score":    sec.ConfidenceScore,
				"raw_text":            rawText,
				"content_text":        contentText,
				"path":                sec.Path,
				"warnings":            sec.Warnings,
			}

			if _, err := tx.Exec(ctx, query, args); err != nil {
				return err
			}
		}
		return nil
	})
}

// GetParseJob loads a single parse job by ID.
func (s *IcpmsParseJobService) GetParseJob(
	ctx context.Context,
	scope coredata.Scoper,
	parseJobID gid.GID,
) (*coredata.IcpmsDocumentParseJob, error) {
	var job coredata.IcpmsDocumentParseJob

	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		query := `SELECT * FROM icpms_document_parse_jobs WHERE tenant_id = @tenant_id AND id = @id AND deleted_at IS NULL`
		args := pgx.StrictNamedArgs{
			"tenant_id": scope.GetTenantID(),
			"id":        parseJobID,
		}
		rows, err := conn.Query(ctx, query, args)
		if err != nil {
			return err
		}
		job, err = pgx.CollectExactlyOneRow(rows, pgx.RowToStructByName[coredata.IcpmsDocumentParseJob])
		return err
	})

	return &job, err
}

// GetLatestForIngestionJob returns the most recent parse job for a given ingestion job.
func (s *IcpmsParseJobService) GetLatestForIngestionJob(
	ctx context.Context,
	scope coredata.Scoper,
	ingestionJobID gid.GID,
) (*coredata.IcpmsDocumentParseJob, error) {
	var job coredata.IcpmsDocumentParseJob

	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		query := `
		SELECT * FROM icpms_document_parse_jobs
		WHERE ingestion_job_id = @ingestion_job_id AND ` + scope.SQLFragment() + ` AND deleted_at IS NULL
		ORDER BY created_at DESC LIMIT 1`

		args := pgx.StrictNamedArgs{"ingestion_job_id": ingestionJobID}
		for k, v := range scope.SQLArguments() {
			args[k] = v
		}

		rows, err := conn.Query(ctx, query, args)
		if err != nil {
			return err
		}
		job, err = pgx.CollectExactlyOneRow(rows, pgx.RowToStructByName[coredata.IcpmsDocumentParseJob])
		return err
	})

	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			return nil, nil
		}
		return nil, err
	}

	return &job, nil
}

// GetSectionByID loads a single parsed section by its ID.
func (s *IcpmsParseJobService) GetSectionByID(
	ctx context.Context,
	scope coredata.Scoper,
	sectionID gid.GID,
) (*coredata.IcpmsParsedDocumentSection, error) {
	var sec coredata.IcpmsParsedDocumentSection

	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		query := `SELECT * FROM icpms_parsed_document_sections WHERE id = @id AND ` + scope.SQLFragment() + ` AND deleted_at IS NULL`
		args := pgx.StrictNamedArgs{"id": sectionID}
		for k, v := range scope.SQLArguments() {
			args[k] = v
		}
		rows, err := conn.Query(ctx, query, args)
		if err != nil {
			return err
		}
		sec, err = pgx.CollectExactlyOneRow(rows, pgx.RowToStructByName[coredata.IcpmsParsedDocumentSection])
		return err
	})

	if err != nil {
		return nil, err
	}
	return &sec, nil
}

// GetArticleSectionForSection walks up the parent chain to find the ARTICLE-level ancestor
// (depthLevel ≤ 4). If the section itself is already at or above that level, it is returned as-is.
func (s *IcpmsParseJobService) GetArticleSectionForSection(
	ctx context.Context,
	scope coredata.Scoper,
	sectionID gid.GID,
) (*coredata.IcpmsParsedDocumentSection, error) {
	sec, err := s.GetSectionByID(ctx, scope, sectionID)
	if err != nil {
		return nil, err
	}

	for i := 0; i < 8 && sec.DepthLevel > 4 && sec.ParentID != nil; i++ {
		parent, err := s.GetSectionByID(ctx, scope, *sec.ParentID)
		if err != nil {
			break
		}
		sec = parent
	}

	return sec, nil
}

// GetArticleWithDescendants walks up to the article-level ancestor, then returns it along
// with all its descendant sections (khoản, điểm, etc.) using a recursive CTE, ordered by sort_order.
func (s *IcpmsParseJobService) GetArticleWithDescendants(
	ctx context.Context,
	scope coredata.Scoper,
	sectionID gid.GID,
) (*coredata.IcpmsParsedDocumentSection, []*coredata.IcpmsParsedDocumentSection, error) {
	article, err := s.GetArticleSectionForSection(ctx, scope, sectionID)
	if err != nil {
		return nil, nil, err
	}

	var descendants []*coredata.IcpmsParsedDocumentSection
	dbErr := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		query := `
		WITH RECURSIVE desc_tree AS (
			SELECT * FROM icpms_parsed_document_sections
			WHERE parent_id = @article_id AND ` + scope.SQLFragment() + ` AND deleted_at IS NULL
			UNION ALL
			SELECT s.* FROM icpms_parsed_document_sections s
			JOIN desc_tree d ON s.parent_id = d.id
			WHERE s.deleted_at IS NULL AND s.tenant_id = @tenant_id
		)
		SELECT * FROM desc_tree ORDER BY sort_order ASC`

		args := pgx.StrictNamedArgs{"article_id": article.ID, "tenant_id": article.TenantID}
		for k, v := range scope.SQLArguments() {
			args[k] = v
		}
		rows, err := conn.Query(ctx, query, args)
		if err != nil {
			return err
		}
		descendants, err = pgx.CollectRows(rows, pgx.RowToAddrOfStructByName[coredata.IcpmsParsedDocumentSection])
		return err
	})
	if dbErr != nil {
		// Return article even if children query fails
		return article, nil, nil //nolint:nilerr
	}
	return article, descendants, nil
}

// ListSectionsForJob returns all parsed sections for a parse job, ordered by sort_order.
func (s *IcpmsParseJobService) ListSectionsForJob(
	ctx context.Context,
	scope coredata.Scoper,
	parseJobID gid.GID,
) ([]*coredata.IcpmsParsedDocumentSection, error) {
	var sections []*coredata.IcpmsParsedDocumentSection

	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		query := `
		SELECT * FROM icpms_parsed_document_sections
		WHERE parse_job_id = @parse_job_id AND ` + scope.SQLFragment() + ` AND deleted_at IS NULL
		ORDER BY sort_order ASC`

		args := pgx.StrictNamedArgs{"parse_job_id": parseJobID}
		for k, v := range scope.SQLArguments() {
			args[k] = v
		}

		rows, err := conn.Query(ctx, query, args)
		if err != nil {
			return err
		}
		sections, err = pgx.CollectRows(rows, pgx.RowToAddrOfStructByName[coredata.IcpmsParsedDocumentSection])
		return err
	})

	return sections, err
}
