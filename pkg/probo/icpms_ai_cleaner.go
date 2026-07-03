// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package probo

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"strings"
	"sync"
	"time"
)

// GeminiCleanerConfig holds settings for the Gemini-based OCR post-processor.
type GeminiCleanerConfig struct {
	Enabled bool
	APIKey  string
	Model   string
}

// GeminiCleaner calls the Gemini REST API to fix OCR errors in extracted text blocks.
// It is safe for concurrent use.
type GeminiCleaner struct {
	cfg    GeminiCleanerConfig
	client *http.Client
}

// NewGeminiCleaner creates a GeminiCleaner. Returns nil when cfg.Enabled is false.
func NewGeminiCleaner(cfg GeminiCleanerConfig) *GeminiCleaner {
	if !cfg.Enabled {
		return nil
	}
	if cfg.Model == "" {
		cfg.Model = "gemini-2.0-flash"
	}
	return &GeminiCleaner{
		cfg:    cfg,
		client: &http.Client{Timeout: 60 * time.Second},
	}
}

// CleanBlocks runs OCR cleanup on every block concurrently (up to 5 goroutines).
// Gemini receives the raw text (which retains line breaks) and is instructed to
// preserve line structure. The cleaned result is stored in rawText so that the
// parse job — which splits on "\n" to detect section headers — sees Gemini-cleaned
// content. normText is recomputed from the cleaned rawText afterwards.
// If Gemini is unavailable or returns an error for a block, the original block is
// kept unchanged so extraction never fails because of the AI step.
func (g *GeminiCleaner) CleanBlocks(ctx context.Context, blocks []textBlock) []textBlock {
	if g == nil || len(blocks) == 0 {
		return blocks
	}

	const maxConcurrency = 5
	sem := make(chan struct{}, maxConcurrency)

	cleaned := make([]textBlock, len(blocks))
	copy(cleaned, blocks)

	var wg sync.WaitGroup
	for i := range blocks {
		wg.Add(1)
		sem <- struct{}{}
		go func(idx int) {
			defer wg.Done()
			defer func() { <-sem }()

			// Send rawText (line breaks preserved) so parse job gets Gemini-cleaned content.
			result, err := g.cleanOne(ctx, blocks[idx].rawText)
			if err != nil {
				log.Printf("[Gemini] block %d: %v — giữ nguyên bản gốc", idx, err)
				return
			}
			if result != "" {
				cleaned[idx].rawText = result
				cleaned[idx].normText = normalizeVietnameseText(result)
				cleaned[idx].hash = hashText(result)
			}
		}(i)
	}
	wg.Wait()
	return cleaned
}

const geminiCleanerPromptTemplate = `Bạn là công cụ làm sạch văn bản pháp luật Việt Nam được trích xuất từ OCR.
Nhiệm vụ: Sửa các lỗi OCR mà KHÔNG thay đổi nội dung pháp lý hợp lệ.

Chỉ được phép:
1. Thêm dấu chấm (.) hoặc dấu chấm phẩy (;) còn thiếu ở cuối câu/khoản rõ ràng.
2. Sửa từ bị OCR nhận sai rõ ràng (ví dụ: "hàng kân dụng" → "hàng không dân dụng").
3. Xóa ký tự rác ngắn (≤4 ký tự) đứng riêng một mình trên một dòng, không phải từ tiếng Việt hợp lệ.
4. Xóa hoặc sửa đoạn chứa âm tiết lặp lại vô nghĩa do OCR đọc lặp (ví dụ: "han han han nhu chi nhu chi", "la la la là là tha tha tho tho", "nha nha nha nha"). Nhận dạng: cùng âm tiết hoặc biến thể gần giống xuất hiện 3+ lần liên tiếp trong một cụm từ, không tạo thành câu tiếng Việt có nghĩa.
5. Nếu một câu/mệnh đề chứa hỗn hợp từ có nghĩa và cụm lặp vô nghĩa, hãy giữ phần có nghĩa và xóa phần vô nghĩa, nối lại thành câu mạch lạc.

KHÔNG được: thêm nội dung mới, diễn đạt lại, tóm tắt, dịch, thay đổi cấu trúc, gộp dòng hoặc tách dòng.
Giữ nguyên mọi dấu xuống dòng — cấu trúc dòng rất quan trọng cho phân tích văn bản sau này.
Trả về văn bản đã sửa và CHỈ văn bản đó, không thêm giải thích hay chú thích.

[VĂN BẢN CẦN SỬA]
%s
[/VĂN BẢN]`

// cleanOne sends a single block's text to Gemini and returns the cleaned version.
// Uses the shared geminiRequest / geminiResponse types from icpms_ai_review_gemini.go.
func (g *GeminiCleaner) cleanOne(ctx context.Context, text string) (string, error) {
	if strings.TrimSpace(text) == "" {
		return text, nil
	}

	prompt := fmt.Sprintf(geminiCleanerPromptTemplate, text)
	reqBody := geminiRequest{
		Contents: []geminiContent{
			{Parts: []geminiPart{{Text: prompt}}},
		},
		GenerationConfig: geminiGenerationConfig{
			ResponseMimeType: "text/plain",
		},
	}

	bodyBytes, err := json.Marshal(reqBody)
	if err != nil {
		return "", fmt.Errorf("marshal request: %w", err)
	}

	url := fmt.Sprintf("%s/%s:generateContent?key=%s",
		geminiAPIBaseURL, g.cfg.Model, g.cfg.APIKey)

	req, err := http.NewRequestWithContext(ctx, http.MethodPost, url, bytes.NewReader(bodyBytes))
	if err != nil {
		return "", fmt.Errorf("build request: %w", err)
	}
	req.Header.Set("Content-Type", "application/json")

	resp, err := g.client.Do(req)
	if err != nil {
		return "", fmt.Errorf("http: %w", err)
	}
	defer resp.Body.Close()

	raw, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", fmt.Errorf("read response: %w", err)
	}

	var result geminiResponse
	if err := json.Unmarshal(raw, &result); err != nil {
		return "", fmt.Errorf("decode response: %w", err)
	}

	if result.Error != nil {
		return "", fmt.Errorf("gemini API error %d: %s", result.Error.Code, result.Error.Message)
	}

	if len(result.Candidates) == 0 || len(result.Candidates[0].Content.Parts) == 0 {
		return "", fmt.Errorf("empty response from Gemini")
	}

	cleanedText := strings.TrimSpace(result.Candidates[0].Content.Parts[0].Text)

	// Safety guard: if Gemini output length differs wildly from input, discard it.
	origLen := len([]rune(text))
	cleanedLen := len([]rune(cleanedText))
	if cleanedLen < origLen/2 || cleanedLen > origLen*2 {
		return "", fmt.Errorf("gemini output length %d suspicious vs input %d — bỏ qua", cleanedLen, origLen)
	}

	return cleanedText, nil
}
