/**
 * @generated SignedSource<<a8bac9473aa84283b28668fe0aec2300>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type CookieSource = "EXTENSION" | "HTTP" | "PRE_EXISTING" | "SCRIPT";
export type TrackerPatternMatchType = "EXACT" | "GLOB";
export type TrackerType = "CACHE_STORAGE" | "COOKIE" | "INDEXED_DB" | "LOCAL_STORAGE" | "SESSION_STORAGE";
import { FragmentRefs } from "relay-runtime";
export type TrackerPatternPropertiesSection_trackerPattern$data = {
  readonly commonThirdParty: {
    readonly name: string;
  } | null | undefined;
  readonly commonTrackerPatternId: string | null | undefined;
  readonly cookieCategory: {
    readonly name: string;
  } | null | undefined;
  readonly description: string;
  readonly detectedCount: number;
  readonly excluded: boolean;
  readonly lastMatchedAt: string | null | undefined;
  readonly matchType: TrackerPatternMatchType;
  readonly maxAgeSeconds: number | null | undefined;
  readonly pattern: string;
  readonly source: CookieSource | null | undefined;
  readonly thirdParty: {
    readonly name: string;
  } | null | undefined;
  readonly trackerType: TrackerType;
  readonly " $fragmentType": "TrackerPatternPropertiesSection_trackerPattern";
};
export type TrackerPatternPropertiesSection_trackerPattern$key = {
  readonly " $data"?: TrackerPatternPropertiesSection_trackerPattern$data;
  readonly " $fragmentSpreads": FragmentRefs<"TrackerPatternPropertiesSection_trackerPattern">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TrackerPatternPropertiesSection_trackerPattern",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "pattern",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "matchType",
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
      "name": "source",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "detectedCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lastMatchedAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "commonTrackerPatternId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "CookieCategory",
      "kind": "LinkedField",
      "name": "cookieCategory",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ThirdParty",
      "kind": "LinkedField",
      "name": "thirdParty",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "CommonThirdParty",
      "kind": "LinkedField",
      "name": "commonThirdParty",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    }
  ],
  "type": "TrackerPattern",
  "abstractKey": null
};
})();

(node as any).hash = "dceb44a91747449db6e0b708b9cfc23d";

export default node;
