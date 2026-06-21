/**
 * @generated SignedSource<<4d2801779ce6d6b390c1601cafa69a34>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteRiskAssessmentProcessInput = {
  riskAssessmentProcessId: string;
};
export type ProcessActionsDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteRiskAssessmentProcessInput;
};
export type ProcessActionsDeleteMutation$data = {
  readonly deleteRiskAssessmentProcess: {
    readonly deletedRiskAssessmentProcessId: string;
  };
};
export type ProcessActionsDeleteMutation = {
  response: ProcessActionsDeleteMutation$data;
  variables: ProcessActionsDeleteMutation$variables;
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
  "name": "deletedRiskAssessmentProcessId",
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
    "name": "ProcessActionsDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteRiskAssessmentProcessPayload",
        "kind": "LinkedField",
        "name": "deleteRiskAssessmentProcess",
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
    "name": "ProcessActionsDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteRiskAssessmentProcessPayload",
        "kind": "LinkedField",
        "name": "deleteRiskAssessmentProcess",
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
            "name": "deletedRiskAssessmentProcessId",
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
    "cacheID": "677989406913767dcd4fedf8cca34f77",
    "id": null,
    "metadata": {},
    "name": "ProcessActionsDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation ProcessActionsDeleteMutation(\n  $input: DeleteRiskAssessmentProcessInput!\n) {\n  deleteRiskAssessmentProcess(input: $input) {\n    deletedRiskAssessmentProcessId\n  }\n}\n"
  }
};
})();

(node as any).hash = "1e8600cc997ee57a159a7b263e1afdba";

export default node;
