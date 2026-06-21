/**
 * @generated SignedSource<<2a23960dc2d500243078912161deffe2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsIngestionExtractionMode = "AUTO" | "DOCX_TEXT" | "DOC_LEGACY" | "PDF_TEXT" | "TXT_TEXT";
export type IcpmsIngestionJobStatus = "CANCELLED" | "COMPLETED" | "FAILED" | "PARTIAL" | "QUEUED" | "RUNNING";
export type IcpmsIngestionJobType = "RE_EXTRACTION" | "TEXT_EXTRACTION" | "VALIDATION_ONLY";
export type IcpmsIngestionJobsPageJobsQuery$variables = {
  organizationId: string;
};
export type IcpmsIngestionJobsPageJobsQuery$data = {
  readonly ingestionJobs: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly createdAt: string;
        readonly document: {
          readonly code: string;
          readonly id: string;
          readonly title: string;
        };
        readonly documentFile: {
          readonly id: string;
          readonly originalFileName: string;
        };
        readonly documentVersion: {
          readonly id: string;
          readonly versionCode: string;
        };
        readonly errorMessage: string | null | undefined;
        readonly extractionMode: IcpmsIngestionExtractionMode;
        readonly finishedAt: string | null | undefined;
        readonly id: string;
        readonly jobCode: string;
        readonly jobType: IcpmsIngestionJobType;
        readonly languageDetected: string | null | undefined;
        readonly progressPercent: number;
        readonly startedAt: string | null | undefined;
        readonly status: IcpmsIngestionJobStatus;
        readonly totalBlocks: number;
        readonly totalChars: number;
        readonly totalPages: number;
        readonly warningMessage: string | null | undefined;
      };
    }>;
  };
};
export type IcpmsIngestionJobsPageJobsQuery = {
  response: IcpmsIngestionJobsPageJobsQuery$data;
  variables: IcpmsIngestionJobsPageJobsQuery$variables;
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
    "concreteType": "IcpmsIngestionJobConnection",
    "kind": "LinkedField",
    "name": "ingestionJobs",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsIngestionJobEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "IcpmsIngestionJob",
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
                "name": "jobType",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "extractionMode",
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
                "name": "totalBlocks",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "totalPages",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "totalChars",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "languageDetected",
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
                "name": "startedAt",
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
                "kind": "ScalarField",
                "name": "createdAt",
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
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "IcpmsDocumentFile",
                "kind": "LinkedField",
                "name": "documentFile",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "originalFileName",
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
    "name": "IcpmsIngestionJobsPageJobsQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsIngestionJobsPageJobsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "f2bd6b587da3ca4023bc3157e520dcd9",
    "id": null,
    "metadata": {},
    "name": "IcpmsIngestionJobsPageJobsQuery",
    "operationKind": "query",
    "text": "query IcpmsIngestionJobsPageJobsQuery(\n  $organizationId: ID!\n) {\n  ingestionJobs(organizationId: $organizationId) {\n    edges {\n      node {\n        id\n        jobCode\n        jobType\n        extractionMode\n        status\n        progressPercent\n        totalBlocks\n        totalPages\n        totalChars\n        languageDetected\n        errorMessage\n        warningMessage\n        startedAt\n        finishedAt\n        createdAt\n        document {\n          id\n          code\n          title\n        }\n        documentVersion {\n          id\n          versionCode\n        }\n        documentFile {\n          id\n          originalFileName\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7a5bd26b03bc5595aacd99a607c7089c";

export default node;
