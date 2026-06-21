/**
 * @generated SignedSource<<0de9c8ce48ee92dadcd0f29a2229b7ba>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsDocumentVersionRawFileStatus = "FAILED" | "NOT_UPLOADED" | "PROCESSING" | "UPLOADED";
export type IcpmsDocumentVersionStatus = "ARCHIVED" | "CURRENT" | "DELETED" | "DRAFT" | "EFFECTIVE" | "EXPIRED" | "SUPERSEDED";
export type IcpmsIngestionJobStatus = "CANCELLED" | "COMPLETED" | "FAILED" | "PARTIAL" | "QUEUED" | "RUNNING";
export type IcpmsDocumentVersionsTabQuery$variables = {
  documentId: string;
};
export type IcpmsDocumentVersionsTabQuery$data = {
  readonly document: {
    readonly __typename: "IcpmsDocument";
    readonly id: string;
    readonly versions: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly amendment: string | null | undefined;
          readonly edition: string | null | undefined;
          readonly effectiveDate: string | null | undefined;
          readonly files: {
            readonly edges: ReadonlyArray<{
              readonly node: {
                readonly id: string;
                readonly originalFileName: string;
              };
            }>;
          };
          readonly id: string;
          readonly isCurrent: boolean;
          readonly latestIngestionJob: {
            readonly id: string;
            readonly progressPercent: number;
            readonly status: IcpmsIngestionJobStatus;
          } | null | undefined;
          readonly rawFileStatus: IcpmsDocumentVersionRawFileStatus;
          readonly status: IcpmsDocumentVersionStatus;
          readonly versionCode: string;
          readonly versionName: string;
          readonly versionNumber: string | null | undefined;
        };
      }>;
    };
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type IcpmsDocumentVersionsTabQuery = {
  response: IcpmsDocumentVersionsTabQuery$data;
  variables: IcpmsDocumentVersionsTabQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "documentId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "documentId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v5 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "IcpmsDocumentVersionEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsDocumentVersion",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "versionCode",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "versionName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "edition",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "amendment",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "versionNumber",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "effectiveDate",
            "storageKey": null
          },
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isCurrent",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "rawFileStatus",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "IcpmsIngestionJob",
            "kind": "LinkedField",
            "name": "latestIngestionJob",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "progressPercent",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "filter",
                "value": {
                  "isActive": true
                }
              },
              {
                "kind": "Literal",
                "name": "first",
                "value": 1
              }
            ],
            "concreteType": "IcpmsDocumentFileConnection",
            "kind": "LinkedField",
            "name": "files",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "IcpmsDocumentFileEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "IcpmsDocumentFile",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
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
            "storageKey": "files(filter:{\"isActive\":true},first:1)"
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cursor",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "PageInfo",
    "kind": "LinkedField",
    "name": "pageInfo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "endCursor",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hasNextPage",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v6 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 50
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "CREATED_AT"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IcpmsDocumentVersionsTabQuery",
    "selections": [
      {
        "alias": "document",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              {
                "alias": "versions",
                "args": null,
                "concreteType": "IcpmsDocumentVersionConnection",
                "kind": "LinkedField",
                "name": "__IcpmsDocumentVersionsTab_versions_connection",
                "plural": false,
                "selections": (v5/*: any*/),
                "storageKey": null
              }
            ],
            "type": "IcpmsDocument",
            "abstractKey": null
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
    "name": "IcpmsDocumentVersionsTabQuery",
    "selections": [
      {
        "alias": "document",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v6/*: any*/),
                "concreteType": "IcpmsDocumentVersionConnection",
                "kind": "LinkedField",
                "name": "versions",
                "plural": false,
                "selections": (v5/*: any*/),
                "storageKey": "versions(first:50,orderBy:\"CREATED_AT\")"
              },
              {
                "alias": null,
                "args": (v6/*: any*/),
                "filters": [],
                "handle": "connection",
                "key": "IcpmsDocumentVersionsTab_versions",
                "kind": "LinkedHandle",
                "name": "versions"
              }
            ],
            "type": "IcpmsDocument",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "74baabe6fba5a718a9adea01f0d74b55",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "document",
            "versions"
          ]
        }
      ]
    },
    "name": "IcpmsDocumentVersionsTabQuery",
    "operationKind": "query",
    "text": "query IcpmsDocumentVersionsTabQuery(\n  $documentId: ID!\n) {\n  document: node(id: $documentId) {\n    __typename\n    ... on IcpmsDocument {\n      id\n      versions(first: 50, orderBy: CREATED_AT) {\n        edges {\n          node {\n            id\n            versionCode\n            versionName\n            edition\n            amendment\n            versionNumber\n            effectiveDate\n            status\n            isCurrent\n            rawFileStatus\n            latestIngestionJob {\n              id\n              status\n              progressPercent\n            }\n            files(first: 1, filter: {isActive: true}) {\n              edges {\n                node {\n                  id\n                  originalFileName\n                }\n              }\n            }\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "73bd2801a0e50b254f8bd96fdaeb2c86";

export default node;
