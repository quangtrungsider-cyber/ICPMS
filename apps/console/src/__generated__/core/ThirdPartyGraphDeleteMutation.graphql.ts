/**
 * @generated SignedSource<<f09c1fa85721b1ec0d6ad99326490301>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteThirdPartyInput = {
  thirdPartyId: string;
};
export type ThirdPartyGraphDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteThirdPartyInput;
};
export type ThirdPartyGraphDeleteMutation$data = {
  readonly deleteThirdParty: {
    readonly deletedThirdPartyId: string;
  };
};
export type ThirdPartyGraphDeleteMutation = {
  response: ThirdPartyGraphDeleteMutation$data;
  variables: ThirdPartyGraphDeleteMutation$variables;
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
    "name": "ThirdPartyGraphDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteThirdPartyPayload",
        "kind": "LinkedField",
        "name": "deleteThirdParty",
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
    "name": "ThirdPartyGraphDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteThirdPartyPayload",
        "kind": "LinkedField",
        "name": "deleteThirdParty",
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
    "cacheID": "32cc62f3f4f06e4e7db7eded0f84fc8c",
    "id": null,
    "metadata": {},
    "name": "ThirdPartyGraphDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation ThirdPartyGraphDeleteMutation(\n  $input: DeleteThirdPartyInput!\n) {\n  deleteThirdParty(input: $input) {\n    deletedThirdPartyId\n  }\n}\n"
  }
};
})();

(node as any).hash = "b6cf9fcb5d6ac7ee71a6862862462e96";

export default node;
