/**
 * @generated SignedSource<<d346ffd314e3736b20d343ad08bc970a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsAiReviewJobStatus = "CANCELLED" | "COMPLETED" | "FAILED" | "PARTIAL" | "QUEUED" | "RUNNING";
export type CancelIcpmsAiReviewJobInput = {
  id: string;
};
export type IcpmsAiReviewPageCancelJobMutation$variables = {
  input: CancelIcpmsAiReviewJobInput;
};
export type IcpmsAiReviewPageCancelJobMutation$data = {
  readonly cancelIcpmsAiReviewJob: {
    readonly job: {
      readonly finishedAt: string | null | undefined;
      readonly id: string;
      readonly status: IcpmsAiReviewJobStatus;
    };
  };
};
export type IcpmsAiReviewPageCancelJobMutation = {
  response: IcpmsAiReviewPageCancelJobMutation$data;
  variables: IcpmsAiReviewPageCancelJobMutation$variables;
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
    "concreteType": "CancelIcpmsAiReviewJobPayload",
    "kind": "LinkedField",
    "name": "cancelIcpmsAiReviewJob",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsAiReviewJob",
        "kind": "LinkedField",
        "name": "job",
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
            "name": "finishedAt",
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
    "name": "IcpmsAiReviewPageCancelJobMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsAiReviewPageCancelJobMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "be783fc62d5b4d89f43e911da97af39f",
    "id": null,
    "metadata": {},
    "name": "IcpmsAiReviewPageCancelJobMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsAiReviewPageCancelJobMutation(\n  $input: CancelIcpmsAiReviewJobInput!\n) {\n  cancelIcpmsAiReviewJob(input: $input) {\n    job {\n      id\n      status\n      finishedAt\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0508810506f122e7d4734007143001a0";

export default node;
