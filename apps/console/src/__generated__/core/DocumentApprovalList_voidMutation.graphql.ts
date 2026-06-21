/**
 * @generated SignedSource<<37035be1b857496dc22004674d3355f1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DocumentVersionApprovalQuorumStatus = "APPROVED" | "PENDING" | "REJECTED" | "VOIDED";
export type DocumentVersionStatus = "DRAFT" | "PENDING_APPROVAL" | "PUBLISHED";
export type VoidDocumentVersionApprovalInput = {
  documentVersionId: string;
};
export type DocumentApprovalList_voidMutation$variables = {
  input: VoidDocumentVersionApprovalInput;
};
export type DocumentApprovalList_voidMutation$data = {
  readonly voidDocumentVersionApproval: {
    readonly approvalQuorum: {
      readonly id: string;
      readonly status: DocumentVersionApprovalQuorumStatus;
    };
    readonly documentVersion: {
      readonly id: string;
      readonly major: number;
      readonly minor: number;
      readonly status: DocumentVersionStatus;
      readonly " $fragmentSpreads": FragmentRefs<"DocumentApprovalList_versionFragment">;
    };
  };
};
export type DocumentApprovalList_voidMutation = {
  response: DocumentApprovalList_voidMutation$data;
  variables: DocumentApprovalList_voidMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "major",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "minor",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "DocumentVersionApprovalQuorum",
  "kind": "LinkedField",
  "name": "approvalQuorum",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/)
  ],
  "storageKey": null
},
v7 = {
  "kind": "Literal",
  "name": "first",
  "value": 100
},
v8 = [
  (v7/*: any*/),
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "ASC",
      "field": "CREATED_AT"
    }
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DocumentApprovalList_voidMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "VoidDocumentVersionApprovalPayload",
        "kind": "LinkedField",
        "name": "voidDocumentVersionApproval",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "DocumentVersion",
            "kind": "LinkedField",
            "name": "documentVersion",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "DocumentApprovalList_versionFragment"
              }
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentApprovalList_voidMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "VoidDocumentVersionApprovalPayload",
        "kind": "LinkedField",
        "name": "voidDocumentVersionApproval",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "DocumentVersion",
            "kind": "LinkedField",
            "name": "documentVersion",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": [
                  (v7/*: any*/),
                  {
                    "kind": "Literal",
                    "name": "orderBy",
                    "value": {
                      "direction": "DESC",
                      "field": "CREATED_AT"
                    }
                  }
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
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": (v8/*: any*/),
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
                                      (v2/*: any*/),
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
                                          (v2/*: any*/)
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
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "createdAt",
                                        "storageKey": null
                                      },
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
                                          (v2/*: any*/),
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "Document",
                                            "kind": "LinkedField",
                                            "name": "document",
                                            "plural": false,
                                            "selections": [
                                              (v2/*: any*/)
                                            ],
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "__typename",
                                        "storageKey": null
                                      }
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
                            "args": (v8/*: any*/),
                            "filters": [
                              "orderBy"
                            ],
                            "handle": "connection",
                            "key": "DocumentApprovalList_decisions",
                            "kind": "LinkedHandle",
                            "name": "decisions"
                          },
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "approvalQuorums(first:100,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
              }
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "14fc3e0ea96e1b4d209121d2fa8887c1",
    "id": null,
    "metadata": {},
    "name": "DocumentApprovalList_voidMutation",
    "operationKind": "mutation",
    "text": "mutation DocumentApprovalList_voidMutation(\n  $input: VoidDocumentVersionApprovalInput!\n) {\n  voidDocumentVersionApproval(input: $input) {\n    documentVersion {\n      id\n      status\n      major\n      minor\n      ...DocumentApprovalList_versionFragment\n    }\n    approvalQuorum {\n      id\n      status\n    }\n  }\n}\n\nfragment DocumentApprovalListItemFragment on DocumentVersionApprovalDecision {\n  id\n  approver {\n    fullName\n    id\n  }\n  state\n  comment\n  decidedAt\n  createdAt\n  canApprove: permission(action: \"core:document-version:approve\")\n  canReject: permission(action: \"core:document-version:reject\")\n  documentVersion {\n    id\n    document {\n      id\n    }\n  }\n}\n\nfragment DocumentApprovalList_versionFragment on DocumentVersion {\n  id\n  approvalQuorums(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {\n    edges {\n      node {\n        status\n        decisions(first: 100, orderBy: {field: CREATED_AT, direction: ASC}) {\n          edges {\n            node {\n              id\n              ...DocumentApprovalListItemFragment\n              __typename\n            }\n            cursor\n          }\n          pageInfo {\n            endCursor\n            hasNextPage\n          }\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7ac262d9b5aa0861bde40f2ba4824e42";

export default node;
