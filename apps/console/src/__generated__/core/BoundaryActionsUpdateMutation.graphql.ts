/**
 * @generated SignedSource<<fe248a1b3ccb9126195131197699ef42>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UpdateRiskAssessmentBoundaryInput = {
  id: string;
  name?: string | null | undefined;
  parentBoundaryId?: string | null | undefined;
};
export type BoundaryActionsUpdateMutation$variables = {
  input: UpdateRiskAssessmentBoundaryInput;
};
export type BoundaryActionsUpdateMutation$data = {
  readonly updateRiskAssessmentBoundary: {
    readonly riskAssessmentBoundary: {
      readonly id: string;
      readonly name: string;
      readonly parentBoundaryId: string | null | undefined;
    };
  };
};
export type BoundaryActionsUpdateMutation = {
  response: BoundaryActionsUpdateMutation$data;
  variables: BoundaryActionsUpdateMutation$variables;
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
    "concreteType": "UpdateRiskAssessmentBoundaryPayload",
    "kind": "LinkedField",
    "name": "updateRiskAssessmentBoundary",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "RiskAssessmentBoundary",
        "kind": "LinkedField",
        "name": "riskAssessmentBoundary",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "parentBoundaryId",
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
    "name": "BoundaryActionsUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BoundaryActionsUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7c4562043b1e513e383b230aaad5f2a2",
    "id": null,
    "metadata": {},
    "name": "BoundaryActionsUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation BoundaryActionsUpdateMutation(\n  $input: UpdateRiskAssessmentBoundaryInput!\n) {\n  updateRiskAssessmentBoundary(input: $input) {\n    riskAssessmentBoundary {\n      id\n      name\n      parentBoundaryId\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4e6e86d484307f7ab7bcd0f4dab8f52b";

export default node;
