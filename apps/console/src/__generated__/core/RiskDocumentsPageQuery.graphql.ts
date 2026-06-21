/**
 * @generated SignedSource<<204adb1952c2237c2bf56a1cbe94dc8a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RiskDocumentsPageQuery$variables = {
  riskId: string;
};
export type RiskDocumentsPageQuery$data = {
  readonly node: {
    readonly __typename: "Risk";
    readonly canCreateDocumentMapping: boolean;
    readonly canDeleteDocumentMapping: boolean;
    readonly documents: {
      readonly __id: string;
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly " $fragmentSpreads": FragmentRefs<"LinkedDocumentsCardFragment">;
        };
      }>;
    };
    readonly id: string;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type RiskDocumentsPageQuery = {
  response: RiskDocumentsPageQuery$data;
  variables: RiskDocumentsPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "riskId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "riskId"
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
  "alias": "canCreateDocumentMapping",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:risk:create-document-mapping"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:risk:create-document-mapping\")"
},
v5 = {
  "alias": "canDeleteDocumentMapping",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:risk:delete-document-mapping"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:risk:delete-document-mapping\")"
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v7 = {
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
},
v8 = {
  "kind": "ClientExtension",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__id",
      "storageKey": null
    }
  ]
},
v9 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RiskDocumentsPageQuery",
    "selections": [
      {
        "alias": null,
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
              {
                "alias": "documents",
                "args": null,
                "concreteType": "DocumentConnection",
                "kind": "LinkedField",
                "name": "__RiskDocumentsPage_documents_connection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "DocumentEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Document",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "LinkedDocumentsCardFragment"
                          },
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/),
                  (v8/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "Risk",
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
    "name": "RiskDocumentsPageQuery",
    "selections": [
      {
        "alias": null,
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
              {
                "alias": null,
                "args": (v9/*: any*/),
                "concreteType": "DocumentConnection",
                "kind": "LinkedField",
                "name": "documents",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "DocumentEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Document",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "first",
                                "value": 1
                              }
                            ],
                            "concreteType": "DocumentVersionConnection",
                            "kind": "LinkedField",
                            "name": "versions",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "DocumentVersionEdge",
                                "kind": "LinkedField",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "DocumentVersion",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      (v3/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "title",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "documentType",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "status",
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "versions(first:1)"
                          },
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/),
                  (v8/*: any*/)
                ],
                "storageKey": "documents(first:100)"
              },
              {
                "alias": null,
                "args": (v9/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "RiskDocumentsPage_documents",
                "kind": "LinkedHandle",
                "name": "documents"
              }
            ],
            "type": "Risk",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "500280299db1937d8c0b768d9d5344c4",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "node",
            "documents"
          ]
        }
      ]
    },
    "name": "RiskDocumentsPageQuery",
    "operationKind": "query",
    "text": "query RiskDocumentsPageQuery(\n  $riskId: ID!\n) {\n  node(id: $riskId) {\n    __typename\n    ... on Risk {\n      id\n      canCreateDocumentMapping: permission(action: \"core:risk:create-document-mapping\")\n      canDeleteDocumentMapping: permission(action: \"core:risk:delete-document-mapping\")\n      documents(first: 100) {\n        edges {\n          node {\n            id\n            ...LinkedDocumentsCardFragment\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment LinkedDocumentsCardFragment on Document {\n  id\n  versions(first: 1) {\n    edges {\n      node {\n        id\n        title\n        documentType\n        status\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "23cc5f0309084ddaca731adc967aa67d";

export default node;
