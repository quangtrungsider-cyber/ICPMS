/**
 * @generated SignedSource<<34e86f6c5f0df7b86b76922cc9eb8f3a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TaskPriority = "HIGH" | "LOW" | "MEDIUM" | "URGENT";
export type TaskState = "DONE" | "IN_PROGRESS" | "TODO";
export type UpdateTaskInput = {
  assignedToId?: string | null | undefined;
  deadline?: string | null | undefined;
  description?: string | null | undefined;
  measureId?: string | null | undefined;
  name?: string | null | undefined;
  priority?: TaskPriority | null | undefined;
  rank?: number | null | undefined;
  state?: TaskState | null | undefined;
  taskId: string;
  timeEstimate?: string | null | undefined;
};
export type TaskFormDialogUpdateMutation$variables = {
  input: UpdateTaskInput;
};
export type TaskFormDialogUpdateMutation$data = {
  readonly updateTask: {
    readonly task: {
      readonly " $fragmentSpreads": FragmentRefs<"TaskFormDialogFragment" | "TasksCard_TaskRowFragment" | "TasksCard_task">;
    };
  };
};
export type TaskFormDialogUpdateMutation = {
  response: TaskFormDialogUpdateMutation$data;
  variables: TaskFormDialogUpdateMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "state",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "priority",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rank",
  "storageKey": null
},
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
    "name": "TaskFormDialogUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateTaskPayload",
        "kind": "LinkedField",
        "name": "updateTask",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Task",
            "kind": "LinkedField",
            "name": "task",
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/)
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TaskFormDialogUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateTaskPayload",
        "kind": "LinkedField",
        "name": "updateTask",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Task",
            "kind": "LinkedField",
            "name": "task",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "description",
                "storageKey": null
              },
              (v6/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
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
                  (v2/*: any*/),
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
                  (v2/*: any*/),
                  (v6/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/),
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
      }
    ]
  },
  "params": {
    "cacheID": "28109ef56d1734cd35c02e8ff0e675b9",
    "id": null,
    "metadata": {},
    "name": "TaskFormDialogUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation TaskFormDialogUpdateMutation(\n  $input: UpdateTaskInput!\n) {\n  updateTask(input: $input) {\n    task {\n      ...TaskFormDialogFragment\n      ...TasksCard_task\n      ...TasksCard_TaskRowFragment\n      id\n    }\n  }\n}\n\nfragment TaskFormDialogFragment on Task {\n  id\n  description\n  name\n  state\n  priority\n  timeEstimate\n  deadline\n  assignedTo {\n    id\n  }\n  measure {\n    id\n  }\n}\n\nfragment TasksCard_TaskRowFragment on Task {\n  id\n  name\n  state\n  priority\n  description\n  timeEstimate\n  deadline\n  canUpdate: permission(action: \"core:task:update\")\n  canDelete: permission(action: \"core:task:delete\")\n  assignedTo {\n    id\n    fullName\n  }\n  measure {\n    id\n    name\n  }\n}\n\nfragment TasksCard_task on Task {\n  id\n  state\n  priority\n  rank\n}\n"
  }
};
})();

(node as any).hash = "2709ec31943f83e7d2a395e0c5d6b586";

export default node;
