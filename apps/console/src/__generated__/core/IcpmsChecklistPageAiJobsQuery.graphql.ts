/**
 * @generated SignedSource<<6e8333a1248a06f65437ed9655aa6819>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsAiReviewJobStatus = "CANCELLED" | "COMPLETED" | "FAILED" | "PARTIAL" | "QUEUED" | "RUNNING";
export type IcpmsChecklistPageAiJobsQuery$variables = {
  organizationId: string;
};
export type IcpmsChecklistPageAiJobsQuery$data = {
  readonly icpmsAiReviewJobs: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly document: {
          readonly code: string;
          readonly title: string;
        };
        readonly documentVersion: {
          readonly versionCode: string;
        };
        readonly finishedAt: string | null | undefined;
        readonly id: string;
        readonly jobCode: string;
        readonly status: IcpmsAiReviewJobStatus;
        readonly totalAccepted: number;
        readonly totalSuggestions: number;
      };
    }>;
  };
};
export type IcpmsChecklistPageAiJobsQuery = {
  response: IcpmsChecklistPageAiJobsQuery$data;
  variables: IcpmsChecklistPageAiJobsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "organizationId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "organizationId",
    "variableName": "organizationId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "jobCode",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalSuggestions",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalAccepted",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "code",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "versionCode",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "finishedAt",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IcpmsChecklistPageAiJobsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "IcpmsDocument",
                    "kind": "LinkedField",
                    "name": "document",
                    "plural": false,
                    "selections": [
                      (v7/*: any*/),
                      (v8/*: any*/)
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
                      (v9/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v10/*: any*/)
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
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsChecklistPageAiJobsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "IcpmsDocument",
                    "kind": "LinkedField",
                    "name": "document",
                    "plural": false,
                    "selections": [
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v2/*: any*/)
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
                      (v9/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v10/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8c4f63f9e93c5ea59dfeb1a61cf9f5fe",
    "id": null,
    "metadata": {},
    "name": "IcpmsChecklistPageAiJobsQuery",
    "operationKind": "query",
    "text": "query IcpmsChecklistPageAiJobsQuery(\n  $organizationId: ID!\n) {\n  icpmsAiReviewJobs(organizationId: $organizationId) {\n    edges {\n      node {\n        id\n        jobCode\n        status\n        totalSuggestions\n        totalAccepted\n        document {\n          code\n          title\n          id\n        }\n        documentVersion {\n          versionCode\n          id\n        }\n        finishedAt\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "24c39330117453cebc7c56eb1a48b7c3";

export default node;
