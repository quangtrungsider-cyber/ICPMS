/**
 * @generated SignedSource<<2894dc1a5cc2938ccccc6cc308293725>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UpdateTrackerPatternInput = {
  description?: string | null | undefined;
  excluded?: boolean | null | undefined;
  maxAgeSeconds?: number | null | undefined;
  trackerPatternId: string;
};
export type CategorySectionUpdatePatternMutation$variables = {
  input: UpdateTrackerPatternInput;
};
export type CategorySectionUpdatePatternMutation$data = {
  readonly updateTrackerPattern: {
    readonly cookieBanner: {
      readonly id: string;
      readonly latestVersion: {
        readonly id: string;
        readonly state: string;
        readonly version: number;
      } | null | undefined;
    };
    readonly trackerPattern: {
      readonly description: string;
      readonly displayName: string;
      readonly excluded: boolean;
      readonly id: string;
      readonly maxAgeSeconds: number | null | undefined;
      readonly updatedAt: string;
    };
  };
};
export type CategorySectionUpdatePatternMutation = {
  response: CategorySectionUpdatePatternMutation$data;
  variables: CategorySectionUpdatePatternMutation$variables;
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
    "concreteType": "UpdateTrackerPatternPayload",
    "kind": "LinkedField",
    "name": "updateTrackerPattern",
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
            "kind": "ScalarField",
            "name": "excluded",
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
    "name": "CategorySectionUpdatePatternMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CategorySectionUpdatePatternMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "9d189ec5cc72a42ce9650b86589b3df4",
    "id": null,
    "metadata": {},
    "name": "CategorySectionUpdatePatternMutation",
    "operationKind": "mutation",
    "text": "mutation CategorySectionUpdatePatternMutation(\n  $input: UpdateTrackerPatternInput!\n) {\n  updateTrackerPattern(input: $input) {\n    trackerPattern {\n      id\n      displayName\n      maxAgeSeconds\n      description\n      excluded\n      updatedAt\n    }\n    cookieBanner {\n      id\n      latestVersion {\n        id\n        version\n        state\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "749d06cb2ea7f2e0b52c7652ca2247a1";

export default node;
