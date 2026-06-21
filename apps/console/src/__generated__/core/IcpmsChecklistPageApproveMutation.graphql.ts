/**
 * @generated SignedSource<<8fc474ffa094733a30c206e8bd992323>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsChecklistApprovalStatus = "APPROVED" | "NEEDS_REVISION" | "PENDING_REVIEW" | "REJECTED";
export type IcpmsChecklistStatus = "ACTIVE" | "ARCHIVED" | "DELETED" | "DRAFT" | "INACTIVE" | "NEEDS_REVIEW";
export type ApproveIcpmsChecklistInput = {
  id: string;
};
export type IcpmsChecklistPageApproveMutation$variables = {
  input: ApproveIcpmsChecklistInput;
};
export type IcpmsChecklistPageApproveMutation$data = {
  readonly approveIcpmsChecklist: {
    readonly checklist: {
      readonly approvalStatus: IcpmsChecklistApprovalStatus;
      readonly approvedAt: string | null | undefined;
      readonly id: string;
      readonly status: IcpmsChecklistStatus;
    };
  };
};
export type IcpmsChecklistPageApproveMutation = {
  response: IcpmsChecklistPageApproveMutation$data;
  variables: IcpmsChecklistPageApproveMutation$variables;
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
    "concreteType": "ApproveIcpmsChecklistPayload",
    "kind": "LinkedField",
    "name": "approveIcpmsChecklist",
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
            "name": "approvedAt",
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
    "name": "IcpmsChecklistPageApproveMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsChecklistPageApproveMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d9f2d1524a9c02b7d6981e54232f48b3",
    "id": null,
    "metadata": {},
    "name": "IcpmsChecklistPageApproveMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsChecklistPageApproveMutation(\n  $input: ApproveIcpmsChecklistInput!\n) {\n  approveIcpmsChecklist(input: $input) {\n    checklist {\n      id\n      status\n      approvalStatus\n      approvedAt\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d6ec68f1a32156baa68451c714521262";

export default node;
