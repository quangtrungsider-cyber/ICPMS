/**
 * @generated SignedSource<<4d965d833648247b08343f54998b0208>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrderDirection = "ASC" | "DESC";
export type TrackerResourceOrderField = "CREATED_AT" | "LAST_DETECTED_AT" | "ORIGIN" | "UPDATED_AT";
export type TrackerResourceType = "BEACON" | "FETCH" | "FONT" | "IFRAME" | "IMAGE" | "MEDIA" | "SCRIPT" | "SERVICE_WORKER" | "STYLESHEET";
export type TrackerResourceOrder = {
  direction: OrderDirection;
  field: TrackerResourceOrderField;
};
export type CookieBannerResourcesPageRefetchQuery$variables = {
  after?: string | null | undefined;
  before?: string | null | undefined;
  first?: number | null | undefined;
  id: string;
  last?: number | null | undefined;
  order?: TrackerResourceOrder | null | undefined;
  query?: string | null | undefined;
  type?: TrackerResourceType | null | undefined;
};
export type CookieBannerResourcesPageRefetchQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"CookieBannerResourcesPageFragment">;
  };
};
export type CookieBannerResourcesPageRefetchQuery = {
  response: CookieBannerResourcesPageRefetchQuery$data;
  variables: CookieBannerResourcesPageRefetchQuery$variables;
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
  "defaultValue": 50,
  "kind": "LocalArgument",
  "name": "first"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "last"
},
v5 = {
  "defaultValue": {
    "direction": "DESC",
    "field": "LAST_DETECTED_AT"
  },
  "kind": "LocalArgument",
  "name": "order"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "query"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "type"
},
v8 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v9 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v10 = {
  "kind": "Variable",
  "name": "before",
  "variableName": "before"
},
v11 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "first"
},
v12 = {
  "kind": "Variable",
  "name": "last",
  "variableName": "last"
},
v13 = {
  "kind": "Variable",
  "name": "query",
  "variableName": "query"
},
v14 = {
  "kind": "Variable",
  "name": "type",
  "variableName": "type"
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v17 = [
  (v9/*: any*/),
  (v10/*: any*/),
  {
    "fields": [
      (v13/*: any*/),
      (v14/*: any*/)
    ],
    "kind": "ObjectValue",
    "name": "filter"
  },
  (v11/*: any*/),
  (v12/*: any*/),
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
      (v7/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CookieBannerResourcesPageRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v8/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              {
                "kind": "Variable",
                "name": "order",
                "variableName": "order"
              },
              (v13/*: any*/),
              (v14/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "CookieBannerResourcesPageFragment"
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
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "CookieBannerResourcesPageRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v8/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v15/*: any*/),
          (v16/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v17/*: any*/),
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
                          (v16/*: any*/),
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
                              (v16/*: any*/),
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
                          (v15/*: any*/)
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
                "args": (v17/*: any*/),
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
    "cacheID": "fa50a842c5b5b058740dacdc0c4f8163",
    "id": null,
    "metadata": {},
    "name": "CookieBannerResourcesPageRefetchQuery",
    "operationKind": "query",
    "text": "query CookieBannerResourcesPageRefetchQuery(\n  $after: CursorKey = null\n  $before: CursorKey = null\n  $first: Int = 50\n  $last: Int = null\n  $order: TrackerResourceOrder = {field: LAST_DETECTED_AT, direction: DESC}\n  $query: String = null\n  $type: TrackerResourceType = null\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...CookieBannerResourcesPageFragment_2FPHHA\n    id\n  }\n}\n\nfragment CookieBannerResourcesPageFragment_2FPHHA on CookieBanner {\n  uncategorisedTrackerResources(first: $first, after: $after, last: $last, before: $before, orderBy: $order, filter: {query: $query, type: $type}) {\n    edges {\n      node {\n        id\n        ...TrackerResourceRowFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n\nfragment TrackerResourceRowFragment on TrackerResource {\n  id\n  type\n  origin\n  path\n  displayName\n  description\n  excluded\n  lastDetectedAt\n  cookieCategory {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "db18107d37c1f56d9b7a409f73f7e58c";

export default node;
