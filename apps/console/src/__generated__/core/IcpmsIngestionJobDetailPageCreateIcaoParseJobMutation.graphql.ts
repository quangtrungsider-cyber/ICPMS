/**
 * @generated SignedSource<<cb5ea2a7542714914758e87a09e101c8>>
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
export type IcpmsIngestionJobDetailPageCreateIcaoParseJobMutation$variables = {
  input: CreateIcpmsDocumentParseJobInput;
};
export type IcpmsIngestionJobDetailPageCreateIcaoParseJobMutation$data = {
  readonly createAndRunIcaoParseJob: {
    readonly parseJob: {
      readonly errorMessage: string | null | undefined;
      readonly id: string;
      readonly language: string;
      readonly status: IcpmsParseJobStatus;
      readonly totalSections: number;
    } | null | undefined;
  };
};
export type IcpmsIngestionJobDetailPageCreateIcaoParseJobMutation = {
  response: IcpmsIngestionJobDetailPageCreateIcaoParseJobMutation$data;
  variables: IcpmsIngestionJobDetailPageCreateIcaoParseJobMutation$variables;
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
    "name": "createAndRunIcaoParseJob",
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
    "name": "IcpmsIngestionJobDetailPageCreateIcaoParseJobMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsIngestionJobDetailPageCreateIcaoParseJobMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3ddc4991264a681abcbc56c9aed5627e",
    "id": null,
    "metadata": {},
    "name": "IcpmsIngestionJobDetailPageCreateIcaoParseJobMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsIngestionJobDetailPageCreateIcaoParseJobMutation(\n  $input: CreateIcpmsDocumentParseJobInput!\n) {\n  createAndRunIcaoParseJob(input: $input) {\n    parseJob {\n      id\n      status\n      totalSections\n      language\n      errorMessage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2cdece881cd97068d7b47775eeb09a10";

export default node;
