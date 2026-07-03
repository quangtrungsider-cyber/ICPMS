/**
 * @generated SignedSource<<bcf1899ca9b89790f350096c593f320b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsAssignmentEvidenceStatus = "APPROVED" | "NOT_REQUIRED" | "REJECTED" | "REQUIRED_NOT_SUBMITTED" | "SUBMITTED";
export type IcpmsAssignmentStatus = "ACCEPTED" | "ASSIGNED" | "CANCELLED" | "CLOSED" | "COMPLETED" | "DELETED" | "DRAFT" | "IN_PROGRESS" | "OVERDUE" | "RETURNED" | "SUBMITTED";
export type SubmitIcpmsAssignmentUpdateInput = {
  actionPlanText?: string | null | undefined;
  currentStatusText: string;
  id: string;
  progressPercent: number;
  responseNote?: string | null | undefined;
};
export type IcpmsEvidencePageSubmitUpdateMutation$variables = {
  input: SubmitIcpmsAssignmentUpdateInput;
};
export type IcpmsEvidencePageSubmitUpdateMutation$data = {
  readonly submitIcpmsAssignmentUpdate: {
    readonly assignment: {
      readonly actionPlanText: string | null | undefined;
      readonly currentStatusText: string | null | undefined;
      readonly evidenceStatus: IcpmsAssignmentEvidenceStatus;
      readonly id: string;
      readonly progressPercent: number;
      readonly responseNote: string | null | undefined;
      readonly status: IcpmsAssignmentStatus;
      readonly updatedAt: string;
    };
  };
};
export type IcpmsEvidencePageSubmitUpdateMutation = {
  response: IcpmsEvidencePageSubmitUpdateMutation$data;
  variables: IcpmsEvidencePageSubmitUpdateMutation$variables;
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
    "concreteType": "SubmitIcpmsAssignmentUpdatePayload",
    "kind": "LinkedField",
    "name": "submitIcpmsAssignmentUpdate",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "currentStatusText",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "actionPlanText",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "responseNote",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "evidenceStatus",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updatedAt",
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
    "name": "IcpmsEvidencePageSubmitUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsEvidencePageSubmitUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4b8e8f614bc5827dcebd3e51547605d5",
    "id": null,
    "metadata": {},
    "name": "IcpmsEvidencePageSubmitUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsEvidencePageSubmitUpdateMutation(\n  $input: SubmitIcpmsAssignmentUpdateInput!\n) {\n  submitIcpmsAssignmentUpdate(input: $input) {\n    assignment {\n      id\n      status\n      progressPercent\n      currentStatusText\n      actionPlanText\n      responseNote\n      evidenceStatus\n      updatedAt\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e92b730c387667194c8c288fb7842cd1";

export default node;
