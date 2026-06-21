/**
 * @generated SignedSource<<14dec95d774f5aa35d6a774d8a8ca8b8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type CookieCategoryKind = "NECESSARY" | "NORMAL" | "UNCATEGORISED";
export type TrackerType = "CACHE_STORAGE" | "COOKIE" | "INDEXED_DB" | "LOCAL_STORAGE" | "SESSION_STORAGE";
import { FragmentRefs } from "relay-runtime";
export type CategorySectionFragment$data = {
  readonly cookieBanner: {
    readonly categories: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly kind: CookieCategoryKind;
          readonly name: string;
          readonly rank: number;
        };
      }>;
    };
  };
  readonly description: string;
  readonly gcmConsentTypes: ReadonlyArray<string>;
  readonly id: string;
  readonly kind: CookieCategoryKind;
  readonly name: string;
  readonly posthogConsent: boolean;
  readonly slug: string;
  readonly trackerPatterns: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly description: string;
        readonly displayName: string;
        readonly excluded: boolean;
        readonly id: string;
        readonly maxAgeSeconds: number | null | undefined;
        readonly trackerType: TrackerType;
        readonly " $fragmentSpreads": FragmentRefs<"EditCookieRowFragment">;
      };
    }>;
  };
  readonly " $fragmentType": "CategorySectionFragment";
};
export type CategorySectionFragment$key = {
  readonly " $data"?: CategorySectionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CategorySectionFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
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
        "path": [
          "trackerPatterns"
        ]
      }
    ]
  },
  "name": "CategorySectionFragment",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    (v2/*: any*/),
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "gcmConsentTypes",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "posthogConsent",
      "storageKey": null
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": "trackerPatterns",
        "args": null,
        "concreteType": "TrackerPatternConnection",
        "kind": "LinkedField",
        "name": "__CategorySection_trackerPatterns_connection",
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
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "displayName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "trackerType",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "maxAgeSeconds",
                    "storageKey": null
                  },
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "excluded",
                    "storageKey": null
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "EditCookieRowFragment"
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
      "action": "THROW"
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "concreteType": "CookieBanner",
        "kind": "LinkedField",
        "name": "cookieBanner",
        "plural": false,
        "selections": [
          {
            "kind": "RequiredField",
            "field": {
              "alias": null,
              "args": [
                {
                  "kind": "Literal",
                  "name": "filter",
                  "value": {
                    "excludeKind": "UNCATEGORISED"
                  }
                },
                {
                  "kind": "Literal",
                  "name": "first",
                  "value": 50
                },
                {
                  "kind": "Literal",
                  "name": "orderBy",
                  "value": {
                    "direction": "ASC",
                    "field": "RANK"
                  }
                }
              ],
              "concreteType": "CookieCategoryConnection",
              "kind": "LinkedField",
              "name": "categories",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "CookieCategoryEdge",
                  "kind": "LinkedField",
                  "name": "edges",
                  "plural": true,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "CookieCategory",
                      "kind": "LinkedField",
                      "name": "node",
                      "plural": false,
                      "selections": [
                        (v0/*: any*/),
                        (v1/*: any*/),
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "rank",
                          "storageKey": null
                        },
                        (v3/*: any*/)
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": "categories(filter:{\"excludeKind\":\"UNCATEGORISED\"},first:50,orderBy:{\"direction\":\"ASC\",\"field\":\"RANK\"})"
            },
            "action": "THROW"
          }
        ],
        "storageKey": null
      },
      "action": "THROW"
    }
  ],
  "type": "CookieCategory",
  "abstractKey": null
};
})();

(node as any).hash = "fb322d28d566ad5d465440dbb5f8f1ba";

export default node;
