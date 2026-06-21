/**
 * @generated SignedSource<<cc863a9eb9afb48c902d15b60ff78eb2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DocumentStatus = "ACTIVE" | "ARCHIVED";
export type DeleteDocumentDraftInput = {
  documentId: string;
};
export type DocumentActionsDropdown_deleteDocumentDraftMutation$variables = {
  input: DeleteDocumentDraftInput;
};
export type DocumentActionsDropdown_deleteDocumentDraftMutation$data = {
  readonly deleteDocumentDraft: {
    readonly document: {
      readonly id: string;
      readonly status: DocumentStatus;
    };
  };
};
export type DocumentActionsDropdown_deleteDocumentDraftMutation = {
  response: DocumentActionsDropdown_deleteDocumentDraftMutation$data;
  variables: DocumentActionsDropdown_deleteDocumentDraftMutation$variables;
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
    "concreteType": "DeleteDocumentDraftPayload",
    "kind": "LinkedField",
    "name": "deleteDocumentDraft",
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
    "name": "DocumentActionsDropdown_deleteDocumentDraftMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentActionsDropdown_deleteDocumentDraftMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "da2018122bb70a17b07d6fdf863e4f68",
    "id": null,
    "metadata": {},
    "name": "DocumentActionsDropdown_deleteDocumentDraftMutation",
    "operationKind": "mutation",
    "text": "mutation DocumentActionsDropdown_deleteDocumentDraftMutation(\n  $input: DeleteDocumentDraftInput!\n) {\n  deleteDocumentDraft(input: $input) {\n    document {\n      id\n      status\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7fc10ff6b93ffefabe4874e631889c15";

export default node;
