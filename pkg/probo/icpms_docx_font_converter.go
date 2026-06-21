// Copyright (c) 2025-2026 VATM ICPMS <sms@vatm.vn>.
//
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
// REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
// AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
// INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
// LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
// OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
// PERFORMANCE OF THIS SOFTWARE.

// Package probo provides utilities for converting legacy Vietnamese font encodings
// (TCVN3/ABC and VNI) to proper Unicode when extracting text from DOCX files.
//
// When older Vietnamese Word documents (using fonts like .VnTimes or VNI-Times)
// are saved as DOCX, the text bytes are stored using Windows-1252 interpretation
// instead of proper Unicode. This file corrects those characters run-by-run.

package probo

import "strings"

// isLegacyVietFont returns "TCVN3" for .Vn* fonts, "VNI" for VNI-* fonts,
// or "" if the font is not a known legacy Vietnamese encoding.
func isLegacyVietFont(name string) string {
	if strings.HasPrefix(name, "VNI-") || strings.HasPrefix(name, "VNI ") {
		return "VNI"
	}
	if strings.HasPrefix(name, ".Vn") {
		return "TCVN3"
	}
	return ""
}

// convertLegacyVietText converts text that was stored using a legacy Vietnamese
// font encoding to proper Unicode. encoding must be "TCVN3" or "VNI".
func convertLegacyVietText(text, encoding string) string {
	switch encoding {
	case "TCVN3":
		return applyRuneTable(text, tcvn3Table)
	case "VNI":
		return applyRuneTable(text, vniTable)
	}
	return text
}

func applyRuneTable(s string, table map[rune]rune) string {
	var b strings.Builder
	b.Grow(len(s) * 2)
	for _, r := range s {
		if mapped, ok := table[r]; ok {
			b.WriteRune(mapped)
		} else {
			b.WriteRune(r)
		}
	}
	return b.String()
}

// tcvn3Table maps Unicode runes (as they appear in DOCX XML when TCVN3 bytes are
// mis-interpreted as Windows-1252) to the correct Vietnamese Unicode characters.
//
// Source: GNU libiconv tcvn.h – the authoritative TCVN 5712:1993 conversion table.
//
// TCVN3 bytes 0x80–0x9F appear in XML as the Windows-1252 equivalents of those
// bytes; bytes 0xA0–0xFF appear directly as U+00A0–U+00FF (Latin-1 supplement).
var tcvn3Table = map[rune]rune{
	// ── 0x80–0x8F: Windows-1252 special chars ──────────────────────────────────
	'€': 'À', // € → À       (TCVN3 0x80)
	'‚': 'Ã', // ‚ → Ã       (TCVN3 0x82)
	'ƒ': 'Ạ', // ƒ → Ạ       (TCVN3 0x83)
	'„': 'Ằ', // „ → Ằ       (TCVN3 0x84)
	'…': 'Ắ', // … → Ắ       (TCVN3 0x85)
	'†': 'Ẵ', // † → Ẵ       (TCVN3 0x86)
	'‡': 'Ẳ', // ‡ → Ẳ       (TCVN3 0x87)
	'ˆ': 'Ặ', // ˆ → Ặ       (TCVN3 0x88)
	'‰': 'Ầ', // ‰ → Ầ       (TCVN3 0x89)
	'Š': 'Ấ', // Š → Ấ       (TCVN3 0x8A)
	'‹': 'Ẫ', // ‹ → Ẫ       (TCVN3 0x8B)
	'Œ': 'Ẩ', // Œ → Ẩ       (TCVN3 0x8C)
	'Ž': 'Ă', // Ž → Ă       (TCVN3 0x8E)

	// ── 0x90–0x9F: Windows-1252 special chars ──────────────────────────────────
	'‘': 'Ậ', // ' → Ậ       (TCVN3 0x91)
	'’': 'Ă', // ' → Ă  NOTE: 0x92 also maps to Ă in some tables; use Ă
	'“': 'Â', // " → Â       (TCVN3 0x93)
	'”': 'Đ', // " → Đ       (TCVN3 0x94)
	'•': 'È', // • → È       (TCVN3 0x95)
	'–': 'Ẹ', // – → Ẹ       (TCVN3 0x96)
	'—': 'Ẻ', // — → Ẻ       (TCVN3 0x97)
	'˜': 'Ẽ', // ˜ → Ẽ       (TCVN3 0x98)
	'™': 'Ề', // ™ → Ề       (TCVN3 0x99)
	'š': 'Ế', // š → Ế       (TCVN3 0x9A)
	'›': 'Ễ', // › → Ễ       (TCVN3 0x9B)
	'œ': 'Ị', // œ → Ị       (TCVN3 0x9C)
	'ž': 'Ĩ', // ž → Ĩ       (TCVN3 0x9E)
	'Ÿ': 'Í', // Ÿ → Í       (TCVN3 0x9F)

	// ── 0xA0–0xAF: Latin-1 supplement (U+00A0–U+00AF) ─────────────────────────
	' ': 'Î', // NBSP → Î    (TCVN3 0xA0)
	'¡': 'Ồ', // ¡ → Ồ       (TCVN3 0xA1)
	'¢': 'Ố', // ¢ → Ố       (TCVN3 0xA2)
	'£': 'Ỗ', // £ → Ỗ       (TCVN3 0xA3)
	'¤': 'Ổ', // ¤ → Ổ       (TCVN3 0xA4)
	'¥': 'Ộ', // ¥ → Ộ       (TCVN3 0xA5)
	'¦': 'Ơ', // ¦ → Ơ       (TCVN3 0xA6)
	'§': 'Ớ', // § → Ớ       (TCVN3 0xA7)
	'¨': 'Ờ', // ¨ → Ờ       (TCVN3 0xA8)
	'©': 'Ỡ', // © → Ỡ       (TCVN3 0xA9)
	'ª': 'Ở', // ª → Ở       (TCVN3 0xAA)
	'«': 'Ợ', // « → Ợ       (TCVN3 0xAB)
	'¬': 'Ò', // ¬ → Ò       (TCVN3 0xAC)
	'­': 'Ọ', // ­ → Ọ       (TCVN3 0xAD)
	'®': 'Ỏ', // ® → Ỏ       (TCVN3 0xAE)
	'¯': 'Õ', // ¯ → Õ       (TCVN3 0xAF)

	// ── 0xB0–0xBF ──────────────────────────────────────────────────────────────
	'°': 'Ô', // ° → Ô       (TCVN3 0xB0)
	'±': 'Ư', // ± → Ư       (TCVN3 0xB1)
	'²': 'Ừ', // ² → Ừ       (TCVN3 0xB2)
	'³': 'Ứ', // ³ → Ứ       (TCVN3 0xB3)
	'´': 'Ữ', // ´ → Ữ       (TCVN3 0xB4)
	'µ': 'Ử', // µ → Ử       (TCVN3 0xB5)
	'¶': 'Ự', // ¶ → Ự       (TCVN3 0xB6)
	'·': 'Ù', // · → Ù       (TCVN3 0xB7)
	'¸': 'Ụ', // ¸ → Ụ       (TCVN3 0xB8)
	'¹': 'Ủ', // ¹ → Ủ       (TCVN3 0xB9)
	'º': 'Ú', // º → Ú       (TCVN3 0xBA)
	'»': 'Ũ', // » → Ũ       (TCVN3 0xBB)
	'¼': 'Ỳ', // ¼ → Ỳ       (TCVN3 0xBC)
	'½': 'Ỵ', // ½ → Ỵ       (TCVN3 0xBD)
	'¾': 'Ỷ', // ¾ → Ỷ       (TCVN3 0xBE)
	'¿': 'Ỹ', // ¿ → Ỹ       (TCVN3 0xBF)

	// ── 0xC0–0xCF ──────────────────────────────────────────────────────────────
	'À': 'Ý', // À → Ý       (TCVN3 0xC0)
	'Á': 'à', // Á → à       (TCVN3 0xC1)
	'Â': 'ả', // Â → ả       (TCVN3 0xC2)
	'Ã': 'ã', // Ã → ã       (TCVN3 0xC3)
	'Ä': 'ạ', // Ä → ạ       (TCVN3 0xC4)
	'Å': 'ằ', // Å → ằ       (TCVN3 0xC5)
	'Æ': 'ắ', // Æ → ắ       (TCVN3 0xC6)
	'Ç': 'ẵ', // Ç → ẵ       (TCVN3 0xC7)
	'È': 'ẳ', // È → ẳ       (TCVN3 0xC8)
	'É': 'ặ', // É → ặ       (TCVN3 0xC9)
	'Ê': 'ầ', // Ê → ầ       (TCVN3 0xCA)
	'Ë': 'ấ', // Ë → ấ       (TCVN3 0xCB)
	'Ì': 'ẫ', // Ì → ẫ       (TCVN3 0xCC)
	'Í': 'ẩ', // Í → ẩ       (TCVN3 0xCD)
	'Î': 'ậ', // Î → ậ       (TCVN3 0xCE)
	'Ï': 'ă', // Ï → ă       (TCVN3 0xCF)

	// ── 0xD0–0xDF ──────────────────────────────────────────────────────────────
	'Ð': 'â', // Ð → â       (TCVN3 0xD0)
	'Ñ': 'đ', // Ñ → đ       (TCVN3 0xD1)
	'Ò': 'è', // Ò → è       (TCVN3 0xD2)
	'Ó': 'ẹ', // Ó → ẹ       (TCVN3 0xD3)
	'Ô': 'ẻ', // Ô → ẻ       (TCVN3 0xD4)
	'Õ': 'ẽ', // Õ → ẽ       (TCVN3 0xD5)
	'Ö': 'ề', // Ö → ề       (TCVN3 0xD6)
	'×': 'ế', // × → ế       (TCVN3 0xD7)
	'Ø': 'ễ', // Ø → ễ       (TCVN3 0xD8)
	'Ù': 'ể', // Ù → ể       (TCVN3 0xD9)
	'Ú': 'ệ', // Ú → ệ       (TCVN3 0xDA)
	'Û': 'ê', // Û → ê       (TCVN3 0xDB)
	'Ü': 'ì', // Ü → ì       (TCVN3 0xDC)
	'Ý': 'ị', // Ý → ị       (TCVN3 0xDD)
	'Þ': 'ỉ', // Þ → ỉ       (TCVN3 0xDE)
	'ß': 'ĩ', // ß → ĩ       (TCVN3 0xDF)

	// ── 0xE0–0xEF ──────────────────────────────────────────────────────────────
	'à': 'í', // à → í       (TCVN3 0xE0)
	'á': 'ồ', // á → ồ       (TCVN3 0xE1)
	'â': 'ố', // â → ố       (TCVN3 0xE2)
	'ã': 'ỗ', // ã → ỗ       (TCVN3 0xE3)
	'ä': 'ổ', // ä → ổ       (TCVN3 0xE4)
	'å': 'ộ', // å → ộ       (TCVN3 0xE5)
	'æ': 'ơ', // æ → ơ       (TCVN3 0xE6)
	'ç': 'ớ', // ç → ớ       (TCVN3 0xE7)
	'è': 'ờ', // è → ờ       (TCVN3 0xE8)
	'é': 'ỡ', // é → ỡ       (TCVN3 0xE9)
	'ê': 'ở', // ê → ở       (TCVN3 0xEA)
	'ë': 'ợ', // ë → ợ       (TCVN3 0xEB)
	'ì': 'ò', // ì → ò       (TCVN3 0xEC)
	'í': 'ọ', // í → ọ       (TCVN3 0xED)
	'î': 'ỏ', // î → ỏ       (TCVN3 0xEE)
	'ï': 'õ', // ï → õ       (TCVN3 0xEF)

	// ── 0xF0–0xFF ──────────────────────────────────────────────────────────────
	'ð': 'ô', // ð → ô       (TCVN3 0xF0)
	'ñ': 'ư', // ñ → ư       (TCVN3 0xF1)
	'ò': 'ừ', // ò → ừ       (TCVN3 0xF2)
	'ó': 'ứ', // ó → ứ       (TCVN3 0xF3)
	'ô': 'ữ', // ô → ữ       (TCVN3 0xF4)
	'õ': 'ử', // õ → ử       (TCVN3 0xF5)
	'ö': 'ự', // ö → ự       (TCVN3 0xF6)
	'÷': 'ù', // ÷ → ù       (TCVN3 0xF7)
	'ø': 'ụ', // ø → ụ       (TCVN3 0xF8)
	'ù': 'ủ', // ù → ủ       (TCVN3 0xF9)
	'ú': 'ú', // ú → ú       (TCVN3 0xFA — identity)
	'û': 'ũ', // û → ũ       (TCVN3 0xFB)
	'ü': 'ỳ', // ü → ỳ       (TCVN3 0xFC)
	'ý': 'ỵ', // ý → ỵ       (TCVN3 0xFD)
	'þ': 'ỷ', // þ → ỷ       (TCVN3 0xFE)
	'ÿ': 'ỹ', // ÿ → ỹ       (TCVN3 0xFF)
}

// vniTable maps Unicode runes (as they appear in DOCX XML when VNI bytes are
// mis-interpreted as Windows-1252) to the correct Vietnamese Unicode characters.
//
// VNI encoding was developed by VNI Software. Bytes 0x80–0xBF encode uppercase
// Vietnamese precomposed characters; 0xC0–0xFF encode lowercase.
var vniTable = map[rune]rune{
	// ── 0x80–0x8F (Windows-1252 special chars for VNI uppercase) ───────────────
	'€': 'Ạ', // € → Ạ  (VNI 0x80)
	'‚': 'Ả', // ‚ → Ả  (VNI 0x82)
	'ƒ': 'Ấ', // ƒ → Ấ  (VNI 0x83)
	'„': 'Ầ', // „ → Ầ  (VNI 0x84)
	'…': 'Ẩ', // … → Ẩ  (VNI 0x85)
	'†': 'Ẫ', // † → Ẫ  (VNI 0x86)
	'‡': 'Ậ', // ‡ → Ậ  (VNI 0x87)
	'ˆ': 'Ắ', // ˆ → Ắ  (VNI 0x88)
	'‰': 'Ằ', // ‰ → Ằ  (VNI 0x89)
	'Š': 'Ẳ', // Š → Ẳ  (VNI 0x8A)
	'‹': 'Ẵ', // ‹ → Ẵ  (VNI 0x8B)
	'Œ': 'Ặ', // Œ → Ặ  (VNI 0x8C)
	'Ž': 'Ẹ', // Ž → Ẹ  (VNI 0x8E)

	// ── 0x90–0x9F ──────────────────────────────────────────────────────────────
	'‘': 'Ẻ', // ' → Ẻ  (VNI 0x91)
	'’': 'Ẽ', // ' → Ẽ  (VNI 0x92)
	'“': 'Ế', // " → Ế  (VNI 0x93)
	'”': 'Ề', // " → Ề  (VNI 0x94)
	'•': 'Ể', // • → Ể  (VNI 0x95)
	'–': 'Ễ', // – → Ễ  (VNI 0x96)
	'—': 'Ệ', // — → Ệ  (VNI 0x97)
	'˜': 'Ỉ', // ˜ → Ỉ  (VNI 0x98)
	'™': 'Ị', // ™ → Ị  (VNI 0x99)
	'š': 'Ọ', // š → Ọ  (VNI 0x9A)
	'›': 'Ỏ', // › → Ỏ  (VNI 0x9B)
	'œ': 'Ố', // œ → Ố  (VNI 0x9C)
	'ž': 'Ồ', // ž → Ồ  (VNI 0x9E)
	'Ÿ': 'Ổ', // Ÿ → Ổ  (VNI 0x9F)

	// ── 0xA0–0xB1: Latin-1 supplement – uppercase Vietnamese ───────────────────
	' ': 'Ỗ', // NBSP → Ỗ  (VNI 0xA0)
	'¡': 'Ộ', // ¡ → Ộ    (VNI 0xA1)
	'¢': 'Ớ', // ¢ → Ớ    (VNI 0xA2)
	'£': 'Ờ', // £ → Ờ    (VNI 0xA3)
	'¤': 'Ở', // ¤ → Ở    (VNI 0xA4)
	'¥': 'Ỡ', // ¥ → Ỡ    (VNI 0xA5)
	'¦': 'Ợ', // ¦ → Ợ    (VNI 0xA6)
	'§': 'Ụ', // § → Ụ    (VNI 0xA7)
	'¨': 'Ủ', // ¨ → Ủ    (VNI 0xA8)
	'©': 'Ứ', // © → Ứ    (VNI 0xA9)
	'ª': 'Ừ', // ª → Ừ    (VNI 0xAA)
	'«': 'Ử', // « → Ử    (VNI 0xAB)
	'¬': 'Ữ', // ¬ → Ữ    (VNI 0xAC)
	'­': 'Ự', // ­ → Ự    (VNI 0xAD)
	'®': 'Ỳ', // ® → Ỳ    (VNI 0xAE)
	'¯': 'Ỷ', // ¯ → Ỷ    (VNI 0xAF)
	'°': 'Ỵ', // ° → Ỵ    (VNI 0xB0)
	'±': 'Ỹ', // ± → Ỹ    (VNI 0xB1)

	// ── VNI uppercase base letters ─────────────────────────────────────────────
	'µ': 'Ơ', // µ → Ơ    (VNI 0xB5)
	'¶': 'Ư', // ¶ → Ư    (VNI 0xB6)
	'·': 'Ă', // · → Ă    (VNI 0xB7)
	'¸': 'Â', // ¸ → Â    (VNI 0xB8)
	'¹': 'Ê', // ¹ → Ê    (VNI 0xB9)
	'º': 'Ô', // º → Ô    (VNI 0xBA)
	'»': 'Đ', // » → Đ    (VNI 0xBB)

	// ── 0xC0–0xFF: lowercase Vietnamese precomposed ────────────────────────────
	'À': 'ạ', // À → ạ    (VNI 0xC0)
	'Á': 'ả', // Á → ả    (VNI 0xC1)
	'Â': 'ấ', // Â → ấ    (VNI 0xC2)
	'Ã': 'ầ', // Ã → ầ    (VNI 0xC3)
	'Ä': 'ẩ', // Ä → ẩ    (VNI 0xC4)
	'Å': 'ẫ', // Å → ẫ    (VNI 0xC5)
	'Æ': 'ậ', // Æ → ậ    (VNI 0xC6)
	'Ç': 'ắ', // Ç → ắ    (VNI 0xC7)
	'È': 'ằ', // È → ằ    (VNI 0xC8)
	'É': 'ẳ', // É → ẳ    (VNI 0xC9)
	'Ê': 'ẵ', // Ê → ẵ    (VNI 0xCA)
	'Ë': 'ặ', // Ë → ặ    (VNI 0xCB)
	'Ì': 'ẹ', // Ì → ẹ    (VNI 0xCC)
	'Í': 'ẻ', // Í → ẻ    (VNI 0xCD)
	'Î': 'ẽ', // Î → ẽ    (VNI 0xCE)
	'Ï': 'ế', // Ï → ế    (VNI 0xCF)
	'Ð': 'ề', // Ð → ề    (VNI 0xD0)
	'Ñ': 'ể', // Ñ → ể    (VNI 0xD1)
	'Ò': 'ễ', // Ò → ễ    (VNI 0xD2)
	'Ó': 'ệ', // Ó → ệ    (VNI 0xD3)
	'Ô': 'ỉ', // Ô → ỉ    (VNI 0xD4)
	'Õ': 'ị', // Õ → ị    (VNI 0xD5)
	'Ö': 'ọ', // Ö → ọ    (VNI 0xD6)
	'×': 'ỏ', // × → ỏ    (VNI 0xD7)
	'Ø': 'ố', // Ø → ố    (VNI 0xD8)
	'Ù': 'ồ', // Ù → ồ    (VNI 0xD9)
	'Ú': 'ổ', // Ú → ổ    (VNI 0xDA)
	'Û': 'ỗ', // Û → ỗ    (VNI 0xDB)
	'Ü': 'ộ', // Ü → ộ    (VNI 0xDC)
	'Ý': 'ớ', // Ý → ớ    (VNI 0xDD)
	'Þ': 'ờ', // Þ → ờ    (VNI 0xDE)
	'ß': 'ở', // ß → ở    (VNI 0xDF)
	'à': 'ỡ', // à → ỡ    (VNI 0xE0)
	'á': 'ợ', // á → ợ    (VNI 0xE1)
	'â': 'ụ', // â → ụ    (VNI 0xE2)
	'ã': 'ủ', // ã → ủ    (VNI 0xE3)
	'ä': 'ứ', // ä → ứ    (VNI 0xE4)
	'å': 'ừ', // å → ừ    (VNI 0xE5)
	'æ': 'ử', // æ → ử    (VNI 0xE6)
	'ç': 'ữ', // ç → ữ    (VNI 0xE7)
	'è': 'ự', // è → ự    (VNI 0xE8)
	'é': 'ỳ', // é → ỳ    (VNI 0xE9)
	'ê': 'ỵ', // ê → ỵ    (VNI 0xEA)
	'ë': 'ỷ', // ë → ỷ    (VNI 0xEB)
	'ì': 'ỹ', // ì → ỹ    (VNI 0xEC)
	// VNI lowercase base letters
	'ï': 'ơ', // ï → ơ    (VNI 0xEF)
	'ð': 'ư', // ð → ư    (VNI 0xF0)
	'ñ': 'ă', // ñ → ă    (VNI 0xF1)
	'ò': 'â', // ò → â    (VNI 0xF2)
	'ó': 'ê', // ó → ê    (VNI 0xF3)
	'ô': 'ô', // ô → ô    (VNI 0xF4 — identity)
	'õ': 'đ', // õ → đ    (VNI 0xF5)
}
