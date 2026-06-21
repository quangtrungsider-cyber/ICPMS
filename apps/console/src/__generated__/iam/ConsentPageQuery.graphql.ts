/**
 * @generated SignedSource<<f0f7cebad30e742964d925f165aad7fe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ConsentPageQuery$variables = {
  consentId: string;
};
export type ConsentPageQuery$data = {
  readonly node: {
    readonly application?: {
      readonly name: string;
    };
    readonly id?: string;
    readonly scopes?: ReadonlyArray<string>;
  };
};
export type ConsentPageQuery = {
  response: ConsentPageQuery$data;
  variables: ConsentPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "consentId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "consentId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "scopes",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ConsentPageQuery",
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
            {
              "kind": "InlineFragment",
              "selections": [
                (v2/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Application",
                  "kind": "LinkedField",
                  "name": "application",
                  "plural": false,
                  "selections": [
                    (v3/*: any*/)
                  ],
                  "storageKey": null
                },
                (v4/*: any*/)
              ],
              "type": "Consent",
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
    "name": "ConsentPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Application",
                "kind": "LinkedField",
                "name": "application",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v4/*: any*/)
            ],
            "type": "Consent",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "79e0e4adf6051d175e0f8a23634e93b6",
    "id": null,
    "metadata": {},
    "name": "ConsentPageQuery",
    "operationKind": "query",
    "text": "query ConsentPageQuery(\n  $consentId: ID!\n) {\n  node(id: $consentId) {\n    __typename\n    ... on Consent {\n      id\n      application {\n        name\n        id\n      }\n      scopes\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "c4bf40ea4c67f2aad00fb67f10d998af";

export default node;
