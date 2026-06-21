/**
 * @generated SignedSource<<27d901c86704bd7ab8b954275b8377c6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsDocumentsPageDeleteMutation$variables = {
  id: string;
};
export type IcpmsDocumentsPageDeleteMutation$data = {
  readonly deleteIcpmsDocument: boolean;
};
export type IcpmsDocumentsPageDeleteMutation = {
  response: IcpmsDocumentsPageDeleteMutation$data;
  variables: IcpmsDocumentsPageDeleteMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "kind": "ScalarField",
    "name": "deleteIcpmsDocument",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IcpmsDocumentsPageDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsDocumentsPageDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "beb88b60b5243fa73ac1ec9b40125b6f",
    "id": null,
    "metadata": {},
    "name": "IcpmsDocumentsPageDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsDocumentsPageDeleteMutation(\n  $id: ID!\n) {\n  deleteIcpmsDocument(id: $id)\n}\n"
  }
};
})();

(node as any).hash = "7377c5d0c75e7686048327f6d7860cc1";

export default node;
