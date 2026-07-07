// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.
// VATM Responsibility Matrix — frontend reference config.
// The authoritative logic runs in pkg/probo/icpms_ai_review_provider.go.
// This file is used for display helpers and inline edit pre-population.

export type VatmDomainConfig = {
  domain: string;
  keywords: string[];
  leadUnit: string;
  coordinationUnits: string[];
  defaultImplementationMethod: string;
  defaultEvidence: string;
  defaultActionPlan: string;
};

export const VATM_UNITS = {
  // Khối cơ quan tham mưu
  VAN_PHONG: "Văn phòng",
  BAN_TO_CHUC: "Ban Tổ chức cán bộ - Lao động",
  BAN_KE_HOACH: "Ban Kế hoạch - Đầu tư",
  BAN_TAI_CHINH: "Ban Tài chính",
  BAN_KY_THUAT: "Ban Kỹ thuật",
  BAN_AN_TOAN_CL: "Ban An toàn - Chất lượng",
  BAN_AN_NINH: "Ban An ninh",
  BAN_KHONG_LUU: "Ban Không lưu",
  BAN_QLDA: "Ban Quản lý dự án chuyên ngành",
  // Chi nhánh khu vực
  QLB_MIEN_BAC: "Công ty Quản lý bay miền Bắc",
  QLB_MIEN_TRUNG: "Công ty Quản lý bay miền Trung",
  QLB_MIEN_NAM: "Công ty Quản lý bay miền Nam",
  // Trung tâm chuyên ngành
  TT_ATFM: "Trung tâm Quản lý luồng không lưu",
  TT_AIS: "Trung tâm Thông báo tin tức hàng không",
  TT_MET: "Trung tâm Khí tượng hàng không",
  TT_SAR: "Trung tâm Phối hợp tìm kiếm cứu nạn hàng không",
  TT_DAO_TAO: "Trung tâm Đào tạo - Huấn luyện nghiệp vụ Quản lý bay",
  // Công ty trực thuộc
  ATTECH: "Công ty TNHH Kỹ thuật Quản lý bay (ATTECH)",
} as const;

export const VATM_RESPONSIBILITY_MATRIX: VatmDomainConfig[] = [
  {
    domain: "SAR_ALERTING",
    keywords: ["tìm kiếm cứu nạn", "sar", "khẩn nguy", "cứu nạn hàng không", "search and rescue"],
    leadUnit: VATM_UNITS.TT_SAR,
    coordinationUnits: [VATM_UNITS.BAN_KHONG_LUU, VATM_UNITS.QLB_MIEN_BAC, VATM_UNITS.QLB_MIEN_TRUNG, VATM_UNITS.QLB_MIEN_NAM],
    defaultImplementationMethod:
      "Rà soát quy trình phối hợp tìm kiếm cứu nạn và báo động khẩn nguy; kiểm tra phương án, diễn tập và hồ sơ xử lý tình huống khẩn nguy.",
    defaultEvidence:
      "Phương án SAR; biên bản diễn tập; hồ sơ phối hợp khẩn nguy; báo cáo xử lý tình huống; văn bản hiệp đồng.",
    defaultActionPlan:
      "Rà soát phương án SAR hiện hành, cập nhật quy trình phối hợp, tổ chức diễn tập định kỳ và lưu hồ sơ chứng minh.",
  },
  {
    domain: "MET",
    keywords: ["khí tượng", "met", "sigmet", "airmet", "dự báo", "quan trắc khí tượng", "metar", "taf"],
    leadUnit: VATM_UNITS.TT_MET,
    coordinationUnits: [VATM_UNITS.BAN_KHONG_LUU, VATM_UNITS.QLB_MIEN_BAC, VATM_UNITS.QLB_MIEN_TRUNG, VATM_UNITS.QLB_MIEN_NAM],
    defaultImplementationMethod:
      "Rà soát quy trình cung cấp dịch vụ khí tượng hàng không; kiểm tra hồ sơ quan trắc, dự báo, cảnh báo và phối hợp cung cấp thông tin khí tượng.",
    defaultEvidence:
      "Bản tin khí tượng; SIGMET/AIRMET; hồ sơ quan trắc; quy trình cung cấp dịch vụ khí tượng; nhật ký khai thác.",
    defaultActionPlan:
      "Rà soát quy trình quan trắc và phát báo khí tượng, xác định khoảng thiếu hụt, cập nhật tài liệu và lưu hồ sơ.",
  },
  {
    domain: "AIM_AIS",
    keywords: ["aip", "notam", "aic", "tin tức hàng không", "thông báo tin tức", "công bố", "aeronautical information"],
    leadUnit: VATM_UNITS.TT_AIS,
    coordinationUnits: [VATM_UNITS.BAN_KHONG_LUU, VATM_UNITS.BAN_AN_TOAN_CL],
    defaultImplementationMethod:
      "Rà soát nghĩa vụ công bố thông tin hàng không; kiểm tra quy trình phát hành/cập nhật AIP, NOTAM, AIC; lưu hồ sơ yêu cầu và hồ sơ công bố.",
    defaultEvidence:
      "AIP; NOTAM; AIC; hồ sơ công bố tin tức hàng không; phiếu yêu cầu phát hành NOTAM; biên bản phối hợp.",
    defaultActionPlan:
      "Rà soát danh mục thông tin phải công bố, cập nhật AIP/NOTAM theo chu kỳ AIRAC và lưu hồ sơ chứng minh đã công bố.",
  },
  {
    domain: "ATFM",
    keywords: ["quản lý luồng", "atfm", "luồng không lưu", "khe bay", "công suất", "flow management"],
    leadUnit: VATM_UNITS.TT_ATFM,
    coordinationUnits: [VATM_UNITS.BAN_KHONG_LUU, VATM_UNITS.QLB_MIEN_BAC, VATM_UNITS.QLB_MIEN_TRUNG, VATM_UNITS.QLB_MIEN_NAM],
    defaultImplementationMethod:
      "Rà soát quy trình quản lý luồng không lưu; kiểm tra cơ chế phân bổ khe bay, quản lý công suất vùng trời và phối hợp với các đơn vị khu vực.",
    defaultEvidence:
      "Kế hoạch quản lý luồng; thống kê khe bay; biên bản phối hợp; báo cáo công suất vùng trời; nhật ký ATFM.",
    defaultActionPlan:
      "Rà soát quy trình ATFM hiện hành, cập nhật cơ chế phân bổ khe bay và hồ sơ phối hợp.",
  },
  {
    domain: "TRAINING",
    keywords: ["đào tạo", "huấn luyện", "năng định", "chứng chỉ", "sát hạch", "training", "competency"],
    leadUnit: VATM_UNITS.TT_DAO_TAO,
    coordinationUnits: [VATM_UNITS.BAN_TO_CHUC, VATM_UNITS.BAN_KHONG_LUU, VATM_UNITS.BAN_KY_THUAT],
    defaultImplementationMethod:
      "Rà soát chương trình đào tạo, hồ sơ huấn luyện, năng định và chứng chỉ; lập kế hoạch bổ sung đào tạo nếu phát hiện khoảng thiếu hụt.",
    defaultEvidence:
      "Kế hoạch đào tạo; hồ sơ huấn luyện; chứng chỉ/năng định; biên bản sát hạch; danh sách học viên.",
    defaultActionPlan:
      "Rà soát hồ sơ năng định cán bộ, xác định khoảng thiếu hụt, lên kế hoạch đào tạo bổ sung và lưu hồ sơ chứng minh.",
  },
  {
    domain: "SAFETY",
    keywords: ["an toàn", "sms", "đánh giá rủi ro", "risk assessment", "safety", "quản lý an toàn", "sự cố", "tai nạn", "mối nguy"],
    leadUnit: VATM_UNITS.BAN_AN_TOAN_CL,
    coordinationUnits: [VATM_UNITS.BAN_KHONG_LUU, VATM_UNITS.BAN_KY_THUAT],
    defaultImplementationMethod:
      "Thực hiện rà soát yêu cầu an toàn; đánh giá rủi ro nếu cần; xác định biện pháp kiểm soát và cập nhật hồ sơ quản lý an toàn theo hệ thống SMS.",
    defaultEvidence:
      "Hồ sơ đánh giá rủi ro; biện pháp giảm thiểu; báo cáo an toàn; biên bản họp an toàn; hồ sơ theo dõi khắc phục điểm không phù hợp.",
    defaultActionPlan:
      "Rà soát hệ thống SMS hiện hành, xác định khoảng thiếu hụt trong quản lý an toàn, cập nhật tài liệu và lưu hồ sơ chứng minh.",
  },
  {
    domain: "SECURITY",
    keywords: ["an ninh", "security", "kiểm soát tiếp cận", "access control", "an ninh hàng không", "nhận diện mối đe dọa", "threat"],
    leadUnit: VATM_UNITS.BAN_AN_NINH,
    coordinationUnits: [VATM_UNITS.BAN_KHONG_LUU, VATM_UNITS.BAN_AN_TOAN_CL],
    defaultImplementationMethod:
      "Thực hiện rà soát yêu cầu an ninh hàng không; kiểm tra biện pháp kiểm soát tiếp cận, phòng ngừa can thiệp bất hợp pháp; cập nhật hồ sơ quản lý an ninh.",
    defaultEvidence:
      "Kế hoạch an ninh; biên bản kiểm tra an ninh; hồ sơ diễn tập; nhật ký kiểm soát tiếp cận; báo cáo sự cố an ninh.",
    defaultActionPlan:
      "Rà soát chương trình an ninh hiện hành, xác định khoảng thiếu hụt, cập nhật quy trình và lưu hồ sơ chứng minh.",
  },
  {
    domain: "ATS",
    keywords: ["không lưu", "air traffic services", "ats", "điều hành bay", "kiểm soát không lưu", "vùng trời", "đường bay", "khu vực cấm bay", "khu vực hạn chế bay", "cấm bay", "hạn chế bay"],
    leadUnit: VATM_UNITS.BAN_KHONG_LUU,
    coordinationUnits: [VATM_UNITS.TT_ATFM, VATM_UNITS.BAN_AN_TOAN_CL, VATM_UNITS.QLB_MIEN_BAC, VATM_UNITS.QLB_MIEN_TRUNG, VATM_UNITS.QLB_MIEN_NAM],
    defaultImplementationMethod:
      "Rà soát quy trình quản lý vùng trời, điều hành bay và phối hợp hiệp đồng; đối chiếu với yêu cầu nguồn; cập nhật quy trình, văn bản phối hợp và hồ sơ công bố nếu cần.",
    defaultEvidence:
      "Quy trình điều hành bay; văn bản hiệp đồng; biên bản phối hợp; quyết định phê duyệt; AIP/NOTAM nếu có; hồ sơ lưu trữ nội bộ.",
    defaultActionPlan:
      "Rà soát quy trình điều hành bay hiện hành, xác định khoảng thiếu hụt, cập nhật văn bản phối hợp và hồ sơ công bố theo chu kỳ AIRAC.",
  },
  {
    domain: "TECHNICAL",
    keywords: ["kỹ thuật", "thiết bị", "cns", "atm", "bảo trì", "hiệu chuẩn", "kiểm định", "hệ thống kỹ thuật"],
    leadUnit: VATM_UNITS.BAN_KY_THUAT,
    coordinationUnits: [VATM_UNITS.ATTECH, VATM_UNITS.QLB_MIEN_BAC, VATM_UNITS.QLB_MIEN_TRUNG, VATM_UNITS.QLB_MIEN_NAM],
    defaultImplementationMethod:
      "Rà soát tình trạng hệ thống kỹ thuật, quy trình bảo trì/kiểm định/hiệu chuẩn; cập nhật kế hoạch kỹ thuật và hồ sơ chứng minh đáp ứng yêu cầu.",
    defaultEvidence:
      "Hồ sơ bảo trì; biên bản kiểm định; phiếu hiệu chuẩn; nhật ký khai thác thiết bị; báo cáo kỹ thuật.",
    defaultActionPlan:
      "Rà soát hồ sơ bảo trì và kiểm định thiết bị, xác định thiết bị quá hạn hoặc thiếu hồ sơ, lên kế hoạch khắc phục và lưu hồ sơ chứng minh.",
  },
  {
    domain: "PLANNING_INVESTMENT",
    keywords: ["kế hoạch", "đầu tư", "dự án", "mua sắm", "nâng cấp", "triển khai dự án"],
    leadUnit: VATM_UNITS.BAN_KE_HOACH,
    coordinationUnits: [VATM_UNITS.BAN_QLDA, VATM_UNITS.BAN_TAI_CHINH, VATM_UNITS.BAN_KY_THUAT],
    defaultImplementationMethod:
      "Rà soát yêu cầu liên quan kế hoạch, đầu tư, dự án; cập nhật kế hoạch triển khai, nguồn lực, tiến độ và hồ sơ phê duyệt.",
    defaultEvidence:
      "Kế hoạch đầu tư; hồ sơ dự án; quyết định phê duyệt; báo cáo tiến độ; biên bản nghiệm thu nếu có.",
    defaultActionPlan:
      "Rà soát kế hoạch đầu tư hiện hành, cập nhật hồ sơ dự án và lưu chứng từ phê duyệt.",
  },
  {
    domain: "FINANCE",
    keywords: ["tài chính", "ngân sách", "chi phí", "thanh toán", "quyết toán", "phí"],
    leadUnit: VATM_UNITS.BAN_TAI_CHINH,
    coordinationUnits: [VATM_UNITS.BAN_KE_HOACH, VATM_UNITS.VAN_PHONG],
    defaultImplementationMethod:
      "Rà soát nghĩa vụ tài chính, ngân sách hoặc chi phí liên quan; cập nhật dự toán, chứng từ và hồ sơ thanh quyết toán theo quy định.",
    defaultEvidence:
      "Dự toán; hồ sơ thanh quyết toán; báo cáo tài chính; chứng từ liên quan; văn bản phê duyệt.",
    defaultActionPlan:
      "Rà soát hồ sơ tài chính liên quan, xác định khoảng thiếu hụt, bổ sung chứng từ và hồ sơ theo quy định.",
  },
  {
    domain: "HR_ORGANIZATION",
    keywords: ["tổ chức", "nhân sự", "lao động", "chức danh", "biên chế", "phân công"],
    leadUnit: VATM_UNITS.BAN_TO_CHUC,
    coordinationUnits: [VATM_UNITS.VAN_PHONG],
    defaultImplementationMethod:
      "Rà soát chức năng, nhiệm vụ, phân công nhân sự và hồ sơ tổ chức; cập nhật quyết định phân công hoặc mô tả trách nhiệm nếu cần.",
    defaultEvidence:
      "Quyết định phân công; mô tả chức năng nhiệm vụ; hồ sơ nhân sự; kế hoạch lao động; văn bản tổ chức.",
    defaultActionPlan:
      "Rà soát hồ sơ tổ chức cán bộ, cập nhật phân công nhiệm vụ và lưu hồ sơ chứng minh.",
  },
  {
    domain: "ADMIN_GENERAL",
    keywords: ["văn bản", "tổng hợp", "báo cáo", "hành chính", "điều phối"],
    leadUnit: VATM_UNITS.VAN_PHONG,
    coordinationUnits: [],
    defaultImplementationMethod:
      "Rà soát yêu cầu hành chính, tổng hợp hoặc điều phối; ban hành văn bản hướng dẫn, theo dõi thực hiện và lưu hồ sơ chứng minh.",
    defaultEvidence:
      "Văn bản chỉ đạo; báo cáo tổng hợp; biên bản họp; công văn; hồ sơ điều phối.",
    defaultActionPlan:
      "Rà soát quy trình hành chính hiện hành, cập nhật văn bản và lưu hồ sơ chứng minh.",
  },
];

/** Match text to the best VATM domain config. Returns null if nothing matches. */
export function matchVatmDomain(text: string): VatmDomainConfig | null {
  const lower = text.toLowerCase();
  for (const cfg of VATM_RESPONSIBILITY_MATRIX) {
    if (cfg.keywords.some(kw => lower.includes(kw.toLowerCase()))) {
      return cfg;
    }
  }
  return null;
}

/**
 * Parse the "Chủ trì: X\nPhối hợp: Y; Z" format into parts.
 * Chấp nhận cả biến thể AI hay trả về: "Phối hợp:" nằm cùng dòng với Chủ trì
 * ("Chủ trì: X. Phối hợp: Y; Z"), hoặc không có nhãn mà chỉ liệt kê nhiều
 * đơn vị phân tách bằng ";" (đơn vị đầu là chủ trì, còn lại là phối hợp).
 */
export function parseResponsibleUnit(raw: string | null | undefined): {
  leadUnit: string;
  coordinationUnits: string[];
} {
  if (!raw?.trim()) return { leadUnit: "Cần rà soát thêm đơn vị phụ trách", coordinationUnits: [] };
  const text = raw.trim();
  const coordinationUnits: string[] = [];

  // Tách phần "Phối hợp:" dù nằm ở dòng riêng hay cùng dòng.
  const coordIdx = text.indexOf("Phối hợp:");
  let leadPart = coordIdx >= 0 ? text.slice(0, coordIdx) : text;
  if (coordIdx >= 0) {
    coordinationUnits.push(
      ...text
        .slice(coordIdx + "Phối hợp:".length)
        .split(/[;\n]/)
        .map(p => p.trim().replace(/^[-•,.\s]+|[,.\s]+$/g, ""))
        .filter(Boolean),
    );
  }

  let leadUnit = leadPart
    .replace(/Chủ trì:/g, "")
    .replace(/[-•,.;:\s]+$/g, "")
    .trim();

  // Chủ trì chỉ được là MỘT đơn vị: nếu AI gộp nhiều đơn vị (nối bằng "và",
  // ";", "&", ",") → giữ đơn vị đầu, chuyển phần còn lại sang phối hợp.
  const leadParts = leadUnit
    .split(/;|\svà\s|\s&\s/)
    .map(p => p.trim().replace(/^[-•,.\s]+|[,.\s]+$/g, ""))
    .filter(Boolean);
  if (leadParts.length > 1) {
    leadUnit = leadParts[0];
    coordinationUnits.unshift(...leadParts.slice(1));
  }

  if (!leadUnit) leadUnit = "Cần rà soát thêm đơn vị phụ trách";
  return { leadUnit, coordinationUnits };
}
