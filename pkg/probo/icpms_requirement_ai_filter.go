// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package probo

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"log/slog"
	"net/http"
	"strings"
	"time"

	"go.probo.inc/probo/pkg/coredata"
)

const (
	reqFilterBatchSize = 10
	reqFilterTimeout   = 90 * time.Second
)

// reqCandidate holds a keyword-matched section candidate before AI filtering.
type reqCandidate struct {
	sec    *coredata.IcpmsParsedDocumentSection
	result *ExtractResult
	secIdx int
	// Set by AI filter; empty means fall back to original heading/content.
	aiTitle string
	aiDesc  string
}

type reqFilterItem struct {
	Idx   int    `json:"idx"`
	OK    bool   `json:"ok"`
	Title string `json:"title"`
	Desc  string `json:"desc"`
}

// filterRequirementCandidates sends keyword-matched candidates to Gemini in
// batches of reqFilterBatchSize to remove false positives and enrich
// title/description. On any error the batch is kept unchanged (fail-open).
func filterRequirementCandidates(
	ctx context.Context,
	apiKey, model, language string,
	candidates []reqCandidate,
) []reqCandidate {
	if len(candidates) == 0 {
		return candidates
	}
	if model == "" {
		model = geminiDefaultModel
	}

	var kept []reqCandidate
	for start := 0; start < len(candidates); start += reqFilterBatchSize {
		end := start + reqFilterBatchSize
		if end > len(candidates) {
			end = len(candidates)
		}
		batch := candidates[start:end]
		kept = append(kept, filterCandidateBatch(ctx, apiKey, model, language, batch)...)
	}

	slog.Info("requirement AI filter complete",
		"input", len(candidates),
		"kept", len(kept),
		"removed", len(candidates)-len(kept))

	return kept
}

func filterCandidateBatch(
	ctx context.Context,
	apiKey, model, language string,
	batch []reqCandidate,
) []reqCandidate {
	prompt := buildReqFilterPrompt(language, batch)

	reqBody := geminiRequest{
		Contents: []geminiContent{{
			Parts: []geminiPart{{Text: prompt}},
		}},
		GenerationConfig: geminiGenerationConfig{
			ResponseMimeType: "application/json",
		},
	}
	bodyBytes, err := json.Marshal(reqBody)
	if err != nil {
		return batch
	}

	url := fmt.Sprintf("%s/%s:generateContent?key=%s", geminiAPIBaseURL, model, apiKey)
	httpReq, err := http.NewRequestWithContext(ctx, http.MethodPost, url, bytes.NewReader(bodyBytes))
	if err != nil {
		return batch
	}
	httpReq.Header.Set("Content-Type", "application/json")

	client := &http.Client{Timeout: reqFilterTimeout}
	resp, err := client.Do(httpReq)
	if err != nil {
		slog.Warn("requirement AI filter: HTTP error", "error", err)
		return batch
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		slog.Warn("requirement AI filter: non-200 status", "status", resp.StatusCode)
		return batch
	}

	var gemResp geminiResponse
	if err := json.NewDecoder(resp.Body).Decode(&gemResp); err != nil {
		return batch
	}
	if gemResp.Error != nil {
		slog.Warn("requirement AI filter: Gemini API error",
			"code", gemResp.Error.Code, "message", gemResp.Error.Message)
		return batch
	}
	if len(gemResp.Candidates) == 0 || len(gemResp.Candidates[0].Content.Parts) == 0 {
		return batch
	}

	raw := strings.TrimSpace(gemResp.Candidates[0].Content.Parts[0].Text)
	// Strip possible markdown code fences Gemini sometimes adds despite JSON mime type
	raw = strings.TrimPrefix(raw, "```json")
	raw = strings.TrimPrefix(raw, "```")
	raw = strings.TrimSuffix(raw, "```")
	raw = strings.TrimSpace(raw)

	var items []reqFilterItem
	if err := json.Unmarshal([]byte(raw), &items); err != nil {
		preview := raw
		if len(preview) > 300 {
			preview = preview[:300]
		}
		slog.Warn("requirement AI filter: JSON parse error", "error", err, "raw", preview)
		return batch
	}

	// Build lookup: 1-based idx → item
	lookup := make(map[int]reqFilterItem, len(items))
	for _, item := range items {
		lookup[item.Idx] = item
	}

	var kept []reqCandidate
	for i, cand := range batch {
		item, found := lookup[i+1]
		if !found {
			// AI omitted this entry → keep it (fail-open)
			kept = append(kept, cand)
			continue
		}
		if item.OK {
			c := cand
			c.aiTitle = strings.TrimSpace(item.Title)
			c.aiDesc = strings.TrimSpace(item.Desc)
			kept = append(kept, c)
		}
	}
	return kept
}

func buildReqFilterPrompt(language string, batch []reqCandidate) string {
	var sb strings.Builder

	if language == "en" {
		sb.WriteString(`You are a regulatory compliance expert reviewing sections from an ICAO aviation standards document.
For each numbered section, decide if it contains a genuine regulatory requirement —
an obligation, prohibition, or mandatory standard that an organization MUST comply with.

Return ONLY a JSON array (no markdown fences), one object per section:
[{"idx":1,"ok":true,"title":"concise title ≤120 chars","desc":"1-2 sentence summary ≤280 chars"},...]

Rules:
- ok=true ONLY when normative language is present: "shall", "must", "is required to", "is prohibited"
- ok=false for: definitions, notes, examples, background/introductory text, section headings with no provision
- title: short label for the requirement (not a full sentence)
- desc: what is specifically required or prohibited, written as an actionable statement. Empty string "" if ok=false.

`)
		for i, c := range batch {
			content := sectionContentForPrompt(c.sec)
			fmt.Fprintf(&sb, "[%d] Heading: %q\nContent: %q\n\n", i+1, c.sec.FullHeading, content)
		}
	} else {
		sb.WriteString(`Bạn là chuyên gia tuân thủ quy định đang rà soát các điều khoản từ văn bản pháp lý hàng không Việt Nam.
Với mỗi đoạn, xác định xem đây có phải là một yêu cầu quy định thực sự —
nghĩa vụ, cấm đoán hoặc tiêu chuẩn BẮT BUỘC mà tổ chức phải tuân theo.

Trả về ONLY JSON array (không dùng markdown), một object cho mỗi đoạn:
[{"idx":1,"ok":true,"title":"tiêu đề ≤120 ký tự","desc":"tóm tắt 1-2 câu ≤280 ký tự"},...]

Quy tắc:
- ok=true CHỈ khi có ngôn ngữ quy phạm: "phải", "không được", "nghiêm cấm", "bắt buộc", "có trách nhiệm"
- ok=false cho: định nghĩa, ghi chú, ví dụ, văn bản mô tả, tiêu đề không có điều khoản cụ thể
- title: nhãn ngắn gọn cho yêu cầu (không phải câu đầy đủ)
- desc: tóm tắt rõ ràng tổ chức phải làm gì hoặc không được làm gì. Chuỗi rỗng "" nếu ok=false.

`)
		for i, c := range batch {
			content := sectionContentForPrompt(c.sec)
			fmt.Fprintf(&sb, "[%d] Tiêu đề: %q\nNội dung: %q\n\n", i+1, c.sec.FullHeading, content)
		}
	}

	return sb.String()
}

func sectionContentForPrompt(sec *coredata.IcpmsParsedDocumentSection) string {
	if sec.ContentText == nil || *sec.ContentText == "" {
		return ""
	}
	content := *sec.ContentText
	if len([]rune(content)) > 500 {
		runes := []rune(content)
		content = string(runes[:500]) + "..."
	}
	return content
}
