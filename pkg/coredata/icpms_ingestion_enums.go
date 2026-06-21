// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package coredata

import (
	"fmt"
	"io"
	"strconv"
)

type IcpmsIngestionExtractionMode string

const (
	IcpmsIngestionExtractionModeAuto      IcpmsIngestionExtractionMode = "AUTO"
	IcpmsIngestionExtractionModePdfText   IcpmsIngestionExtractionMode = "PDF_TEXT"
	IcpmsIngestionExtractionModeOCR       IcpmsIngestionExtractionMode = "OCR"
	IcpmsIngestionExtractionModeDocxText  IcpmsIngestionExtractionMode = "DOCX_TEXT"
	IcpmsIngestionExtractionModeTxtText   IcpmsIngestionExtractionMode = "TXT_TEXT"
	IcpmsIngestionExtractionModeDocLegacy IcpmsIngestionExtractionMode = "DOC_LEGACY"
)

func (e IcpmsIngestionExtractionMode) IsValid() bool {
	switch e {
	case IcpmsIngestionExtractionModeAuto, IcpmsIngestionExtractionModePdfText, IcpmsIngestionExtractionModeOCR, IcpmsIngestionExtractionModeDocxText, IcpmsIngestionExtractionModeTxtText, IcpmsIngestionExtractionModeDocLegacy:
		return true
	}
	return false
}

func (e IcpmsIngestionExtractionMode) String() string {
	return string(e)
}

func (e *IcpmsIngestionExtractionMode) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = IcpmsIngestionExtractionMode(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid IcpmsIngestionExtractionMode", str)
	}
	return nil
}

func (e IcpmsIngestionExtractionMode) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type IcpmsIngestionJobType string

const (
	IcpmsIngestionJobTypeTextExtraction IcpmsIngestionJobType = "TEXT_EXTRACTION"
	IcpmsIngestionJobTypeReExtraction   IcpmsIngestionJobType = "RE_EXTRACTION"
	IcpmsIngestionJobTypeValidationOnly IcpmsIngestionJobType = "VALIDATION_ONLY"
)

func (e IcpmsIngestionJobType) IsValid() bool {
	switch e {
	case IcpmsIngestionJobTypeTextExtraction, IcpmsIngestionJobTypeReExtraction, IcpmsIngestionJobTypeValidationOnly:
		return true
	}
	return false
}

func (e IcpmsIngestionJobType) String() string {
	return string(e)
}

func (e *IcpmsIngestionJobType) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = IcpmsIngestionJobType(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid IcpmsIngestionJobType", str)
	}
	return nil
}

func (e IcpmsIngestionJobType) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type IcpmsIngestionJobStatus string

const (
	IcpmsIngestionJobStatusQueued    IcpmsIngestionJobStatus = "QUEUED"
	IcpmsIngestionJobStatusRunning   IcpmsIngestionJobStatus = "RUNNING"
	IcpmsIngestionJobStatusCompleted IcpmsIngestionJobStatus = "COMPLETED"
	IcpmsIngestionJobStatusFailed    IcpmsIngestionJobStatus = "FAILED"
	IcpmsIngestionJobStatusCancelled IcpmsIngestionJobStatus = "CANCELLED"
	IcpmsIngestionJobStatusPartial   IcpmsIngestionJobStatus = "PARTIAL"
)

func (e IcpmsIngestionJobStatus) IsValid() bool {
	switch e {
	case IcpmsIngestionJobStatusQueued, IcpmsIngestionJobStatusRunning, IcpmsIngestionJobStatusCompleted, IcpmsIngestionJobStatusFailed, IcpmsIngestionJobStatusCancelled, IcpmsIngestionJobStatusPartial:
		return true
	}
	return false
}

func (e IcpmsIngestionJobStatus) String() string {
	return string(e)
}

func (e *IcpmsIngestionJobStatus) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = IcpmsIngestionJobStatus(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid IcpmsIngestionJobStatus", str)
	}
	return nil
}

func (e IcpmsIngestionJobStatus) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type IcpmsExtractedTextBlockType string

const (
	IcpmsExtractedTextBlockTypePage      IcpmsExtractedTextBlockType = "PAGE"
	IcpmsExtractedTextBlockTypeParagraph IcpmsExtractedTextBlockType = "PARAGRAPH"
	IcpmsExtractedTextBlockTypeTable     IcpmsExtractedTextBlockType = "TABLE"
	IcpmsExtractedTextBlockTypeHeading   IcpmsExtractedTextBlockType = "HEADING"
	IcpmsExtractedTextBlockTypeFootnote  IcpmsExtractedTextBlockType = "FOOTNOTE"
	IcpmsExtractedTextBlockTypeUnknown   IcpmsExtractedTextBlockType = "UNKNOWN"
)

func (e IcpmsExtractedTextBlockType) IsValid() bool {
	switch e {
	case IcpmsExtractedTextBlockTypePage, IcpmsExtractedTextBlockTypeParagraph, IcpmsExtractedTextBlockTypeTable, IcpmsExtractedTextBlockTypeHeading, IcpmsExtractedTextBlockTypeFootnote, IcpmsExtractedTextBlockTypeUnknown:
		return true
	}
	return false
}

func (e IcpmsExtractedTextBlockType) String() string {
	return string(e)
}

func (e *IcpmsExtractedTextBlockType) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = IcpmsExtractedTextBlockType(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid IcpmsExtractedTextBlockType", str)
	}
	return nil
}

func (e IcpmsExtractedTextBlockType) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}
