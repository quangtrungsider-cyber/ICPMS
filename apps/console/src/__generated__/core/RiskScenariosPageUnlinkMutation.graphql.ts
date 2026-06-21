/**
 * @generated SignedSource<<a577564cf845032a3d719d68452d4d22>>
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
export type RiskScenariosPageUnlinkMutation$variables = {
  connections: ReadonlyArray<string>;
  input: UnlinkRiskAssessmentScenarioRiskInput;
};
export type RiskScenariosPageUnlinkMutation$data = {
  readonly unlinkRiskAssessmentScenarioRisk: {
    readonly deletedRiskAssessmentScenarioId: string;
  };
};
export type RiskScenariosPageUnlinkMutation = {
  response: RiskScenariosPageUnlinkMutation$data;
  variables: RiskScenariosPageUnlinkMutation$variables;
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
  "name": "deletedRiskAssessmentScenarioId",
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
    "name": "RiskScenariosPageUnlinkMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "UnlinkRiskAssessmentScenarioRiskPayload",
        "kind": "LinkedField",
        "name": "unlinkRiskAssessmentScenarioRisk",
        "plural": false,
        "selections": [
          (v3/*: any*/)
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
    "name": "RiskScenariosPageUnlinkMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "UnlinkRiskAssessmentScenarioRiskPayload",
        "kind": "LinkedField",
        "name": "unlinkRiskAssessmentScenarioRisk",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "deletedRiskAssessmentScenarioId",
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
    "cacheID": "ce30f242ba4c1dc4acd5188e402da9df",
    "id": null,
    "metadata": {},
    "name": "RiskScenariosPageUnlinkMutation",
    "operationKind": "mutation",
    "text": "mutation RiskScenariosPageUnlinkMutation(\n  $input: UnlinkRiskAssessmentScenarioRiskInput!\n) {\n  unlinkRiskAssessmentScenarioRisk(input: $input) {\n    deletedRiskAssessmentScenarioId\n  }\n}\n"
  }
};
})();

(node as any).hash = "f96e9aaa785cb356b770ad86c14cee4e";

export default node;
