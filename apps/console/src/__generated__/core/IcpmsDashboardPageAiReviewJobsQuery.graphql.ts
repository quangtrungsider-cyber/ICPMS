/**
 * @generated SignedSource<<314386b5888a4ef4a8c192169eac0751>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsAiReviewJobStatus = "CANCELLED" | "COMPLETED" | "FAILED" | "PARTIAL" | "QUEUED" | "RUNNING";
export type IcpmsDashboardPageAiReviewJobsQuery$variables = {
  organizationId: string;
};
export type IcpmsDashboardPageAiReviewJobsQuery$data = {
  readonly icpmsAiReviewJobs: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly createdAt: string;
        readonly document: {
          readonly code: string;
          readonly title: string;
        };
        readonly documentVersion: {
          readonly versionCode: string;
        };
        readonly id: string;
        readonly jobCode: string;
        readonly status: IcpmsAiReviewJobStatus;
        readonly totalAccepted: number;
        readonly totalRejected: number;
        readonly totalRequirements: number;
        readonly totalSuggestions: number;
      };
    }>;
  };
};
export type IcpmsDashboardPageAiReviewJobsQuery = {
  response: IcpmsDashboardPageAiReviewJobsQuery$data;
  variables: IcpmsDashboardPageAiReviewJobsQuery$variables;
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
  "name": "totalRequirements",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalSuggestions",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalAccepted",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalRejected",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "code",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "versionCode",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IcpmsDashboardPageAiReviewJobsQuery",
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
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "IcpmsDocument",
                    "kind": "LinkedField",
                    "name": "document",
                    "plural": false,
                    "selections": [
                      (v10/*: any*/),
                      (v11/*: any*/)
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
                      (v12/*: any*/)
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
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsDashboardPageAiReviewJobsQuery",
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
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "IcpmsDocument",
                    "kind": "LinkedField",
                    "name": "document",
                    "plural": false,
                    "selections": [
                      (v10/*: any*/),
                      (v11/*: any*/),
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
                      (v12/*: any*/),
                      (v2/*: any*/)
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
    ]
  },
  "params": {
    "cacheID": "078a31f4f8cf350f09eb40c86fdd9716",
    "id": null,
    "metadata": {},
    "name": "IcpmsDashboardPageAiReviewJobsQuery",
    "operationKind": "query",
    "text": "query IcpmsDashboardPageAiReviewJobsQuery(\n  $organizationId: ID!\n) {\n  icpmsAiReviewJobs(organizationId: $organizationId) {\n    edges {\n      node {\n        id\n        jobCode\n        status\n        totalRequirements\n        totalSuggestions\n        totalAccepted\n        totalRejected\n        createdAt\n        document {\n          code\n          title\n          id\n        }\n        documentVersion {\n          versionCode\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "35a5bcc8d94ebb6a3d97e89d3b4e45eb";

export default node;
