/**
 * @generated SignedSource<<45bb244a29405f9ec5642403ec5a5524>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrderDirection = "ASC" | "DESC";
export type ProfileOrderField = "CREATED_AT" | "EMAIL_ADDRESS" | "FULL_NAME" | "KIND";
export type ProfileState = "ACTIVE" | "INACTIVE";
export type ProfileFilter = {
  contractEnded?: boolean | null | undefined;
  state?: ProfileState | null | undefined;
};
export type ProfileOrder = {
  direction: OrderDirection;
  field: ProfileOrderField;
};
export type SignatureDocumentsDialogPeopleRefetchQuery$variables = {
  after?: string | null | undefined;
  before?: string | null | undefined;
  filter?: ProfileFilter | null | undefined;
  first?: number | null | undefined;
  id: string;
  last?: number | null | undefined;
  order?: ProfileOrder | null | undefined;
};
export type SignatureDocumentsDialogPeopleRefetchQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"SignatureDocumentsDialogPeopleFragment">;
  };
};
export type SignatureDocumentsDialogPeopleRefetchQuery = {
  response: SignatureDocumentsDialogPeopleRefetchQuery$data;
  variables: SignatureDocumentsDialogPeopleRefetchQuery$variables;
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
  "name": "filter"
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
    "field": "FULL_NAME"
  },
  "kind": "LocalArgument",
  "name": "order"
},
v7 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v8 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v9 = {
  "kind": "Variable",
  "name": "before",
  "variableName": "before"
},
v10 = {
  "kind": "Variable",
  "name": "filter",
  "variableName": "filter"
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v15 = [
  (v8/*: any*/),
  (v9/*: any*/),
  (v10/*: any*/),
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
      (v6/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SignatureDocumentsDialogPeopleRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v7/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              {
                "kind": "Variable",
                "name": "order",
                "variableName": "order"
              }
            ],
            "kind": "FragmentSpread",
            "name": "SignatureDocumentsDialogPeopleFragment"
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
      (v4/*: any*/)
    ],
    "kind": "Operation",
    "name": "SignatureDocumentsDialogPeopleRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v7/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v13/*: any*/),
          (v14/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v15/*: any*/),
                "concreteType": "ProfileConnection",
                "kind": "LinkedField",
                "name": "profiles",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ProfileEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Profile",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v14/*: any*/),
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
                            "name": "emailAddress",
                            "storageKey": null
                          },
                          (v13/*: any*/)
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
                "args": (v15/*: any*/),
                "filters": [
                  "orderBy",
                  "filter"
                ],
                "handle": "connection",
                "key": "SignatureDocumentsDialog_profiles",
                "kind": "LinkedHandle",
                "name": "profiles"
              }
            ],
            "type": "Organization",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e9109a8aa8aaa25c170d46f168b591ee",
    "id": null,
    "metadata": {},
    "name": "SignatureDocumentsDialogPeopleRefetchQuery",
    "operationKind": "query",
    "text": "query SignatureDocumentsDialogPeopleRefetchQuery(\n  $after: CursorKey = null\n  $before: CursorKey = null\n  $filter: ProfileFilter = null\n  $first: Int = 50\n  $last: Int = null\n  $order: ProfileOrder = {direction: ASC, field: FULL_NAME}\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...SignatureDocumentsDialogPeopleFragment_4cFWzS\n    id\n  }\n}\n\nfragment SignatureDocumentsDialogPeopleFragment_4cFWzS on Organization {\n  profiles(first: $first, after: $after, last: $last, before: $before, orderBy: $order, filter: $filter) {\n    edges {\n      node {\n        id\n        fullName\n        emailAddress\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "d536ff94a70315b45aa85dd46e7c3de5";

export default node;
