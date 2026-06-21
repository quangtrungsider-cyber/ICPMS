/**
 * @generated SignedSource<<5c4927e73780b816ba6a0f847d90f145>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ThirdPartyMeasuresPageFragment$data = {
  readonly canCreateMeasureThirdPartyMapping: boolean;
  readonly canDeleteMeasureThirdPartyMapping: boolean;
  readonly id: string;
  readonly measures: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"LinkedMeasuresCardFragment">;
      };
    }>;
  };
  readonly " $fragmentType": "ThirdPartyMeasuresPageFragment";
};
export type ThirdPartyMeasuresPageFragment$key = {
  readonly " $data"?: ThirdPartyMeasuresPageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ThirdPartyMeasuresPageFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "measures"
        ]
      }
    ]
  },
  "name": "ThirdPartyMeasuresPageFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": "canCreateMeasureThirdPartyMapping",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:measure:create-third-party-mapping"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:measure:create-third-party-mapping\")"
    },
    {
      "alias": "canDeleteMeasureThirdPartyMapping",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:measure:delete-third-party-mapping"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:measure:delete-third-party-mapping\")"
    },
    {
      "alias": "measures",
      "args": null,
      "concreteType": "MeasureConnection",
      "kind": "LinkedField",
      "name": "__ThirdPartyMeasuresPage_measures_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "MeasureEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Measure",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "LinkedMeasuresCardFragment"
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "kind": "ClientExtension",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "__id",
              "storageKey": null
            }
          ]
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ThirdParty",
  "abstractKey": null
};
})();

(node as any).hash = "459b17af46236c5a123e02c6731a71d9";

export default node;
