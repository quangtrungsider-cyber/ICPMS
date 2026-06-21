/**
 * @generated SignedSource<<dd48bedad75a3f6f5f35c3ebfa753b62>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteRiskAssessmentBoundaryInput = {
  riskAssessmentBoundaryId: string;
};
export type BoundaryActionsDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteRiskAssessmentBoundaryInput;
};
export type BoundaryActionsDeleteMutation$data = {
  readonly deleteRiskAssessmentBoundary: {
    readonly deletedRiskAssessmentBoundaryId: string;
  };
};
export type BoundaryActionsDeleteMutation = {
  response: BoundaryActionsDeleteMutation$data;
  variables: BoundaryActionsDeleteMutation$variables;
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
  "name": "deletedRiskAssessmentBoundaryId",
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
    "name": "BoundaryActionsDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteRiskAssessmentBoundaryPayload",
        "kind": "LinkedField",
        "name": "deleteRiskAssessmentBoundary",
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
    "name": "BoundaryActionsDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteRiskAssessmentBoundaryPayload",
        "kind": "LinkedField",
        "name": "deleteRiskAssessmentBoundary",
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
            "name": "deletedRiskAssessmentBoundaryId",
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
    "cacheID": "0ad4fa0643a49261d28d2f5377a352eb",
    "id": null,
    "metadata": {},
    "name": "BoundaryActionsDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation BoundaryActionsDeleteMutation(\n  $input: DeleteRiskAssessmentBoundaryInput!\n) {\n  deleteRiskAssessmentBoundary(input: $input) {\n    deletedRiskAssessmentBoundaryId\n  }\n}\n"
  }
};
})();

(node as any).hash = "be01738ea5c13cc0770ebd8c17513b1c";

export default node;
