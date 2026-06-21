/**
 * @generated SignedSource<<e116824982e0a5e0ed4893ff017c970d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from 'relay-runtime';
export type ThirdPartyCategory = "ANALYTICS" | "CLOUD_MONITORING" | "CLOUD_PROVIDER" | "COLLABORATION" | "CUSTOMER_SUPPORT" | "DATA_STORAGE_AND_PROCESSING" | "DOCUMENT_MANAGEMENT" | "EMPLOYEE_MANAGEMENT" | "ENGINEERING" | "FINANCE" | "IDENTITY_PROVIDER" | "IT" | "MARKETING" | "OFFICE_OPERATIONS" | "OTHER" | "PASSWORD_MANAGEMENT" | "PRODUCT_AND_DESIGN" | "PROFESSIONAL_SERVICES" | "RECRUITING" | "SALES" | "SECURITY" | "VERSION_CONTROL";
import { FragmentRefs } from "relay-runtime";
export type CommonThirdPartyCombobox_commonThirdParty$data = {
  readonly category: ThirdPartyCategory;
  readonly certifications: ReadonlyArray<string>;
  readonly dataProcessingAgreementUrl: string | null | undefined;
  readonly headquarterAddress: string | null | undefined;
  readonly legalName: string | null | undefined;
  readonly logoUrl: string | null | undefined;
  readonly name: string;
  readonly privacyPolicyUrl: string | null | undefined;
  readonly securityPageUrl: string | null | undefined;
  readonly serviceLevelAgreementUrl: string | null | undefined;
  readonly statusPageUrl: string | null | undefined;
  readonly termsOfServiceUrl: string | null | undefined;
  readonly trustPageUrl: string | null | undefined;
  readonly websiteUrl: string | null | undefined;
  readonly " $fragmentType": "CommonThirdPartyCombobox_commonThirdParty";
};
export type CommonThirdPartyCombobox_commonThirdParty$key = {
  readonly " $data"?: CommonThirdPartyCombobox_commonThirdParty$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommonThirdPartyCombobox_commonThirdParty">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "CommonThirdPartyCombobox_commonThirdParty"
};

(node as any).hash = "72eaee2a787c5a132ac3942f6c6d38ce";

export default node;
