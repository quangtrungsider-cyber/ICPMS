/**
 * @generated SignedSource<<e251b76916ac692e7baf06a70cd87782>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteThirdPartyContactInput = {
  thirdPartyContactId: string;
};
export type ThirdPartyContactsTabDeleteContactMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteThirdPartyContactInput;
};
export type ThirdPartyContactsTabDeleteContactMutation$data = {
  readonly deleteThirdPartyContact: {
    readonly deletedThirdPartyContactId: string;
  };
};
export type ThirdPartyContactsTabDeleteContactMutation = {
  response: ThirdPartyContactsTabDeleteContactMutation$data;
  variables: ThirdPartyContactsTabDeleteContactMutation$variables;
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
  "name": "deletedThirdPartyContactId",
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
    "name": "ThirdPartyContactsTabDeleteContactMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteThirdPartyContactPayload",
        "kind": "LinkedField",
        "name": "deleteThirdPartyContact",
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
    "name": "ThirdPartyContactsTabDeleteContactMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteThirdPartyContactPayload",
        "kind": "LinkedField",
        "name": "deleteThirdPartyContact",
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
            "name": "deletedThirdPartyContactId",
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
    "cacheID": "bd614d60a17a3f6b29099cb7cabd5b93",
    "id": null,
    "metadata": {},
    "name": "ThirdPartyContactsTabDeleteContactMutation",
    "operationKind": "mutation",
    "text": "mutation ThirdPartyContactsTabDeleteContactMutation(\n  $input: DeleteThirdPartyContactInput!\n) {\n  deleteThirdPartyContact(input: $input) {\n    deletedThirdPartyContactId\n  }\n}\n"
  }
};
})();

(node as any).hash = "43915b3de37e721bcb7655c00a9b092f";

export default node;
