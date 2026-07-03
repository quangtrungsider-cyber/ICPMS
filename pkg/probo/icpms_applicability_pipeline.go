// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package probo

import (
	"context"
	"log/slog"

	"go.probo.inc/probo/pkg/coredata"
	"go.probo.inc/probo/pkg/gid"
)

// RunFullPipelineForParseJob runs the complete automated pipeline after a parse job completes:
//  1. Generates requirements from the parse job sections
//  2. Reviews every requirement with Gemini AI to set applicabilityStatus + applicabilityNote
//
// Designed to be called in a goroutine — all errors are logged, not returned.
// orgID and createdBy come from the parse job's metadata.
func (s *Service) RunFullPipelineForParseJob(
	ctx context.Context,
	scope coredata.Scoper,
	parseJobID gid.GID,
	orgID gid.GID,
	createdBy gid.GID,
) {
	// Step 1 — generate requirements
	_, created, err := s.IcpmsRequirements.GenerateFromParseJob(ctx, scope, parseJobID, createdBy)
	if err != nil {
		slog.Error("applicability pipeline: requirement generation failed",
			"parse_job_id", parseJobID, "error", err)
		return
	}
	if created == 0 {
		slog.Info("applicability pipeline: no requirements generated, skipping AI review",
			"parse_job_id", parseJobID)
		return
	}

	// Step 2 — build AI provider (Gemini preferred, rule-based fallback)
	provider := s.buildAIReviewProviderForOrg(ctx, scope, orgID)

	// Step 3 — fetch freshly-created requirements and review each
	reqs, err := s.IcpmsRequirements.listByParseJobDirect(ctx, scope, parseJobID)
	if err != nil {
		slog.Error("applicability pipeline: cannot list requirements",
			"parse_job_id", parseJobID, "error", err)
		return
	}

	reviewed := 0
	for _, req := range reqs {
		lang := "vi"
		if req.KeywordMatches == nil {
			lang = "en"
		}
		input := AIReviewInput{
			RequirementCode: req.RequirementCode,
			Title:           req.Title,
			Language:        lang,
			RequirementType: string(req.RequirementType),
		}
		if req.Description != nil {
			input.Description = *req.Description
		}

		output, reviewErr := provider.Review(input)
		if reviewErr != nil {
			slog.Warn("applicability pipeline: review failed for requirement",
				"requirement_id", req.ID, "error", reviewErr)
			continue
		}

		status := coredata.IcpmsApplicabilityStatusUnknown
		if output.SuggestedApplicabilityStatus != nil {
			switch *output.SuggestedApplicabilityStatus {
			case "APPLICABLE":
				status = coredata.IcpmsApplicabilityStatusApplicable
			case "NOT_APPLICABLE":
				status = coredata.IcpmsApplicabilityStatusNotApplicable
			case "PARTIALLY_APPLICABLE":
				status = coredata.IcpmsApplicabilityStatusPartiallyApplicable
			default:
				status = coredata.IcpmsApplicabilityStatusNeedsReview
			}
		}

		if updateErr := s.IcpmsRequirements.updateApplicabilityFromAI(
			ctx, scope, req.ID, status, output.SuggestedApplicabilityNote,
		); updateErr != nil {
			slog.Warn("applicability pipeline: cannot update requirement",
				"requirement_id", req.ID, "error", updateErr)
			continue
		}
		reviewed++
	}

	slog.Info("applicability pipeline: AI review complete",
		"parse_job_id", parseJobID,
		"total", len(reqs),
		"reviewed", reviewed)
}

// buildAIReviewProviderForOrg returns a Gemini provider if configured for the organization,
// otherwise falls back to the deterministic rule-based provider.
func (s *Service) buildAIReviewProviderForOrg(
	ctx context.Context,
	scope coredata.Scoper,
	orgID gid.GID,
) AIReviewProvider {
	aiCfg, _ := s.IcpmsAiConfigs.Get(ctx, scope, orgID, "GEMINI")
	if aiCfg == nil || !aiCfg.IsEnabled || aiCfg.APIKey == nil ||
		aiCfg.DefaultModel == nil || *aiCfg.DefaultModel == "RULE_BASED" || *aiCfg.DefaultModel == "" {
		return &RuleBasedAIReviewProvider{}
	}
	return &GeminiAIReviewProvider{
		APIKey:   *aiCfg.APIKey,
		Model:    *aiCfg.DefaultModel,
		Fallback: &RuleBasedAIReviewProvider{},
	}
}
