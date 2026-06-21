/**
 * @generated SignedSource<<cc9802dd2d310cee326544a35d0762d9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type DocumentStatus = "ACTIVE" | "ARCHIVED";
import { FragmentRefs } from "relay-runtime";
export type DocumentActionsDropdown_documentFragment$data = {
  readonly canArchive: boolean;
  readonly canDelete: boolean;
  readonly canDeleteDraft: boolean;
  readonly canUnarchive: boolean;
  readonly id: string;
  readonly status: DocumentStatus;
  readonly " $fragmentType": "DocumentActionsDropdown_documentFragment";
};
export type DocumentActionsDropdown_documentFragment$key = {
  readonly " $data"?: DocumentActionsDropdown_documentFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DocumentActionsDropdown_documentFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DocumentActionsDropdown_documentFragment",
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
    },
    {
      "alias": "canDeleteDraft",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:document:delete-draft"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:document:delete-draft\")"
    }
  ],
  "type": "Document",
  "abstractKey": null
};

(node as any).hash = "194b3b1e74d74505601d3ee32fb98a7d";

export default node;
