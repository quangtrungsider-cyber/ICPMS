/**
 * @generated SignedSource<<07f2f71b51c21a16b83802428e1ae0f3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TaskPriority = "HIGH" | "LOW" | "MEDIUM" | "URGENT";
export type CreateTaskInput = {
  assignedToId?: string | null | undefined;
  deadline?: string | null | undefined;
  description?: string | null | undefined;
  measureId?: string | null | undefined;
  name: string;
  organizationId: string;
  priority: TaskPriority;
  timeEstimate?: string | null | undefined;
};
export type TaskFormDialogCreateMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateTaskInput;
};
export type TaskFormDialogCreateMutation$data = {
  readonly createTask: {
    readonly taskEdge: {
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"TaskFormDialogFragment" | "TasksCard_TaskRowFragment" | "TasksCard_task">;
      };
    };
  };
};
export type TaskFormDialogCreateMutation = {
  response: TaskFormDialogCreateMutation$data;
  variables: TaskFormDialogCreateMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "state",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "priority",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rank",
  "storageKey": null
},
v7 = {
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
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TaskFormDialogCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateTaskPayload",
        "kind": "LinkedField",
        "name": "createTask",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TaskEdge",
            "kind": "LinkedField",
            "name": "taskEdge",
            "plural": false,
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
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "TaskFormDialogFragment"
                  },
                  {
                    "kind": "InlineDataFragmentSpread",
                    "name": "TasksCard_task",
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/)
                    ],
                    "args": null,
                    "argumentDefinitions": []
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "TasksCard_TaskRowFragment"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "TaskFormDialogCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateTaskPayload",
        "kind": "LinkedField",
        "name": "createTask",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TaskEdge",
            "kind": "LinkedField",
            "name": "taskEdge",
            "plural": false,
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
                    "name": "description",
                    "storageKey": null
                  },
                  (v7/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
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
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v6/*: any*/),
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
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "taskEdge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f3775f3d6495ec52f66d69843edac7bf",
    "id": null,
    "metadata": {},
    "name": "TaskFormDialogCreateMutation",
    "operationKind": "mutation",
    "text": "mutation TaskFormDialogCreateMutation(\n  $input: CreateTaskInput!\n) {\n  createTask(input: $input) {\n    taskEdge {\n      node {\n        ...TaskFormDialogFragment\n        ...TasksCard_task\n        ...TasksCard_TaskRowFragment\n        id\n      }\n    }\n  }\n}\n\nfragment TaskFormDialogFragment on Task {\n  id\n  description\n  name\n  state\n  priority\n  timeEstimate\n  deadline\n  assignedTo {\n    id\n  }\n  measure {\n    id\n  }\n}\n\nfragment TasksCard_TaskRowFragment on Task {\n  id\n  name\n  state\n  priority\n  description\n  timeEstimate\n  deadline\n  canUpdate: permission(action: \"core:task:update\")\n  canDelete: permission(action: \"core:task:delete\")\n  assignedTo {\n    id\n    fullName\n  }\n  measure {\n    id\n    name\n  }\n}\n\nfragment TasksCard_task on Task {\n  id\n  state\n  priority\n  rank\n}\n"
  }
};
})();

(node as any).hash = "09671ddb78d7c1ecb3c1055a16aabd07";

export default node;
