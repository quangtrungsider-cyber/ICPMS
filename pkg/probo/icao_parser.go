// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package probo

import (
	"regexp"
	"strings"

	"go.probo.inc/probo/pkg/coredata"
)

// IcaoParsedNode represents one heading node in an ICAO / aviation-English document.
type IcaoParsedNode struct {
	Type            coredata.IcpmsDocumentSectionType
	SectionNumber   string   // e.g. "1.1.2", "I", "A", "1-1"
	Title           string   // text after the number / keyword
	FullHeading     string   // entire heading line
	ContentLines    []string // body text lines following this heading
	LineIndex       int      // line number of the heading
	DepthLevel      int
	ConfidenceScore int
	Warnings        []string
	Children        []*IcaoParsedNode
	Parent          *IcaoParsedNode
}

// IcaoParseResult holds the parsed tree and statistics.
type IcaoParseResult struct {
	Roots    []*IcaoParsedNode
	MaxDepth int
	Counts   IcaoSectionCounts
}

// IcaoSectionCounts aggregates per-type counts for the parse job record.
type IcaoSectionCounts struct {
	Chapters      int
	Paragraphs    int
	Subparagraphs int
	Appendices    int
	Tables        int
	Figures       int
}

// ---- compiled regex patterns ----

var (
	// PART I, PART II — Title, Part 1. Title
	icaoPart = regexp.MustCompile(`(?i)^\s*PART\s+([IVXLCDM]+|\d+)\b[.\s\-—:]*(.*)$`)

	// CHAPTER 1, Chapter 1. Title, CHAPTER 2 — Title
	icaoChapter = regexp.MustCompile(`(?i)^\s*CHAPTER\s+(\d+|[IVXLCDM]+)\b[.\s\-—:]*(.*)$`)

	// Numeric sections: 1.1 Title, 1.1.1 Title, 3.2.1 Something
	// Must have at least one dot so bare "1" alone doesn't match paragraph body.
	icaoNumericDotted = regexp.MustCompile(`^\s*(\d+(?:\.\d+)+)\s+(.+)$`)

	// Single-level numeric under a chapter: "1 General" (only if chapter context exists)
	icaoNumericSingle = regexp.MustCompile(`^\s*(\d+)\.\s+(.+)$`)

	// Subparagraph: a) text, b) text (lower or upper case)
	icaoSubpara = regexp.MustCompile(`^\s*([a-zA-Z])\)\s+(.+)$`)

	// APPENDIX A, Appendix 2. Title, APPENDIX TO CHAPTER 3
	icaoAppendix = regexp.MustCompile(`(?i)^\s*APPENDIX\b[.\s\-—:]*([A-Z0-9IVXLCDM\-]*)\b[.\s\-—:]*(.*)$`)

	// ATTACHMENT A, Attachment B. Title
	icaoAttachment = regexp.MustCompile(`(?i)^\s*ATTACHMENT\b[.\s\-—:]*([A-Z0-9IVXLCDM\-]*)\b[.\s\-—:]*(.*)$`)

	// Table 1-1. Title, TABLE 2-3
	icaoTable = regexp.MustCompile(`(?i)^\s*TABLE\s+([A-Z0-9\-\.]+)\b[.\s\-—:]*(.*)$`)

	// Figure 1-1. Title, FIGURE 2-2
	icaoFigure = regexp.MustCompile(`(?i)^\s*FIGURE\s+([A-Z0-9\-\.]+)\b[.\s\-—:]*(.*)$`)

	// Note.— Note 1.— NOTE.—
	icaoNote = regexp.MustCompile(`(?i)^\s*NOTE\s*(\d+)?\s*[.\-—:]+\s*(.*)$`)

	// Example.— EXAMPLE.—
	icaoExample = regexp.MustCompile(`(?i)^\s*EXAMPLE\s*[.\-—:]+\s*(.*)$`)
)

// numericParent returns the parent number for a dotted section string.
// "1.1.2" → "1.1", "1.1" → "1", "1" → ""
func numericParent(num string) string {
	idx := strings.LastIndex(num, ".")
	if idx < 0 {
		return ""
	}
	return num[:idx]
}

// numLevel returns the number of dot-separated components in a section number.
// "1.1" → 2, "1.1.1" → 3, "1" → 1
func numLevel(num string) int {
	return strings.Count(num, ".") + 1
}

// numLevelToSectionType maps numeric depth to a section type.
func numLevelToSectionType(level int) coredata.IcpmsDocumentSectionType {
	if level <= 2 {
		return coredata.IcpmsDocumentSectionTypeSection
	}
	return coredata.IcpmsDocumentSectionTypeParagraph
}

// icaoNodeDepth returns the depth_level to store for a given node type / numeric level.
// Structural hierarchy: PART=0, CHAPTER=1, then numeric sections 2..N.
func icaoNodeDepth(secType coredata.IcpmsDocumentSectionType, nl int) int {
	switch secType {
	case coredata.IcpmsDocumentSectionTypePart,
		coredata.IcpmsDocumentSectionTypeAppendix,
		coredata.IcpmsDocumentSectionTypeAttachment:
		return 0
	case coredata.IcpmsDocumentSectionTypeChapter:
		return 1
	case coredata.IcpmsDocumentSectionTypeSection, coredata.IcpmsDocumentSectionTypeParagraph:
		// nl=1 → depth 2, nl=2 → depth 3, etc.
		return nl + 1
	case coredata.IcpmsDocumentSectionTypeSubparagraph:
		return 99 // resolved dynamically from parent
	default:
		return 99
	}
}

// ParseIcaoDocument parses an ICAO / aviation-English document text into a section tree.
func ParseIcaoDocument(text string) *IcaoParseResult {
	lines := strings.Split(text, "\n")

	var roots []*IcaoParsedNode
	// structStack tracks PART (depth 0) and CHAPTER (depth 1) only.
	// Index 0 = current PART/APPENDIX/ATTACHMENT, index 1 = current CHAPTER.
	structStack := make([]*IcaoParsedNode, 2)

	// numericMap tracks numeric section nodes by their dotted number.
	numericMap := make(map[string]*IcaoParsedNode)

	// currentNode is the node currently accumulating body content lines.
	var currentNode *IcaoParsedNode

	maxDepth := 0
	var counts IcaoSectionCounts

	for i, rawLine := range lines {
		line := strings.TrimSpace(rawLine)
		if line == "" {
			continue
		}

		node := matchIcaoHeading(line, i)
		if node == nil {
			// Accumulate body content into current section
			if currentNode != nil {
				currentNode.ContentLines = append(currentNode.ContentLines, line)
			}
			continue
		}

		// Attach node to the tree.
		switch node.Type {

		case coredata.IcpmsDocumentSectionTypePart:
			roots = append(roots, node)
			structStack[0] = node
			structStack[1] = nil
			numericMap = make(map[string]*IcaoParsedNode)
			currentNode = node

		case coredata.IcpmsDocumentSectionTypeChapter:
			counts.Chapters++
			parent := structStack[0]
			if parent != nil {
				node.Parent = parent
				parent.Children = append(parent.Children, node)
			} else {
				roots = append(roots, node)
			}
			structStack[1] = node
			numericMap = make(map[string]*IcaoParsedNode)
			currentNode = node

		case coredata.IcpmsDocumentSectionTypeAppendix:
			counts.Appendices++
			roots = append(roots, node)
			structStack[0] = node
			structStack[1] = nil
			numericMap = make(map[string]*IcaoParsedNode)
			currentNode = node

		case coredata.IcpmsDocumentSectionTypeAttachment:
			roots = append(roots, node)
			structStack[0] = node
			structStack[1] = nil
			numericMap = make(map[string]*IcaoParsedNode)
			currentNode = node

		case coredata.IcpmsDocumentSectionTypeSection, coredata.IcpmsDocumentSectionTypeParagraph:
			nl := numLevel(node.SectionNumber)
			node.DepthLevel = nl + 1

			// Find parent: prefer exact prefix in numericMap, fall back to structStack.
			parentNum := numericParent(node.SectionNumber)
			var parent *IcaoParsedNode
			if parentNum != "" {
				parent = numericMap[parentNum]
				if parent == nil {
					// Try one more level up
					grandparentNum := numericParent(parentNum)
					if grandparentNum != "" {
						parent = numericMap[grandparentNum]
					}
					if parent == nil {
						// Fall back to structural stack
						parent = deepestStructNode(structStack)
					}
					if parentNum != "" {
						node.Warnings = append(node.Warnings,
							"Could not find parent section "+parentNum+" — attached to nearest ancestor")
					}
				}
			} else {
				parent = deepestStructNode(structStack)
			}

			numericMap[node.SectionNumber] = node

			if parent != nil {
				node.Parent = parent
				parent.Children = append(parent.Children, node)
			} else {
				roots = append(roots, node)
			}

			if node.Type == coredata.IcpmsDocumentSectionTypeParagraph {
				counts.Paragraphs++
			}
			currentNode = node

		case coredata.IcpmsDocumentSectionTypeSubparagraph:
			counts.Subparagraphs++
			parent := currentNode
			if parent == nil {
				roots = append(roots, node)
				node.Warnings = append(node.Warnings, "Subparagraph appears before any section heading")
				node.DepthLevel = 5
			} else {
				node.Parent = parent
				node.DepthLevel = parent.DepthLevel + 1
				parent.Children = append(parent.Children, node)
			}
			// Subparagraph nodes are siblings; currentNode stays as the structural parent.

		case coredata.IcpmsDocumentSectionTypeTable:
			counts.Tables++
			attachLeaf(node, currentNode, structStack, &roots)
			currentNode = node

		case coredata.IcpmsDocumentSectionTypeFigure:
			counts.Figures++
			attachLeaf(node, currentNode, structStack, &roots)
			// Figures don't accumulate body content.

		case coredata.IcpmsDocumentSectionTypeNote, coredata.IcpmsDocumentSectionTypeExample:
			attachLeaf(node, currentNode, structStack, &roots)
			currentNode = node

		default:
			if currentNode != nil {
				node.Parent = currentNode
				currentNode.Children = append(currentNode.Children, node)
			} else {
				roots = append(roots, node)
			}
			currentNode = node
		}

		if node.DepthLevel > maxDepth {
			maxDepth = node.DepthLevel
		}
	}

	return &IcaoParseResult{
		Roots:    roots,
		MaxDepth: maxDepth,
		Counts:   counts,
	}
}

// attachLeaf attaches TABLE/FIGURE/NOTE/EXAMPLE to the nearest parent.
func attachLeaf(node, current *IcaoParsedNode, structStack []*IcaoParsedNode, roots *[]*IcaoParsedNode) {
	parent := current
	if parent == nil {
		parent = deepestStructNode(structStack)
	}
	if parent != nil {
		node.Parent = parent
		node.DepthLevel = parent.DepthLevel + 1
		parent.Children = append(parent.Children, node)
	} else {
		*roots = append(*roots, node)
		node.DepthLevel = 0
	}
}

// deepestStructNode returns the deepest non-nil node in structStack (index 1 first, then 0).
func deepestStructNode(stack []*IcaoParsedNode) *IcaoParsedNode {
	for i := len(stack) - 1; i >= 0; i-- {
		if stack[i] != nil {
			return stack[i]
		}
	}
	return nil
}

// matchIcaoHeading attempts to match line against all known ICAO heading patterns.
func matchIcaoHeading(line string, lineIdx int) *IcaoParsedNode {
	// APPENDIX (check before ATTACHMENT and numeric)
	if m := icaoAppendix.FindStringSubmatch(line); m != nil {
		return &IcaoParsedNode{
			Type:            coredata.IcpmsDocumentSectionTypeAppendix,
			SectionNumber:   strings.TrimSpace(m[1]),
			Title:           strings.TrimSpace(m[2]),
			FullHeading:     line,
			LineIndex:       lineIdx,
			DepthLevel:      0,
			ConfidenceScore: 95,
		}
	}

	// ATTACHMENT
	if m := icaoAttachment.FindStringSubmatch(line); m != nil {
		return &IcaoParsedNode{
			Type:            coredata.IcpmsDocumentSectionTypeAttachment,
			SectionNumber:   strings.TrimSpace(m[1]),
			Title:           strings.TrimSpace(m[2]),
			FullHeading:     line,
			LineIndex:       lineIdx,
			DepthLevel:      0,
			ConfidenceScore: 95,
		}
	}

	// PART
	if m := icaoPart.FindStringSubmatch(line); m != nil {
		return &IcaoParsedNode{
			Type:            coredata.IcpmsDocumentSectionTypePart,
			SectionNumber:   strings.TrimSpace(m[1]),
			Title:           strings.TrimSpace(m[2]),
			FullHeading:     line,
			LineIndex:       lineIdx,
			DepthLevel:      0,
			ConfidenceScore: 95,
		}
	}

	// CHAPTER
	if m := icaoChapter.FindStringSubmatch(line); m != nil {
		return &IcaoParsedNode{
			Type:            coredata.IcpmsDocumentSectionTypeChapter,
			SectionNumber:   strings.TrimSpace(m[1]),
			Title:           strings.TrimSpace(m[2]),
			FullHeading:     line,
			LineIndex:       lineIdx,
			DepthLevel:      1,
			ConfidenceScore: 95,
		}
	}

	// TABLE (before numeric to avoid matching "Table 1-1" as numeric)
	if m := icaoTable.FindStringSubmatch(line); m != nil {
		return &IcaoParsedNode{
			Type:            coredata.IcpmsDocumentSectionTypeTable,
			SectionNumber:   strings.TrimSpace(m[1]),
			Title:           strings.TrimSpace(m[2]),
			FullHeading:     line,
			LineIndex:       lineIdx,
			DepthLevel:      99,
			ConfidenceScore: 90,
		}
	}

	// FIGURE
	if m := icaoFigure.FindStringSubmatch(line); m != nil {
		return &IcaoParsedNode{
			Type:            coredata.IcpmsDocumentSectionTypeFigure,
			SectionNumber:   strings.TrimSpace(m[1]),
			Title:           strings.TrimSpace(m[2]),
			FullHeading:     line,
			LineIndex:       lineIdx,
			DepthLevel:      99,
			ConfidenceScore: 90,
		}
	}

	// NOTE
	if m := icaoNote.FindStringSubmatch(line); m != nil {
		num := strings.TrimSpace(m[1])
		title := strings.TrimSpace(m[2])
		return &IcaoParsedNode{
			Type:            coredata.IcpmsDocumentSectionTypeNote,
			SectionNumber:   num,
			Title:           title,
			FullHeading:     line,
			LineIndex:       lineIdx,
			DepthLevel:      99,
			ConfidenceScore: 85,
		}
	}

	// EXAMPLE
	if m := icaoExample.FindStringSubmatch(line); m != nil {
		return &IcaoParsedNode{
			Type:            coredata.IcpmsDocumentSectionTypeExample,
			SectionNumber:   "",
			Title:           strings.TrimSpace(m[1]),
			FullHeading:     line,
			LineIndex:       lineIdx,
			DepthLevel:      99,
			ConfidenceScore: 85,
		}
	}

	// Numeric dotted (1.1, 1.1.1, 3.2.1 …)
	if m := icaoNumericDotted.FindStringSubmatch(line); m != nil {
		num := strings.TrimSpace(m[1])
		nl := numLevel(num)
		secType := numLevelToSectionType(nl)
		return &IcaoParsedNode{
			Type:            secType,
			SectionNumber:   num,
			Title:           strings.TrimSpace(m[2]),
			FullHeading:     line,
			LineIndex:       lineIdx,
			DepthLevel:      nl + 1,
			ConfidenceScore: 90,
		}
	}

	// Single-level numeric "1. Title" — lower confidence, could be a list item
	if m := icaoNumericSingle.FindStringSubmatch(line); m != nil {
		return &IcaoParsedNode{
			Type:            coredata.IcpmsDocumentSectionTypeSection,
			SectionNumber:   strings.TrimSpace(m[1]),
			Title:           strings.TrimSpace(m[2]),
			FullHeading:     line,
			LineIndex:       lineIdx,
			DepthLevel:      2,
			ConfidenceScore: 70,
		}
	}

	// Subparagraph: a) text
	if m := icaoSubpara.FindStringSubmatch(line); m != nil {
		return &IcaoParsedNode{
			Type:            coredata.IcpmsDocumentSectionTypeSubparagraph,
			SectionNumber:   strings.TrimSpace(m[1]),
			Title:           strings.TrimSpace(m[2]),
			FullHeading:     line,
			LineIndex:       lineIdx,
			DepthLevel:      99,
			ConfidenceScore: 65,
		}
	}

	return nil
}

// FlattenIcaoSections does a DFS traversal, assigns sort_order, and returns a flat list.
func FlattenIcaoSections(roots []*IcaoParsedNode) []*IcaoParsedNode {
	var result []*IcaoParsedNode
	counter := 0
	var dfs func(node *IcaoParsedNode)
	dfs = func(node *IcaoParsedNode) {
		node.LineIndex = counter
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

// BuildIcaoPath constructs a human-readable breadcrumb path for a node.
// e.g. "Chapter 1 / 1.1 / 1.1.2"
func BuildIcaoPath(node *IcaoParsedNode) string {
	var parts []string
	current := node
	for current != nil {
		label := current.FullHeading
		if len(label) > 60 {
			label = label[:57] + "..."
		}
		parts = append([]string{label}, parts...)
		current = current.Parent
	}
	return strings.Join(parts, " / ")
}
