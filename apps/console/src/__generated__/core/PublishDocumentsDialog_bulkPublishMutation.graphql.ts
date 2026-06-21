/**
 * @generated SignedSource<<5db15cc8f3277bde18d6a09b63e51709>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BulkPublishDocumentsInput = {
  changelog: string;
  documentIds: ReadonlyArray<string>;
  minor: boolean;
};
export type PublishDocumentsDialog_bulkPublishMutation$variables = {
  input: BulkPublishDocumentsInput;
};
export type PublishDocumentsDialog_bulkPublishMutation$data = {
  readonly bulkPublishDocuments: {
    readonly documentVersions: ReadonlyArray<{
      readonly id: string;
    }>;
    readonly documents: ReadonlyArray<{
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"DocumentListItemFragment">;
    }>;
  };
};
export type PublishDocumentsDialog_bulkPublishMutation = {
  response: PublishDocumentsDialog_bulkPublishMutation$data;
  variables: PublishDocumentsDialog_bulkPublishMutation$variables;
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
  "concreteType": "DocumentVersion",
  "kind": "LinkedField",
  "name": "documentVersions",
  "plural": true,
  "selections": [
    (v2/*: any*/)
  ],
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v5 = {
  "kind": "Literal",
  "name": "orderBy",
  "value": {
    "direction": "DESC",
    "field": "CREATED_AT"
  }
},
v6 = {
  "kind": "Literal",
  "name": "first",
  "value": 0
},
v7 = [
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
    "name": "PublishDocumentsDialog_bulkPublishMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "BulkPublishDocumentsPayload",
        "kind": "LinkedField",
        "name": "bulkPublishDocuments",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Document",
            "kind": "LinkedField",
            "name": "documents",
            "plural": true,
            "selections": [
              (v2/*: any*/),
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PublishDocumentsDialog_bulkPublishMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "BulkPublishDocumentsPayload",
        "kind": "LinkedField",
        "name": "bulkPublishDocuments",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Document",
            "kind": "LinkedField",
            "name": "documents",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "updatedAt",
                "storageKey": null
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
                "alias": null,
                "args": null,
                "concreteType": "Profile",
                "kind": "LinkedField",
                "name": "defaultApprovers",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
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
                  (v5/*: any*/)
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
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "title",
                            "storageKey": null
                          },
                          (v4/*: any*/),
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
                              (v5/*: any*/)
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
                                      (v4/*: any*/),
                                      {
                                        "alias": null,
                                        "args": [
                                          (v6/*: any*/)
                                        ],
                                        "concreteType": "DocumentVersionApprovalDecisionConnection",
                                        "kind": "LinkedField",
                                        "name": "decisions",
                                        "plural": false,
                                        "selections": (v7/*: any*/),
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
                                          (v6/*: any*/)
                                        ],
                                        "concreteType": "DocumentVersionApprovalDecisionConnection",
                                        "kind": "LinkedField",
                                        "name": "decisions",
                                        "plural": false,
                                        "selections": (v7/*: any*/),
                                        "storageKey": "decisions(filter:{\"states\":[\"APPROVED\"]},first:0)"
                                      },
                                      (v2/*: any*/)
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
                              (v6/*: any*/)
                            ],
                            "concreteType": "DocumentVersionSignatureConnection",
                            "kind": "LinkedField",
                            "name": "signatures",
                            "plural": false,
                            "selections": (v7/*: any*/),
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
                              (v6/*: any*/)
                            ],
                            "concreteType": "DocumentVersionSignatureConnection",
                            "kind": "LinkedField",
                            "name": "signatures",
                            "plural": false,
                            "selections": (v7/*: any*/),
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
      }
    ]
  },
  "params": {
    "cacheID": "f1bd038d4852bf04094a91a0b9324cce",
    "id": null,
    "metadata": {},
    "name": "PublishDocumentsDialog_bulkPublishMutation",
    "operationKind": "mutation",
    "text": "mutation PublishDocumentsDialog_bulkPublishMutation(\n  $input: BulkPublishDocumentsInput!\n) {\n  bulkPublishDocuments(input: $input) {\n    documentVersions {\n      id\n    }\n    documents {\n      id\n      ...DocumentListItemFragment\n    }\n  }\n}\n\nfragment DocumentListItemFragment on Document {\n  id\n  status\n  updatedAt\n  canArchive: permission(action: \"core:document:archive\")\n  canDelete: permission(action: \"core:document:delete\")\n  canUnarchive: permission(action: \"core:document:unarchive\")\n  defaultApprovers {\n    id\n    fullName\n  }\n  recentVersions: versions(first: 2, orderBy: {field: CREATED_AT, direction: DESC}) {\n    edges {\n      node {\n        id\n        title\n        status\n        major\n        minor\n        documentType\n        classification\n        approvalQuorums(first: 1, orderBy: {field: CREATED_AT, direction: DESC}) {\n          edges {\n            node {\n              status\n              decisions(first: 0) {\n                totalCount\n              }\n              approvedDecisions: decisions(first: 0, filter: {states: [APPROVED]}) {\n                totalCount\n              }\n              id\n            }\n          }\n        }\n        signatures(first: 0, filter: {activeContract: true, state: ACTIVE}) {\n          totalCount\n        }\n        signedSignatures: signatures(first: 0, filter: {states: [SIGNED], activeContract: true, state: ACTIVE}) {\n          totalCount\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "679f4a30b0651025463a7c83c4eac11d";

export default node;
