// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package coredata

import (
	"database/sql/driver"
	"fmt"
)

type IcpmsDocumentVersionStatus string

const (
	IcpmsDocumentVersionStatusDraft      IcpmsDocumentVersionStatus = "DRAFT"
	IcpmsDocumentVersionStatusCurrent    IcpmsDocumentVersionStatus = "CURRENT"
	IcpmsDocumentVersionStatusEffective  IcpmsDocumentVersionStatus = "EFFECTIVE"
	IcpmsDocumentVersionStatusSuperseded IcpmsDocumentVersionStatus = "SUPERSEDED"
	IcpmsDocumentVersionStatusExpired    IcpmsDocumentVersionStatus = "EXPIRED"
	IcpmsDocumentVersionStatusArchived   IcpmsDocumentVersionStatus = "ARCHIVED"
	IcpmsDocumentVersionStatusDeleted    IcpmsDocumentVersionStatus = "DELETED"
)

var AllIcpmsDocumentVersionStatuses = []IcpmsDocumentVersionStatus{
	IcpmsDocumentVersionStatusDraft,
	IcpmsDocumentVersionStatusCurrent,
	IcpmsDocumentVersionStatusEffective,
	IcpmsDocumentVersionStatusSuperseded,
	IcpmsDocumentVersionStatusExpired,
	IcpmsDocumentVersionStatusArchived,
	IcpmsDocumentVersionStatusDeleted,
}

func (s *IcpmsDocumentVersionStatus) Scan(value any) error {
	sv, err := driver.String.ConvertValue(value)
	if err != nil {
		return fmt.Errorf("cannot scan value: %w", err)
	}

	switch v := sv.(type) {
	case []byte:
		*s = IcpmsDocumentVersionStatus(v)
	case string:
		*s = IcpmsDocumentVersionStatus(v)
	default:
		return fmt.Errorf("cannot scan type %T into IcpmsDocumentVersionStatus", value)
	}

	return nil
}

func (s IcpmsDocumentVersionStatus) Value() (driver.Value, error) {
	return string(s), nil
}

func (s IcpmsDocumentVersionStatus) IsValid() bool {
	switch s {
	case IcpmsDocumentVersionStatusDraft, IcpmsDocumentVersionStatusCurrent, IcpmsDocumentVersionStatusEffective, IcpmsDocumentVersionStatusSuperseded, IcpmsDocumentVersionStatusExpired, IcpmsDocumentVersionStatusArchived, IcpmsDocumentVersionStatusDeleted:
		return true
	}
	return false
}
