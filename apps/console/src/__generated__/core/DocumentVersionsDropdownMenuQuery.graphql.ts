/**
 * @generated SignedSource<<7e721cbf3b7cec400126c300444ba6d3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DocumentVersionsDropdownMenuQuery$variables = {
  documentId: string;
  versionId: string;
  versionSpecified: boolean;
};
export type DocumentVersionsDropdownMenuQuery$data = {
  readonly document: {
    readonly __typename: "Document";
    readonly lastVersion?: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
        };
      }>;
    };
    readonly versions: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly " $fragmentSpreads": FragmentRefs<"DocumentVersionsDropdownItemFragment">;
        };
      }>;
    };
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
  readonly version?: {
    readonly __typename: "DocumentVersion";
    readonly id: string;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type DocumentVersionsDropdownMenuQuery = {
  response: DocumentVersionsDropdownMenuQuery$data;
  variables: DocumentVersionsDropdownMenuQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "documentId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "versionId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "versionSpecified"
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
  "name": "cursor",
  "storageKey": null
},
v5 = {
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
v6 = {
  "kind": "Literal",
  "name": "orderBy",
  "value": {
    "direction": "DESC",
    "field": "CREATED_AT"
  }
},
v7 = [
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
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      (v4/*: any*/)
    ],
    "storageKey": null
  },
  (v5/*: any*/)
],
v8 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "versionId"
  }
],
v9 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v10 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  },
  (v6/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DocumentVersionsDropdownMenuQuery",
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
              {
                "alias": "versions",
                "args": null,
                "concreteType": "DocumentVersionConnection",
                "kind": "LinkedField",
                "name": "__DocumentversionsDropdownMenu_versions_connection",
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
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "DocumentVersionsDropdownItemFragment"
                          },
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v5/*: any*/)
                ],
                "storageKey": null
              },
              {
                "condition": "versionSpecified",
                "kind": "Condition",
                "passingValue": false,
                "selections": [
                  {
                    "alias": "lastVersion",
                    "args": [
                      (v6/*: any*/)
                    ],
                    "concreteType": "DocumentVersionConnection",
                    "kind": "LinkedField",
                    "name": "__DocumentversionsDropdownMenu_lastVersion_connection",
                    "plural": false,
                    "selections": (v7/*: any*/),
                    "storageKey": "__DocumentversionsDropdownMenu_lastVersion_connection(orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
                  }
                ]
              }
            ],
            "type": "Document",
            "abstractKey": null
          }
        ],
        "storageKey": null
      },
      {
        "condition": "versionSpecified",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": "version",
            "args": (v8/*: any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v3/*: any*/)
                ],
                "type": "DocumentVersion",
                "abstractKey": null
              }
            ],
            "storageKey": null
          }
        ]
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentVersionsDropdownMenuQuery",
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
              {
                "alias": null,
                "args": (v9/*: any*/),
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
                            "name": "major",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "minor",
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
                            "name": "publishedAt",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "updatedAt",
                            "storageKey": null
                          },
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v5/*: any*/)
                ],
                "storageKey": "versions(first:20)"
              },
              {
                "alias": null,
                "args": (v9/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "DocumentversionsDropdownMenu_versions",
                "kind": "LinkedHandle",
                "name": "versions"
              },
              {
                "condition": "versionSpecified",
                "kind": "Condition",
                "passingValue": false,
                "selections": [
                  {
                    "alias": "lastVersion",
                    "args": (v10/*: any*/),
                    "concreteType": "DocumentVersionConnection",
                    "kind": "LinkedField",
                    "name": "versions",
                    "plural": false,
                    "selections": (v7/*: any*/),
                    "storageKey": "versions(first:1,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
                  },
                  {
                    "alias": "lastVersion",
                    "args": (v10/*: any*/),
                    "filters": [
                      "orderBy"
                    ],
                    "handle": "connection",
                    "key": "DocumentversionsDropdownMenu_lastVersion",
                    "kind": "LinkedHandle",
                    "name": "versions"
                  }
                ]
              }
            ],
            "type": "Document",
            "abstractKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      },
      {
        "condition": "versionSpecified",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": "version",
            "args": (v8/*: any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "781d4ece91a710da957c2f6fc04f9e41",
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
        },
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "document",
            "lastVersion"
          ]
        }
      ]
    },
    "name": "DocumentVersionsDropdownMenuQuery",
    "operationKind": "query",
    "text": "query DocumentVersionsDropdownMenuQuery(\n  $documentId: ID!\n  $versionId: ID!\n  $versionSpecified: Boolean!\n) {\n  document: node(id: $documentId) {\n    __typename\n    ... on Document {\n      versions(first: 20) {\n        edges {\n          node {\n            id\n            ...DocumentVersionsDropdownItemFragment\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n      lastVersion: versions(first: 1, orderBy: {field: CREATED_AT, direction: DESC}) @skip(if: $versionSpecified) {\n        edges {\n          node {\n            id\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n    id\n  }\n  version: node(id: $versionId) @include(if: $versionSpecified) {\n    __typename\n    ... on DocumentVersion {\n      id\n    }\n    id\n  }\n}\n\nfragment DocumentVersionsDropdownItemFragment on DocumentVersion {\n  id\n  major\n  minor\n  status\n  publishedAt\n  updatedAt\n}\n"
  }
};
})();

(node as any).hash = "03507eade86a0dc86a94ee9e4d0c0d3f";

export default node;
