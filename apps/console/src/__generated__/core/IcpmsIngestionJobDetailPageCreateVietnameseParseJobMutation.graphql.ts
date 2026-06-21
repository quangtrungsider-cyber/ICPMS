/**
 * @generated SignedSource<<f428295e69122ea7217ba362d71958a8>>
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
export type IcpmsIngestionJobDetailPageCreateVietnameseParseJobMutation$variables = {
  input: CreateIcpmsDocumentParseJobInput;
};
export type IcpmsIngestionJobDetailPageCreateVietnameseParseJobMutation$data = {
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
export type IcpmsIngestionJobDetailPageCreateVietnameseParseJobMutation = {
  response: IcpmsIngestionJobDetailPageCreateVietnameseParseJobMutation$data;
  variables: IcpmsIngestionJobDetailPageCreateVietnameseParseJobMutation$variables;
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
    "name": "IcpmsIngestionJobDetailPageCreateVietnameseParseJobMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsIngestionJobDetailPageCreateVietnameseParseJobMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5754f27b85fc3fee6c70007d136966ca",
    "id": null,
    "metadata": {},
    "name": "IcpmsIngestionJobDetailPageCreateVietnameseParseJobMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsIngestionJobDetailPageCreateVietnameseParseJobMutation(\n  $input: CreateIcpmsDocumentParseJobInput!\n) {\n  createAndRunVietnameseParseJob(input: $input) {\n    parseJob {\n      id\n      status\n      totalSections\n      language\n      errorMessage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "cacbc402e25c0563c28c18805392bd1d";

export default node;
