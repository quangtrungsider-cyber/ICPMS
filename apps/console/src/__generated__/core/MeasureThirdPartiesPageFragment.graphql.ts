/**
 * @generated SignedSource<<214b5e518097ae84d255b45fcccca98a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MeasureThirdPartiesPageFragment$data = {
  readonly canCreateMeasureThirdPartyMapping: boolean;
  readonly canDeleteMeasureThirdPartyMapping: boolean;
  readonly id: string;
  readonly thirdParties: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"LinkedThirdPartiesCardFragment">;
      };
    }>;
  };
  readonly " $fragmentType": "MeasureThirdPartiesPageFragment";
};
export type MeasureThirdPartiesPageFragment$key = {
  readonly " $data"?: MeasureThirdPartiesPageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MeasureThirdPartiesPageFragment">;
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
          "thirdParties"
        ]
      }
    ]
  },
  "name": "MeasureThirdPartiesPageFragment",
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
      "alias": "thirdParties",
      "args": null,
      "concreteType": "ThirdPartyConnection",
      "kind": "LinkedField",
      "name": "__MeasureThirdPartiesPage_thirdParties_connection",
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
                (v0/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "LinkedThirdPartiesCardFragment"
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
  "type": "Measure",
  "abstractKey": null
};
})();

(node as any).hash = "9ab1ba6e55325edf3eebabb9eef348dc";

export default node;
