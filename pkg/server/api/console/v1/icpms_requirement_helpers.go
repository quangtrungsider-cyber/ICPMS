package console_v1

import (
	"regexp"
	"strings"

	"go.probo.inc/probo/pkg/coredata"
)

var (
	reChuong = regexp.MustCompile(`Ch[ươ]{1,3}ng\s+([IVXLCDM\d]+)`)
	reDieu   = regexp.MustCompile(`Đi[ềe]u\s+(\d+[a-zA-Z]?)`)
	reKhoan  = regexp.MustCompile(`Kho[ảa]n\s+(\d+)`)
	reDiem   = regexp.MustCompile(`Đi[ểe]m\s+([a-zA-Z\d]+)`)
	reMuc    = regexp.MustCompile(`M[uú]c\s+([IVXLCDM\d]+)`)
)

// sectionRefLabel returns the short reference label for a single section,
// e.g. "Điều 8", "Khoản 3", "Điểm a".
// For VN text it uses regex on fullHeading first, then sectionType as fallback.
func sectionRefLabel(sec *coredata.IcpmsParsedDocumentSection) string {
	fh := sec.FullHeading

	// Try Vietnamese keyword patterns first.
	if m := reDiem.FindStringSubmatch(fh); len(m) > 1 {
		return "Điểm " + m[1]
	}
	if m := reKhoan.FindStringSubmatch(fh); len(m) > 1 {
		return "Khoản " + m[1]
	}
	if m := reDieu.FindStringSubmatch(fh); len(m) > 1 {
		return "Điều " + m[1]
	}
	if m := reMuc.FindStringSubmatch(fh); len(m) > 1 {
		return "Mục " + m[1]
	}
	if m := reChuong.FindStringSubmatch(fh); len(m) > 1 {
		return "Chương " + m[1]
	}

	// Fallback: use sectionType + sectionNumber for VN sections whose heading
	// does not include the type keyword (e.g. "1. Nội dung..." without "Khoản").
	num := ""
	if sec.SectionNumber != nil && *sec.SectionNumber != "" {
		num = " " + *sec.SectionNumber
	}
	switch string(sec.SectionType) {
	case "CHAPTER":
		return "Chương" + num
	case "ARTICLE":
		return "Điều" + num
	case "CLAUSE", "PARAGRAPH":
		return "Khoản" + num
	case "POINT":
		return "Điểm" + num
	case "SECTION":
		return "Mục" + num
	case "PART":
		return "Phần" + num
	}

	// Skip section types that don't carry a useful label for the reference chain.
	// Return empty so the chain builder drops them silently.
	if num == "" {
		return ""
	}
	// ICAO numeric sections: return bare number (e.g. "3.2.1").
	return strings.TrimSpace(num)
}

// formatSourceReferenceChain builds a full reference string from a chain of sections
// ordered from the target section (index 0) up to the ancestor (last index).
// Example output: "Điểm a, Khoản 1, Điều 8, Chương III"
func formatSourceReferenceChain(chain []*coredata.IcpmsParsedDocumentSection) string {
	if len(chain) == 0 {
		return ""
	}

	var parts []string
	seen := map[string]bool{}
	for _, sec := range chain {
		label := sectionRefLabel(sec)
		if label != "" && !seen[label] {
			seen[label] = true
			parts = append(parts, label)
		}
	}

	if len(parts) > 0 {
		return strings.Join(parts, ", ")
	}

	// Last-resort: just the leaf section number.
	leaf := chain[0]
	if leaf.SectionNumber != nil && *leaf.SectionNumber != "" {
		return *leaf.SectionNumber
	}
	return leaf.Title
}

// formatSourceReference is kept for single-section callers.
func formatSourceReference(sec *coredata.IcpmsParsedDocumentSection) string {
	return formatSourceReferenceChain([]*coredata.IcpmsParsedDocumentSection{sec})
}
