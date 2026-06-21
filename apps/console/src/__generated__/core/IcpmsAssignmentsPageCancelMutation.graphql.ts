/**
 * @generated SignedSource<<c7c0b15eca703268f3f43f080ae0d895>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsAssignmentStatus = "ACCEPTED" | "ASSIGNED" | "CANCELLED" | "CLOSED" | "COMPLETED" | "DELETED" | "DRAFT" | "IN_PROGRESS" | "OVERDUE" | "RETURNED" | "SUBMITTED";
export type CancelIcpmsAssignmentInput = {
  cancelReason: string;
  id: string;
};
export type IcpmsAssignmentsPageCancelMutation$variables = {
  input: CancelIcpmsAssignmentInput;
};
export type IcpmsAssignmentsPageCancelMutation$data = {
  readonly cancelIcpmsAssignment: {
    readonly assignment: {
      readonly id: string;
      readonly status: IcpmsAssignmentStatus;
    };
  };
};
export type IcpmsAssignmentsPageCancelMutation = {
  response: IcpmsAssignmentsPageCancelMutation$data;
  variables: IcpmsAssignmentsPageCancelMutation$variables;
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
    "concreteType": "CancelIcpmsAssignmentPayload",
    "kind": "LinkedField",
    "name": "cancelIcpmsAssignment",
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
    "name": "IcpmsAssignmentsPageCancelMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsAssignmentsPageCancelMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f6c134afb44a872a6c0083083bc14799",
    "id": null,
    "metadata": {},
    "name": "IcpmsAssignmentsPageCancelMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsAssignmentsPageCancelMutation(\n  $input: CancelIcpmsAssignmentInput!\n) {\n  cancelIcpmsAssignment(input: $input) {\n    assignment {\n      id\n      status\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f8f96ce7264510735100e089e51b5082";

export default node;
