/**
 * @generated SignedSource<<dd2d46a7e98c6b2f5c95f831a3ad33b9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsAiReviewSuggestionStatus = "ACCEPTED" | "AI_SUGGESTED" | "ARCHIVED" | "DELETED" | "EDITED" | "NEEDS_HUMAN_REVIEW" | "REJECTED";
export type AcceptIcpmsAiReviewSuggestionInput = {
  id: string;
};
export type IcpmsAiReviewPageAcceptSuggestionMutation$variables = {
  input: AcceptIcpmsAiReviewSuggestionInput;
};
export type IcpmsAiReviewPageAcceptSuggestionMutation$data = {
  readonly acceptIcpmsAiReviewSuggestion: {
    readonly suggestion: {
      readonly acceptedAt: string | null | undefined;
      readonly id: string;
      readonly status: IcpmsAiReviewSuggestionStatus;
    };
  };
};
export type IcpmsAiReviewPageAcceptSuggestionMutation = {
  response: IcpmsAiReviewPageAcceptSuggestionMutation$data;
  variables: IcpmsAiReviewPageAcceptSuggestionMutation$variables;
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
    "concreteType": "AcceptIcpmsAiReviewSuggestionPayload",
    "kind": "LinkedField",
    "name": "acceptIcpmsAiReviewSuggestion",
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
            "name": "acceptedAt",
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
    "name": "IcpmsAiReviewPageAcceptSuggestionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsAiReviewPageAcceptSuggestionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5c5db46e4dde442358370ef56f268e61",
    "id": null,
    "metadata": {},
    "name": "IcpmsAiReviewPageAcceptSuggestionMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsAiReviewPageAcceptSuggestionMutation(\n  $input: AcceptIcpmsAiReviewSuggestionInput!\n) {\n  acceptIcpmsAiReviewSuggestion(input: $input) {\n    suggestion {\n      id\n      status\n      acceptedAt\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3bf2135b04aae49382c22695f4c210ba";

export default node;
