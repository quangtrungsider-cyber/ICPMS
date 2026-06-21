/**
 * @generated SignedSource<<e72893f0540cb420b5a3dac8ccbde2ea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteStatementOfApplicabilityInput = {
  statementOfApplicabilityId: string;
};
export type StatementOfApplicabilityRowDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteStatementOfApplicabilityInput;
};
export type StatementOfApplicabilityRowDeleteMutation$data = {
  readonly deleteStatementOfApplicability: {
    readonly deletedStatementOfApplicabilityId: string;
  };
};
export type StatementOfApplicabilityRowDeleteMutation = {
  response: StatementOfApplicabilityRowDeleteMutation$data;
  variables: StatementOfApplicabilityRowDeleteMutation$variables;
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
  "name": "deletedStatementOfApplicabilityId",
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
    "name": "StatementOfApplicabilityRowDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteStatementOfApplicabilityPayload",
        "kind": "LinkedField",
        "name": "deleteStatementOfApplicability",
        "plural": false,
        "selections": [
          (v3/*: any*/)
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
    "name": "StatementOfApplicabilityRowDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteStatementOfApplicabilityPayload",
        "kind": "LinkedField",
        "name": "deleteStatementOfApplicability",
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
            "name": "deletedStatementOfApplicabilityId",
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
    "cacheID": "e7814921b762163e5693d6d54aadc31e",
    "id": null,
    "metadata": {},
    "name": "StatementOfApplicabilityRowDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation StatementOfApplicabilityRowDeleteMutation(\n  $input: DeleteStatementOfApplicabilityInput!\n) {\n  deleteStatementOfApplicability(input: $input) {\n    deletedStatementOfApplicabilityId\n  }\n}\n"
  }
};
})();

(node as any).hash = "2e7ddfcf3c946a537ba7235179c524ca";

export default node;
