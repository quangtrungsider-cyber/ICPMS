/**
 * @generated SignedSource<<a7c284efa80669c6b6f7397cd66a0027>>
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
export type DocumentActionsDropdown_archiveMutation$variables = {
  input: ArchiveDocumentInput;
};
export type DocumentActionsDropdown_archiveMutation$data = {
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
export type DocumentActionsDropdown_archiveMutation = {
  response: DocumentActionsDropdown_archiveMutation$data;
  variables: DocumentActionsDropdown_archiveMutation$variables;
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
    "name": "DocumentActionsDropdown_archiveMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentActionsDropdown_archiveMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "725b1b6b0e6e9414d45cba2654d4c429",
    "id": null,
    "metadata": {},
    "name": "DocumentActionsDropdown_archiveMutation",
    "operationKind": "mutation",
    "text": "mutation DocumentActionsDropdown_archiveMutation(\n  $input: ArchiveDocumentInput!\n) {\n  archiveDocument(input: $input) {\n    document {\n      id\n      status\n      archivedAt\n      canArchive: permission(action: \"core:document:archive\")\n      canUnarchive: permission(action: \"core:document:unarchive\")\n      canDelete: permission(action: \"core:document:delete\")\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b629fa2e728f115edf3ddec1386df86e";

export default node;
