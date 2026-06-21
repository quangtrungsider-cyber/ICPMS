/**
 * @generated SignedSource<<c300d04d93c719c5c770bf086d82b543>>
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
export type IcpmsIngestionJobDetailPageRetryMutation$variables = {
  input: CreateIcpmsIngestionJobInput;
};
export type IcpmsIngestionJobDetailPageRetryMutation$data = {
  readonly createIcpmsIngestionJob: {
    readonly job: {
      readonly id: string;
      readonly jobCode: string;
      readonly status: IcpmsIngestionJobStatus;
    } | null | undefined;
  };
};
export type IcpmsIngestionJobDetailPageRetryMutation = {
  response: IcpmsIngestionJobDetailPageRetryMutation$data;
  variables: IcpmsIngestionJobDetailPageRetryMutation$variables;
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
    "name": "IcpmsIngestionJobDetailPageRetryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsIngestionJobDetailPageRetryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "55338f5d3d903ef3d947f3f3d6d52146",
    "id": null,
    "metadata": {},
    "name": "IcpmsIngestionJobDetailPageRetryMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsIngestionJobDetailPageRetryMutation(\n  $input: CreateIcpmsIngestionJobInput!\n) {\n  createIcpmsIngestionJob(input: $input) {\n    job {\n      id\n      jobCode\n      status\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "50386b38a6d5ba7d15463f4d694d935e";

export default node;
