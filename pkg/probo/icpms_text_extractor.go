// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package probo

import (
	"archive/zip"
	"bytes"
	"context"
	"crypto/sha256"
	"encoding/json"
	"encoding/xml"
	"fmt"
	"io"
	"log"
	"mime/multipart"
	"net/http"
	"os"
	"os/exec"
	"strings"
	"time"
	"unicode"

	"github.com/ledongthuc/pdf"
	"go.probo.inc/probo/pkg/coredata"
)

// OCRServiceConfig holds connection settings for the ICPMS OCR microservice.
type OCRServiceConfig struct {
	URL            string
	TimeoutSeconds int
	Enabled        bool
}

// ocrPage represents a single page result from the OCR service.
type ocrPage struct {
	PageNumber int    `json:"page_number"`
	Text       string `json:"text"`
	CharCount  int    `json:"char_count"`
}

// ocrResponse is the JSON response from POST /ocr/upload.
type ocrResponse struct {
	Pages      []ocrPage `json:"pages"`
	TotalPages int       `json:"total_pages"`
	TotalChars int       `json:"total_chars"`
}

// callOCRService uploads PDF bytes to the OCR microservice and converts
// the page results to textBlock slices (1 page = 1 block).
func callOCRService(ctx context.Context, cfg OCRServiceConfig, data []byte) ([]textBlock, error) {
	timeout := time.Duration(cfg.TimeoutSeconds) * time.Second
	if timeout <= 0 {
		timeout = 120 * time.Second
	}
	client := &http.Client{Timeout: timeout}

	var body bytes.Buffer
	mw := multipart.NewWriter(&body)
	fw, err := mw.CreateFormFile("file", "document.pdf")
	if err != nil {
		return nil, fmt.Errorf("ocr: create form file: %w", err)
	}
	if _, err = io.Copy(fw, bytes.NewReader(data)); err != nil {
		return nil, fmt.Errorf("ocr: write form file: %w", err)
	}
	mw.Close()

	req, err := http.NewRequestWithContext(ctx, http.MethodPost, cfg.URL+"/ocr/upload", &body)
	if err != nil {
		return nil, fmt.Errorf("ocr: build request: %w", err)
	}
	req.Header.Set("Content-Type", mw.FormDataContentType())

	resp, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("ocr: request failed: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("ocr: service returned HTTP %d", resp.StatusCode)
	}

	var result ocrResponse
	if err = json.NewDecoder(resp.Body).Decode(&result); err != nil {
		return nil, fmt.Errorf("ocr: decode response: %w", err)
	}

	var blocks []textBlock
	for _, p := range result.Pages {
		if strings.TrimSpace(p.Text) == "" {
			continue
		}
		norm := normalizeVietnameseText(p.Text)
		blocks = append(blocks, textBlock{
			rawText:   p.Text,
			normText:  norm,
			pageNum:   p.PageNumber,
			blockType: coredata.IcpmsExtractedTextBlockTypeParagraph,
			hash:      hashText(norm),
		})
	}
	return blocks, nil
}

// viVowels contains all Vietnamese vowel runes (base forms and tonal/diacritic variants).
var viVowels = func() map[rune]bool {
	const v = "aăâeêioôơuưy" +
		"àáạảãăắặẳẵằầấẫẩậèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹ" +
		"AĂÂEÊIOÔƠUƯY" +
		"ÀÁẠẢÃĂẮẶẲẴẰẦẤẪẨẬÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ"
	m := make(map[rune]bool, 128)
	for _, r := range v {
		m[r] = true
	}
	return m
}()

// viSingleCodas are single-rune consonants that can serve as Vietnamese syllable
// codas. When a line ends with a vowel and the next line starts with one of these
// followed by a space, the consonant likely belongs to the previous syllable.
var viSingleCodas = map[rune]bool{
	'm': true, 'M': true,
	'n': true, 'N': true,
	't': true, 'T': true,
	'c': true, 'C': true,
	'p': true, 'P': true,
}

func containsVietnameseVowel(s string) bool {
	for _, r := range s {
		if viVowels[r] {
			return true
		}
	}
	return false
}

func endsWithVietnameseVowel(s string) bool {
	runes := []rune(s)
	return len(runes) > 0 && viVowels[runes[len(runes)-1]]
}

func isAllLetters(s string) bool {
	if s == "" {
		return false
	}
	for _, r := range s {
		if !unicode.IsLetter(r) {
			return false
		}
	}
	return true
}

// isVietnameseFragment returns true when s looks like a consonant fragment that
// was split from the beginning of the next word by the PDF renderer.
// Covers: pure-consonant runs ≤4 letters, and the "qu" cluster (u is not a
// standalone vowel when preceded by q in Vietnamese).
func isVietnameseFragment(s string) bool {
	if !isAllLetters(s) || len([]rune(s)) > 4 {
		return false
	}
	if strings.EqualFold(s, "qu") {
		return true
	}
	return !containsVietnameseVowel(s)
}

// normalizeVietnameseText fixes mid-word line breaks produced by Vietnamese PDF
// renderers (e.g. "kh\nông" → "không", "N\nGHĨA" → "NGHĨA"), then collapses
// all remaining whitespace to single spaces.
func normalizeVietnameseText(text string) string {
	if text == "" {
		return ""
	}
	lines := strings.Split(text, "\n")
	n := len(lines)

	for i := 0; i < n-1; i++ {
		cur := strings.TrimRight(lines[i], " \t\r")
		next := strings.TrimLeft(lines[i+1], " \t\r")
		if len(next) == 0 {
			continue
		}

		curFields := strings.Fields(cur)
		if len(curFields) == 0 {
			continue
		}
		lastWord := curFields[len(curFields)-1]
		prefix := strings.Join(curFields[:len(curFields)-1], " ")

		// Rule 1: last word is a consonant fragment (no vowel, ≤4 letters) or "qu".
		// Prepend the fragment to the entire next line (no intervening space).
		if isVietnameseFragment(lastWord) {
			lines[i] = prefix
			lines[i+1] = lastWord + next
			continue
		}

		// Rule 2: last word ends with a vowel and next line starts with a lone
		// coda consonant (m/n/t/c/p) followed by a space — the consonant completes
		// the preceding syllable (e.g. "nhiệ\nm " → "nhiệm").
		if endsWithVietnameseVowel(lastWord) {
			nextRunes := []rune(next)
			if len(nextRunes) > 0 && viSingleCodas[nextRunes[0]] {
				afterCoda := strings.TrimLeft(string(nextRunes[1:]), "")
				if afterCoda == "" || afterCoda[0] == ' ' || afterCoda[0] == '\t' {
					newLast := lastWord + strings.ToLower(string(nextRunes[0]))
					if prefix != "" {
						lines[i] = prefix + " " + newLast
					} else {
						lines[i] = newLast
					}
					lines[i+1] = strings.TrimSpace(afterCoda)
				}
			}
		}
	}

	var parts []string
	for _, line := range lines {
		if t := strings.TrimSpace(line); t != "" {
			parts = append(parts, t)
		}
	}
	return strings.Join(strings.Fields(strings.Join(parts, " ")), " ")
}

// textBlock is the internal representation of an extracted block before DB insertion.
type textBlock struct {
	rawText   string
	normText  string
	pageNum   int // 0 = not page-specific
	blockType coredata.IcpmsExtractedTextBlockType
	hash      string
}

// detectLanguage returns "vi" or "en" based on character heuristic.
func detectLanguage(text string) string {
	const viSet = "àáâãạăắặẵặặăắằẳẵặđèéêẻẽẹếềểễệìíỉĩịòóôõọôốồổỗộơớờởỡợùúũủụưứừửữựỳỷỹỵ"
	viRunes := make(map[rune]bool)
	for _, r := range viSet {
		viRunes[r] = true
	}

	total, viCount := 0, 0
	for _, r := range strings.ToLower(text) {
		if unicode.IsLetter(r) {
			total++
			if viRunes[r] {
				viCount++
			}
		}
	}
	if total == 0 {
		return "en"
	}
	if float64(viCount)/float64(total) > 0.015 {
		return "vi"
	}
	return "en"
}

// normalizeText trims and collapses internal whitespace.
func normalizeText(s string) string {
	return strings.Join(strings.Fields(strings.TrimSpace(s)), " ")
}

// hashText returns a short sha256 hex for deduplication.
func hashText(s string) string {
	h := sha256.Sum256([]byte(s))
	return fmt.Sprintf("%x", h[:8])
}

// wordCount counts space-separated tokens.
func wordCount(s string) int {
	return len(strings.Fields(s))
}

// blockTypeFromLine infers block type from the line content heuristic.
func blockTypeFromLine(line string, isFirstInPage bool) coredata.IcpmsExtractedTextBlockType {
	l := strings.ToUpper(strings.TrimSpace(line))
	// Common heading patterns in regulatory docs
	if len(line) < 120 && (strings.HasPrefix(l, "CHAPTER ") ||
		strings.HasPrefix(l, "SECTION ") ||
		strings.HasPrefix(l, "ANNEX ") ||
		strings.HasPrefix(l, "ARTICLE ") ||
		strings.HasPrefix(l, "ĐIỀU ") ||
		strings.HasPrefix(l, "CHƯƠNG ") ||
		strings.HasPrefix(l, "MỤC ") ||
		strings.HasPrefix(l, "PHỤ LỤC")) {
		return coredata.IcpmsExtractedTextBlockTypeHeading
	}
	if isFirstInPage {
		return coredata.IcpmsExtractedTextBlockTypeParagraph
	}
	return coredata.IcpmsExtractedTextBlockTypeParagraph
}

// findPdftotext returns the absolute path to the pdftotext binary, or "".
// Checks PATH first, then common Windows/Linux install locations.
func findPdftotext() string {
	if path, err := exec.LookPath("pdftotext"); err == nil {
		return path
	}
	candidates := []string{
		`C:\Program Files\Git\mingw64\bin\pdftotext.exe`,
		`C:\Program Files (x86)\Git\mingw64\bin\pdftotext.exe`,
		`C:\msys64\mingw64\bin\pdftotext.exe`,
		`C:\poppler\bin\pdftotext.exe`,
		`/usr/bin/pdftotext`,
		`/usr/local/bin/pdftotext`,
	}
	for _, p := range candidates {
		if _, err := os.Stat(p); err == nil {
			return p
		}
	}
	return ""
}

// extractPDFNative parses PDF bytes using the Go-native ledongthuc/pdf library.
// Works well for simple PDFs; may return very few blocks for complex/scanned PDFs.
func extractPDFNative(data []byte) ([]textBlock, int, error) {
	r, err := pdf.NewReader(bytes.NewReader(data), int64(len(data)))
	if err != nil {
		return nil, 0, fmt.Errorf("cannot open PDF: %w", err)
	}

	var blocks []textBlock
	numPages := r.NumPage()

	for pageIdx := 1; pageIdx <= numPages; pageIdx++ {
		p := r.Page(pageIdx)
		if p.V.IsNull() {
			continue
		}

		text, err := p.GetPlainText(nil)
		if err != nil || strings.TrimSpace(text) == "" {
			continue
		}

		rawParas := strings.Split(text, "\n\n")
		prevCount := len(blocks)
		isFirst := true
		for _, para := range rawParas {
			norm := normalizeVietnameseText(para)
			if len(norm) < 5 {
				continue
			}
			bt := blockTypeFromLine(norm, isFirst)
			isFirst = false
			blocks = append(blocks, textBlock{
				rawText:   strings.TrimSpace(para),
				normText:  norm,
				pageNum:   pageIdx,
				blockType: bt,
				hash:      hashText(norm),
			})
		}

		if len(blocks) == prevCount {
			norm := normalizeVietnameseText(text)
			if len(norm) >= 5 {
				blocks = append(blocks, textBlock{
					rawText:   strings.TrimSpace(text),
					normText:  norm,
					pageNum:   pageIdx,
					blockType: coredata.IcpmsExtractedTextBlockTypePage,
					hash:      hashText(norm),
				})
			}
		}
	}

	return blocks, numPages, nil
}

// extractPDFWithPdftotext runs the pdftotext CLI tool and parses its output.
// Handles CIDFont/Type3 PDFs that the Go-native parser cannot read.
// pdftotext separates pages with form feed (\f), so we can track page numbers.
func extractPDFWithPdftotext(pdfToText string, data []byte) ([]textBlock, error) {
	tmp, err := os.CreateTemp("", "icpms-*.pdf")
	if err != nil {
		return nil, fmt.Errorf("pdftotext: cannot create temp file: %w", err)
	}
	defer os.Remove(tmp.Name())
	if _, err := tmp.Write(data); err != nil {
		tmp.Close()
		return nil, fmt.Errorf("pdftotext: cannot write temp file: %w", err)
	}
	if err := tmp.Close(); err != nil {
		return nil, err
	}

	// -enc UTF-8: output encoding. "-" as output → stdout.
	out, err := exec.Command(pdfToText, "-enc", "UTF-8", tmp.Name(), "-").Output()
	if err != nil {
		return nil, fmt.Errorf("pdftotext exec: %w", err)
	}

	// Pages are separated by form feed (\f = 0x0C).
	pages := strings.Split(string(out), "\f")
	var blocks []textBlock
	for pageIdx, pageText := range pages {
		pageNum := pageIdx + 1
		pageText = strings.TrimSpace(pageText)
		if pageText == "" {
			continue
		}

		rawParas := strings.Split(pageText, "\n\n")
		prevCount := len(blocks)
		for _, para := range rawParas {
			norm := normalizeVietnameseText(para)
			if len(norm) < 5 {
				continue
			}
			bt := blockTypeFromLine(norm, len(blocks) == prevCount)
			blocks = append(blocks, textBlock{
				rawText:   strings.TrimSpace(para),
				normText:  norm,
				pageNum:   pageNum,
				blockType: bt,
				hash:      hashText(norm),
			})
		}

		// Fallback: no double-newline paragraphs → split line-by-line.
		if len(blocks) == prevCount {
			for _, line := range strings.Split(pageText, "\n") {
				norm := normalizeVietnameseText(line)
				if len(norm) < 5 {
					continue
				}
				bt := blockTypeFromLine(norm, len(blocks) == prevCount)
				blocks = append(blocks, textBlock{
					rawText:   strings.TrimSpace(line),
					normText:  norm,
					pageNum:   pageNum,
					blockType: bt,
					hash:      hashText(norm),
				})
			}
		}
	}
	return blocks, nil
}

// extractPDF parses PDF bytes into text blocks.
//
//   - forceOCR=true  : skip native/pdftotext, call OCR service directly (OCR mode).
//   - forceOCR=false : try native → pdftotext; if OCR enabled and 0 blocks found,
//     fall back to OCR automatically (AUTO mode). When ocrCfg.Enabled=false the
//     fallback is suppressed (PDF_TEXT mode).
func extractPDF(ctx context.Context, data []byte, ocrCfg OCRServiceConfig, forceOCR bool) ([]textBlock, error) {
	// OCR mode: skip text extraction entirely, go straight to VietOCR.
	if forceOCR {
		if !ocrCfg.Enabled {
			return nil, fmt.Errorf("chế độ OCR được chọn nhưng OCR service chưa được bật (enabled=false)")
		}
		ocrBlocks, err := callOCRService(ctx, ocrCfg, data)
		if err != nil {
			return nil, fmt.Errorf("OCR service lỗi: %w", err)
		}
		return ocrBlocks, nil
	}

	blocks, numPages, err := extractPDFNative(data)
	if err != nil {
		return nil, err
	}

	// Fall back to pdftotext when native parser yields very little content
	// relative to the number of pages (common for CIDFont / scanned PDFs).
	needsFallback := len(blocks) <= 1 || (numPages > 3 && len(blocks) < numPages/2)
	if needsFallback {
		if ptPath := findPdftotext(); ptPath != "" {
			if fbBlocks, fbErr := extractPDFWithPdftotext(ptPath, data); fbErr == nil && len(fbBlocks) > len(blocks) {
				blocks = fbBlocks
			}
		}
	}

	// AUTO mode OCR fallback: PDF is a pure scan with no text layer.
	if len(blocks) == 0 && ocrCfg.Enabled {
		ocrBlocks, ocrErr := callOCRService(ctx, ocrCfg, data)
		if ocrErr != nil {
			log.Printf("[OCR] fallback failed: %v", ocrErr)
		} else if len(ocrBlocks) > 0 {
			return ocrBlocks, nil
		}
	}

	return blocks, nil
}

// ---------- DOCX ----------

// docxXMLParagraph represents a <w:p> element in word/document.xml.
type docxXMLParagraph struct {
	Runs []struct {
		Text struct {
			Value string `xml:",chardata"`
		} `xml:"t"`
		// <w:br> marks line breaks
	} `xml:"r"`
}

// extractDOCX parses a DOCX (ZIP+XML) into text blocks.
func extractDOCX(data []byte) ([]textBlock, error) {
	zr, err := zip.NewReader(bytes.NewReader(data), int64(len(data)))
	if err != nil {
		return nil, fmt.Errorf("cannot read DOCX as zip: %w", err)
	}

	// Find word/document.xml
	var docXML io.ReadCloser
	for _, f := range zr.File {
		if f.Name == "word/document.xml" {
			docXML, err = f.Open()
			if err != nil {
				return nil, fmt.Errorf("cannot open word/document.xml: %w", err)
			}
			break
		}
	}
	if docXML == nil {
		return nil, fmt.Errorf("word/document.xml not found in DOCX")
	}
	defer docXML.Close()

	xmlData, err := io.ReadAll(docXML)
	if err != nil {
		return nil, fmt.Errorf("cannot read document.xml: %w", err)
	}

	// Use a streaming XML decoder to collect text from <w:p> paragraphs.
	// We also inspect <w:rFonts> inside <w:rPr> to detect legacy Vietnamese fonts
	// (TCVN3 / VNI) and convert their mis-encoded characters to proper Unicode.
	var blocks []textBlock
	dec := xml.NewDecoder(bytes.NewReader(xmlData))
	blockIdx := 0
	var currentPara strings.Builder
	inParagraph := false
	inRun := false
	inRPr := false      // inside <w:rPr> (run properties)
	currentFont := ""   // font name for the current run
	paraFont := ""      // paragraph-level font (from <w:pPr>/<w:rPr>)

	for {
		tok, err := dec.Token()
		if err == io.EOF {
			break
		}
		if err != nil {
			break
		}

		switch t := tok.(type) {
		case xml.StartElement:
			localName := t.Name.Local
			switch localName {
			case "p":
				inParagraph = true
				paraFont = ""
				currentPara.Reset()
			case "rPr":
				inRPr = true
			case "rFonts":
				// <w:rFonts w:ascii="FontName" w:hAnsi="FontName" ...>
				// Pick up the ASCII font name; fall back to hAnsi or cs.
				fontName := ""
				for _, attr := range t.Attr {
					if attr.Name.Local == "ascii" {
						fontName = attr.Value
						break
					}
				}
				if fontName == "" {
					for _, attr := range t.Attr {
						if attr.Name.Local == "hAnsi" || attr.Name.Local == "cs" {
							fontName = attr.Value
							break
						}
					}
				}
				if inRPr && inParagraph {
					if inRun {
						currentFont = fontName
					} else {
						// paragraph-level default font
						paraFont = fontName
					}
				}
			case "r":
				if inParagraph {
					inRun = true
					// Inherit paragraph font if no run-level font set yet.
					currentFont = paraFont
				}
			}
		case xml.EndElement:
			localName := t.Name.Local
			switch localName {
			case "rPr":
				inRPr = false
			case "r":
				inRun = false
				currentFont = ""
			case "p":
				if inParagraph {
					raw := currentPara.String()
					norm := normalizeText(raw)
					if len(norm) >= 5 {
						bt := blockTypeFromLine(norm, blockIdx == 0)
						blocks = append(blocks, textBlock{
							rawText:   raw,
							normText:  norm,
							pageNum:   0,
							blockType: bt,
							hash:      hashText(norm),
						})
						blockIdx++
					}
				}
				inParagraph = false
				inRun = false
				paraFont = ""
				currentFont = ""
			}
		case xml.CharData:
			if inRun {
				text := string(t)
				if enc := isLegacyVietFont(currentFont); enc != "" {
					text = convertLegacyVietText(text, enc)
				}
				currentPara.WriteString(text)
			}
		}
	}

	return blocks, nil
}

// extractTXT splits plain text into line-based blocks.
func extractTXT(data []byte) []textBlock {
	text := string(data)
	// Normalize line endings
	text = strings.ReplaceAll(text, "\r\n", "\n")
	text = strings.ReplaceAll(text, "\r", "\n")

	var blocks []textBlock
	paragraphs := strings.Split(text, "\n\n")
	for _, para := range paragraphs {
		norm := normalizeText(para)
		if len(norm) < 5 {
			continue
		}
		bt := blockTypeFromLine(norm, false)
		blocks = append(blocks, textBlock{
			rawText:   strings.TrimSpace(para),
			normText:  norm,
			pageNum:   0,
			blockType: bt,
			hash:      hashText(norm),
		})
	}
	// Fallback: line-by-line if no double-newlines found
	if len(blocks) == 0 {
		for _, line := range strings.Split(text, "\n") {
			norm := normalizeText(line)
			if len(norm) >= 5 {
				blocks = append(blocks, textBlock{
					rawText:   strings.TrimSpace(line),
					normText:  norm,
					pageNum:   0,
					blockType: coredata.IcpmsExtractedTextBlockTypeParagraph,
					hash:      hashText(norm),
				})
			}
		}
	}
	return blocks
}
