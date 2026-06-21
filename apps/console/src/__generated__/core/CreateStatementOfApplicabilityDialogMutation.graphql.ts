/**
 * @generated SignedSource<<5d32d6fc1bad447d90011353d2ef081d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateStatementOfApplicabilityInput = {
  name: string;
  organizationId: string;
};
export type CreateStatementOfApplicabilityDialogMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateStatementOfApplicabilityInput;
};
export type CreateStatementOfApplicabilityDialogMutation$data = {
  readonly createStatementOfApplicability: {
    readonly statementOfApplicabilityEdge: {
      readonly node: {
        readonly canDelete: boolean;
        readonly createdAt: string;
        readonly id: string;
        readonly name: string;
        readonly updatedAt: string;
        readonly " $fragmentSpreads": FragmentRefs<"StatementOfApplicabilityRowFragment">;
      };
    };
  };
};
export type CreateStatementOfApplicabilityDialogMutation = {
  response: CreateStatementOfApplicabilityDialogMutation$data;
  variables: CreateStatementOfApplicabilityDialogMutation$variables;
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
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v7 = {
  "alias": "canDelete",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:statement-of-applicability:delete"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:statement-of-applicability:delete\")"
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateStatementOfApplicabilityDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateStatementOfApplicabilityPayload",
        "kind": "LinkedField",
        "name": "createStatementOfApplicability",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "StatementOfApplicabilityEdge",
            "kind": "LinkedField",
            "name": "statementOfApplicabilityEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "StatementOfApplicability",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "StatementOfApplicabilityRowFragment"
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
    "name": "CreateStatementOfApplicabilityDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateStatementOfApplicabilityPayload",
        "kind": "LinkedField",
        "name": "createStatementOfApplicability",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "StatementOfApplicabilityEdge",
            "kind": "LinkedField",
            "name": "statementOfApplicabilityEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "StatementOfApplicability",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  {
                    "alias": "statementsInfo",
                    "args": null,
                    "concreteType": "ApplicabilityStatementConnection",
                    "kind": "LinkedField",
                    "name": "applicabilityStatements",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "totalCount",
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
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "prependEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "statementOfApplicabilityEdge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "466644a14ca7e0f88b862eeb16f06154",
    "id": null,
    "metadata": {},
    "name": "CreateStatementOfApplicabilityDialogMutation",
    "operationKind": "mutation",
    "text": "mutation CreateStatementOfApplicabilityDialogMutation(\n  $input: CreateStatementOfApplicabilityInput!\n) {\n  createStatementOfApplicability(input: $input) {\n    statementOfApplicabilityEdge {\n      node {\n        id\n        name\n        createdAt\n        updatedAt\n        canDelete: permission(action: \"core:statement-of-applicability:delete\")\n        ...StatementOfApplicabilityRowFragment\n      }\n    }\n  }\n}\n\nfragment StatementOfApplicabilityRowFragment on StatementOfApplicability {\n  id\n  name\n  createdAt\n  canDelete: permission(action: \"core:statement-of-applicability:delete\")\n  statementsInfo: applicabilityStatements {\n    totalCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "90d32aee65cfe4b5c8f5fe141a5e6ba3";

export default node;
