/**
 * @generated SignedSource<<2061a2932daae859ed185ff917c9dca2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsRequirementsPageDeleteDocMutation$variables = {
  documentId: string;
};
export type IcpmsRequirementsPageDeleteDocMutation$data = {
  readonly deleteIcpmsRequirementsForDocument: number;
};
export type IcpmsRequirementsPageDeleteDocMutation = {
  response: IcpmsRequirementsPageDeleteDocMutation$data;
  variables: IcpmsRequirementsPageDeleteDocMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "documentId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "documentId",
        "variableName": "documentId"
      }
    ],
    "kind": "ScalarField",
    "name": "deleteIcpmsRequirementsForDocument",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IcpmsRequirementsPageDeleteDocMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsRequirementsPageDeleteDocMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "43ca597fc6aa7cbd8779ae5df9ff8f44",
    "id": null,
    "metadata": {},
    "name": "IcpmsRequirementsPageDeleteDocMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsRequirementsPageDeleteDocMutation(\n  $documentId: ID!\n) {\n  deleteIcpmsRequirementsForDocument(documentId: $documentId)\n}\n"
  }
};
})();

(node as any).hash = "032d8dc1c23891142d94b5f87ee06384";

export default node;
