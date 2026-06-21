/**
 * @generated SignedSource<<487593d4efaa64b6aaeba71ed94e2ae7>>
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
export type IcpmsDocumentVersionsTabGenerateDownloadUrlMutation$variables = {
  input: GenerateIcpmsDocumentFileDownloadUrlInput;
};
export type IcpmsDocumentVersionsTabGenerateDownloadUrlMutation$data = {
  readonly generateIcpmsDocumentFileDownloadUrl: {
    readonly downloadUrl: string;
  };
};
export type IcpmsDocumentVersionsTabGenerateDownloadUrlMutation = {
  response: IcpmsDocumentVersionsTabGenerateDownloadUrlMutation$data;
  variables: IcpmsDocumentVersionsTabGenerateDownloadUrlMutation$variables;
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
    "name": "IcpmsDocumentVersionsTabGenerateDownloadUrlMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsDocumentVersionsTabGenerateDownloadUrlMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0d806ae050da2940b482e1a308e1f0c9",
    "id": null,
    "metadata": {},
    "name": "IcpmsDocumentVersionsTabGenerateDownloadUrlMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsDocumentVersionsTabGenerateDownloadUrlMutation(\n  $input: GenerateIcpmsDocumentFileDownloadUrlInput!\n) {\n  generateIcpmsDocumentFileDownloadUrl(input: $input) {\n    downloadUrl\n  }\n}\n"
  }
};
})();

(node as any).hash = "96f91d0cbf165b7325033ec662745080";

export default node;
