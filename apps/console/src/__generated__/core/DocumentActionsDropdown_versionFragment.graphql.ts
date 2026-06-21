/**
 * @generated SignedSource<<02840f3beef953e6bb490ed4700ddb4e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type DocumentVersionStatus = "DRAFT" | "PENDING_APPROVAL" | "PUBLISHED";
import { FragmentRefs } from "relay-runtime";
export type DocumentActionsDropdown_versionFragment$data = {
  readonly id: string;
  readonly major: number;
  readonly minor: number;
  readonly status: DocumentVersionStatus;
  readonly title: string;
  readonly " $fragmentType": "DocumentActionsDropdown_versionFragment";
};
export type DocumentActionsDropdown_versionFragment$key = {
  readonly " $data"?: DocumentActionsDropdown_versionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DocumentActionsDropdown_versionFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DocumentActionsDropdown_versionFragment",
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
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "major",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "minor",
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
  "type": "DocumentVersion",
  "abstractKey": null
};

(node as any).hash = "990934d8708fad06c7e17412b1bc98d2";

export default node;
