/**
 * @generated SignedSource<<29d6e66f5b2747904993483035f9a20e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteAuditReportInput = {
  auditId: string;
};
export type AuditGraphDeleteReportMutation$variables = {
  input: DeleteAuditReportInput;
};
export type AuditGraphDeleteReportMutation$data = {
  readonly deleteAuditReport: {
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
export type AuditGraphDeleteReportMutation = {
  response: AuditGraphDeleteReportMutation$data;
  variables: AuditGraphDeleteReportMutation$variables;
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
    "concreteType": "DeleteAuditReportPayload",
    "kind": "LinkedField",
    "name": "deleteAuditReport",
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
    "name": "AuditGraphDeleteReportMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AuditGraphDeleteReportMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "24c7d5c7fdb712d60025905d178af743",
    "id": null,
    "metadata": {},
    "name": "AuditGraphDeleteReportMutation",
    "operationKind": "mutation",
    "text": "mutation AuditGraphDeleteReportMutation(\n  $input: DeleteAuditReportInput!\n) {\n  deleteAuditReport(input: $input) {\n    audit {\n      id\n      reportFile {\n        id\n        fileName\n        downloadUrl\n        createdAt\n      }\n      updatedAt\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1dd835fa2e44c770eae2530964127a2d";

export default node;
