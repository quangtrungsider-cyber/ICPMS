/**
 * @generated SignedSource<<6d61d6a3f5c0f45203b156804b609875>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CookieBannerState = "ACTIVE" | "INACTIVE";
export type ActivateCookieBannerInput = {
  cookieBannerId: string;
};
export type CookieBannerConfigLayoutActivateMutation$variables = {
  input: ActivateCookieBannerInput;
};
export type CookieBannerConfigLayoutActivateMutation$data = {
  readonly activateCookieBanner: {
    readonly cookieBanner: {
      readonly id: string;
      readonly state: CookieBannerState;
    };
  };
};
export type CookieBannerConfigLayoutActivateMutation = {
  response: CookieBannerConfigLayoutActivateMutation$data;
  variables: CookieBannerConfigLayoutActivateMutation$variables;
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
    "concreteType": "ActivateCookieBannerPayload",
    "kind": "LinkedField",
    "name": "activateCookieBanner",
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
    "name": "CookieBannerConfigLayoutActivateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CookieBannerConfigLayoutActivateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "24c746aad95bb4cebe070d3eb13d3972",
    "id": null,
    "metadata": {},
    "name": "CookieBannerConfigLayoutActivateMutation",
    "operationKind": "mutation",
    "text": "mutation CookieBannerConfigLayoutActivateMutation(\n  $input: ActivateCookieBannerInput!\n) {\n  activateCookieBanner(input: $input) {\n    cookieBanner {\n      id\n      state\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f5abba034df53dbb3c68fe498d8c0357";

export default node;
