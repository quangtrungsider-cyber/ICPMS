/**
 * @generated SignedSource<<984da6523ab061d1d11415c1baf9fd51>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsChecklistApprovalStatus = "APPROVED" | "NEEDS_REVISION" | "PENDING_REVIEW" | "REJECTED";
export type IcpmsChecklistStatus = "ACTIVE" | "ARCHIVED" | "DELETED" | "DRAFT" | "INACTIVE" | "NEEDS_REVIEW";
export type RejectIcpmsChecklistInput = {
  id: string;
  rejectionReason: string;
};
export type IcpmsChecklistPageRejectMutation$variables = {
  input: RejectIcpmsChecklistInput;
};
export type IcpmsChecklistPageRejectMutation$data = {
  readonly rejectIcpmsChecklist: {
    readonly checklist: {
      readonly approvalStatus: IcpmsChecklistApprovalStatus;
      readonly id: string;
      readonly rejectedAt: string | null | undefined;
      readonly rejectionReason: string | null | undefined;
      readonly status: IcpmsChecklistStatus;
    };
  };
};
export type IcpmsChecklistPageRejectMutation = {
  response: IcpmsChecklistPageRejectMutation$data;
  variables: IcpmsChecklistPageRejectMutation$variables;
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
    "concreteType": "RejectIcpmsChecklistPayload",
    "kind": "LinkedField",
    "name": "rejectIcpmsChecklist",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsChecklist",
        "kind": "LinkedField",
        "name": "checklist",
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
            "name": "approvalStatus",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "rejectedAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "rejectionReason",
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
    "name": "IcpmsChecklistPageRejectMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsChecklistPageRejectMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6586eacb7cabad8630170d7dc1150526",
    "id": null,
    "metadata": {},
    "name": "IcpmsChecklistPageRejectMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsChecklistPageRejectMutation(\n  $input: RejectIcpmsChecklistInput!\n) {\n  rejectIcpmsChecklist(input: $input) {\n    checklist {\n      id\n      status\n      approvalStatus\n      rejectedAt\n      rejectionReason\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "969c8471528bcd78d6b4fb9ca4e5c6fe";

export default node;
