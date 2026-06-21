/**
 * @generated SignedSource<<d3d81ea6d88bca881af3b6338d01869e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RiskControlsPage_risk$data = {
  readonly controls: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly framework: {
          readonly id: string;
          readonly name: string;
        };
        readonly id: string;
        readonly name: string;
        readonly sectionTitle: string;
      };
    }>;
  };
  readonly id: string;
  readonly " $fragmentType": "RiskControlsPage_risk";
};
export type RiskControlsPage_risk$key = {
  readonly " $data"?: RiskControlsPage_risk$data;
  readonly " $fragmentSpreads": FragmentRefs<"RiskControlsPage_risk">;
};

import RiskControlsPageRefetchQuery_graphql from './RiskControlsPageRefetchQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "controls"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
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
      "name": "before"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "filter"
    },
    {
      "defaultValue": 20,
      "kind": "LocalArgument",
      "name": "first"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "last"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "order"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "bidirectional",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": {
          "count": "last",
          "cursor": "before"
        },
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": RiskControlsPageRefetchQuery_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "RiskControlsPage_risk",
  "selections": [
    (v1/*: any*/),
    {
      "alias": "controls",
      "args": [
        {
          "kind": "Variable",
          "name": "filter",
          "variableName": "filter"
        },
        {
          "kind": "Variable",
          "name": "orderBy",
          "variableName": "order"
        }
      ],
      "concreteType": "ControlConnection",
      "kind": "LinkedField",
      "name": "__RiskControlsPage_controls_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ControlEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Control",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "sectionTitle",
                  "storageKey": null
                },
                (v2/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Framework",
                  "kind": "LinkedField",
                  "name": "framework",
                  "plural": false,
                  "selections": [
                    (v1/*: any*/),
                    (v2/*: any*/)
                  ],
                  "storageKey": null
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
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasPreviousPage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "startCursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Risk",
  "abstractKey": null
};
})();

(node as any).hash = "d959e7840c9a2e4d44c359bf211c4fd0";

export default node;
