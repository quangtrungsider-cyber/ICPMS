/**
 * @generated SignedSource<<04f24a7738515c8a4808471b2ae463e4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RiskTreatment = "ACCEPTED" | "AVOIDED" | "MITIGATED" | "TRANSFERRED";
export type RiskDetailLayoutQuery$variables = {
  riskId: string;
};
export type RiskDetailLayoutQuery$data = {
  readonly node: {
    readonly __typename: "Risk";
    readonly canDelete: boolean;
    readonly canUpdate: boolean;
    readonly controlsInfo: {
      readonly totalCount: number;
    };
    readonly description: string | null | undefined;
    readonly documentsInfo: {
      readonly totalCount: number;
    };
    readonly inherentRiskScore: number;
    readonly measuresInfo: {
      readonly totalCount: number;
    };
    readonly name: string;
    readonly note: string;
    readonly obligationsInfo: {
      readonly totalCount: number;
    };
    readonly owner: {
      readonly fullName: string;
    } | null | undefined;
    readonly residualRiskScore: number;
    readonly scenariosInfo: {
      readonly totalCount: number | null | undefined;
    };
    readonly treatment: RiskTreatment;
    readonly " $fragmentSpreads": FragmentRefs<"FormRiskDialog_risk">;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type RiskDetailLayoutQuery = {
  response: RiskDetailLayoutQuery$data;
  variables: RiskDetailLayoutQuery$variables;
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
  "name": "treatment",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "note",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "inherentRiskScore",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "residualRiskScore",
  "storageKey": null
},
v10 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 0
  }
],
v11 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
],
v12 = {
  "alias": "measuresInfo",
  "args": (v10/*: any*/),
  "concreteType": "MeasureConnection",
  "kind": "LinkedField",
  "name": "measures",
  "plural": false,
  "selections": (v11/*: any*/),
  "storageKey": "measures(first:0)"
},
v13 = {
  "alias": "documentsInfo",
  "args": (v10/*: any*/),
  "concreteType": "DocumentConnection",
  "kind": "LinkedField",
  "name": "documents",
  "plural": false,
  "selections": (v11/*: any*/),
  "storageKey": "documents(first:0)"
},
v14 = {
  "alias": "controlsInfo",
  "args": (v10/*: any*/),
  "concreteType": "ControlConnection",
  "kind": "LinkedField",
  "name": "controls",
  "plural": false,
  "selections": (v11/*: any*/),
  "storageKey": "controls(first:0)"
},
v15 = {
  "alias": "obligationsInfo",
  "args": (v10/*: any*/),
  "concreteType": "ObligationConnection",
  "kind": "LinkedField",
  "name": "obligations",
  "plural": false,
  "selections": (v11/*: any*/),
  "storageKey": "obligations(first:0)"
},
v16 = {
  "alias": "scenariosInfo",
  "args": (v10/*: any*/),
  "concreteType": "RiskAssessmentScenarioConnection",
  "kind": "LinkedField",
  "name": "scenarios",
  "plural": false,
  "selections": (v11/*: any*/),
  "storageKey": "scenarios(first:0)"
},
v17 = {
  "alias": "canUpdate",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:risk:update"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:risk:update\")"
},
v18 = {
  "alias": "canDelete",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:risk:delete"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:risk:delete\")"
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RiskDetailLayoutQuery",
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
                "alias": null,
                "args": null,
                "concreteType": "Profile",
                "kind": "LinkedField",
                "name": "owner",
                "plural": false,
                "selections": [
                  (v6/*: any*/)
                ],
                "storageKey": null
              },
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/),
              (v17/*: any*/),
              (v18/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "FormRiskDialog_risk"
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
    "name": "RiskDetailLayoutQuery",
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
          (v19/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Profile",
                "kind": "LinkedField",
                "name": "owner",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  (v19/*: any*/)
                ],
                "storageKey": null
              },
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/),
              (v17/*: any*/),
              (v18/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "category",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "inherentLikelihood",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "inherentImpact",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "residualLikelihood",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "residualImpact",
                "storageKey": null
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
    "cacheID": "346adc0caacea5171e92c509661ff91f",
    "id": null,
    "metadata": {},
    "name": "RiskDetailLayoutQuery",
    "operationKind": "query",
    "text": "query RiskDetailLayoutQuery(\n  $riskId: ID!\n) {\n  node(id: $riskId) {\n    __typename\n    ... on Risk {\n      name\n      description\n      treatment\n      owner {\n        fullName\n        id\n      }\n      note\n      inherentRiskScore\n      residualRiskScore\n      measuresInfo: measures(first: 0) {\n        totalCount\n      }\n      documentsInfo: documents(first: 0) {\n        totalCount\n      }\n      controlsInfo: controls(first: 0) {\n        totalCount\n      }\n      obligationsInfo: obligations(first: 0) {\n        totalCount\n      }\n      scenariosInfo: scenarios(first: 0) {\n        totalCount\n      }\n      canUpdate: permission(action: \"core:risk:update\")\n      canDelete: permission(action: \"core:risk:delete\")\n      ...FormRiskDialog_risk\n    }\n    id\n  }\n}\n\nfragment FormRiskDialog_risk on Risk {\n  id\n  name\n  category\n  description\n  treatment\n  inherentLikelihood\n  inherentImpact\n  residualLikelihood\n  residualImpact\n  inherentRiskScore\n  residualRiskScore\n  note\n  owner {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "94720e38829efa0f4a0dd00ca1f71b26";

export default node;
