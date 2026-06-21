/**
 * @generated SignedSource<<8f0c7a6a471a8f75112f1a9029dba7af>>
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
export type CreateScenarioInScopeDialogLinkThreatMutation$variables = {
  input: LinkRiskAssessmentScenarioThreatInput;
};
export type CreateScenarioInScopeDialogLinkThreatMutation$data = {
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
export type CreateScenarioInScopeDialogLinkThreatMutation = {
  response: CreateScenarioInScopeDialogLinkThreatMutation$data;
  variables: CreateScenarioInScopeDialogLinkThreatMutation$variables;
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
    "name": "CreateScenarioInScopeDialogLinkThreatMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateScenarioInScopeDialogLinkThreatMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "6dc5aa23974a373af2083b8067fae1cc",
    "id": null,
    "metadata": {},
    "name": "CreateScenarioInScopeDialogLinkThreatMutation",
    "operationKind": "mutation",
    "text": "mutation CreateScenarioInScopeDialogLinkThreatMutation(\n  $input: LinkRiskAssessmentScenarioThreatInput!\n) {\n  linkRiskAssessmentScenarioThreat(input: $input) {\n    riskAssessmentScenario {\n      id\n      threats(first: 10) {\n        edges {\n          node {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b662a67767469ace0d117b4c16d8e154";

export default node;
