// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package probo

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strings"
	"time"
)

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
	ChecklistQuestion    string `json:"checklistQuestion"`
	ImplementationMethod string `json:"implementationMethod"`
	ResponsibleUnit      string `json:"responsibleUnit"`
	Evidence             string `json:"evidence"`
	ActionPlan           string `json:"actionPlan"`
	RiskIfNotComplied    string `json:"riskIfNotComplied"`
	CurrentStatus        string `json:"currentStatus"`
	RequirementType      string `json:"requirementType"`
	ApplicabilityStatus  string `json:"applicabilityStatus"`
	Priority             string `json:"priority"`
	ComplianceDomain     string `json:"complianceDomain"`
	Confidence           float64 `json:"confidence"`
}

func (p *GeminiAIReviewProvider) Review(input AIReviewInput) (*AIReviewOutput, error) {
	out, err := p.callGemini(input)
	if err != nil {
		// Fallback to rule-based on any API error
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

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("gemini api status %d: %s", resp.StatusCode, truncateStr(string(body), 200))
	}

	var gemResp geminiResponse
	if err := json.Unmarshal(body, &gemResp); err != nil {
		return nil, fmt.Errorf("parse response: %w", err)
	}

	if gemResp.Error != nil {
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

func buildGeminiPrompt(input AIReviewInput) string {
	var sb strings.Builder
	sb.WriteString("Bạn là chuyên gia kiểm toán tuân thủ hàng không (ICAO/TCCA). ")
	sb.WriteString("Phân tích yêu cầu pháp lý sau và trả về một JSON hợp lệ với các trường sau (không có markdown, chỉ JSON thuần):\n\n")
	sb.WriteString("Yêu cầu:\n")
	sb.WriteString("- Mã: " + input.RequirementCode + "\n")
	sb.WriteString("- Tiêu đề: " + input.Title + "\n")
	if input.Description != "" {
		sb.WriteString("- Mô tả: " + truncateStr(input.Description, 500) + "\n")
	}
	sb.WriteString("- Loại yêu cầu: " + input.RequirementType + "\n\n")
	sb.WriteString("Trả về JSON với đúng các trường sau:\n")
	sb.WriteString(`{
  "checklistQuestion": "Câu hỏi kiểm tra tuân thủ cụ thể, bắt đầu bằng 'Đơn vị có...'",
  "implementationMethod": "Phương pháp triển khai thực hiện yêu cầu",
  "responsibleUnit": "Đơn vị/ban chủ trì tại VATM. Bắt đầu bằng 'Chủ trì: ...'",
  "evidence": "Hồ sơ, bằng chứng cần có để chứng minh tuân thủ",
  "actionPlan": "Kế hoạch hành động khắc phục nếu chưa tuân thủ",
  "riskIfNotComplied": "Rủi ro khi không tuân thủ",
  "currentStatus": "Chưa điền",
  "requirementType": "OBLIGATION hoặc PROCESS hoặc INFORMATION hoặc RESPONSIBILITY",
  "applicabilityStatus": "APPLICABLE hoặc NOT_APPLICABLE hoặc PARTIALLY_APPLICABLE",
  "priority": "HIGH hoặc MEDIUM hoặc LOW",
  "complianceDomain": "Lĩnh vực tuân thủ ngắn gọn (VD: ATS, MET, TRAINING, SAFETY_SECURITY...)",
  "confidence": 0.0-1.0
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
