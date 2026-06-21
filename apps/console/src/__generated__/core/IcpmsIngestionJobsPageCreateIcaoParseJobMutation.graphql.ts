/**
 * @generated SignedSource<<94f79e34cc663618b3aa2d240e72c1b8>>
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
export type IcpmsIngestionJobsPageCreateIcaoParseJobMutation$variables = {
  input: CreateIcpmsDocumentParseJobInput;
};
export type IcpmsIngestionJobsPageCreateIcaoParseJobMutation$data = {
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
export type IcpmsIngestionJobsPageCreateIcaoParseJobMutation = {
  response: IcpmsIngestionJobsPageCreateIcaoParseJobMutation$data;
  variables: IcpmsIngestionJobsPageCreateIcaoParseJobMutation$variables;
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
    "name": "IcpmsIngestionJobsPageCreateIcaoParseJobMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsIngestionJobsPageCreateIcaoParseJobMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5355b46162fc2415f2ec8df3c61f1a5b",
    "id": null,
    "metadata": {},
    "name": "IcpmsIngestionJobsPageCreateIcaoParseJobMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsIngestionJobsPageCreateIcaoParseJobMutation(\n  $input: CreateIcpmsDocumentParseJobInput!\n) {\n  createAndRunIcaoParseJob(input: $input) {\n    parseJob {\n      id\n      status\n      totalSections\n      language\n      errorMessage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "311462df332ef93ef440de8803d5f4dc";

export default node;
