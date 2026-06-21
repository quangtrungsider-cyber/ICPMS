/**
 * @generated SignedSource<<9e88aa4340ce97b52171143cedd51d4e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteRiskAssessmentScopeInput = {
  riskAssessmentScopeId: string;
};
export type ScopeActionsDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteRiskAssessmentScopeInput;
};
export type ScopeActionsDeleteMutation$data = {
  readonly deleteRiskAssessmentScope: {
    readonly deletedRiskAssessmentScopeId: string;
  };
};
export type ScopeActionsDeleteMutation = {
  response: ScopeActionsDeleteMutation$data;
  variables: ScopeActionsDeleteMutation$variables;
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
  "name": "deletedRiskAssessmentScopeId",
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
    "name": "ScopeActionsDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteRiskAssessmentScopePayload",
        "kind": "LinkedField",
        "name": "deleteRiskAssessmentScope",
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
    "name": "ScopeActionsDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteRiskAssessmentScopePayload",
        "kind": "LinkedField",
        "name": "deleteRiskAssessmentScope",
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
            "name": "deletedRiskAssessmentScopeId",
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
    "cacheID": "2a6b8f4f0a5a51b4a437898067036cd7",
    "id": null,
    "metadata": {},
    "name": "ScopeActionsDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation ScopeActionsDeleteMutation(\n  $input: DeleteRiskAssessmentScopeInput!\n) {\n  deleteRiskAssessmentScope(input: $input) {\n    deletedRiskAssessmentScopeId\n  }\n}\n"
  }
};
})();

(node as any).hash = "59dd6f52250349ec88487af0f508abfa";

export default node;
