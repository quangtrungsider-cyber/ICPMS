/**
 * @generated SignedSource<<193e4a994a8def9e4a8a34123bf6d505>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CookieConsentAction = "ACCEPT_ALL" | "CUSTOMIZE" | "GPC" | "REJECT_ALL";
export type CookieConsentRecordOrderField = "CREATED_AT";
export type OrderDirection = "ASC" | "DESC";
export type CookieConsentRecordOrder = {
  direction: OrderDirection;
  field: CookieConsentRecordOrderField;
};
export type CookieBannerConsentRecordsPageRefetchQuery$variables = {
  action?: CookieConsentAction | null | undefined;
  after?: string | null | undefined;
  before?: string | null | undefined;
  first?: number | null | undefined;
  id: string;
  last?: number | null | undefined;
  order?: CookieConsentRecordOrder | null | undefined;
  version?: number | null | undefined;
  visitorId?: string | null | undefined;
};
export type CookieBannerConsentRecordsPageRefetchQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"CookieBannerConsentRecordsPageFragment">;
  };
};
export type CookieBannerConsentRecordsPageRefetchQuery = {
  response: CookieBannerConsentRecordsPageRefetchQuery$data;
  variables: CookieBannerConsentRecordsPageRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "action"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "before"
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
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "order"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "version"
},
v8 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "visitorId"
},
v9 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v10 = {
  "kind": "Variable",
  "name": "action",
  "variableName": "action"
},
v11 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v12 = {
  "kind": "Variable",
  "name": "before",
  "variableName": "before"
},
v13 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "first"
},
v14 = {
  "kind": "Variable",
  "name": "last",
  "variableName": "last"
},
v15 = {
  "kind": "Variable",
  "name": "version",
  "variableName": "version"
},
v16 = {
  "kind": "Variable",
  "name": "visitorId",
  "variableName": "visitorId"
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v19 = [
  (v11/*: any*/),
  (v12/*: any*/),
  {
    "fields": [
      (v10/*: any*/),
      (v15/*: any*/),
      (v16/*: any*/)
    ],
    "kind": "ObjectValue",
    "name": "filter"
  },
  (v13/*: any*/),
  (v14/*: any*/),
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
      (v8/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CookieBannerConsentRecordsPageRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v9/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              {
                "kind": "Variable",
                "name": "order",
                "variableName": "order"
              },
              (v15/*: any*/),
              (v16/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "CookieBannerConsentRecordsPageFragment"
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
      (v4/*: any*/)
    ],
    "kind": "Operation",
    "name": "CookieBannerConsentRecordsPageRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v9/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v17/*: any*/),
          (v18/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v19/*: any*/),
                "concreteType": "CookieConsentRecordConnection",
                "kind": "LinkedField",
                "name": "consentRecords",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CookieConsentRecordEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CookieConsentRecord",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v18/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "visitorId",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "action",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CookieBannerVersion",
                            "kind": "LinkedField",
                            "name": "cookieBannerVersion",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "version",
                                "storageKey": null
                              },
                              (v18/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "ipAddress",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "sdkVersion",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "regulation",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "countryCode",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "createdAt",
                            "storageKey": null
                          },
                          (v17/*: any*/)
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
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v19/*: any*/),
                "filters": [
                  "filter",
                  "orderBy"
                ],
                "handle": "connection",
                "key": "CookieBannerConsentRecordsPage_consentRecords",
                "kind": "LinkedHandle",
                "name": "consentRecords"
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
    "cacheID": "2211d781f3e7543241e535a02493a846",
    "id": null,
    "metadata": {},
    "name": "CookieBannerConsentRecordsPageRefetchQuery",
    "operationKind": "query",
    "text": "query CookieBannerConsentRecordsPageRefetchQuery(\n  $action: CookieConsentAction = null\n  $after: CursorKey = null\n  $before: CursorKey = null\n  $first: Int = 50\n  $last: Int = null\n  $order: CookieConsentRecordOrder = null\n  $version: Int = null\n  $visitorId: String = null\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...CookieBannerConsentRecordsPageFragment_zvox9\n    id\n  }\n}\n\nfragment ConsentRecordRowFragment on CookieConsentRecord {\n  id\n  visitorId\n  action\n  cookieBannerVersion {\n    version\n    id\n  }\n  ipAddress\n  sdkVersion\n  regulation\n  countryCode\n  createdAt\n}\n\nfragment CookieBannerConsentRecordsPageFragment_zvox9 on CookieBanner {\n  consentRecords(first: $first, after: $after, last: $last, before: $before, orderBy: $order, filter: {action: $action, visitorId: $visitorId, version: $version}) {\n    edges {\n      node {\n        id\n        ...ConsentRecordRowFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "c74090291ebdc30c286330abbecebbef";

export default node;
