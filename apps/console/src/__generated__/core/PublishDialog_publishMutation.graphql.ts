/**
 * @generated SignedSource<<5ba686a73221479b3e3fc3e282fb65bf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DocumentStatus = "ACTIVE" | "ARCHIVED";
export type DocumentVersionApprovalQuorumStatus = "APPROVED" | "PENDING" | "REJECTED" | "VOIDED";
export type DocumentVersionStatus = "DRAFT" | "PENDING_APPROVAL" | "PUBLISHED";
export type PublishDocumentInput = {
  approverIds?: ReadonlyArray<string> | null | undefined;
  changelog: string;
  documentId: string;
  minor: boolean;
};
export type PublishDialog_publishMutation$variables = {
  input: PublishDocumentInput;
};
export type PublishDialog_publishMutation$data = {
  readonly publishDocument: {
    readonly approvalQuorum: {
      readonly approvedDecisions: {
        readonly totalCount: number;
      };
      readonly decisions: {
        readonly totalCount: number;
      };
      readonly documentVersion: {
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
      };
      readonly id: string;
      readonly status: DocumentVersionApprovalQuorumStatus;
    } | null | undefined;
    readonly document: {
      readonly id: string;
      readonly status: DocumentStatus;
    };
    readonly documentVersion: {
      readonly id: string;
      readonly status: DocumentVersionStatus;
    };
  };
};
export type PublishDialog_publishMutation = {
  response: PublishDialog_publishMutation$data;
  variables: PublishDialog_publishMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
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
  "name": "status",
  "storageKey": null
},
v3 = [
  (v1/*: any*/),
  (v2/*: any*/)
],
v4 = {
  "kind": "Literal",
  "name": "first",
  "value": 0
},
v5 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
],
v6 = {
  "alias": null,
  "args": [
    (v4/*: any*/)
  ],
  "concreteType": "DocumentVersionApprovalDecisionConnection",
  "kind": "LinkedField",
  "name": "decisions",
  "plural": false,
  "selections": (v5/*: any*/),
  "storageKey": "decisions(first:0)"
},
v7 = {
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
    (v4/*: any*/)
  ],
  "concreteType": "DocumentVersionApprovalDecisionConnection",
  "kind": "LinkedField",
  "name": "decisions",
  "plural": false,
  "selections": (v5/*: any*/),
  "storageKey": "decisions(filter:{\"states\":[\"APPROVED\"]},first:0)"
},
v8 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "PublishDocumentPayload",
    "kind": "LinkedField",
    "name": "publishDocument",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Document",
        "kind": "LinkedField",
        "name": "document",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "DocumentVersion",
        "kind": "LinkedField",
        "name": "documentVersion",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "DocumentVersionApprovalQuorum",
        "kind": "LinkedField",
        "name": "approvalQuorum",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "DocumentVersion",
            "kind": "LinkedField",
            "name": "documentVersion",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 1
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
                          (v1/*: any*/),
                          (v2/*: any*/),
                          (v6/*: any*/),
                          (v7/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "approvalQuorums(first:1,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PublishDialog_publishMutation",
    "selections": (v8/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PublishDialog_publishMutation",
    "selections": (v8/*: any*/)
  },
  "params": {
    "cacheID": "f0d494315dbc8b15e4520f52e08f51ed",
    "id": null,
    "metadata": {},
    "name": "PublishDialog_publishMutation",
    "operationKind": "mutation",
    "text": "mutation PublishDialog_publishMutation(\n  $input: PublishDocumentInput!\n) {\n  publishDocument(input: $input) {\n    document {\n      id\n      status\n    }\n    documentVersion {\n      id\n      status\n    }\n    approvalQuorum {\n      id\n      status\n      decisions(first: 0) {\n        totalCount\n      }\n      approvedDecisions: decisions(first: 0, filter: {states: [APPROVED]}) {\n        totalCount\n      }\n      documentVersion {\n        id\n        approvalQuorums(first: 1, orderBy: {field: CREATED_AT, direction: DESC}) {\n          edges {\n            node {\n              id\n              status\n              decisions(first: 0) {\n                totalCount\n              }\n              approvedDecisions: decisions(first: 0, filter: {states: [APPROVED]}) {\n                totalCount\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c992c3c78444ebee6ebc909d6e58ec9a";

export default node;
