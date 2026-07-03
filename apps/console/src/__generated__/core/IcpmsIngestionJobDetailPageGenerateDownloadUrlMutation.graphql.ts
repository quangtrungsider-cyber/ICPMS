/**
 * @generated SignedSource<<ca337160811dd621fe853a5cd5a830d0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type GenerateIcpmsDocumentFileDownloadUrlInput = {
  id: string;
};
export type IcpmsIngestionJobDetailPageGenerateDownloadUrlMutation$variables = {
  input: GenerateIcpmsDocumentFileDownloadUrlInput;
};
export type IcpmsIngestionJobDetailPageGenerateDownloadUrlMutation$data = {
  readonly generateIcpmsDocumentFileDownloadUrl: {
    readonly downloadUrl: string;
  };
};
export type IcpmsIngestionJobDetailPageGenerateDownloadUrlMutation = {
  response: IcpmsIngestionJobDetailPageGenerateDownloadUrlMutation$data;
  variables: IcpmsIngestionJobDetailPageGenerateDownloadUrlMutation$variables;
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
    "concreteType": "GenerateIcpmsDocumentFileDownloadUrlPayload",
    "kind": "LinkedField",
    "name": "generateIcpmsDocumentFileDownloadUrl",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "downloadUrl",
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
    "name": "IcpmsIngestionJobDetailPageGenerateDownloadUrlMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsIngestionJobDetailPageGenerateDownloadUrlMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "27a759c36e4d87a6b54cbfdc68eb3c8b",
    "id": null,
    "metadata": {},
    "name": "IcpmsIngestionJobDetailPageGenerateDownloadUrlMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsIngestionJobDetailPageGenerateDownloadUrlMutation(\n  $input: GenerateIcpmsDocumentFileDownloadUrlInput!\n) {\n  generateIcpmsDocumentFileDownloadUrl(input: $input) {\n    downloadUrl\n  }\n}\n"
  }
};
})();

(node as any).hash = "628141d3064959649252519f0fa47172";

export default node;
