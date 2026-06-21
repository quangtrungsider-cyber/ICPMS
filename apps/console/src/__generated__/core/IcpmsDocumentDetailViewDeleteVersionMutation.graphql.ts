/**
 * @generated SignedSource<<2dd87f7e5f75ee3a997a23a793578aba>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteIcpmsDocumentVersionInput = {
  id: string;
};
export type IcpmsDocumentDetailViewDeleteVersionMutation$variables = {
  input: DeleteIcpmsDocumentVersionInput;
};
export type IcpmsDocumentDetailViewDeleteVersionMutation$data = {
  readonly deleteIcpmsDocumentVersion: {
    readonly id: string;
  };
};
export type IcpmsDocumentDetailViewDeleteVersionMutation = {
  response: IcpmsDocumentDetailViewDeleteVersionMutation$data;
  variables: IcpmsDocumentDetailViewDeleteVersionMutation$variables;
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
    "concreteType": "DeleteIcpmsDocumentVersionPayload",
    "kind": "LinkedField",
    "name": "deleteIcpmsDocumentVersion",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
    "name": "IcpmsDocumentDetailViewDeleteVersionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsDocumentDetailViewDeleteVersionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7ff5ead9ccefddeb118ce157914088a1",
    "id": null,
    "metadata": {},
    "name": "IcpmsDocumentDetailViewDeleteVersionMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsDocumentDetailViewDeleteVersionMutation(\n  $input: DeleteIcpmsDocumentVersionInput!\n) {\n  deleteIcpmsDocumentVersion(input: $input) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "d37b4fab20bca3b0e0dc614dacc71cec";

export default node;
