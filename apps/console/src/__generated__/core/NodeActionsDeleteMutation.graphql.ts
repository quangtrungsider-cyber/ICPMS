/**
 * @generated SignedSource<<930305cc49fc288d19765282cfb7863b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteRiskAssessmentNodeInput = {
  riskAssessmentNodeId: string;
};
export type NodeActionsDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteRiskAssessmentNodeInput;
};
export type NodeActionsDeleteMutation$data = {
  readonly deleteRiskAssessmentNode: {
    readonly deletedRiskAssessmentNodeId: string;
  };
};
export type NodeActionsDeleteMutation = {
  response: NodeActionsDeleteMutation$data;
  variables: NodeActionsDeleteMutation$variables;
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
  "name": "deletedRiskAssessmentNodeId",
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
    "name": "NodeActionsDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteRiskAssessmentNodePayload",
        "kind": "LinkedField",
        "name": "deleteRiskAssessmentNode",
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
    "name": "NodeActionsDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteRiskAssessmentNodePayload",
        "kind": "LinkedField",
        "name": "deleteRiskAssessmentNode",
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
            "name": "deletedRiskAssessmentNodeId",
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
    "cacheID": "baa92671c47ea0ea04ca598af99630a9",
    "id": null,
    "metadata": {},
    "name": "NodeActionsDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation NodeActionsDeleteMutation(\n  $input: DeleteRiskAssessmentNodeInput!\n) {\n  deleteRiskAssessmentNode(input: $input) {\n    deletedRiskAssessmentNodeId\n  }\n}\n"
  }
};
})();

(node as any).hash = "c4d40b61151dbd4a77622d826114b648";

export default node;
