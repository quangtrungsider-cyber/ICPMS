/**
 * @generated SignedSource<<5be208aea5cf6f5c4ecb249c9889de47>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CookieBannerResourcesPageFragment$data = {
  readonly id: string;
  readonly uncategorisedTrackerResources: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"TrackerResourceRowFragment">;
      };
    }>;
  };
  readonly " $fragmentType": "CookieBannerResourcesPageFragment";
};
export type CookieBannerResourcesPageFragment$key = {
  readonly " $data"?: CookieBannerResourcesPageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CookieBannerResourcesPageFragment">;
};

import CookieBannerResourcesPageRefetchQuery_graphql from './CookieBannerResourcesPageRefetchQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "uncategorisedTrackerResources"
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
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "before"
    },
    {
      "defaultValue": 50,
      "kind": "LocalArgument",
      "name": "first"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "last"
    },
    {
      "defaultValue": {
        "direction": "DESC",
        "field": "LAST_DETECTED_AT"
      },
      "kind": "LocalArgument",
      "name": "order"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "query"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "type"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "bidirectional",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": {
          "count": "last",
          "cursor": "before"
        },
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": CookieBannerResourcesPageRefetchQuery_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "CookieBannerResourcesPageFragment",
  "selections": [
    {
      "kind": "RequiredField",
      "field": {
        "alias": "uncategorisedTrackerResources",
        "args": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "query",
                "variableName": "query"
              },
              {
                "kind": "Variable",
                "name": "type",
                "variableName": "type"
              }
            ],
            "kind": "ObjectValue",
            "name": "filter"
          },
          {
            "kind": "Variable",
            "name": "orderBy",
            "variableName": "order"
          }
        ],
        "concreteType": "TrackerResourceConnection",
        "kind": "LinkedField",
        "name": "__CookieBannerResourcesPage_uncategorisedTrackerResources_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TrackerResourceEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "TrackerResource",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "TrackerResourceRowFragment"
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
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
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
      "action": "THROW"
    },
    (v1/*: any*/)
  ],
  "type": "CookieBanner",
  "abstractKey": null
};
})();

(node as any).hash = "db18107d37c1f56d9b7a409f73f7e58c";

export default node;
