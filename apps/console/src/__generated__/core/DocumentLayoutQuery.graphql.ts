/**
 * @generated SignedSource<<2b0647e87cff2cccd5e81d496f76c2cb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DocumentStatus = "ACTIVE" | "ARCHIVED";
export type DocumentVersionApprovalQuorumStatus = "APPROVED" | "PENDING" | "REJECTED" | "VOIDED";
export type DocumentVersionStatus = "DRAFT" | "PENDING_APPROVAL" | "PUBLISHED";
export type DocumentWriteMode = "AUTHORED" | "GENERATED";
export type DocumentLayoutQuery$variables = {
  documentId: string;
  versionId: string;
  versionSpecified: boolean;
};
export type DocumentLayoutQuery$data = {
  readonly document: {
    readonly __typename: "Document";
    readonly canPublish: boolean;
    readonly controlInfo: {
      readonly totalCount: number;
    };
    readonly id: string;
    readonly lastVersion: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly approvalQuorums: {
            readonly edges: ReadonlyArray<{
              readonly node: {
                readonly approvedDecisions: {
                  readonly totalCount: number;
                };
                readonly decisions: {
                  readonly totalCount: number;
                };
                readonly id: string;
                readonly status: DocumentVersionApprovalQuorumStatus;
              };
            }>;
          };
          readonly id: string;
          readonly signatures: {
            readonly totalCount: number;
          };
          readonly signedSignatures: {
            readonly totalCount: number;
          };
          readonly status: DocumentVersionStatus;
          readonly title: string;
          readonly " $fragmentSpreads": FragmentRefs<"DocumentActionsDropdown_versionFragment" | "DocumentDetailsCard_versionFragment" | "DocumentTitleFormFragment">;
        };
      }>;
    };
    readonly status: DocumentStatus;
    readonly writeMode: DocumentWriteMode;
    readonly " $fragmentSpreads": FragmentRefs<"DocumentActionsDropdown_documentFragment" | "DocumentDetailsCard_documentFragment" | "PublishDialog_documentFragment">;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
  readonly version?: {
    readonly __typename: "DocumentVersion";
    readonly approvalQuorums: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly approvedDecisions: {
            readonly totalCount: number;
          };
          readonly decisions: {
            readonly totalCount: number;
          };
          readonly id: string;
          readonly status: DocumentVersionApprovalQuorumStatus;
        };
      }>;
    };
    readonly id: string;
    readonly signatures: {
      readonly totalCount: number;
    };
    readonly signedSignatures: {
      readonly totalCount: number;
    };
    readonly status: DocumentVersionStatus;
    readonly title: string;
    readonly " $fragmentSpreads": FragmentRefs<"DocumentActionsDropdown_versionFragment" | "DocumentDetailsCard_versionFragment" | "DocumentTitleFormFragment">;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type DocumentLayoutQuery = {
  response: DocumentLayoutQuery$data;
  variables: DocumentLayoutQuery$variables;
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
    "variableName": "versionId"
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
  "name": "title",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v6 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "DocumentTitleFormFragment"
},
v7 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "DocumentActionsDropdown_versionFragment"
},
v8 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "DocumentDetailsCard_versionFragment"
},
v9 = {
  "kind": "Literal",
  "name": "first",
  "value": 0
},
v10 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
],
v11 = {
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
    (v9/*: any*/)
  ],
  "concreteType": "DocumentVersionSignatureConnection",
  "kind": "LinkedField",
  "name": "signatures",
  "plural": false,
  "selections": (v10/*: any*/),
  "storageKey": "signatures(filter:{\"activeContract\":true,\"state\":\"ACTIVE\"},first:0)"
},
v12 = {
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
    (v9/*: any*/)
  ],
  "concreteType": "DocumentVersionSignatureConnection",
  "kind": "LinkedField",
  "name": "signatures",
  "plural": false,
  "selections": (v10/*: any*/),
  "storageKey": "signatures(filter:{\"activeContract\":true,\"state\":\"ACTIVE\",\"states\":[\"SIGNED\"]},first:0)"
},
v13 = {
  "kind": "Literal",
  "name": "orderBy",
  "value": {
    "direction": "DESC",
    "field": "CREATED_AT"
  }
},
v14 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  },
  (v13/*: any*/)
],
v15 = [
  (v9/*: any*/)
],
v16 = {
  "alias": null,
  "args": (v14/*: any*/),
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
            (v3/*: any*/),
            (v5/*: any*/),
            {
              "alias": null,
              "args": (v15/*: any*/),
              "concreteType": "DocumentVersionApprovalDecisionConnection",
              "kind": "LinkedField",
              "name": "decisions",
              "plural": false,
              "selections": (v10/*: any*/),
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
                (v9/*: any*/)
              ],
              "concreteType": "DocumentVersionApprovalDecisionConnection",
              "kind": "LinkedField",
              "name": "decisions",
              "plural": false,
              "selections": (v10/*: any*/),
              "storageKey": "decisions(filter:{\"states\":[\"APPROVED\"]},first:0)"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "approvalQuorums(first:1,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
},
v17 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "documentId"
  }
],
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "writeMode",
  "storageKey": null
},
v19 = {
  "alias": "canPublish",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:document-version:publish"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:document-version:publish\")"
},
v20 = {
  "alias": "controlInfo",
  "args": (v15/*: any*/),
  "concreteType": "ControlConnection",
  "kind": "LinkedField",
  "name": "controls",
  "plural": false,
  "selections": (v10/*: any*/),
  "storageKey": "controls(first:0)"
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v22 = {
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
v23 = {
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
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "major",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "minor",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "documentType",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "classification",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "publishedAt",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DocumentLayoutQuery",
    "selections": [
      {
        "condition": "versionSpecified",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": "version",
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
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v16/*: any*/)
                ],
                "type": "DocumentVersion",
                "abstractKey": null
              }
            ],
            "storageKey": null
          }
        ]
      },
      {
        "alias": "document",
        "args": (v17/*: any*/),
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
              (v5/*: any*/),
              (v18/*: any*/),
              (v19/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "PublishDialog_documentFragment"
              },
              (v20/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "DocumentActionsDropdown_documentFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "DocumentDetailsCard_documentFragment"
              },
              {
                "alias": "lastVersion",
                "args": [
                  (v13/*: any*/)
                ],
                "concreteType": "DocumentVersionConnection",
                "kind": "LinkedField",
                "name": "__DocumentLayout_lastVersion_connection",
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
                          (v4/*: any*/),
                          (v5/*: any*/),
                          (v6/*: any*/),
                          (v7/*: any*/),
                          (v8/*: any*/),
                          (v11/*: any*/),
                          (v12/*: any*/),
                          (v16/*: any*/),
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v21/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v22/*: any*/)
                ],
                "storageKey": "__DocumentLayout_lastVersion_connection(orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
              }
            ],
            "type": "Document",
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
    "name": "DocumentLayoutQuery",
    "selections": [
      {
        "alias": "document",
        "args": (v17/*: any*/),
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
              (v5/*: any*/),
              (v18/*: any*/),
              (v19/*: any*/),
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "emailAddress",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v20/*: any*/),
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
                "alias": "canDeleteDraft",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "action",
                    "value": "core:document:delete-draft"
                  }
                ],
                "kind": "ScalarField",
                "name": "permission",
                "storageKey": "permission(action:\"core:document:delete-draft\")"
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "archivedAt",
                "storageKey": null
              },
              (v23/*: any*/),
              {
                "alias": "lastVersion",
                "args": (v14/*: any*/),
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
                          (v4/*: any*/),
                          (v5/*: any*/),
                          (v23/*: any*/),
                          (v24/*: any*/),
                          (v25/*: any*/),
                          (v26/*: any*/),
                          (v27/*: any*/),
                          (v28/*: any*/),
                          (v29/*: any*/),
                          (v11/*: any*/),
                          (v12/*: any*/),
                          (v16/*: any*/),
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v21/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v22/*: any*/)
                ],
                "storageKey": "versions(first:1,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
              },
              {
                "alias": "lastVersion",
                "args": (v14/*: any*/),
                "filters": [
                  "orderBy"
                ],
                "handle": "connection",
                "key": "DocumentLayout_lastVersion",
                "kind": "LinkedHandle",
                "name": "versions"
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
                  (v23/*: any*/),
                  (v24/*: any*/),
                  (v25/*: any*/),
                  (v26/*: any*/),
                  (v27/*: any*/),
                  (v28/*: any*/),
                  (v29/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v16/*: any*/)
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
    "cacheID": "11de76dbaa3106d14b140b9e895ebf0d",
    "id": null,
    "metadata": {
      "connection": [
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
    "name": "DocumentLayoutQuery",
    "operationKind": "query",
    "text": "query DocumentLayoutQuery(\n  $documentId: ID!\n  $versionId: ID!\n  $versionSpecified: Boolean!\n) {\n  version: node(id: $versionId) @include(if: $versionSpecified) {\n    __typename\n    ... on DocumentVersion {\n      id\n      title\n      status\n      ...DocumentTitleFormFragment\n      ...DocumentActionsDropdown_versionFragment\n      ...DocumentDetailsCard_versionFragment\n      signatures(first: 0, filter: {activeContract: true, state: ACTIVE}) {\n        totalCount\n      }\n      signedSignatures: signatures(first: 0, filter: {states: [SIGNED], activeContract: true, state: ACTIVE}) {\n        totalCount\n      }\n      approvalQuorums(first: 1, orderBy: {field: CREATED_AT, direction: DESC}) {\n        edges {\n          node {\n            id\n            status\n            decisions(first: 0) {\n              totalCount\n            }\n            approvedDecisions: decisions(first: 0, filter: {states: [APPROVED]}) {\n              totalCount\n            }\n          }\n        }\n      }\n    }\n    id\n  }\n  document: node(id: $documentId) {\n    __typename\n    ... on Document {\n      id\n      status\n      writeMode\n      canPublish: permission(action: \"core:document-version:publish\")\n      ...PublishDialog_documentFragment\n      controlInfo: controls(first: 0) {\n        totalCount\n      }\n      ...DocumentActionsDropdown_documentFragment\n      ...DocumentDetailsCard_documentFragment\n      lastVersion: versions(first: 1, orderBy: {field: CREATED_AT, direction: DESC}) {\n        edges {\n          node {\n            id\n            title\n            status\n            ...DocumentTitleFormFragment\n            ...DocumentActionsDropdown_versionFragment\n            ...DocumentDetailsCard_versionFragment\n            signatures(first: 0, filter: {activeContract: true, state: ACTIVE}) {\n              totalCount\n            }\n            signedSignatures: signatures(first: 0, filter: {states: [SIGNED], activeContract: true, state: ACTIVE}) {\n              totalCount\n            }\n            approvalQuorums(first: 1, orderBy: {field: CREATED_AT, direction: DESC}) {\n              edges {\n                node {\n                  id\n                  status\n                  decisions(first: 0) {\n                    totalCount\n                  }\n                  approvedDecisions: decisions(first: 0, filter: {states: [APPROVED]}) {\n                    totalCount\n                  }\n                }\n              }\n            }\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment DocumentActionsDropdown_documentFragment on Document {\n  id\n  status\n  canArchive: permission(action: \"core:document:archive\")\n  canUnarchive: permission(action: \"core:document:unarchive\")\n  canDelete: permission(action: \"core:document:delete\")\n  canDeleteDraft: permission(action: \"core:document:delete-draft\")\n}\n\nfragment DocumentActionsDropdown_versionFragment on DocumentVersion {\n  id\n  title\n  major\n  minor\n  status\n}\n\nfragment DocumentDetailsCard_documentFragment on Document {\n  id\n  archivedAt\n  canUpdate: permission(action: \"core:document:update\")\n  defaultApprovers {\n    id\n    fullName\n    emailAddress\n  }\n}\n\nfragment DocumentDetailsCard_versionFragment on DocumentVersion {\n  id\n  documentType\n  classification\n  major\n  minor\n  updatedAt\n  publishedAt\n}\n\nfragment DocumentTitleFormFragment on DocumentVersion {\n  title\n  status\n  canUpdate: permission(action: \"core:document:update\")\n}\n\nfragment PublishDialog_documentFragment on Document {\n  defaultApprovers {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "cb1b9f76afbcc98fe49b46ea2887bb4e";

export default node;
