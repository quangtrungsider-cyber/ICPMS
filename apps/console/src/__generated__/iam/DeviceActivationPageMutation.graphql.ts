/**
 * @generated SignedSource<<c8efcd2479653dcc0c6660c14ef921d1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AuthorizeDeviceInput = {
  userCode: string;
};
export type DeviceActivationPageMutation$variables = {
  input: AuthorizeDeviceInput;
};
export type DeviceActivationPageMutation$data = {
  readonly authorizeDevice: {
    readonly consentId: string | null | undefined;
    readonly success: boolean;
  } | null | undefined;
};
export type DeviceActivationPageMutation = {
  response: DeviceActivationPageMutation$data;
  variables: DeviceActivationPageMutation$variables;
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
    "concreteType": "AuthorizeDevicePayload",
    "kind": "LinkedField",
    "name": "authorizeDevice",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "consentId",
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
    "name": "DeviceActivationPageMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeviceActivationPageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8b20f4e24bd8f3d5dcae2ff1efbe0742",
    "id": null,
    "metadata": {},
    "name": "DeviceActivationPageMutation",
    "operationKind": "mutation",
    "text": "mutation DeviceActivationPageMutation(\n  $input: AuthorizeDeviceInput!\n) {\n  authorizeDevice(input: $input) {\n    success\n    consentId\n  }\n}\n"
  }
};
})();

(node as any).hash = "3bdc035761ea73ea779847189f467df1";

export default node;
