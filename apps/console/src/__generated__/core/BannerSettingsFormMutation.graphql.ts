/**
 * @generated SignedSource<<c19b1641e872b528450adc91c02fa0f5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UpdateCookieBannerInput = {
  consentExpiryDays?: number | null | undefined;
  cookieBannerId: string;
  cookiePolicyUrl?: string | null | undefined;
  defaultLanguage?: string | null | undefined;
  name?: string | null | undefined;
  privacyPolicyUrl?: string | null | undefined;
};
export type BannerSettingsFormMutation$variables = {
  input: UpdateCookieBannerInput;
};
export type BannerSettingsFormMutation$data = {
  readonly updateCookieBanner: {
    readonly cookieBanner: {
      readonly consentExpiryDays: number;
      readonly cookiePolicyUrl: string;
      readonly defaultLanguage: string;
      readonly id: string;
      readonly latestVersion: {
        readonly id: string;
        readonly state: string;
        readonly version: number;
      } | null | undefined;
      readonly name: string;
      readonly privacyPolicyUrl: string | null | undefined;
    };
  };
};
export type BannerSettingsFormMutation = {
  response: BannerSettingsFormMutation$data;
  variables: BannerSettingsFormMutation$variables;
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
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateCookieBannerPayload",
    "kind": "LinkedField",
    "name": "updateCookieBanner",
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
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cookiePolicyUrl",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "privacyPolicyUrl",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "consentExpiryDays",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "defaultLanguage",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "CookieBannerVersion",
            "kind": "LinkedField",
            "name": "latestVersion",
            "plural": false,
            "selections": [
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
    "name": "BannerSettingsFormMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BannerSettingsFormMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "d0af6be9a3734896e65c28b5cb94f8f4",
    "id": null,
    "metadata": {},
    "name": "BannerSettingsFormMutation",
    "operationKind": "mutation",
    "text": "mutation BannerSettingsFormMutation(\n  $input: UpdateCookieBannerInput!\n) {\n  updateCookieBanner(input: $input) {\n    cookieBanner {\n      id\n      name\n      cookiePolicyUrl\n      privacyPolicyUrl\n      consentExpiryDays\n      defaultLanguage\n      latestVersion {\n        id\n        version\n        state\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d85a364b421048e52dae0009a927add7";

export default node;
