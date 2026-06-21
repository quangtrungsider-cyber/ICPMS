/**
 * @generated SignedSource<<eda053c094ef71f65bcf7a4b57ee2cd2>>
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
export type RiskRowDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteRiskInput;
};
export type RiskRowDeleteMutation$data = {
  readonly deleteRisk: {
    readonly deletedRiskId: string;
  };
};
export type RiskRowDeleteMutation = {
  response: RiskRowDeleteMutation$data;
  variables: RiskRowDeleteMutation$variables;
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
    "name": "RiskRowDeleteMutation",
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
    "name": "RiskRowDeleteMutation",
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
    "cacheID": "4caefeb66840c2b4b97accd98c4296c0",
    "id": null,
    "metadata": {},
    "name": "RiskRowDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation RiskRowDeleteMutation(\n  $input: DeleteRiskInput!\n) {\n  deleteRisk(input: $input) {\n    deletedRiskId\n  }\n}\n"
  }
};
})();

(node as any).hash = "af7626d644f2fb177e2c5da2abd97105";

export default node;
