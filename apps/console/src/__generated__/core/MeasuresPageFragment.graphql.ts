/**
 * @generated SignedSource<<73b1f2cf89ece8a6d85c223cfea99c64>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MeasuresPageFragment$data = {
  readonly id: string;
  readonly measures: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly canDelete: boolean;
        readonly canUpdate: boolean;
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"MeasuresPageRowFragment">;
      };
    }>;
    readonly pageInfo: {
      readonly endCursor: string | null | undefined;
      readonly hasNextPage: boolean;
    };
  };
  readonly " $fragmentType": "MeasuresPageFragment";
};
export type MeasuresPageFragment$key = {
  readonly " $data"?: MeasuresPageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MeasuresPageFragment">;
};

import MeasuresPageRefetchQuery_graphql from './MeasuresPageRefetchQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "measures"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "category"
    },
    {
      "defaultValue": 500,
      "kind": "LocalArgument",
      "name": "first"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "query"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "state"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": MeasuresPageRefetchQuery_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "MeasuresPageFragment",
  "selections": [
    (v1/*: any*/),
    {
      "alias": "measures",
      "args": [
        {
          "fields": [
            {
              "kind": "Variable",
              "name": "category",
              "variableName": "category"
            },
            {
              "kind": "Variable",
              "name": "query",
              "variableName": "query"
            },
            {
              "kind": "Variable",
              "name": "state",
              "variableName": "state"
            }
          ],
          "kind": "ObjectValue",
          "name": "filter"
        }
      ],
      "concreteType": "MeasureConnection",
      "kind": "LinkedField",
      "name": "__MeasuresPage_measures_connection",
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
                (v1/*: any*/),
                {
                  "alias": "canUpdate",
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "action",
                      "value": "core:measure:update"
                    }
                  ],
                  "kind": "ScalarField",
                  "name": "permission",
                  "storageKey": "permission(action:\"core:measure:update\")"
                },
                {
                  "alias": "canDelete",
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "action",
                      "value": "core:measure:delete"
                    }
                  ],
                  "kind": "ScalarField",
                  "name": "permission",
                  "storageKey": "permission(action:\"core:measure:delete\")"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "MeasuresPageRowFragment"
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
              "name": "hasNextPage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Organization",
  "abstractKey": null
};
})();

(node as any).hash = "1875d66a18dfd2db15046bb215c1f87b";

export default node;
