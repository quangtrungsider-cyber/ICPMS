/**
 * @generated SignedSource<<66c53f3b23eb9c1dbcaaf4c0405e3709>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MembershipRole = "ADMIN" | "AUDITOR" | "EMPLOYEE" | "OWNER" | "VIEWER";
export type ViewerMembershipLayoutQuery$variables = {
  hideSidebar: boolean;
  organizationId: string;
};
export type ViewerMembershipLayoutQuery$data = {
  readonly organization: {
    readonly __typename: "Organization";
    readonly viewer: {
      readonly fullName: string;
      readonly membership: {
        readonly role: MembershipRole;
      };
    };
    readonly " $fragmentSpreads": FragmentRefs<"MembershipsDropdown_organizationFragment" | "SidebarFragment" | "ViewerMembershipDropdownFragment">;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
  readonly viewer: {
    readonly email: string;
  };
};
export type ViewerMembershipLayoutQuery = {
  response: ViewerMembershipLayoutQuery$data;
  variables: ViewerMembershipLayoutQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "hideSidebar"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "organizationId"
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "organizationId"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "role",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ViewerMembershipLayoutQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": "organization",
          "args": (v2/*: any*/),
          "concreteType": null,
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v3/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "MembershipsDropdown_organizationFragment"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ViewerMembershipDropdownFragment"
                },
                {
                  "condition": "hideSidebar",
                  "kind": "Condition",
                  "passingValue": false,
                  "selections": [
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "SidebarFragment"
                    }
                  ]
                },
                {
                  "kind": "RequiredField",
                  "field": {
                    "alias": null,
                    "args": null,
                    "concreteType": "Profile",
                    "kind": "LinkedField",
                    "name": "viewer",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      {
                        "kind": "RequiredField",
                        "field": {
                          "alias": null,
                          "args": null,
                          "concreteType": "Membership",
                          "kind": "LinkedField",
                          "name": "membership",
                          "plural": false,
                          "selections": [
                            (v5/*: any*/)
                          ],
                          "storageKey": null
                        },
                        "action": "THROW"
                      }
                    ],
                    "storageKey": null
                  },
                  "action": "THROW"
                }
              ],
              "type": "Organization",
              "abstractKey": null
            }
          ],
          "storageKey": null
        },
        "action": "THROW"
      },
      {
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": null,
          "concreteType": "Identity",
          "kind": "LinkedField",
          "name": "viewer",
          "plural": false,
          "selections": [
            (v6/*: any*/)
          ],
          "storageKey": null
        },
        "action": "THROW"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "ViewerMembershipLayoutQuery",
    "selections": [
      {
        "alias": "organization",
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
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
                "concreteType": "Profile",
                "kind": "LinkedField",
                "name": "viewer",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Identity",
                    "kind": "LinkedField",
                    "name": "identity",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      {
                        "alias": "canListAPIKeys",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "action",
                            "value": "iam:personal-api-key:list"
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "permission",
                        "storageKey": "permission(action:\"iam:personal-api-key:list\")"
                      },
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Membership",
                    "kind": "LinkedField",
                    "name": "membership",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "condition": "hideSidebar",
                "kind": "Condition",
                "passingValue": false,
                "selections": [
                  {
                    "alias": "canGetContext",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "core:organization-context:get"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"core:organization-context:get\")"
                  },
                  {
                    "alias": "canListTasks",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "core:task:list"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"core:task:list\")"
                  },
                  {
                    "alias": "canListMeasures",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "core:measure:list"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"core:measure:list\")"
                  },
                  {
                    "alias": "canListRisks",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "core:risk:list"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"core:risk:list\")"
                  },
                  {
                    "alias": "canListFrameworks",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "core:framework:list"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"core:framework:list\")"
                  },
                  {
                    "alias": "canListMembers",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "iam:membership:list"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"iam:membership:list\")"
                  },
                  {
                    "alias": "canListThirdParties",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "core:thirdParty:list"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"core:thirdParty:list\")"
                  },
                  {
                    "alias": "canListDocuments",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "core:document:list"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"core:document:list\")"
                  },
                  {
                    "alias": "canListAssets",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "core:asset:list"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"core:asset:list\")"
                  },
                  {
                    "alias": "canListData",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "core:datum:list"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"core:datum:list\")"
                  },
                  {
                    "alias": "canListAudits",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "core:audit:list"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"core:audit:list\")"
                  },
                  {
                    "alias": "canListFindings",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "core:finding:list"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"core:finding:list\")"
                  },
                  {
                    "alias": "canListObligations",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "core:obligation:list"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"core:obligation:list\")"
                  },
                  {
                    "alias": "canListProcessingActivities",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "core:processing-activity:list"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"core:processing-activity:list\")"
                  },
                  {
                    "alias": "canListRightsRequests",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "core:rights-request:list"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"core:rights-request:list\")"
                  },
                  {
                    "alias": "canGetTrustCenter",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "core:trust-center:get"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"core:trust-center:get\")"
                  },
                  {
                    "alias": "canListCookieBanners",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "core:cookie-banner:list"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"core:cookie-banner:list\")"
                  },
                  {
                    "alias": "canUpdateOrganization",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "iam:organization:update"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"iam:organization:update\")"
                  },
                  {
                    "alias": "canListStatementsOfApplicability",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "core:statement-of-applicability:list"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"core:statement-of-applicability:list\")"
                  },
                  {
                    "alias": "canListAccessReviewCampaigns",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "core:access-review-campaign:list"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"core:access-review-campaign:list\")"
                  }
                ]
              }
            ],
            "type": "Organization",
            "abstractKey": null
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Identity",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8f3752c19ed8252f5b59c6b0f39061c3",
    "id": null,
    "metadata": {},
    "name": "ViewerMembershipLayoutQuery",
    "operationKind": "query",
    "text": "query ViewerMembershipLayoutQuery(\n  $organizationId: ID!\n  $hideSidebar: Boolean!\n) {\n  organization: node(id: $organizationId) {\n    __typename\n    ... on Organization {\n      ...MembershipsDropdown_organizationFragment\n      ...ViewerMembershipDropdownFragment\n      ...SidebarFragment @skip(if: $hideSidebar)\n      viewer {\n        fullName\n        membership {\n          role\n          id\n        }\n        id\n      }\n    }\n    id\n  }\n  viewer {\n    email\n    id\n  }\n}\n\nfragment MembershipsDropdown_organizationFragment on Organization {\n  name\n}\n\nfragment SidebarFragment on Organization {\n  canGetContext: permission(action: \"core:organization-context:get\")\n  canListTasks: permission(action: \"core:task:list\")\n  canListMeasures: permission(action: \"core:measure:list\")\n  canListRisks: permission(action: \"core:risk:list\")\n  canListFrameworks: permission(action: \"core:framework:list\")\n  canListMembers: permission(action: \"iam:membership:list\")\n  canListThirdParties: permission(action: \"core:thirdParty:list\")\n  canListDocuments: permission(action: \"core:document:list\")\n  canListAssets: permission(action: \"core:asset:list\")\n  canListData: permission(action: \"core:datum:list\")\n  canListAudits: permission(action: \"core:audit:list\")\n  canListFindings: permission(action: \"core:finding:list\")\n  canListObligations: permission(action: \"core:obligation:list\")\n  canListProcessingActivities: permission(action: \"core:processing-activity:list\")\n  canListRightsRequests: permission(action: \"core:rights-request:list\")\n  canGetTrustCenter: permission(action: \"core:trust-center:get\")\n  canListCookieBanners: permission(action: \"core:cookie-banner:list\")\n  canUpdateOrganization: permission(action: \"iam:organization:update\")\n  canListStatementsOfApplicability: permission(action: \"core:statement-of-applicability:list\")\n  canListAccessReviewCampaigns: permission(action: \"core:access-review-campaign:list\")\n}\n\nfragment ViewerMembershipDropdownFragment on Organization {\n  viewer {\n    fullName\n    identity {\n      email\n      canListAPIKeys: permission(action: \"iam:personal-api-key:list\")\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "00ae11d725a9aacd5389ef00381faf98";

export default node;
