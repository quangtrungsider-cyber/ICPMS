/**
 * @generated SignedSource<<fdd992481119554054bfedd21618299a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrderDirection = "ASC" | "DESC";
export type TaskOrderField = "CREATED_AT" | "PRIORITY_RANK";
export type TaskOrder = {
  direction: OrderDirection;
  field: TaskOrderField;
};
export type TasksCardOrganizationQuery$variables = {
  after?: string | null | undefined;
  before?: string | null | undefined;
  first?: number | null | undefined;
  id: string;
  last?: number | null | undefined;
  order?: TaskOrder | null | undefined;
};
export type TasksCardOrganizationQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"TasksCardOrganizationFragment">;
  };
};
export type TasksCardOrganizationQuery = {
  response: TasksCardOrganizationQuery$data;
  variables: TasksCardOrganizationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "before"
},
v2 = {
  "defaultValue": 500,
  "kind": "LocalArgument",
  "name": "first"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "last"
},
v5 = {
  "defaultValue": {
    "direction": "ASC",
    "field": "PRIORITY_RANK"
  },
  "kind": "LocalArgument",
  "name": "order"
},
v6 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v7 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v8 = {
  "kind": "Variable",
  "name": "before",
  "variableName": "before"
},
v9 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "first"
},
v10 = {
  "kind": "Variable",
  "name": "last",
  "variableName": "last"
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v13 = [
  {
    "kind": "Literal",
    "name": "action",
    "value": "core:task:update"
  }
],
v14 = [
  (v7/*: any*/),
  (v8/*: any*/),
  (v9/*: any*/),
  (v10/*: any*/),
  {
    "kind": "Variable",
    "name": "orderBy",
    "variableName": "order"
  }
],
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TasksCardOrganizationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              {
                "kind": "Variable",
                "name": "order",
                "variableName": "order"
              }
            ],
            "kind": "FragmentSpread",
            "name": "TasksCardOrganizationFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "TasksCardOrganizationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v11/*: any*/),
          (v12/*: any*/),
          {
            "kind": "InlineFragment",
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
                "args": (v13/*: any*/),
                "kind": "ScalarField",
                "name": "permission",
                "storageKey": "permission(action:\"core:task:update\")"
              },
              {
                "alias": null,
                "args": (v14/*: any*/),
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
                          (v12/*: any*/),
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
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "description",
                            "storageKey": null
                          },
                          (v15/*: any*/),
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
                              (v12/*: any*/),
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
                              (v12/*: any*/),
                              (v15/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": "canUpdate",
                            "args": (v13/*: any*/),
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
                          (v11/*: any*/)
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
              {
                "alias": null,
                "args": (v14/*: any*/),
                "filters": [
                  "orderBy"
                ],
                "handle": "connection",
                "key": "TasksCardOrganization_tasks",
                "kind": "LinkedHandle",
                "name": "tasks"
              }
            ],
            "type": "Organization",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3d459c01f3a1dd67abbbb5f18f44bbae",
    "id": null,
    "metadata": {},
    "name": "TasksCardOrganizationQuery",
    "operationKind": "query",
    "text": "query TasksCardOrganizationQuery(\n  $after: CursorKey = null\n  $before: CursorKey = null\n  $first: Int = 500\n  $last: Int = null\n  $order: TaskOrder = {field: PRIORITY_RANK, direction: ASC}\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...TasksCardOrganizationFragment_16fISc\n    id\n  }\n}\n\nfragment TaskFormDialogFragment on Task {\n  id\n  description\n  name\n  state\n  priority\n  timeEstimate\n  deadline\n  assignedTo {\n    id\n  }\n  measure {\n    id\n  }\n}\n\nfragment TasksCardOrganizationFragment_16fISc on Organization {\n  canCreateTask: permission(action: \"core:task:create\")\n  canUpdateTask: permission(action: \"core:task:update\")\n  tasks(first: $first, after: $after, last: $last, before: $before, orderBy: $order) {\n    edges {\n      node {\n        ...TasksCard_task\n        ...TaskFormDialogFragment\n        ...TasksCard_TaskRowFragment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n\nfragment TasksCard_TaskRowFragment on Task {\n  id\n  name\n  state\n  priority\n  description\n  timeEstimate\n  deadline\n  canUpdate: permission(action: \"core:task:update\")\n  canDelete: permission(action: \"core:task:delete\")\n  assignedTo {\n    id\n    fullName\n  }\n  measure {\n    id\n    name\n  }\n}\n\nfragment TasksCard_task on Task {\n  id\n  state\n  priority\n  rank\n}\n"
  }
};
})();

(node as any).hash = "2f108354e6283649614f7eb18562a5d5";

export default node;
