// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package probo

import (
	"strings"

	"go.probo.inc/probo/pkg/coredata"
)

// AIReviewInput is the minimal data sent to the AI provider for a single requirement.
// We never send full PDF/DOCX — only structured text fields from the requirement record.
type AIReviewInput struct {
	RequirementCode string
	Title           string
	Description     string
	RequirementType string
	Language        string
}

// AIReviewOutput holds the suggested fields for a single requirement.
type AIReviewOutput struct {
	SuggestedImplementationMethod *string
	SuggestedResponsibleUnit      *string
	SuggestedResponsibleRole      *string
	SuggestedEvidence             *string
	SuggestedCurrentStatus        *string
	SuggestedActionPlan           *string
	SuggestedChecklistQuestion    *string
	SuggestedRiskIfNotComplied    *string
	SuggestedPlainLanguageText    *string
	SuggestedRequirementType      *string
	SuggestedApplicabilityStatus  *string
	SuggestedPriority             *string
	SuggestedComplianceDomain     *string
	AiConfidence                  float64
}

// AIReviewProvider is the interface implemented by every AI backend.
type AIReviewProvider interface {
	Review(input AIReviewInput) (*AIReviewOutput, error)
}

// RuleBasedAIReviewProvider uses deterministic keyword rules — no external API calls.
type RuleBasedAIReviewProvider struct{}

// vatmDomainConfig holds per-domain configuration for the VATM responsibility matrix.
type vatmDomainConfig struct {
	domain               string
	keywords             []string
	leadUnit             string
	coordinationUnits    []string
	implMethod           string
	evidence             string
	actionPlan           string
	requirementType      string
	complianceDomain     string
	priority             string
	confidence           float64
}

// vatmDomainMatrix maps aviation domains to VATM units and default guidance.
// Ordered by specificity — narrower domains first to avoid false matches.
var vatmDomainMatrix = []vatmDomainConfig{
	{
		domain: "SAR_ALERTING",
		keywords: []string{
			"search and rescue", "sar", "distress", "mayday", "emergency locator", "rescue coordination",
			"tìm kiếm cứu nạn", "cứu nạn", "cứu hộ", "khẩn nguy",
		},
		leadUnit: "Trung tâm Phối hợp tìm kiếm cứu nạn hàng không",
		coordinationUnits: []string{
			"Ban Không lưu",
			"Công ty Quản lý bay miền Bắc",
			"Công ty Quản lý bay miền Trung",
			"Công ty Quản lý bay miền Nam",
		},
		implMethod:       "Rà soát quy trình phối hợp tìm kiếm cứu nạn và báo động khẩn nguy; kiểm tra phương án, diễn tập và hồ sơ xử lý tình huống khẩn nguy.",
		evidence:         "Phương án SAR; biên bản diễn tập; hồ sơ phối hợp khẩn nguy; báo cáo xử lý tình huống; văn bản hiệp đồng tìm kiếm cứu nạn.",
		actionPlan:       "Rà soát phương án SAR hiện hành, cập nhật quy trình phối hợp, tổ chức diễn tập định kỳ và lưu hồ sơ chứng minh.",
		requirementType:  string(coredata.IcpmsRequirementTypeObligation),
		complianceDomain: "SAR_ALERTING",
		priority:         "HIGH",
		confidence:       0.88,
	},
	{
		domain: "MET",
		keywords: []string{
			"meteorolog", "weather", "metar", "taf", "sigmet", "airmet", "wind shear", "turbulence", "forecast", "weather report",
			"khí tượng", "thời tiết", "dự báo", "gió đứt", "nhiễu động khí quyển", "bản tin thời tiết",
		},
		leadUnit: "Trung tâm Khí tượng hàng không",
		coordinationUnits: []string{
			"Ban Không lưu",
			"Công ty Quản lý bay miền Bắc",
			"Công ty Quản lý bay miền Trung",
			"Công ty Quản lý bay miền Nam",
		},
		implMethod:       "Rà soát quy trình cung cấp dịch vụ khí tượng hàng không; kiểm tra hồ sơ quan trắc, dự báo, cảnh báo và phối hợp cung cấp thông tin khí tượng.",
		evidence:         "Bản tin khí tượng; SIGMET/AIRMET; hồ sơ quan trắc; quy trình cung cấp dịch vụ khí tượng; nhật ký khai thác thiết bị khí tượng.",
		actionPlan:       "Rà soát quy trình quan trắc và phát báo khí tượng, xác định khoảng thiếu hụt, cập nhật tài liệu và lưu hồ sơ chứng minh.",
		requirementType:  string(coredata.IcpmsRequirementTypeProcess),
		complianceDomain: "MET",
		priority:         "HIGH",
		confidence:       0.88,
	},
	{
		domain: "AIM_AIS",
		keywords: []string{
			"aeronautical information", "notam", "aip", "airac", "aeronautical chart", "procedure design",
			"ais ", "aeronautical information service",
			"thông báo tin tức hàng không", "tin tức hàng không", "công bố thông tin hàng không",
		},
		leadUnit: "Trung tâm Thông báo tin tức hàng không",
		coordinationUnits: []string{
			"Ban Không lưu",
			"Ban An toàn - Chất lượng",
		},
		implMethod:       "Rà soát nghĩa vụ công bố thông tin hàng không; kiểm tra quy trình phát hành và cập nhật AIP, NOTAM, AIC; lưu hồ sơ yêu cầu và hồ sơ công bố.",
		evidence:         "AIP; NOTAM; AIC; hồ sơ công bố tin tức hàng không; phiếu yêu cầu phát hành NOTAM; biên bản phối hợp cập nhật thông tin.",
		actionPlan:       "Rà soát danh mục thông tin phải công bố, cập nhật AIP/NOTAM theo chu kỳ AIRAC, lưu hồ sơ chứng minh đã công bố.",
		requirementType:  string(coredata.IcpmsRequirementTypeObligation),
		complianceDomain: "AIM_AIS",
		priority:         "MEDIUM",
		confidence:       0.88,
	},
	{
		domain: "ATFM",
		keywords: []string{
			"flow management", "atfm", "traffic flow", "slot allocation", "capacity management",
			"quản lý luồng", "luồng không lưu", "khe bay", "công suất vùng trời",
		},
		leadUnit: "Trung tâm Quản lý luồng không lưu",
		coordinationUnits: []string{
			"Ban Không lưu",
			"Công ty Quản lý bay miền Bắc",
			"Công ty Quản lý bay miền Trung",
			"Công ty Quản lý bay miền Nam",
		},
		implMethod:       "Rà soát quy trình quản lý luồng không lưu; kiểm tra cơ chế phân bổ khe bay, quản lý công suất vùng trời và phối hợp với các đơn vị khu vực.",
		evidence:         "Kế hoạch quản lý luồng; thống kê khe bay; biên bản phối hợp; báo cáo công suất vùng trời; nhật ký ATFM.",
		actionPlan:       "Rà soát quy trình ATFM hiện hành, cập nhật cơ chế phân bổ khe bay và hồ sơ phối hợp.",
		requirementType:  string(coredata.IcpmsRequirementTypeProcess),
		complianceDomain: "ATFM",
		priority:         "MEDIUM",
		confidence:       0.85,
	},
	{
		domain: "TRAINING",
		keywords: []string{
			"training", "qualification", "license", "rating", "proficiency check", "simulator", "instructor", "competency",
			"đào tạo", "huấn luyện", "năng định", "bằng phép", "chứng chỉ năng lực", "giảng viên", "sát hạch",
		},
		leadUnit: "Trung tâm Đào tạo - Huấn luyện nghiệp vụ Quản lý bay",
		coordinationUnits: []string{
			"Ban Tổ chức cán bộ - Lao động",
			"Ban Không lưu",
			"Ban Kỹ thuật",
		},
		implMethod:       "Rà soát chương trình đào tạo, hồ sơ huấn luyện, năng định và chứng chỉ; lập kế hoạch bổ sung đào tạo nếu phát hiện khoảng thiếu hụt.",
		evidence:         "Kế hoạch đào tạo; hồ sơ huấn luyện; chứng chỉ/năng định; biên bản sát hạch; danh sách học viên; nhật ký huấn luyện buồng lái giả định.",
		actionPlan:       "Rà soát hồ sơ năng định cán bộ, xác định khoảng thiếu hụt, lên kế hoạch đào tạo bổ sung và lưu hồ sơ chứng minh.",
		requirementType:  string(coredata.IcpmsRequirementTypeObligation),
		complianceDomain: "TRAINING",
		priority:         "HIGH",
		confidence:       0.85,
	},
	{
		domain: "TECHNICAL_CNS",
		keywords: []string{
			"navigation aid", "vor", "ndb", "ils", "dme", "radar maintenance", "cns equipment",
			"instrument landing", "communication equipment", "surveillance equipment",
			"thiết bị dẫn đường", "bảo dưỡng thiết bị", "hệ thống cns", "attech",
		},
		leadUnit: "Ban Kỹ thuật",
		coordinationUnits: []string{
			"Công ty TNHH Kỹ thuật Quản lý bay (ATTECH)",
			"Công ty Quản lý bay miền Bắc",
			"Công ty Quản lý bay miền Trung",
			"Công ty Quản lý bay miền Nam",
		},
		implMethod:       "Rà soát tình trạng hệ thống thiết bị CNS/ATM, quy trình bảo trì, kiểm định và hiệu chuẩn; cập nhật kế hoạch kỹ thuật và hồ sơ chứng minh đáp ứng yêu cầu.",
		evidence:         "Hồ sơ bảo trì; biên bản kiểm định; phiếu hiệu chuẩn; nhật ký khai thác thiết bị; báo cáo kỹ thuật CNS/ATM.",
		actionPlan:       "Rà soát hồ sơ bảo trì và kiểm định thiết bị, xác định thiết bị quá hạn hoặc thiếu hồ sơ, lên kế hoạch khắc phục và lưu hồ sơ chứng minh.",
		requirementType:  string(coredata.IcpmsRequirementTypeObligation),
		complianceDomain: "TECHNICAL",
		priority:         "HIGH",
		confidence:       0.85,
	},
	{
		domain: "SAFETY",
		keywords: []string{
			"safety management", "safety case", "safety assessment", "hazard identification",
			"risk assessment", "sms", "safety oversight", "safety program",
			"quản lý an toàn", "đánh giá an toàn", "nhận diện mối nguy",
			"an toàn", "đánh giá rủi ro", "sự cố", "tai nạn", "mối nguy",
		},
		leadUnit: "Ban An toàn - Chất lượng",
		coordinationUnits: []string{
			"Ban Không lưu",
			"Ban Kỹ thuật",
			"Trung tâm Đào tạo - Huấn luyện nghiệp vụ Quản lý bay",
		},
		implMethod:       "Thực hiện rà soát yêu cầu an toàn hàng không; đánh giá rủi ro nếu cần; xác định biện pháp kiểm soát và cập nhật hồ sơ quản lý an toàn theo hệ thống SMS.",
		evidence:         "Hồ sơ đánh giá rủi ro; biện pháp giảm thiểu; báo cáo an toàn; biên bản họp an toàn; hồ sơ theo dõi khắc phục điểm không phù hợp.",
		actionPlan:       "Rà soát hệ thống SMS hiện hành, xác định khoảng thiếu hụt trong quản lý an toàn, cập nhật tài liệu và lưu hồ sơ chứng minh.",
		requirementType:  string(coredata.IcpmsRequirementTypeObligation),
		complianceDomain: "SAFETY",
		priority:         "HIGH",
		confidence:       0.85,
	},
	{
		domain: "SECURITY",
		keywords: []string{
			"security", "access control", "aviation security", "threat", "unlawful interference",
			"an ninh", "an ninh hàng không", "kiểm soát tiếp cận", "nhận diện mối đe dọa", "can thiệp bất hợp pháp",
		},
		leadUnit: "Ban An ninh",
		coordinationUnits: []string{
			"Ban Không lưu",
			"Ban An toàn - Chất lượng",
		},
		implMethod:       "Thực hiện rà soát yêu cầu an ninh hàng không; kiểm tra biện pháp kiểm soát tiếp cận, phòng ngừa can thiệp bất hợp pháp; cập nhật hồ sơ quản lý an ninh.",
		evidence:         "Kế hoạch an ninh; biên bản kiểm tra an ninh; hồ sơ diễn tập; nhật ký kiểm soát tiếp cận; báo cáo sự cố an ninh.",
		actionPlan:       "Rà soát chương trình an ninh hiện hành, xác định khoảng thiếu hụt, cập nhật quy trình và lưu hồ sơ chứng minh.",
		requirementType:  string(coredata.IcpmsRequirementTypeObligation),
		complianceDomain: "SECURITY",
		priority:         "HIGH",
		confidence:       0.85,
	},
	{
		domain: "ATS",
		keywords: []string{
			"air traffic control", "atc", "separation", "clearance", "control zone", "approach control",
			"area control", "radar control", "controller", "phraseology", "ats route", "airspace",
			"kiểm soát không lưu", "phân cách", "huấn lệnh", "vùng kiểm soát", "tiếp cận",
			"không lưu", "điều hành bay", "vùng trời", "đường bay", "khu vực cấm bay", "khu vực hạn chế bay",
			"cấm bay", "hạn chế bay",
		},
		leadUnit: "Ban Không lưu",
		coordinationUnits: []string{
			"Trung tâm Quản lý luồng không lưu",
			"Ban An toàn - Chất lượng",
			"Công ty Quản lý bay miền Bắc",
			"Công ty Quản lý bay miền Trung",
			"Công ty Quản lý bay miền Nam",
		},
		implMethod:       "Rà soát quy trình quản lý vùng trời, điều hành bay và phối hợp hiệp đồng; đối chiếu với yêu cầu nguồn; cập nhật quy trình, văn bản phối hợp và hồ sơ công bố nếu cần.",
		evidence:         "Quy trình điều hành bay; văn bản hiệp đồng; biên bản phối hợp; quyết định phê duyệt; AIP/NOTAM nếu có; hồ sơ lưu trữ nội bộ.",
		actionPlan:       "Rà soát quy trình điều hành bay hiện hành, xác định khoảng thiếu hụt, cập nhật văn bản phối hợp và hồ sơ công bố theo chu kỳ AIRAC.",
		requirementType:  string(coredata.IcpmsRequirementTypeObligation),
		complianceDomain: "ATS",
		priority:         "HIGH",
		confidence:       0.80,
	},
	{
		domain: "TECHNICAL_GENERAL",
		keywords: []string{
			"technical", "equipment", "maintenance", "communication system", "surveillance system",
			"kỹ thuật", "thiết bị", "bảo dưỡng", "thông tin liên lạc", "giám sát",
		},
		leadUnit: "Ban Kỹ thuật",
		coordinationUnits: []string{
			"Công ty TNHH Kỹ thuật Quản lý bay (ATTECH)",
		},
		implMethod:       "Rà soát tình trạng thiết bị kỹ thuật, quy trình bảo dưỡng và kiểm tra định kỳ; cập nhật kế hoạch kỹ thuật và hồ sơ chứng minh đáp ứng yêu cầu.",
		evidence:         "Hồ sơ bảo trì; biên bản kiểm định; nhật ký khai thác thiết bị; báo cáo kỹ thuật.",
		actionPlan:       "Rà soát hồ sơ bảo trì thiết bị, cập nhật kế hoạch bảo dưỡng và lưu hồ sơ chứng minh.",
		requirementType:  string(coredata.IcpmsRequirementTypeProcess),
		complianceDomain: "TECHNICAL",
		priority:         "MEDIUM",
		confidence:       0.75,
	},
	{
		domain: "FINANCE",
		keywords: []string{
			"finance", "budget", "cost", "revenue", "accounting", "expenditure", "financial",
			"tài chính", "ngân sách", "chi phí", "doanh thu", "kế toán", "chi ngân sách",
		},
		leadUnit: "Ban Tài chính",
		coordinationUnits: []string{
			"Ban Kế hoạch - Đầu tư",
			"Văn phòng",
		},
		implMethod:       "Rà soát nghĩa vụ tài chính, ngân sách hoặc chi phí liên quan; cập nhật dự toán, chứng từ và hồ sơ thanh quyết toán theo quy định.",
		evidence:         "Dự toán; hồ sơ thanh quyết toán; báo cáo tài chính; chứng từ liên quan; văn bản phê duyệt ngân sách.",
		actionPlan:       "Rà soát hồ sơ tài chính liên quan, xác định khoảng thiếu hụt, bổ sung chứng từ và hồ sơ theo quy định.",
		requirementType:  string(coredata.IcpmsRequirementTypeResponsibility),
		complianceDomain: "FINANCE",
		priority:         "MEDIUM",
		confidence:       0.78,
	},
	{
		domain: "PLANNING_INVESTMENT",
		keywords: []string{
			"planning", "investment", "development plan", "strategy", "infrastructure development",
			"kế hoạch", "đầu tư", "phát triển", "chiến lược", "hạ tầng", "dự án đầu tư",
		},
		leadUnit: "Ban Kế hoạch - Đầu tư",
		coordinationUnits: []string{
			"Ban Quản lý dự án chuyên ngành",
			"Ban Tài chính",
			"Ban Kỹ thuật",
		},
		implMethod:       "Rà soát yêu cầu liên quan kế hoạch, đầu tư, dự án; cập nhật kế hoạch triển khai, nguồn lực, tiến độ và hồ sơ phê duyệt.",
		evidence:         "Kế hoạch đầu tư; hồ sơ dự án; quyết định phê duyệt; báo cáo tiến độ; biên bản nghiệm thu nếu có.",
		actionPlan:       "Rà soát kế hoạch đầu tư hiện hành, cập nhật hồ sơ dự án và lưu chứng từ phê duyệt.",
		requirementType:  string(coredata.IcpmsRequirementTypeResponsibility),
		complianceDomain: "PLANNING_INVESTMENT",
		priority:         "MEDIUM",
		confidence:       0.75,
	},
	{
		domain: "HR_ORGANIZATION",
		keywords: []string{
			"personnel", "human resource", "recruitment", "labour", "labor", "working condition", "staff",
			"tổ chức cán bộ", "nhân sự", "lao động", "tuyển dụng", "điều kiện làm việc", "cán bộ",
			"tổ chức", "biên chế", "phân công",
		},
		leadUnit: "Ban Tổ chức cán bộ - Lao động",
		coordinationUnits: []string{
			"Văn phòng",
		},
		implMethod:       "Rà soát chức năng, nhiệm vụ, phân công nhân sự và hồ sơ tổ chức; cập nhật quyết định phân công hoặc mô tả trách nhiệm nếu cần.",
		evidence:         "Quyết định phân công; mô tả chức năng nhiệm vụ; hồ sơ nhân sự; kế hoạch lao động; văn bản tổ chức.",
		actionPlan:       "Rà soát hồ sơ tổ chức cán bộ, cập nhật phân công nhiệm vụ và lưu hồ sơ chứng minh.",
		requirementType:  string(coredata.IcpmsRequirementTypeResponsibility),
		complianceDomain: "HR_ORGANIZATION",
		priority:         "MEDIUM",
		confidence:       0.73,
	},
	{
		domain: "PROJECT_MANAGEMENT",
		keywords: []string{
			"project management", "construction", "procurement", "tender", "contract",
			"quản lý dự án", "xây dựng", "mua sắm", "đấu thầu", "hợp đồng dự án",
		},
		leadUnit: "Ban Quản lý dự án chuyên ngành",
		coordinationUnits: []string{
			"Ban Kế hoạch - Đầu tư",
			"Ban Tài chính",
			"Ban Kỹ thuật",
		},
		implMethod:       "Rà soát quy trình quản lý dự án, mua sắm, đấu thầu; cập nhật hồ sơ hợp đồng, tiến độ và nghiệm thu.",
		evidence:         "Hồ sơ dự án; hợp đồng; biên bản nghiệm thu; báo cáo tiến độ; quyết định phê duyệt.",
		actionPlan:       "Rà soát hồ sơ dự án hiện hành, xác định khoảng thiếu hụt và cập nhật tài liệu theo quy định.",
		requirementType:  string(coredata.IcpmsRequirementTypeResponsibility),
		complianceDomain: "PROJECT_MANAGEMENT",
		priority:         "MEDIUM",
		confidence:       0.73,
	},
	{
		domain: "ADMIN_GENERAL",
		keywords: []string{
			"administrative", "correspondence", "secretariat", "general coordination",
			"hành chính", "văn thư", "thư ký", "phối hợp chung", "văn bản", "tổng hợp", "điều phối",
		},
		leadUnit: "Văn phòng",
		coordinationUnits: []string{},
		implMethod:       "Rà soát yêu cầu hành chính, tổng hợp hoặc điều phối; ban hành văn bản hướng dẫn, theo dõi thực hiện và lưu hồ sơ chứng minh.",
		evidence:         "Văn bản chỉ đạo; báo cáo tổng hợp; biên bản họp; công văn; hồ sơ điều phối.",
		actionPlan:       "Rà soát quy trình hành chính hiện hành, cập nhật văn bản và lưu hồ sơ chứng minh.",
		requirementType:  string(coredata.IcpmsRequirementTypeInformation),
		complianceDomain: "ADMIN_GENERAL",
		priority:         "LOW",
		confidence:       0.60,
	},
}

// fallbackConfig is used when no domain keyword matches.
var fallbackConfig = vatmDomainConfig{
	domain:   "GENERAL",
	leadUnit: "Ban Không lưu",
	coordinationUnits: []string{
		"Ban An toàn - Chất lượng",
	},
	implMethod:       "Rà soát quy định, quy trình hiện hành; đối chiếu với yêu cầu nguồn; cập nhật, ban hành hoặc bổ sung hồ sơ nếu còn thiếu.",
	evidence:         "Biên bản kiểm tra; hồ sơ đào tạo; tài liệu quy trình nội bộ; văn bản phê duyệt liên quan.",
	actionPlan:       "Rà soát quy trình hiện hành, xác định khoảng thiếu hụt, cập nhật tài liệu và lưu hồ sơ chứng minh.",
	requirementType:  string(coredata.IcpmsRequirementTypeObligation),
	complianceDomain: "GENERAL",
	priority:         "MEDIUM",
	confidence:       0.50,
}

// matchDomain returns the first domain config whose keywords match the text.
func matchDomain(text string) *vatmDomainConfig {
	lower := strings.ToLower(text)
	for i := range vatmDomainMatrix {
		if containsAny(lower, vatmDomainMatrix[i].keywords) {
			return &vatmDomainMatrix[i]
		}
	}
	return nil
}

// buildResponsibleUnitText formats lead + coordination units into a single readable string.
func buildResponsibleUnitText(lead string, coordination []string) string {
	if len(coordination) == 0 {
		return "Chủ trì: " + lead
	}
	return "Chủ trì: " + lead + "\nPhối hợp: " + strings.Join(coordination, "; ")
}

var ruleBasedSafetyKeywords = []string{
	"safety", "hazard", "emergency", "accident", "incident", "risk",
	"collision", "separation", "wake turbulence", "obstacle",
	"an toàn", "nguy hiểm", "khẩn cấp", "tai nạn", "sự cố", "rủi ro",
	"va chạm", "phân cách", "nhiễu loạn luồng khí", "vật cản",
}

var ruleBasedProcedureKeywords = []string{
	"procedure", "checklist", "standard", "protocol", "guideline", "policy",
	"quy trình", "danh mục kiểm tra", "tiêu chuẩn", "giao thức", "hướng dẫn", "chính sách",
}

var ruleBasedOperationalKeywords = []string{
	"shall", "must", "ensure", "require", "maintain", "establish",
	"implement", "provide", "verify", "monitor", "report", "conduct",
	"perform", "document", "assess", "review", "coordinate", "notify",
	"cần", "phải", "đảm bảo", "yêu cầu", "duy trì", "thiết lập",
	"thực hiện", "cung cấp", "xác minh", "giám sát", "báo cáo", "tiến hành",
	"tài liệu", "đánh giá", "xem xét", "phối hợp", "thông báo",
}

func (p *RuleBasedAIReviewProvider) Review(input AIReviewInput) (*AIReviewOutput, error) {
	searchText := input.Title + " " + input.Description

	// Match to VATM domain matrix
	cfg := matchDomain(searchText)
	if cfg == nil {
		cfg = &fallbackConfig
	}

	// Build responsible unit text: "Chủ trì: X\nPhối hợp: Y; Z"
	responsibleUnit := buildResponsibleUnitText(cfg.leadUnit, cfg.coordinationUnits)

	// Domain-specific fields
	implMethod := cfg.implMethod
	evidence := cfg.evidence
	actionPlan := cfg.actionPlan
	reqType := cfg.requirementType
	domain := cfg.complianceDomain
	priority := cfg.priority
	confidence := cfg.confidence

	// Boost confidence if secondary keywords also match
	textLower := strings.ToLower(searchText)
	if containsAny(textLower, ruleBasedSafetyKeywords) && cfg.domain != "SAFETY" && cfg.domain != "SECURITY" {
		confidence = min64(confidence+0.05, 0.95)
	}

	// Checklist question
	q := buildChecklistQuestion(input.Title, input.Language)

	// Risk text
	r := buildRiskText(input.Title, input.Language)

	// Current status: always "Chưa điền" — reviewers fill this in
	currentStatus := "Chưa điền"

	appStatus := "APPLICABLE"

	return &AIReviewOutput{
		SuggestedImplementationMethod: &implMethod,
		SuggestedResponsibleUnit:      &responsibleUnit,
		SuggestedEvidence:             &evidence,
		SuggestedCurrentStatus:        &currentStatus,
		SuggestedActionPlan:           &actionPlan,
		SuggestedChecklistQuestion:    &q,
		SuggestedRiskIfNotComplied:    &r,
		SuggestedRequirementType:      &reqType,
		SuggestedComplianceDomain:     &domain,
		SuggestedPriority:             &priority,
		SuggestedApplicabilityStatus:  &appStatus,
		AiConfidence:                  confidence,
	}, nil
}

func min64(a, b float64) float64 {
	if a < b {
		return a
	}
	return b
}

func containsAny(text string, keywords []string) bool {
	for _, kw := range keywords {
		if strings.Contains(text, kw) {
			return true
		}
	}
	return false
}

func buildChecklistQuestion(title, lang string) string {
	if lang == "vi" || strings.Contains(strings.ToLower(lang), "viet") {
		return "Đơn vị có hồ sơ, quy trình hoặc bằng chứng chứng minh đã thực hiện yêu cầu: \"" + title + "\" không?"
	}
	return "Does the unit have records, procedures, or evidence demonstrating compliance with: \"" + title + "\"?"
}

func buildRiskText(title, lang string) string {
	if lang == "vi" || strings.Contains(strings.ToLower(lang), "viet") {
		return "Không tuân thủ yêu cầu \"" + title + "\" có thể gây mất an toàn hàng không, vi phạm quy định hoặc bị cơ quan có thẩm quyền xử phạt."
	}
	return "Non-compliance with \"" + title + "\" may result in aviation safety risks, regulatory violations, or penalties from competent authorities."
}
