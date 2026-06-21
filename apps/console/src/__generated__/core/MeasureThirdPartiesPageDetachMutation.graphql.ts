/**
 * @generated SignedSource<<f9810db6948f665bc4e4380ff3ca63b5>>
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
export type MeasureThirdPartiesPageDetachMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteMeasureThirdPartyMappingInput;
};
export type MeasureThirdPartiesPageDetachMutation$data = {
  readonly deleteMeasureThirdPartyMapping: {
    readonly deletedThirdPartyId: string;
  };
};
export type MeasureThirdPartiesPageDetachMutation = {
  response: MeasureThirdPartiesPageDetachMutation$data;
  variables: MeasureThirdPartiesPageDetachMutation$variables;
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
  "name": "deletedThirdPartyId",
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
    "name": "MeasureThirdPartiesPageDetachMutation",
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
    "name": "MeasureThirdPartiesPageDetachMutation",
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
            "name": "deletedThirdPartyId",
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
    "cacheID": "977fd99a5f6452b25511180c9874d437",
    "id": null,
    "metadata": {},
    "name": "MeasureThirdPartiesPageDetachMutation",
    "operationKind": "mutation",
    "text": "mutation MeasureThirdPartiesPageDetachMutation(\n  $input: DeleteMeasureThirdPartyMappingInput!\n) {\n  deleteMeasureThirdPartyMapping(input: $input) {\n    deletedThirdPartyId\n  }\n}\n"
  }
};
})();

(node as any).hash = "68828bad791c554d369170d1e660e25d";

export default node;
