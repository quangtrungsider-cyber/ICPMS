/**
 * @generated SignedSource<<b558f2384a2cf26d1bef6a8f70f35e51>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ExportEmployeeDocumentVersionPDFInput = {
  documentVersionId: string;
};
export type DocumentApprovePageExportEmployeePDFMutation$variables = {
  input: ExportEmployeeDocumentVersionPDFInput;
};
export type DocumentApprovePageExportEmployeePDFMutation$data = {
  readonly exportEmployeeDocumentVersionPDF: {
    readonly data: string;
  };
};
export type DocumentApprovePageExportEmployeePDFMutation = {
  response: DocumentApprovePageExportEmployeePDFMutation$data;
  variables: DocumentApprovePageExportEmployeePDFMutation$variables;
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
    "concreteType": "ExportEmployeeDocumentVersionPDFPayload",
    "kind": "LinkedField",
    "name": "exportEmployeeDocumentVersionPDF",
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
    "name": "DocumentApprovePageExportEmployeePDFMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentApprovePageExportEmployeePDFMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5fb0d0e1670b4c0e5578c6e5641f7bd5",
    "id": null,
    "metadata": {},
    "name": "DocumentApprovePageExportEmployeePDFMutation",
    "operationKind": "mutation",
    "text": "mutation DocumentApprovePageExportEmployeePDFMutation(\n  $input: ExportEmployeeDocumentVersionPDFInput!\n) {\n  exportEmployeeDocumentVersionPDF(input: $input) {\n    data\n  }\n}\n"
  }
};
})();

(node as any).hash = "80bf0ea86d993d7973d371fbe08370a1";

export default node;
