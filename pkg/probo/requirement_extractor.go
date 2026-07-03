// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package probo

import (
	"encoding/json"
	"strings"

	"go.probo.inc/probo/pkg/coredata"
)

type kwEntry struct {
	keyword string
	score   int
	reqType coredata.IcpmsRequirementType
}

var viKeywords = []kwEntry{
	// High confidence — prohibitions
	{"nghiêm cấm", 95, coredata.IcpmsRequirementTypeProhibition},
	{"cấm ", 92, coredata.IcpmsRequirementTypeProhibition},
	{"không được", 90, coredata.IcpmsRequirementTypeProhibition},
	{"bắt buộc", 95, coredata.IcpmsRequirementTypeObligation},
	// High confidence — obligations
	{"phải ", 90, coredata.IcpmsRequirementTypeObligation},
	{"phải\n", 90, coredata.IcpmsRequirementTypeObligation},
	// Medium confidence
	{"đảm bảo", 82, coredata.IcpmsRequirementTypeObligation},
	{"bảo đảm", 82, coredata.IcpmsRequirementTypeObligation},
	{"tuân thủ", 82, coredata.IcpmsRequirementTypeObligation},
	{"chịu trách nhiệm", 78, coredata.IcpmsRequirementTypeResponsibility},
	{"có trách nhiệm", 78, coredata.IcpmsRequirementTypeResponsibility},
	{"báo cáo", 75, coredata.IcpmsRequirementTypeReporting},
	{"lưu trữ", 75, coredata.IcpmsRequirementTypeRecord},
	{"hồ sơ", 72, coredata.IcpmsRequirementTypeRecord},
	{"đào tạo", 78, coredata.IcpmsRequirementTypeTraining},
	{"huấn luyện", 78, coredata.IcpmsRequirementTypeTraining},
	{"giám sát", 75, coredata.IcpmsRequirementTypeMonitoring},
	{"kiểm tra", 72, coredata.IcpmsRequirementTypeMonitoring},
	{"theo dõi", 70, coredata.IcpmsRequirementTypeMonitoring},
	{"rà soát", 70, coredata.IcpmsRequirementTypeReview},
	{"xem xét", 68, coredata.IcpmsRequirementTypeReview},
	{"duy trì", 75, coredata.IcpmsRequirementTypeMonitoring},
	{"thực hiện", 72, coredata.IcpmsRequirementTypeProcess},
	{"triển khai", 70, coredata.IcpmsRequirementTypeProcess},
	{"xây dựng", 70, coredata.IcpmsRequirementTypeProcess},
	{"ban hành", 70, coredata.IcpmsRequirementTypeProcess},
	{"tổ chức", 68, coredata.IcpmsRequirementTypeProcess},
	{"phối hợp", 65, coredata.IcpmsRequirementTypeProcess},
	{"cung cấp", 65, coredata.IcpmsRequirementTypeProcess},
	// Low confidence
	{"yêu cầu", 50, coredata.IcpmsRequirementTypeOther},
	{"cần ", 45, coredata.IcpmsRequirementTypeOther},
}

var enKeywords = []kwEntry{
	// High confidence — prohibitions
	{"shall not", 93, coredata.IcpmsRequirementTypeProhibition},
	{"must not", 93, coredata.IcpmsRequirementTypeProhibition},
	{"no person shall", 93, coredata.IcpmsRequirementTypeProhibition},
	{"is prohibited", 92, coredata.IcpmsRequirementTypeProhibition},
	{"are prohibited", 92, coredata.IcpmsRequirementTypeProhibition},
	{"not be permitted", 90, coredata.IcpmsRequirementTypeProhibition},
	// High confidence — obligations
	{"shall ", 90, coredata.IcpmsRequirementTypeObligation},
	{"shall\n", 90, coredata.IcpmsRequirementTypeObligation},
	{"must ", 90, coredata.IcpmsRequirementTypeObligation},
	{"is required to", 88, coredata.IcpmsRequirementTypeObligation},
	{"are required to", 88, coredata.IcpmsRequirementTypeObligation},
	// Medium confidence
	{"comply with", 82, coredata.IcpmsRequirementTypeObligation},
	{"ensure ", 78, coredata.IcpmsRequirementTypeObligation},
	{"ensure\n", 78, coredata.IcpmsRequirementTypeObligation},
	{"be responsible for", 78, coredata.IcpmsRequirementTypeResponsibility},
	{"is responsible for", 78, coredata.IcpmsRequirementTypeResponsibility},
	{"maintain ", 75, coredata.IcpmsRequirementTypeMonitoring},
	{"record ", 78, coredata.IcpmsRequirementTypeRecord},
	{"document ", 75, coredata.IcpmsRequirementTypeRecord},
	{"report ", 75, coredata.IcpmsRequirementTypeReporting},
	{"training", 78, coredata.IcpmsRequirementTypeTraining},
	{"monitor ", 75, coredata.IcpmsRequirementTypeMonitoring},
	{"review ", 72, coredata.IcpmsRequirementTypeReview},
	{"establish ", 72, coredata.IcpmsRequirementTypeProcess},
	{"implement ", 72, coredata.IcpmsRequirementTypeProcess},
	{"provide ", 68, coredata.IcpmsRequirementTypeProcess},
	{"develop ", 68, coredata.IcpmsRequirementTypeProcess},
	{"conduct ", 68, coredata.IcpmsRequirementTypeProcess},
	{"perform ", 68, coredata.IcpmsRequirementTypeProcess},
	// Low confidence
	{"should ", 55, coredata.IcpmsRequirementTypeOther},
	{"is expected to", 45, coredata.IcpmsRequirementTypeOther},
}

// ExtractResult holds the result of keyword extraction from a section.
type ExtractResult struct {
	Score    int
	ReqType  coredata.IcpmsRequirementType
	Keywords []string
}

// ExtractFromSection analyzes section text for requirement keywords.
// Returns nil if no qualifying keywords are found (score < 40).
func ExtractFromSection(text string, language string) *ExtractResult {
	if text == "" {
		return nil
	}
	lower := strings.ToLower(text)

	patterns := viKeywords
	if language == "en" {
		patterns = enKeywords
	}

	bestScore := 0
	bestType := coredata.IcpmsRequirementTypeOther
	typeCounts := map[coredata.IcpmsRequirementType]int{}
	var matched []string

	for _, kw := range patterns {
		if strings.Contains(lower, kw.keyword) {
			matched = append(matched, kw.keyword)
			typeCounts[kw.reqType]++
			if kw.score > bestScore {
				bestScore = kw.score
				bestType = kw.reqType
			}
		}
	}

	if len(matched) == 0 || bestScore < 40 {
		return nil
	}

	// If no high-confidence match, use most-frequent type
	if bestScore < 80 && len(typeCounts) > 1 {
		maxCount := 0
		for t, c := range typeCounts {
			if c > maxCount {
				maxCount = c
				bestType = t
			}
		}
	}

	return &ExtractResult{
		Score:    bestScore,
		ReqType:  bestType,
		Keywords: matched,
	}
}

// SectionIsEligible returns true for section types that can produce requirements.
// Chỉ trích xuất đến cấp Khoản (Clause) — không trích xuất Điểm (Point) để tránh rời rạc.
func SectionIsEligible(sectionType coredata.IcpmsDocumentSectionType) bool {
	switch sectionType {
	case coredata.IcpmsDocumentSectionTypeArticle,
		coredata.IcpmsDocumentSectionTypeClause,
		coredata.IcpmsDocumentSectionTypeParagraph,
		coredata.IcpmsDocumentSectionTypeSubparagraph,
		coredata.IcpmsDocumentSectionTypeAppendix,
		coredata.IcpmsDocumentSectionTypeAttachment,
		coredata.IcpmsDocumentSectionTypeNote,
		coredata.IcpmsDocumentSectionTypeUnknown:
		return true
	default:
		return false
	}
}

// KeywordsToJSON serializes a keywords slice to a compact JSON string.
func KeywordsToJSON(keywords []string) *string {
	if len(keywords) == 0 {
		return nil
	}
	b, err := json.Marshal(keywords)
	if err != nil {
		return nil
	}
	s := string(b)
	return &s
}

// PriorityFromScore maps a candidate score to a priority level.
func PriorityFromScore(score int) coredata.IcpmsRequirementPriority {
	switch {
	case score >= 85:
		return coredata.IcpmsRequirementPriorityHigh
	case score >= 65:
		return coredata.IcpmsRequirementPriorityMedium
	default:
		return coredata.IcpmsRequirementPriorityLow
	}
}
