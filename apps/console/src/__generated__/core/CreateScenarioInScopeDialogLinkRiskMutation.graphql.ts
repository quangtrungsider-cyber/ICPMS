/**
 * @generated SignedSource<<3023edc0a6008f5410935d120f0c5e37>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type LinkRiskAssessmentScenarioRiskInput = {
  riskAssessmentScenarioId: string;
  riskId: string;
};
export type CreateScenarioInScopeDialogLinkRiskMutation$variables = {
  input: LinkRiskAssessmentScenarioRiskInput;
};
export type CreateScenarioInScopeDialogLinkRiskMutation$data = {
  readonly linkRiskAssessmentScenarioRisk: {
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
    readonly riskAssessmentScenarioEdge: {
      readonly node: {
        readonly id: string;
      };
    };
  };
};
export type CreateScenarioInScopeDialogLinkRiskMutation = {
  response: CreateScenarioInScopeDialogLinkRiskMutation$data;
  variables: CreateScenarioInScopeDialogLinkRiskMutation$variables;
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
    "concreteType": "LinkRiskAssessmentScenarioRiskPayload",
    "kind": "LinkedField",
    "name": "linkRiskAssessmentScenarioRisk",
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
        "concreteType": "RiskAssessmentScenarioConnectionEdge",
        "kind": "LinkedField",
        "name": "riskAssessmentScenarioEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "RiskAssessmentScenario",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v1/*: any*/)
            ],
            "storageKey": null
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
    "name": "CreateScenarioInScopeDialogLinkRiskMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateScenarioInScopeDialogLinkRiskMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "d0a31a558bad4b227c3608949c7e5d84",
    "id": null,
    "metadata": {},
    "name": "CreateScenarioInScopeDialogLinkRiskMutation",
    "operationKind": "mutation",
    "text": "mutation CreateScenarioInScopeDialogLinkRiskMutation(\n  $input: LinkRiskAssessmentScenarioRiskInput!\n) {\n  linkRiskAssessmentScenarioRisk(input: $input) {\n    riskAssessmentScenario {\n      id\n      risks(first: 10) {\n        edges {\n          node {\n            id\n            name\n          }\n        }\n      }\n    }\n    riskAssessmentScenarioEdge {\n      node {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0bd5e8f1313f53fa5cabb567601d32cc";

export default node;
