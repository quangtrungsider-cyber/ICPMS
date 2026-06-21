/**
 * @generated SignedSource<<78766ec64b15911f75a673630a520c9a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RiskAssessmentDetailPageQuery$variables = {
  riskAssessmentId: string;
};
export type RiskAssessmentDetailPageQuery$data = {
  readonly node: {
    readonly canDelete?: boolean;
    readonly createdAt?: string;
    readonly description?: string | null | undefined;
    readonly id?: string;
    readonly name?: string;
    readonly scopes?: {
      readonly __id: string;
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly " $fragmentSpreads": FragmentRefs<"ScopeCardFragment">;
        };
      }>;
    } | null | undefined;
    readonly updatedAt?: string;
  };
};
export type RiskAssessmentDetailPageQuery = {
  response: RiskAssessmentDetailPageQuery$data;
  variables: RiskAssessmentDetailPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "riskAssessmentId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "riskAssessmentId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v7 = {
  "alias": "canDelete",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:risk-assessment:delete"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:risk-assessment:delete\")"
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v10 = {
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
v11 = {
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
v12 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 50
  }
],
v13 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  }
],
v14 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v15 = [
  (v2/*: any*/),
  (v3/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RiskAssessmentDetailPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "alias": "scopes",
                "args": null,
                "concreteType": "RiskAssessmentScopeConnection",
                "kind": "LinkedField",
                "name": "__RiskAssessmentDetailPage_scopes_connection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "RiskAssessmentScopeConnectionEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "RiskAssessmentScope",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "ScopeCardFragment"
                          },
                          (v8/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v9/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v10/*: any*/),
                  (v11/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "RiskAssessment",
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
    "name": "RiskAssessmentDetailPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v8/*: any*/),
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              {
                "alias": null,
                "args": (v12/*: any*/),
                "concreteType": "RiskAssessmentScopeConnection",
                "kind": "LinkedField",
                "name": "scopes",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "RiskAssessmentScopeConnectionEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "RiskAssessmentScope",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": (v13/*: any*/),
                            "concreteType": "RiskAssessmentNodeConnection",
                            "kind": "LinkedField",
                            "name": "nodes",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "RiskAssessmentNodeConnectionEdge",
                                "kind": "LinkedField",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "RiskAssessmentNode",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      (v2/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "nodeType",
                                        "storageKey": null
                                      },
                                      (v3/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "boundaryId",
                                        "storageKey": null
                                      },
                                      (v8/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v9/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v10/*: any*/),
                              (v11/*: any*/)
                            ],
                            "storageKey": "nodes(first:100)"
                          },
                          {
                            "alias": null,
                            "args": (v13/*: any*/),
                            "filters": [],
                            "handle": "connection",
                            "key": "RiskAssessmentScope_nodes",
                            "kind": "LinkedHandle",
                            "name": "nodes"
                          },
                          {
                            "alias": null,
                            "args": (v13/*: any*/),
                            "concreteType": "RiskAssessmentBoundaryConnection",
                            "kind": "LinkedField",
                            "name": "boundaries",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "RiskAssessmentBoundaryConnectionEdge",
                                "kind": "LinkedField",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "RiskAssessmentBoundary",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      (v2/*: any*/),
                                      (v3/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "parentBoundaryId",
                                        "storageKey": null
                                      },
                                      (v8/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v9/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v10/*: any*/),
                              (v11/*: any*/)
                            ],
                            "storageKey": "boundaries(first:100)"
                          },
                          {
                            "alias": null,
                            "args": (v13/*: any*/),
                            "filters": [],
                            "handle": "connection",
                            "key": "RiskAssessmentScope_boundaries",
                            "kind": "LinkedHandle",
                            "name": "boundaries"
                          },
                          {
                            "alias": null,
                            "args": (v13/*: any*/),
                            "concreteType": "RiskAssessmentProcessConnection",
                            "kind": "LinkedField",
                            "name": "processes",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "RiskAssessmentProcessConnectionEdge",
                                "kind": "LinkedField",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "RiskAssessmentProcess",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      (v2/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "sourceNodeId",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "targetNodeId",
                                        "storageKey": null
                                      },
                                      (v3/*: any*/),
                                      (v8/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v9/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v10/*: any*/),
                              (v11/*: any*/)
                            ],
                            "storageKey": "processes(first:100)"
                          },
                          {
                            "alias": null,
                            "args": (v13/*: any*/),
                            "filters": [],
                            "handle": "connection",
                            "key": "RiskAssessmentScope_processes",
                            "kind": "LinkedHandle",
                            "name": "processes"
                          },
                          {
                            "alias": null,
                            "args": (v13/*: any*/),
                            "concreteType": "RiskAssessmentThreatConnection",
                            "kind": "LinkedField",
                            "name": "threats",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "RiskAssessmentThreatConnectionEdge",
                                "kind": "LinkedField",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "RiskAssessmentThreat",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      (v2/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "processId",
                                        "storageKey": null
                                      },
                                      (v3/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "category",
                                        "storageKey": null
                                      },
                                      (v8/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v9/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v10/*: any*/),
                              (v11/*: any*/)
                            ],
                            "storageKey": "threats(first:100)"
                          },
                          {
                            "alias": null,
                            "args": (v13/*: any*/),
                            "filters": [],
                            "handle": "connection",
                            "key": "RiskAssessmentScope_threats",
                            "kind": "LinkedHandle",
                            "name": "threats"
                          },
                          {
                            "alias": null,
                            "args": (v13/*: any*/),
                            "concreteType": "RiskAssessmentScenarioConnection",
                            "kind": "LinkedField",
                            "name": "scenarios",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "RiskAssessmentScenarioConnectionEdge",
                                "kind": "LinkedField",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "RiskAssessmentScenario",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      (v2/*: any*/),
                                      (v3/*: any*/),
                                      (v4/*: any*/),
                                      {
                                        "alias": null,
                                        "args": (v14/*: any*/),
                                        "concreteType": "RiskConnection",
                                        "kind": "LinkedField",
                                        "name": "risks",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "RiskEdge",
                                            "kind": "LinkedField",
                                            "name": "edges",
                                            "plural": true,
                                            "selections": [
                                              {
                                                "alias": null,
                                                "args": null,
                                                "concreteType": "Risk",
                                                "kind": "LinkedField",
                                                "name": "node",
                                                "plural": false,
                                                "selections": (v15/*: any*/),
                                                "storageKey": null
                                              }
                                            ],
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": "risks(first:10)"
                                      },
                                      {
                                        "alias": null,
                                        "args": (v14/*: any*/),
                                        "concreteType": "RiskAssessmentThreatConnection",
                                        "kind": "LinkedField",
                                        "name": "threats",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "RiskAssessmentThreatConnectionEdge",
                                            "kind": "LinkedField",
                                            "name": "edges",
                                            "plural": true,
                                            "selections": [
                                              {
                                                "alias": null,
                                                "args": null,
                                                "concreteType": "RiskAssessmentThreat",
                                                "kind": "LinkedField",
                                                "name": "node",
                                                "plural": false,
                                                "selections": (v15/*: any*/),
                                                "storageKey": null
                                              }
                                            ],
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": "threats(first:10)"
                                      },
                                      (v8/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v9/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v10/*: any*/),
                              (v11/*: any*/)
                            ],
                            "storageKey": "scenarios(first:100)"
                          },
                          {
                            "alias": null,
                            "args": (v13/*: any*/),
                            "filters": [],
                            "handle": "connection",
                            "key": "RiskAssessmentScope_scenarios",
                            "kind": "LinkedHandle",
                            "name": "scenarios"
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "mermaidChart",
                            "storageKey": null
                          },
                          (v8/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v9/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v10/*: any*/),
                  (v11/*: any*/)
                ],
                "storageKey": "scopes(first:50)"
              },
              {
                "alias": null,
                "args": (v12/*: any*/),
                "filters": [],
                "handle": "connection",
                "key": "RiskAssessmentDetailPage_scopes",
                "kind": "LinkedHandle",
                "name": "scopes"
              }
            ],
            "type": "RiskAssessment",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d187fc0a97ed5ca255824ae7ca0f2e89",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "node",
            "scopes"
          ]
        }
      ]
    },
    "name": "RiskAssessmentDetailPageQuery",
    "operationKind": "query",
    "text": "query RiskAssessmentDetailPageQuery(\n  $riskAssessmentId: ID!\n) {\n  node(id: $riskAssessmentId) {\n    __typename\n    ... on RiskAssessment {\n      id\n      name\n      description\n      createdAt\n      updatedAt\n      canDelete: permission(action: \"core:risk-assessment:delete\")\n      scopes(first: 50) {\n        edges {\n          node {\n            id\n            ...ScopeCardFragment\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment ScopeCardFragment on RiskAssessmentScope {\n  id\n  name\n  nodes(first: 100) {\n    edges {\n      node {\n        id\n        nodeType\n        name\n        boundaryId\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  boundaries(first: 100) {\n    edges {\n      node {\n        id\n        name\n        parentBoundaryId\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  processes(first: 100) {\n    edges {\n      node {\n        id\n        sourceNodeId\n        targetNodeId\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  threats(first: 100) {\n    edges {\n      node {\n        id\n        processId\n        name\n        category\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  scenarios(first: 100) {\n    edges {\n      node {\n        id\n        name\n        description\n        risks(first: 10) {\n          edges {\n            node {\n              id\n              name\n            }\n          }\n        }\n        threats(first: 10) {\n          edges {\n            node {\n              id\n              name\n            }\n          }\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  ...ScopeDiagram_scope\n}\n\nfragment ScopeDiagram_scope on RiskAssessmentScope {\n  id\n  mermaidChart\n  nodes(first: 100) {\n    edges {\n      node {\n        id\n        name\n        nodeType\n        boundaryId\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  boundaries(first: 100) {\n    edges {\n      node {\n        id\n        name\n        parentBoundaryId\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  processes(first: 100) {\n    edges {\n      node {\n        id\n        name\n        sourceNodeId\n        targetNodeId\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  threats(first: 100) {\n    edges {\n      node {\n        id\n        name\n        processId\n        category\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "06d0b8eddcad6167139c5a783ed9d5d9";

export default node;
