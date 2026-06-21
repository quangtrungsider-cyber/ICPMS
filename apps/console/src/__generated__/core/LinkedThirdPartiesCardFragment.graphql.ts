/**
 * @generated SignedSource<<7b5045ad1a6d8146f7a69e1824230388>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type ThirdPartyCategory = "ANALYTICS" | "CLOUD_MONITORING" | "CLOUD_PROVIDER" | "COLLABORATION" | "CUSTOMER_SUPPORT" | "DATA_STORAGE_AND_PROCESSING" | "DOCUMENT_MANAGEMENT" | "EMPLOYEE_MANAGEMENT" | "ENGINEERING" | "FINANCE" | "IDENTITY_PROVIDER" | "IT" | "MARKETING" | "OFFICE_OPERATIONS" | "OTHER" | "PASSWORD_MANAGEMENT" | "PRODUCT_AND_DESIGN" | "PROFESSIONAL_SERVICES" | "RECRUITING" | "SALES" | "SECURITY" | "VERSION_CONTROL";
import { FragmentRefs } from "relay-runtime";
export type LinkedThirdPartiesCardFragment$data = {
  readonly category: ThirdPartyCategory;
  readonly id: string;
  readonly name: string;
  readonly websiteUrl: string | null | undefined;
  readonly " $fragmentType": "LinkedThirdPartiesCardFragment";
};
export type LinkedThirdPartiesCardFragment$key = {
  readonly " $data"?: LinkedThirdPartiesCardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"LinkedThirdPartiesCardFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LinkedThirdPartiesCardFragment",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "category",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "websiteUrl",
      "storageKey": null
    }
  ],
  "type": "ThirdParty",
  "abstractKey": null
};

(node as any).hash = "b448a38d928b4260e3c799b0d059c571";

export default node;
