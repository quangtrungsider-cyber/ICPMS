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

CÁC ĐƠN VỊ CỦA VATM (chỉ dùng đúng các tên này cho trường responsibleUnit):
- Ban tham mưu: Văn phòng Tổng công ty; Ban Kế hoạch - Đầu tư; Ban Tài chính; Ban Kỹ thuật; Ban Tổ chức cán bộ - Lao động; Ban Không lưu; Ban An toàn - Chất lượng; Ban An ninh hàng không; Ban Kiểm toán nội bộ
- Đơn vị trực thuộc: Công ty Quản lý bay miền Bắc; Công ty Quản lý bay miền Trung; Công ty Quản lý bay miền Nam; Trung tâm Quản lý luồng không lưu; Trung tâm Thông báo tin tức hàng không; Trung tâm Phối hợp tìm kiếm cứu nạn hàng không; Trung tâm Đào tạo - Huấn luyện nghiệp vụ quản lý bay; Trung tâm Khí tượng hàng không
- Công ty con: Công ty TNHH Kỹ thuật Quản lý bay (ATTECH)
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
  "responsibleUnit": "ĐÚNG định dạng 2 dòng: dòng 1 'Chủ trì: <MỘT đơn vị duy nhất chịu trách nhiệm chính>', dòng 2 'Phối hợp: <các đơn vị phối hợp, phân tách bằng dấu ;>'. Nếu không có đơn vị phối hợp thì bỏ dòng 2. KHÔNG gộp nhiều đơn vị vào dòng Chủ trì — dòng Chủ trì tuyệt đối không chứa từ 'và', dấu ';' hay dấu ','. Ví dụ: 'Chủ trì: Ban Không lưu\nPhối hợp: Trung tâm Quản lý luồng không lưu; Ban An toàn - Chất lượng'",
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
		SuggestedResponsibleUnit:      strPtr(normalizeResponsibleUnit(sug.ResponsibleUnit)),
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

// SplitResponsibleUnit tách chuỗi trách nhiệm ("Chủ trì: X\nPhối hợp: Y; Z")
// thành đơn vị chủ trì và chuỗi các đơn vị phối hợp. Dùng khi giao việc tự
// động theo phân công trong checklist.
func SplitResponsibleUnit(raw string) (lead string, coordination string) {
	norm := normalizeResponsibleUnit(raw)
	for _, ln := range strings.Split(norm, "\n") {
		if strings.HasPrefix(ln, "Chủ trì:") {
			lead = strings.TrimSpace(strings.TrimPrefix(ln, "Chủ trì:"))
		} else if strings.HasPrefix(ln, "Phối hợp:") {
			coordination = strings.TrimSpace(strings.TrimPrefix(ln, "Phối hợp:"))
		}
	}
	return lead, coordination
}

// normalizeResponsibleUnit ép output của AI về đúng định dạng
// "Chủ trì: <MỘT đơn vị>\nPhối hợp: <các đơn vị khác; ...>".
// AI đôi khi gộp nhiều đơn vị vào dòng Chủ trì (nối bằng "và", ";", ",") —
// giữ đơn vị đầu làm chủ trì, chuyển phần còn lại sang phối hợp.
func normalizeResponsibleUnit(raw string) string {
	text := strings.TrimSpace(raw)
	if text == "" {
		return text
	}

	var coordination []string

	// Tách phần "Phối hợp:" (dù cùng dòng hay dòng riêng).
	leadPart := text
	if idx := strings.Index(text, "Phối hợp:"); idx >= 0 {
		leadPart = text[:idx]
		coordRaw := text[idx+len("Phối hợp:"):]
		for _, p := range strings.FieldsFunc(coordRaw, func(r rune) bool { return r == ';' || r == '\n' }) {
			if u := strings.Trim(strings.TrimSpace(p), "-•,. "); u != "" {
				coordination = append(coordination, u)
			}
		}
	}

	lead := strings.ReplaceAll(leadPart, "Chủ trì:", "")
	lead = strings.Trim(strings.TrimSpace(lead), "-•,.;: ")

	// Dòng chủ trì chứa nhiều đơn vị → giữ đơn vị đầu, còn lại sang phối hợp.
	for _, sep := range []string{" và ", "; ", " & "} {
		if strings.Contains(lead, sep) {
			parts := strings.Split(lead, sep)
			extra := parts[1:]
			lead = strings.Trim(strings.TrimSpace(parts[0]), ",. ")
			for _, p := range extra {
				if u := strings.Trim(strings.TrimSpace(p), "-•,. "); u != "" {
					coordination = append(coordination, u)
				}
			}
		}
	}

	if lead == "" {
		return text
	}
	if len(coordination) == 0 {
		return "Chủ trì: " + lead
	}
	return "Chủ trì: " + lead + "\nPhối hợp: " + strings.Join(coordination, "; ")
}
