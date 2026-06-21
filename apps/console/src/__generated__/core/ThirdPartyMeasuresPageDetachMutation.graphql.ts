/**
 * @generated SignedSource<<cf7e271db5125c9fe520aff3147abd6b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteMeasureThirdPartyMappingInput = {
  measureId: string;
  thirdPartyId: string;
};
export type ThirdPartyMeasuresPageDetachMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteMeasureThirdPartyMappingInput;
};
export type ThirdPartyMeasuresPageDetachMutation$data = {
  readonly deleteMeasureThirdPartyMapping: {
    readonly deletedMeasureId: string;
  };
};
export type ThirdPartyMeasuresPageDetachMutation = {
  response: ThirdPartyMeasuresPageDetachMutation$data;
  variables: ThirdPartyMeasuresPageDetachMutation$variables;
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
    "name": "ThirdPartyMeasuresPageDetachMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteMeasureThirdPartyMappingPayload",
        "kind": "LinkedField",
        "name": "deleteMeasureThirdPartyMapping",
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
    "name": "ThirdPartyMeasuresPageDetachMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteMeasureThirdPartyMappingPayload",
        "kind": "LinkedField",
        "name": "deleteMeasureThirdPartyMapping",
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
    "cacheID": "7099ba69576074b6fe4f0c92f5bd47bc",
    "id": null,
    "metadata": {},
    "name": "ThirdPartyMeasuresPageDetachMutation",
    "operationKind": "mutation",
    "text": "mutation ThirdPartyMeasuresPageDetachMutation(\n  $input: DeleteMeasureThirdPartyMappingInput!\n) {\n  deleteMeasureThirdPartyMapping(input: $input) {\n    deletedMeasureId\n  }\n}\n"
  }
};
})();

(node as any).hash = "e54e6c6707e0613a97191a642671f054";

export default node;
