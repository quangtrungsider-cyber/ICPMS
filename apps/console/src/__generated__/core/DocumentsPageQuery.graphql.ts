/**
 * @generated SignedSource<<72d34d36ba3d3e9190392d4346c280e0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DocumentsPageQuery$variables = {
  organizationId: string;
};
export type DocumentsPageQuery$data = {
  readonly organization: {
    readonly __typename: "Organization";
    readonly canCreateDocument: boolean;
    readonly " $fragmentSpreads": FragmentRefs<"DocumentListFragment">;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type DocumentsPageQuery = {
  response: DocumentsPageQuery$data;
  variables: DocumentsPageQuery$variables;
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
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": "canCreateDocument",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:document:create"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:document:create\")"
},
v4 = {
  "kind": "Literal",
  "name": "first",
  "value": 50
},
v5 = {
  "direction": "ASC",
  "field": "TITLE"
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = [
  {
    "fields": [
      {
        "kind": "Literal",
        "name": "classifications",
        "value": null
      },
      {
        "kind": "Literal",
        "name": "documentTypes",
        "value": null
      },
      {
        "kind": "Literal",
        "name": "status",
        "value": [
          "ACTIVE"
        ]
      },
      {
        "kind": "Literal",
        "name": "writeModes",
        "value": null
      }
    ],
    "kind": "ObjectValue",
    "name": "filter"
  },
  (v4/*: any*/),
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": (v5/*: any*/)
  }
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v9 = {
  "kind": "Literal",
  "name": "orderBy",
  "value": {
    "direction": "DESC",
    "field": "CREATED_AT"
  }
},
v10 = {
  "kind": "Literal",
  "name": "first",
  "value": 0
},
v11 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DocumentsPageQuery",
    "selections": [
      {
        "alias": "organization",
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
                "args": [
                  (v4/*: any*/),
                  {
                    "kind": "Literal",
                    "name": "order",
                    "value": (v5/*: any*/)
                  }
                ],
                "kind": "FragmentSpread",
                "name": "DocumentListFragment"
              }
            ],
            "type": "Organization",
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
    "name": "DocumentsPageQuery",
    "selections": [
      {
        "alias": "organization",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v6/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": (v7/*: any*/),
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
                          (v6/*: any*/),
                          {
                            "alias": "canUpdate",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "action",
                                "value": "core:document:update"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "permission",
                            "storageKey": "permission(action:\"core:document:update\")"
                          },
                          {
                            "alias": "canDelete",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "action",
                                "value": "core:document:delete"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "permission",
                            "storageKey": "permission(action:\"core:document:delete\")"
                          },
                          {
                            "alias": "canRequestSignatures",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "action",
                                "value": "core:document-version:request-signature"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "permission",
                            "storageKey": "permission(action:\"core:document-version:request-signature\")"
                          },
                          {
                            "alias": "canArchive",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "action",
                                "value": "core:document:archive"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "permission",
                            "storageKey": "permission(action:\"core:document:archive\")"
                          },
                          {
                            "alias": "canUnarchive",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "action",
                                "value": "core:document:unarchive"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "permission",
                            "storageKey": "permission(action:\"core:document:unarchive\")"
                          },
                          {
                            "alias": "canSendSigningNotifications",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "action",
                                "value": "core:document:send-signing-notifications"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "permission",
                            "storageKey": "permission(action:\"core:document:send-signing-notifications\")"
                          },
                          (v8/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "updatedAt",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Profile",
                            "kind": "LinkedField",
                            "name": "defaultApprovers",
                            "plural": true,
                            "selections": [
                              (v6/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "fullName",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": "recentVersions",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "first",
                                "value": 2
                              },
                              (v9/*: any*/)
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
                                      (v6/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "title",
                                        "storageKey": null
                                      },
                                      (v8/*: any*/),
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
                                        "name": "documentType",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "classification",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": [
                                          {
                                            "kind": "Literal",
                                            "name": "first",
                                            "value": 1
                                          },
                                          (v9/*: any*/)
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
                                                  (v8/*: any*/),
                                                  {
                                                    "alias": null,
                                                    "args": [
                                                      (v10/*: any*/)
                                                    ],
                                                    "concreteType": "DocumentVersionApprovalDecisionConnection",
                                                    "kind": "LinkedField",
                                                    "name": "decisions",
                                                    "plural": false,
                                                    "selections": (v11/*: any*/),
                                                    "storageKey": "decisions(first:0)"
                                                  },
                                                  {
                                                    "alias": "approvedDecisions",
                                                    "args": [
                                                      {
                                                        "kind": "Literal",
                                                        "name": "filter",
                                                        "value": {
                                                          "states": [
                                                            "APPROVED"
                                                          ]
                                                        }
                                                      },
                                                      (v10/*: any*/)
                                                    ],
                                                    "concreteType": "DocumentVersionApprovalDecisionConnection",
                                                    "kind": "LinkedField",
                                                    "name": "decisions",
                                                    "plural": false,
                                                    "selections": (v11/*: any*/),
                                                    "storageKey": "decisions(filter:{\"states\":[\"APPROVED\"]},first:0)"
                                                  },
                                                  (v6/*: any*/)
                                                ],
                                                "storageKey": null
                                              }
                                            ],
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": "approvalQuorums(first:1,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
                                      },
                                      {
                                        "alias": null,
                                        "args": [
                                          {
                                            "kind": "Literal",
                                            "name": "filter",
                                            "value": {
                                              "activeContract": true,
                                              "state": "ACTIVE"
                                            }
                                          },
                                          (v10/*: any*/)
                                        ],
                                        "concreteType": "DocumentVersionSignatureConnection",
                                        "kind": "LinkedField",
                                        "name": "signatures",
                                        "plural": false,
                                        "selections": (v11/*: any*/),
                                        "storageKey": "signatures(filter:{\"activeContract\":true,\"state\":\"ACTIVE\"},first:0)"
                                      },
                                      {
                                        "alias": "signedSignatures",
                                        "args": [
                                          {
                                            "kind": "Literal",
                                            "name": "filter",
                                            "value": {
                                              "activeContract": true,
                                              "state": "ACTIVE",
                                              "states": [
                                                "SIGNED"
                                              ]
                                            }
                                          },
                                          (v10/*: any*/)
                                        ],
                                        "concreteType": "DocumentVersionSignatureConnection",
                                        "kind": "LinkedField",
                                        "name": "signatures",
                                        "plural": false,
                                        "selections": (v11/*: any*/),
                                        "storageKey": "signatures(filter:{\"activeContract\":true,\"state\":\"ACTIVE\",\"states\":[\"SIGNED\"]},first:0)"
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "versions(first:2,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
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
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasPreviousPage",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "startCursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
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
                  }
                ],
                "storageKey": "documents(filter:{\"classifications\":null,\"documentTypes\":null,\"status\":[\"ACTIVE\"],\"writeModes\":null},first:50,orderBy:{\"direction\":\"ASC\",\"field\":\"TITLE\"})"
              },
              {
                "alias": null,
                "args": (v7/*: any*/),
                "filters": [
                  "orderBy",
                  "filter"
                ],
                "handle": "connection",
                "key": "DocumentsListQuery_documents",
                "kind": "LinkedHandle",
                "name": "documents"
              }
            ],
            "type": "Organization",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "69fa6931f0a4b9dc200a520ec91227bf",
    "id": null,
    "metadata": {},
    "name": "DocumentsPageQuery",
    "operationKind": "query",
    "text": "query DocumentsPageQuery(\n  $organizationId: ID!\n) {\n  organization: node(id: $organizationId) {\n    __typename\n    ... on Organization {\n      canCreateDocument: permission(action: \"core:document:create\")\n      ...DocumentListFragment_1WMmEg\n    }\n    id\n  }\n}\n\nfragment DocumentListFragment_1WMmEg on Organization {\n  documents(first: 50, orderBy: {field: TITLE, direction: ASC}, filter: {status: [ACTIVE]}) {\n    edges {\n      node {\n        id\n        canUpdate: permission(action: \"core:document:update\")\n        canDelete: permission(action: \"core:document:delete\")\n        canRequestSignatures: permission(action: \"core:document-version:request-signature\")\n        canArchive: permission(action: \"core:document:archive\")\n        canUnarchive: permission(action: \"core:document:unarchive\")\n        canSendSigningNotifications: permission(action: \"core:document:send-signing-notifications\")\n        ...DocumentListItemFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n\nfragment DocumentListItemFragment on Document {\n  id\n  status\n  updatedAt\n  canArchive: permission(action: \"core:document:archive\")\n  canDelete: permission(action: \"core:document:delete\")\n  canUnarchive: permission(action: \"core:document:unarchive\")\n  defaultApprovers {\n    id\n    fullName\n  }\n  recentVersions: versions(first: 2, orderBy: {field: CREATED_AT, direction: DESC}) {\n    edges {\n      node {\n        id\n        title\n        status\n        major\n        minor\n        documentType\n        classification\n        approvalQuorums(first: 1, orderBy: {field: CREATED_AT, direction: DESC}) {\n          edges {\n            node {\n              status\n              decisions(first: 0) {\n                totalCount\n              }\n              approvedDecisions: decisions(first: 0, filter: {states: [APPROVED]}) {\n                totalCount\n              }\n              id\n            }\n          }\n        }\n        signatures(first: 0, filter: {activeContract: true, state: ACTIVE}) {\n          totalCount\n        }\n        signedSignatures: signatures(first: 0, filter: {states: [SIGNED], activeContract: true, state: ACTIVE}) {\n          totalCount\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b161814794a8a4a1fbb7f572639e4fd3";

export default node;
