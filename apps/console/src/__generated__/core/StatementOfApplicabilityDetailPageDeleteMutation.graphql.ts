/**
 * @generated SignedSource<<7cf567a47fe673c427b6507be8ab5310>>
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
export type StatementOfApplicabilityDetailPageDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteStatementOfApplicabilityInput;
};
export type StatementOfApplicabilityDetailPageDeleteMutation$data = {
  readonly deleteStatementOfApplicability: {
    readonly deletedStatementOfApplicabilityId: string;
  };
};
export type StatementOfApplicabilityDetailPageDeleteMutation = {
  response: StatementOfApplicabilityDetailPageDeleteMutation$data;
  variables: StatementOfApplicabilityDetailPageDeleteMutation$variables;
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
    "name": "StatementOfApplicabilityDetailPageDeleteMutation",
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
    "name": "StatementOfApplicabilityDetailPageDeleteMutation",
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
    "cacheID": "06c6379ffe6a72a45ddbbbb1587dae8b",
    "id": null,
    "metadata": {},
    "name": "StatementOfApplicabilityDetailPageDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation StatementOfApplicabilityDetailPageDeleteMutation(\n  $input: DeleteStatementOfApplicabilityInput!\n) {\n  deleteStatementOfApplicability(input: $input) {\n    deletedStatementOfApplicabilityId\n  }\n}\n"
  }
};
})();

(node as any).hash = "1853ef8d36c0906f409c509f7875269d";

export default node;
