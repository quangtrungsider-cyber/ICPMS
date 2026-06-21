/**
 * @generated SignedSource<<0f7055a93607dfd35c13a453ce16f5cb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type TaskPriority = "HIGH" | "LOW" | "MEDIUM" | "URGENT";
export type TaskState = "DONE" | "IN_PROGRESS" | "TODO";
import { FragmentRefs } from "relay-runtime";
export type TasksCard_TaskRowFragment$data = {
  readonly assignedTo: {
    readonly fullName: string;
    readonly id: string;
  } | null | undefined;
  readonly canDelete: boolean;
  readonly canUpdate: boolean;
  readonly deadline: string | null | undefined;
  readonly description: string | null | undefined;
  readonly id: string;
  readonly measure: {
    readonly id: string;
    readonly name: string;
  } | null | undefined;
  readonly name: string;
  readonly priority: TaskPriority;
  readonly state: TaskState;
  readonly timeEstimate: string | null | undefined;
  readonly " $fragmentType": "TasksCard_TaskRowFragment";
};
export type TasksCard_TaskRowFragment$key = {
  readonly " $data"?: TasksCard_TaskRowFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TasksCard_TaskRowFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TasksCard_TaskRowFragment",
  "selections": [
    (v0/*: any*/),
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
      "name": "description",
      "storageKey": null
    },
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
    {
      "alias": null,
      "args": null,
      "concreteType": "Profile",
      "kind": "LinkedField",
      "name": "assignedTo",
      "plural": false,
      "selections": [
        (v0/*: any*/),
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
        (v0/*: any*/),
        (v1/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Task",
  "abstractKey": null
};
})();

(node as any).hash = "f5effa36fbecbcd0c756d37736be718b";

export default node;
