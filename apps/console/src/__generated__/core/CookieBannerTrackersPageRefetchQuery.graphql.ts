/**
 * @generated SignedSource<<e40fed9a2a9db845d355c851c6541ce8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CookieSource = "EXTENSION" | "HTTP" | "PRE_EXISTING" | "SCRIPT";
export type OrderDirection = "ASC" | "DESC";
export type TrackerPatternOrderField = "CREATED_AT" | "LAST_MATCHED_AT" | "NAME" | "SOURCE" | "UPDATED_AT";
export type TrackerType = "CACHE_STORAGE" | "COOKIE" | "INDEXED_DB" | "LOCAL_STORAGE" | "SESSION_STORAGE";
export type TrackerPatternOrder = {
  direction: OrderDirection;
  field: TrackerPatternOrderField;
};
export type CookieBannerTrackersPageRefetchQuery$variables = {
  after?: string | null | undefined;
  before?: string | null | undefined;
  cookieCategoryId?: string | null | undefined;
  first?: number | null | undefined;
  id: string;
  last?: number | null | undefined;
  order?: TrackerPatternOrder | null | undefined;
  query?: string | null | undefined;
  source?: CookieSource | null | undefined;
  thirdPartyId?: string | null | undefined;
  trackerType?: TrackerType | null | undefined;
};
export type CookieBannerTrackersPageRefetchQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"CookieBannerTrackersPageFragment">;
  };
};
export type CookieBannerTrackersPageRefetchQuery = {
  response: CookieBannerTrackersPageRefetchQuery$data;
  variables: CookieBannerTrackersPageRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "before"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cookieCategoryId"
},
v3 = {
  "defaultValue": 50,
  "kind": "LocalArgument",
  "name": "first"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "last"
},
v6 = {
  "defaultValue": {
    "direction": "ASC",
    "field": "NAME"
  },
  "kind": "LocalArgument",
  "name": "order"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "query"
},
v8 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "source"
},
v9 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "thirdPartyId"
},
v10 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "trackerType"
},
v11 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v12 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v13 = {
  "kind": "Variable",
  "name": "before",
  "variableName": "before"
},
v14 = {
  "kind": "Variable",
  "name": "cookieCategoryId",
  "variableName": "cookieCategoryId"
},
v15 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "first"
},
v16 = {
  "kind": "Variable",
  "name": "last",
  "variableName": "last"
},
v17 = {
  "kind": "Variable",
  "name": "query",
  "variableName": "query"
},
v18 = {
  "kind": "Variable",
  "name": "source",
  "variableName": "source"
},
v19 = {
  "kind": "Variable",
  "name": "thirdPartyId",
  "variableName": "thirdPartyId"
},
v20 = {
  "kind": "Variable",
  "name": "trackerType",
  "variableName": "trackerType"
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v23 = [
  (v22/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
],
v24 = [
  (v12/*: any*/),
  (v13/*: any*/),
  {
    "fields": [
      (v14/*: any*/),
      (v17/*: any*/),
      (v18/*: any*/),
      (v19/*: any*/),
      (v20/*: any*/)
    ],
    "kind": "ObjectValue",
    "name": "filter"
  },
  (v15/*: any*/),
  (v16/*: any*/),
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
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/),
      (v9/*: any*/),
      (v10/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CookieBannerTrackersPageRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v11/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/),
              {
                "kind": "Variable",
                "name": "order",
                "variableName": "order"
              },
              (v17/*: any*/),
              (v18/*: any*/),
              (v19/*: any*/),
              (v20/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "CookieBannerTrackersPageFragment"
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
      (v2/*: any*/),
      (v3/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/),
      (v9/*: any*/),
      (v10/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Operation",
    "name": "CookieBannerTrackersPageRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v11/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v21/*: any*/),
          (v22/*: any*/),
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
                  (v21/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": (v23/*: any*/),
                    "type": "ThirdParty",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": (v23/*: any*/),
                    "type": "CommonThirdParty",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v22/*: any*/)
                    ],
                    "type": "Node",
                    "abstractKey": "__isNode"
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v24/*: any*/),
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
                          (v22/*: any*/),
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
                            "selections": (v23/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ThirdParty",
                            "kind": "LinkedField",
                            "name": "thirdParty",
                            "plural": false,
                            "selections": (v23/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CommonThirdParty",
                            "kind": "LinkedField",
                            "name": "commonThirdParty",
                            "plural": false,
                            "selections": (v23/*: any*/),
                            "storageKey": null
                          },
                          (v21/*: any*/)
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
              {
                "alias": null,
                "args": (v24/*: any*/),
                "filters": [
                  "filter",
                  "orderBy"
                ],
                "handle": "connection",
                "key": "CookieBannerTrackersPage_trackerPatterns",
                "kind": "LinkedHandle",
                "name": "trackerPatterns"
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
    "cacheID": "5e018f10d91af64682982781c69ca0e0",
    "id": null,
    "metadata": {},
    "name": "CookieBannerTrackersPageRefetchQuery",
    "operationKind": "query",
    "text": "query CookieBannerTrackersPageRefetchQuery(\n  $after: CursorKey = null\n  $before: CursorKey = null\n  $cookieCategoryId: ID = null\n  $first: Int = 50\n  $last: Int = null\n  $order: TrackerPatternOrder = {field: NAME, direction: ASC}\n  $query: String = null\n  $source: CookieSource = null\n  $thirdPartyId: ID = null\n  $trackerType: TrackerType = null\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...CookieBannerTrackersPageFragment_2Xo3T5\n    id\n  }\n}\n\nfragment CookieBannerTrackersPageFragment_2Xo3T5 on CookieBanner {\n  linkedThirdParties {\n    __typename\n    ... on ThirdParty {\n      id\n      name\n    }\n    ... on CommonThirdParty {\n      id\n      name\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  trackerPatterns(first: $first, after: $after, last: $last, before: $before, orderBy: $order, filter: {query: $query, source: $source, trackerType: $trackerType, cookieCategoryId: $cookieCategoryId, thirdPartyId: $thirdPartyId}) {\n    edges {\n      node {\n        id\n        ...TrackerPatternRowFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n\nfragment TrackerPatternRowFragment on TrackerPattern {\n  id\n  trackerType\n  displayName\n  source\n  description\n  maxAgeSeconds\n  excluded\n  lastMatchedAt\n  cookieCategory {\n    id\n    name\n  }\n  thirdParty {\n    id\n    name\n  }\n  commonThirdParty {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "a96868e00121ba40d13e2c116baa1633";

export default node;
