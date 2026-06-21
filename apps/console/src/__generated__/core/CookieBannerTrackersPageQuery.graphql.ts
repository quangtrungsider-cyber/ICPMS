/**
 * @generated SignedSource<<dfad7f9054cafdc10808944769795031>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CookieBannerTrackersPageQuery$variables = {
  cookieBannerId: string;
};
export type CookieBannerTrackersPageQuery$data = {
  readonly node: {
    readonly __typename: "CookieBanner";
    readonly categories: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly name: string;
        };
      }>;
    };
    readonly " $fragmentSpreads": FragmentRefs<"CookieBannerTrackersPageFragment">;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type CookieBannerTrackersPageQuery = {
  response: CookieBannerTrackersPageQuery$data;
  variables: CookieBannerTrackersPageQuery$variables;
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
  "kind": "Literal",
  "name": "first",
  "value": 50
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  (v4/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
],
v6 = {
  "alias": null,
  "args": [
    (v3/*: any*/),
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
          "selections": (v5/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "categories(first:50,orderBy:{\"direction\":\"ASC\",\"field\":\"RANK\"})"
},
v7 = [
  {
    "fields": [
      {
        "kind": "Literal",
        "name": "cookieCategoryId",
        "value": null
      },
      {
        "kind": "Literal",
        "name": "query",
        "value": null
      },
      {
        "kind": "Literal",
        "name": "source",
        "value": null
      },
      {
        "kind": "Literal",
        "name": "thirdPartyId",
        "value": null
      },
      {
        "kind": "Literal",
        "name": "trackerType",
        "value": null
      }
    ],
    "kind": "ObjectValue",
    "name": "filter"
  },
  (v3/*: any*/),
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "ASC",
      "field": "NAME"
    }
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CookieBannerTrackersPageQuery",
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
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "CookieBannerTrackersPageFragment"
                },
                {
                  "kind": "RequiredField",
                  "field": (v6/*: any*/),
                  "action": "THROW"
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
    "name": "CookieBannerTrackersPageQuery",
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
          (v4/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "linkedThirdParties",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": (v5/*: any*/),
                    "type": "ThirdParty",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": (v5/*: any*/),
                    "type": "CommonThirdParty",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v4/*: any*/)
                    ],
                    "type": "Node",
                    "abstractKey": "__isNode"
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v7/*: any*/),
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
                          (v4/*: any*/),
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
                            "name": "displayName",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "source",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "description",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "maxAgeSeconds",
                            "storageKey": null
                          },
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
                            "name": "lastMatchedAt",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CookieCategory",
                            "kind": "LinkedField",
                            "name": "cookieCategory",
                            "plural": false,
                            "selections": (v5/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ThirdParty",
                            "kind": "LinkedField",
                            "name": "thirdParty",
                            "plural": false,
                            "selections": (v5/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CommonThirdParty",
                            "kind": "LinkedField",
                            "name": "commonThirdParty",
                            "plural": false,
                            "selections": (v5/*: any*/),
                            "storageKey": null
                          },
                          (v2/*: any*/)
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
                "storageKey": "trackerPatterns(filter:{\"cookieCategoryId\":null,\"query\":null,\"source\":null,\"thirdPartyId\":null,\"trackerType\":null},first:50,orderBy:{\"direction\":\"ASC\",\"field\":\"NAME\"})"
              },
              {
                "alias": null,
                "args": (v7/*: any*/),
                "filters": [
                  "filter",
                  "orderBy"
                ],
                "handle": "connection",
                "key": "CookieBannerTrackersPage_trackerPatterns",
                "kind": "LinkedHandle",
                "name": "trackerPatterns"
              },
              (v6/*: any*/)
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
    "cacheID": "a070cb115149ce68f87b0e49b00d4c50",
    "id": null,
    "metadata": {},
    "name": "CookieBannerTrackersPageQuery",
    "operationKind": "query",
    "text": "query CookieBannerTrackersPageQuery(\n  $cookieBannerId: ID!\n) {\n  node(id: $cookieBannerId) {\n    __typename\n    ... on CookieBanner {\n      ...CookieBannerTrackersPageFragment\n      categories(first: 50, orderBy: {field: RANK, direction: ASC}) {\n        edges {\n          node {\n            id\n            name\n          }\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment CookieBannerTrackersPageFragment on CookieBanner {\n  linkedThirdParties {\n    __typename\n    ... on ThirdParty {\n      id\n      name\n    }\n    ... on CommonThirdParty {\n      id\n      name\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  trackerPatterns(first: 50, orderBy: {field: NAME, direction: ASC}, filter: {}) {\n    edges {\n      node {\n        id\n        ...TrackerPatternRowFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n\nfragment TrackerPatternRowFragment on TrackerPattern {\n  id\n  trackerType\n  displayName\n  source\n  description\n  maxAgeSeconds\n  excluded\n  lastMatchedAt\n  cookieCategory {\n    id\n    name\n  }\n  thirdParty {\n    id\n    name\n  }\n  commonThirdParty {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "e912d93bae0a6579ffa13a0bbd0b2a99";

export default node;
