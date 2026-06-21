/**
 * @generated SignedSource<<304b62303b7ef3e81deb863d4e2fb402>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsAssignmentStatus = "ACCEPTED" | "ASSIGNED" | "CANCELLED" | "CLOSED" | "COMPLETED" | "DELETED" | "DRAFT" | "IN_PROGRESS" | "OVERDUE" | "RETURNED" | "SUBMITTED";
export type StartIcpmsAssignmentInput = {
  id: string;
};
export type IcpmsAssignmentsPageStartMutation$variables = {
  input: StartIcpmsAssignmentInput;
};
export type IcpmsAssignmentsPageStartMutation$data = {
  readonly startIcpmsAssignment: {
    readonly assignment: {
      readonly id: string;
      readonly progressPercent: number;
      readonly status: IcpmsAssignmentStatus;
    };
  };
};
export type IcpmsAssignmentsPageStartMutation = {
  response: IcpmsAssignmentsPageStartMutation$data;
  variables: IcpmsAssignmentsPageStartMutation$variables;
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
    "concreteType": "StartIcpmsAssignmentPayload",
    "kind": "LinkedField",
    "name": "startIcpmsAssignment",
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
    "name": "IcpmsAssignmentsPageStartMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsAssignmentsPageStartMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0eb657986aec7d1447f4c3a302245be8",
    "id": null,
    "metadata": {},
    "name": "IcpmsAssignmentsPageStartMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsAssignmentsPageStartMutation(\n  $input: StartIcpmsAssignmentInput!\n) {\n  startIcpmsAssignment(input: $input) {\n    assignment {\n      id\n      status\n      progressPercent\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "fafe0d4546a29294f772b479861e1cad";

export default node;
