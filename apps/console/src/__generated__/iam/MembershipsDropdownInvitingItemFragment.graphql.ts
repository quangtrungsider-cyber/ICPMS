/**
 * @generated SignedSource<<19e9a0e33e9561abf34819bbc16cd459>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MembershipsDropdownInvitingItemFragment$data = {
  readonly name: string;
  readonly " $fragmentType": "MembershipsDropdownInvitingItemFragment";
};
export type MembershipsDropdownInvitingItemFragment$key = {
  readonly " $data"?: MembershipsDropdownInvitingItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MembershipsDropdownInvitingItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MembershipsDropdownInvitingItemFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Organization",
  "abstractKey": null
};

(node as any).hash = "48b02e3a69b628fa210a865af7a208d7";

export default node;
