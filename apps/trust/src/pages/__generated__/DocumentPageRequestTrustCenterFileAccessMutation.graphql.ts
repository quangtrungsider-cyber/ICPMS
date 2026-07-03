/**
 * @generated SignedSource<<3e26fa0ed883f4dffe42410504742113>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DocumentAccessStatus = "GRANTED" | "REJECTED" | "REQUESTED" | "REVOKED";
export type RequestTrustCenterFileAccessInput = {
  trustCenterFileId: string;
};
export type DocumentPageRequestTrustCenterFileAccessMutation$variables = {
  input: RequestTrustCenterFileAccessInput;
};
export type DocumentPageRequestTrustCenterFileAccessMutation$data = {
  readonly requestTrustCenterFileAccess: {
    readonly file: {
      readonly access: {
        readonly id: string;
        readonly status: DocumentAccessStatus;
      } | null | undefined;
    } | null | undefined;
  };
};
export type DocumentPageRequestTrustCenterFileAccessMutation = {
  response: DocumentPageRequestTrustCenterFileAccessMutation$data;
  variables: DocumentPageRequestTrustCenterFileAccessMutation$variables;
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "DocumentAccess",
  "kind": "LinkedField",
  "name": "access",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DocumentPageRequestTrustCenterFileAccessMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RequestFileAccessPayload",
        "kind": "LinkedField",
        "name": "requestTrustCenterFileAccess",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TrustCenterFile",
            "kind": "LinkedField",
            "name": "file",
            "plural": false,
            "selections": [
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentPageRequestTrustCenterFileAccessMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RequestFileAccessPayload",
        "kind": "LinkedField",
        "name": "requestTrustCenterFileAccess",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TrustCenterFile",
            "kind": "LinkedField",
            "name": "file",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9c90a6e49ab1591fa33c7aec2f296f90",
    "id": null,
    "metadata": {},
    "name": "DocumentPageRequestTrustCenterFileAccessMutation",
    "operationKind": "mutation",
    "text": "mutation DocumentPageRequestTrustCenterFileAccessMutation(\n  $input: RequestTrustCenterFileAccessInput!\n) {\n  requestTrustCenterFileAccess(input: $input) {\n    file {\n      access {\n        id\n        status\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8251f477a421ba7b4f8e707f454a7263";

export default node;
