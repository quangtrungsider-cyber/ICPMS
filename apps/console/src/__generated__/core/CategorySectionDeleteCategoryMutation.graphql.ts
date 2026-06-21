/**
 * @generated SignedSource<<7bc43f8c9fcd21901260fa86432a028c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteCookieCategoryInput = {
  cookieCategoryId: string;
};
export type CategorySectionDeleteCategoryMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteCookieCategoryInput;
};
export type CategorySectionDeleteCategoryMutation$data = {
  readonly deleteCookieCategory: {
    readonly cookieBanner: {
      readonly id: string;
      readonly latestVersion: {
        readonly id: string;
        readonly state: string;
        readonly version: number;
      } | null | undefined;
    };
    readonly deletedCookieCategoryId: string;
  };
};
export type CategorySectionDeleteCategoryMutation = {
  response: CategorySectionDeleteCategoryMutation$data;
  variables: CategorySectionDeleteCategoryMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "deletedCookieCategoryId",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "CookieBanner",
  "kind": "LinkedField",
  "name": "cookieBanner",
  "plural": false,
  "selections": [
    (v4/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "CookieBannerVersion",
      "kind": "LinkedField",
      "name": "latestVersion",
      "plural": false,
      "selections": [
        (v4/*: any*/),
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
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CategorySectionDeleteCategoryMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteCookieCategoryPayload",
        "kind": "LinkedField",
        "name": "deleteCookieCategory",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CategorySectionDeleteCategoryMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteCookieCategoryPayload",
        "kind": "LinkedField",
        "name": "deleteCookieCategory",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "deletedCookieCategoryId",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e0787a7431741b7adabbc9b8af8948c5",
    "id": null,
    "metadata": {},
    "name": "CategorySectionDeleteCategoryMutation",
    "operationKind": "mutation",
    "text": "mutation CategorySectionDeleteCategoryMutation(\n  $input: DeleteCookieCategoryInput!\n) {\n  deleteCookieCategory(input: $input) {\n    deletedCookieCategoryId\n    cookieBanner {\n      id\n      latestVersion {\n        id\n        version\n        state\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "fa6d8eb5c5a5a97bf85c666a2851b810";

export default node;
