/**
 * @generated SignedSource<<0a534c427a5170146cd2c1ac85a0d670>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CookieBannerTrackersPageFragment$data = {
  readonly id: string;
  readonly linkedThirdParties: ReadonlyArray<{
    readonly __typename: "CommonThirdParty";
    readonly id: string;
    readonly name: string;
  } | {
    readonly __typename: "ThirdParty";
    readonly id: string;
    readonly name: string;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  }>;
  readonly trackerPatterns: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"TrackerPatternRowFragment">;
      };
    }>;
  };
  readonly " $fragmentType": "CookieBannerTrackersPageFragment";
};
export type CookieBannerTrackersPageFragment$key = {
  readonly " $data"?: CookieBannerTrackersPageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CookieBannerTrackersPageFragment">;
};

import CookieBannerTrackersPageRefetchQuery_graphql from './CookieBannerTrackersPageRefetchQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "trackerPatterns"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
];
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
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cookieCategoryId"
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
        "direction": "ASC",
        "field": "NAME"
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
      "name": "source"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "thirdPartyId"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "trackerType"
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
      "operation": CookieBannerTrackersPageRefetchQuery_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "CookieBannerTrackersPageFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "linkedThirdParties",
      "plural": true,
      "selections": [
        (v1/*: any*/),
        {
          "kind": "InlineFragment",
          "selections": (v3/*: any*/),
          "type": "ThirdParty",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": (v3/*: any*/),
          "type": "CommonThirdParty",
          "abstractKey": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": "trackerPatterns",
        "args": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "cookieCategoryId",
                "variableName": "cookieCategoryId"
              },
              {
                "kind": "Variable",
                "name": "query",
                "variableName": "query"
              },
              {
                "kind": "Variable",
                "name": "source",
                "variableName": "source"
              },
              {
                "kind": "Variable",
                "name": "thirdPartyId",
                "variableName": "thirdPartyId"
              },
              {
                "kind": "Variable",
                "name": "trackerType",
                "variableName": "trackerType"
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
        "concreteType": "TrackerPatternConnection",
        "kind": "LinkedField",
        "name": "__CookieBannerTrackersPage_trackerPatterns_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TrackerPatternEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "TrackerPattern",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "TrackerPatternRowFragment"
                  },
                  (v1/*: any*/)
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
    (v2/*: any*/)
  ],
  "type": "CookieBanner",
  "abstractKey": null
};
})();

(node as any).hash = "a96868e00121ba40d13e2c116baa1633";

export default node;
