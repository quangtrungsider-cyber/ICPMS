/**
 * @generated SignedSource<<6b94be53dacbdcf7fdcf68269fcb383d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TasksCardOrganizationFragment$data = {
  readonly canCreateTask: boolean;
  readonly canUpdateTask: boolean;
  readonly id: string;
  readonly tasks: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"TaskFormDialogFragment" | "TasksCard_TaskRowFragment" | "TasksCard_task">;
      };
    }>;
  };
  readonly " $fragmentType": "TasksCardOrganizationFragment";
};
export type TasksCardOrganizationFragment$key = {
  readonly " $data"?: TasksCardOrganizationFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TasksCardOrganizationFragment">;
};

import TasksCardOrganizationQuery_graphql from './TasksCardOrganizationQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "tasks"
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
      "defaultValue": 500,
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
        "direction": "ASC",
        "field": "PRIORITY_RANK"
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
      "operation": TasksCardOrganizationQuery_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "TasksCardOrganizationFragment",
  "selections": [
    {
      "alias": "canCreateTask",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:task:create"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:task:create\")"
    },
    {
      "alias": "canUpdateTask",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:task:update"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:task:update\")"
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": "tasks",
        "args": [
          {
            "kind": "Variable",
            "name": "orderBy",
            "variableName": "order"
          }
        ],
        "concreteType": "TaskConnection",
        "kind": "LinkedField",
        "name": "__TasksCardOrganization_tasks_connection",
        "plural": false,
        "selections": [
          {
            "kind": "RequiredField",
            "field": {
              "alias": null,
              "args": null,
              "concreteType": "TaskEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Task",
                  "kind": "LinkedField",
                  "name": "node",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "InlineDataFragmentSpread",
                      "name": "TasksCard_task",
                      "selections": [
                        (v1/*: any*/),
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "state",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "priority",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "rank",
                          "storageKey": null
                        }
                      ],
                      "args": null,
                      "argumentDefinitions": []
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "TaskFormDialogFragment"
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "TasksCard_TaskRowFragment"
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
            "action": "THROW"
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
      "action": "THROW"
    },
    (v1/*: any*/)
  ],
  "type": "Organization",
  "abstractKey": null
};
})();

(node as any).hash = "2f108354e6283649614f7eb18562a5d5";

export default node;
