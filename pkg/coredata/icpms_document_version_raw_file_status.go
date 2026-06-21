// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package coredata

import (
	"database/sql/driver"
	"fmt"
)

type IcpmsDocumentVersionRawFileStatus string

const (
	IcpmsDocumentVersionRawFileStatusNotUploaded IcpmsDocumentVersionRawFileStatus = "NOT_UPLOADED"
	IcpmsDocumentVersionRawFileStatusUploaded    IcpmsDocumentVersionRawFileStatus = "UPLOADED"
	IcpmsDocumentVersionRawFileStatusProcessing  IcpmsDocumentVersionRawFileStatus = "PROCESSING"
	IcpmsDocumentVersionRawFileStatusFailed      IcpmsDocumentVersionRawFileStatus = "FAILED"
)

var AllIcpmsDocumentVersionRawFileStatuses = []IcpmsDocumentVersionRawFileStatus{
	IcpmsDocumentVersionRawFileStatusNotUploaded,
	IcpmsDocumentVersionRawFileStatusUploaded,
	IcpmsDocumentVersionRawFileStatusProcessing,
	IcpmsDocumentVersionRawFileStatusFailed,
}

func (s *IcpmsDocumentVersionRawFileStatus) Scan(value any) error {
	sv, err := driver.String.ConvertValue(value)
	if err != nil {
		return fmt.Errorf("cannot scan value: %w", err)
	}

	switch v := sv.(type) {
	case []byte:
		*s = IcpmsDocumentVersionRawFileStatus(v)
	case string:
		*s = IcpmsDocumentVersionRawFileStatus(v)
	default:
		return fmt.Errorf("cannot scan type %T into IcpmsDocumentVersionRawFileStatus", value)
	}

	return nil
}

func (s IcpmsDocumentVersionRawFileStatus) Value() (driver.Value, error) {
	return string(s), nil
}

func (s IcpmsDocumentVersionRawFileStatus) IsValid() bool {
	switch s {
	case IcpmsDocumentVersionRawFileStatusNotUploaded, IcpmsDocumentVersionRawFileStatusUploaded, IcpmsDocumentVersionRawFileStatusProcessing, IcpmsDocumentVersionRawFileStatusFailed:
		return true
	}
	return false
}
