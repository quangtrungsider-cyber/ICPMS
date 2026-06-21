/**
 * @generated SignedSource<<5248a8fac5bdc790c64b675e7b65c8e6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsParseJobStatus = "COMPLETED" | "FAILED" | "PENDING" | "RUNNING";
export type IcpmsIngestionJobsPageLatestParseJobQuery$variables = {
  ingestionJobId: string;
};
export type IcpmsIngestionJobsPageLatestParseJobQuery$data = {
  readonly latestParseJobForIngestionJob: {
    readonly errorMessage: string | null | undefined;
    readonly id: string;
    readonly language: string;
    readonly status: IcpmsParseJobStatus;
    readonly totalSections: number;
  } | null | undefined;
};
export type IcpmsIngestionJobsPageLatestParseJobQuery = {
  response: IcpmsIngestionJobsPageLatestParseJobQuery$data;
  variables: IcpmsIngestionJobsPageLatestParseJobQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "ingestionJobId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "ingestionJobId",
        "variableName": "ingestionJobId"
      }
    ],
    "concreteType": "IcpmsDocumentParseJob",
    "kind": "LinkedField",
    "name": "latestParseJobForIngestionJob",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IcpmsIngestionJobsPageLatestParseJobQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsIngestionJobsPageLatestParseJobQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "74831656921e74f6b7d03aa1e46e1024",
    "id": null,
    "metadata": {},
    "name": "IcpmsIngestionJobsPageLatestParseJobQuery",
    "operationKind": "query",
    "text": "query IcpmsIngestionJobsPageLatestParseJobQuery(\n  $ingestionJobId: ID!\n) {\n  latestParseJobForIngestionJob(ingestionJobId: $ingestionJobId) {\n    id\n    status\n    totalSections\n    language\n    errorMessage\n  }\n}\n"
  }
};
})();

(node as any).hash = "17ab69a117dd66b7104f3d336365ccf4";

export default node;
