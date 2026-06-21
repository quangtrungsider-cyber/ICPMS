/**
 * @generated SignedSource<<4c666f6363cefec53c9bd52e89201f00>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ThemePreview_cookieBanner$data = {
  readonly showBranding: boolean;
  readonly " $fragmentType": "ThemePreview_cookieBanner";
};
export type ThemePreview_cookieBanner$key = {
  readonly " $data"?: ThemePreview_cookieBanner$data;
  readonly " $fragmentSpreads": FragmentRefs<"ThemePreview_cookieBanner">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ThemePreview_cookieBanner",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "showBranding",
      "storageKey": null
    }
  ],
  "type": "CookieBanner",
  "abstractKey": null
};

(node as any).hash = "bb5c391393072f7faf22f61f25ef2df2";

export default node;
