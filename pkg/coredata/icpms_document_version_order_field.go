// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

package coredata

import (
	"encoding"
	"fmt"

	"go.probo.inc/probo/pkg/page"
)

type (
	IcpmsDocumentVersionOrderField string
)

const (
	IcpmsDocumentVersionOrderFieldCreatedAt     IcpmsDocumentVersionOrderField = "CREATED_AT"
	IcpmsDocumentVersionOrderFieldUpdatedAt     IcpmsDocumentVersionOrderField = "UPDATED_AT"
	IcpmsDocumentVersionOrderFieldEffectiveDate IcpmsDocumentVersionOrderField = "EFFECTIVE_DATE"
	IcpmsDocumentVersionOrderFieldVersionCode   IcpmsDocumentVersionOrderField = "VERSION_CODE"
)

var (
	_ page.OrderField          = IcpmsDocumentVersionOrderField("")
	_ fmt.Stringer             = IcpmsDocumentVersionOrderField("")
	_ encoding.TextMarshaler   = IcpmsDocumentVersionOrderField("")
	_ encoding.TextUnmarshaler = (*IcpmsDocumentVersionOrderField)(nil)
)

func IcpmsDocumentVersionOrderFields() []IcpmsDocumentVersionOrderField {
	return []IcpmsDocumentVersionOrderField{
		IcpmsDocumentVersionOrderFieldCreatedAt,
		IcpmsDocumentVersionOrderFieldUpdatedAt,
		IcpmsDocumentVersionOrderFieldEffectiveDate,
		IcpmsDocumentVersionOrderFieldVersionCode,
	}
}

func (v IcpmsDocumentVersionOrderField) IsValid() bool {
	switch v {
	case
		IcpmsDocumentVersionOrderFieldCreatedAt,
		IcpmsDocumentVersionOrderFieldUpdatedAt,
		IcpmsDocumentVersionOrderFieldEffectiveDate,
		IcpmsDocumentVersionOrderFieldVersionCode:
		return true
	}

	return false
}

func (v IcpmsDocumentVersionOrderField) String() string {
	return string(v)
}

func (v IcpmsDocumentVersionOrderField) MarshalText() ([]byte, error) {
	return []byte(v.String()), nil
}

func (v *IcpmsDocumentVersionOrderField) UnmarshalText(text []byte) error {
	val := IcpmsDocumentVersionOrderField(text)
	if !val.IsValid() {
		return fmt.Errorf("invalid IcpmsDocumentVersionOrderField value: %q", string(text))
	}

	*v = val

	return nil
}

func (p IcpmsDocumentVersionOrderField) Column() string {
	switch p {
	case IcpmsDocumentVersionOrderFieldCreatedAt:
		return "created_at"
	case IcpmsDocumentVersionOrderFieldUpdatedAt:
		return "updated_at"
	case IcpmsDocumentVersionOrderFieldEffectiveDate:
		return "effective_date"
	case IcpmsDocumentVersionOrderFieldVersionCode:
		return "version_code"
	}

	panic(fmt.Sprintf("unsupported order by: %s", p))
}
