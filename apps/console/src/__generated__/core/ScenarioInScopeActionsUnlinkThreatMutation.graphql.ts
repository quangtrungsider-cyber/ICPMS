/**
 * @generated SignedSource<<7c44c7adad0795cc1df1e11c57f91057>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UnlinkRiskAssessmentScenarioThreatInput = {
  riskAssessmentScenarioId: string;
  threatId: string;
};
export type ScenarioInScopeActionsUnlinkThreatMutation$variables = {
  input: UnlinkRiskAssessmentScenarioThreatInput;
};
export type ScenarioInScopeActionsUnlinkThreatMutation$data = {
  readonly unlinkRiskAssessmentScenarioThreat: {
    readonly riskAssessmentScenario: {
      readonly id: string;
      readonly threats: {
        readonly edges: ReadonlyArray<{
          readonly node: {
            readonly id: string;
            readonly name: string;
          };
        }>;
      } | null | undefined;
    };
  };
};
export type ScenarioInScopeActionsUnlinkThreatMutation = {
  response: ScenarioInScopeActionsUnlinkThreatMutation$data;
  variables: ScenarioInScopeActionsUnlinkThreatMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UnlinkRiskAssessmentScenarioThreatPayload",
    "kind": "LinkedField",
    "name": "unlinkRiskAssessmentScenarioThreat",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "RiskAssessmentScenario",
        "kind": "LinkedField",
        "name": "riskAssessmentScenario",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10
              }
            ],
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
                      (v1/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "threats(first:10)"
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ScenarioInScopeActionsUnlinkThreatMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ScenarioInScopeActionsUnlinkThreatMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "b12367cc7a50e45899fdaac21dddcc96",
    "id": null,
    "metadata": {},
    "name": "ScenarioInScopeActionsUnlinkThreatMutation",
    "operationKind": "mutation",
    "text": "mutation ScenarioInScopeActionsUnlinkThreatMutation(\n  $input: UnlinkRiskAssessmentScenarioThreatInput!\n) {\n  unlinkRiskAssessmentScenarioThreat(input: $input) {\n    riskAssessmentScenario {\n      id\n      threats(first: 10) {\n        edges {\n          node {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "943e7b2d48af56111ad378639c738205";

export default node;
