/**
 * @generated SignedSource<<61453100bbd25c4048d958eaa2d4e73f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RiskObligationsPageQuery$variables = {
  riskId: string;
};
export type RiskObligationsPageQuery$data = {
  readonly node: {
    readonly __typename: "Risk";
    readonly canCreateObligationMapping: boolean;
    readonly canDeleteObligationMapping: boolean;
    readonly id: string;
    readonly obligations: {
      readonly __id: string;
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly " $fragmentSpreads": FragmentRefs<"LinkedObligationsCardFragment">;
        };
      }>;
    };
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type RiskObligationsPageQuery = {
  response: RiskObligationsPageQuery$data;
  variables: RiskObligationsPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "riskId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "riskId"
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
  "alias": "canCreateObligationMapping",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:risk:create-obligation-mapping"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:risk:create-obligation-mapping\")"
},
v5 = {
  "alias": "canDeleteObligationMapping",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:risk:delete-obligation-mapping"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:risk:delete-obligation-mapping\")"
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v7 = {
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
v8 = {
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
v9 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RiskObligationsPageQuery",
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
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "alias": "obligations",
                "args": null,
                "concreteType": "ObligationConnection",
                "kind": "LinkedField",
                "name": "__RiskObligationsPage_obligations_connection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ObligationEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Obligation",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "LinkedObligationsCardFragment"
                          },
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/),
                  (v8/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "Risk",
            "abstractKey": null
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RiskObligationsPageQuery",
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
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": (v9/*: any*/),
                "concreteType": "ObligationConnection",
                "kind": "LinkedField",
                "name": "obligations",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ObligationEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Obligation",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "area",
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
                            "name": "status",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Profile",
                            "kind": "LinkedField",
                            "name": "owner",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "fullName",
                                "storageKey": null
                              },
                              (v3/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/),
                  (v8/*: any*/)
                ],
                "storageKey": "obligations(first:100)"
              },
              {
                "alias": null,
                "args": (v9/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "RiskObligationsPage_obligations",
                "kind": "LinkedHandle",
                "name": "obligations"
              }
            ],
            "type": "Risk",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5926e5237b46292c4c122c5a2ab855ab",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "node",
            "obligations"
          ]
        }
      ]
    },
    "name": "RiskObligationsPageQuery",
    "operationKind": "query",
    "text": "query RiskObligationsPageQuery(\n  $riskId: ID!\n) {\n  node(id: $riskId) {\n    __typename\n    ... on Risk {\n      id\n      canCreateObligationMapping: permission(action: \"core:risk:create-obligation-mapping\")\n      canDeleteObligationMapping: permission(action: \"core:risk:delete-obligation-mapping\")\n      obligations(first: 100) {\n        edges {\n          node {\n            id\n            ...LinkedObligationsCardFragment\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment LinkedObligationsCardFragment on Obligation {\n  id\n  area\n  source\n  status\n  owner {\n    fullName\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "530c6d86d810049cf1c12aa33e768de8";

export default node;
