/**
 * @generated SignedSource<<a01f6767e5176f63e80c79224e81f029>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type MoveTrackerPatternToCategoryInput = {
  targetCookieCategoryId: string;
  trackerPatternId: string;
};
export type TrackerPatternRowMoveMutation$variables = {
  input: MoveTrackerPatternToCategoryInput;
};
export type TrackerPatternRowMoveMutation$data = {
  readonly moveTrackerPatternToCategory: {
    readonly cookieBanner: {
      readonly id: string;
      readonly latestVersion: {
        readonly id: string;
        readonly state: string;
        readonly version: number;
      } | null | undefined;
    };
    readonly trackerPattern: {
      readonly cookieCategory: {
        readonly id: string;
      } | null | undefined;
      readonly id: string;
    };
  };
};
export type TrackerPatternRowMoveMutation = {
  response: TrackerPatternRowMoveMutation$data;
  variables: TrackerPatternRowMoveMutation$variables;
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
    "concreteType": "MoveTrackerPatternToCategoryPayload",
    "kind": "LinkedField",
    "name": "moveTrackerPatternToCategory",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TrackerPattern",
        "kind": "LinkedField",
        "name": "trackerPattern",
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
    "name": "TrackerPatternRowMoveMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TrackerPatternRowMoveMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "ad8d04065328e453214ea927c23ceda9",
    "id": null,
    "metadata": {},
    "name": "TrackerPatternRowMoveMutation",
    "operationKind": "mutation",
    "text": "mutation TrackerPatternRowMoveMutation(\n  $input: MoveTrackerPatternToCategoryInput!\n) {\n  moveTrackerPatternToCategory(input: $input) {\n    trackerPattern {\n      id\n      cookieCategory {\n        id\n      }\n    }\n    cookieBanner {\n      id\n      latestVersion {\n        id\n        version\n        state\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e0e11effe3fab8e2bef329b489c0c600";

export default node;
