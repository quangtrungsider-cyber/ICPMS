/**
 * @generated SignedSource<<bfb5ebf1a70eeb79771604a1ecc66c21>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type DocumentVersionApprovalDecisionState = "APPROVED" | "PENDING" | "REJECTED" | "VOIDED";
export type DocumentVersionApprovalQuorumStatus = "APPROVED" | "PENDING" | "REJECTED" | "VOIDED";
import { FragmentRefs } from "relay-runtime";
export type DocumentApprovalsPage_versionFragment$data = {
  readonly approvalQuorums: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly createdAt: string;
        readonly decisions: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly approver: {
                readonly fullName: string;
              };
              readonly comment: string | null | undefined;
              readonly createdAt: string;
              readonly decidedAt: string | null | undefined;
              readonly id: string;
              readonly state: DocumentVersionApprovalDecisionState;
            };
          }>;
        };
        readonly id: string;
        readonly status: DocumentVersionApprovalQuorumStatus;
      };
    }>;
  };
  readonly " $fragmentType": "DocumentApprovalsPage_versionFragment";
};
export type DocumentApprovalsPage_versionFragment$key = {
  readonly " $data"?: DocumentApprovalsPage_versionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DocumentApprovalsPage_versionFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "kind": "Literal",
  "name": "first",
  "value": 100
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DocumentApprovalsPage_versionFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        (v0/*: any*/),
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
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "status",
                  "storageKey": null
                },
                (v2/*: any*/),
                {
                  "alias": null,
                  "args": [
                    (v0/*: any*/),
                    {
                      "kind": "Literal",
                      "name": "orderBy",
                      "value": {
                        "direction": "ASC",
                        "field": "CREATED_AT"
                      }
                    }
                  ],
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
                            (v1/*: any*/),
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
                                }
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
                            (v2/*: any*/)
                          ],
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": "decisions(first:100,orderBy:{\"direction\":\"ASC\",\"field\":\"CREATED_AT\"})"
                }
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
  "type": "DocumentVersion",
  "abstractKey": null
};
})();

(node as any).hash = "ee71dd94a9939b23537b8f8a1eae1268";

export default node;
