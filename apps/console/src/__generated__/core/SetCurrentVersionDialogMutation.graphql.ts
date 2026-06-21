/**
 * @generated SignedSource<<b5128594801f621528a06647a091bd86>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsDocumentVersionStatus = "ARCHIVED" | "CURRENT" | "DELETED" | "DRAFT" | "EFFECTIVE" | "EXPIRED" | "SUPERSEDED";
export type SetIcpmsDocumentVersionCurrentInput = {
  id: string;
};
export type SetCurrentVersionDialogMutation$variables = {
  input: SetIcpmsDocumentVersionCurrentInput;
};
export type SetCurrentVersionDialogMutation$data = {
  readonly setIcpmsDocumentVersionCurrent: {
    readonly version: {
      readonly id: string;
      readonly isCurrent: boolean;
      readonly status: IcpmsDocumentVersionStatus;
    };
  };
};
export type SetCurrentVersionDialogMutation = {
  response: SetCurrentVersionDialogMutation$data;
  variables: SetCurrentVersionDialogMutation$variables;
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
    "concreteType": "SetIcpmsDocumentVersionCurrentPayload",
    "kind": "LinkedField",
    "name": "setIcpmsDocumentVersionCurrent",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsDocumentVersion",
        "kind": "LinkedField",
        "name": "version",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "status",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isCurrent",
            "storageKey": null
          }
        ],
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
    "name": "SetCurrentVersionDialogMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SetCurrentVersionDialogMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2b43598590f589c52f52e9123427286e",
    "id": null,
    "metadata": {},
    "name": "SetCurrentVersionDialogMutation",
    "operationKind": "mutation",
    "text": "mutation SetCurrentVersionDialogMutation(\n  $input: SetIcpmsDocumentVersionCurrentInput!\n) {\n  setIcpmsDocumentVersionCurrent(input: $input) {\n    version {\n      id\n      status\n      isCurrent\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "03455ba186981e9406a7369d1840c479";

export default node;
