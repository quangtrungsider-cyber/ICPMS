/**
 * @generated SignedSource<<6afd99f0a315343010a2d45972534c61>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DocumentStatus = "ACTIVE" | "ARCHIVED";
export type ArchiveDocumentInput = {
  documentId: string;
};
export type DocumentListItem_archiveMutation$variables = {
  input: ArchiveDocumentInput;
};
export type DocumentListItem_archiveMutation$data = {
  readonly archiveDocument: {
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
export type DocumentListItem_archiveMutation = {
  response: DocumentListItem_archiveMutation$data;
  variables: DocumentListItem_archiveMutation$variables;
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
    "concreteType": "ArchiveDocumentPayload",
    "kind": "LinkedField",
    "name": "archiveDocument",
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
    "name": "DocumentListItem_archiveMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentListItem_archiveMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d3721c68264d9b23f53f5530b7381af2",
    "id": null,
    "metadata": {},
    "name": "DocumentListItem_archiveMutation",
    "operationKind": "mutation",
    "text": "mutation DocumentListItem_archiveMutation(\n  $input: ArchiveDocumentInput!\n) {\n  archiveDocument(input: $input) {\n    document {\n      id\n      status\n      archivedAt\n      canArchive: permission(action: \"core:document:archive\")\n      canUnarchive: permission(action: \"core:document:unarchive\")\n      canDelete: permission(action: \"core:document:delete\")\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "bbec97c50f225adab6f8f31734325d9d";

export default node;
