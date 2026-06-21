/**
 * @generated SignedSource<<fe7886662359c93fc0828df0094680bc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UpsertCookieBannerTranslationInput = {
  cookieBannerId: string;
  language: string;
  translations: string;
};
export type TranslationEditorMutation$variables = {
  input: UpsertCookieBannerTranslationInput;
};
export type TranslationEditorMutation$data = {
  readonly upsertCookieBannerTranslation: {
    readonly cookieBanner: {
      readonly id: string;
      readonly latestVersion: {
        readonly id: string;
        readonly state: string;
        readonly version: number;
      } | null | undefined;
      readonly translations: ReadonlyArray<{
        readonly id: string;
        readonly language: string;
        readonly translations: string;
      }>;
    };
  };
};
export type TranslationEditorMutation = {
  response: TranslationEditorMutation$data;
  variables: TranslationEditorMutation$variables;
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
    "concreteType": "UpsertCookieBannerTranslationPayload",
    "kind": "LinkedField",
    "name": "upsertCookieBannerTranslation",
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
            "concreteType": "CookieBannerTranslation",
            "kind": "LinkedField",
            "name": "translations",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "language",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "translations",
                "storageKey": null
              }
            ],
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
    "name": "TranslationEditorMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TranslationEditorMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "7639924a1b7cea47b3648708827c6cba",
    "id": null,
    "metadata": {},
    "name": "TranslationEditorMutation",
    "operationKind": "mutation",
    "text": "mutation TranslationEditorMutation(\n  $input: UpsertCookieBannerTranslationInput!\n) {\n  upsertCookieBannerTranslation(input: $input) {\n    cookieBanner {\n      id\n      translations {\n        id\n        language\n        translations\n      }\n      latestVersion {\n        id\n        version\n        state\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "81f3c99f977cf8bc0862c84c92909ca9";

export default node;
