/**
 * @generated SignedSource<<69278de3ade8e5078bfd8a5568d76c2b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type DocumentVersionStatus = "DRAFT" | "PENDING_APPROVAL" | "PUBLISHED";
import { FragmentRefs } from "relay-runtime";
export type DocumentTitleFormFragment$data = {
  readonly canUpdate: boolean;
  readonly status: DocumentVersionStatus;
  readonly title: string;
  readonly " $fragmentType": "DocumentTitleFormFragment";
};
export type DocumentTitleFormFragment$key = {
  readonly " $data"?: DocumentTitleFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DocumentTitleFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DocumentTitleFormFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
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
    }
  ],
  "type": "DocumentVersion",
  "abstractKey": null
};

(node as any).hash = "9e6052cf7bbb9a40d1fe661af6e57f17";

export default node;
