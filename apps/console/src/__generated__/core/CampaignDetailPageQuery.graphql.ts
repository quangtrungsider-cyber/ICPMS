/**
 * @generated SignedSource<<cda274ab1773aeeede093ece23e6d48d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AccessEntryAccountType = "SERVICE_ACCOUNT" | "USER";
export type AccessEntryDecision = "APPROVED" | "DEFER" | "ESCALATE" | "PENDING" | "REVOKE";
export type AccessEntryFlag = "CONTRACTOR_EXPIRED" | "DORMANT" | "EXCESSIVE" | "INACTIVE" | "NEW" | "NONE" | "NO_BUSINESS_JUSTIFICATION" | "ORPHANED" | "OUT_OF_DEPARTMENT" | "PRIVILEGED_ACCESS" | "ROLE_CREEP" | "ROLE_MISMATCH" | "SHARED_ACCOUNT" | "SOD_CONFLICT" | "TERMINATED_USER";
export type AccessReviewCampaignSourceFetchStatus = "FAILED" | "FETCHING" | "QUEUED" | "SUCCESS";
export type AccessReviewCampaignStatus = "CANCELLED" | "COMPLETED" | "DRAFT" | "IN_PROGRESS" | "PENDING_ACTIONS";
export type MfaStatus = "DISABLED" | "ENABLED" | "UNKNOWN";
export type CampaignDetailPageQuery$variables = {
  campaignId: string;
};
export type CampaignDetailPageQuery$data = {
  readonly node: {
    readonly __typename: "AccessReviewCampaign";
    readonly canDelete: boolean;
    readonly id: string;
    readonly name: string;
    readonly scopeSources: ReadonlyArray<{
      readonly entries: {
        readonly edges: ReadonlyArray<{
          readonly node: {
            readonly accountType: AccessEntryAccountType;
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
      readonly source: {
        readonly id: string;
      };
    }>;
    readonly status: AccessReviewCampaignStatus;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type CampaignDetailPageQuery = {
  response: CampaignDetailPageQuery$data;
  variables: CampaignDetailPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "campaignId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "campaignId"
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
  "name": "name",
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
  "alias": "canDelete",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:access-review-campaign:delete"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:access-review-campaign:delete\")"
},
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "AccessReviewCampaignScopeSource",
  "kind": "LinkedField",
  "name": "scopeSources",
  "plural": true,
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "AccessSource",
      "kind": "LinkedField",
      "name": "source",
      "plural": false,
      "selections": [
        (v3/*: any*/)
      ],
      "storageKey": null
    },
    (v4/*: any*/),
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
          "value": 500
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
                (v3/*: any*/),
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
                  "name": "accountType",
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
      "storageKey": "entries(first:500)"
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CampaignDetailPageQuery",
    "selections": [
      {
        "alias": null,
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
              (v7/*: any*/)
            ],
            "type": "AccessReviewCampaign",
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
    "name": "CampaignDetailPageQuery",
    "selections": [
      {
        "alias": null,
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
              (v6/*: any*/),
              (v7/*: any*/)
            ],
            "type": "AccessReviewCampaign",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "df73a336237df83f15659849e07f17dd",
    "id": null,
    "metadata": {},
    "name": "CampaignDetailPageQuery",
    "operationKind": "query",
    "text": "query CampaignDetailPageQuery(\n  $campaignId: ID!\n) {\n  node(id: $campaignId) {\n    __typename\n    ... on AccessReviewCampaign {\n      id\n      name\n      status\n      canDelete: permission(action: \"core:access-review-campaign:delete\")\n      scopeSources {\n        id\n        source {\n          id\n        }\n        name\n        fetchStatus\n        fetchedAccountsCount\n        entries(first: 500) {\n          edges {\n            node {\n              id\n              email\n              fullName\n              role\n              isAdmin\n              mfaStatus\n              accountType\n              lastLogin\n              decision\n              flags\n            }\n          }\n          pageInfo {\n            hasNextPage\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "a852ef4c6d35bda1f8527122a326ef48";

export default node;
