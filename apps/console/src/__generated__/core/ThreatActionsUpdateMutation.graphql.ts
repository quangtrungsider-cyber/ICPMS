/**
 * @generated SignedSource<<a7256ef6e6ce1c35fc1128ddcc8f91e9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UpdateRiskAssessmentThreatInput = {
  category?: string | null | undefined;
  id: string;
  name?: string | null | undefined;
  processId?: string | null | undefined;
};
export type ThreatActionsUpdateMutation$variables = {
  input: UpdateRiskAssessmentThreatInput;
};
export type ThreatActionsUpdateMutation$data = {
  readonly updateRiskAssessmentThreat: {
    readonly riskAssessmentThreat: {
      readonly category: string;
      readonly id: string;
      readonly name: string;
      readonly processId: string;
    };
  };
};
export type ThreatActionsUpdateMutation = {
  response: ThreatActionsUpdateMutation$data;
  variables: ThreatActionsUpdateMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateRiskAssessmentThreatPayload",
    "kind": "LinkedField",
    "name": "updateRiskAssessmentThreat",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "RiskAssessmentThreat",
        "kind": "LinkedField",
        "name": "riskAssessmentThreat",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "processId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "category",
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
    "name": "ThreatActionsUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ThreatActionsUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "95c3a72651c9d4d8ca1a37f148ca869c",
    "id": null,
    "metadata": {},
    "name": "ThreatActionsUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation ThreatActionsUpdateMutation(\n  $input: UpdateRiskAssessmentThreatInput!\n) {\n  updateRiskAssessmentThreat(input: $input) {\n    riskAssessmentThreat {\n      id\n      processId\n      name\n      category\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4c0af1969d31b3c6e1607f913266b1c2";

export default node;
