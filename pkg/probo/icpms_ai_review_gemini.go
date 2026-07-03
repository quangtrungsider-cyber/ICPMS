// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package probo

import (
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"strings"
	"time"
)

// ErrGeminiQuotaExceeded is returned when the Gemini API reports quota/billing exhaustion (HTTP 429).
// This error must NOT be silently swallowed by a fallback — callers should stop and warn the user.
type ErrGeminiQuotaExceeded struct {
	Message string
}

func (e *ErrGeminiQuotaExceeded) Error() string {
	return fmt.Sprintf("gemini quota exceeded: %s", e.Message)
}

const (
	geminiDefaultModel    = "gemini-2.5-flash"
	geminiAPIBaseURL      = "https://generativelanguage.googleapis.com/v1beta/models"
	geminiRequestTimeout  = 60 * time.Second
)

// GeminiAIReviewProvider calls the Gemini REST API for each requirement.
// If the API call fails, it falls back to the rule-based provider.
type GeminiAIReviewProvider struct {
	APIKey   string
	Model    string
	Fallback AIReviewProvider
}

// geminiRequest is the JSON body sent to the Gemini API.
type geminiRequest struct {
	Contents         []geminiContent         `json:"contents"`
	GenerationConfig geminiGenerationConfig  `json:"generationConfig"`
}

type geminiContent struct {
	Parts []geminiPart `json:"parts"`
}

type geminiPart struct {
	Text string `json:"text"`
}

type geminiGenerationConfig struct {
	ResponseMimeType string `json:"responseMimeType"`
}

// geminiResponse is the JSON response from the Gemini API.
type geminiResponse struct {
	Candidates []struct {
		Content struct {
			Parts []struct {
				Text string `json:"text"`
			} `json:"parts"`
		} `json:"content"`
	} `json:"candidates"`
	Error *struct {
		Message string `json:"message"`
		Code    int    `json:"code"`
	} `json:"error"`
}

// geminiSuggestionOutput matches the JSON the prompt instructs Gemini to return.
type geminiSuggestionOutput struct {
	ChecklistQuestion     string  `json:"checklistQuestion"`
	ImplementationMethod  string  `json:"implementationMethod"`
	ResponsibleUnit       string  `json:"responsibleUnit"`
	Evidence              string  `json:"evidence"`
	ActionPlan            string  `json:"actionPlan"`
	RiskIfNotComplied     string  `json:"riskIfNotComplied"`
	CurrentStatus         string  `json:"currentStatus"`
	RequirementType       string  `json:"requirementType"`
	ApplicabilityStatus   string  `json:"applicabilityStatus"`
	ApplicabilityReasoning string `json:"applicabilityReasoning"`
	Priority              string  `json:"priority"`
	ComplianceDomain      string  `json:"complianceDomain"`
	Confidence            float64 `json:"confidence"`
}

func (p *GeminiAIReviewProvider) Review(input AIReviewInput) (*AIReviewOutput, error) {
	out, err := p.callGemini(input)
	if err != nil {
		var quotaErr *ErrGeminiQuotaExceeded
		if errors.As(err, &quotaErr) {
			// Quota/billing errors must NOT fall back silently — propagate so RunJob can warn user.
			return nil, err
		}
		// Fallback to rule-based on other transient API errors
		if p.Fallback != nil {
			return p.Fallback.Review(input)
		}
		return nil, fmt.Errorf("gemini error and no fallback: %w", err)
	}
	return out, nil
}

func (p *GeminiAIReviewProvider) callGemini(input AIReviewInput) (*AIReviewOutput, error) {
	model := p.Model
	if model == "" {
		model = geminiDefaultModel
	}

	prompt := buildGeminiPrompt(input)

	reqBody := geminiRequest{
		Contents: []geminiContent{
			{Parts: []geminiPart{{Text: prompt}}},
		},
		GenerationConfig: geminiGenerationConfig{
			ResponseMimeType: "application/json",
		},
	}

	reqJSON, err := json.Marshal(reqBody)
	if err != nil {
		return nil, fmt.Errorf("marshal request: %w", err)
	}

	url := fmt.Sprintf("%s/%s:generateContent?key=%s", geminiAPIBaseURL, model, p.APIKey)

	httpClient := &http.Client{Timeout: geminiRequestTimeout}
	resp, err := httpClient.Post(url, "application/json", bytes.NewReader(reqJSON))
	if err != nil {
		return nil, fmt.Errorf("http post: %w", err)
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("read response: %w", err)
	}

	if resp.StatusCode == http.StatusTooManyRequests {
		return nil, &ErrGeminiQuotaExceeded{Message: truncateStr(string(body), 300)}
	}
	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("gemini api status %d: %s", resp.StatusCode, truncateStr(string(body), 200))
	}

	var gemResp geminiResponse
	if err := json.Unmarshal(body, &gemResp); err != nil {
		return nil, fmt.Errorf("parse response: %w", err)
	}

	if gemResp.Error != nil {
		if gemResp.Error.Code == 429 || strings.Contains(strings.ToUpper(gemResp.Error.Message), "RESOURCE_EXHAUSTED") || strings.Contains(strings.ToLower(gemResp.Error.Message), "quota") || strings.Contains(strings.ToLower(gemResp.Error.Message), "spend cap") {
			return nil, &ErrGeminiQuotaExceeded{Message: gemResp.Error.Message}
		}
		return nil, fmt.Errorf("gemini error %d: %s", gemResp.Error.Code, gemResp.Error.Message)
	}

	if len(gemResp.Candidates) == 0 || len(gemResp.Candidates[0].Content.Parts) == 0 {
		return nil, fmt.Errorf("gemini returned no candidates")
	}

	rawJSON := gemResp.Candidates[0].Content.Parts[0].Text
	var sug geminiSuggestionOutput
	if err := json.Unmarshal([]byte(rawJSON), &sug); err != nil {
		return nil, fmt.Errorf("parse suggestion json: %w", err)
	}

	return geminiOutputToReview(&sug, input), nil
}

// vatmContext is the organizational context injected into every Gemini prompt
// so the model can correctly determine applicability for VATM specifically.
const vatmContext = `
Tổ chức cần đánh giá: TỔNG CÔNG TY QUẢN LÝ BAY VIỆT NAM (VATM)

VATM LÀ:
- Nhà cung cấp dịch vụ bảo đảm hoạt động bay (ANS Provider) duy nhất tại Việt Nam
- Cung cấp dịch vụ không lưu (ATC), dẫn đường, thông tin liên lạc, giám sát (CNS)
- Cung cấp dịch vụ khí tượng hàng không (MET)
- Phối hợp tìm kiếm cứu nạn hàng không (SAR)
- Bay kiểm tra, hiệu chuẩn thiết bị bảo đảm hoạt động bay
- Đào tạo huấn luyện kiểm soát viên không lưu và nhân viên kỹ thuật
- Quản lý luồng không lưu (ATFM), thông báo tin tức hàng không (AIS/NOTAM)
- Doanh nghiệp nhà nước 100% vốn nhà nước, trực thuộc Bộ GTVT

VATM KHÔNG PHẢI LÀ (dùng để xác định yêu cầu KHÔNG ÁP DỤNG):
- Nhà khai thác cảng hàng không/sân bay (Airport Operator) — đó là ACV/cảng vụ
- Hãng hàng không (Airline/Aircraft Operator)
- Cơ quan cấp phép/bằng lái phi công — đó là Cục HKVN (CAAV)
- Cơ quan quản lý nhà nước về hàng không — đó là Cục HKVN, Bộ GTVT
- Tổ chức thiết kế phương thức bay (procedure design không phải hoạt động chính)
`

func buildGeminiPrompt(input AIReviewInput) string {
	var sb strings.Builder
	sb.WriteString("Bạn là chuyên gia kiểm toán tuân thủ hàng không (ICAO/TCCA/CAAV). ")
	sb.WriteString("Phân tích yêu cầu pháp lý sau và trả về một JSON hợp lệ (không có markdown, chỉ JSON thuần).\n\n")
	sb.WriteString("=== THÔNG TIN TỔ CHỨC ===")
	sb.WriteString(vatmContext)
	sb.WriteString("\n=== YÊU CẦU CẦN ĐÁNH GIÁ ===\n")
	sb.WriteString("- Mã: " + input.RequirementCode + "\n")
	sb.WriteString("- Tiêu đề: " + input.Title + "\n")
	if input.Description != "" {
		sb.WriteString("- Mô tả: " + truncateStr(input.Description, 500) + "\n")
	}
	sb.WriteString("- Loại yêu cầu: " + input.RequirementType + "\n\n")
	sb.WriteString("Trả về JSON với đúng các trường sau:\n")
	sb.WriteString(`{
  "checklistQuestion": "Câu hỏi kiểm tra tuân thủ cụ thể, bắt đầu bằng 'Đơn vị có...'",
  "implementationMethod": "Phương pháp triển khai thực hiện yêu cầu tại VATM",
  "responsibleUnit": "Đơn vị/ban chủ trì tại VATM. Bắt đầu bằng 'Chủ trì: ...'",
  "evidence": "Hồ sơ, bằng chứng cần có để chứng minh tuân thủ",
  "actionPlan": "Kế hoạch hành động khắc phục nếu chưa tuân thủ",
  "riskIfNotComplied": "Rủi ro khi không tuân thủ",
  "currentStatus": "Chưa điền",
  "requirementType": "OBLIGATION hoặc PROCESS hoặc INFORMATION hoặc RESPONSIBILITY",
  "applicabilityStatus": "APPLICABLE nếu yêu cầu áp dụng trực tiếp cho VATM; NOT_APPLICABLE nếu yêu cầu dành cho airport operator/airline/cơ quan nhà nước; PARTIALLY_APPLICABLE nếu một phần áp dụng",
  "applicabilityReasoning": "Giải thích ngắn gọn (1-2 câu) tại sao yêu cầu này APPLICABLE/NOT_APPLICABLE/PARTIALLY_APPLICABLE đối với VATM là ANS Provider",
  "priority": "HIGH hoặc MEDIUM hoặc LOW",
  "complianceDomain": "Lĩnh vực tuân thủ ngắn gọn (VD: ATS, MET, TRAINING, SAFETY, CNS, AIM, ATFM, SAR...)",
  "confidence": 0.0
}`)
	return sb.String()
}

func geminiOutputToReview(sug *geminiSuggestionOutput, input AIReviewInput) *AIReviewOutput {
	strPtr := func(s string) *string {
		if s == "" {
			return nil
		}
		return &s
	}

	confidence := sug.Confidence
	if confidence <= 0 || confidence > 1 {
		confidence = 0.75
	}

	question := sug.ChecklistQuestion
	if question == "" {
		question = buildChecklistQuestion(input.Title, "vi")
	}

	priority := sug.Priority
	if priority == "" {
		priority = "MEDIUM"
	}

	reqType := sug.RequirementType
	if reqType == "" {
		reqType = "OBLIGATION"
	}

	applicability := sug.ApplicabilityStatus
	if applicability == "" {
		applicability = "APPLICABLE"
	}

	currentStatus := "Chưa điền"

	return &AIReviewOutput{
		SuggestedChecklistQuestion:    strPtr(question),
		SuggestedImplementationMethod: strPtr(sug.ImplementationMethod),
		SuggestedResponsibleUnit:      strPtr(sug.ResponsibleUnit),
		SuggestedEvidence:             strPtr(sug.Evidence),
		SuggestedActionPlan:           strPtr(sug.ActionPlan),
		SuggestedRiskIfNotComplied:    strPtr(sug.RiskIfNotComplied),
		SuggestedCurrentStatus:        &currentStatus,
		SuggestedRequirementType:      strPtr(reqType),
		SuggestedApplicabilityStatus:  strPtr(applicability),
		SuggestedApplicabilityNote:    strPtr(sug.ApplicabilityReasoning),
		SuggestedPriority:             strPtr(priority),
		SuggestedComplianceDomain:     strPtr(sug.ComplianceDomain),
		AiConfidence:                  confidence,
	}
}

func truncateStr(s string, max int) string {
	runes := []rune(s)
	if len(runes) <= max {
		return s
	}
	return string(runes[:max]) + "..."
}
