/**
 * @generated SignedSource<<f5dfe0fe32623f95347f1cf3ec5552ac>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrderDirection = "ASC" | "DESC";
export type ThirdPartyContactOrderField = "CREATED_AT" | "EMAIL" | "FULL_NAME";
export type ThirdPartyContactOrder = {
  direction: OrderDirection;
  field: ThirdPartyContactOrderField;
};
export type ThirdPartyContactsListQuery$variables = {
  after?: string | null | undefined;
  before?: string | null | undefined;
  first?: number | null | undefined;
  id: string;
  last?: number | null | undefined;
  order?: ThirdPartyContactOrder | null | undefined;
};
export type ThirdPartyContactsListQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"ThirdPartyContactsTabFragment">;
  };
};
export type ThirdPartyContactsListQuery = {
  response: ThirdPartyContactsListQuery$data;
  variables: ThirdPartyContactsListQuery$variables;
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
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "order"
},
v6 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v7 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v8 = {
  "kind": "Variable",
  "name": "before",
  "variableName": "before"
},
v9 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "first"
},
v10 = {
  "kind": "Variable",
  "name": "last",
  "variableName": "last"
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v13 = [
  (v7/*: any*/),
  (v8/*: any*/),
  (v9/*: any*/),
  (v10/*: any*/),
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
      (v5/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ThirdPartyContactsListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              {
                "kind": "Variable",
                "name": "order",
                "variableName": "order"
              }
            ],
            "kind": "FragmentSpread",
            "name": "ThirdPartyContactsTabFragment"
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
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "ThirdPartyContactsListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v11/*: any*/),
          (v12/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v13/*: any*/),
                "concreteType": "ThirdPartyContactConnection",
                "kind": "LinkedField",
                "name": "contacts",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ThirdPartyContactEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ThirdPartyContact",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v12/*: any*/),
                          {
                            "alias": "canUpdate",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "action",
                                "value": "core:thirdParty-contact:update"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "permission",
                            "storageKey": "permission(action:\"core:thirdParty-contact:update\")"
                          },
                          {
                            "alias": "canDelete",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "action",
                                "value": "core:thirdParty-contact:delete"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "permission",
                            "storageKey": "permission(action:\"core:thirdParty-contact:delete\")"
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "fullName",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "email",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "phone",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "role",
                            "storageKey": null
                          },
                          (v11/*: any*/)
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
                "args": (v13/*: any*/),
                "filters": [
                  "orderBy"
                ],
                "handle": "connection",
                "key": "ThirdPartyContactsTabFragment_contacts",
                "kind": "LinkedHandle",
                "name": "contacts"
              }
            ],
            "type": "ThirdParty",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3bae61e82c099b7028fed457bd3e4c3c",
    "id": null,
    "metadata": {},
    "name": "ThirdPartyContactsListQuery",
    "operationKind": "query",
    "text": "query ThirdPartyContactsListQuery(\n  $after: CursorKey = null\n  $before: CursorKey = null\n  $first: Int = 50\n  $last: Int = null\n  $order: ThirdPartyContactOrder = null\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...ThirdPartyContactsTabFragment_16fISc\n    id\n  }\n}\n\nfragment ThirdPartyContactsTabFragment_16fISc on ThirdParty {\n  contacts(first: $first, after: $after, last: $last, before: $before, orderBy: $order) {\n    edges {\n      node {\n        id\n        canUpdate: permission(action: \"core:thirdParty-contact:update\")\n        canDelete: permission(action: \"core:thirdParty-contact:delete\")\n        ...ThirdPartyContactsTabFragment_contact\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n\nfragment ThirdPartyContactsTabFragment_contact on ThirdPartyContact {\n  id\n  fullName\n  email\n  phone\n  role\n  canUpdate: permission(action: \"core:thirdParty-contact:update\")\n  canDelete: permission(action: \"core:thirdParty-contact:delete\")\n}\n"
  }
};
})();

(node as any).hash = "cfb8b64d7558a1823dda5d6ddbf11df0";

export default node;
