/**
 * @generated SignedSource<<ed39c196dddcb9dff784d46c39c131cb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CookieBannerState = "ACTIVE" | "INACTIVE";
export type DeactivateCookieBannerInput = {
  cookieBannerId: string;
};
export type CookieBannerConfigLayoutDeactivateMutation$variables = {
  input: DeactivateCookieBannerInput;
};
export type CookieBannerConfigLayoutDeactivateMutation$data = {
  readonly deactivateCookieBanner: {
    readonly cookieBanner: {
      readonly id: string;
      readonly state: CookieBannerState;
    };
  };
};
export type CookieBannerConfigLayoutDeactivateMutation = {
  response: CookieBannerConfigLayoutDeactivateMutation$data;
  variables: CookieBannerConfigLayoutDeactivateMutation$variables;
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
    "concreteType": "DeactivateCookieBannerPayload",
    "kind": "LinkedField",
    "name": "deactivateCookieBanner",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CookieBanner",
        "kind": "LinkedField",
        "name": "cookieBanner",
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
            "name": "state",
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
    "name": "CookieBannerConfigLayoutDeactivateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CookieBannerConfigLayoutDeactivateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "42c8bca95ed9a8b643aaf75d024f7f76",
    "id": null,
    "metadata": {},
    "name": "CookieBannerConfigLayoutDeactivateMutation",
    "operationKind": "mutation",
    "text": "mutation CookieBannerConfigLayoutDeactivateMutation(\n  $input: DeactivateCookieBannerInput!\n) {\n  deactivateCookieBanner(input: $input) {\n    cookieBanner {\n      id\n      state\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c7a81a0da83e9fd9bf268fc030bba260";

export default node;
