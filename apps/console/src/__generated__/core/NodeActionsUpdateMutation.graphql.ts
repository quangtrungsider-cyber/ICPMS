/**
 * @generated SignedSource<<0b931cc87ac136268786394cbe28f14e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type RiskAssessmentNodeType = "ASSET" | "DATA" | "ENTITY";
export type UpdateRiskAssessmentNodeInput = {
  boundaryId?: string | null | undefined;
  id: string;
  name?: string | null | undefined;
  nodeType?: RiskAssessmentNodeType | null | undefined;
};
export type NodeActionsUpdateMutation$variables = {
  input: UpdateRiskAssessmentNodeInput;
};
export type NodeActionsUpdateMutation$data = {
  readonly updateRiskAssessmentNode: {
    readonly riskAssessmentNode: {
      readonly boundaryId: string | null | undefined;
      readonly id: string;
      readonly name: string;
      readonly nodeType: RiskAssessmentNodeType;
    };
  };
};
export type NodeActionsUpdateMutation = {
  response: NodeActionsUpdateMutation$data;
  variables: NodeActionsUpdateMutation$variables;
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
    "concreteType": "UpdateRiskAssessmentNodePayload",
    "kind": "LinkedField",
    "name": "updateRiskAssessmentNode",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "RiskAssessmentNode",
        "kind": "LinkedField",
        "name": "riskAssessmentNode",
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
            "name": "nodeType",
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
            "name": "boundaryId",
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
    "name": "NodeActionsUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NodeActionsUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5ee37ade04267dab5f4ebe2f1141cf1b",
    "id": null,
    "metadata": {},
    "name": "NodeActionsUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation NodeActionsUpdateMutation(\n  $input: UpdateRiskAssessmentNodeInput!\n) {\n  updateRiskAssessmentNode(input: $input) {\n    riskAssessmentNode {\n      id\n      nodeType\n      name\n      boundaryId\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3f03491e442f95000483a44fcd2c0ac7";

export default node;
