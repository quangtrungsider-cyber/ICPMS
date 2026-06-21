/**
 * @generated SignedSource<<64ec58c3a72449cb23d8aa2980f74a7b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type PublishCookieBannerVersionInput = {
  cookieBannerId: string;
};
export type CookieBannerConfigLayoutPublishMutation$variables = {
  input: PublishCookieBannerVersionInput;
};
export type CookieBannerConfigLayoutPublishMutation$data = {
  readonly publishCookieBannerVersion: {
    readonly cookieBanner: {
      readonly id: string;
      readonly latestVersion: {
        readonly id: string;
        readonly state: string;
        readonly version: number;
      } | null | undefined;
    };
    readonly cookieBannerVersion: {
      readonly id: string;
      readonly state: string;
      readonly version: number;
    };
  };
};
export type CookieBannerConfigLayoutPublishMutation = {
  response: CookieBannerConfigLayoutPublishMutation$data;
  variables: CookieBannerConfigLayoutPublishMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "version",
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
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "PublishCookieBannerVersionPayload",
    "kind": "LinkedField",
    "name": "publishCookieBannerVersion",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CookieBannerVersion",
        "kind": "LinkedField",
        "name": "cookieBannerVersion",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "CookieBanner",
        "kind": "LinkedField",
        "name": "cookieBanner",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "CookieBannerVersion",
            "kind": "LinkedField",
            "name": "latestVersion",
            "plural": false,
            "selections": (v2/*: any*/),
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
    "name": "CookieBannerConfigLayoutPublishMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CookieBannerConfigLayoutPublishMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "9d68075dbf3542f5c02a819d159675b3",
    "id": null,
    "metadata": {},
    "name": "CookieBannerConfigLayoutPublishMutation",
    "operationKind": "mutation",
    "text": "mutation CookieBannerConfigLayoutPublishMutation(\n  $input: PublishCookieBannerVersionInput!\n) {\n  publishCookieBannerVersion(input: $input) {\n    cookieBannerVersion {\n      id\n      version\n      state\n    }\n    cookieBanner {\n      id\n      latestVersion {\n        id\n        version\n        state\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9e0a78916b6e71fb0bfb1c42e0f4bfc3";

export default node;
