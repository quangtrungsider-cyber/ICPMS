/**
 * @generated SignedSource<<ad307c078403506e10a660f1e98bb08d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DocumentAccessStatus = "GRANTED" | "REJECTED" | "REQUESTED" | "REVOKED";
export type RequestDocumentAccessInput = {
  documentId: string;
};
export type DocumentPageRequestDocumentAccessMutation$variables = {
  input: RequestDocumentAccessInput;
};
export type DocumentPageRequestDocumentAccessMutation$data = {
  readonly requestDocumentAccess: {
    readonly document: {
      readonly access: {
        readonly id: string;
        readonly status: DocumentAccessStatus;
      } | null | undefined;
    } | null | undefined;
  };
};
export type DocumentPageRequestDocumentAccessMutation = {
  response: DocumentPageRequestDocumentAccessMutation$data;
  variables: DocumentPageRequestDocumentAccessMutation$variables;
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
    "name": "DocumentPageRequestDocumentAccessMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RequestDocumentAccessPayload",
        "kind": "LinkedField",
        "name": "requestDocumentAccess",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Document",
            "kind": "LinkedField",
            "name": "document",
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
    "name": "DocumentPageRequestDocumentAccessMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RequestDocumentAccessPayload",
        "kind": "LinkedField",
        "name": "requestDocumentAccess",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Document",
            "kind": "LinkedField",
            "name": "document",
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
    "cacheID": "bc8c071502cb0e6a0dfb334a75f54b8d",
    "id": null,
    "metadata": {},
    "name": "DocumentPageRequestDocumentAccessMutation",
    "operationKind": "mutation",
    "text": "mutation DocumentPageRequestDocumentAccessMutation(\n  $input: RequestDocumentAccessInput!\n) {\n  requestDocumentAccess(input: $input) {\n    document {\n      access {\n        id\n        status\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ce6ff8a938eb050995955791f688a6a4";

export default node;
