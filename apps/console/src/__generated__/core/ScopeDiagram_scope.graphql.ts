/**
 * @generated SignedSource<<51066eb34360701fb401f1ec6858c1f8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type RiskAssessmentNodeType = "ASSET" | "DATA" | "ENTITY";
import { FragmentRefs } from "relay-runtime";
export type ScopeDiagram_scope$data = {
  readonly boundaries: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
        readonly parentBoundaryId: string | null | undefined;
      };
    }>;
  } | null | undefined;
  readonly id: string;
  readonly mermaidChart: string;
  readonly nodes: {
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
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
        readonly sourceNodeId: string;
        readonly targetNodeId: string;
      };
    }>;
  } | null | undefined;
  readonly threats: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly category: string;
        readonly id: string;
        readonly name: string;
        readonly processId: string;
      };
    }>;
  } | null | undefined;
  readonly " $fragmentType": "ScopeDiagram_scope";
};
export type ScopeDiagram_scope$key = {
  readonly " $data"?: ScopeDiagram_scope$data;
  readonly " $fragmentSpreads": FragmentRefs<"ScopeDiagram_scope">;
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
};
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
      }
    ]
  },
  "name": "ScopeDiagram_scope",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "mermaidChart",
      "storageKey": null
    },
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
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "nodeType",
                  "storageKey": null
                },
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
        (v4/*: any*/)
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
        (v4/*: any*/)
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
                (v1/*: any*/),
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
                (v2/*: any*/)
              ],
              "storageKey": null
            },
            (v3/*: any*/)
          ],
          "storageKey": null
        },
        (v4/*: any*/)
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
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "processId",
                  "storageKey": null
                },
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
        (v4/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "RiskAssessmentScope",
  "abstractKey": null
};
})();

(node as any).hash = "c4f973c1849de8cc6cea08801b40829b";

export default node;
