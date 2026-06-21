/**
 * @generated SignedSource<<325fa7842b2b4c1136674a7324bea3cd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type ThirdPartyCategory = "ANALYTICS" | "CLOUD_MONITORING" | "CLOUD_PROVIDER" | "COLLABORATION" | "CUSTOMER_SUPPORT" | "DATA_STORAGE_AND_PROCESSING" | "DOCUMENT_MANAGEMENT" | "EMPLOYEE_MANAGEMENT" | "ENGINEERING" | "FINANCE" | "IDENTITY_PROVIDER" | "IT" | "MARKETING" | "OFFICE_OPERATIONS" | "OTHER" | "PASSWORD_MANAGEMENT" | "PRODUCT_AND_DESIGN" | "PROFESSIONAL_SERVICES" | "RECRUITING" | "SALES" | "SECURITY" | "VERSION_CONTROL";
import { FragmentRefs } from "relay-runtime";
export type CompliancePageThirdPartyListItem_thirdPartyFragment$data = {
  readonly canUpdate: boolean;
  readonly category: ThirdPartyCategory;
  readonly id: string;
  readonly name: string;
  readonly showOnTrustCenter: boolean;
  readonly " $fragmentType": "CompliancePageThirdPartyListItem_thirdPartyFragment";
};
export type CompliancePageThirdPartyListItem_thirdPartyFragment$key = {
  readonly " $data"?: CompliancePageThirdPartyListItem_thirdPartyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CompliancePageThirdPartyListItem_thirdPartyFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CompliancePageThirdPartyListItem_thirdPartyFragment",
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
      "name": "category",
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
      "name": "showOnTrustCenter",
      "storageKey": null
    },
    {
      "alias": "canUpdate",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:thirdParty:update"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:thirdParty:update\")"
    }
  ],
  "type": "ThirdParty",
  "abstractKey": null
};

(node as any).hash = "a5566c6a2f2dd38884170c67e11a1dd0";

export default node;
