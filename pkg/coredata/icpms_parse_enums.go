// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package coredata

import (
	"fmt"
	"io"
	"strconv"
)

type IcpmsParseJobParserType string

const (
	IcpmsParseJobParserTypeVietnamese  IcpmsParseJobParserType = "VIETNAMESE"
	IcpmsParseJobParserTypeIcaoEnglish IcpmsParseJobParserType = "ICAO_ENGLISH"
)

func (e IcpmsParseJobParserType) IsValid() bool {
	switch e {
	case IcpmsParseJobParserTypeVietnamese, IcpmsParseJobParserTypeIcaoEnglish:
		return true
	}
	return false
}

func (e IcpmsParseJobParserType) String() string {
	return string(e)
}

func (e *IcpmsParseJobParserType) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}
	*e = IcpmsParseJobParserType(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid IcpmsParseJobParserType", str)
	}
	return nil
}

func (e IcpmsParseJobParserType) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type IcpmsParseJobStatus string

const (
	IcpmsParseJobStatusPending   IcpmsParseJobStatus = "PENDING"
	IcpmsParseJobStatusRunning   IcpmsParseJobStatus = "RUNNING"
	IcpmsParseJobStatusCompleted IcpmsParseJobStatus = "COMPLETED"
	IcpmsParseJobStatusFailed    IcpmsParseJobStatus = "FAILED"
)

func (e IcpmsParseJobStatus) IsValid() bool {
	switch e {
	case IcpmsParseJobStatusPending, IcpmsParseJobStatusRunning, IcpmsParseJobStatusCompleted, IcpmsParseJobStatusFailed:
		return true
	}
	return false
}

func (e IcpmsParseJobStatus) String() string {
	return string(e)
}

func (e *IcpmsParseJobStatus) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}
	*e = IcpmsParseJobStatus(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid IcpmsParseJobStatus", str)
	}
	return nil
}

func (e IcpmsParseJobStatus) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type IcpmsDocumentSectionType string

const (
	IcpmsDocumentSectionTypePart         IcpmsDocumentSectionType = "PART"
	IcpmsDocumentSectionTypeChapter      IcpmsDocumentSectionType = "CHAPTER"
	IcpmsDocumentSectionTypeSection      IcpmsDocumentSectionType = "SECTION"
	IcpmsDocumentSectionTypeSubsection   IcpmsDocumentSectionType = "SUBSECTION"
	IcpmsDocumentSectionTypeArticle      IcpmsDocumentSectionType = "ARTICLE"
	IcpmsDocumentSectionTypeClause       IcpmsDocumentSectionType = "CLAUSE"
	IcpmsDocumentSectionTypePoint        IcpmsDocumentSectionType = "POINT"
	IcpmsDocumentSectionTypeAppendix     IcpmsDocumentSectionType = "APPENDIX"
	IcpmsDocumentSectionTypeAttachment   IcpmsDocumentSectionType = "ATTACHMENT"
	IcpmsDocumentSectionTypeParagraph    IcpmsDocumentSectionType = "PARAGRAPH"
	IcpmsDocumentSectionTypeSubparagraph IcpmsDocumentSectionType = "SUBPARAGRAPH"
	IcpmsDocumentSectionTypeTable        IcpmsDocumentSectionType = "TABLE"
	IcpmsDocumentSectionTypeFigure       IcpmsDocumentSectionType = "FIGURE"
	IcpmsDocumentSectionTypeNote         IcpmsDocumentSectionType = "NOTE"
	IcpmsDocumentSectionTypeExample      IcpmsDocumentSectionType = "EXAMPLE"
	IcpmsDocumentSectionTypeDefinition   IcpmsDocumentSectionType = "DEFINITION"
	IcpmsDocumentSectionTypeUnknown      IcpmsDocumentSectionType = "UNKNOWN"
)

func (e IcpmsDocumentSectionType) IsValid() bool {
	switch e {
	case IcpmsDocumentSectionTypePart, IcpmsDocumentSectionTypeChapter, IcpmsDocumentSectionTypeSection,
		IcpmsDocumentSectionTypeSubsection, IcpmsDocumentSectionTypeArticle, IcpmsDocumentSectionTypeClause,
		IcpmsDocumentSectionTypePoint, IcpmsDocumentSectionTypeAppendix, IcpmsDocumentSectionTypeAttachment,
		IcpmsDocumentSectionTypeParagraph, IcpmsDocumentSectionTypeSubparagraph, IcpmsDocumentSectionTypeTable,
		IcpmsDocumentSectionTypeFigure, IcpmsDocumentSectionTypeNote, IcpmsDocumentSectionTypeExample,
		IcpmsDocumentSectionTypeDefinition, IcpmsDocumentSectionTypeUnknown:
		return true
	}
	return false
}

func (e IcpmsDocumentSectionType) String() string {
	return string(e)
}

func (e *IcpmsDocumentSectionType) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}
	*e = IcpmsDocumentSectionType(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid IcpmsDocumentSectionType", str)
	}
	return nil
}

func (e IcpmsDocumentSectionType) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

func (e IcpmsDocumentSectionType) DepthLevel() int {
	switch e {
	case IcpmsDocumentSectionTypePart, IcpmsDocumentSectionTypeAppendix, IcpmsDocumentSectionTypeAttachment:
		return 0
	case IcpmsDocumentSectionTypeChapter:
		return 1
	case IcpmsDocumentSectionTypeSection:
		return 2
	case IcpmsDocumentSectionTypeSubsection:
		return 3
	case IcpmsDocumentSectionTypeArticle, IcpmsDocumentSectionTypeParagraph:
		return 4
	case IcpmsDocumentSectionTypeClause, IcpmsDocumentSectionTypeSubparagraph:
		return 5
	case IcpmsDocumentSectionTypePoint:
		return 6
	default:
		return 99
	}
}
