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
	"fmt"
	"io"
)

type IcpmsDocumentFileOrderField string

const (
	IcpmsDocumentFileOrderFieldCreatedAt IcpmsDocumentFileOrderField = "CREATED_AT"
)

func (s IcpmsDocumentFileOrderField) IsValid() bool {
	switch s {
	case IcpmsDocumentFileOrderFieldCreatedAt:
		return true
	}

	return false
}

func (s IcpmsDocumentFileOrderField) String() string {
	return string(s)
}

func (s *IcpmsDocumentFileOrderField) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*s = IcpmsDocumentFileOrderField(str)

	if !s.IsValid() {
		return fmt.Errorf("%s is not a valid IcpmsDocumentFileOrderField", str)
	}

	return nil
}

func (s IcpmsDocumentFileOrderField) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, "\"", s.String(), "\"")
}

func (s IcpmsDocumentFileOrderField) Column() string {
	switch s {
	case IcpmsDocumentFileOrderFieldCreatedAt:
		return "created_at"
	}

	return ""
}
