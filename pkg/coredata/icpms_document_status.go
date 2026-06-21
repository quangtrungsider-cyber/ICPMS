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

package coredata

import (
	"encoding"
	"fmt"
)

type (
	IcpmsDocumentStatus string
)

const (
	IcpmsDocumentStatusDraft       IcpmsDocumentStatus = "DRAFT"
	IcpmsDocumentStatusActive      IcpmsDocumentStatus = "ACTIVE"
	IcpmsDocumentStatusUnderReview IcpmsDocumentStatus = "UNDER_REVIEW"
	IcpmsDocumentStatusSuperseded  IcpmsDocumentStatus = "SUPERSEDED"
	IcpmsDocumentStatusArchived    IcpmsDocumentStatus = "ARCHIVED"
	IcpmsDocumentStatusDeleted     IcpmsDocumentStatus = "DELETED"
)

var (
	_ fmt.Stringer             = IcpmsDocumentStatus("")
	_ encoding.TextMarshaler   = IcpmsDocumentStatus("")
	_ encoding.TextUnmarshaler = (*IcpmsDocumentStatus)(nil)
)

func IcpmsDocumentStatuses() []IcpmsDocumentStatus {
	return []IcpmsDocumentStatus{
		IcpmsDocumentStatusDraft,
		IcpmsDocumentStatusActive,
		IcpmsDocumentStatusUnderReview,
		IcpmsDocumentStatusSuperseded,
		IcpmsDocumentStatusArchived,
		IcpmsDocumentStatusDeleted,
	}
}

func (v IcpmsDocumentStatus) IsValid() bool {
	switch v {
	case
		IcpmsDocumentStatusDraft,
		IcpmsDocumentStatusActive,
		IcpmsDocumentStatusUnderReview,
		IcpmsDocumentStatusSuperseded,
		IcpmsDocumentStatusArchived,
		IcpmsDocumentStatusDeleted:
		return true
	}

	return false
}

func (v IcpmsDocumentStatus) String() string {
	return string(v)
}

func (v IcpmsDocumentStatus) MarshalText() ([]byte, error) {
	return []byte(v.String()), nil
}

func (v *IcpmsDocumentStatus) UnmarshalText(text []byte) error {
	val := IcpmsDocumentStatus(text)
	if !val.IsValid() {
		return fmt.Errorf("invalid IcpmsDocumentStatus value: %q", string(text))
	}

	*v = val

	return nil
}
