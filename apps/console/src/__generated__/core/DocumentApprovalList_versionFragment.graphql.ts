/**
 * @generated SignedSource<<90f2c13b606ebe8c9ac435e79f81cc61>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type DocumentVersionApprovalQuorumStatus = "APPROVED" | "PENDING" | "REJECTED" | "VOIDED";
import { FragmentRefs } from "relay-runtime";
export type DocumentApprovalList_versionFragment$data = {
  readonly approvalQuorums: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly decisions: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly id: string;
              readonly " $fragmentSpreads": FragmentRefs<"DocumentApprovalListItemFragment">;
            };
          }>;
        };
        readonly status: DocumentVersionApprovalQuorumStatus;
      };
    }>;
  };
  readonly id: string;
  readonly " $fragmentType": "DocumentApprovalList_versionFragment";
};
export type DocumentApprovalList_versionFragment$key = {
  readonly " $data"?: DocumentApprovalList_versionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DocumentApprovalList_versionFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": null
      }
    ]
  },
  "name": "DocumentApprovalList_versionFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 100
        },
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "status",
                  "storageKey": null
                },
                {
                  "alias": "decisions",
                  "args": [
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
                  "name": "__DocumentApprovalList_decisions_connection",
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
                            (v0/*: any*/),
                            {
                              "args": null,
                              "kind": "FragmentSpread",
                              "name": "DocumentApprovalListItemFragment"
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
                  "storageKey": "__DocumentApprovalList_decisions_connection(orderBy:{\"direction\":\"ASC\",\"field\":\"CREATED_AT\"})"
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

(node as any).hash = "82b8dc733b08cd1ae5092e3063bff6f7";

export default node;
