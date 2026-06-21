/**
 * @generated SignedSource<<3f70bcb9949170f0f027de29ba101190>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UpdateStatementOfApplicabilityInput = {
  id: string;
  name?: string | null | undefined;
};
export type StatementOfApplicabilityDetailPageUpdateMutation$variables = {
  input: UpdateStatementOfApplicabilityInput;
};
export type StatementOfApplicabilityDetailPageUpdateMutation$data = {
  readonly updateStatementOfApplicability: {
    readonly statementOfApplicability: {
      readonly createdAt: string;
      readonly id: string;
      readonly name: string;
      readonly updatedAt: string;
    };
  };
};
export type StatementOfApplicabilityDetailPageUpdateMutation = {
  response: StatementOfApplicabilityDetailPageUpdateMutation$data;
  variables: StatementOfApplicabilityDetailPageUpdateMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateStatementOfApplicabilityPayload",
    "kind": "LinkedField",
    "name": "updateStatementOfApplicability",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "StatementOfApplicability",
        "kind": "LinkedField",
        "name": "statementOfApplicability",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
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
            "name": "createdAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updatedAt",
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
    "name": "StatementOfApplicabilityDetailPageUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "StatementOfApplicabilityDetailPageUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "91e71f93084e4892011e8589ae6c6d7e",
    "id": null,
    "metadata": {},
    "name": "StatementOfApplicabilityDetailPageUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation StatementOfApplicabilityDetailPageUpdateMutation(\n  $input: UpdateStatementOfApplicabilityInput!\n) {\n  updateStatementOfApplicability(input: $input) {\n    statementOfApplicability {\n      id\n      name\n      createdAt\n      updatedAt\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2d69800fa8d2cda82533003c504bff7e";

export default node;
