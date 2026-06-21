/**
 * @generated SignedSource<<a230bc80522d19fd3af6cb48b528dc75>>
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
export type EmployeeDocumentSignaturePageExportEmployeePDFMutation$variables = {
  input: ExportEmployeeDocumentVersionPDFInput;
};
export type EmployeeDocumentSignaturePageExportEmployeePDFMutation$data = {
  readonly exportEmployeeDocumentVersionPDF: {
    readonly data: string;
  };
};
export type EmployeeDocumentSignaturePageExportEmployeePDFMutation = {
  response: EmployeeDocumentSignaturePageExportEmployeePDFMutation$data;
  variables: EmployeeDocumentSignaturePageExportEmployeePDFMutation$variables;
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
    "name": "EmployeeDocumentSignaturePageExportEmployeePDFMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EmployeeDocumentSignaturePageExportEmployeePDFMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "198754cda08bf8c01e281d845eda23fe",
    "id": null,
    "metadata": {},
    "name": "EmployeeDocumentSignaturePageExportEmployeePDFMutation",
    "operationKind": "mutation",
    "text": "mutation EmployeeDocumentSignaturePageExportEmployeePDFMutation(\n  $input: ExportEmployeeDocumentVersionPDFInput!\n) {\n  exportEmployeeDocumentVersionPDF(input: $input) {\n    data\n  }\n}\n"
  }
};
})();

(node as any).hash = "7a36ecc109a1fd9e100ad803babf5a8e";

export default node;
