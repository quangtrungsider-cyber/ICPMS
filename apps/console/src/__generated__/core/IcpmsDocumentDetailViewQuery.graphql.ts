/**
 * @generated SignedSource<<e4e0b956452870b0bf793fe2fc905a36>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsDocumentGroup = "CANSO" | "EASA_EU" | "EUROCAE_RTCA" | "EUROCONTROL" | "ICAO" | "ICAO_APAC" | "ISO" | "OTHER" | "VATM" | "VIETNAM_LEGAL";
export type IcpmsDocumentStatus = "ACTIVE" | "ARCHIVED" | "DELETED" | "DRAFT" | "SUPERSEDED" | "UNDER_REVIEW";
export type IcpmsDocumentType = "CANSO_GUIDANCE" | "CIRCULAR_VN" | "COMPLIANCE_DOCUMENT" | "DECISION" | "DECREE" | "EASA_EU" | "EUROCAE_RTCA" | "EUROCONTROL" | "FORM" | "GUIDANCE" | "ICAO_ANNEX" | "ICAO_APAC" | "ICAO_CIRCULAR" | "ICAO_DOC" | "INTERNAL_REGULATION" | "ISO_STANDARD" | "OTHER" | "PROCEDURE" | "SAFETY_DOCUMENT" | "TECHNICAL_DOCUMENT" | "VATM_INTERNAL";
export type IcpmsDocumentVersionRawFileStatus = "FAILED" | "NOT_UPLOADED" | "PROCESSING" | "UPLOADED";
export type IcpmsDocumentVersionStatus = "ARCHIVED" | "CURRENT" | "DELETED" | "DRAFT" | "EFFECTIVE" | "EXPIRED" | "SUPERSEDED";
export type IcpmsDocumentDetailViewQuery$variables = {
  documentId: string;
};
export type IcpmsDocumentDetailViewQuery$data = {
  readonly document: {
    readonly __typename: "IcpmsDocument";
    readonly code: string;
    readonly documentGroup: IcpmsDocumentGroup | null | undefined;
    readonly documentType: IcpmsDocumentType;
    readonly id: string;
    readonly mainDomain: string | null | undefined;
    readonly status: IcpmsDocumentStatus;
    readonly title: string;
    readonly updatedAt: string;
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
          readonly rawFileStatus: IcpmsDocumentVersionRawFileStatus;
          readonly status: IcpmsDocumentVersionStatus;
          readonly versionCode: string;
          readonly versionName: string;
        };
      }>;
    };
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type IcpmsDocumentDetailViewQuery = {
  response: IcpmsDocumentDetailViewQuery$data;
  variables: IcpmsDocumentDetailViewQuery$variables;
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
  "name": "code",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "documentType",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "documentGroup",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "mainDomain",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": [
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
  ],
  "concreteType": "IcpmsDocumentVersionConnection",
  "kind": "LinkedField",
  "name": "versions",
  "plural": false,
  "selections": [
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
              "name": "effectiveDate",
              "storageKey": null
            },
            (v9/*: any*/),
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
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "versions(first:50,orderBy:\"CREATED_AT\")"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IcpmsDocumentDetailViewQuery",
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
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/)
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
    "name": "IcpmsDocumentDetailViewQuery",
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
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/)
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
    "cacheID": "a3f638b35fd0d3dbef63bfb0ebbc0940",
    "id": null,
    "metadata": {},
    "name": "IcpmsDocumentDetailViewQuery",
    "operationKind": "query",
    "text": "query IcpmsDocumentDetailViewQuery(\n  $documentId: ID!\n) {\n  document: node(id: $documentId) {\n    __typename\n    ... on IcpmsDocument {\n      id\n      code\n      title\n      documentType\n      documentGroup\n      mainDomain\n      status\n      updatedAt\n      versions(first: 50, orderBy: CREATED_AT) {\n        edges {\n          node {\n            id\n            versionCode\n            versionName\n            edition\n            amendment\n            effectiveDate\n            status\n            isCurrent\n            rawFileStatus\n            files(first: 1, filter: {isActive: true}) {\n              edges {\n                node {\n                  id\n                  originalFileName\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "073a0a9c9b079de7d4e1e20e20834441";

export default node;
