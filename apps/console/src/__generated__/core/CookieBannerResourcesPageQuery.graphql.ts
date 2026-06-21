/**
 * @generated SignedSource<<42657836b115aa59145f1e160c150114>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CookieBannerResourcesPageQuery$variables = {
  cookieBannerId: string;
};
export type CookieBannerResourcesPageQuery$data = {
  readonly node: {
    readonly __typename: "CookieBanner";
    readonly " $fragmentSpreads": FragmentRefs<"CookieBannerResourcesPageFragment">;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type CookieBannerResourcesPageQuery = {
  response: CookieBannerResourcesPageQuery$data;
  variables: CookieBannerResourcesPageQuery$variables;
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
v4 = [
  {
    "fields": [
      {
        "kind": "Literal",
        "name": "query",
        "value": null
      },
      {
        "kind": "Literal",
        "name": "type",
        "value": null
      }
    ],
    "kind": "ObjectValue",
    "name": "filter"
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
      "direction": "DESC",
      "field": "LAST_DETECTED_AT"
    }
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CookieBannerResourcesPageQuery",
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
                  "name": "CookieBannerResourcesPageFragment"
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
    "name": "CookieBannerResourcesPageQuery",
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
                "args": (v4/*: any*/),
                "concreteType": "TrackerResourceConnection",
                "kind": "LinkedField",
                "name": "uncategorisedTrackerResources",
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
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "type",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "origin",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "path",
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
                            "name": "description",
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
                            "name": "lastDetectedAt",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CookieCategory",
                            "kind": "LinkedField",
                            "name": "cookieCategory",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "name",
                                "storageKey": null
                              }
                            ],
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
                "storageKey": "uncategorisedTrackerResources(filter:{\"query\":null,\"type\":null},first:50,orderBy:{\"direction\":\"DESC\",\"field\":\"LAST_DETECTED_AT\"})"
              },
              {
                "alias": null,
                "args": (v4/*: any*/),
                "filters": [
                  "filter",
                  "orderBy"
                ],
                "handle": "connection",
                "key": "CookieBannerResourcesPage_uncategorisedTrackerResources",
                "kind": "LinkedHandle",
                "name": "uncategorisedTrackerResources"
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
    "cacheID": "dac16e161e95a1d4b122c40de568390d",
    "id": null,
    "metadata": {},
    "name": "CookieBannerResourcesPageQuery",
    "operationKind": "query",
    "text": "query CookieBannerResourcesPageQuery(\n  $cookieBannerId: ID!\n) {\n  node(id: $cookieBannerId) {\n    __typename\n    ... on CookieBanner {\n      ...CookieBannerResourcesPageFragment\n    }\n    id\n  }\n}\n\nfragment CookieBannerResourcesPageFragment on CookieBanner {\n  uncategorisedTrackerResources(first: 50, orderBy: {field: LAST_DETECTED_AT, direction: DESC}, filter: {}) {\n    edges {\n      node {\n        id\n        ...TrackerResourceRowFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n\nfragment TrackerResourceRowFragment on TrackerResource {\n  id\n  type\n  origin\n  path\n  displayName\n  description\n  excluded\n  lastDetectedAt\n  cookieCategory {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "439e541fd6e17a83d5ac8de70622e037";

export default node;
