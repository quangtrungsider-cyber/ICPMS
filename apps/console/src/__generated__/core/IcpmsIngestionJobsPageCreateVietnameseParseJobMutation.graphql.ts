/**
 * @generated SignedSource<<0f0fa6f10332af4db58ffbf833f770ef>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsParseJobStatus = "COMPLETED" | "FAILED" | "PENDING" | "RUNNING";
export type CreateIcpmsDocumentParseJobInput = {
  ingestionJobId: string;
};
export type IcpmsIngestionJobsPageCreateVietnameseParseJobMutation$variables = {
  input: CreateIcpmsDocumentParseJobInput;
};
export type IcpmsIngestionJobsPageCreateVietnameseParseJobMutation$data = {
  readonly createAndRunVietnameseParseJob: {
    readonly parseJob: {
      readonly errorMessage: string | null | undefined;
      readonly id: string;
      readonly language: string;
      readonly status: IcpmsParseJobStatus;
      readonly totalSections: number;
    } | null | undefined;
  };
};
export type IcpmsIngestionJobsPageCreateVietnameseParseJobMutation = {
  response: IcpmsIngestionJobsPageCreateVietnameseParseJobMutation$data;
  variables: IcpmsIngestionJobsPageCreateVietnameseParseJobMutation$variables;
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
    "concreteType": "CreateIcpmsDocumentParseJobPayload",
    "kind": "LinkedField",
    "name": "createAndRunVietnameseParseJob",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsDocumentParseJob",
        "kind": "LinkedField",
        "name": "parseJob",
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
            "name": "status",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalSections",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "language",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "errorMessage",
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
    "name": "IcpmsIngestionJobsPageCreateVietnameseParseJobMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsIngestionJobsPageCreateVietnameseParseJobMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4bd1962a166327868352ddbff4217c25",
    "id": null,
    "metadata": {},
    "name": "IcpmsIngestionJobsPageCreateVietnameseParseJobMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsIngestionJobsPageCreateVietnameseParseJobMutation(\n  $input: CreateIcpmsDocumentParseJobInput!\n) {\n  createAndRunVietnameseParseJob(input: $input) {\n    parseJob {\n      id\n      status\n      totalSections\n      language\n      errorMessage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "acb0da0b7b0d1b04a5f13e2b0c731131";

export default node;
