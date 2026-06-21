/**
 * @generated SignedSource<<a26c23ceaa61a0b7b392d96c09785910>>
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
export type DocumentListItem_unarchiveMutation$variables = {
  input: UnarchiveDocumentInput;
};
export type DocumentListItem_unarchiveMutation$data = {
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
export type DocumentListItem_unarchiveMutation = {
  response: DocumentListItem_unarchiveMutation$data;
  variables: DocumentListItem_unarchiveMutation$variables;
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
    "name": "DocumentListItem_unarchiveMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentListItem_unarchiveMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5b2cdfe36f7ad4d32cf8a202fb53ae6d",
    "id": null,
    "metadata": {},
    "name": "DocumentListItem_unarchiveMutation",
    "operationKind": "mutation",
    "text": "mutation DocumentListItem_unarchiveMutation(\n  $input: UnarchiveDocumentInput!\n) {\n  unarchiveDocument(input: $input) {\n    document {\n      id\n      status\n      archivedAt\n      canArchive: permission(action: \"core:document:archive\")\n      canUnarchive: permission(action: \"core:document:unarchive\")\n      canDelete: permission(action: \"core:document:delete\")\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2a627fa485a33959da5a7f3d2eccf31e";

export default node;
