/**
 * @generated SignedSource<<605812f41d636783c56121caff6e0ea6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteApplicabilityStatementInput = {
  applicabilityStatementId: string;
};
export type StatementOfApplicabilityControlsTabDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteApplicabilityStatementInput;
};
export type StatementOfApplicabilityControlsTabDeleteMutation$data = {
  readonly deleteApplicabilityStatement: {
    readonly deletedApplicabilityStatementId: string;
  };
};
export type StatementOfApplicabilityControlsTabDeleteMutation = {
  response: StatementOfApplicabilityControlsTabDeleteMutation$data;
  variables: StatementOfApplicabilityControlsTabDeleteMutation$variables;
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
  "name": "deletedApplicabilityStatementId",
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
    "name": "StatementOfApplicabilityControlsTabDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteApplicabilityStatementPayload",
        "kind": "LinkedField",
        "name": "deleteApplicabilityStatement",
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
    "name": "StatementOfApplicabilityControlsTabDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteApplicabilityStatementPayload",
        "kind": "LinkedField",
        "name": "deleteApplicabilityStatement",
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
            "name": "deletedApplicabilityStatementId",
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
    "cacheID": "3ca6ce5991f8853ff5eeaf0601761267",
    "id": null,
    "metadata": {},
    "name": "StatementOfApplicabilityControlsTabDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation StatementOfApplicabilityControlsTabDeleteMutation(\n  $input: DeleteApplicabilityStatementInput!\n) {\n  deleteApplicabilityStatement(input: $input) {\n    deletedApplicabilityStatementId\n  }\n}\n"
  }
};
})();

(node as any).hash = "b94ec39ad14b3d2afac309e11cdb1559";

export default node;
