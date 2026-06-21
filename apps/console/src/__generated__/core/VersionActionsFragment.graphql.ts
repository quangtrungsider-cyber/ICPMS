/**
 * @generated SignedSource<<a74d45bb1c3850d6850ab657b4f9c8de>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VersionActionsFragment$data = {
  readonly id: string;
  readonly signed: boolean;
  readonly " $fragmentType": "VersionActionsFragment";
};
export type VersionActionsFragment$key = {
  readonly " $data"?: VersionActionsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"VersionActionsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "VersionActionsFragment",
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
      "name": "signed",
      "storageKey": null
    }
  ],
  "type": "EmployeeDocumentVersion",
  "abstractKey": null
};

(node as any).hash = "7325841234eb9dfabc5e9f2c6500c2a9";

export default node;
