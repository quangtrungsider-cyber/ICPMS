/**
 * @generated SignedSource<<9d2d4fee4cb88f444438118964705a6a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CookieCategoryKind = "NECESSARY" | "NORMAL" | "UNCATEGORISED";
export type CreateCookieCategoryInput = {
  cookieBannerId: string;
  description: string;
  name: string;
  rank: number;
  slug: string;
};
export type CategoryDialogCreateMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateCookieCategoryInput;
};
export type CategoryDialogCreateMutation$data = {
  readonly createCookieCategory: {
    readonly cookieBanner: {
      readonly id: string;
      readonly latestVersion: {
        readonly id: string;
        readonly state: string;
        readonly version: number;
      } | null | undefined;
    };
    readonly cookieCategoryEdge: {
      readonly node: {
        readonly id: string;
        readonly kind: CookieCategoryKind;
        readonly name: string;
        readonly rank: number;
        readonly " $fragmentSpreads": FragmentRefs<"CategorySectionFragment">;
      };
    };
  };
};
export type CategoryDialogCreateMutation = {
  response: CategoryDialogCreateMutation$data;
  variables: CategoryDialogCreateMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
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
  "name": "rank",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "CookieBanner",
  "kind": "LinkedField",
  "name": "cookieBanner",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "CookieBannerVersion",
      "kind": "LinkedField",
      "name": "latestVersion",
      "plural": false,
      "selections": [
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "version",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "state",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v9 = [
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CategoryDialogCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateCookieCategoryPayload",
        "kind": "LinkedField",
        "name": "createCookieCategory",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CookieCategoryEdge",
            "kind": "LinkedField",
            "name": "cookieCategoryEdge",
            "plural": false,
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
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "CategorySectionFragment"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CategoryDialogCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateCookieCategoryPayload",
        "kind": "LinkedField",
        "name": "createCookieCategory",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CookieCategoryEdge",
            "kind": "LinkedField",
            "name": "cookieCategoryEdge",
            "plural": false,
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
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "slug",
                    "storageKey": null
                  },
                  (v8/*: any*/),
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
                    "args": (v9/*: any*/),
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
                              (v8/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "excluded",
                                "storageKey": null
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
                    "storageKey": "trackerPatterns(first:100,orderBy:{\"direction\":\"ASC\",\"field\":\"CREATED_AT\"})"
                  },
                  {
                    "alias": null,
                    "args": (v9/*: any*/),
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
                                  (v3/*: any*/),
                                  (v5/*: any*/),
                                  (v4/*: any*/),
                                  (v6/*: any*/)
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
            "filters": null,
            "handle": "appendEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "cookieCategoryEdge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "660de219edb9dbecc3a56a3c5bf599a2",
    "id": null,
    "metadata": {},
    "name": "CategoryDialogCreateMutation",
    "operationKind": "mutation",
    "text": "mutation CategoryDialogCreateMutation(\n  $input: CreateCookieCategoryInput!\n) {\n  createCookieCategory(input: $input) {\n    cookieCategoryEdge {\n      node {\n        id\n        rank\n        name\n        kind\n        ...CategorySectionFragment\n      }\n    }\n    cookieBanner {\n      id\n      latestVersion {\n        id\n        version\n        state\n      }\n    }\n  }\n}\n\nfragment CategorySectionFragment on CookieCategory {\n  id\n  name\n  slug\n  description\n  kind\n  gcmConsentTypes\n  posthogConsent\n  trackerPatterns(first: 100, orderBy: {field: CREATED_AT, direction: ASC}) {\n    edges {\n      node {\n        id\n        displayName\n        trackerType\n        maxAgeSeconds\n        description\n        excluded\n        ...EditCookieRowFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  cookieBanner {\n    categories(first: 50, orderBy: {field: RANK, direction: ASC}, filter: {excludeKind: UNCATEGORISED}) {\n      edges {\n        node {\n          id\n          name\n          rank\n          kind\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment EditCookieRowFragment on TrackerPattern {\n  displayName\n  trackerType\n  maxAgeSeconds\n  description\n  excluded\n}\n"
  }
};
})();

(node as any).hash = "284a51c4134175ec91d8173e244b122f";

export default node;
