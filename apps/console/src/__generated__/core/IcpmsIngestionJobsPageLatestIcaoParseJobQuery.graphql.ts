/**
 * @generated SignedSource<<9d93e362a7411a5604d54ca15215ec5e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsParseJobStatus = "COMPLETED" | "FAILED" | "PENDING" | "RUNNING";
export type IcpmsIngestionJobsPageLatestIcaoParseJobQuery$variables = {
  ingestionJobId: string;
};
export type IcpmsIngestionJobsPageLatestIcaoParseJobQuery$data = {
  readonly latestIcaoParseJobForIngestionJob: {
    readonly errorMessage: string | null | undefined;
    readonly id: string;
    readonly language: string;
    readonly status: IcpmsParseJobStatus;
    readonly totalSections: number;
  } | null | undefined;
};
export type IcpmsIngestionJobsPageLatestIcaoParseJobQuery = {
  response: IcpmsIngestionJobsPageLatestIcaoParseJobQuery$data;
  variables: IcpmsIngestionJobsPageLatestIcaoParseJobQuery$variables;
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
    "name": "latestIcaoParseJobForIngestionJob",
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
    "name": "IcpmsIngestionJobsPageLatestIcaoParseJobQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsIngestionJobsPageLatestIcaoParseJobQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "dd561f42ca529c02492f15dc5b4783a6",
    "id": null,
    "metadata": {},
    "name": "IcpmsIngestionJobsPageLatestIcaoParseJobQuery",
    "operationKind": "query",
    "text": "query IcpmsIngestionJobsPageLatestIcaoParseJobQuery(\n  $ingestionJobId: ID!\n) {\n  latestIcaoParseJobForIngestionJob(ingestionJobId: $ingestionJobId) {\n    id\n    status\n    totalSections\n    language\n    errorMessage\n  }\n}\n"
  }
};
})();

(node as any).hash = "53968313ed9eff0a352159ed242d7e95";

export default node;
