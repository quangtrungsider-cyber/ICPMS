/**
 * @generated SignedSource<<7de0b5f1b63564130d39422a32bdcda7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type RiskAssessmentNodeType = "ASSET" | "DATA" | "ENTITY";
import { FragmentRefs } from "relay-runtime";
export type ScopeCardFragment$data = {
  readonly boundaries: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
        readonly parentBoundaryId: string | null | undefined;
      };
    }>;
  } | null | undefined;
  readonly id: string;
  readonly name: string;
  readonly nodes: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly boundaryId: string | null | undefined;
        readonly id: string;
        readonly name: string;
        readonly nodeType: RiskAssessmentNodeType;
      };
    }>;
  } | null | undefined;
  readonly processes: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
        readonly sourceNodeId: string;
        readonly targetNodeId: string;
      };
    }>;
  } | null | undefined;
  readonly scenarios: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly description: string | null | undefined;
        readonly id: string;
        readonly name: string;
        readonly risks: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly id: string;
              readonly name: string;
            };
          }>;
        } | null | undefined;
        readonly threats: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly id: string;
              readonly name: string;
            };
          }>;
        } | null | undefined;
      };
    }>;
  } | null | undefined;
  readonly threats: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly category: string;
        readonly id: string;
        readonly name: string;
        readonly processId: string;
      };
    }>;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ScopeDiagram_scope">;
  readonly " $fragmentType": "ScopeCardFragment";
};
export type ScopeCardFragment$key = {
  readonly " $data"?: ScopeCardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ScopeCardFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
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
  "name": "cursor",
  "storageKey": null
},
v4 = {
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
v5 = {
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
v6 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v7 = [
  (v0/*: any*/),
  (v1/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "nodes"
        ]
      },
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "boundaries"
        ]
      },
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "processes"
        ]
      },
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "threats"
        ]
      },
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "scenarios"
        ]
      }
    ]
  },
  "name": "ScopeCardFragment",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": "nodes",
      "args": null,
      "concreteType": "RiskAssessmentNodeConnection",
      "kind": "LinkedField",
      "name": "__RiskAssessmentScope_nodes_connection",
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
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "nodeType",
                  "storageKey": null
                },
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "boundaryId",
                  "storageKey": null
                },
                (v2/*: any*/)
              ],
              "storageKey": null
            },
            (v3/*: any*/)
          ],
          "storageKey": null
        },
        (v4/*: any*/),
        (v5/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": "boundaries",
      "args": null,
      "concreteType": "RiskAssessmentBoundaryConnection",
      "kind": "LinkedField",
      "name": "__RiskAssessmentScope_boundaries_connection",
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
                (v0/*: any*/),
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "parentBoundaryId",
                  "storageKey": null
                },
                (v2/*: any*/)
              ],
              "storageKey": null
            },
            (v3/*: any*/)
          ],
          "storageKey": null
        },
        (v4/*: any*/),
        (v5/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": "processes",
      "args": null,
      "concreteType": "RiskAssessmentProcessConnection",
      "kind": "LinkedField",
      "name": "__RiskAssessmentScope_processes_connection",
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
                (v0/*: any*/),
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
                (v1/*: any*/),
                (v2/*: any*/)
              ],
              "storageKey": null
            },
            (v3/*: any*/)
          ],
          "storageKey": null
        },
        (v4/*: any*/),
        (v5/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": "threats",
      "args": null,
      "concreteType": "RiskAssessmentThreatConnection",
      "kind": "LinkedField",
      "name": "__RiskAssessmentScope_threats_connection",
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
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "processId",
                  "storageKey": null
                },
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "category",
                  "storageKey": null
                },
                (v2/*: any*/)
              ],
              "storageKey": null
            },
            (v3/*: any*/)
          ],
          "storageKey": null
        },
        (v4/*: any*/),
        (v5/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": "scenarios",
      "args": null,
      "concreteType": "RiskAssessmentScenarioConnection",
      "kind": "LinkedField",
      "name": "__RiskAssessmentScope_scenarios_connection",
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
                (v0/*: any*/),
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "description",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": (v6/*: any*/),
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
                          "selections": (v7/*: any*/),
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
                  "args": (v6/*: any*/),
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
                          "selections": (v7/*: any*/),
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": "threats(first:10)"
                },
                (v2/*: any*/)
              ],
              "storageKey": null
            },
            (v3/*: any*/)
          ],
          "storageKey": null
        },
        (v4/*: any*/),
        (v5/*: any*/)
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScopeDiagram_scope"
    }
  ],
  "type": "RiskAssessmentScope",
  "abstractKey": null
};
})();

(node as any).hash = "3d5f694403a99e94da65faeee8cb732f";

export default node;
