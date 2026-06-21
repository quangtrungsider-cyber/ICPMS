/**
 * @generated SignedSource<<79047bbf0263a54ead211ab9d2784828>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type BulkDeleteDocumentsInput = {
  documentIds: ReadonlyArray<string>;
};
export type DocumentGraphBulkDeleteDocumentsMutation$variables = {
  input: BulkDeleteDocumentsInput;
};
export type DocumentGraphBulkDeleteDocumentsMutation$data = {
  readonly bulkDeleteDocuments: {
    readonly deletedDocumentIds: ReadonlyArray<string>;
  };
};
export type DocumentGraphBulkDeleteDocumentsMutation = {
  response: DocumentGraphBulkDeleteDocumentsMutation$data;
  variables: DocumentGraphBulkDeleteDocumentsMutation$variables;
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
    "concreteType": "BulkDeleteDocumentsPayload",
    "kind": "LinkedField",
    "name": "bulkDeleteDocuments",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedDocumentIds",
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
    "name": "DocumentGraphBulkDeleteDocumentsMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentGraphBulkDeleteDocumentsMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "655f43d282b8e0007f3b93e381e7ff84",
    "id": null,
    "metadata": {},
    "name": "DocumentGraphBulkDeleteDocumentsMutation",
    "operationKind": "mutation",
    "text": "mutation DocumentGraphBulkDeleteDocumentsMutation(\n  $input: BulkDeleteDocumentsInput!\n) {\n  bulkDeleteDocuments(input: $input) {\n    deletedDocumentIds\n  }\n}\n"
  }
};
})();

(node as any).hash = "e0557fa945616491e71856fc06bfd223";

export default node;
