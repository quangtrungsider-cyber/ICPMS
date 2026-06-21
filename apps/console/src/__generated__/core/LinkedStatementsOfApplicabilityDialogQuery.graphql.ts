/**
 * @generated SignedSource<<5242187c6e9bbc80f9656d7b8bda75fc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type LinkedStatementsOfApplicabilityDialogQuery$variables = {
  organizationId: string;
};
export type LinkedStatementsOfApplicabilityDialogQuery$data = {
  readonly organization: {
    readonly statementsOfApplicability?: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly name: string;
        };
      }>;
    };
  };
};
export type LinkedStatementsOfApplicabilityDialogQuery = {
  response: LinkedStatementsOfApplicabilityDialogQuery$data;
  variables: LinkedStatementsOfApplicabilityDialogQuery$variables;
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
          "name": "first",
          "value": 100
        }
      ],
      "concreteType": "StatementOfApplicabilityConnection",
      "kind": "LinkedField",
      "name": "statementsOfApplicability",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "StatementOfApplicabilityEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "StatementOfApplicability",
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
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "statementsOfApplicability(first:100)"
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
    "name": "LinkedStatementsOfApplicabilityDialogQuery",
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
    "name": "LinkedStatementsOfApplicabilityDialogQuery",
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
    "cacheID": "b60b8588873194de122598c74cc160a9",
    "id": null,
    "metadata": {},
    "name": "LinkedStatementsOfApplicabilityDialogQuery",
    "operationKind": "query",
    "text": "query LinkedStatementsOfApplicabilityDialogQuery(\n  $organizationId: ID!\n) {\n  organization: node(id: $organizationId) {\n    __typename\n    ... on Organization {\n      statementsOfApplicability(first: 100) {\n        edges {\n          node {\n            id\n            name\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "322d43b8b6ec92312fc192cad94f7d6b";

export default node;
