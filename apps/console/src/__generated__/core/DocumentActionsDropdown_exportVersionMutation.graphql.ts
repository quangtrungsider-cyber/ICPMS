/**
 * @generated SignedSource<<8dab23095f73709c11f942e46bd01ff4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ExportDocumentVersionPDFInput = {
  documentVersionId: string;
  watermarkEmail?: string | null | undefined;
  withSignatures: boolean;
  withWatermark: boolean;
};
export type DocumentActionsDropdown_exportVersionMutation$variables = {
  input: ExportDocumentVersionPDFInput;
};
export type DocumentActionsDropdown_exportVersionMutation$data = {
  readonly exportDocumentVersionPDF: {
    readonly data: string;
  };
};
export type DocumentActionsDropdown_exportVersionMutation = {
  response: DocumentActionsDropdown_exportVersionMutation$data;
  variables: DocumentActionsDropdown_exportVersionMutation$variables;
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
    "concreteType": "ExportDocumentVersionPDFPayload",
    "kind": "LinkedField",
    "name": "exportDocumentVersionPDF",
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
    "name": "DocumentActionsDropdown_exportVersionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentActionsDropdown_exportVersionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ecb21dcb61be4b400cd16c4f92c18793",
    "id": null,
    "metadata": {},
    "name": "DocumentActionsDropdown_exportVersionMutation",
    "operationKind": "mutation",
    "text": "mutation DocumentActionsDropdown_exportVersionMutation(\n  $input: ExportDocumentVersionPDFInput!\n) {\n  exportDocumentVersionPDF(input: $input) {\n    data\n  }\n}\n"
  }
};
})();

(node as any).hash = "1b2d186de5a1127af4c56d26e7496bb6";

export default node;
