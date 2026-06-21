/**
 * @generated SignedSource<<1d1a3cdf1afdf78fc39178cbb7a027de>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeviceActivationPageQuery$variables = Record<PropertyKey, never>;
export type DeviceActivationPageQuery$data = {
  readonly viewer: {
    readonly __typename: "Identity";
  } | null | undefined;
};
export type DeviceActivationPageQuery = {
  response: DeviceActivationPageQuery$data;
  variables: DeviceActivationPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DeviceActivationPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Identity",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DeviceActivationPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Identity",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "32e5544a7becbf0b42692bae34d9c179",
    "id": null,
    "metadata": {},
    "name": "DeviceActivationPageQuery",
    "operationKind": "query",
    "text": "query DeviceActivationPageQuery {\n  viewer {\n    __typename\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "5590a92731cf527477c504b75b6057b5";

export default node;
