/**
 * @generated SignedSource<<b84086210d4af68eb35cdf811db99c47>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsAiReviewSuggestionStatus = "ACCEPTED" | "AI_SUGGESTED" | "ARCHIVED" | "DELETED" | "EDITED" | "NEEDS_HUMAN_REVIEW" | "REJECTED";
export type RejectIcpmsAiReviewSuggestionInput = {
  id: string;
  rejectionReason?: string | null | undefined;
};
export type IcpmsAiReviewPageRejectSuggestionMutation$variables = {
  input: RejectIcpmsAiReviewSuggestionInput;
};
export type IcpmsAiReviewPageRejectSuggestionMutation$data = {
  readonly rejectIcpmsAiReviewSuggestion: {
    readonly suggestion: {
      readonly id: string;
      readonly rejectedAt: string | null | undefined;
      readonly rejectionReason: string | null | undefined;
      readonly status: IcpmsAiReviewSuggestionStatus;
    };
  };
};
export type IcpmsAiReviewPageRejectSuggestionMutation = {
  response: IcpmsAiReviewPageRejectSuggestionMutation$data;
  variables: IcpmsAiReviewPageRejectSuggestionMutation$variables;
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
    "concreteType": "RejectIcpmsAiReviewSuggestionPayload",
    "kind": "LinkedField",
    "name": "rejectIcpmsAiReviewSuggestion",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsAiReviewSuggestion",
        "kind": "LinkedField",
        "name": "suggestion",
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
    "name": "IcpmsAiReviewPageRejectSuggestionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsAiReviewPageRejectSuggestionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "177d5d1295ec796e61144bd6188f1863",
    "id": null,
    "metadata": {},
    "name": "IcpmsAiReviewPageRejectSuggestionMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsAiReviewPageRejectSuggestionMutation(\n  $input: RejectIcpmsAiReviewSuggestionInput!\n) {\n  rejectIcpmsAiReviewSuggestion(input: $input) {\n    suggestion {\n      id\n      status\n      rejectedAt\n      rejectionReason\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "257aa587a422e2427cfe78426a62d0b3";

export default node;
