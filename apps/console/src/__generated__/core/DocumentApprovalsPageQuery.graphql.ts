/**
 * @generated SignedSource<<72baf88507ae4cd5143dca4884edfd3e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DocumentApprovalsPageQuery$variables = {
  documentId: string;
  versionId: string;
  versionSpecified: boolean;
};
export type DocumentApprovalsPageQuery$data = {
  readonly document?: {
    readonly __typename: "Document";
    readonly lastVersion: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly " $fragmentSpreads": FragmentRefs<"DocumentApprovalList_versionFragment" | "DocumentApprovalsPage_versionFragment">;
        };
      }>;
    };
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
  readonly version?: {
    readonly __typename: string;
    readonly " $fragmentSpreads": FragmentRefs<"DocumentApprovalList_versionFragment" | "DocumentApprovalsPage_versionFragment">;
  };
};
export type DocumentApprovalsPageQuery = {
  response: DocumentApprovalsPageQuery$data;
  variables: DocumentApprovalsPageQuery$variables;
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
  "kind": "Literal",
  "name": "orderBy",
  "value": {
    "direction": "DESC",
    "field": "CREATED_AT"
  }
},
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  },
  (v3/*: any*/)
],
v5 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "DocumentApprovalList_versionFragment"
},
v6 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "DocumentApprovalsPage_versionFragment"
},
v7 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "versionId"
  }
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v9 = {
  "kind": "Literal",
  "name": "first",
  "value": 100
},
v10 = [
  (v9/*: any*/),
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "ASC",
      "field": "CREATED_AT"
    }
  }
],
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": [
    (v9/*: any*/),
    (v3/*: any*/)
  ],
  "concreteType": "DocumentVersionApprovalQuorumConnection",
  "kind": "LinkedField",
  "name": "approvalQuorums",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "DocumentVersionApprovalQuorumEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "DocumentVersionApprovalQuorum",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "status",
              "storageKey": null
            },
            {
              "alias": null,
              "args": (v10/*: any*/),
              "concreteType": "DocumentVersionApprovalDecisionConnection",
              "kind": "LinkedField",
              "name": "decisions",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "DocumentVersionApprovalDecisionEdge",
                  "kind": "LinkedField",
                  "name": "edges",
                  "plural": true,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "DocumentVersionApprovalDecision",
                      "kind": "LinkedField",
                      "name": "node",
                      "plural": false,
                      "selections": [
                        (v8/*: any*/),
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "Profile",
                          "kind": "LinkedField",
                          "name": "approver",
                          "plural": false,
                          "selections": [
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "fullName",
                              "storageKey": null
                            },
                            (v8/*: any*/)
                          ],
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "state",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "comment",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "decidedAt",
                          "storageKey": null
                        },
                        (v11/*: any*/),
                        {
                          "alias": "canApprove",
                          "args": [
                            {
                              "kind": "Literal",
                              "name": "action",
                              "value": "core:document-version:approve"
                            }
                          ],
                          "kind": "ScalarField",
                          "name": "permission",
                          "storageKey": "permission(action:\"core:document-version:approve\")"
                        },
                        {
                          "alias": "canReject",
                          "args": [
                            {
                              "kind": "Literal",
                              "name": "action",
                              "value": "core:document-version:reject"
                            }
                          ],
                          "kind": "ScalarField",
                          "name": "permission",
                          "storageKey": "permission(action:\"core:document-version:reject\")"
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "DocumentVersion",
                          "kind": "LinkedField",
                          "name": "documentVersion",
                          "plural": false,
                          "selections": [
                            (v8/*: any*/),
                            {
                              "alias": null,
                              "args": null,
                              "concreteType": "Document",
                              "kind": "LinkedField",
                              "name": "document",
                              "plural": false,
                              "selections": [
                                (v8/*: any*/)
                              ],
                              "storageKey": null
                            }
                          ],
                          "storageKey": null
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
              "storageKey": "decisions(first:100,orderBy:{\"direction\":\"ASC\",\"field\":\"CREATED_AT\"})"
            },
            {
              "alias": null,
              "args": (v10/*: any*/),
              "filters": [
                "orderBy"
              ],
              "handle": "connection",
              "key": "DocumentApprovalList_decisions",
              "kind": "LinkedHandle",
              "name": "decisions"
            },
            (v8/*: any*/),
            (v11/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "approvalQuorums(first:100,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DocumentApprovalsPageQuery",
    "selections": [
      {
        "condition": "versionSpecified",
        "kind": "Condition",
        "passingValue": false,
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
                    "alias": "lastVersion",
                    "args": (v4/*: any*/),
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
                              (v5/*: any*/),
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "versions(first:1,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
                  }
                ],
                "type": "Document",
                "abstractKey": null
              }
            ],
            "storageKey": null
          }
        ]
      },
      {
        "condition": "versionSpecified",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": "version",
            "args": (v7/*: any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/)
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
    "name": "DocumentApprovalsPageQuery",
    "selections": [
      {
        "condition": "versionSpecified",
        "kind": "Condition",
        "passingValue": false,
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
                    "alias": "lastVersion",
                    "args": (v4/*: any*/),
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
                              (v8/*: any*/),
                              (v12/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "versions(first:1,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
                  }
                ],
                "type": "Document",
                "abstractKey": null
              },
              (v8/*: any*/)
            ],
            "storageKey": null
          }
        ]
      },
      {
        "condition": "versionSpecified",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": "version",
            "args": (v7/*: any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v8/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v12/*: any*/)
                ],
                "type": "DocumentVersion",
                "abstractKey": null
              }
            ],
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "6037dfc6cb7c41377212a6c23d59529f",
    "id": null,
    "metadata": {},
    "name": "DocumentApprovalsPageQuery",
    "operationKind": "query",
    "text": "query DocumentApprovalsPageQuery(\n  $documentId: ID!\n  $versionId: ID!\n  $versionSpecified: Boolean!\n) {\n  document: node(id: $documentId) @skip(if: $versionSpecified) {\n    __typename\n    ... on Document {\n      lastVersion: versions(first: 1, orderBy: {field: CREATED_AT, direction: DESC}) {\n        edges {\n          node {\n            ...DocumentApprovalList_versionFragment\n            ...DocumentApprovalsPage_versionFragment\n            id\n          }\n        }\n      }\n    }\n    id\n  }\n  version: node(id: $versionId) @include(if: $versionSpecified) {\n    __typename\n    ...DocumentApprovalList_versionFragment\n    ...DocumentApprovalsPage_versionFragment\n    id\n  }\n}\n\nfragment DocumentApprovalListItemFragment on DocumentVersionApprovalDecision {\n  id\n  approver {\n    fullName\n    id\n  }\n  state\n  comment\n  decidedAt\n  createdAt\n  canApprove: permission(action: \"core:document-version:approve\")\n  canReject: permission(action: \"core:document-version:reject\")\n  documentVersion {\n    id\n    document {\n      id\n    }\n  }\n}\n\nfragment DocumentApprovalList_versionFragment on DocumentVersion {\n  id\n  approvalQuorums(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {\n    edges {\n      node {\n        status\n        decisions(first: 100, orderBy: {field: CREATED_AT, direction: ASC}) {\n          edges {\n            node {\n              id\n              ...DocumentApprovalListItemFragment\n              __typename\n            }\n            cursor\n          }\n          pageInfo {\n            endCursor\n            hasNextPage\n          }\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment DocumentApprovalsPage_versionFragment on DocumentVersion {\n  approvalQuorums(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {\n    edges {\n      node {\n        id\n        status\n        createdAt\n        decisions(first: 100, orderBy: {field: CREATED_AT, direction: ASC}) {\n          edges {\n            node {\n              id\n              approver {\n                fullName\n                id\n              }\n              state\n              comment\n              decidedAt\n              createdAt\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "abe6b0545016046949f98141f9a800d1";

export default node;
