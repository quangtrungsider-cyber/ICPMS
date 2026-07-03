/**
 * @generated SignedSource<<eb976a2854aa0d33bcf3afbd4c8843cc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ExportDocumentPDFInput = {
  documentId: string;
};
export type DocumentPageExportDocumentMutation$variables = {
  input: ExportDocumentPDFInput;
};
export type DocumentPageExportDocumentMutation$data = {
  readonly exportDocumentPDF: {
    readonly data: string;
  };
};
export type DocumentPageExportDocumentMutation = {
  response: DocumentPageExportDocumentMutation$data;
  variables: DocumentPageExportDocumentMutation$variables;
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
    "concreteType": "ExportDocumentPDFPayload",
    "kind": "LinkedField",
    "name": "exportDocumentPDF",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "data",
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
    "name": "DocumentPageExportDocumentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentPageExportDocumentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "53c14b72ebd6f627c50794b0ec0869fd",
    "id": null,
    "metadata": {},
    "name": "DocumentPageExportDocumentMutation",
    "operationKind": "mutation",
    "text": "mutation DocumentPageExportDocumentMutation(\n  $input: ExportDocumentPDFInput!\n) {\n  exportDocumentPDF(input: $input) {\n    data\n  }\n}\n"
  }
};
})();

(node as any).hash = "a67b8552ba0927fb37b293276f3edd6f";

export default node;
