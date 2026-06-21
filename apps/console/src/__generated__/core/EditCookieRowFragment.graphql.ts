/**
 * @generated SignedSource<<f20dcfeb15e4ae58b0641470a761962a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type TrackerType = "CACHE_STORAGE" | "COOKIE" | "INDEXED_DB" | "LOCAL_STORAGE" | "SESSION_STORAGE";
import { FragmentRefs } from "relay-runtime";
export type EditCookieRowFragment$data = {
  readonly description: string;
  readonly displayName: string;
  readonly excluded: boolean;
  readonly maxAgeSeconds: number | null | undefined;
  readonly trackerType: TrackerType;
  readonly " $fragmentType": "EditCookieRowFragment";
};
export type EditCookieRowFragment$key = {
  readonly " $data"?: EditCookieRowFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EditCookieRowFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EditCookieRowFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "displayName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "trackerType",
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
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "excluded",
      "storageKey": null
    }
  ],
  "type": "TrackerPattern",
  "abstractKey": null
};

(node as any).hash = "d9a932c92c002d8ab12cfd88e1dd5db7";

export default node;
