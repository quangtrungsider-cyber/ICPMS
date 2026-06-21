/**
 * @generated SignedSource<<3ce1cf7092c9d07ee0ec71dddcfd6101>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DocumentClassification = "CONFIDENTIAL" | "INTERNAL" | "PUBLIC" | "SECRET";
export type DocumentOrderField = "CREATED_AT" | "DOCUMENT_TYPE" | "TITLE" | "UPDATED_AT";
export type DocumentStatus = "ACTIVE" | "ARCHIVED";
export type DocumentType = "GOVERNANCE" | "OTHER" | "PLAN" | "POLICY" | "PROCEDURE" | "RECORD" | "REGISTER" | "REPORT" | "STATEMENT_OF_APPLICABILITY" | "TEMPLATE";
export type DocumentWriteMode = "AUTHORED" | "GENERATED";
export type OrderDirection = "ASC" | "DESC";
export type DocumentOrder = {
  direction: OrderDirection;
  field: DocumentOrderField;
};
export type DocumentsListQuery$variables = {
  after?: string | null | undefined;
  before?: string | null | undefined;
  classifications?: ReadonlyArray<DocumentClassification> | null | undefined;
  documentTypes?: ReadonlyArray<DocumentType> | null | undefined;
  first?: number | null | undefined;
  id: string;
  last?: number | null | undefined;
  order?: DocumentOrder | null | undefined;
  status?: ReadonlyArray<DocumentStatus> | null | undefined;
  writeModes?: ReadonlyArray<DocumentWriteMode> | null | undefined;
};
export type DocumentsListQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"DocumentListFragment">;
  };
};
export type DocumentsListQuery = {
  response: DocumentsListQuery$data;
  variables: DocumentsListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "before"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "classifications"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "documentTypes"
},
v4 = {
  "defaultValue": 50,
  "kind": "LocalArgument",
  "name": "first"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "last"
},
v7 = {
  "defaultValue": {
    "direction": "ASC",
    "field": "TITLE"
  },
  "kind": "LocalArgument",
  "name": "order"
},
v8 = {
  "defaultValue": [
    "ACTIVE"
  ],
  "kind": "LocalArgument",
  "name": "status"
},
v9 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "writeModes"
},
v10 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v11 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v12 = {
  "kind": "Variable",
  "name": "before",
  "variableName": "before"
},
v13 = {
  "kind": "Variable",
  "name": "classifications",
  "variableName": "classifications"
},
v14 = {
  "kind": "Variable",
  "name": "documentTypes",
  "variableName": "documentTypes"
},
v15 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "first"
},
v16 = {
  "kind": "Variable",
  "name": "last",
  "variableName": "last"
},
v17 = {
  "kind": "Variable",
  "name": "status",
  "variableName": "status"
},
v18 = {
  "kind": "Variable",
  "name": "writeModes",
  "variableName": "writeModes"
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v21 = [
  (v11/*: any*/),
  (v12/*: any*/),
  {
    "fields": [
      (v13/*: any*/),
      (v14/*: any*/),
      (v17/*: any*/),
      (v18/*: any*/)
    ],
    "kind": "ObjectValue",
    "name": "filter"
  },
  (v15/*: any*/),
  (v16/*: any*/),
  {
    "kind": "Variable",
    "name": "orderBy",
    "variableName": "order"
  }
],
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v23 = {
  "kind": "Literal",
  "name": "orderBy",
  "value": {
    "direction": "DESC",
    "field": "CREATED_AT"
  }
},
v24 = {
  "kind": "Literal",
  "name": "first",
  "value": 0
},
v25 = [
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/),
      (v9/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "DocumentsListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v10/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/),
              {
                "kind": "Variable",
                "name": "order",
                "variableName": "order"
              },
              (v17/*: any*/),
              (v18/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "DocumentListFragment"
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/),
      (v9/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Operation",
    "name": "DocumentsListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v10/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v19/*: any*/),
          (v20/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v21/*: any*/),
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
                          (v20/*: any*/),
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
                          (v22/*: any*/),
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
                              (v20/*: any*/),
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
                              (v23/*: any*/)
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
                                      (v20/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "title",
                                        "storageKey": null
                                      },
                                      (v22/*: any*/),
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
                                          (v23/*: any*/)
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
                                                  (v22/*: any*/),
                                                  {
                                                    "alias": null,
                                                    "args": [
                                                      (v24/*: any*/)
                                                    ],
                                                    "concreteType": "DocumentVersionApprovalDecisionConnection",
                                                    "kind": "LinkedField",
                                                    "name": "decisions",
                                                    "plural": false,
                                                    "selections": (v25/*: any*/),
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
                                                      (v24/*: any*/)
                                                    ],
                                                    "concreteType": "DocumentVersionApprovalDecisionConnection",
                                                    "kind": "LinkedField",
                                                    "name": "decisions",
                                                    "plural": false,
                                                    "selections": (v25/*: any*/),
                                                    "storageKey": "decisions(filter:{\"states\":[\"APPROVED\"]},first:0)"
                                                  },
                                                  (v20/*: any*/)
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
                                          (v24/*: any*/)
                                        ],
                                        "concreteType": "DocumentVersionSignatureConnection",
                                        "kind": "LinkedField",
                                        "name": "signatures",
                                        "plural": false,
                                        "selections": (v25/*: any*/),
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
                                          (v24/*: any*/)
                                        ],
                                        "concreteType": "DocumentVersionSignatureConnection",
                                        "kind": "LinkedField",
                                        "name": "signatures",
                                        "plural": false,
                                        "selections": (v25/*: any*/),
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
                          (v19/*: any*/)
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
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v21/*: any*/),
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
    "cacheID": "ea85600626d228700312da6e6635296e",
    "id": null,
    "metadata": {},
    "name": "DocumentsListQuery",
    "operationKind": "query",
    "text": "query DocumentsListQuery(\n  $after: CursorKey = null\n  $before: CursorKey = null\n  $classifications: [DocumentClassification!] = null\n  $documentTypes: [DocumentType!] = null\n  $first: Int = 50\n  $last: Int = null\n  $order: DocumentOrder = {field: TITLE, direction: ASC}\n  $status: [DocumentStatus!] = [ACTIVE]\n  $writeModes: [DocumentWriteMode!] = null\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...DocumentListFragment_qQPke\n    id\n  }\n}\n\nfragment DocumentListFragment_qQPke on Organization {\n  documents(first: $first, after: $after, last: $last, before: $before, orderBy: $order, filter: {status: $status, documentTypes: $documentTypes, classifications: $classifications, writeModes: $writeModes}) {\n    edges {\n      node {\n        id\n        canUpdate: permission(action: \"core:document:update\")\n        canDelete: permission(action: \"core:document:delete\")\n        canRequestSignatures: permission(action: \"core:document-version:request-signature\")\n        canArchive: permission(action: \"core:document:archive\")\n        canUnarchive: permission(action: \"core:document:unarchive\")\n        canSendSigningNotifications: permission(action: \"core:document:send-signing-notifications\")\n        ...DocumentListItemFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n\nfragment DocumentListItemFragment on Document {\n  id\n  status\n  updatedAt\n  canArchive: permission(action: \"core:document:archive\")\n  canDelete: permission(action: \"core:document:delete\")\n  canUnarchive: permission(action: \"core:document:unarchive\")\n  defaultApprovers {\n    id\n    fullName\n  }\n  recentVersions: versions(first: 2, orderBy: {field: CREATED_AT, direction: DESC}) {\n    edges {\n      node {\n        id\n        title\n        status\n        major\n        minor\n        documentType\n        classification\n        approvalQuorums(first: 1, orderBy: {field: CREATED_AT, direction: DESC}) {\n          edges {\n            node {\n              status\n              decisions(first: 0) {\n                totalCount\n              }\n              approvedDecisions: decisions(first: 0, filter: {states: [APPROVED]}) {\n                totalCount\n              }\n              id\n            }\n          }\n        }\n        signatures(first: 0, filter: {activeContract: true, state: ACTIVE}) {\n          totalCount\n        }\n        signedSignatures: signatures(first: 0, filter: {states: [SIGNED], activeContract: true, state: ACTIVE}) {\n          totalCount\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "210163ad82af36cf566063ed35337ab1";

export default node;
