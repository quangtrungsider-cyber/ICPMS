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
	IcpmsDocumentPriority string
)

const (
	IcpmsDocumentPriorityHigh   IcpmsDocumentPriority = "HIGH"
	IcpmsDocumentPriorityMedium IcpmsDocumentPriority = "MEDIUM"
	IcpmsDocumentPriorityLow    IcpmsDocumentPriority = "LOW"
)

var (
	_ fmt.Stringer             = IcpmsDocumentPriority("")
	_ encoding.TextMarshaler   = IcpmsDocumentPriority("")
	_ encoding.TextUnmarshaler = (*IcpmsDocumentPriority)(nil)
)

func IcpmsDocumentPriorities() []IcpmsDocumentPriority {
	return []IcpmsDocumentPriority{
		IcpmsDocumentPriorityHigh,
		IcpmsDocumentPriorityMedium,
		IcpmsDocumentPriorityLow,
	}
}

func (v IcpmsDocumentPriority) IsValid() bool {
	switch v {
	case
		IcpmsDocumentPriorityHigh,
		IcpmsDocumentPriorityMedium,
		IcpmsDocumentPriorityLow:
		return true
	}

	return false
}

func (v IcpmsDocumentPriority) String() string {
	return string(v)
}

func (v IcpmsDocumentPriority) MarshalText() ([]byte, error) {
	return []byte(v.String()), nil
}

func (v *IcpmsDocumentPriority) UnmarshalText(text []byte) error {
	val := IcpmsDocumentPriority(text)
	if !val.IsValid() {
		return fmt.Errorf("invalid IcpmsDocumentPriority value: %q", string(text))
	}

	*v = val

	return nil
}
