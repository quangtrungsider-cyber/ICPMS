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

type IcpmsDocumentFileStatus string

const (
	IcpmsDocumentFileStatusUploaded IcpmsDocumentFileStatus = "UPLOADED"
	IcpmsDocumentFileStatusFailed   IcpmsDocumentFileStatus = "FAILED"
	IcpmsDocumentFileStatusDeleted  IcpmsDocumentFileStatus = "DELETED"
)

func (s IcpmsDocumentFileStatus) IsValid() bool {
	switch s {
	case IcpmsDocumentFileStatusUploaded,
		IcpmsDocumentFileStatusFailed,
		IcpmsDocumentFileStatusDeleted:
		return true
	}

	return false
}

func (s IcpmsDocumentFileStatus) String() string {
	return string(s)
}

func (s *IcpmsDocumentFileStatus) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*s = IcpmsDocumentFileStatus(str)

	if !s.IsValid() {
		return fmt.Errorf("%s is not a valid IcpmsDocumentFileStatus", str)
	}

	return nil
}

func (s IcpmsDocumentFileStatus) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, "\"", s.String(), "\"")
}
