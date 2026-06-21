/**
 * @generated SignedSource<<c585b96d0d62f6ac694d81a8260f52e6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsAiReviewPageDocsQuery$variables = {
  organizationId: string;
};
export type IcpmsAiReviewPageDocsQuery$data = {
  readonly organization: {
    readonly icpmsDocuments?: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly code: string;
          readonly id: string;
          readonly title: string;
          readonly versions: {
            readonly edges: ReadonlyArray<{
              readonly node: {
                readonly id: string;
                readonly isCurrent: boolean;
                readonly versionCode: string;
                readonly versionName: string;
              };
            }>;
          };
        };
      }>;
    };
  };
};
export type IcpmsAiReviewPageDocsQuery = {
  response: IcpmsAiReviewPageDocsQuery$data;
  variables: IcpmsAiReviewPageDocsQuery$variables;
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
    "name": "id",
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
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 100
        }
      ],
      "concreteType": "IcpmsDocumentConnection",
      "kind": "LinkedField",
      "name": "icpmsDocuments",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "IcpmsDocumentEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "IcpmsDocument",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v2/*: any*/),
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
                },
                {
                  "alias": null,
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "first",
                      "value": 20
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
                            (v2/*: any*/),
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
                              "name": "isCurrent",
                              "storageKey": null
                            }
                          ],
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": "versions(first:20)"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "icpmsDocuments(first:100)"
    }
  ],
  "type": "Organization",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IcpmsAiReviewPageDocsQuery",
    "selections": [
      {
        "alias": "organization",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v3/*: any*/)
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
    "name": "IcpmsAiReviewPageDocsQuery",
    "selections": [
      {
        "alias": "organization",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v3/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "cc08eb1307c518fa3115035870e48083",
    "id": null,
    "metadata": {},
    "name": "IcpmsAiReviewPageDocsQuery",
    "operationKind": "query",
    "text": "query IcpmsAiReviewPageDocsQuery(\n  $organizationId: ID!\n) {\n  organization: node(id: $organizationId) {\n    __typename\n    ... on Organization {\n      icpmsDocuments(first: 100) {\n        edges {\n          node {\n            id\n            code\n            title\n            versions(first: 20) {\n              edges {\n                node {\n                  id\n                  versionCode\n                  versionName\n                  isCurrent\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "a249d96fd0690b06b777501cf127d4ee";

export default node;
