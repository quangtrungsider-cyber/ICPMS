/**
 * @generated SignedSource<<9fac1f4d22fdff66271cd48ebe9c241b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CompliancePageThirdPartyListFragment$data = {
  readonly thirdParties: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"CompliancePageThirdPartyListItem_thirdPartyFragment">;
      };
    }>;
  };
  readonly " $fragmentType": "CompliancePageThirdPartyListFragment";
};
export type CompliancePageThirdPartyListFragment$key = {
  readonly " $data"?: CompliancePageThirdPartyListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CompliancePageThirdPartyListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CompliancePageThirdPartyListFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 100
        }
      ],
      "concreteType": "ThirdPartyConnection",
      "kind": "LinkedField",
      "name": "thirdParties",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ThirdPartyEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ThirdParty",
              "kind": "LinkedField",
              "name": "node",
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
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "CompliancePageThirdPartyListItem_thirdPartyFragment"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "thirdParties(first:100)"
    }
  ],
  "type": "Organization",
  "abstractKey": null
};

(node as any).hash = "092d112da44487a92661c9183e601b47";

export default node;
