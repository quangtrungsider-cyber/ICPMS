/**
 * @generated SignedSource<<3b47febdd3b4020c5e018365564e1bb1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteIcpmsChecklistInput = {
  id: string;
};
export type IcpmsChecklistPageDeleteMutation$variables = {
  input: DeleteIcpmsChecklistInput;
};
export type IcpmsChecklistPageDeleteMutation$data = {
  readonly deleteIcpmsChecklist: {
    readonly deletedChecklistId: string;
  };
};
export type IcpmsChecklistPageDeleteMutation = {
  response: IcpmsChecklistPageDeleteMutation$data;
  variables: IcpmsChecklistPageDeleteMutation$variables;
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
    "concreteType": "DeleteIcpmsChecklistPayload",
    "kind": "LinkedField",
    "name": "deleteIcpmsChecklist",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedChecklistId",
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
    "name": "IcpmsChecklistPageDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsChecklistPageDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0bf8e269d709472b5bf7fbd470c39ba6",
    "id": null,
    "metadata": {},
    "name": "IcpmsChecklistPageDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsChecklistPageDeleteMutation(\n  $input: DeleteIcpmsChecklistInput!\n) {\n  deleteIcpmsChecklist(input: $input) {\n    deletedChecklistId\n  }\n}\n"
  }
};
})();

(node as any).hash = "2d0c8caede7f037ddfcb5d3d1ea01edd";

export default node;
