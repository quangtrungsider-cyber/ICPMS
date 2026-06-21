/**
 * @generated SignedSource<<9ba2e62a120272caebd7ca6d36ffddd1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsIngestionExtractionMode = "AUTO" | "DOCX_TEXT" | "DOC_LEGACY" | "PDF_TEXT" | "TXT_TEXT";
export type IcpmsIngestionJobStatus = "CANCELLED" | "COMPLETED" | "FAILED" | "PARTIAL" | "QUEUED" | "RUNNING";
export type IcpmsIngestionJobType = "RE_EXTRACTION" | "TEXT_EXTRACTION" | "VALIDATION_ONLY";
export type CreateIcpmsIngestionJobInput = {
  documentFileId: string;
  documentId: string;
  documentVersionId: string;
  extractionMode: IcpmsIngestionExtractionMode;
  jobType?: IcpmsIngestionJobType | null | undefined;
};
export type IcpmsDocumentVersionsTabCreateIcpmsIngestionJobMutation$variables = {
  input: CreateIcpmsIngestionJobInput;
};
export type IcpmsDocumentVersionsTabCreateIcpmsIngestionJobMutation$data = {
  readonly createIcpmsIngestionJob: {
    readonly job: {
      readonly id: string;
      readonly jobCode: string;
      readonly status: IcpmsIngestionJobStatus;
    } | null | undefined;
  };
};
export type IcpmsDocumentVersionsTabCreateIcpmsIngestionJobMutation = {
  response: IcpmsDocumentVersionsTabCreateIcpmsIngestionJobMutation$data;
  variables: IcpmsDocumentVersionsTabCreateIcpmsIngestionJobMutation$variables;
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
    "concreteType": "CreateIcpmsIngestionJobPayload",
    "kind": "LinkedField",
    "name": "createIcpmsIngestionJob",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsIngestionJob",
        "kind": "LinkedField",
        "name": "job",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "jobCode",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "status",
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
    "name": "IcpmsDocumentVersionsTabCreateIcpmsIngestionJobMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsDocumentVersionsTabCreateIcpmsIngestionJobMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "dfc7c632531dab561e6b2092597a3ac4",
    "id": null,
    "metadata": {},
    "name": "IcpmsDocumentVersionsTabCreateIcpmsIngestionJobMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsDocumentVersionsTabCreateIcpmsIngestionJobMutation(\n  $input: CreateIcpmsIngestionJobInput!\n) {\n  createIcpmsIngestionJob(input: $input) {\n    job {\n      id\n      jobCode\n      status\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "68548d2f62328323b61a1fa032876c31";

export default node;
