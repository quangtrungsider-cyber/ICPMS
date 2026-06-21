/**
 * @generated SignedSource<<020723c6a04b33af44e85d6c99a84af0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type GenerateRequirementsFromParseJobInput = {
  parseJobId: string;
};
export type IcpmsRequirementsPageGenerateMutation$variables = {
  input: GenerateRequirementsFromParseJobInput;
};
export type IcpmsRequirementsPageGenerateMutation$data = {
  readonly generateRequirementsFromParseJob: {
    readonly requirementsCreated: number;
  };
};
export type IcpmsRequirementsPageGenerateMutation = {
  response: IcpmsRequirementsPageGenerateMutation$data;
  variables: IcpmsRequirementsPageGenerateMutation$variables;
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
    "concreteType": "GenerateRequirementsPayload",
    "kind": "LinkedField",
    "name": "generateRequirementsFromParseJob",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "requirementsCreated",
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
    "name": "IcpmsRequirementsPageGenerateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsRequirementsPageGenerateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5be1a21e5fd3f6704db97477c9410019",
    "id": null,
    "metadata": {},
    "name": "IcpmsRequirementsPageGenerateMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsRequirementsPageGenerateMutation(\n  $input: GenerateRequirementsFromParseJobInput!\n) {\n  generateRequirementsFromParseJob(input: $input) {\n    requirementsCreated\n  }\n}\n"
  }
};
})();

(node as any).hash = "4e6b6566cd61849789efd4df0443e237";

export default node;
