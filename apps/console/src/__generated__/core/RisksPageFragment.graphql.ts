/**
 * @generated SignedSource<<b2c54aa3fc03c37a26a225aa9ebc0a20>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RisksPageFragment$data = {
  readonly canCreateRisk: boolean;
  readonly canPublishRisk: boolean;
  readonly id: string;
  readonly risks: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly canDelete: boolean;
        readonly canUpdate: boolean;
        readonly id: string;
        readonly inherentImpact: number;
        readonly inherentLikelihood: number;
        readonly name: string;
        readonly residualImpact: number;
        readonly residualLikelihood: number;
        readonly " $fragmentSpreads": FragmentRefs<"RiskRow_risk">;
      };
    }>;
  };
  readonly risksDocument: {
    readonly defaultApprovers: ReadonlyArray<{
      readonly id: string;
    }>;
    readonly id: string;
  } | null | undefined;
  readonly " $fragmentType": "RisksPageFragment";
};
export type RisksPageFragment$key = {
  readonly " $data"?: RisksPageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RisksPageFragment">;
};

import RisksPageRefetchQuery_graphql from './RisksPageRefetchQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "risks"
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
      "name": "before"
    },
    {
      "defaultValue": 50,
      "kind": "LocalArgument",
      "name": "first"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "last"
    },
    {
      "defaultValue": {
        "direction": "DESC",
        "field": "CREATED_AT"
      },
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
      "operation": RisksPageRefetchQuery_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "RisksPageFragment",
  "selections": [
    {
      "alias": "canCreateRisk",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:risk:create"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:risk:create\")"
    },
    {
      "alias": "canPublishRisk",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:risk:publish"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:risk:publish\")"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Document",
      "kind": "LinkedField",
      "name": "risksDocument",
      "plural": false,
      "selections": [
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Profile",
          "kind": "LinkedField",
          "name": "defaultApprovers",
          "plural": true,
          "selections": [
            (v1/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": "risks",
      "args": null,
      "concreteType": "RiskConnection",
      "kind": "LinkedField",
      "name": "__RisksPage_risks_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "RiskEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Risk",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
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
                  "name": "inherentLikelihood",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "inherentImpact",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "residualLikelihood",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "residualImpact",
                  "storageKey": null
                },
                {
                  "alias": "canUpdate",
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "action",
                      "value": "core:risk:update"
                    }
                  ],
                  "kind": "ScalarField",
                  "name": "permission",
                  "storageKey": "permission(action:\"core:risk:update\")"
                },
                {
                  "alias": "canDelete",
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "action",
                      "value": "core:risk:delete"
                    }
                  ],
                  "kind": "ScalarField",
                  "name": "permission",
                  "storageKey": "permission(action:\"core:risk:delete\")"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "RiskRow_risk"
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
    },
    (v1/*: any*/)
  ],
  "type": "Organization",
  "abstractKey": null
};
})();

(node as any).hash = "05b8119e31d6db32b565b5729ed24b34";

export default node;
