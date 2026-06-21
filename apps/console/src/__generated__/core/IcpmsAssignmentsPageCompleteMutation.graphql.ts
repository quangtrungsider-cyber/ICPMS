/**
 * @generated SignedSource<<8cc132d03fadb8a9e0b49e3f8a802339>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsAssignmentStatus = "ACCEPTED" | "ASSIGNED" | "CANCELLED" | "CLOSED" | "COMPLETED" | "DELETED" | "DRAFT" | "IN_PROGRESS" | "OVERDUE" | "RETURNED" | "SUBMITTED";
export type CompleteIcpmsAssignmentInput = {
  id: string;
};
export type IcpmsAssignmentsPageCompleteMutation$variables = {
  input: CompleteIcpmsAssignmentInput;
};
export type IcpmsAssignmentsPageCompleteMutation$data = {
  readonly completeIcpmsAssignment: {
    readonly assignment: {
      readonly id: string;
      readonly progressPercent: number;
      readonly status: IcpmsAssignmentStatus;
    };
  };
};
export type IcpmsAssignmentsPageCompleteMutation = {
  response: IcpmsAssignmentsPageCompleteMutation$data;
  variables: IcpmsAssignmentsPageCompleteMutation$variables;
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
    "concreteType": "CompleteIcpmsAssignmentPayload",
    "kind": "LinkedField",
    "name": "completeIcpmsAssignment",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsAssignment",
        "kind": "LinkedField",
        "name": "assignment",
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
            "name": "status",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "progressPercent",
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
    "name": "IcpmsAssignmentsPageCompleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsAssignmentsPageCompleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "164257390e56b4fd9927926053bd783d",
    "id": null,
    "metadata": {},
    "name": "IcpmsAssignmentsPageCompleteMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsAssignmentsPageCompleteMutation(\n  $input: CompleteIcpmsAssignmentInput!\n) {\n  completeIcpmsAssignment(input: $input) {\n    assignment {\n      id\n      status\n      progressPercent\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a865d62a6916a716a2788bb3c8bc9083";

export default node;
