/**
 * @generated SignedSource<<c545e0ff5b19dfc556778b2ae7ed3891>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SignUpPageQuery$variables = Record<PropertyKey, never>;
export type SignUpPageQuery$data = {
  readonly signUpEnabled: boolean;
};
export type SignUpPageQuery = {
  response: SignUpPageQuery$data;
  variables: SignUpPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "signUpEnabled",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SignUpPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SignUpPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "bd2635295f1c0bf62812028a879a8f71",
    "id": null,
    "metadata": {},
    "name": "SignUpPageQuery",
    "operationKind": "query",
    "text": "query SignUpPageQuery {\n  signUpEnabled\n}\n"
  }
};
})();

(node as any).hash = "82950c8a54e6b8363e341b100d676c9d";

export default node;
