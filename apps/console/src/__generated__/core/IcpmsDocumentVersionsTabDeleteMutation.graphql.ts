/**
 * @generated SignedSource<<22bb4775a3edd129c7cacb7ad5c8bb55>>
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
export type IcpmsDocumentVersionsTabDeleteMutation$variables = {
  input: DeleteIcpmsDocumentVersionInput;
};
export type IcpmsDocumentVersionsTabDeleteMutation$data = {
  readonly deleteIcpmsDocumentVersion: {
    readonly id: string;
  };
};
export type IcpmsDocumentVersionsTabDeleteMutation = {
  response: IcpmsDocumentVersionsTabDeleteMutation$data;
  variables: IcpmsDocumentVersionsTabDeleteMutation$variables;
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
    "name": "IcpmsDocumentVersionsTabDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsDocumentVersionsTabDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2abb02bdd3eeb0d53d90a60c78eb84ba",
    "id": null,
    "metadata": {},
    "name": "IcpmsDocumentVersionsTabDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsDocumentVersionsTabDeleteMutation(\n  $input: DeleteIcpmsDocumentVersionInput!\n) {\n  deleteIcpmsDocumentVersion(input: $input) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "03b5b48412cef18b24e1c9c7e282e368";

export default node;
