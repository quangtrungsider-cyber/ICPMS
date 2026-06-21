/**
 * @generated SignedSource<<8e39b1bfbb2952c52c0046ccc44efc53>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AccessReviewCampaignOrderField = "CREATED_AT";
export type OrderDirection = "ASC" | "DESC";
export type AccessReviewCampaignOrder = {
  direction: OrderDirection;
  field: AccessReviewCampaignOrderField;
};
export type AccessReviewCampaignsTabPaginationQuery$variables = {
  after?: string | null | undefined;
  first?: number | null | undefined;
  id: string;
  order?: AccessReviewCampaignOrder | null | undefined;
};
export type AccessReviewCampaignsTabPaginationQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"AccessReviewCampaignsTabFragment">;
  };
};
export type AccessReviewCampaignsTabPaginationQuery = {
  response: AccessReviewCampaignsTabPaginationQuery$data;
  variables: AccessReviewCampaignsTabPaginationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": 20,
  "kind": "LocalArgument",
  "name": "first"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v3 = {
  "defaultValue": {
    "direction": "DESC",
    "field": "CREATED_AT"
  },
  "kind": "LocalArgument",
  "name": "order"
},
v4 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v5 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v6 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "first"
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v9 = [
  (v5/*: any*/),
  (v6/*: any*/),
  {
    "kind": "Variable",
    "name": "orderBy",
    "variableName": "order"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AccessReviewCampaignsTabPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "kind": "Variable",
                "name": "order",
                "variableName": "order"
              }
            ],
            "kind": "FragmentSpread",
            "name": "AccessReviewCampaignsTabFragment"
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "AccessReviewCampaignsTabPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v7/*: any*/),
          (v8/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v9/*: any*/),
                "concreteType": "AccessReviewCampaignConnection",
                "kind": "LinkedField",
                "name": "accessReviewCampaigns",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AccessReviewCampaignEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AccessReviewCampaign",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v8/*: any*/),
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
                            "name": "status",
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
                          (v7/*: any*/)
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
                  },
                  {
                    "kind": "ClientExtension",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__id",
                        "storageKey": null
                      }
                    ]
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v9/*: any*/),
                "filters": [
                  "orderBy"
                ],
                "handle": "connection",
                "key": "AccessReviewCampaignsTab_accessReviewCampaigns",
                "kind": "LinkedHandle",
                "name": "accessReviewCampaigns"
              }
            ],
            "type": "Organization",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "741556fc631fb13fea3ec9edba6b7a99",
    "id": null,
    "metadata": {},
    "name": "AccessReviewCampaignsTabPaginationQuery",
    "operationKind": "query",
    "text": "query AccessReviewCampaignsTabPaginationQuery(\n  $after: CursorKey = null\n  $first: Int = 20\n  $order: AccessReviewCampaignOrder = {direction: DESC, field: CREATED_AT}\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...AccessReviewCampaignsTabFragment_gOVF5\n    id\n  }\n}\n\nfragment AccessReviewCampaignsTabFragment_gOVF5 on Organization {\n  accessReviewCampaigns(first: $first, after: $after, orderBy: $order) {\n    edges {\n      node {\n        id\n        name\n        status\n        createdAt\n        canDelete: permission(action: \"core:access-review-campaign:delete\")\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "3df6ccb2ced97d7a72b596ae22d09199";

export default node;
