/**
 * @generated SignedSource<<f3405501a155ef62d597376492eaa624>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsRequirementsPageDeleteOneMutation$variables = {
  id: string;
};
export type IcpmsRequirementsPageDeleteOneMutation$data = {
  readonly deleteIcpmsRequirement: boolean;
};
export type IcpmsRequirementsPageDeleteOneMutation = {
  response: IcpmsRequirementsPageDeleteOneMutation$data;
  variables: IcpmsRequirementsPageDeleteOneMutation$variables;
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
    "name": "deleteIcpmsRequirement",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IcpmsRequirementsPageDeleteOneMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsRequirementsPageDeleteOneMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "351492bd4ca54eb314968e9cd2a602af",
    "id": null,
    "metadata": {},
    "name": "IcpmsRequirementsPageDeleteOneMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsRequirementsPageDeleteOneMutation(\n  $id: ID!\n) {\n  deleteIcpmsRequirement(id: $id)\n}\n"
  }
};
})();

(node as any).hash = "ca614eeb244c1e20885a64f49519490b";

export default node;
