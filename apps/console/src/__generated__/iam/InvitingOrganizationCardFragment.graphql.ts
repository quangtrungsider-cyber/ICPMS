/**
 * @generated SignedSource<<5c891f26939a8935f3a1fc465e9556b1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InvitingOrganizationCardFragment$data = {
  readonly name: string;
  readonly " $fragmentType": "InvitingOrganizationCardFragment";
};
export type InvitingOrganizationCardFragment$key = {
  readonly " $data"?: InvitingOrganizationCardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"InvitingOrganizationCardFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InvitingOrganizationCardFragment",
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

(node as any).hash = "68d7a3f50d1bbe6921faedf8cc2fabbe";

export default node;
