/**
 * @generated SignedSource<<351ff4ef5bc55af75571925103737cb2>>
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
export type RiskScenariosPageLinkMutation$variables = {
  connections: ReadonlyArray<string>;
  input: LinkRiskAssessmentScenarioRiskInput;
};
export type RiskScenariosPageLinkMutation$data = {
  readonly linkRiskAssessmentScenarioRisk: {
    readonly riskAssessmentScenarioEdge: {
      readonly node: {
        readonly description: string | null | undefined;
        readonly id: string;
        readonly name: string;
        readonly scope: {
          readonly riskAssessmentId: string;
        } | null | undefined;
      };
    };
  };
};
export type RiskScenariosPageLinkMutation = {
  response: RiskScenariosPageLinkMutation$data;
  variables: RiskScenariosPageLinkMutation$variables;
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
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "riskAssessmentId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RiskScenariosPageLinkMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "LinkRiskAssessmentScenarioRiskPayload",
        "kind": "LinkedField",
        "name": "linkRiskAssessmentScenarioRisk",
        "plural": false,
        "selections": [
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
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "RiskAssessmentScope",
                    "kind": "LinkedField",
                    "name": "scope",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/)
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
    "name": "RiskScenariosPageLinkMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "LinkRiskAssessmentScenarioRiskPayload",
        "kind": "LinkedField",
        "name": "linkRiskAssessmentScenarioRisk",
        "plural": false,
        "selections": [
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
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "RiskAssessmentScope",
                    "kind": "LinkedField",
                    "name": "scope",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v3/*: any*/)
                    ],
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
            "name": "riskAssessmentScenarioEdge",
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
    "cacheID": "fece640edffc49fc3a6612d3504b6b85",
    "id": null,
    "metadata": {},
    "name": "RiskScenariosPageLinkMutation",
    "operationKind": "mutation",
    "text": "mutation RiskScenariosPageLinkMutation(\n  $input: LinkRiskAssessmentScenarioRiskInput!\n) {\n  linkRiskAssessmentScenarioRisk(input: $input) {\n    riskAssessmentScenarioEdge {\n      node {\n        id\n        name\n        description\n        scope {\n          riskAssessmentId\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c655b943eba384e35884ecabca111ee3";

export default node;
