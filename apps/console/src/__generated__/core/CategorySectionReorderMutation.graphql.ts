/**
 * @generated SignedSource<<baf3cd12f4c1359344960bed06e236fd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ReorderCookieCategoryInput = {
  cookieCategoryId: string;
  rank: number;
};
export type CategorySectionReorderMutation$variables = {
  input: ReorderCookieCategoryInput;
};
export type CategorySectionReorderMutation$data = {
  readonly reorderCookieCategory: {
    readonly cookieBanner: {
      readonly categories: {
        readonly edges: ReadonlyArray<{
          readonly node: {
            readonly id: string;
            readonly rank: number;
          };
        }>;
      } | null | undefined;
      readonly id: string;
      readonly latestVersion: {
        readonly id: string;
        readonly state: string;
        readonly version: number;
      } | null | undefined;
    };
  };
};
export type CategorySectionReorderMutation = {
  response: CategorySectionReorderMutation$data;
  variables: CategorySectionReorderMutation$variables;
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
    "concreteType": "ReorderCookieCategoryPayload",
    "kind": "LinkedField",
    "name": "reorderCookieCategory",
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
                      (v1/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "rank",
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
    "name": "CategorySectionReorderMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CategorySectionReorderMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "17168dae9972c81c3565e9ffa445ad1f",
    "id": null,
    "metadata": {},
    "name": "CategorySectionReorderMutation",
    "operationKind": "mutation",
    "text": "mutation CategorySectionReorderMutation(\n  $input: ReorderCookieCategoryInput!\n) {\n  reorderCookieCategory(input: $input) {\n    cookieBanner {\n      id\n      categories(first: 50, orderBy: {field: RANK, direction: ASC}, filter: {excludeKind: UNCATEGORISED}) {\n        edges {\n          node {\n            id\n            rank\n          }\n        }\n      }\n      latestVersion {\n        id\n        version\n        state\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "06b87b76a90916b6fb8969ea3d3e0797";

export default node;
