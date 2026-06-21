/**
 * @generated SignedSource<<283937658b7136c480969f5d9d3272d3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CookieBannerSettingsPageQuery$variables = {
  cookieBannerId: string;
};
export type CookieBannerSettingsPageQuery$data = {
  readonly node: {
    readonly __typename: "CookieBanner";
    readonly " $fragmentSpreads": FragmentRefs<"BannerSettingsForm_cookieBanner">;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type CookieBannerSettingsPageQuery = {
  response: CookieBannerSettingsPageQuery$data;
  variables: CookieBannerSettingsPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cookieBannerId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "cookieBannerId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CookieBannerSettingsPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "BannerSettingsForm_cookieBanner"
              }
            ],
            "type": "CookieBanner",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CookieBannerSettingsPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
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
                "name": "origin",
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
              }
            ],
            "type": "CookieBanner",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "834d5dcacccae76943a5934cae88c696",
    "id": null,
    "metadata": {},
    "name": "CookieBannerSettingsPageQuery",
    "operationKind": "query",
    "text": "query CookieBannerSettingsPageQuery(\n  $cookieBannerId: ID!\n) {\n  node(id: $cookieBannerId) {\n    __typename\n    ... on CookieBanner {\n      ...BannerSettingsForm_cookieBanner\n    }\n    id\n  }\n}\n\nfragment BannerSettingsForm_cookieBanner on CookieBanner {\n  id\n  name\n  origin\n  cookiePolicyUrl\n  privacyPolicyUrl\n  consentExpiryDays\n  defaultLanguage\n}\n"
  }
};
})();

(node as any).hash = "7d6cda2143b455ac2372551d4004117e";

export default node;
