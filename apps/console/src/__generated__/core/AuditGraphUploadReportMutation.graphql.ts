/**
 * @generated SignedSource<<934d333309b3ed98be802a4bbeb1f230>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UploadAuditReportInput = {
  auditId: string;
  file: any;
};
export type AuditGraphUploadReportMutation$variables = {
  input: UploadAuditReportInput;
};
export type AuditGraphUploadReportMutation$data = {
  readonly uploadAuditReport: {
    readonly audit: {
      readonly id: string;
      readonly reportFile: {
        readonly createdAt: string;
        readonly downloadUrl: string;
        readonly fileName: string;
        readonly id: string;
      } | null | undefined;
      readonly updatedAt: string;
    } | null | undefined;
  } | null | undefined;
};
export type AuditGraphUploadReportMutation = {
  response: AuditGraphUploadReportMutation$data;
  variables: AuditGraphUploadReportMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UploadAuditReportPayload",
    "kind": "LinkedField",
    "name": "uploadAuditReport",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Audit",
        "kind": "LinkedField",
        "name": "audit",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "File",
            "kind": "LinkedField",
            "name": "reportFile",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fileName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "downloadUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "createdAt",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updatedAt",
            "storageKey": null
          }
        ],
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
    "name": "AuditGraphUploadReportMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AuditGraphUploadReportMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "1a7b52f6a7af39cb735fb6a293b2df5a",
    "id": null,
    "metadata": {},
    "name": "AuditGraphUploadReportMutation",
    "operationKind": "mutation",
    "text": "mutation AuditGraphUploadReportMutation(\n  $input: UploadAuditReportInput!\n) {\n  uploadAuditReport(input: $input) {\n    audit {\n      id\n      reportFile {\n        id\n        fileName\n        downloadUrl\n        createdAt\n      }\n      updatedAt\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e498cb27d8593073cffa0e314409b008";

export default node;
