/**
 * @generated SignedSource<<27390965dead611ee5fa733c52b57c7a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsParseJobStatus = "COMPLETED" | "FAILED" | "PENDING" | "RUNNING";
export type IcpmsIngestionJobDetailPageLatestParseJobQuery$variables = {
  ingestionJobId: string;
};
export type IcpmsIngestionJobDetailPageLatestParseJobQuery$data = {
  readonly latestParseJobForIngestionJob: {
    readonly errorMessage: string | null | undefined;
    readonly id: string;
    readonly language: string;
    readonly status: IcpmsParseJobStatus;
    readonly totalSections: number;
  } | null | undefined;
};
export type IcpmsIngestionJobDetailPageLatestParseJobQuery = {
  response: IcpmsIngestionJobDetailPageLatestParseJobQuery$data;
  variables: IcpmsIngestionJobDetailPageLatestParseJobQuery$variables;
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
    "name": "IcpmsIngestionJobDetailPageLatestParseJobQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsIngestionJobDetailPageLatestParseJobQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "fbf0c3f3f799bd63530832bb61fa3168",
    "id": null,
    "metadata": {},
    "name": "IcpmsIngestionJobDetailPageLatestParseJobQuery",
    "operationKind": "query",
    "text": "query IcpmsIngestionJobDetailPageLatestParseJobQuery(\n  $ingestionJobId: ID!\n) {\n  latestParseJobForIngestionJob(ingestionJobId: $ingestionJobId) {\n    id\n    status\n    totalSections\n    language\n    errorMessage\n  }\n}\n"
  }
};
})();

(node as any).hash = "10870a8e24473f0f752115c7908ed4fd";

export default node;
