/**
 * @generated SignedSource<<2fdadcd52a5e069bb0bf9391a3bd360e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteRiskObligationMappingInput = {
  obligationId: string;
  riskId: string;
};
export type RiskObligationsPageDetachMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteRiskObligationMappingInput;
};
export type RiskObligationsPageDetachMutation$data = {
  readonly deleteRiskObligationMapping: {
    readonly deletedObligationId: string;
  };
};
export type RiskObligationsPageDetachMutation = {
  response: RiskObligationsPageDetachMutation$data;
  variables: RiskObligationsPageDetachMutation$variables;
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
  "name": "deletedObligationId",
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
    "name": "RiskObligationsPageDetachMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteRiskObligationMappingPayload",
        "kind": "LinkedField",
        "name": "deleteRiskObligationMapping",
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
    "name": "RiskObligationsPageDetachMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteRiskObligationMappingPayload",
        "kind": "LinkedField",
        "name": "deleteRiskObligationMapping",
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
            "name": "deletedObligationId",
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
    "cacheID": "ef8e7730bfc2492f3814fd089e7486f8",
    "id": null,
    "metadata": {},
    "name": "RiskObligationsPageDetachMutation",
    "operationKind": "mutation",
    "text": "mutation RiskObligationsPageDetachMutation(\n  $input: DeleteRiskObligationMappingInput!\n) {\n  deleteRiskObligationMapping(input: $input) {\n    deletedObligationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "6045ba23eaab2c6cfd92c628139d40a5";

export default node;
