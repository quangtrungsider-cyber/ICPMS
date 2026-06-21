/**
 * @generated SignedSource<<841227ee27ec89a9a5e5ab389a081eb5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DocumentStatus = "ACTIVE" | "ARCHIVED";
export type BulkUnarchiveDocumentsInput = {
  documentIds: ReadonlyArray<string>;
};
export type DocumentListBulkUnarchiveMutation$variables = {
  input: BulkUnarchiveDocumentsInput;
};
export type DocumentListBulkUnarchiveMutation$data = {
  readonly bulkUnarchiveDocuments: {
    readonly documents: ReadonlyArray<{
      readonly archivedAt: string | null | undefined;
      readonly canArchive: boolean;
      readonly canUnarchive: boolean;
      readonly canUpdate: boolean;
      readonly id: string;
      readonly status: DocumentStatus;
    }>;
  };
};
export type DocumentListBulkUnarchiveMutation = {
  response: DocumentListBulkUnarchiveMutation$data;
  variables: DocumentListBulkUnarchiveMutation$variables;
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
    "concreteType": "BulkUnarchiveDocumentsPayload",
    "kind": "LinkedField",
    "name": "bulkUnarchiveDocuments",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Document",
        "kind": "LinkedField",
        "name": "documents",
        "plural": true,
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
            "alias": "canUpdate",
            "args": [
              {
                "kind": "Literal",
                "name": "action",
                "value": "core:document:update"
              }
            ],
            "kind": "ScalarField",
            "name": "permission",
            "storageKey": "permission(action:\"core:document:update\")"
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
    "name": "DocumentListBulkUnarchiveMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentListBulkUnarchiveMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "28bae467ed5e406a4c3b38ea0b2f8cd1",
    "id": null,
    "metadata": {},
    "name": "DocumentListBulkUnarchiveMutation",
    "operationKind": "mutation",
    "text": "mutation DocumentListBulkUnarchiveMutation(\n  $input: BulkUnarchiveDocumentsInput!\n) {\n  bulkUnarchiveDocuments(input: $input) {\n    documents {\n      id\n      status\n      archivedAt\n      canUpdate: permission(action: \"core:document:update\")\n      canArchive: permission(action: \"core:document:archive\")\n      canUnarchive: permission(action: \"core:document:unarchive\")\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "bce4cacb55eb3ec4b87f2966808835a5";

export default node;
