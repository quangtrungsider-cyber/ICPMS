/**
 * @generated SignedSource<<a4c66e0493273eb904c42f1edb5f0b6e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UpdateRiskAssessmentScenarioInput = {
  description?: string | null | undefined;
  id: string;
  name?: string | null | undefined;
};
export type ScenarioInScopeActionsUpdateMutation$variables = {
  input: UpdateRiskAssessmentScenarioInput;
};
export type ScenarioInScopeActionsUpdateMutation$data = {
  readonly updateRiskAssessmentScenario: {
    readonly riskAssessmentScenario: {
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
  };
};
export type ScenarioInScopeActionsUpdateMutation = {
  response: ScenarioInScopeActionsUpdateMutation$data;
  variables: ScenarioInScopeActionsUpdateMutation$variables;
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v4 = [
  (v1/*: any*/),
  (v2/*: any*/)
],
v5 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateRiskAssessmentScenarioPayload",
    "kind": "LinkedField",
    "name": "updateRiskAssessmentScenario",
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
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v3/*: any*/),
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
                    "selections": (v4/*: any*/),
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
            "args": (v3/*: any*/),
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
                    "selections": (v4/*: any*/),
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
    "name": "ScenarioInScopeActionsUpdateMutation",
    "selections": (v5/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ScenarioInScopeActionsUpdateMutation",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "2c8e1c46d1b210aa4ae67ca477a33c65",
    "id": null,
    "metadata": {},
    "name": "ScenarioInScopeActionsUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation ScenarioInScopeActionsUpdateMutation(\n  $input: UpdateRiskAssessmentScenarioInput!\n) {\n  updateRiskAssessmentScenario(input: $input) {\n    riskAssessmentScenario {\n      id\n      name\n      description\n      risks(first: 10) {\n        edges {\n          node {\n            id\n            name\n          }\n        }\n      }\n      threats(first: 10) {\n        edges {\n          node {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "aec203640777a128c466879ab11caf37";

export default node;
