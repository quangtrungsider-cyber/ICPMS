/**
 * @generated SignedSource<<c00ab28ae5a02995be7e7515655b88ec>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UpdateCookieCategoryInput = {
  cookieCategoryId: string;
  description?: string | null | undefined;
  gcmConsentTypes?: ReadonlyArray<string> | null | undefined;
  name?: string | null | undefined;
  posthogConsent?: boolean | null | undefined;
  slug?: string | null | undefined;
};
export type CategorySectionUpdateMutation$variables = {
  input: UpdateCookieCategoryInput;
};
export type CategorySectionUpdateMutation$data = {
  readonly updateCookieCategory: {
    readonly cookieBanner: {
      readonly id: string;
      readonly latestVersion: {
        readonly id: string;
        readonly state: string;
        readonly version: number;
      } | null | undefined;
    };
    readonly cookieCategory: {
      readonly description: string;
      readonly gcmConsentTypes: ReadonlyArray<string>;
      readonly id: string;
      readonly name: string;
      readonly posthogConsent: boolean;
      readonly rank: number;
      readonly slug: string;
      readonly updatedAt: string;
    };
  };
};
export type CategorySectionUpdateMutation = {
  response: CategorySectionUpdateMutation$data;
  variables: CategorySectionUpdateMutation$variables;
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
    "concreteType": "UpdateCookieCategoryPayload",
    "kind": "LinkedField",
    "name": "updateCookieCategory",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CookieCategory",
        "kind": "LinkedField",
        "name": "cookieCategory",
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
            "name": "slug",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "rank",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "gcmConsentTypes",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "posthogConsent",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updatedAt",
            "storageKey": null
          }
        ],
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
    "name": "CategorySectionUpdateMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CategorySectionUpdateMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "873c30497fe8a18b1d9a08110afd7ee4",
    "id": null,
    "metadata": {},
    "name": "CategorySectionUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation CategorySectionUpdateMutation(\n  $input: UpdateCookieCategoryInput!\n) {\n  updateCookieCategory(input: $input) {\n    cookieCategory {\n      id\n      name\n      slug\n      description\n      rank\n      gcmConsentTypes\n      posthogConsent\n      updatedAt\n    }\n    cookieBanner {\n      id\n      latestVersion {\n        id\n        version\n        state\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0bcfac9afc6ce611114c0dd16cd28fa8";

export default node;
