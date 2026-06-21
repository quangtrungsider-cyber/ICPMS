/**
 * @generated SignedSource<<575a6db51d5c82704d845557806b08d5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DocumentStatus = "ACTIVE" | "ARCHIVED";
export type UnarchiveDocumentInput = {
  documentId: string;
};
export type DocumentActionsDropdown_unarchiveMutation$variables = {
  input: UnarchiveDocumentInput;
};
export type DocumentActionsDropdown_unarchiveMutation$data = {
  readonly unarchiveDocument: {
    readonly document: {
      readonly archivedAt: string | null | undefined;
      readonly canArchive: boolean;
      readonly canDelete: boolean;
      readonly canUnarchive: boolean;
      readonly id: string;
      readonly status: DocumentStatus;
    };
  };
};
export type DocumentActionsDropdown_unarchiveMutation = {
  response: DocumentActionsDropdown_unarchiveMutation$data;
  variables: DocumentActionsDropdown_unarchiveMutation$variables;
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
    "concreteType": "UnarchiveDocumentPayload",
    "kind": "LinkedField",
    "name": "unarchiveDocument",
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
            "name": "archivedAt",
            "storageKey": null
          },
          {
            "alias": "canArchive",
            "args": [
              {
                "kind": "Literal",
                "name": "action",
                "value": "core:document:archive"
              }
            ],
            "kind": "ScalarField",
            "name": "permission",
            "storageKey": "permission(action:\"core:document:archive\")"
          },
          {
            "alias": "canUnarchive",
            "args": [
              {
                "kind": "Literal",
                "name": "action",
                "value": "core:document:unarchive"
              }
            ],
            "kind": "ScalarField",
            "name": "permission",
            "storageKey": "permission(action:\"core:document:unarchive\")"
          },
          {
            "alias": "canDelete",
            "args": [
              {
                "kind": "Literal",
                "name": "action",
                "value": "core:document:delete"
              }
            ],
            "kind": "ScalarField",
            "name": "permission",
            "storageKey": "permission(action:\"core:document:delete\")"
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
    "name": "DocumentActionsDropdown_unarchiveMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentActionsDropdown_unarchiveMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e9762c80aa8f76befefc94b9c35e28e2",
    "id": null,
    "metadata": {},
    "name": "DocumentActionsDropdown_unarchiveMutation",
    "operationKind": "mutation",
    "text": "mutation DocumentActionsDropdown_unarchiveMutation(\n  $input: UnarchiveDocumentInput!\n) {\n  unarchiveDocument(input: $input) {\n    document {\n      id\n      status\n      archivedAt\n      canArchive: permission(action: \"core:document:archive\")\n      canUnarchive: permission(action: \"core:document:unarchive\")\n      canDelete: permission(action: \"core:document:delete\")\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "66f7b51de8f272a68b306e5691ef94ae";

export default node;
