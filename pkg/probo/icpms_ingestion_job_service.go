// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package probo

import (
	"context"
	"errors"
	"fmt"

	"github.com/jackc/pgx/v5"
	"go.gearno.de/kit/pg"
	"go.probo.inc/probo/pkg/coredata"
	"go.probo.inc/probo/pkg/gid"
)

type IcpmsIngestionJobService struct {
	svc *Service
}

func (s *IcpmsIngestionJobService) Get(
	ctx context.Context,
	scope coredata.Scoper,
	jobID gid.GID,
) (*coredata.IcpmsIngestionJob, error) {
	var job coredata.IcpmsIngestionJob

	err := s.svc.pg.WithConn(
		ctx,
		func(ctx context.Context, conn pg.Querier) error {
			query := `SELECT * FROM icpms_ingestion_jobs WHERE tenant_id = @tenant_id AND id = @id AND deleted_at IS NULL`
			args := pgx.StrictNamedArgs{
				"tenant_id": scope.GetTenantID(),
				"id":        jobID,
			}
			rows, err := conn.Query(ctx, query, args)
			if err != nil {
				return err
			}
			job, err = pgx.CollectExactlyOneRow(rows, pgx.RowToStructByName[coredata.IcpmsIngestionJob])
			if err != nil {
				return err
			}
			return nil
		},
	)

	return &job, err
}

func (s *IcpmsIngestionJobService) Create(
	ctx context.Context,
	scope coredata.Scoper,
	job *coredata.IcpmsIngestionJob,
) error {
	job.ID = gid.New(scope.GetTenantID(), coredata.IcpmsIngestionJobEntityType)

	err := s.svc.pg.WithTx(
		ctx,
		func(ctx context.Context, tx pg.Tx) error {
			query := `
			INSERT INTO icpms_ingestion_jobs (
				id, tenant_id, organization_id, document_id, document_version_id, document_file_id, 
				job_code, job_type, extraction_mode, file_name_snapshot, file_type_snapshot, file_size_snapshot, 
				status, progress_percent, total_blocks, total_pages, total_chars, created_by, created_at, updated_at
			) VALUES (
				@id, @tenant_id, @organization_id, @document_id, @document_version_id, @document_file_id,
				@job_code, @job_type, @extraction_mode, @file_name_snapshot, @file_type_snapshot, @file_size_snapshot,
				@status, @progress_percent, @total_blocks, @total_pages, @total_chars, @created_by, NOW(), NOW()
			)`
			args := pgx.StrictNamedArgs{
				"id":                  job.ID,
				"tenant_id":           scope.GetTenantID(),
				"organization_id":     job.OrganizationID,
				"document_id":         job.DocumentID,
				"document_version_id": job.DocumentVersionID,
				"document_file_id":    job.DocumentFileID,
				"job_code":            job.JobCode,
				"job_type":            job.JobType,
				"extraction_mode":     job.ExtractionMode,
				"file_name_snapshot":  job.FileNameSnapshot,
				"file_type_snapshot":  job.FileTypeSnapshot,
				"file_size_snapshot":  job.FileSizeSnapshot,
				"status":              job.Status,
				"progress_percent":    job.ProgressPercent,
				"total_blocks":        job.TotalBlocks,
				"total_pages":         job.TotalPages,
				"total_chars":         job.TotalChars,
				"created_by":          job.CreatedBy,
			}
			_, err := tx.Exec(ctx, query, args)
			return err
		},
	)

	return err
}

func (s *IcpmsIngestionJobService) Update(
	ctx context.Context,
	scope coredata.Scoper,
	job *coredata.IcpmsIngestionJob,
) error {
	err := s.svc.pg.WithTx(
		ctx,
		func(ctx context.Context, tx pg.Tx) error {
			query := `
			UPDATE icpms_ingestion_jobs SET
				status = @status,
				progress_percent = @progress_percent,
				total_blocks = @total_blocks,
				total_pages = @total_pages,
				total_chars = @total_chars,
				language_detected = @language_detected,
				started_at = @started_at,
				finished_at = @finished_at,
				error_message = @error_message,
				warning_message = @warning_message,
				ai_model_used = @ai_model_used,
				updated_at = NOW()
			WHERE id = @id AND tenant_id = @tenant_id`

			args := pgx.StrictNamedArgs{
				"status":            job.Status,
				"progress_percent":  job.ProgressPercent,
				"total_blocks":      job.TotalBlocks,
				"total_pages":       job.TotalPages,
				"total_chars":       job.TotalChars,
				"language_detected": job.LanguageDetected,
				"started_at":        job.StartedAt,
				"finished_at":       job.FinishedAt,
				"error_message":     job.ErrorMessage,
				"warning_message":   job.WarningMessage,
				"ai_model_used":     job.AIModelUsed,
				"id":                job.ID,
				"tenant_id":         job.TenantID,
			}
			_, err := tx.Exec(ctx, query, args)
			return err
		},
	)

	return err
}


func (s *IcpmsIngestionJobService) ListForTenant(
	ctx context.Context,
	scope coredata.Scoper,
	limit int,
) ([]*coredata.IcpmsIngestionJob, error) {
	var jobs []*coredata.IcpmsIngestionJob

	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		query := `SELECT * FROM icpms_ingestion_jobs WHERE ` + scope.SQLFragment() + ` AND deleted_at IS NULL ORDER BY created_at DESC LIMIT @limit`

		args := pgx.StrictNamedArgs{"limit": limit}
		for k, v := range scope.SQLArguments() {
			args[k] = v
		}

		rows, err := conn.Query(ctx, query, args)
		if err != nil {
			return err
		}

		jobs, err = pgx.CollectRows(rows, pgx.RowToAddrOfStructByName[coredata.IcpmsIngestionJob])
		return err
	})

	return jobs, err
}

func (s *IcpmsIngestionJobService) GetLatestForVersion(
	ctx context.Context,
	scope coredata.Scoper,
	versionID gid.GID,
) (*coredata.IcpmsIngestionJob, error) {
	var job coredata.IcpmsIngestionJob

	err := s.svc.pg.WithConn(
		ctx,
		func(ctx context.Context, conn pg.Querier) error {
			query := `
			SELECT *
			FROM icpms_ingestion_jobs
			WHERE document_version_id = @version_id AND ` + scope.SQLFragment() + ` AND deleted_at IS NULL
			ORDER BY created_at DESC
			LIMIT 1
			`
			args := pgx.StrictNamedArgs{
				"version_id": versionID,
			}
			for k, v := range scope.SQLArguments() {
				args[k] = v
			}

			rows, err := conn.Query(ctx, query, args)
			if err != nil {
				return err
			}
			job, err = pgx.CollectExactlyOneRow(rows, pgx.RowToStructByName[coredata.IcpmsIngestionJob])
			if err != nil {
				return err
			}
			return nil
		},
	)

	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			return nil, nil
		}
		return nil, err
	}

	return &job, nil
}

// GetLatestForFile returns the most recent ingestion job for a specific document file.
func (s *IcpmsIngestionJobService) GetLatestForFile(
	ctx context.Context,
	scope coredata.Scoper,
	fileID gid.GID,
) (*coredata.IcpmsIngestionJob, error) {
	var job coredata.IcpmsIngestionJob

	err := s.svc.pg.WithConn(
		ctx,
		func(ctx context.Context, conn pg.Querier) error {
			query := `
			SELECT *
			FROM icpms_ingestion_jobs
			WHERE document_file_id = @file_id AND ` + scope.SQLFragment() + ` AND deleted_at IS NULL
			ORDER BY created_at DESC
			LIMIT 1
			`
			args := pgx.StrictNamedArgs{"file_id": fileID}
			for k, v := range scope.SQLArguments() {
				args[k] = v
			}
			rows, err := conn.Query(ctx, query, args)
			if err != nil {
				return err
			}
			job, err = pgx.CollectExactlyOneRow(rows, pgx.RowToStructByName[coredata.IcpmsIngestionJob])
			return err
		},
	)

	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			return nil, nil
		}
		return nil, err
	}
	return &job, nil
}

// HasActiveJobForFile returns true if there is already a QUEUED or RUNNING job for the given file.
func (s *IcpmsIngestionJobService) HasActiveJobForFile(
	ctx context.Context,
	scope coredata.Scoper,
	fileID gid.GID,
) (bool, error) {
	var has bool

	err := s.svc.pg.WithConn(
		ctx,
		func(ctx context.Context, conn pg.Querier) error {
			query := `
			SELECT EXISTS (
				SELECT 1
				FROM icpms_ingestion_jobs
				WHERE document_file_id = @file_id
				  AND status IN ('QUEUED', 'RUNNING')
				  AND ` + scope.SQLFragment() + `
				  AND deleted_at IS NULL
			)
			`
			args := pgx.StrictNamedArgs{"file_id": fileID}
			for k, v := range scope.SQLArguments() {
				args[k] = v
			}
			rows, err := conn.Query(ctx, query, args)
			if err != nil {
				return err
			}
			results, err := pgx.CollectRows(rows, pgx.RowTo[bool])
			if err != nil {
				return err
			}
			if len(results) > 0 {
				has = results[0]
			}
			return nil
		},
	)

	return has, err
}

// BulkInsertTextBlocks inserts extracted text blocks for a job in a single transaction.
func (s *IcpmsIngestionJobService) BulkInsertTextBlocks(
	ctx context.Context,
	scope coredata.Scoper,
	blocks []*coredata.IcpmsExtractedTextBlock,
) error {
	if len(blocks) == 0 {
		return nil
	}

	return s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		for _, b := range blocks {
			query := `
			INSERT INTO icpms_extracted_text_blocks (
				id, tenant_id, organization_id, ingestion_job_id,
				document_id, document_version_id, document_file_id,
				block_index, page_number, source_order,
				section_number, section_hint, block_type,
				raw_text, normalized_text, language_detected,
				char_count, word_count, hash,
				created_at, updated_at
			) VALUES (
				@id, @tenant_id, @organization_id, @ingestion_job_id,
				@document_id, @document_version_id, @document_file_id,
				@block_index, @page_number, @source_order,
				@section_number, @section_hint, @block_type,
				@raw_text, @normalized_text, @language_detected,
				@char_count, @word_count, @hash,
				@created_at, @updated_at
			)`
			args := pgx.StrictNamedArgs{
				"id":                 b.ID,
				"tenant_id":          scope.GetTenantID(),
				"organization_id":    b.OrganizationID,
				"ingestion_job_id":   b.IngestionJobID,
				"document_id":        b.DocumentID,
				"document_version_id": b.DocumentVersionID,
				"document_file_id":   b.DocumentFileID,
				"block_index":        b.BlockIndex,
				"page_number":        b.PageNumber,
				"source_order":       b.SourceOrder,
				"section_number":     b.SectionNumber,
				"section_hint":       b.SectionHint,
				"block_type":         b.BlockType,
				"raw_text":           b.RawText,
				"normalized_text":    b.NormalizedText,
				"language_detected":  b.LanguageDetected,
				"char_count":         b.CharCount,
				"word_count":         b.WordCount,
				"hash":               b.Hash,
				"created_at":         b.CreatedAt,
				"updated_at":         b.UpdatedAt,
			}
			if _, err := tx.Exec(ctx, query, args); err != nil {
				return fmt.Errorf("cannot insert text block %d: %w", b.BlockIndex, err)
			}
		}
		return nil
	})
}

// DeleteTextBlocksForJob removes all text blocks for a given job (used for re-extraction).
func (s *IcpmsIngestionJobService) DeleteTextBlocksForJob(
	ctx context.Context,
	scope coredata.Scoper,
	jobID gid.GID,
) error {
	return s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		query := `DELETE FROM icpms_extracted_text_blocks WHERE tenant_id = @tenant_id AND ingestion_job_id = @job_id`
		args := pgx.StrictNamedArgs{
			"tenant_id": scope.GetTenantID(),
			"job_id":    jobID,
		}
		_, err := tx.Exec(ctx, query, args)
		return err
	})
}

// RecoverStuckJobs marks all QUEUED/RUNNING ingestion jobs as FAILED.
// Called on startup to handle jobs interrupted by a server restart — the background
// goroutines that processed them are gone, so they will never complete on their own.
func (s *IcpmsIngestionJobService) RecoverStuckJobs(ctx context.Context) (int64, error) {
	var affected int64
	err := s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		errMsg := "Job bị gián đoạn khi server khởi động lại. Vui lòng chạy lại bóc tách."
		tag, err := tx.Exec(ctx, `
			UPDATE icpms_ingestion_jobs
			SET status        = 'FAILED',
			    error_message = @error_message,
			    updated_at    = NOW()
			WHERE status IN ('QUEUED', 'RUNNING')
			  AND deleted_at IS NULL
		`, pgx.StrictNamedArgs{"error_message": errMsg})
		if err != nil {
			return err
		}
		affected = tag.RowsAffected()
		return nil
	})
	return affected, err
}

// ListTextBlocksForJob returns all text blocks for a job ordered by source_order.
func (s *IcpmsIngestionJobService) ListTextBlocksForJob(
	ctx context.Context,
	scope coredata.Scoper,
	jobID gid.GID,
) ([]*coredata.IcpmsExtractedTextBlock, error) {
	var blocks []*coredata.IcpmsExtractedTextBlock

	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		query := `
		SELECT * FROM icpms_extracted_text_blocks
		WHERE tenant_id = @tenant_id AND ingestion_job_id = @job_id
		ORDER BY source_order ASC`
		args := pgx.StrictNamedArgs{
			"tenant_id": scope.GetTenantID(),
			"job_id":    jobID,
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

// Delete hard-deletes an ingestion job and all related data (text blocks,
// parse jobs and their parsed sections).
func (s *IcpmsIngestionJobService) Delete(ctx context.Context, scope coredata.Scoper, id gid.GID) error {
	tenantID := scope.GetTenantID()
	return s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		args := pgx.StrictNamedArgs{"tenant_id": tenantID, "job_id": id}

		// 1. Delete parsed document sections (linked via parse jobs)
		_, err := tx.Exec(ctx, `
			DELETE FROM icpms_parsed_document_sections
			WHERE tenant_id = @tenant_id
			  AND parse_job_id IN (
			    SELECT id FROM icpms_document_parse_jobs
			    WHERE tenant_id = @tenant_id AND ingestion_job_id = @job_id
			  )`, args)
		if err != nil {
			return fmt.Errorf("delete parsed sections: %w", err)
		}

		// 2. Delete parse jobs
		_, err = tx.Exec(ctx, `
			DELETE FROM icpms_document_parse_jobs
			WHERE tenant_id = @tenant_id AND ingestion_job_id = @job_id`, args)
		if err != nil {
			return fmt.Errorf("delete parse jobs: %w", err)
		}

		// 3. Delete extracted text blocks
		_, err = tx.Exec(ctx, `
			DELETE FROM icpms_extracted_text_blocks
			WHERE tenant_id = @tenant_id AND ingestion_job_id = @job_id`, args)
		if err != nil {
			return fmt.Errorf("delete text blocks: %w", err)
		}

		// 4. Delete the ingestion job itself
		_, err = tx.Exec(ctx, `
			DELETE FROM icpms_ingestion_jobs
			WHERE tenant_id = @tenant_id AND id = @job_id`, args)
		if err != nil {
			return fmt.Errorf("delete ingestion job: %w", err)
		}

		return nil
	})
}
