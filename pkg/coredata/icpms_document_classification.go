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
	IcpmsDocumentClassification string
)

const (
	IcpmsDocumentClassificationPublic     IcpmsDocumentClassification = "PUBLIC"
	IcpmsDocumentClassificationInternal   IcpmsDocumentClassification = "INTERNAL"
	IcpmsDocumentClassificationRestricted IcpmsDocumentClassification = "RESTRICTED"
)

var (
	_ fmt.Stringer             = IcpmsDocumentClassification("")
	_ encoding.TextMarshaler   = IcpmsDocumentClassification("")
	_ encoding.TextUnmarshaler = (*IcpmsDocumentClassification)(nil)
)

func IcpmsDocumentClassifications() []IcpmsDocumentClassification {
	return []IcpmsDocumentClassification{
		IcpmsDocumentClassificationPublic,
		IcpmsDocumentClassificationInternal,
		IcpmsDocumentClassificationRestricted,
	}
}

func (v IcpmsDocumentClassification) IsValid() bool {
	switch v {
	case
		IcpmsDocumentClassificationPublic,
		IcpmsDocumentClassificationInternal,
		IcpmsDocumentClassificationRestricted:
		return true
	}

	return false
}

func (v IcpmsDocumentClassification) String() string {
	return string(v)
}

func (v IcpmsDocumentClassification) MarshalText() ([]byte, error) {
	return []byte(v.String()), nil
}

func (v *IcpmsDocumentClassification) UnmarshalText(text []byte) error {
	val := IcpmsDocumentClassification(text)
	if !val.IsValid() {
		return fmt.Errorf("invalid IcpmsDocumentClassification value: %q", string(text))
	}

	*v = val

	return nil
}
