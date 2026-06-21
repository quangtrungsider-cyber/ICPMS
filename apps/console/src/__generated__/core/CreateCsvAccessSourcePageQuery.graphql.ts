/**
 * @generated SignedSource<<2ac02e2b9baecb89f06a74f41d81a4dc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CreateCsvAccessSourcePageQuery$variables = {
  organizationId: string;
};
export type CreateCsvAccessSourcePageQuery$data = {
  readonly organization: {
    readonly __typename: "Organization";
    readonly canCreateSource: boolean;
    readonly id: string;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type CreateCsvAccessSourcePageQuery = {
  response: CreateCsvAccessSourcePageQuery$data;
  variables: CreateCsvAccessSourcePageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "organizationId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "organizationId"
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
  "alias": "canCreateSource",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:access-source:create"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:access-source:create\")"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateCsvAccessSourcePageQuery",
    "selections": [
      {
        "alias": "organization",
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
              (v4/*: any*/)
            ],
            "type": "Organization",
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
    "name": "CreateCsvAccessSourcePageQuery",
    "selections": [
      {
        "alias": "organization",
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
              (v4/*: any*/)
            ],
            "type": "Organization",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ddea68229ff62609bfa43c0c36021e95",
    "id": null,
    "metadata": {},
    "name": "CreateCsvAccessSourcePageQuery",
    "operationKind": "query",
    "text": "query CreateCsvAccessSourcePageQuery(\n  $organizationId: ID!\n) {\n  organization: node(id: $organizationId) {\n    __typename\n    ... on Organization {\n      id\n      canCreateSource: permission(action: \"core:access-source:create\")\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "11a0afd6223bddb8a8925c8353b1a65b";

export default node;
