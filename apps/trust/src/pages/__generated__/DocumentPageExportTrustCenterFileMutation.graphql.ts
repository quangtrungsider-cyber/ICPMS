/**
 * @generated SignedSource<<c774741fd21d2b91e80af6881cc2a21f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ExportTrustCenterFileInput = {
  trustCenterFileId: string;
};
export type DocumentPageExportTrustCenterFileMutation$variables = {
  input: ExportTrustCenterFileInput;
};
export type DocumentPageExportTrustCenterFileMutation$data = {
  readonly exportTrustCenterFile: {
    readonly data: string;
  };
};
export type DocumentPageExportTrustCenterFileMutation = {
  response: DocumentPageExportTrustCenterFileMutation$data;
  variables: DocumentPageExportTrustCenterFileMutation$variables;
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
    "concreteType": "ExportTrustCenterFilePayload",
    "kind": "LinkedField",
    "name": "exportTrustCenterFile",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "data",
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
    "name": "DocumentPageExportTrustCenterFileMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentPageExportTrustCenterFileMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d6a1fdf028d41c413f9503f2d41194a9",
    "id": null,
    "metadata": {},
    "name": "DocumentPageExportTrustCenterFileMutation",
    "operationKind": "mutation",
    "text": "mutation DocumentPageExportTrustCenterFileMutation(\n  $input: ExportTrustCenterFileInput!\n) {\n  exportTrustCenterFile(input: $input) {\n    data\n  }\n}\n"
  }
};
})();

(node as any).hash = "ddb645d2d8b42202813077c477d4facc";

export default node;
