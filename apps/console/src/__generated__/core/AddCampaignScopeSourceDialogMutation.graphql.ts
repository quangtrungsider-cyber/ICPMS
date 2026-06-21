/**
 * @generated SignedSource<<6b2557ee9368a87b4c2a56db0da2242f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AccessEntryDecision = "APPROVED" | "DEFER" | "ESCALATE" | "PENDING" | "REVOKE";
export type AccessEntryFlag = "CONTRACTOR_EXPIRED" | "DORMANT" | "EXCESSIVE" | "INACTIVE" | "NEW" | "NONE" | "NO_BUSINESS_JUSTIFICATION" | "ORPHANED" | "OUT_OF_DEPARTMENT" | "PRIVILEGED_ACCESS" | "ROLE_CREEP" | "ROLE_MISMATCH" | "SHARED_ACCOUNT" | "SOD_CONFLICT" | "TERMINATED_USER";
export type AccessReviewCampaignSourceFetchStatus = "FAILED" | "FETCHING" | "QUEUED" | "SUCCESS";
export type MfaStatus = "DISABLED" | "ENABLED" | "UNKNOWN";
export type AddAccessReviewCampaignScopeSourceInput = {
  accessReviewCampaignId: string;
  accessSourceId: string;
};
export type AddCampaignScopeSourceDialogMutation$variables = {
  input: AddAccessReviewCampaignScopeSourceInput;
};
export type AddCampaignScopeSourceDialogMutation$data = {
  readonly addAccessReviewCampaignScopeSource: {
    readonly accessReviewCampaign: {
      readonly id: string;
      readonly scopeSources: ReadonlyArray<{
        readonly entries: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly decision: AccessEntryDecision;
              readonly email: string;
              readonly flags: ReadonlyArray<AccessEntryFlag>;
              readonly fullName: string;
              readonly id: string;
              readonly isAdmin: boolean;
              readonly lastLogin: string | null | undefined;
              readonly mfaStatus: MfaStatus;
              readonly role: string;
            };
          }>;
          readonly pageInfo: {
            readonly hasNextPage: boolean;
          };
        };
        readonly fetchStatus: AccessReviewCampaignSourceFetchStatus;
        readonly fetchedAccountsCount: number;
        readonly id: string;
        readonly name: string;
      }>;
    };
  };
};
export type AddCampaignScopeSourceDialogMutation = {
  response: AddCampaignScopeSourceDialogMutation$data;
  variables: AddCampaignScopeSourceDialogMutation$variables;
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
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AddAccessReviewCampaignScopeSourcePayload",
    "kind": "LinkedField",
    "name": "addAccessReviewCampaignScopeSource",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AccessReviewCampaign",
        "kind": "LinkedField",
        "name": "accessReviewCampaign",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "AccessReviewCampaignScopeSource",
            "kind": "LinkedField",
            "name": "scopeSources",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fetchStatus",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fetchedAccountsCount",
                "storageKey": null
              },
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 50
                  }
                ],
                "concreteType": "AccessEntryConnection",
                "kind": "LinkedField",
                "name": "entries",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AccessEntryEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AccessEntry",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v1/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "email",
                            "storageKey": null
                          },
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
                            "name": "role",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isAdmin",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "mfaStatus",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "lastLogin",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "decision",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "flags",
                            "storageKey": null
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
                    "concreteType": "PageInfo",
                    "kind": "LinkedField",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
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
                "storageKey": "entries(first:50)"
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
    "name": "AddCampaignScopeSourceDialogMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddCampaignScopeSourceDialogMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "6e8d4bdef211f647a750d8aa991ee412",
    "id": null,
    "metadata": {},
    "name": "AddCampaignScopeSourceDialogMutation",
    "operationKind": "mutation",
    "text": "mutation AddCampaignScopeSourceDialogMutation(\n  $input: AddAccessReviewCampaignScopeSourceInput!\n) {\n  addAccessReviewCampaignScopeSource(input: $input) {\n    accessReviewCampaign {\n      id\n      scopeSources {\n        id\n        name\n        fetchStatus\n        fetchedAccountsCount\n        entries(first: 50) {\n          edges {\n            node {\n              id\n              email\n              fullName\n              role\n              isAdmin\n              mfaStatus\n              lastLogin\n              decision\n              flags\n            }\n          }\n          pageInfo {\n            hasNextPage\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c55b5e93bb7edc375b737f86efa56a65";

export default node;
