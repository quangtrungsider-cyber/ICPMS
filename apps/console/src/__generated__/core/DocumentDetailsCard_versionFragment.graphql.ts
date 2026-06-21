/**
 * @generated SignedSource<<54b00b87c8453f7fa007fecff6b67715>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type DocumentClassification = "CONFIDENTIAL" | "INTERNAL" | "PUBLIC" | "SECRET";
export type DocumentType = "GOVERNANCE" | "OTHER" | "PLAN" | "POLICY" | "PROCEDURE" | "RECORD" | "REGISTER" | "REPORT" | "STATEMENT_OF_APPLICABILITY" | "TEMPLATE";
import { FragmentRefs } from "relay-runtime";
export type DocumentDetailsCard_versionFragment$data = {
  readonly classification: DocumentClassification;
  readonly documentType: DocumentType;
  readonly id: string;
  readonly major: number;
  readonly minor: number;
  readonly publishedAt: string | null | undefined;
  readonly updatedAt: string;
  readonly " $fragmentType": "DocumentDetailsCard_versionFragment";
};
export type DocumentDetailsCard_versionFragment$key = {
  readonly " $data"?: DocumentDetailsCard_versionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DocumentDetailsCard_versionFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DocumentDetailsCard_versionFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "documentType",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "classification",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "major",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "minor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "updatedAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "publishedAt",
      "storageKey": null
    }
  ],
  "type": "DocumentVersion",
  "abstractKey": null
};

(node as any).hash = "140c4cb8cdf77bdbbe863fde59d83707";

export default node;
