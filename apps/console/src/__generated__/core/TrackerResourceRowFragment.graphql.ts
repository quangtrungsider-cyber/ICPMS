/**
 * @generated SignedSource<<6b03739df975b611c332882e6b842582>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type TrackerResourceType = "BEACON" | "FETCH" | "FONT" | "IFRAME" | "IMAGE" | "MEDIA" | "SCRIPT" | "SERVICE_WORKER" | "STYLESHEET";
import { FragmentRefs } from "relay-runtime";
export type TrackerResourceRowFragment$data = {
  readonly cookieCategory: {
    readonly id: string;
    readonly name: string;
  } | null | undefined;
  readonly description: string;
  readonly displayName: string;
  readonly excluded: boolean;
  readonly id: string;
  readonly lastDetectedAt: string | null | undefined;
  readonly origin: string;
  readonly path: string;
  readonly type: TrackerResourceType;
  readonly " $fragmentType": "TrackerResourceRowFragment";
};
export type TrackerResourceRowFragment$key = {
  readonly " $data"?: TrackerResourceRowFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TrackerResourceRowFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TrackerResourceRowFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
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
      "name": "path",
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
      "name": "lastDetectedAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "CookieCategory",
      "kind": "LinkedField",
      "name": "cookieCategory",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TrackerResource",
  "abstractKey": null
};
})();

(node as any).hash = "3ed6a87474e6752d94fc89fa01bb2f2b";

export default node;
