/**
 * @generated SignedSource<<7877aa56905fee9ecd2f4d943b47b769>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsParseJobStatus = "COMPLETED" | "FAILED" | "PENDING" | "RUNNING";
export type IcpmsIngestionJobDetailPageLatestIcaoParseJobQuery$variables = {
  ingestionJobId: string;
};
export type IcpmsIngestionJobDetailPageLatestIcaoParseJobQuery$data = {
  readonly latestIcaoParseJobForIngestionJob: {
    readonly errorMessage: string | null | undefined;
    readonly id: string;
    readonly language: string;
    readonly status: IcpmsParseJobStatus;
    readonly totalSections: number;
  } | null | undefined;
};
export type IcpmsIngestionJobDetailPageLatestIcaoParseJobQuery = {
  response: IcpmsIngestionJobDetailPageLatestIcaoParseJobQuery$data;
  variables: IcpmsIngestionJobDetailPageLatestIcaoParseJobQuery$variables;
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
    "name": "IcpmsIngestionJobDetailPageLatestIcaoParseJobQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsIngestionJobDetailPageLatestIcaoParseJobQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8d1bff1930ea65017d9f70309b1ef28d",
    "id": null,
    "metadata": {},
    "name": "IcpmsIngestionJobDetailPageLatestIcaoParseJobQuery",
    "operationKind": "query",
    "text": "query IcpmsIngestionJobDetailPageLatestIcaoParseJobQuery(\n  $ingestionJobId: ID!\n) {\n  latestIcaoParseJobForIngestionJob(ingestionJobId: $ingestionJobId) {\n    id\n    status\n    totalSections\n    language\n    errorMessage\n  }\n}\n"
  }
};
})();

(node as any).hash = "7050e6b6b1fb657c15f0194e6d991f49";

export default node;
