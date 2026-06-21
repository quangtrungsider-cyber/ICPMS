/**
 * @generated SignedSource<<465dacaa64f318eb3e4d15dc01a0a0b2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UpdateRiskAssessmentProcessInput = {
  id: string;
  name?: string | null | undefined;
  sourceNodeId?: string | null | undefined;
  targetNodeId?: string | null | undefined;
};
export type ProcessActionsUpdateMutation$variables = {
  input: UpdateRiskAssessmentProcessInput;
};
export type ProcessActionsUpdateMutation$data = {
  readonly updateRiskAssessmentProcess: {
    readonly riskAssessmentProcess: {
      readonly id: string;
      readonly name: string;
      readonly sourceNodeId: string;
      readonly targetNodeId: string;
    };
  };
};
export type ProcessActionsUpdateMutation = {
  response: ProcessActionsUpdateMutation$data;
  variables: ProcessActionsUpdateMutation$variables;
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
    "concreteType": "UpdateRiskAssessmentProcessPayload",
    "kind": "LinkedField",
    "name": "updateRiskAssessmentProcess",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "RiskAssessmentProcess",
        "kind": "LinkedField",
        "name": "riskAssessmentProcess",
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
            "name": "sourceNodeId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "targetNodeId",
            "storageKey": null
          },
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProcessActionsUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProcessActionsUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "66716973e62cd6f9c511f35ac6d9ccce",
    "id": null,
    "metadata": {},
    "name": "ProcessActionsUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation ProcessActionsUpdateMutation(\n  $input: UpdateRiskAssessmentProcessInput!\n) {\n  updateRiskAssessmentProcess(input: $input) {\n    riskAssessmentProcess {\n      id\n      sourceNodeId\n      targetNodeId\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "cdb51389a565cb3125d23a23750250f6";

export default node;
