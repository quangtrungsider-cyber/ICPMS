/**
 * @generated SignedSource<<86131a4e27c6bb4c299fa1a10d18b005>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UnlinkRiskAssessmentScenarioRiskInput = {
  riskAssessmentScenarioId: string;
  riskId: string;
};
export type ScenarioInScopeActionsUnlinkRiskMutation$variables = {
  input: UnlinkRiskAssessmentScenarioRiskInput;
};
export type ScenarioInScopeActionsUnlinkRiskMutation$data = {
  readonly unlinkRiskAssessmentScenarioRisk: {
    readonly deletedRiskAssessmentScenarioId: string;
    readonly riskAssessmentScenario: {
      readonly id: string;
      readonly risks: {
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
export type ScenarioInScopeActionsUnlinkRiskMutation = {
  response: ScenarioInScopeActionsUnlinkRiskMutation$data;
  variables: ScenarioInScopeActionsUnlinkRiskMutation$variables;
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
    "concreteType": "UnlinkRiskAssessmentScenarioRiskPayload",
    "kind": "LinkedField",
    "name": "unlinkRiskAssessmentScenarioRisk",
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
            "storageKey": "risks(first:10)"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedRiskAssessmentScenarioId",
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
    "name": "ScenarioInScopeActionsUnlinkRiskMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ScenarioInScopeActionsUnlinkRiskMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "fa9c181bbddc7a30655f8ceba30c803f",
    "id": null,
    "metadata": {},
    "name": "ScenarioInScopeActionsUnlinkRiskMutation",
    "operationKind": "mutation",
    "text": "mutation ScenarioInScopeActionsUnlinkRiskMutation(\n  $input: UnlinkRiskAssessmentScenarioRiskInput!\n) {\n  unlinkRiskAssessmentScenarioRisk(input: $input) {\n    riskAssessmentScenario {\n      id\n      risks(first: 10) {\n        edges {\n          node {\n            id\n            name\n          }\n        }\n      }\n    }\n    deletedRiskAssessmentScenarioId\n  }\n}\n"
  }
};
})();

(node as any).hash = "f537480af93de25e15ef218ad5aa6975";

export default node;
