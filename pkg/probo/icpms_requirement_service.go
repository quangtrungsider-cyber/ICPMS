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

type IcpmsRequirementService struct {
	svc *Service
}

// sanitizeText cleans PDF-extracted text for PostgreSQL insertion:
//   - Removes null bytes (\x00) which PostgreSQL rejects in text fields
//   - Replaces invalid UTF-8 byte sequences (common in Vietnamese PDFs when chars
//     are split across page/buffer boundaries, e.g. 0xe1 0xba without the third byte)
//   - Truncates to maxRunes Unicode code points, not bytes, to avoid splitting
//     multi-byte Vietnamese characters (each ~3 bytes)
//
// Returns the cleaned string and whether it was truncated.
func sanitizeText(s string, maxRunes int) (string, bool) {
	s = strings.ReplaceAll(s, "\x00", "")
	s = strings.ToValidUTF8(s, "")
	runes := []rune(s)
	if len(runes) > maxRunes {
		return string(runes[:maxRunes]), true
	}
	return s, false
}

// IcpmsRequirementsFilter holds optional filter fields for listing requirements.
type IcpmsRequirementsFilter struct {
	ParseJobID          *gid.GID
	RequirementType     *coredata.IcpmsRequirementType
	ReviewStatus        *coredata.IcpmsRequirementReviewStatus
	ApplicabilityStatus *coredata.IcpmsApplicabilityStatus
	Priority            *coredata.IcpmsRequirementPriority
}

// List returns all non-deleted requirements for the organization with optional filtering.
func (s *IcpmsRequirementService) List(
	ctx context.Context,
	scope coredata.Scoper,
	orgID gid.GID,
	filter *IcpmsRequirementsFilter,
) ([]*coredata.IcpmsRequirement, error) {
	// Only include requirements whose parse job has not been deleted.
	// This filters out requirements from old/deleted parse runs.
	whereParts := []string{
		"tenant_id = @tenant_id",
		"organization_id = @org_id",
		"NOT is_deleted",
		"parse_job_id IN (SELECT id FROM icpms_document_parse_jobs WHERE tenant_id = @tenant_id AND deleted_at IS NULL)",
	}
	args := pgx.NamedArgs{
		"tenant_id": scope.GetTenantID(),
		"org_id":    orgID,
	}

	if filter != nil {
		if filter.ParseJobID != nil {
			whereParts = append(whereParts, "parse_job_id = @parse_job_id")
			args["parse_job_id"] = *filter.ParseJobID
		}
		if filter.RequirementType != nil {
			whereParts = append(whereParts, "requirement_type = @req_type")
			args["req_type"] = *filter.RequirementType
		}
		if filter.ReviewStatus != nil {
			whereParts = append(whereParts, "review_status = @review_status")
			args["review_status"] = *filter.ReviewStatus
		}
		if filter.ApplicabilityStatus != nil {
			whereParts = append(whereParts, "applicability_status = @app_status")
			args["app_status"] = *filter.ApplicabilityStatus
		}
		if filter.Priority != nil {
			whereParts = append(whereParts, "priority = @priority")
			args["priority"] = *filter.Priority
		}
	}

	query := "SELECT * FROM icpms_requirements WHERE " + strings.Join(whereParts, " AND ") +
		" ORDER BY candidate_score DESC, created_at ASC"

	var reqs []*coredata.IcpmsRequirement
	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		rows, err := conn.Query(ctx, query, args)
		if err != nil {
			return err
		}
		reqs, err = pgx.CollectRows(rows, pgx.RowToAddrOfStructByName[coredata.IcpmsRequirement])
		return err
	})
	return reqs, err
}

// Get returns a single requirement by ID.
func (s *IcpmsRequirementService) Get(
	ctx context.Context,
	scope coredata.Scoper,
	id gid.GID,
) (*coredata.IcpmsRequirement, error) {
	var req coredata.IcpmsRequirement
	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		rows, err := conn.Query(ctx,
			`SELECT * FROM icpms_requirements WHERE tenant_id = @tenant_id AND id = @id AND NOT is_deleted`,
			pgx.StrictNamedArgs{"tenant_id": scope.GetTenantID(), "id": id},
		)
		if err != nil {
			return err
		}
		req, err = pgx.CollectExactlyOneRow(rows, pgx.RowToStructByName[coredata.IcpmsRequirement])
		return err
	})
	return &req, err
}

// Update applies partial updates to a requirement.
func (s *IcpmsRequirementService) Update(
	ctx context.Context,
	scope coredata.Scoper,
	id gid.GID,
	title *string,
	description *string,
	reqType *coredata.IcpmsRequirementType,
	applicabilityStatus *coredata.IcpmsApplicabilityStatus,
	reviewStatus *coredata.IcpmsRequirementReviewStatus,
	priority *coredata.IcpmsRequirementPriority,
) (*coredata.IcpmsRequirement, error) {
	existing, err := s.Get(ctx, scope, id)
	if err != nil {
		return nil, fmt.Errorf("requirement not found: %w", err)
	}

	if title != nil {
		existing.Title = *title
	}
	if description != nil {
		existing.Description = description
	}
	if reqType != nil {
		existing.RequirementType = *reqType
	}
	if applicabilityStatus != nil {
		existing.ApplicabilityStatus = *applicabilityStatus
	}
	if reviewStatus != nil {
		existing.ReviewStatus = *reviewStatus
	}
	if priority != nil {
		existing.Priority = *priority
	}

	err = s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		_, err := tx.Exec(ctx, `
			UPDATE icpms_requirements SET
				title = @title,
				description = @description,
				requirement_type = @req_type,
				applicability_status = @app_status,
				review_status = @review_status,
				priority = @priority,
				updated_at = NOW()
			WHERE tenant_id = @tenant_id AND id = @id AND NOT is_deleted`,
			pgx.StrictNamedArgs{
				"tenant_id":    scope.GetTenantID(),
				"id":           id,
				"title":        existing.Title,
				"description":  existing.Description,
				"req_type":     existing.RequirementType,
				"app_status":   existing.ApplicabilityStatus,
				"review_status": existing.ReviewStatus,
				"priority":     existing.Priority,
			},
		)
		return err
	})
	if err != nil {
		return nil, fmt.Errorf("cannot update requirement: %w", err)
	}

	return existing, nil
}

// GenerateFromParseJob extracts requirements from all eligible sections of a parse job.
func (s *IcpmsRequirementService) GenerateFromParseJob(
	ctx context.Context,
	scope coredata.Scoper,
	parseJobID gid.GID,
	createdBy gid.GID,
) (*coredata.IcpmsRequirementGenerationJob, int, error) {
	// Load the parse job for metadata
	parseJob, err := s.loadParseJob(ctx, scope, parseJobID)
	if err != nil {
		return nil, 0, fmt.Errorf("cannot load parse job: %w", err)
	}

	// Load all sections for this parse job
	sections, err := s.loadSectionsForParseJob(ctx, scope, parseJobID)
	if err != nil {
		return nil, 0, fmt.Errorf("cannot load sections: %w", err)
	}

	now := time.Now()
	createdByPtr := createdBy
	genJob := &coredata.IcpmsRequirementGenerationJob{
		ID:             gid.New(scope.GetTenantID(), coredata.IcpmsRequirementGenerationJobEntityType),
		TenantID:       scope.GetTenantID(),
		OrganizationID: parseJob.OrganizationID,
		ParseJobID:     parseJobID,
		Status:         coredata.IcpmsRequirementGenerationJobStatusRunning,
		CreatedBy:      &createdByPtr,
		StartedAt:      &now,
	}

	if err := s.createGenerationJob(ctx, genJob); err != nil {
		return nil, 0, fmt.Errorf("cannot create generation job: %w", err)
	}

	// Load existing section IDs that already have requirements (deduplication)
	existingSectionIDs, err := s.loadExistingSectionIDs(ctx, scope, parseJob.OrganizationID, parseJobID)
	if err != nil {
		errMsg := err.Error()
		genJob.Status = coredata.IcpmsRequirementGenerationJobStatusFailed
		genJob.ErrorMessage = &errMsg
		_ = s.updateGenerationJob(ctx, genJob)
		return genJob, 0, fmt.Errorf("cannot load existing section IDs: %w", err)
	}

	// Extract requirements from sections
	language := parseJob.Language
	var toCreate []*coredata.IcpmsRequirement
	totalCandidates := 0
	totalDuplicates := 0
	totalSkipped := 0

	// Pre-count eligible sections to reserve a block of sequence numbers upfront.
	genJobShort := genJob.ID.String()
	if len(genJobShort) > 6 {
		genJobShort = genJobShort[len(genJobShort)-6:]
	}

	// Load document to get document_code for business codes.
	reqDoc, _ := s.svc.IcpmsDocuments.Get(ctx, scope, parseJob.DocumentID)
	var reqBaseSeq int
	var reqDocCode string
	reqYear := time.Now().Year()
	eligibleCount := 0
	for _, sec := range sections {
		if SectionIsEligible(sec.SectionType) {
			result := ExtractFromSection(sec.FullHeading, language)
			if result != nil {
				eligibleCount++
			}
		}
	}
	if reqDoc != nil && reqDoc.DocumentCode != nil && *reqDoc.DocumentCode != "" && eligibleCount > 0 {
		reqDocCode = *reqDoc.DocumentCode
		reqBaseSeq, _ = s.svc.IcpmsCodes.ReserveBlock(ctx, scope, parseJob.OrganizationID, "REQ", reqDocCode, reqYear, eligibleCount)
	}
	reqLocalIdx := 0

	for i, sec := range sections {
		if !SectionIsEligible(sec.SectionType) {
			totalSkipped++
			continue
		}

		// Build text to analyze (sanitize so ExtractFromSection sees clean UTF-8)
		cleanHeading, _ := sanitizeText(sec.FullHeading, 2000)
		text := cleanHeading
		if sec.ContentText != nil && *sec.ContentText != "" {
			cleanContent, _ := sanitizeText(*sec.ContentText, 3000)
			text = cleanHeading + " " + cleanContent
		}

		result := ExtractFromSection(text, language)
		if result == nil {
			totalSkipped++
			continue
		}

		totalCandidates++

		// Deduplication: skip if this section already has a requirement
		secID := sec.ID
		if existingSectionIDs[secID.String()] {
			totalDuplicates++
			continue
		}

		// Build title: sanitize UTF-8 and truncate by rune count (not bytes)
		title, _ := sanitizeText(sec.FullHeading, 200)

		var desc *string
		if sec.ContentText != nil && *sec.ContentText != "" {
			content, truncated := sanitizeText(*sec.ContentText, 500)
			if truncated {
				content += "..."
			}
			desc = &content
		}

		var code string
		if reqDocCode != "" {
			code = FormatBusinessCode("REQ", reqDocCode, reqYear, reqBaseSeq+reqLocalIdx)
		} else {
			code = fmt.Sprintf("REQ-%s-%04d", genJobShort, i+1)
		}
		reqLocalIdx++
		priority := PriorityFromScore(result.Score)
		keywords := KeywordsToJSON(result.Keywords)
		sectionID := sec.ID

		req := &coredata.IcpmsRequirement{
			ID:                  gid.New(scope.GetTenantID(), coredata.IcpmsRequirementEntityType),
			TenantID:            scope.GetTenantID(),
			OrganizationID:      parseJob.OrganizationID,
			DocumentID:          parseJob.DocumentID,
			DocumentVersionID:   parseJob.DocumentVersionID,
			ParseJobID:          parseJobID,
			SourceSectionID:     &sectionID,
			RequirementCode:     code,
			Title:               title,
			Description:         desc,
			RequirementType:     result.ReqType,
			ApplicabilityStatus: coredata.IcpmsApplicabilityStatusUnknown,
			ReviewStatus:        coredata.IcpmsRequirementReviewStatusCandidate,
			Priority:            priority,
			CandidateScore:      result.Score,
			KeywordMatches:      keywords,
			IsAutoGenerated:     true,
			CreatedBy:           &createdByPtr,
		}
		toCreate = append(toCreate, req)
	}

	// Bulk insert requirements
	if err := s.bulkInsertRequirements(ctx, toCreate); err != nil {
		errMsg := err.Error()
		genJob.Status = coredata.IcpmsRequirementGenerationJobStatusFailed
		genJob.ErrorMessage = &errMsg
		_ = s.updateGenerationJob(ctx, genJob)
		return genJob, 0, fmt.Errorf("cannot insert requirements: %w", err)
	}

	// Update generation job with final counts
	finishedAt := time.Now()
	genJob.Status = coredata.IcpmsRequirementGenerationJobStatusCompleted
	genJob.TotalCandidates = totalCandidates
	genJob.TotalCreated = len(toCreate)
	genJob.TotalSkipped = totalSkipped
	genJob.TotalDuplicates = totalDuplicates
	genJob.FinishedAt = &finishedAt
	if err := s.updateGenerationJob(ctx, genJob); err != nil {
		return genJob, len(toCreate), fmt.Errorf("cannot update generation job: %w", err)
	}

	return genJob, len(toCreate), nil
}

// GetLatestGenerationJobForParseJob returns the latest generation job for a parse job.
func (s *IcpmsRequirementService) GetLatestGenerationJobForParseJob(
	ctx context.Context,
	scope coredata.Scoper,
	parseJobID gid.GID,
) (*coredata.IcpmsRequirementGenerationJob, error) {
	var job coredata.IcpmsRequirementGenerationJob
	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		rows, err := conn.Query(ctx, `
			SELECT * FROM icpms_requirement_generation_jobs
			WHERE tenant_id = @tenant_id AND parse_job_id = @parse_job_id
			ORDER BY created_at DESC LIMIT 1`,
			pgx.StrictNamedArgs{
				"tenant_id":    scope.GetTenantID(),
				"parse_job_id": parseJobID,
			},
		)
		if err != nil {
			return err
		}
		job, err = pgx.CollectExactlyOneRow(rows, pgx.RowToStructByName[coredata.IcpmsRequirementGenerationJob])
		return err
	})
	if errors.Is(err, pgx.ErrNoRows) {
		return nil, nil
	}
	return &job, err
}

// --- private helpers ---

func (s *IcpmsRequirementService) loadParseJob(
	ctx context.Context,
	scope coredata.Scoper,
	parseJobID gid.GID,
) (*coredata.IcpmsDocumentParseJob, error) {
	var job coredata.IcpmsDocumentParseJob
	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		rows, err := conn.Query(ctx,
			`SELECT * FROM icpms_document_parse_jobs WHERE tenant_id = @tenant_id AND id = @id`,
			pgx.StrictNamedArgs{"tenant_id": scope.GetTenantID(), "id": parseJobID},
		)
		if err != nil {
			return err
		}
		job, err = pgx.CollectExactlyOneRow(rows, pgx.RowToStructByName[coredata.IcpmsDocumentParseJob])
		return err
	})
	return &job, err
}

func (s *IcpmsRequirementService) loadSectionsForParseJob(
	ctx context.Context,
	scope coredata.Scoper,
	parseJobID gid.GID,
) ([]*coredata.IcpmsParsedDocumentSection, error) {
	var sections []*coredata.IcpmsParsedDocumentSection
	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		rows, err := conn.Query(ctx,
			`SELECT * FROM icpms_parsed_document_sections WHERE tenant_id = @tenant_id AND parse_job_id = @parse_job_id ORDER BY sort_order ASC`,
			pgx.StrictNamedArgs{"tenant_id": scope.GetTenantID(), "parse_job_id": parseJobID},
		)
		if err != nil {
			return err
		}
		sections, err = pgx.CollectRows(rows, pgx.RowToAddrOfStructByName[coredata.IcpmsParsedDocumentSection])
		return err
	})
	return sections, err
}

func (s *IcpmsRequirementService) loadExistingSectionIDs(
	ctx context.Context,
	scope coredata.Scoper,
	orgID gid.GID,
	parseJobID gid.GID,
) (map[string]bool, error) {
	existing := map[string]bool{}
	err := s.svc.pg.WithConn(ctx, func(ctx context.Context, conn pg.Querier) error {
		rows, err := conn.Query(ctx, `
			SELECT source_section_id FROM icpms_requirements
			WHERE tenant_id = @tenant_id AND organization_id = @org_id AND parse_job_id = @parse_job_id AND NOT is_deleted AND source_section_id IS NOT NULL`,
			pgx.StrictNamedArgs{
				"tenant_id":    scope.GetTenantID(),
				"org_id":       orgID,
				"parse_job_id": parseJobID,
			},
		)
		if err != nil {
			return err
		}
		defer rows.Close()
		for rows.Next() {
			var secID string
			if err := rows.Scan(&secID); err != nil {
				return err
			}
			existing[secID] = true
		}
		return rows.Err()
	})
	return existing, err
}

func (s *IcpmsRequirementService) createGenerationJob(
	ctx context.Context,
	job *coredata.IcpmsRequirementGenerationJob,
) error {
	return s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		_, err := tx.Exec(ctx, `
			INSERT INTO icpms_requirement_generation_jobs (
				tenant_id, id, organization_id, parse_job_id, status,
				total_candidates, total_created, total_skipped, total_duplicates,
				created_by, started_at, created_at, updated_at
			) VALUES (
				@tenant_id, @id, @org_id, @parse_job_id, @status,
				0, 0, 0, 0,
				@created_by, @started_at, NOW(), NOW()
			)`,
			pgx.StrictNamedArgs{
				"tenant_id":    job.TenantID,
				"id":           job.ID,
				"org_id":       job.OrganizationID,
				"parse_job_id": job.ParseJobID,
				"status":       job.Status,
				"created_by":   job.CreatedBy,
				"started_at":   job.StartedAt,
			},
		)
		return err
	})
}

func (s *IcpmsRequirementService) updateGenerationJob(
	ctx context.Context,
	job *coredata.IcpmsRequirementGenerationJob,
) error {
	return s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		_, err := tx.Exec(ctx, `
			UPDATE icpms_requirement_generation_jobs SET
				status = @status,
				total_candidates = @total_candidates,
				total_created = @total_created,
				total_skipped = @total_skipped,
				total_duplicates = @total_duplicates,
				error_message = @error_message,
				finished_at = @finished_at,
				updated_at = NOW()
			WHERE tenant_id = @tenant_id AND id = @id`,
			pgx.StrictNamedArgs{
				"tenant_id":        job.TenantID,
				"id":               job.ID,
				"status":           job.Status,
				"total_candidates": job.TotalCandidates,
				"total_created":    job.TotalCreated,
				"total_skipped":    job.TotalSkipped,
				"total_duplicates": job.TotalDuplicates,
				"error_message":    job.ErrorMessage,
				"finished_at":      job.FinishedAt,
			},
		)
		return err
	})
}

func (s *IcpmsRequirementService) bulkInsertRequirements(
	ctx context.Context,
	reqs []*coredata.IcpmsRequirement,
) error {
	if len(reqs) == 0 {
		return nil
	}
	return s.svc.pg.WithTx(ctx, func(ctx context.Context, tx pg.Tx) error {
		for _, req := range reqs {
			_, err := tx.Exec(ctx, `
				INSERT INTO icpms_requirements (
					tenant_id, id, organization_id, document_id, document_version_id,
					parse_job_id, source_section_id, requirement_code, title, description,
					requirement_type, applicability_status, review_status, priority,
					candidate_score, keyword_matches, is_auto_generated, is_deleted,
					created_by, created_at, updated_at
				) VALUES (
					@tenant_id, @id, @org_id, @document_id, @document_version_id,
					@parse_job_id, @source_section_id, @req_code, @title, @description,
					@req_type, @app_status, @review_status, @priority,
					@score, @keywords, TRUE, FALSE,
					@created_by, NOW(), NOW()
				)`,
				pgx.StrictNamedArgs{
					"tenant_id":           req.TenantID,
					"id":                  req.ID,
					"org_id":              req.OrganizationID,
					"document_id":         req.DocumentID,
					"document_version_id": req.DocumentVersionID,
					"parse_job_id":        req.ParseJobID,
					"source_section_id":   req.SourceSectionID,
					"req_code":            req.RequirementCode,
					"title":               req.Title,
					"description":         req.Description,
					"req_type":            req.RequirementType,
					"app_status":          req.ApplicabilityStatus,
					"review_status":       req.ReviewStatus,
					"priority":            req.Priority,
					"score":               req.CandidateScore,
					"keywords":            req.KeywordMatches,
					"created_by":          req.CreatedBy,
				},
			)
			if err != nil {
				return err
			}
		}
		return nil
	})
}
