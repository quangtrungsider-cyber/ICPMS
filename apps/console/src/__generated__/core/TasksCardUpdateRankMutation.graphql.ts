/**
 * @generated SignedSource<<6f7f36dfa1a5b4f7ade4281e3922fa39>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
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
export type TasksCardUpdateRankMutation$variables = {
  input: UpdateTaskInput;
};
export type TasksCardUpdateRankMutation$data = {
  readonly updateTask: {
    readonly task: {
      readonly id: string;
      readonly priority: TaskPriority;
      readonly rank: number;
      readonly state: TaskState;
    };
  };
};
export type TasksCardUpdateRankMutation = {
  response: TasksCardUpdateRankMutation$data;
  variables: TasksCardUpdateRankMutation$variables;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
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
            "name": "state",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TasksCardUpdateRankMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TasksCardUpdateRankMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b30ba082adfc7ab7a674f2835cabb692",
    "id": null,
    "metadata": {},
    "name": "TasksCardUpdateRankMutation",
    "operationKind": "mutation",
    "text": "mutation TasksCardUpdateRankMutation(\n  $input: UpdateTaskInput!\n) {\n  updateTask(input: $input) {\n    task {\n      id\n      priority\n      rank\n      state\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3278ba24a6a4af15a34b37752bf0c21c";

export default node;
