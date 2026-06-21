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
	IcpmsDocumentApplicability string
)

const (
	IcpmsDocumentApplicabilityYes    IcpmsDocumentApplicability = "YES"
	IcpmsDocumentApplicabilityNo     IcpmsDocumentApplicability = "NO"
	IcpmsDocumentApplicabilityReview IcpmsDocumentApplicability = "REVIEW"
)

var (
	_ fmt.Stringer             = IcpmsDocumentApplicability("")
	_ encoding.TextMarshaler   = IcpmsDocumentApplicability("")
	_ encoding.TextUnmarshaler = (*IcpmsDocumentApplicability)(nil)
)

func IcpmsDocumentApplicabilities() []IcpmsDocumentApplicability {
	return []IcpmsDocumentApplicability{
		IcpmsDocumentApplicabilityYes,
		IcpmsDocumentApplicabilityNo,
		IcpmsDocumentApplicabilityReview,
	}
}

func (v IcpmsDocumentApplicability) IsValid() bool {
	switch v {
	case
		IcpmsDocumentApplicabilityYes,
		IcpmsDocumentApplicabilityNo,
		IcpmsDocumentApplicabilityReview:
		return true
	}

	return false
}

func (v IcpmsDocumentApplicability) String() string {
	return string(v)
}

func (v IcpmsDocumentApplicability) MarshalText() ([]byte, error) {
	return []byte(v.String()), nil
}

func (v *IcpmsDocumentApplicability) UnmarshalText(text []byte) error {
	val := IcpmsDocumentApplicability(text)
	if !val.IsValid() {
		return fmt.Errorf("invalid IcpmsDocumentApplicability value: %q", string(text))
	}

	*v = val

	return nil
}
