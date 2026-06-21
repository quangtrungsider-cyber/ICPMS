/**
 * @generated SignedSource<<b218620ca725c39d1154c168f8122dcb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DocumentStatus = "ACTIVE" | "ARCHIVED";
export type BulkArchiveDocumentsInput = {
  documentIds: ReadonlyArray<string>;
};
export type DocumentListBulkArchiveMutation$variables = {
  input: BulkArchiveDocumentsInput;
};
export type DocumentListBulkArchiveMutation$data = {
  readonly bulkArchiveDocuments: {
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
export type DocumentListBulkArchiveMutation = {
  response: DocumentListBulkArchiveMutation$data;
  variables: DocumentListBulkArchiveMutation$variables;
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
    "concreteType": "BulkArchiveDocumentsPayload",
    "kind": "LinkedField",
    "name": "bulkArchiveDocuments",
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
    "name": "DocumentListBulkArchiveMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentListBulkArchiveMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4698979fc12a8d90ec78661274d60c71",
    "id": null,
    "metadata": {},
    "name": "DocumentListBulkArchiveMutation",
    "operationKind": "mutation",
    "text": "mutation DocumentListBulkArchiveMutation(\n  $input: BulkArchiveDocumentsInput!\n) {\n  bulkArchiveDocuments(input: $input) {\n    documents {\n      id\n      status\n      archivedAt\n      canUpdate: permission(action: \"core:document:update\")\n      canArchive: permission(action: \"core:document:archive\")\n      canUnarchive: permission(action: \"core:document:unarchive\")\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "059608deeeee19eca83460a58add2e63";

export default node;
