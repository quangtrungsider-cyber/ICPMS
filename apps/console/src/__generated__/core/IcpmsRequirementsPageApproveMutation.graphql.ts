/**
 * @generated SignedSource<<fe1910c958287d57363caa94526ba410>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsRequirementsPageApproveMutation$variables = {
  parseJobId: string;
};
export type IcpmsRequirementsPageApproveMutation$data = {
  readonly approveIcpmsRequirementsForParseJob: number;
};
export type IcpmsRequirementsPageApproveMutation = {
  response: IcpmsRequirementsPageApproveMutation$data;
  variables: IcpmsRequirementsPageApproveMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "parseJobId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "parseJobId",
        "variableName": "parseJobId"
      }
    ],
    "kind": "ScalarField",
    "name": "approveIcpmsRequirementsForParseJob",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IcpmsRequirementsPageApproveMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsRequirementsPageApproveMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3d62be55c4c0c2d590dddc31e46bb7fd",
    "id": null,
    "metadata": {},
    "name": "IcpmsRequirementsPageApproveMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsRequirementsPageApproveMutation(\n  $parseJobId: ID!\n) {\n  approveIcpmsRequirementsForParseJob(parseJobId: $parseJobId)\n}\n"
  }
};
})();

(node as any).hash = "4c23f44e5bef557b95fc51a28691f707";

export default node;
