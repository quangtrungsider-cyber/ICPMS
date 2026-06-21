/**
 * @generated SignedSource<<a4f1c37e6a4d8abcaa5857083de0aa28>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MeasureTasksTabQuery$variables = {
  measureId: string;
};
export type MeasureTasksTabQuery$data = {
  readonly node: {
    readonly __typename: "Measure";
    readonly canCreateTask: boolean;
    readonly tasks: {
      readonly __id: string;
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly " $fragmentSpreads": FragmentRefs<"TaskFormDialogFragment" | "TasksCard_TaskRowFragment" | "TasksCard_task">;
        };
      }>;
    };
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type MeasureTasksTabQuery = {
  response: MeasureTasksTabQuery$data;
  variables: MeasureTasksTabQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "measureId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "measureId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
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
v4 = {
  "kind": "Literal",
  "name": "orderBy",
  "value": {
    "direction": "ASC",
    "field": "PRIORITY_RANK"
  }
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "state",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "priority",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rank",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v10 = {
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
v11 = {
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
},
v12 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  },
  (v4/*: any*/)
],
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MeasureTasksTabQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": (v1/*: any*/),
          "concreteType": null,
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": [
                (v3/*: any*/),
                {
                  "kind": "RequiredField",
                  "field": {
                    "alias": "tasks",
                    "args": [
                      (v4/*: any*/)
                    ],
                    "concreteType": "TaskConnection",
                    "kind": "LinkedField",
                    "name": "__Measure__tasks_connection",
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
                                    (v5/*: any*/),
                                    (v6/*: any*/),
                                    (v7/*: any*/),
                                    (v8/*: any*/)
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
                                (v2/*: any*/)
                              ],
                              "storageKey": null
                            },
                            (v9/*: any*/)
                          ],
                          "storageKey": null
                        },
                        "action": "THROW"
                      },
                      (v10/*: any*/),
                      (v11/*: any*/)
                    ],
                    "storageKey": "__Measure__tasks_connection(orderBy:{\"direction\":\"ASC\",\"field\":\"PRIORITY_RANK\"})"
                  },
                  "action": "THROW"
                }
              ],
              "type": "Measure",
              "abstractKey": null
            }
          ],
          "storageKey": null
        },
        "action": "THROW"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MeasureTasksTabQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": (v12/*: any*/),
                "concreteType": "TaskConnection",
                "kind": "LinkedField",
                "name": "tasks",
                "plural": false,
                "selections": [
                  {
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
                          (v5/*: any*/),
                          (v6/*: any*/),
                          (v7/*: any*/),
                          (v8/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "description",
                            "storageKey": null
                          },
                          (v13/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "timeEstimate",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "deadline",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Profile",
                            "kind": "LinkedField",
                            "name": "assignedTo",
                            "plural": false,
                            "selections": [
                              (v5/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "fullName",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Measure",
                            "kind": "LinkedField",
                            "name": "measure",
                            "plural": false,
                            "selections": [
                              (v5/*: any*/),
                              (v13/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": "canUpdate",
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
                            "alias": "canDelete",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "action",
                                "value": "core:task:delete"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "permission",
                            "storageKey": "permission(action:\"core:task:delete\")"
                          },
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v9/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v10/*: any*/),
                  (v11/*: any*/)
                ],
                "storageKey": "tasks(first:100,orderBy:{\"direction\":\"ASC\",\"field\":\"PRIORITY_RANK\"})"
              },
              {
                "alias": null,
                "args": (v12/*: any*/),
                "filters": [
                  "orderBy"
                ],
                "handle": "connection",
                "key": "Measure__tasks",
                "kind": "LinkedHandle",
                "name": "tasks"
              }
            ],
            "type": "Measure",
            "abstractKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1fd5c714f2ec1b05667eb454b12627f2",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "node",
            "tasks"
          ]
        }
      ]
    },
    "name": "MeasureTasksTabQuery",
    "operationKind": "query",
    "text": "query MeasureTasksTabQuery(\n  $measureId: ID!\n) {\n  node(id: $measureId) {\n    __typename\n    ... on Measure {\n      canCreateTask: permission(action: \"core:task:create\")\n      tasks(first: 100, orderBy: {field: PRIORITY_RANK, direction: ASC}) {\n        edges {\n          node {\n            ...TasksCard_task\n            ...TaskFormDialogFragment\n            ...TasksCard_TaskRowFragment\n            id\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment TaskFormDialogFragment on Task {\n  id\n  description\n  name\n  state\n  priority\n  timeEstimate\n  deadline\n  assignedTo {\n    id\n  }\n  measure {\n    id\n  }\n}\n\nfragment TasksCard_TaskRowFragment on Task {\n  id\n  name\n  state\n  priority\n  description\n  timeEstimate\n  deadline\n  canUpdate: permission(action: \"core:task:update\")\n  canDelete: permission(action: \"core:task:delete\")\n  assignedTo {\n    id\n    fullName\n  }\n  measure {\n    id\n    name\n  }\n}\n\nfragment TasksCard_task on Task {\n  id\n  state\n  priority\n  rank\n}\n"
  }
};
})();

(node as any).hash = "68ac5f688236c8aebdb676ab0cfc9d6f";

export default node;
