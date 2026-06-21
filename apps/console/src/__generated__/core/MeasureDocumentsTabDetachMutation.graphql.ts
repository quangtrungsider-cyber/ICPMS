/**
 * @generated SignedSource<<7b8963bf77465b40e5d4fc60bda84ae6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteMeasureDocumentMappingInput = {
  documentId: string;
  measureId: string;
};
export type MeasureDocumentsTabDetachMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteMeasureDocumentMappingInput;
};
export type MeasureDocumentsTabDetachMutation$data = {
  readonly deleteMeasureDocumentMapping: {
    readonly deletedDocumentId: string;
  };
};
export type MeasureDocumentsTabDetachMutation = {
  response: MeasureDocumentsTabDetachMutation$data;
  variables: MeasureDocumentsTabDetachMutation$variables;
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
    "name": "MeasureDocumentsTabDetachMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteMeasureDocumentMappingPayload",
        "kind": "LinkedField",
        "name": "deleteMeasureDocumentMapping",
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
    "name": "MeasureDocumentsTabDetachMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteMeasureDocumentMappingPayload",
        "kind": "LinkedField",
        "name": "deleteMeasureDocumentMapping",
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
    "cacheID": "afd78304d20745066df43de0df5eae65",
    "id": null,
    "metadata": {},
    "name": "MeasureDocumentsTabDetachMutation",
    "operationKind": "mutation",
    "text": "mutation MeasureDocumentsTabDetachMutation(\n  $input: DeleteMeasureDocumentMappingInput!\n) {\n  deleteMeasureDocumentMapping(input: $input) {\n    deletedDocumentId\n  }\n}\n"
  }
};
})();

(node as any).hash = "e6ef9249f845ef5b105dc53913978922";

export default node;
