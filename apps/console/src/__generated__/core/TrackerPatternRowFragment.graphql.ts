/**
 * @generated SignedSource<<575771a0315cb37b6d7f70ed9dd3ef25>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type CookieSource = "EXTENSION" | "HTTP" | "PRE_EXISTING" | "SCRIPT";
export type TrackerType = "CACHE_STORAGE" | "COOKIE" | "INDEXED_DB" | "LOCAL_STORAGE" | "SESSION_STORAGE";
import { FragmentRefs } from "relay-runtime";
export type TrackerPatternRowFragment$data = {
  readonly commonThirdParty: {
    readonly id: string;
    readonly name: string;
  } | null | undefined;
  readonly cookieCategory: {
    readonly id: string;
    readonly name: string;
  } | null | undefined;
  readonly description: string;
  readonly displayName: string;
  readonly excluded: boolean;
  readonly id: string;
  readonly lastMatchedAt: string | null | undefined;
  readonly maxAgeSeconds: number | null | undefined;
  readonly source: CookieSource | null | undefined;
  readonly thirdParty: {
    readonly id: string;
    readonly name: string;
  } | null | undefined;
  readonly trackerType: TrackerType;
  readonly " $fragmentType": "TrackerPatternRowFragment";
};
export type TrackerPatternRowFragment$key = {
  readonly " $data"?: TrackerPatternRowFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TrackerPatternRowFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  (v0/*: any*/),
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
  "name": "TrackerPatternRowFragment",
  "selections": [
    (v0/*: any*/),
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
      "name": "displayName",
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
      "name": "description",
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
      "name": "excluded",
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
      "concreteType": "CookieCategory",
      "kind": "LinkedField",
      "name": "cookieCategory",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ThirdParty",
      "kind": "LinkedField",
      "name": "thirdParty",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "CommonThirdParty",
      "kind": "LinkedField",
      "name": "commonThirdParty",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    }
  ],
  "type": "TrackerPattern",
  "abstractKey": null
};
})();

(node as any).hash = "ec62ecafcce911889ba00fc3984bedca";

export default node;
