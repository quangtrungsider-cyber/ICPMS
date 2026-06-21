/**
 * @generated SignedSource<<65b58ef62e66679a18f77175aa4a6562>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsAssignmentStatus = "ACCEPTED" | "ASSIGNED" | "CANCELLED" | "CLOSED" | "COMPLETED" | "DELETED" | "DRAFT" | "IN_PROGRESS" | "OVERDUE" | "RETURNED" | "SUBMITTED";
export type AcceptIcpmsAssignmentInput = {
  id: string;
};
export type IcpmsAssignmentsPageAcceptMutation$variables = {
  input: AcceptIcpmsAssignmentInput;
};
export type IcpmsAssignmentsPageAcceptMutation$data = {
  readonly acceptIcpmsAssignment: {
    readonly assignment: {
      readonly id: string;
      readonly status: IcpmsAssignmentStatus;
    };
  };
};
export type IcpmsAssignmentsPageAcceptMutation = {
  response: IcpmsAssignmentsPageAcceptMutation$data;
  variables: IcpmsAssignmentsPageAcceptMutation$variables;
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
    "concreteType": "AcceptIcpmsAssignmentPayload",
    "kind": "LinkedField",
    "name": "acceptIcpmsAssignment",
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
    "name": "IcpmsAssignmentsPageAcceptMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsAssignmentsPageAcceptMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "aafedeb49ebc7ed9f23603a230630ee7",
    "id": null,
    "metadata": {},
    "name": "IcpmsAssignmentsPageAcceptMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsAssignmentsPageAcceptMutation(\n  $input: AcceptIcpmsAssignmentInput!\n) {\n  acceptIcpmsAssignment(input: $input) {\n    assignment {\n      id\n      status\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "31e19d49617105b1e1b211a7ecdc54b7";

export default node;
