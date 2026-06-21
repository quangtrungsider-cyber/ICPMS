/**
 * @generated SignedSource<<797fc1524eb3c2edcf97e9344be41bed>>
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
export type CategorySectionMovePatternMutation$variables = {
  input: MoveTrackerPatternToCategoryInput;
};
export type CategorySectionMovePatternMutation$data = {
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
      readonly description: string;
      readonly displayName: string;
      readonly id: string;
      readonly maxAgeSeconds: number | null | undefined;
      readonly updatedAt: string;
    };
  };
};
export type CategorySectionMovePatternMutation = {
  response: CategorySectionMovePatternMutation$data;
  variables: CategorySectionMovePatternMutation$variables;
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
            "kind": "ScalarField",
            "name": "displayName",
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
            "concreteType": "CookieCategory",
            "kind": "LinkedField",
            "name": "cookieCategory",
            "plural": false,
            "selections": [
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updatedAt",
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
    "name": "CategorySectionMovePatternMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CategorySectionMovePatternMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "c3d1380b081b175a5f74840887030b8e",
    "id": null,
    "metadata": {},
    "name": "CategorySectionMovePatternMutation",
    "operationKind": "mutation",
    "text": "mutation CategorySectionMovePatternMutation(\n  $input: MoveTrackerPatternToCategoryInput!\n) {\n  moveTrackerPatternToCategory(input: $input) {\n    trackerPattern {\n      id\n      displayName\n      maxAgeSeconds\n      description\n      cookieCategory {\n        id\n      }\n      updatedAt\n    }\n    cookieBanner {\n      id\n      latestVersion {\n        id\n        version\n        state\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b3a1d0f8f99f0e2cb77d510e7362ad73";

export default node;
