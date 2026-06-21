/**
 * @generated SignedSource<<89cef3e74bae2c9e420ec39faaac6531>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type MoveToCategoryDropdownQuery$variables = {
  cookieBannerId: string;
};
export type MoveToCategoryDropdownQuery$data = {
  readonly node: {
    readonly __typename: "CookieBanner";
    readonly categories: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly name: string;
        };
      }>;
    };
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type MoveToCategoryDropdownQuery = {
  response: MoveToCategoryDropdownQuery$data;
  variables: MoveToCategoryDropdownQuery$variables;
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
  "args": [
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
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "categories(first:50,orderBy:{\"direction\":\"ASC\",\"field\":\"RANK\"})"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MoveToCategoryDropdownQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
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
                  "kind": "RequiredField",
                  "field": (v4/*: any*/),
                  "action": "THROW"
                }
              ],
              "type": "CookieBanner",
              "abstractKey": null
            }
          ],
          "storageKey": null
        },
        "action": "THROW"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MoveToCategoryDropdownQuery",
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
              (v4/*: any*/)
            ],
            "type": "CookieBanner",
            "abstractKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a34a6dd42c5ca01098915dff0414725c",
    "id": null,
    "metadata": {},
    "name": "MoveToCategoryDropdownQuery",
    "operationKind": "query",
    "text": "query MoveToCategoryDropdownQuery(\n  $cookieBannerId: ID!\n) {\n  node(id: $cookieBannerId) {\n    __typename\n    ... on CookieBanner {\n      categories(first: 50, orderBy: {field: RANK, direction: ASC}) {\n        edges {\n          node {\n            id\n            name\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "6616304b103928f6e03a28c4ef64b42e";

export default node;
