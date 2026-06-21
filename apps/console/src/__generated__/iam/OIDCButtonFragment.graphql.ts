/**
 * @generated SignedSource<<567940f6e805d0b842b424ec418d8e51>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OIDCButtonFragment$data = {
  readonly loginURL: string;
  readonly name: string;
  readonly " $fragmentType": "OIDCButtonFragment";
};
export type OIDCButtonFragment$key = {
  readonly " $data"?: OIDCButtonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"OIDCButtonFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OIDCButtonFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "loginURL",
      "storageKey": null
    }
  ],
  "type": "OIDCProviderInfo",
  "abstractKey": null
};

(node as any).hash = "330211523d601baa1edbf6058d6baaf1";

export default node;
