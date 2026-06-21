/**
 * @generated SignedSource<<68744511e7019396ac229c31d93eebc9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type CookieSource = "EXTENSION" | "HTTP" | "PRE_EXISTING" | "SCRIPT";
import { FragmentRefs } from "relay-runtime";
export type DetectedTrackerRow_detectedTracker$data = {
  readonly id: string;
  readonly identifier: string;
  readonly initiatorUrl: string | null | undefined;
  readonly lastDetectedAt: string;
  readonly maxAgeSeconds: number | null | undefined;
  readonly source: CookieSource | null | undefined;
  readonly " $fragmentType": "DetectedTrackerRow_detectedTracker";
};
export type DetectedTrackerRow_detectedTracker$key = {
  readonly " $data"?: DetectedTrackerRow_detectedTracker$data;
  readonly " $fragmentSpreads": FragmentRefs<"DetectedTrackerRow_detectedTracker">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DetectedTrackerRow_detectedTracker",
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
      "name": "identifier",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "initiatorUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "maxAgeSeconds",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "source",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lastDetectedAt",
      "storageKey": null
    }
  ],
  "type": "DetectedTracker",
  "abstractKey": null
};

(node as any).hash = "a7e950d75f9f68d8f6d6184f77c1aba8";

export default node;
