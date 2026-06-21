/**
 * @generated SignedSource<<698503b6f82eb8b90cbda9813aa1a0e0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type SearchEngineIndexing = "INDEXABLE" | "NOT_INDEXABLE";
import { FragmentRefs } from "relay-runtime";
export type CompliancePageStatusSectionFragment$data = {
  readonly compliancePage: {
    readonly active: boolean;
    readonly canUpdate: boolean;
    readonly id: string;
    readonly searchEngineIndexing: SearchEngineIndexing;
  } | null | undefined;
  readonly " $fragmentType": "CompliancePageStatusSectionFragment";
};
export type CompliancePageStatusSectionFragment$key = {
  readonly " $data"?: CompliancePageStatusSectionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CompliancePageStatusSectionFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CompliancePageStatusSectionFragment",
  "selections": [
    {
      "alias": "compliancePage",
      "args": null,
      "concreteType": "TrustCenter",
      "kind": "LinkedField",
      "name": "trustCenter",
      "plural": false,
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
          "name": "active",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "searchEngineIndexing",
          "storageKey": null
        },
        {
          "alias": "canUpdate",
          "args": [
            {
              "kind": "Literal",
              "name": "action",
              "value": "core:trust-center:update"
            }
          ],
          "kind": "ScalarField",
          "name": "permission",
          "storageKey": "permission(action:\"core:trust-center:update\")"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Organization",
  "abstractKey": null
};

(node as any).hash = "719de33263bd3cad9b21b00d2f1767b2";

export default node;
