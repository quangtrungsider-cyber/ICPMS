/**
 * @generated SignedSource<<5edd9d9f6b22e7f3cb690e1ba4395b6e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsAssignmentStatus = "ACCEPTED" | "ASSIGNED" | "CANCELLED" | "CLOSED" | "COMPLETED" | "DELETED" | "DRAFT" | "IN_PROGRESS" | "OVERDUE" | "RETURNED" | "SUBMITTED";
export type CloseIcpmsAssignmentInput = {
  id: string;
};
export type IcpmsAssignmentsPageCloseMutation$variables = {
  input: CloseIcpmsAssignmentInput;
};
export type IcpmsAssignmentsPageCloseMutation$data = {
  readonly closeIcpmsAssignment: {
    readonly assignment: {
      readonly id: string;
      readonly status: IcpmsAssignmentStatus;
    };
  };
};
export type IcpmsAssignmentsPageCloseMutation = {
  response: IcpmsAssignmentsPageCloseMutation$data;
  variables: IcpmsAssignmentsPageCloseMutation$variables;
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
    "concreteType": "CloseIcpmsAssignmentPayload",
    "kind": "LinkedField",
    "name": "closeIcpmsAssignment",
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
    "name": "IcpmsAssignmentsPageCloseMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsAssignmentsPageCloseMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6063e683a6bb21721f99490de3dc798a",
    "id": null,
    "metadata": {},
    "name": "IcpmsAssignmentsPageCloseMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsAssignmentsPageCloseMutation(\n  $input: CloseIcpmsAssignmentInput!\n) {\n  closeIcpmsAssignment(input: $input) {\n    assignment {\n      id\n      status\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b8f8ba9e4b19a6f04f666d48d5496c89";

export default node;
