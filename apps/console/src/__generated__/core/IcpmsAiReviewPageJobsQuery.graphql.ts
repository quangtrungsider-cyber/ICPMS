/**
 * @generated SignedSource<<15e9a155ad9ddd74b8698f2cd4e260ae>>
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
export type IcpmsAiReviewPageJobsQuery$variables = {
  organizationId: string;
};
export type IcpmsAiReviewPageJobsQuery$data = {
  readonly icpmsAiReviewJobs: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly aiProvider: IcpmsAiProvider;
        readonly createdAt: string;
        readonly document: {
          readonly code: string;
          readonly id: string;
          readonly title: string;
        };
        readonly documentVersion: {
          readonly id: string;
          readonly versionCode: string;
        };
        readonly errorMessage: string | null | undefined;
        readonly finishedAt: string | null | undefined;
        readonly id: string;
        readonly jobCode: string;
        readonly processedRequirements: number;
        readonly progressPercent: number;
        readonly reviewScope: IcpmsAiReviewScope;
        readonly status: IcpmsAiReviewJobStatus;
        readonly totalAccepted: number;
        readonly totalRejected: number;
        readonly totalRequirements: number;
        readonly totalSuggestions: number;
        readonly warningMessage: string | null | undefined;
      };
    }>;
  };
};
export type IcpmsAiReviewPageJobsQuery = {
  response: IcpmsAiReviewPageJobsQuery$data;
  variables: IcpmsAiReviewPageJobsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "organizationId"
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
        "name": "organizationId",
        "variableName": "organizationId"
      }
    ],
    "concreteType": "IcpmsAiReviewJobConnection",
    "kind": "LinkedField",
    "name": "icpmsAiReviewJobs",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsAiReviewJobEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "IcpmsAiReviewJob",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v1/*: any*/),
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
                "name": "reviewScope",
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
                "name": "totalRequirements",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "processedRequirements",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "totalSuggestions",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "totalAccepted",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "totalRejected",
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
                "name": "errorMessage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "warningMessage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "createdAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "finishedAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "IcpmsDocument",
                "kind": "LinkedField",
                "name": "document",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "code",
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
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "IcpmsDocumentVersion",
                "kind": "LinkedField",
                "name": "documentVersion",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "versionCode",
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
    "name": "IcpmsAiReviewPageJobsQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsAiReviewPageJobsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "40ab2bcac44ac1025a0eec85d3a1cfab",
    "id": null,
    "metadata": {},
    "name": "IcpmsAiReviewPageJobsQuery",
    "operationKind": "query",
    "text": "query IcpmsAiReviewPageJobsQuery(\n  $organizationId: ID!\n) {\n  icpmsAiReviewJobs(organizationId: $organizationId) {\n    edges {\n      node {\n        id\n        jobCode\n        reviewScope\n        status\n        progressPercent\n        totalRequirements\n        processedRequirements\n        totalSuggestions\n        totalAccepted\n        totalRejected\n        aiProvider\n        errorMessage\n        warningMessage\n        createdAt\n        finishedAt\n        document {\n          id\n          code\n          title\n        }\n        documentVersion {\n          id\n          versionCode\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a3e8db9a61db99a2a8b47a44dd6e3163";

export default node;
