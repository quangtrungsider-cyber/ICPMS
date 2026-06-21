/**
 * @generated SignedSource<<04432b153e9077fb4b3a4bbe49d08848>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TrackerPatternMatchType = "EXACT" | "GLOB";
export type TrackerType = "CACHE_STORAGE" | "COOKIE" | "INDEXED_DB" | "LOCAL_STORAGE" | "SESSION_STORAGE";
export type CreateTrackerPatternInput = {
  cookieCategoryId: string;
  description?: string | null | undefined;
  displayName: string;
  matchType: TrackerPatternMatchType;
  maxAgeSeconds?: number | null | undefined;
  pattern: string;
  trackerType?: TrackerType | null | undefined;
};
export type CategorySectionCreatePatternMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateTrackerPatternInput;
};
export type CategorySectionCreatePatternMutation$data = {
  readonly createTrackerPattern: {
    readonly cookieBanner: {
      readonly id: string;
      readonly latestVersion: {
        readonly id: string;
        readonly state: string;
        readonly version: number;
      } | null | undefined;
    };
    readonly trackerPatternEdge: {
      readonly node: {
        readonly description: string;
        readonly displayName: string;
        readonly excluded: boolean;
        readonly id: string;
        readonly maxAgeSeconds: number | null | undefined;
        readonly trackerType: TrackerType;
        readonly " $fragmentSpreads": FragmentRefs<"EditCookieRowFragment">;
      };
    };
  };
};
export type CategorySectionCreatePatternMutation = {
  response: CategorySectionCreatePatternMutation$data;
  variables: CategorySectionCreatePatternMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayName",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "trackerType",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "maxAgeSeconds",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "excluded",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "CookieBanner",
  "kind": "LinkedField",
  "name": "cookieBanner",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "CookieBannerVersion",
      "kind": "LinkedField",
      "name": "latestVersion",
      "plural": false,
      "selections": [
        (v3/*: any*/),
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
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CategorySectionCreatePatternMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateTrackerPatternPayload",
        "kind": "LinkedField",
        "name": "createTrackerPattern",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TrackerPatternEdge",
            "kind": "LinkedField",
            "name": "trackerPatternEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "TrackerPattern",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "EditCookieRowFragment"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v9/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CategorySectionCreatePatternMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateTrackerPatternPayload",
        "kind": "LinkedField",
        "name": "createTrackerPattern",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TrackerPatternEdge",
            "kind": "LinkedField",
            "name": "trackerPatternEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "TrackerPattern",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "trackerPatternEdge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          },
          (v9/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "491d9d893f9e93b72ee5bad7953085b7",
    "id": null,
    "metadata": {},
    "name": "CategorySectionCreatePatternMutation",
    "operationKind": "mutation",
    "text": "mutation CategorySectionCreatePatternMutation(\n  $input: CreateTrackerPatternInput!\n) {\n  createTrackerPattern(input: $input) {\n    trackerPatternEdge {\n      node {\n        id\n        displayName\n        trackerType\n        maxAgeSeconds\n        description\n        excluded\n        ...EditCookieRowFragment\n      }\n    }\n    cookieBanner {\n      id\n      latestVersion {\n        id\n        version\n        state\n      }\n    }\n  }\n}\n\nfragment EditCookieRowFragment on TrackerPattern {\n  displayName\n  trackerType\n  maxAgeSeconds\n  description\n  excluded\n}\n"
  }
};
})();

(node as any).hash = "1704eefd292a2a39dd0cbe182cb82fe1";

export default node;
