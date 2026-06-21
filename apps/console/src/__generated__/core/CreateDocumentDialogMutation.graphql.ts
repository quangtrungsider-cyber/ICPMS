/**
 * @generated SignedSource<<ed2e17ec82c960aff77705cd190f8354>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DocumentClassification = "CONFIDENTIAL" | "INTERNAL" | "PUBLIC" | "SECRET";
export type DocumentType = "GOVERNANCE" | "OTHER" | "PLAN" | "POLICY" | "PROCEDURE" | "RECORD" | "REGISTER" | "REPORT" | "STATEMENT_OF_APPLICABILITY" | "TEMPLATE";
export type TrustCenterVisibility = "NONE" | "PRIVATE" | "PUBLIC";
export type CreateDocumentInput = {
  classification: DocumentClassification;
  content?: string | null | undefined;
  defaultApproverIds?: ReadonlyArray<string> | null | undefined;
  documentType: DocumentType;
  organizationId: string;
  title: string;
  trustCenterVisibility?: TrustCenterVisibility | null | undefined;
};
export type CreateDocumentDialogMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateDocumentInput;
};
export type CreateDocumentDialogMutation$data = {
  readonly createDocument: {
    readonly documentEdge: {
      readonly node: {
        readonly canArchive: boolean;
        readonly canDelete: boolean;
        readonly canRequestSignatures: boolean;
        readonly canSendSigningNotifications: boolean;
        readonly canUnarchive: boolean;
        readonly canUpdate: boolean;
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"DocumentListItemFragment">;
      };
    };
  };
};
export type CreateDocumentDialogMutation = {
  response: CreateDocumentDialogMutation$data;
  variables: CreateDocumentDialogMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
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
v5 = {
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
v6 = {
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
v7 = {
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
v8 = {
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
v9 = {
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
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v11 = {
  "kind": "Literal",
  "name": "orderBy",
  "value": {
    "direction": "DESC",
    "field": "CREATED_AT"
  }
},
v12 = {
  "kind": "Literal",
  "name": "first",
  "value": 0
},
v13 = [
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
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateDocumentDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateDocumentPayload",
        "kind": "LinkedField",
        "name": "createDocument",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "DocumentEdge",
            "kind": "LinkedField",
            "name": "documentEdge",
            "plural": false,
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
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "DocumentListItemFragment"
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateDocumentDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateDocumentPayload",
        "kind": "LinkedField",
        "name": "createDocument",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "DocumentEdge",
            "kind": "LinkedField",
            "name": "documentEdge",
            "plural": false,
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
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
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
                      (v3/*: any*/),
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
                      (v11/*: any*/)
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
                              (v10/*: any*/),
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
                                  (v11/*: any*/)
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
                                          (v10/*: any*/),
                                          {
                                            "alias": null,
                                            "args": [
                                              (v12/*: any*/)
                                            ],
                                            "concreteType": "DocumentVersionApprovalDecisionConnection",
                                            "kind": "LinkedField",
                                            "name": "decisions",
                                            "plural": false,
                                            "selections": (v13/*: any*/),
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
                                              (v12/*: any*/)
                                            ],
                                            "concreteType": "DocumentVersionApprovalDecisionConnection",
                                            "kind": "LinkedField",
                                            "name": "decisions",
                                            "plural": false,
                                            "selections": (v13/*: any*/),
                                            "storageKey": "decisions(filter:{\"states\":[\"APPROVED\"]},first:0)"
                                          },
                                          (v3/*: any*/)
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
                                  (v12/*: any*/)
                                ],
                                "concreteType": "DocumentVersionSignatureConnection",
                                "kind": "LinkedField",
                                "name": "signatures",
                                "plural": false,
                                "selections": (v13/*: any*/),
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
                                  (v12/*: any*/)
                                ],
                                "concreteType": "DocumentVersionSignatureConnection",
                                "kind": "LinkedField",
                                "name": "signatures",
                                "plural": false,
                                "selections": (v13/*: any*/),
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
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "prependEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "documentEdge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f3e903f8e683b96bb12b25027d54c774",
    "id": null,
    "metadata": {},
    "name": "CreateDocumentDialogMutation",
    "operationKind": "mutation",
    "text": "mutation CreateDocumentDialogMutation(\n  $input: CreateDocumentInput!\n) {\n  createDocument(input: $input) {\n    documentEdge {\n      node {\n        id\n        canUpdate: permission(action: \"core:document:update\")\n        canDelete: permission(action: \"core:document:delete\")\n        canRequestSignatures: permission(action: \"core:document-version:request-signature\")\n        canArchive: permission(action: \"core:document:archive\")\n        canUnarchive: permission(action: \"core:document:unarchive\")\n        canSendSigningNotifications: permission(action: \"core:document:send-signing-notifications\")\n        ...DocumentListItemFragment\n      }\n    }\n  }\n}\n\nfragment DocumentListItemFragment on Document {\n  id\n  status\n  updatedAt\n  canArchive: permission(action: \"core:document:archive\")\n  canDelete: permission(action: \"core:document:delete\")\n  canUnarchive: permission(action: \"core:document:unarchive\")\n  defaultApprovers {\n    id\n    fullName\n  }\n  recentVersions: versions(first: 2, orderBy: {field: CREATED_AT, direction: DESC}) {\n    edges {\n      node {\n        id\n        title\n        status\n        major\n        minor\n        documentType\n        classification\n        approvalQuorums(first: 1, orderBy: {field: CREATED_AT, direction: DESC}) {\n          edges {\n            node {\n              status\n              decisions(first: 0) {\n                totalCount\n              }\n              approvedDecisions: decisions(first: 0, filter: {states: [APPROVED]}) {\n                totalCount\n              }\n              id\n            }\n          }\n        }\n        signatures(first: 0, filter: {activeContract: true, state: ACTIVE}) {\n          totalCount\n        }\n        signedSignatures: signatures(first: 0, filter: {states: [SIGNED], activeContract: true, state: ACTIVE}) {\n          totalCount\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ca9528e2198e17aa3bf1860af1b09de3";

export default node;
