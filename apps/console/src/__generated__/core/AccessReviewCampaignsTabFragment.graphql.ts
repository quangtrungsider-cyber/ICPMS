/**
 * @generated SignedSource<<f759ced07f9aff9537f7b10c84c64a7b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type AccessReviewCampaignStatus = "CANCELLED" | "COMPLETED" | "DRAFT" | "IN_PROGRESS" | "PENDING_ACTIONS";
import { FragmentRefs } from "relay-runtime";
export type AccessReviewCampaignsTabFragment$data = {
  readonly accessReviewCampaigns: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly canDelete: boolean;
        readonly createdAt: string;
        readonly id: string;
        readonly name: string;
        readonly status: AccessReviewCampaignStatus;
      };
    }>;
  };
  readonly id: string;
  readonly " $fragmentType": "AccessReviewCampaignsTabFragment";
};
export type AccessReviewCampaignsTabFragment$key = {
  readonly " $data"?: AccessReviewCampaignsTabFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AccessReviewCampaignsTabFragment">;
};

import AccessReviewCampaignsTabPaginationQuery_graphql from './AccessReviewCampaignsTabPaginationQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "accessReviewCampaigns"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": 20,
      "kind": "LocalArgument",
      "name": "first"
    },
    {
      "defaultValue": {
        "direction": "DESC",
        "field": "CREATED_AT"
      },
      "kind": "LocalArgument",
      "name": "order"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": AccessReviewCampaignsTabPaginationQuery_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "AccessReviewCampaignsTabFragment",
  "selections": [
    {
      "alias": "accessReviewCampaigns",
      "args": [
        {
          "kind": "Variable",
          "name": "orderBy",
          "variableName": "order"
        }
      ],
      "concreteType": "AccessReviewCampaignConnection",
      "kind": "LinkedField",
      "name": "__AccessReviewCampaignsTab_accessReviewCampaigns_connection",
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
    (v1/*: any*/)
  ],
  "type": "Organization",
  "abstractKey": null
};
})();

(node as any).hash = "3df6ccb2ced97d7a72b596ae22d09199";

export default node;
