/**
 * @generated SignedSource<<b543862e7204787542f2c3df102cca28>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteRiskMeasureMappingInput = {
  measureId: string;
  riskId: string;
};
export type RiskMeasuresPageDetachMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteRiskMeasureMappingInput;
};
export type RiskMeasuresPageDetachMutation$data = {
  readonly deleteRiskMeasureMapping: {
    readonly deletedMeasureId: string;
  };
};
export type RiskMeasuresPageDetachMutation = {
  response: RiskMeasuresPageDetachMutation$data;
  variables: RiskMeasuresPageDetachMutation$variables;
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
  "name": "deletedMeasureId",
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
    "name": "RiskMeasuresPageDetachMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteRiskMeasureMappingPayload",
        "kind": "LinkedField",
        "name": "deleteRiskMeasureMapping",
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
    "name": "RiskMeasuresPageDetachMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteRiskMeasureMappingPayload",
        "kind": "LinkedField",
        "name": "deleteRiskMeasureMapping",
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
            "name": "deletedMeasureId",
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
    "cacheID": "30a85d7cac50ce6543f392b0ed4b69a0",
    "id": null,
    "metadata": {},
    "name": "RiskMeasuresPageDetachMutation",
    "operationKind": "mutation",
    "text": "mutation RiskMeasuresPageDetachMutation(\n  $input: DeleteRiskMeasureMappingInput!\n) {\n  deleteRiskMeasureMapping(input: $input) {\n    deletedMeasureId\n  }\n}\n"
  }
};
})();

(node as any).hash = "4bc78232471cc3a80e6b516a71b5f52e";

export default node;
