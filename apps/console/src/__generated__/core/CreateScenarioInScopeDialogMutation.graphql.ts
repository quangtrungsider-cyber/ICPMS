/**
 * @generated SignedSource<<21c5d77ed5c3ea7e948c8d9130e1107e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CreateRiskAssessmentScenarioInput = {
  description?: string | null | undefined;
  name: string;
  riskAssessmentScopeId: string;
};
export type CreateScenarioInScopeDialogMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateRiskAssessmentScenarioInput;
};
export type CreateScenarioInScopeDialogMutation$data = {
  readonly createRiskAssessmentScenario: {
    readonly riskAssessmentScenarioEdge: {
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
    };
  };
};
export type CreateScenarioInScopeDialogMutation = {
  response: CreateScenarioInScopeDialogMutation$data;
  variables: CreateScenarioInScopeDialogMutation$variables;
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
    "value": 10
  }
],
v6 = [
  (v3/*: any*/),
  (v4/*: any*/)
],
v7 = {
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "description",
          "storageKey": null
        },
        {
          "alias": null,
          "args": (v5/*: any*/),
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
                  "selections": (v6/*: any*/),
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
                  "selections": (v6/*: any*/),
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
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateScenarioInScopeDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateRiskAssessmentScenarioPayload",
        "kind": "LinkedField",
        "name": "createRiskAssessmentScenario",
        "plural": false,
        "selections": [
          (v7/*: any*/)
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
    "name": "CreateScenarioInScopeDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateRiskAssessmentScenarioPayload",
        "kind": "LinkedField",
        "name": "createRiskAssessmentScenario",
        "plural": false,
        "selections": [
          (v7/*: any*/),
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
    "cacheID": "b2eccfed9423677a0799aaaa8c1235a0",
    "id": null,
    "metadata": {},
    "name": "CreateScenarioInScopeDialogMutation",
    "operationKind": "mutation",
    "text": "mutation CreateScenarioInScopeDialogMutation(\n  $input: CreateRiskAssessmentScenarioInput!\n) {\n  createRiskAssessmentScenario(input: $input) {\n    riskAssessmentScenarioEdge {\n      node {\n        id\n        name\n        description\n        risks(first: 10) {\n          edges {\n            node {\n              id\n              name\n            }\n          }\n        }\n        threats(first: 10) {\n          edges {\n            node {\n              id\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "34241c1f31b5967e37462c62da640d46";

export default node;
