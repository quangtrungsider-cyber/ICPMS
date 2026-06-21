/**
 * @generated SignedSource<<667c02623c18971960809b9868df42dc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsAiReviewSuggestionStatus = "ACCEPTED" | "AI_SUGGESTED" | "ARCHIVED" | "DELETED" | "EDITED" | "NEEDS_HUMAN_REVIEW" | "REJECTED";
export type IcpmsChecklistPageSuggestionsQuery$variables = {
  jobId: string;
};
export type IcpmsChecklistPageSuggestionsQuery$data = {
  readonly icpmsAiReviewSuggestions: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly aiConfidence: number;
        readonly id: string;
        readonly requirement: {
          readonly id: string;
          readonly requirementCode: string;
          readonly title: string;
        };
        readonly status: IcpmsAiReviewSuggestionStatus;
        readonly suggestedChecklistQuestion: string | null | undefined;
        readonly suggestedPriority: string | null | undefined;
        readonly suggestedResponsibleUnit: string | null | undefined;
      };
    }>;
  };
};
export type IcpmsChecklistPageSuggestionsQuery = {
  response: IcpmsChecklistPageSuggestionsQuery$data;
  variables: IcpmsChecklistPageSuggestionsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "jobId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "jobId",
        "variableName": "jobId"
      }
    ],
    "concreteType": "IcpmsAiReviewSuggestionConnection",
    "kind": "LinkedField",
    "name": "icpmsAiReviewSuggestions",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsAiReviewSuggestionEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "IcpmsAiReviewSuggestion",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v1/*: any*/),
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
                "name": "aiConfidence",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "suggestedChecklistQuestion",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "suggestedResponsibleUnit",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "suggestedPriority",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "IcpmsRequirement",
                "kind": "LinkedField",
                "name": "requirement",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "requirementCode",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
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
    "name": "IcpmsChecklistPageSuggestionsQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsChecklistPageSuggestionsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "715ddad2ba7709e48b4022b1478ae418",
    "id": null,
    "metadata": {},
    "name": "IcpmsChecklistPageSuggestionsQuery",
    "operationKind": "query",
    "text": "query IcpmsChecklistPageSuggestionsQuery(\n  $jobId: ID!\n) {\n  icpmsAiReviewSuggestions(jobId: $jobId) {\n    edges {\n      node {\n        id\n        status\n        aiConfidence\n        suggestedChecklistQuestion\n        suggestedResponsibleUnit\n        suggestedPriority\n        requirement {\n          id\n          requirementCode\n          title\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0e0b1a0fa951f47007d2f90e523c4059";

export default node;
