/**
 * @generated SignedSource<<f195f96bec79d8b7eaaee937e75b598f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type MoveTrackerResourceToCategoryInput = {
  targetCookieCategoryId: string;
  trackerResourceId: string;
};
export type TrackerResourceRowMoveMutation$variables = {
  input: MoveTrackerResourceToCategoryInput;
};
export type TrackerResourceRowMoveMutation$data = {
  readonly moveTrackerResourceToCategory: {
    readonly cookieBanner: {
      readonly id: string;
      readonly latestVersion: {
        readonly id: string;
        readonly state: string;
        readonly version: number;
      } | null | undefined;
    };
    readonly trackerResource: {
      readonly cookieCategory: {
        readonly id: string;
      } | null | undefined;
      readonly id: string;
    };
  };
};
export type TrackerResourceRowMoveMutation = {
  response: TrackerResourceRowMoveMutation$data;
  variables: TrackerResourceRowMoveMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "MoveTrackerResourceToCategoryPayload",
    "kind": "LinkedField",
    "name": "moveTrackerResourceToCategory",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TrackerResource",
        "kind": "LinkedField",
        "name": "trackerResource",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "CookieCategory",
            "kind": "LinkedField",
            "name": "cookieCategory",
            "plural": false,
            "selections": [
              (v1/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "CookieBanner",
        "kind": "LinkedField",
        "name": "cookieBanner",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "CookieBannerVersion",
            "kind": "LinkedField",
            "name": "latestVersion",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "version",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "state",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TrackerResourceRowMoveMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TrackerResourceRowMoveMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "e73d32b5117b8c026d5234891e8e8447",
    "id": null,
    "metadata": {},
    "name": "TrackerResourceRowMoveMutation",
    "operationKind": "mutation",
    "text": "mutation TrackerResourceRowMoveMutation(\n  $input: MoveTrackerResourceToCategoryInput!\n) {\n  moveTrackerResourceToCategory(input: $input) {\n    trackerResource {\n      id\n      cookieCategory {\n        id\n      }\n    }\n    cookieBanner {\n      id\n      latestVersion {\n        id\n        version\n        state\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "22a27b27afb906027a0ff73d1f6a196c";

export default node;
