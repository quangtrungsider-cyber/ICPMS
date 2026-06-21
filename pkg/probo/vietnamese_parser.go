// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package probo

import (
	"regexp"
	"strings"

	"go.probo.inc/probo/pkg/coredata"
)

// ParsedSectionNode represents a section detected during Vietnamese document parsing.
type ParsedSectionNode struct {
	Type            coredata.IcpmsDocumentSectionType
	SectionNumber   string
	Title           string
	FullHeading     string
	ContentText     string
	LineIndex       int
	DepthLevel      int
	ConfidenceScore int
	Children        []*ParsedSectionNode
	Parent          *ParsedSectionNode
}

// VietnameseParseResult holds the parsed tree and summary stats.
type VietnameseParseResult struct {
	Roots    []*ParsedSectionNode
	MaxDepth int
	Total    int
}

var (
	numPat = `([IVXLCDM]+|[0-9]+(?:\.[0-9]+)*)`

	// PHẦN I. TÊN PHẦN or PHẦN I: TÊN PHẦN
	rePhần = regexp.MustCompile(`^(?:PHẦN|Phần)\s+` + numPat + `[.:]\s*(.*)$`)

	// CHƯƠNG I. TÊN CHƯƠNG
	reChương = regexp.MustCompile(`^(?:CHƯƠNG|Chương)\s+` + numPat + `[.:]\s*(.*)$`)

	// TIỂU MỤC must be checked before MỤC
	reTiểuMục = regexp.MustCompile(`^(?:TIỂU MỤC|Tiểu mục)\s+([0-9]+)[.:]\s*(.*)$`)

	// MỤC 1. TÊN MỤC
	reMục = regexp.MustCompile(`^(?:MỤC|Mục)\s+([0-9]+)[.:]\s*(.*)$`)

	// Điều 1. Tên điều (or ĐIỀU 1.)
	reĐiều = regexp.MustCompile(`^(?:Điều|ĐIỀU)\s+([0-9]+)[.:]\s*(.*)$`)

	// 1. text (clause — numbered item)
	reKhoản = regexp.MustCompile(`^([0-9]+)\.\s+(.+)$`)

	// a) text (point — lettered item)
	reĐiểm = regexp.MustCompile(`^([a-zđ])\)\s+(.+)$`)

	// PHỤ LỤC [optional id] [optional title]
	rePhuLuc = regexp.MustCompile(`^(?:PHỤ LỤC|Phụ lục)\s*([IVXLCDM0-9A-Z]*)[.:]\s*(.*)$`)

	// PHỤ LỤC without separator (just the keyword with optional id on same line)
	rePhuLucSimple = regexp.MustCompile(`^(?:PHỤ LỤC|Phụ lục)\s*([IVXLCDM0-9A-Z]*)$`)
)

// ParseVietnameseDocument parses a Vietnamese legal document text into a section tree.
func ParseVietnameseDocument(text string) *VietnameseParseResult {
	lines := strings.Split(text, "\n")

	var roots []*ParsedSectionNode
	// stack tracks the ancestor path by depth level; index = depth level
	stack := make([]*ParsedSectionNode, 10)
	maxDepth := 0
	total := 0
	var lastNode *ParsedSectionNode

	for i, rawLine := range lines {
		line := strings.TrimSpace(rawLine)
		if line == "" {
			continue
		}

		node := matchVietnameseLine(line, i)
		if node == nil {
			if lastNode != nil {
				// If the previous heading's title looks incomplete (doesn't end with
				// sentence-terminal punctuation) and we haven't started ContentText yet,
				// treat this as a continuation of the heading line (PDF line-break artifact).
				if lastNode.ContentText == "" && !headingLooksComplete(lastNode.Title) {
					// Append with a space — handles PDF mid-word breaks gracefully
					lastNode.Title += " " + line
					lastNode.FullHeading += " " + line
				} else {
					// Normal body content for this section
					if lastNode.ContentText == "" {
						lastNode.ContentText = line
					} else {
						lastNode.ContentText += "\n" + line
					}
				}
			}
			continue
		}

		lastNode = node
		total++
		if node.DepthLevel > maxDepth {
			maxDepth = node.DepthLevel
		}

		if node.Type == coredata.IcpmsDocumentSectionTypeAppendix {
			// PHỤ LỤC is always a root regardless of current depth
			roots = append(roots, node)
			// Clear stack from position 0 upwards, set appendix at pos 0
			for j := range stack {
				stack[j] = nil
			}
			stack[0] = node
			continue
		}

		depth := node.DepthLevel

		// Find parent: highest ancestor with depth < current depth
		var parent *ParsedSectionNode
		for d := depth - 1; d >= 0; d-- {
			if stack[d] != nil {
				parent = stack[d]
				break
			}
		}

		// Clear all stack slots at depth and above
		for d := depth; d < len(stack); d++ {
			stack[d] = nil
		}
		stack[depth] = node

		if parent == nil {
			roots = append(roots, node)
		} else {
			node.Parent = parent
			parent.Children = append(parent.Children, node)
		}
	}

	return &VietnameseParseResult{
		Roots:    roots,
		MaxDepth: maxDepth,
		Total:    total,
	}
}

// headingLooksComplete returns true if the title ends with sentence-terminating
// punctuation, meaning the heading is likely complete and subsequent lines are
// body content rather than a continuation of the heading text.
func headingLooksComplete(title string) bool {
	if title == "" {
		return true
	}
	// Get last rune
	runes := []rune(strings.TrimSpace(title))
	if len(runes) == 0 {
		return true
	}
	last := runes[len(runes)-1]
	// Consider complete if ends with: . ; : ) ] " ' — …
	switch last {
	case '.', ';', ':', ')', ']', '"', '\'', '…', '—', '–':
		return true
	}
	return false
}

func matchVietnameseLine(line string, lineIdx int) *ParsedSectionNode {
	// PHỤ LỤC (with separator)
	if m := rePhuLuc.FindStringSubmatch(line); m != nil {
		return &ParsedSectionNode{
			Type:            coredata.IcpmsDocumentSectionTypeAppendix,
			SectionNumber:   m[1],
			Title:           strings.TrimSpace(m[2]),
			FullHeading:     line,
			LineIndex:       lineIdx,
			DepthLevel:      0,
			ConfidenceScore: 95,
		}
	}
	// PHỤ LỤC (no separator)
	if m := rePhuLucSimple.FindStringSubmatch(line); m != nil {
		return &ParsedSectionNode{
			Type:            coredata.IcpmsDocumentSectionTypeAppendix,
			SectionNumber:   m[1],
			Title:           "",
			FullHeading:     line,
			LineIndex:       lineIdx,
			DepthLevel:      0,
			ConfidenceScore: 90,
		}
	}

	// PHẦN
	if m := rePhần.FindStringSubmatch(line); m != nil {
		return &ParsedSectionNode{
			Type:            coredata.IcpmsDocumentSectionTypePart,
			SectionNumber:   m[1],
			Title:           strings.TrimSpace(m[2]),
			FullHeading:     line,
			LineIndex:       lineIdx,
			DepthLevel:      0,
			ConfidenceScore: 95,
		}
	}

	// CHƯƠNG
	if m := reChương.FindStringSubmatch(line); m != nil {
		return &ParsedSectionNode{
			Type:            coredata.IcpmsDocumentSectionTypeChapter,
			SectionNumber:   m[1],
			Title:           strings.TrimSpace(m[2]),
			FullHeading:     line,
			LineIndex:       lineIdx,
			DepthLevel:      1,
			ConfidenceScore: 95,
		}
	}

	// TIỂU MỤC before MỤC
	if m := reTiểuMục.FindStringSubmatch(line); m != nil {
		return &ParsedSectionNode{
			Type:            coredata.IcpmsDocumentSectionTypeSubsection,
			SectionNumber:   m[1],
			Title:           strings.TrimSpace(m[2]),
			FullHeading:     line,
			LineIndex:       lineIdx,
			DepthLevel:      3,
			ConfidenceScore: 90,
		}
	}

	// MỤC
	if m := reMục.FindStringSubmatch(line); m != nil {
		return &ParsedSectionNode{
			Type:            coredata.IcpmsDocumentSectionTypeSection,
			SectionNumber:   m[1],
			Title:           strings.TrimSpace(m[2]),
			FullHeading:     line,
			LineIndex:       lineIdx,
			DepthLevel:      2,
			ConfidenceScore: 90,
		}
	}

	// Điều / ĐIỀU
	if m := reĐiều.FindStringSubmatch(line); m != nil {
		return &ParsedSectionNode{
			Type:            coredata.IcpmsDocumentSectionTypeArticle,
			SectionNumber:   m[1],
			Title:           strings.TrimSpace(m[2]),
			FullHeading:     line,
			LineIndex:       lineIdx,
			DepthLevel:      4,
			ConfidenceScore: 95,
		}
	}

	// Khoản: numbered item (1. text)
	if m := reKhoản.FindStringSubmatch(line); m != nil {
		return &ParsedSectionNode{
			Type:            coredata.IcpmsDocumentSectionTypeClause,
			SectionNumber:   m[1],
			Title:           strings.TrimSpace(m[2]),
			FullHeading:     line,
			LineIndex:       lineIdx,
			DepthLevel:      5,
			ConfidenceScore: 75,
		}
	}

	// Điểm: lettered item (a) text)
	if m := reĐiểm.FindStringSubmatch(line); m != nil {
		return &ParsedSectionNode{
			Type:            coredata.IcpmsDocumentSectionTypePoint,
			SectionNumber:   m[1],
			Title:           strings.TrimSpace(m[2]),
			FullHeading:     line,
			LineIndex:       lineIdx,
			DepthLevel:      6,
			ConfidenceScore: 65,
		}
	}

	return nil
}

// FlattenSections does a DFS traversal of the tree and returns all nodes in order,
// assigning sort_order incrementally.
func FlattenSections(roots []*ParsedSectionNode) []*ParsedSectionNode {
	var result []*ParsedSectionNode
	counter := 0
	var dfs func(node *ParsedSectionNode)
	dfs = func(node *ParsedSectionNode) {
		node.LineIndex = counter // reuse LineIndex field as sort_order index
		counter++
		result = append(result, node)
		for _, child := range node.Children {
			dfs(child)
		}
	}
	for _, root := range roots {
		dfs(root)
	}
	return result
}
