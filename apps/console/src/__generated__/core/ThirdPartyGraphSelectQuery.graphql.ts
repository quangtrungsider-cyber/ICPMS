/**
 * @generated SignedSource<<9747578912fbf326cd4e9da90218e9d0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ThirdPartyGraphSelectQuery$variables = {
  organizationId: string;
};
export type ThirdPartyGraphSelectQuery$data = {
  readonly organization: {
    readonly thirdParties?: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly firstLevel: boolean;
          readonly id: string;
          readonly name: string;
          readonly websiteUrl: string | null | undefined;
        };
      }>;
    };
  };
};
export type ThirdPartyGraphSelectQuery = {
  response: ThirdPartyGraphSelectQuery$data;
  variables: ThirdPartyGraphSelectQuery$variables;
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "filter",
          "value": {
            "firstLevel": true
          }
        },
        {
          "kind": "Literal",
          "name": "first",
          "value": 100
        },
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": {
            "direction": "ASC",
            "field": "NAME"
          }
        }
      ],
      "concreteType": "ThirdPartyConnection",
      "kind": "LinkedField",
      "name": "thirdParties",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ThirdPartyEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ThirdParty",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v2/*: any*/),
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
                  "name": "websiteUrl",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "firstLevel",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "thirdParties(filter:{\"firstLevel\":true},first:100,orderBy:{\"direction\":\"ASC\",\"field\":\"NAME\"})"
    }
  ],
  "type": "Organization",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ThirdPartyGraphSelectQuery",
    "selections": [
      {
        "alias": "organization",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v3/*: any*/)
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
    "name": "ThirdPartyGraphSelectQuery",
    "selections": [
      {
        "alias": "organization",
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
          (v3/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "428fe54f50f8a05ef42918205be0cdb7",
    "id": null,
    "metadata": {},
    "name": "ThirdPartyGraphSelectQuery",
    "operationKind": "query",
    "text": "query ThirdPartyGraphSelectQuery(\n  $organizationId: ID!\n) {\n  organization: node(id: $organizationId) {\n    __typename\n    ... on Organization {\n      thirdParties(first: 100, orderBy: {direction: ASC, field: NAME}, filter: {firstLevel: true}) {\n        edges {\n          node {\n            id\n            name\n            websiteUrl\n            firstLevel\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "7c278e08ad8d5b01a0e21628403fa55a";

export default node;
