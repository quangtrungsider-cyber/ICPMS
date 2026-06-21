/**
 * @generated SignedSource<<ca4ee2067bcc296eb44d20d04b245267>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsExtractedTextBlockType = "FOOTNOTE" | "HEADING" | "PAGE" | "PARAGRAPH" | "TABLE" | "UNKNOWN";
export type IcpmsIngestionJobDetailPageTextBlocksQuery$variables = {
  jobId: string;
};
export type IcpmsIngestionJobDetailPageTextBlocksQuery$data = {
  readonly ingestionJobTextBlocks: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly blockIndex: number;
        readonly blockType: IcpmsExtractedTextBlockType;
        readonly charCount: number;
        readonly id: string;
        readonly normalizedText: string;
        readonly pageNumber: number | null | undefined;
        readonly rawText: string;
        readonly wordCount: number;
      };
    }>;
    readonly totalCount: number;
  };
};
export type IcpmsIngestionJobDetailPageTextBlocksQuery = {
  response: IcpmsIngestionJobDetailPageTextBlocksQuery$data;
  variables: IcpmsIngestionJobDetailPageTextBlocksQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "jobId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "jobId",
        "variableName": "jobId"
      }
    ],
    "concreteType": "IcpmsExtractedTextBlockConnection",
    "kind": "LinkedField",
    "name": "ingestionJobTextBlocks",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalCount",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsExtractedTextBlockEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "IcpmsExtractedTextBlock",
            "kind": "LinkedField",
            "name": "node",
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
                "name": "blockIndex",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "pageNumber",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "blockType",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "rawText",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "normalizedText",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "charCount",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "wordCount",
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
    "name": "IcpmsIngestionJobDetailPageTextBlocksQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsIngestionJobDetailPageTextBlocksQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "017a8c90b78e71bdea5a95ff40d59932",
    "id": null,
    "metadata": {},
    "name": "IcpmsIngestionJobDetailPageTextBlocksQuery",
    "operationKind": "query",
    "text": "query IcpmsIngestionJobDetailPageTextBlocksQuery(\n  $jobId: ID!\n) {\n  ingestionJobTextBlocks(jobId: $jobId) {\n    totalCount\n    edges {\n      node {\n        id\n        blockIndex\n        pageNumber\n        blockType\n        rawText\n        normalizedText\n        charCount\n        wordCount\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "15780090a6110565c15f5f1ffe639415";

export default node;
