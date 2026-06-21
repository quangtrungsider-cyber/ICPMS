/**
 * @generated SignedSource<<3bca8f40cb075dac54b6bc3bf49a5dca>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type DocumentVersionStatus = "DRAFT" | "PENDING_APPROVAL" | "PUBLISHED";
import { FragmentRefs } from "relay-runtime";
export type DocumentVersionsDropdownItemFragment$data = {
  readonly id: string;
  readonly major: number;
  readonly minor: number;
  readonly publishedAt: string | null | undefined;
  readonly status: DocumentVersionStatus;
  readonly updatedAt: string;
  readonly " $fragmentType": "DocumentVersionsDropdownItemFragment";
};
export type DocumentVersionsDropdownItemFragment$key = {
  readonly " $data"?: DocumentVersionsDropdownItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DocumentVersionsDropdownItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DocumentVersionsDropdownItemFragment",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "publishedAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "updatedAt",
      "storageKey": null
    }
  ],
  "type": "DocumentVersion",
  "abstractKey": null
};

(node as any).hash = "5d7fa8c4962d788cc6f7301ed8e5f663";

export default node;
