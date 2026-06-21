/**
 * @generated SignedSource<<21f711eb09bd742c956e3b4d741681a3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type DocumentClassification = "CONFIDENTIAL" | "INTERNAL" | "PUBLIC" | "SECRET";
export type DocumentStatus = "ACTIVE" | "ARCHIVED";
export type DocumentType = "GOVERNANCE" | "OTHER" | "PLAN" | "POLICY" | "PROCEDURE" | "RECORD" | "REGISTER" | "REPORT" | "STATEMENT_OF_APPLICABILITY" | "TEMPLATE";
export type DocumentVersionApprovalQuorumStatus = "APPROVED" | "PENDING" | "REJECTED" | "VOIDED";
export type DocumentVersionStatus = "DRAFT" | "PENDING_APPROVAL" | "PUBLISHED";
import { FragmentRefs } from "relay-runtime";
export type DocumentListItemFragment$data = {
  readonly canArchive: boolean;
  readonly canDelete: boolean;
  readonly canUnarchive: boolean;
  readonly defaultApprovers: ReadonlyArray<{
    readonly fullName: string;
    readonly id: string;
  }>;
  readonly id: string;
  readonly recentVersions: {
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
              readonly status: DocumentVersionApprovalQuorumStatus;
            };
          }>;
        };
        readonly classification: DocumentClassification;
        readonly documentType: DocumentType;
        readonly id: string;
        readonly major: number;
        readonly minor: number;
        readonly signatures: {
          readonly totalCount: number;
        };
        readonly signedSignatures: {
          readonly totalCount: number;
        };
        readonly status: DocumentVersionStatus;
        readonly title: string;
      };
    }>;
  };
  readonly status: DocumentStatus;
  readonly updatedAt: string;
  readonly " $fragmentType": "DocumentListItemFragment";
};
export type DocumentListItemFragment$key = {
  readonly " $data"?: DocumentListItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DocumentListItemFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v2 = {
  "kind": "Literal",
  "name": "orderBy",
  "value": {
    "direction": "DESC",
    "field": "CREATED_AT"
  }
},
v3 = {
  "kind": "Literal",
  "name": "first",
  "value": 0
},
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DocumentListItemFragment",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
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
        (v0/*: any*/),
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
        (v2/*: any*/)
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
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "title",
                  "storageKey": null
                },
                (v1/*: any*/),
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
                    (v2/*: any*/)
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
                            (v1/*: any*/),
                            {
                              "alias": null,
                              "args": [
                                (v3/*: any*/)
                              ],
                              "concreteType": "DocumentVersionApprovalDecisionConnection",
                              "kind": "LinkedField",
                              "name": "decisions",
                              "plural": false,
                              "selections": (v4/*: any*/),
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
                                (v3/*: any*/)
                              ],
                              "concreteType": "DocumentVersionApprovalDecisionConnection",
                              "kind": "LinkedField",
                              "name": "decisions",
                              "plural": false,
                              "selections": (v4/*: any*/),
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
                    (v3/*: any*/)
                  ],
                  "concreteType": "DocumentVersionSignatureConnection",
                  "kind": "LinkedField",
                  "name": "signatures",
                  "plural": false,
                  "selections": (v4/*: any*/),
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
                    (v3/*: any*/)
                  ],
                  "concreteType": "DocumentVersionSignatureConnection",
                  "kind": "LinkedField",
                  "name": "signatures",
                  "plural": false,
                  "selections": (v4/*: any*/),
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
  "type": "Document",
  "abstractKey": null
};
})();

(node as any).hash = "1a7cfc9da4c6c6d9766828136e2a7d83";

export default node;
