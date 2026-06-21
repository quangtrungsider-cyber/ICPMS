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
	IcpmsDocumentType string
)

const (
	IcpmsDocumentTypeIcaoAnnex          IcpmsDocumentType = "ICAO_ANNEX"
	IcpmsDocumentTypeIcaoDoc            IcpmsDocumentType = "ICAO_DOC"
	IcpmsDocumentTypeIcaoCircular       IcpmsDocumentType = "ICAO_CIRCULAR"
	IcpmsDocumentTypeIcaoApac           IcpmsDocumentType = "ICAO_APAC"
	IcpmsDocumentTypeCansoGuidance      IcpmsDocumentType = "CANSO_GUIDANCE"
	IcpmsDocumentTypeIsoStandard        IcpmsDocumentType = "ISO_STANDARD"
	IcpmsDocumentTypeEasaEu             IcpmsDocumentType = "EASA_EU"
	IcpmsDocumentTypeEurocontrol        IcpmsDocumentType = "EUROCONTROL"
	IcpmsDocumentTypeEurocaeRtca        IcpmsDocumentType = "EUROCAE_RTCA"
	IcpmsDocumentTypeVatmInternal       IcpmsDocumentType = "VATM_INTERNAL"
	IcpmsDocumentTypeDecree             IcpmsDocumentType = "DECREE"
	IcpmsDocumentTypeCircularVn         IcpmsDocumentType = "CIRCULAR_VN"
	IcpmsDocumentTypeDecision           IcpmsDocumentType = "DECISION"
	IcpmsDocumentTypeInternalRegulation IcpmsDocumentType = "INTERNAL_REGULATION"
	IcpmsDocumentTypeProcedure          IcpmsDocumentType = "PROCEDURE"
	IcpmsDocumentTypeGuidance           IcpmsDocumentType = "GUIDANCE"
	IcpmsDocumentTypeForm               IcpmsDocumentType = "FORM"
	IcpmsDocumentTypeTechnicalDocument  IcpmsDocumentType = "TECHNICAL_DOCUMENT"
	IcpmsDocumentTypeSafetyDocument     IcpmsDocumentType = "SAFETY_DOCUMENT"
	IcpmsDocumentTypeComplianceDocument IcpmsDocumentType = "COMPLIANCE_DOCUMENT"
	IcpmsDocumentTypeOther              IcpmsDocumentType = "OTHER"
)

var (
	_ fmt.Stringer             = IcpmsDocumentType("")
	_ encoding.TextMarshaler   = IcpmsDocumentType("")
	_ encoding.TextUnmarshaler = (*IcpmsDocumentType)(nil)
)

func IcpmsDocumentTypes() []IcpmsDocumentType {
	return []IcpmsDocumentType{
		IcpmsDocumentTypeIcaoAnnex,
		IcpmsDocumentTypeIcaoDoc,
		IcpmsDocumentTypeIcaoCircular,
		IcpmsDocumentTypeIcaoApac,
		IcpmsDocumentTypeCansoGuidance,
		IcpmsDocumentTypeIsoStandard,
		IcpmsDocumentTypeEasaEu,
		IcpmsDocumentTypeEurocontrol,
		IcpmsDocumentTypeEurocaeRtca,
		IcpmsDocumentTypeVatmInternal,
		IcpmsDocumentTypeDecree,
		IcpmsDocumentTypeCircularVn,
		IcpmsDocumentTypeDecision,
		IcpmsDocumentTypeInternalRegulation,
		IcpmsDocumentTypeProcedure,
		IcpmsDocumentTypeGuidance,
		IcpmsDocumentTypeForm,
		IcpmsDocumentTypeTechnicalDocument,
		IcpmsDocumentTypeSafetyDocument,
		IcpmsDocumentTypeComplianceDocument,
		IcpmsDocumentTypeOther,
	}
}

func (v IcpmsDocumentType) IsValid() bool {
	switch v {
	case
		IcpmsDocumentTypeIcaoAnnex,
		IcpmsDocumentTypeIcaoDoc,
		IcpmsDocumentTypeIcaoCircular,
		IcpmsDocumentTypeIcaoApac,
		IcpmsDocumentTypeCansoGuidance,
		IcpmsDocumentTypeIsoStandard,
		IcpmsDocumentTypeEasaEu,
		IcpmsDocumentTypeEurocontrol,
		IcpmsDocumentTypeEurocaeRtca,
		IcpmsDocumentTypeVatmInternal,
		IcpmsDocumentTypeDecree,
		IcpmsDocumentTypeCircularVn,
		IcpmsDocumentTypeDecision,
		IcpmsDocumentTypeInternalRegulation,
		IcpmsDocumentTypeProcedure,
		IcpmsDocumentTypeGuidance,
		IcpmsDocumentTypeForm,
		IcpmsDocumentTypeTechnicalDocument,
		IcpmsDocumentTypeSafetyDocument,
		IcpmsDocumentTypeComplianceDocument,
		IcpmsDocumentTypeOther:
		return true
	}

	return false
}

func (v IcpmsDocumentType) String() string {
	return string(v)
}

func (v IcpmsDocumentType) MarshalText() ([]byte, error) {
	return []byte(v.String()), nil
}

func (v *IcpmsDocumentType) UnmarshalText(text []byte) error {
	val := IcpmsDocumentType(text)
	if !val.IsValid() {
		return fmt.Errorf("invalid IcpmsDocumentType value: %q", string(text))
	}

	*v = val

	return nil
}
