/**
 * @generated SignedSource<<58e1e48dc41b9e539735dd16a50b7e60>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteRiskAssessmentInput = {
  riskAssessmentId: string;
};
export type RiskAssessmentDetailPageDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteRiskAssessmentInput;
};
export type RiskAssessmentDetailPageDeleteMutation$data = {
  readonly deleteRiskAssessment: {
    readonly deletedRiskAssessmentId: string;
  };
};
export type RiskAssessmentDetailPageDeleteMutation = {
  response: RiskAssessmentDetailPageDeleteMutation$data;
  variables: RiskAssessmentDetailPageDeleteMutation$variables;
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
  "name": "deletedRiskAssessmentId",
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
    "name": "RiskAssessmentDetailPageDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteRiskAssessmentPayload",
        "kind": "LinkedField",
        "name": "deleteRiskAssessment",
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
    "name": "RiskAssessmentDetailPageDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteRiskAssessmentPayload",
        "kind": "LinkedField",
        "name": "deleteRiskAssessment",
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
            "name": "deletedRiskAssessmentId",
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
    "cacheID": "aea3b7a6dabaac9b987622175cb4d9d0",
    "id": null,
    "metadata": {},
    "name": "RiskAssessmentDetailPageDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation RiskAssessmentDetailPageDeleteMutation(\n  $input: DeleteRiskAssessmentInput!\n) {\n  deleteRiskAssessment(input: $input) {\n    deletedRiskAssessmentId\n  }\n}\n"
  }
};
})();

(node as any).hash = "72f148e0808a35a069b25a8dafff5d53";

export default node;
