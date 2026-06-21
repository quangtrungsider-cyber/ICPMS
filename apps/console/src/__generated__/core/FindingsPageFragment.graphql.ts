/**
 * @generated SignedSource<<a339b6f6440306eccca50eda09a01393>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FindingsPageFragment$data = {
  readonly findings: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly canDelete: boolean;
        readonly canUpdate: boolean;
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"FindingsPageRowFragment">;
      };
    }>;
    readonly pageInfo: {
      readonly endCursor: string | null | undefined;
      readonly hasNextPage: boolean;
    };
  } | null | undefined;
  readonly id: string;
  readonly " $fragmentType": "FindingsPageFragment";
};
export type FindingsPageFragment$key = {
  readonly " $data"?: FindingsPageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FindingsPageFragment">;
};

import FindingsPageRefetchQuery_graphql from './FindingsPageRefetchQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "findings"
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
      "defaultValue": 500,
      "kind": "LocalArgument",
      "name": "first"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "kind"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "ownerId"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "priority"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "status"
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
      "operation": FindingsPageRefetchQuery_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "FindingsPageFragment",
  "selections": [
    (v1/*: any*/),
    {
      "alias": "findings",
      "args": [
        {
          "fields": [
            {
              "kind": "Variable",
              "name": "kind",
              "variableName": "kind"
            },
            {
              "kind": "Variable",
              "name": "ownerId",
              "variableName": "ownerId"
            },
            {
              "kind": "Variable",
              "name": "priority",
              "variableName": "priority"
            },
            {
              "kind": "Variable",
              "name": "status",
              "variableName": "status"
            }
          ],
          "kind": "ObjectValue",
          "name": "filter"
        }
      ],
      "concreteType": "FindingConnection",
      "kind": "LinkedField",
      "name": "__FindingsPage_findings_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "FindingEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Finding",
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
                      "value": "core:finding:update"
                    }
                  ],
                  "kind": "ScalarField",
                  "name": "permission",
                  "storageKey": "permission(action:\"core:finding:update\")"
                },
                {
                  "alias": "canDelete",
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "action",
                      "value": "core:finding:delete"
                    }
                  ],
                  "kind": "ScalarField",
                  "name": "permission",
                  "storageKey": "permission(action:\"core:finding:delete\")"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "FindingsPageRowFragment"
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

(node as any).hash = "6bb5832448f82843ca87675b25bf037f";

export default node;
