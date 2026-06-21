/**
 * @generated SignedSource<<4aaca876a495c5f7e74b2d9b8ac1a3ee>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AccessSourceRowOrgsQuery$variables = {
  accessSourceId: string;
};
export type AccessSourceRowOrgsQuery$data = {
  readonly node: {
    readonly providerOrganizations?: ReadonlyArray<{
      readonly displayName: string;
      readonly slug: string;
    }>;
  };
};
export type AccessSourceRowOrgsQuery = {
  response: AccessSourceRowOrgsQuery$data;
  variables: AccessSourceRowOrgsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "accessSourceId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "accessSourceId"
  }
],
v2 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ProviderOrganization",
      "kind": "LinkedField",
      "name": "providerOrganizations",
      "plural": true,
      "selections": [
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
          "name": "displayName",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "AccessSource",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AccessSourceRowOrgsQuery",
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
            (v2/*: any*/)
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
    "name": "AccessSourceRowOrgsQuery",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "36875754a21e9491b36f1b239c15396f",
    "id": null,
    "metadata": {},
    "name": "AccessSourceRowOrgsQuery",
    "operationKind": "query",
    "text": "query AccessSourceRowOrgsQuery(\n  $accessSourceId: ID!\n) {\n  node(id: $accessSourceId) {\n    __typename\n    ... on AccessSource {\n      providerOrganizations {\n        slug\n        displayName\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "0c500308fbee5771cfe725b2e3ce3eac";

export default node;
