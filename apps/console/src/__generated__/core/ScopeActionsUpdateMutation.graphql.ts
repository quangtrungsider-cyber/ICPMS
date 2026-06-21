/**
 * @generated SignedSource<<eb837944466c69c033721d2ec406bcd2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UpdateRiskAssessmentScopeInput = {
  id: string;
  name?: string | null | undefined;
};
export type ScopeActionsUpdateMutation$variables = {
  input: UpdateRiskAssessmentScopeInput;
};
export type ScopeActionsUpdateMutation$data = {
  readonly updateRiskAssessmentScope: {
    readonly riskAssessmentScope: {
      readonly id: string;
      readonly name: string;
    };
  };
};
export type ScopeActionsUpdateMutation = {
  response: ScopeActionsUpdateMutation$data;
  variables: ScopeActionsUpdateMutation$variables;
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
    "concreteType": "UpdateRiskAssessmentScopePayload",
    "kind": "LinkedField",
    "name": "updateRiskAssessmentScope",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "RiskAssessmentScope",
        "kind": "LinkedField",
        "name": "riskAssessmentScope",
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
    "name": "ScopeActionsUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ScopeActionsUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "02b8aec268c963eb7a3fdfb7e5247e3d",
    "id": null,
    "metadata": {},
    "name": "ScopeActionsUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation ScopeActionsUpdateMutation(\n  $input: UpdateRiskAssessmentScopeInput!\n) {\n  updateRiskAssessmentScope(input: $input) {\n    riskAssessmentScope {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f484690af5a0f813327e81c1495a8708";

export default node;
