/**
 * @generated SignedSource<<9706dbda452efc9307baa4eeb3696c6d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TasksPageQuery$variables = {
  organizationId: string;
};
export type TasksPageQuery$data = {
  readonly organization: {
    readonly " $fragmentSpreads": FragmentRefs<"TasksCardOrganizationFragment">;
  };
};
export type TasksPageQuery = {
  response: TasksPageQuery$data;
  variables: TasksPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "organizationId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "organizationId"
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "action",
    "value": "core:task:update"
  }
],
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 500
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "ASC",
      "field": "PRIORITY_RANK"
    }
  }
],
v6 = {
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
    "name": "TasksPageQuery",
    "selections": [
      {
        "alias": "organization",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "TasksCardOrganizationFragment"
              }
            ],
            "type": "Organization",
            "abstractKey": null
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TasksPageQuery",
    "selections": [
      {
        "alias": "organization",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
                "args": (v4/*: any*/),
                "kind": "ScalarField",
                "name": "permission",
                "storageKey": "permission(action:\"core:task:update\")"
              },
              {
                "alias": null,
                "args": (v5/*: any*/),
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
                          (v3/*: any*/),
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
                          (v6/*: any*/),
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
                              (v3/*: any*/),
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
                              (v3/*: any*/),
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": "canUpdate",
                            "args": (v4/*: any*/),
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
                "storageKey": "tasks(first:500,orderBy:{\"direction\":\"ASC\",\"field\":\"PRIORITY_RANK\"})"
              },
              {
                "alias": null,
                "args": (v5/*: any*/),
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
    "cacheID": "d85e7a12d11ae507a574c0debf237ecb",
    "id": null,
    "metadata": {},
    "name": "TasksPageQuery",
    "operationKind": "query",
    "text": "query TasksPageQuery(\n  $organizationId: ID!\n) {\n  organization: node(id: $organizationId) {\n    __typename\n    ... on Organization {\n      ...TasksCardOrganizationFragment\n    }\n    id\n  }\n}\n\nfragment TaskFormDialogFragment on Task {\n  id\n  description\n  name\n  state\n  priority\n  timeEstimate\n  deadline\n  assignedTo {\n    id\n  }\n  measure {\n    id\n  }\n}\n\nfragment TasksCardOrganizationFragment on Organization {\n  canCreateTask: permission(action: \"core:task:create\")\n  canUpdateTask: permission(action: \"core:task:update\")\n  tasks(first: 500, orderBy: {field: PRIORITY_RANK, direction: ASC}) {\n    edges {\n      node {\n        ...TasksCard_task\n        ...TaskFormDialogFragment\n        ...TasksCard_TaskRowFragment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n\nfragment TasksCard_TaskRowFragment on Task {\n  id\n  name\n  state\n  priority\n  description\n  timeEstimate\n  deadline\n  canUpdate: permission(action: \"core:task:update\")\n  canDelete: permission(action: \"core:task:delete\")\n  assignedTo {\n    id\n    fullName\n  }\n  measure {\n    id\n    name\n  }\n}\n\nfragment TasksCard_task on Task {\n  id\n  state\n  priority\n  rank\n}\n"
  }
};
})();

(node as any).hash = "ee1cbeeb5c57a5999a6aa7295b6118a7";

export default node;
