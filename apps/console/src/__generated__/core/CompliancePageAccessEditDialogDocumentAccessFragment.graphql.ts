/**
 * @generated SignedSource<<cc57d250ce8b58d67d57793d25724f14>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from 'relay-runtime';
export type DocumentType = "GOVERNANCE" | "OTHER" | "PLAN" | "POLICY" | "PROCEDURE" | "RECORD" | "REGISTER" | "REPORT" | "STATEMENT_OF_APPLICABILITY" | "TEMPLATE";
export type TrustCenterDocumentAccessStatus = "GRANTED" | "REJECTED" | "REQUESTED" | "REVOKED";
import { FragmentRefs } from "relay-runtime";
export type CompliancePageAccessEditDialogDocumentAccessFragment$data = {
  readonly audit: {
    readonly framework: {
      readonly name: string;
    } | null | undefined;
  } | null | undefined;
  readonly document: {
    readonly id: string;
    readonly versions: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly documentType: DocumentType;
          readonly title: string;
        };
      }>;
    };
  } | null | undefined;
  readonly id: string;
  readonly reportFile: {
    readonly fileName: string;
    readonly id: string;
  } | null | undefined;
  readonly status: TrustCenterDocumentAccessStatus;
  readonly trustCenterFile: {
    readonly category: string;
    readonly id: string;
    readonly name: string;
  } | null | undefined;
  readonly " $fragmentType": "CompliancePageAccessEditDialogDocumentAccessFragment";
};
export type CompliancePageAccessEditDialogDocumentAccessFragment$key = {
  readonly " $data"?: CompliancePageAccessEditDialogDocumentAccessFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CompliancePageAccessEditDialogDocumentAccessFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "CompliancePageAccessEditDialogDocumentAccessFragment"
};

(node as any).hash = "a93e1b6069188f61fe02bb9e0d534ff3";

export default node;
