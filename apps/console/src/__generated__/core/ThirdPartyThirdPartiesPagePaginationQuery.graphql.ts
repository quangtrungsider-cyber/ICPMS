/**
 * @generated SignedSource<<302e878934e14ff8a5eb18dc420a206c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrderDirection = "ASC" | "DESC";
export type ThirdPartyOrderField = "CREATED_AT" | "NAME" | "UPDATED_AT";
export type ThirdPartyOrder = {
  direction: OrderDirection;
  field: ThirdPartyOrderField;
};
export type ThirdPartyThirdPartiesPagePaginationQuery$variables = {
  after?: string | null | undefined;
  before?: string | null | undefined;
  first?: number | null | undefined;
  id: string;
  last?: number | null | undefined;
  order?: ThirdPartyOrder | null | undefined;
};
export type ThirdPartyThirdPartiesPagePaginationQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"ThirdPartyThirdPartiesPageFragment">;
  };
};
export type ThirdPartyThirdPartiesPagePaginationQuery = {
  response: ThirdPartyThirdPartiesPagePaginationQuery$data;
  variables: ThirdPartyThirdPartiesPagePaginationQuery$variables;
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
    "name": "ThirdPartyThirdPartiesPagePaginationQuery",
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
            "name": "ThirdPartyThirdPartiesPageFragment"
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
    "name": "ThirdPartyThirdPartiesPagePaginationQuery",
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
                "concreteType": "ThirdPartyConnection",
                "kind": "LinkedField",
                "name": "childThirdParties",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ThirdPartyEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ThirdParty",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v12/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "websiteUrl",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "first",
                                "value": 1
                              },
                              {
                                "kind": "Literal",
                                "name": "orderBy",
                                "value": {
                                  "direction": "DESC",
                                  "field": "CREATED_AT"
                                }
                              }
                            ],
                            "concreteType": "ThirdPartyRiskAssessmentConnection",
                            "kind": "LinkedField",
                            "name": "riskAssessments",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ThirdPartyRiskAssessmentEdge",
                                "kind": "LinkedField",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ThirdPartyRiskAssessment",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      (v12/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "createdAt",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "dataSensitivity",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "businessImpact",
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "riskAssessments(first:1,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
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
                "filters": [],
                "handle": "connection",
                "key": "ThirdPartyThirdPartiesPageFragment_childThirdParties",
                "kind": "LinkedHandle",
                "name": "childThirdParties"
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
    "cacheID": "c8075da2f0a40444026cc257e9c29d0d",
    "id": null,
    "metadata": {},
    "name": "ThirdPartyThirdPartiesPagePaginationQuery",
    "operationKind": "query",
    "text": "query ThirdPartyThirdPartiesPagePaginationQuery(\n  $after: CursorKey = null\n  $before: CursorKey = null\n  $first: Int = 50\n  $last: Int = null\n  $order: ThirdPartyOrder = null\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...ThirdPartyThirdPartiesPageFragment_16fISc\n    id\n  }\n}\n\nfragment ThirdPartyThirdPartiesPageFragment_16fISc on ThirdParty {\n  childThirdParties(first: $first, after: $after, last: $last, before: $before, orderBy: $order) {\n    edges {\n      node {\n        id\n        name\n        websiteUrl\n        riskAssessments(first: 1, orderBy: {direction: DESC, field: CREATED_AT}) {\n          edges {\n            node {\n              id\n              createdAt\n              dataSensitivity\n              businessImpact\n            }\n          }\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "b9d70b3d8673c78e43b999ab68cbfc14";

export default node;
