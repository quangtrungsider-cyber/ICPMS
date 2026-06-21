/**
 * @generated SignedSource<<f5f2659d768d93a4b9ec0f8fa38fa272>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateRiskAssessmentScopeInput = {
  name: string;
  riskAssessmentId: string;
};
export type CreateScopeDialogMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateRiskAssessmentScopeInput;
};
export type CreateScopeDialogMutation$data = {
  readonly createRiskAssessmentScope: {
    readonly riskAssessmentScopeEdge: {
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"ScopeCardFragment">;
      };
    };
  };
};
export type CreateScopeDialogMutation = {
  response: CreateScopeDialogMutation$data;
  variables: CreateScopeDialogMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v8 = {
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
v9 = {
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
v10 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v11 = [
  (v3/*: any*/),
  (v4/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateScopeDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateRiskAssessmentScopePayload",
        "kind": "LinkedField",
        "name": "createRiskAssessmentScope",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "RiskAssessmentScopeConnectionEdge",
            "kind": "LinkedField",
            "name": "riskAssessmentScopeEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "RiskAssessmentScope",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "ScopeCardFragment"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateScopeDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateRiskAssessmentScopePayload",
        "kind": "LinkedField",
        "name": "createRiskAssessmentScope",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "RiskAssessmentScopeConnectionEdge",
            "kind": "LinkedField",
            "name": "riskAssessmentScopeEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "RiskAssessmentScope",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": (v5/*: any*/),
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
                              (v3/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "nodeType",
                                "storageKey": null
                              },
                              (v4/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "boundaryId",
                                "storageKey": null
                              },
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v7/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v8/*: any*/),
                      (v9/*: any*/)
                    ],
                    "storageKey": "nodes(first:100)"
                  },
                  {
                    "alias": null,
                    "args": (v5/*: any*/),
                    "filters": [],
                    "handle": "connection",
                    "key": "RiskAssessmentScope_nodes",
                    "kind": "LinkedHandle",
                    "name": "nodes"
                  },
                  {
                    "alias": null,
                    "args": (v5/*: any*/),
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
                              (v3/*: any*/),
                              (v4/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "parentBoundaryId",
                                "storageKey": null
                              },
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v7/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v8/*: any*/),
                      (v9/*: any*/)
                    ],
                    "storageKey": "boundaries(first:100)"
                  },
                  {
                    "alias": null,
                    "args": (v5/*: any*/),
                    "filters": [],
                    "handle": "connection",
                    "key": "RiskAssessmentScope_boundaries",
                    "kind": "LinkedHandle",
                    "name": "boundaries"
                  },
                  {
                    "alias": null,
                    "args": (v5/*: any*/),
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
                              (v3/*: any*/),
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
                              (v4/*: any*/),
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v7/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v8/*: any*/),
                      (v9/*: any*/)
                    ],
                    "storageKey": "processes(first:100)"
                  },
                  {
                    "alias": null,
                    "args": (v5/*: any*/),
                    "filters": [],
                    "handle": "connection",
                    "key": "RiskAssessmentScope_processes",
                    "kind": "LinkedHandle",
                    "name": "processes"
                  },
                  {
                    "alias": null,
                    "args": (v5/*: any*/),
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
                              (v3/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "processId",
                                "storageKey": null
                              },
                              (v4/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "category",
                                "storageKey": null
                              },
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v7/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v8/*: any*/),
                      (v9/*: any*/)
                    ],
                    "storageKey": "threats(first:100)"
                  },
                  {
                    "alias": null,
                    "args": (v5/*: any*/),
                    "filters": [],
                    "handle": "connection",
                    "key": "RiskAssessmentScope_threats",
                    "kind": "LinkedHandle",
                    "name": "threats"
                  },
                  {
                    "alias": null,
                    "args": (v5/*: any*/),
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
                              (v3/*: any*/),
                              (v4/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "description",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": (v10/*: any*/),
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
                                        "selections": (v11/*: any*/),
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
                                "args": (v10/*: any*/),
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
                                        "selections": (v11/*: any*/),
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": "threats(first:10)"
                              },
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v7/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v8/*: any*/),
                      (v9/*: any*/)
                    ],
                    "storageKey": "scenarios(first:100)"
                  },
                  {
                    "alias": null,
                    "args": (v5/*: any*/),
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
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "riskAssessmentScopeEdge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3accd83a0f8430d3da1d84ee314a97b8",
    "id": null,
    "metadata": {},
    "name": "CreateScopeDialogMutation",
    "operationKind": "mutation",
    "text": "mutation CreateScopeDialogMutation(\n  $input: CreateRiskAssessmentScopeInput!\n) {\n  createRiskAssessmentScope(input: $input) {\n    riskAssessmentScopeEdge {\n      node {\n        id\n        ...ScopeCardFragment\n      }\n    }\n  }\n}\n\nfragment ScopeCardFragment on RiskAssessmentScope {\n  id\n  name\n  nodes(first: 100) {\n    edges {\n      node {\n        id\n        nodeType\n        name\n        boundaryId\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  boundaries(first: 100) {\n    edges {\n      node {\n        id\n        name\n        parentBoundaryId\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  processes(first: 100) {\n    edges {\n      node {\n        id\n        sourceNodeId\n        targetNodeId\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  threats(first: 100) {\n    edges {\n      node {\n        id\n        processId\n        name\n        category\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  scenarios(first: 100) {\n    edges {\n      node {\n        id\n        name\n        description\n        risks(first: 10) {\n          edges {\n            node {\n              id\n              name\n            }\n          }\n        }\n        threats(first: 10) {\n          edges {\n            node {\n              id\n              name\n            }\n          }\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  ...ScopeDiagram_scope\n}\n\nfragment ScopeDiagram_scope on RiskAssessmentScope {\n  id\n  mermaidChart\n  nodes(first: 100) {\n    edges {\n      node {\n        id\n        name\n        nodeType\n        boundaryId\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  boundaries(first: 100) {\n    edges {\n      node {\n        id\n        name\n        parentBoundaryId\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  processes(first: 100) {\n    edges {\n      node {\n        id\n        name\n        sourceNodeId\n        targetNodeId\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  threats(first: 100) {\n    edges {\n      node {\n        id\n        name\n        processId\n        category\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "27b242706c6c5775e6df1a63536a6602";

export default node;
