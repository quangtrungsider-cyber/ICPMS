/**
 * @generated SignedSource<<dbecd2f48e28f23977365a3a61461907>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UpdateSCIMBridgeInput = {
  excludedUserNames: ReadonlyArray<string>;
  organizationId: string;
  scimBridgeId: string;
};
export type Microsoft365ConnectorUpdateSCIMBridgeMutation$variables = {
  input: UpdateSCIMBridgeInput;
};
export type Microsoft365ConnectorUpdateSCIMBridgeMutation$data = {
  readonly updateSCIMBridge: {
    readonly scimBridge: {
      readonly excludedUserNames: ReadonlyArray<string>;
      readonly id: string;
    };
  } | null | undefined;
};
export type Microsoft365ConnectorUpdateSCIMBridgeMutation = {
  response: Microsoft365ConnectorUpdateSCIMBridgeMutation$data;
  variables: Microsoft365ConnectorUpdateSCIMBridgeMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateSCIMBridgePayload",
    "kind": "LinkedField",
    "name": "updateSCIMBridge",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SCIMBridge",
        "kind": "LinkedField",
        "name": "scimBridge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "excludedUserNames",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Microsoft365ConnectorUpdateSCIMBridgeMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "Microsoft365ConnectorUpdateSCIMBridgeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7e75247d2b7990689cc85c9cabc15381",
    "id": null,
    "metadata": {},
    "name": "Microsoft365ConnectorUpdateSCIMBridgeMutation",
    "operationKind": "mutation",
    "text": "mutation Microsoft365ConnectorUpdateSCIMBridgeMutation(\n  $input: UpdateSCIMBridgeInput!\n) {\n  updateSCIMBridge(input: $input) {\n    scimBridge {\n      id\n      excludedUserNames\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "853272d2483242980968abc3c99df785";

export default node;
