/**
 * @generated SignedSource<<1da86204e5c01f144894580baf108752>>
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
export type IcpmsDocumentDetailViewGenerateDownloadUrlMutation$variables = {
  input: GenerateIcpmsDocumentFileDownloadUrlInput;
};
export type IcpmsDocumentDetailViewGenerateDownloadUrlMutation$data = {
  readonly generateIcpmsDocumentFileDownloadUrl: {
    readonly downloadUrl: string;
  };
};
export type IcpmsDocumentDetailViewGenerateDownloadUrlMutation = {
  response: IcpmsDocumentDetailViewGenerateDownloadUrlMutation$data;
  variables: IcpmsDocumentDetailViewGenerateDownloadUrlMutation$variables;
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
    "name": "IcpmsDocumentDetailViewGenerateDownloadUrlMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsDocumentDetailViewGenerateDownloadUrlMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6a445f5cca1f338a65f8aab10298afba",
    "id": null,
    "metadata": {},
    "name": "IcpmsDocumentDetailViewGenerateDownloadUrlMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsDocumentDetailViewGenerateDownloadUrlMutation(\n  $input: GenerateIcpmsDocumentFileDownloadUrlInput!\n) {\n  generateIcpmsDocumentFileDownloadUrl(input: $input) {\n    downloadUrl\n  }\n}\n"
  }
};
})();

(node as any).hash = "1725c42e77e194889390b94eaeacf644";

export default node;
