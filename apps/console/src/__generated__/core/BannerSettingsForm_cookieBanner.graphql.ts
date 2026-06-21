/**
 * @generated SignedSource<<223c5e296f48320d608b50c9beff9251>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BannerSettingsForm_cookieBanner$data = {
  readonly consentExpiryDays: number;
  readonly cookiePolicyUrl: string;
  readonly defaultLanguage: string;
  readonly id: string;
  readonly name: string;
  readonly origin: string;
  readonly privacyPolicyUrl: string | null | undefined;
  readonly " $fragmentType": "BannerSettingsForm_cookieBanner";
};
export type BannerSettingsForm_cookieBanner$key = {
  readonly " $data"?: BannerSettingsForm_cookieBanner$data;
  readonly " $fragmentSpreads": FragmentRefs<"BannerSettingsForm_cookieBanner">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BannerSettingsForm_cookieBanner",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "origin",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cookiePolicyUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "privacyPolicyUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "consentExpiryDays",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "defaultLanguage",
      "storageKey": null
    }
  ],
  "type": "CookieBanner",
  "abstractKey": null
};

(node as any).hash = "ed911be682bea53b9668cb930ab2f466";

export default node;
