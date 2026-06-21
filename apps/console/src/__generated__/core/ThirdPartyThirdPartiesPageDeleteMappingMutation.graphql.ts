/**
 * @generated SignedSource<<6507c28a41d1084a3090728e66cec9dd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteThirdPartyThirdPartyMappingInput = {
  childThirdPartyId: string;
  parentThirdPartyId: string;
};
export type ThirdPartyThirdPartiesPageDeleteMappingMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteThirdPartyThirdPartyMappingInput;
};
export type ThirdPartyThirdPartiesPageDeleteMappingMutation$data = {
  readonly deleteThirdPartyThirdPartyMapping: {
    readonly removedThirdPartyId: string;
  };
};
export type ThirdPartyThirdPartiesPageDeleteMappingMutation = {
  response: ThirdPartyThirdPartiesPageDeleteMappingMutation$data;
  variables: ThirdPartyThirdPartiesPageDeleteMappingMutation$variables;
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
  "name": "removedThirdPartyId",
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
    "name": "ThirdPartyThirdPartiesPageDeleteMappingMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteThirdPartyThirdPartyMappingPayload",
        "kind": "LinkedField",
        "name": "deleteThirdPartyThirdPartyMapping",
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
    "name": "ThirdPartyThirdPartiesPageDeleteMappingMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteThirdPartyThirdPartyMappingPayload",
        "kind": "LinkedField",
        "name": "deleteThirdPartyThirdPartyMapping",
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
            "name": "removedThirdPartyId",
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
    "cacheID": "f6d8bc77a08860ad97fdcb3443d29221",
    "id": null,
    "metadata": {},
    "name": "ThirdPartyThirdPartiesPageDeleteMappingMutation",
    "operationKind": "mutation",
    "text": "mutation ThirdPartyThirdPartiesPageDeleteMappingMutation(\n  $input: DeleteThirdPartyThirdPartyMappingInput!\n) {\n  deleteThirdPartyThirdPartyMapping(input: $input) {\n    removedThirdPartyId\n  }\n}\n"
  }
};
})();

(node as any).hash = "705b9e94b3421ede4b314f32ae9ef838";

export default node;
