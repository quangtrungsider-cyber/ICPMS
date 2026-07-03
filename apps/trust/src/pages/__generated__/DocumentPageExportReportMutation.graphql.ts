/**
 * @generated SignedSource<<07af9fbeed650bbf8744707215cfc3ea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ExportReportPDFInput = {
  reportId: string;
};
export type DocumentPageExportReportMutation$variables = {
  input: ExportReportPDFInput;
};
export type DocumentPageExportReportMutation$data = {
  readonly exportReportPDF: {
    readonly data: string;
  };
};
export type DocumentPageExportReportMutation = {
  response: DocumentPageExportReportMutation$data;
  variables: DocumentPageExportReportMutation$variables;
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
    "concreteType": "ExportReportPDFPayload",
    "kind": "LinkedField",
    "name": "exportReportPDF",
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
    "name": "DocumentPageExportReportMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentPageExportReportMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8dd10b11752cf526822f5a19cb3b066a",
    "id": null,
    "metadata": {},
    "name": "DocumentPageExportReportMutation",
    "operationKind": "mutation",
    "text": "mutation DocumentPageExportReportMutation(\n  $input: ExportReportPDFInput!\n) {\n  exportReportPDF(input: $input) {\n    data\n  }\n}\n"
  }
};
})();

(node as any).hash = "a0d50e644b0bd67a39c9f49ff4b1df70";

export default node;
