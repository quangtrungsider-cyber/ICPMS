/**
 * @generated SignedSource<<2704ffab399defb1b2bc9b53a09b3055>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsRequirementsPageDeleteVersionMutation$variables = {
  documentVersionId: string;
};
export type IcpmsRequirementsPageDeleteVersionMutation$data = {
  readonly deleteIcpmsRequirementsForVersion: number;
};
export type IcpmsRequirementsPageDeleteVersionMutation = {
  response: IcpmsRequirementsPageDeleteVersionMutation$data;
  variables: IcpmsRequirementsPageDeleteVersionMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "documentVersionId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "documentVersionId",
        "variableName": "documentVersionId"
      }
    ],
    "kind": "ScalarField",
    "name": "deleteIcpmsRequirementsForVersion",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IcpmsRequirementsPageDeleteVersionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsRequirementsPageDeleteVersionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "68d88df1f365c8d124d0cea88bb66f1d",
    "id": null,
    "metadata": {},
    "name": "IcpmsRequirementsPageDeleteVersionMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsRequirementsPageDeleteVersionMutation(\n  $documentVersionId: ID!\n) {\n  deleteIcpmsRequirementsForVersion(documentVersionId: $documentVersionId)\n}\n"
  }
};
})();

(node as any).hash = "fce8fc94f94f163d73613bdec92842f1";

export default node;
