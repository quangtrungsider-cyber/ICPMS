/**
 * @generated SignedSource<<cb87608af6571a1b3ec665348316f418>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsAiProvider = "ANTHROPIC" | "GEMINI" | "OPENAI" | "RULE_BASED";
export type IcpmsAiReviewJobStatus = "CANCELLED" | "COMPLETED" | "FAILED" | "PARTIAL" | "QUEUED" | "RUNNING";
export type IcpmsAiReviewScope = "ALL" | "NEEDS_REVIEW" | "SELECTED";
export type CreateIcpmsAiReviewJobInput = {
  aiModel?: string | null | undefined;
  aiProvider: IcpmsAiProvider;
  documentId: string;
  documentVersionId: string;
  organizationId: string;
  reviewScope: IcpmsAiReviewScope;
};
export type IcpmsAiReviewPageCreateJobMutation$variables = {
  input: CreateIcpmsAiReviewJobInput;
};
export type IcpmsAiReviewPageCreateJobMutation$data = {
  readonly createIcpmsAiReviewJob: {
    readonly job: {
      readonly aiModel: string | null | undefined;
      readonly aiProvider: IcpmsAiProvider;
      readonly id: string;
      readonly jobCode: string;
      readonly status: IcpmsAiReviewJobStatus;
    };
  };
};
export type IcpmsAiReviewPageCreateJobMutation = {
  response: IcpmsAiReviewPageCreateJobMutation$data;
  variables: IcpmsAiReviewPageCreateJobMutation$variables;
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
    "concreteType": "CreateIcpmsAiReviewJobPayload",
    "kind": "LinkedField",
    "name": "createIcpmsAiReviewJob",
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
            "name": "jobCode",
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
            "name": "aiProvider",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "aiModel",
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
    "name": "IcpmsAiReviewPageCreateJobMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsAiReviewPageCreateJobMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "dad3fb2c892e1c5fecdd745d0262f871",
    "id": null,
    "metadata": {},
    "name": "IcpmsAiReviewPageCreateJobMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsAiReviewPageCreateJobMutation(\n  $input: CreateIcpmsAiReviewJobInput!\n) {\n  createIcpmsAiReviewJob(input: $input) {\n    job {\n      id\n      jobCode\n      status\n      aiProvider\n      aiModel\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a54a6c70801d028f14a56f289794740e";

export default node;
