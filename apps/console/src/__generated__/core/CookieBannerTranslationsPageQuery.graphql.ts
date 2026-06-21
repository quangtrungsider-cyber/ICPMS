/**
 * @generated SignedSource<<34155064acfdeb83b33ac3ad4783d291>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CookieCategoryKind = "NECESSARY" | "NORMAL" | "UNCATEGORISED";
export type CookieBannerTranslationsPageQuery$variables = {
  cookieBannerId: string;
};
export type CookieBannerTranslationsPageQuery$data = {
  readonly node: {
    readonly __typename: "CookieBanner";
    readonly categories: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly description: string;
          readonly id: string;
          readonly kind: CookieCategoryKind;
          readonly name: string;
          readonly slug: string;
        };
      }>;
    };
    readonly defaultLanguage: string;
    readonly id: string;
    readonly showBranding: boolean;
    readonly translations: ReadonlyArray<{
      readonly id: string;
      readonly language: string;
      readonly translations: string;
    }>;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type CookieBannerTranslationsPageQuery = {
  response: CookieBannerTranslationsPageQuery$data;
  variables: CookieBannerTranslationsPageQuery$variables;
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
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "defaultLanguage",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "showBranding",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "CookieBannerTranslation",
  "kind": "LinkedField",
  "name": "translations",
  "plural": true,
  "selections": [
    (v3/*: any*/),
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
v7 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "filter",
      "value": {
        "excludeKind": "UNCATEGORISED"
      }
    },
    {
      "kind": "Literal",
      "name": "first",
      "value": 50
    },
    {
      "kind": "Literal",
      "name": "orderBy",
      "value": {
        "direction": "ASC",
        "field": "RANK"
      }
    }
  ],
  "concreteType": "CookieCategoryConnection",
  "kind": "LinkedField",
  "name": "categories",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CookieCategoryEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CookieCategory",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v3/*: any*/),
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
              "name": "kind",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "categories(filter:{\"excludeKind\":\"UNCATEGORISED\"},first:50,orderBy:{\"direction\":\"ASC\",\"field\":\"RANK\"})"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CookieBannerTranslationsPageQuery",
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
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "kind": "RequiredField",
                "field": (v7/*: any*/),
                "action": "THROW"
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
    "name": "CookieBannerTranslationsPageQuery",
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
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/)
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
    "cacheID": "4989fff188f8e206a5c91ef0a0a385f9",
    "id": null,
    "metadata": {},
    "name": "CookieBannerTranslationsPageQuery",
    "operationKind": "query",
    "text": "query CookieBannerTranslationsPageQuery(\n  $cookieBannerId: ID!\n) {\n  node(id: $cookieBannerId) {\n    __typename\n    ... on CookieBanner {\n      id\n      defaultLanguage\n      showBranding\n      translations {\n        id\n        language\n        translations\n      }\n      categories(first: 50, orderBy: {field: RANK, direction: ASC}, filter: {excludeKind: UNCATEGORISED}) {\n        edges {\n          node {\n            id\n            name\n            slug\n            description\n            kind\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "d2852e7ca010a733a3c0ee59f195ea8f";

export default node;
