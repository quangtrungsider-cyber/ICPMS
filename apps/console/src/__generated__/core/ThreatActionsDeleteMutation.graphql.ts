/**
 * @generated SignedSource<<4c18b59babf22b13254dbb3245db30cf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteRiskAssessmentThreatInput = {
  riskAssessmentThreatId: string;
};
export type ThreatActionsDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteRiskAssessmentThreatInput;
};
export type ThreatActionsDeleteMutation$data = {
  readonly deleteRiskAssessmentThreat: {
    readonly deletedRiskAssessmentThreatId: string;
  };
};
export type ThreatActionsDeleteMutation = {
  response: ThreatActionsDeleteMutation$data;
  variables: ThreatActionsDeleteMutation$variables;
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
  "name": "deletedRiskAssessmentThreatId",
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
    "name": "ThreatActionsDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteRiskAssessmentThreatPayload",
        "kind": "LinkedField",
        "name": "deleteRiskAssessmentThreat",
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
    "name": "ThreatActionsDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteRiskAssessmentThreatPayload",
        "kind": "LinkedField",
        "name": "deleteRiskAssessmentThreat",
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
            "name": "deletedRiskAssessmentThreatId",
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
    "cacheID": "be18993da746746479c7908a93b27cf5",
    "id": null,
    "metadata": {},
    "name": "ThreatActionsDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation ThreatActionsDeleteMutation(\n  $input: DeleteRiskAssessmentThreatInput!\n) {\n  deleteRiskAssessmentThreat(input: $input) {\n    deletedRiskAssessmentThreatId\n  }\n}\n"
  }
};
})();

(node as any).hash = "b7f13486fd0b828c73ae3774b99ede71";

export default node;
