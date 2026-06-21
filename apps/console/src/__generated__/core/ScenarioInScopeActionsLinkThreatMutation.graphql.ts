/**
 * @generated SignedSource<<7446a576a23b47bea999622bb8214d28>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type LinkRiskAssessmentScenarioThreatInput = {
  riskAssessmentScenarioId: string;
  threatId: string;
};
export type ScenarioInScopeActionsLinkThreatMutation$variables = {
  input: LinkRiskAssessmentScenarioThreatInput;
};
export type ScenarioInScopeActionsLinkThreatMutation$data = {
  readonly linkRiskAssessmentScenarioThreat: {
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
export type ScenarioInScopeActionsLinkThreatMutation = {
  response: ScenarioInScopeActionsLinkThreatMutation$data;
  variables: ScenarioInScopeActionsLinkThreatMutation$variables;
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
    "concreteType": "LinkRiskAssessmentScenarioThreatPayload",
    "kind": "LinkedField",
    "name": "linkRiskAssessmentScenarioThreat",
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
    "name": "ScenarioInScopeActionsLinkThreatMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ScenarioInScopeActionsLinkThreatMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "d8899aaeb85de454e62bf7a25f7d85ba",
    "id": null,
    "metadata": {},
    "name": "ScenarioInScopeActionsLinkThreatMutation",
    "operationKind": "mutation",
    "text": "mutation ScenarioInScopeActionsLinkThreatMutation(\n  $input: LinkRiskAssessmentScenarioThreatInput!\n) {\n  linkRiskAssessmentScenarioThreat(input: $input) {\n    riskAssessmentScenario {\n      id\n      threats(first: 10) {\n        edges {\n          node {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "cb8cdd3f567a9cf3434d0a1b5c8b68c1";

export default node;
