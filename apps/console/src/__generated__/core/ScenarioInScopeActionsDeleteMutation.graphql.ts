/**
 * @generated SignedSource<<2517824bb6e758723663b5c2714ccc9b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteRiskAssessmentScenarioInput = {
  riskAssessmentScenarioId: string;
};
export type ScenarioInScopeActionsDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteRiskAssessmentScenarioInput;
};
export type ScenarioInScopeActionsDeleteMutation$data = {
  readonly deleteRiskAssessmentScenario: {
    readonly deletedRiskAssessmentScenarioId: string;
  };
};
export type ScenarioInScopeActionsDeleteMutation = {
  response: ScenarioInScopeActionsDeleteMutation$data;
  variables: ScenarioInScopeActionsDeleteMutation$variables;
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
    "name": "ScenarioInScopeActionsDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteRiskAssessmentScenarioPayload",
        "kind": "LinkedField",
        "name": "deleteRiskAssessmentScenario",
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
    "name": "ScenarioInScopeActionsDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteRiskAssessmentScenarioPayload",
        "kind": "LinkedField",
        "name": "deleteRiskAssessmentScenario",
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
    "cacheID": "33dd6922673f4b4d66a58bcd608a2b5c",
    "id": null,
    "metadata": {},
    "name": "ScenarioInScopeActionsDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation ScenarioInScopeActionsDeleteMutation(\n  $input: DeleteRiskAssessmentScenarioInput!\n) {\n  deleteRiskAssessmentScenario(input: $input) {\n    deletedRiskAssessmentScenarioId\n  }\n}\n"
  }
};
})();

(node as any).hash = "a48253ec55960c164a9cb88ca438f32f";

export default node;
