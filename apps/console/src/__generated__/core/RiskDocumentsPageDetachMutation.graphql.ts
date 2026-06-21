/**
 * @generated SignedSource<<0d1e1957640e8e79f4ade4e1efdb6bb6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteRiskDocumentMappingInput = {
  documentId: string;
  riskId: string;
};
export type RiskDocumentsPageDetachMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteRiskDocumentMappingInput;
};
export type RiskDocumentsPageDetachMutation$data = {
  readonly deleteRiskDocumentMapping: {
    readonly deletedDocumentId: string;
  };
};
export type RiskDocumentsPageDetachMutation = {
  response: RiskDocumentsPageDetachMutation$data;
  variables: RiskDocumentsPageDetachMutation$variables;
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
  "name": "deletedDocumentId",
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
    "name": "RiskDocumentsPageDetachMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteRiskDocumentMappingPayload",
        "kind": "LinkedField",
        "name": "deleteRiskDocumentMapping",
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
    "name": "RiskDocumentsPageDetachMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteRiskDocumentMappingPayload",
        "kind": "LinkedField",
        "name": "deleteRiskDocumentMapping",
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
            "name": "deletedDocumentId",
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
    "cacheID": "b07781f41f9243f1f755a5177fa53bd5",
    "id": null,
    "metadata": {},
    "name": "RiskDocumentsPageDetachMutation",
    "operationKind": "mutation",
    "text": "mutation RiskDocumentsPageDetachMutation(\n  $input: DeleteRiskDocumentMappingInput!\n) {\n  deleteRiskDocumentMapping(input: $input) {\n    deletedDocumentId\n  }\n}\n"
  }
};
})();

(node as any).hash = "1db8be59fa69e74356acd2f60daf30ce";

export default node;
