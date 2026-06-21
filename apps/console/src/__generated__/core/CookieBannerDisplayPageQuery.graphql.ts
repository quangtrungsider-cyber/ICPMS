/**
 * @generated SignedSource<<41ae4b20392bb390968f0cc5ff1b09a4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CookieBannerDisplayPageQuery$variables = {
  cookieBannerId: string;
};
export type CookieBannerDisplayPageQuery$data = {
  readonly node: {
    readonly __typename: "CookieBanner";
    readonly categories: {
      readonly __id: string;
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly rank: number;
          readonly " $fragmentSpreads": FragmentRefs<"CategorySectionFragment">;
        };
      }>;
    };
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"ThemePreview_cookieBanner">;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type CookieBannerDisplayPageQuery = {
  response: CookieBannerDisplayPageQuery$data;
  variables: CookieBannerDisplayPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cookieBannerId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "cookieBannerId"
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
  "kind": "Literal",
  "name": "filter",
  "value": {
    "excludeKind": "UNCATEGORISED"
  }
},
v5 = {
  "kind": "Literal",
  "name": "orderBy",
  "value": {
    "direction": "ASC",
    "field": "RANK"
  }
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rank",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v8 = {
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
v9 = {
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
},
v10 = [
  (v4/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 50
  },
  (v5/*: any*/)
],
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v14 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "ASC",
      "field": "CREATED_AT"
    }
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CookieBannerDisplayPageQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
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
                {
                  "kind": "RequiredField",
                  "field": {
                    "alias": "categories",
                    "args": [
                      (v4/*: any*/),
                      (v5/*: any*/)
                    ],
                    "concreteType": "CookieCategoryConnection",
                    "kind": "LinkedField",
                    "name": "__CookieBannerDisplayPage_categories_connection",
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
                              (v3/*: any*/),
                              (v6/*: any*/),
                              {
                                "args": null,
                                "kind": "FragmentSpread",
                                "name": "CategorySectionFragment"
                              },
                              (v2/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v7/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v8/*: any*/),
                      (v9/*: any*/)
                    ],
                    "storageKey": "__CookieBannerDisplayPage_categories_connection(filter:{\"excludeKind\":\"UNCATEGORISED\"},orderBy:{\"direction\":\"ASC\",\"field\":\"RANK\"})"
                  },
                  "action": "THROW"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ThemePreview_cookieBanner"
                }
              ],
              "type": "CookieBanner",
              "abstractKey": null
            }
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CookieBannerDisplayPageQuery",
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
              {
                "alias": null,
                "args": (v10/*: any*/),
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
                          (v3/*: any*/),
                          (v6/*: any*/),
                          (v11/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "slug",
                            "storageKey": null
                          },
                          (v12/*: any*/),
                          (v13/*: any*/),
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
                            "alias": null,
                            "args": (v14/*: any*/),
                            "concreteType": "TrackerPatternConnection",
                            "kind": "LinkedField",
                            "name": "trackerPatterns",
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
                                      (v3/*: any*/),
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
                                      (v12/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "excluded",
                                        "storageKey": null
                                      },
                                      (v2/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v7/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v8/*: any*/),
                              (v9/*: any*/)
                            ],
                            "storageKey": "trackerPatterns(first:100,orderBy:{\"direction\":\"ASC\",\"field\":\"CREATED_AT\"})"
                          },
                          {
                            "alias": null,
                            "args": (v14/*: any*/),
                            "filters": [],
                            "handle": "connection",
                            "key": "CategorySection_trackerPatterns",
                            "kind": "LinkedHandle",
                            "name": "trackerPatterns"
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CookieBanner",
                            "kind": "LinkedField",
                            "name": "cookieBanner",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": (v10/*: any*/),
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
                                          (v3/*: any*/),
                                          (v11/*: any*/),
                                          (v6/*: any*/),
                                          (v13/*: any*/)
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": "categories(filter:{\"excludeKind\":\"UNCATEGORISED\"},first:50,orderBy:{\"direction\":\"ASC\",\"field\":\"RANK\"})"
                              },
                              (v3/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v8/*: any*/),
                  (v9/*: any*/)
                ],
                "storageKey": "categories(filter:{\"excludeKind\":\"UNCATEGORISED\"},first:50,orderBy:{\"direction\":\"ASC\",\"field\":\"RANK\"})"
              },
              {
                "alias": null,
                "args": (v10/*: any*/),
                "filters": [
                  "orderBy",
                  "filter"
                ],
                "handle": "connection",
                "key": "CookieBannerDisplayPage_categories",
                "kind": "LinkedHandle",
                "name": "categories"
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "showBranding",
                "storageKey": null
              }
            ],
            "type": "CookieBanner",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b3df4a3086f5b418da91c0b92187c631",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "node",
            "categories"
          ]
        }
      ]
    },
    "name": "CookieBannerDisplayPageQuery",
    "operationKind": "query",
    "text": "query CookieBannerDisplayPageQuery(\n  $cookieBannerId: ID!\n) {\n  node(id: $cookieBannerId) {\n    __typename\n    ... on CookieBanner {\n      id\n      categories(first: 50, orderBy: {field: RANK, direction: ASC}, filter: {excludeKind: UNCATEGORISED}) {\n        edges {\n          node {\n            id\n            rank\n            ...CategorySectionFragment\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n      ...ThemePreview_cookieBanner\n    }\n    id\n  }\n}\n\nfragment CategorySectionFragment on CookieCategory {\n  id\n  name\n  slug\n  description\n  kind\n  gcmConsentTypes\n  posthogConsent\n  trackerPatterns(first: 100, orderBy: {field: CREATED_AT, direction: ASC}) {\n    edges {\n      node {\n        id\n        displayName\n        trackerType\n        maxAgeSeconds\n        description\n        excluded\n        ...EditCookieRowFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  cookieBanner {\n    categories(first: 50, orderBy: {field: RANK, direction: ASC}, filter: {excludeKind: UNCATEGORISED}) {\n      edges {\n        node {\n          id\n          name\n          rank\n          kind\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment EditCookieRowFragment on TrackerPattern {\n  displayName\n  trackerType\n  maxAgeSeconds\n  description\n  excluded\n}\n\nfragment ThemePreview_cookieBanner on CookieBanner {\n  showBranding\n}\n"
  }
};
})();

(node as any).hash = "6101efd1b7b35fc320489358e0414695";

export default node;
