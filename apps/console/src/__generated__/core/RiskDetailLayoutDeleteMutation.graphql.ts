/**
 * @generated SignedSource<<c6543e4ab44dec312b9ca578e09de64b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteRiskInput = {
  riskId: string;
};
export type RiskDetailLayoutDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteRiskInput;
};
export type RiskDetailLayoutDeleteMutation$data = {
  readonly deleteRisk: {
    readonly deletedRiskId: string;
  };
};
export type RiskDetailLayoutDeleteMutation = {
  response: RiskDetailLayoutDeleteMutation$data;
  variables: RiskDetailLayoutDeleteMutation$variables;
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
  "name": "deletedRiskId",
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
    "name": "RiskDetailLayoutDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteRiskPayload",
        "kind": "LinkedField",
        "name": "deleteRisk",
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
    "name": "RiskDetailLayoutDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteRiskPayload",
        "kind": "LinkedField",
        "name": "deleteRisk",
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
            "name": "deletedRiskId",
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
    "cacheID": "5385aa39448367d8cbdd3971e0d5d5a4",
    "id": null,
    "metadata": {},
    "name": "RiskDetailLayoutDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation RiskDetailLayoutDeleteMutation(\n  $input: DeleteRiskInput!\n) {\n  deleteRisk(input: $input) {\n    deletedRiskId\n  }\n}\n"
  }
};
})();

(node as any).hash = "e0f2ee3f3f457756611d971c7f80e50b";

export default node;
