/**
 * @generated SignedSource<<0f1038aa5f682c8218acfe684274ef8a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UpdateTrackerResourceInput = {
  description?: string | null | undefined;
  displayName?: string | null | undefined;
  excluded?: boolean | null | undefined;
  trackerResourceId: string;
};
export type TrackerResourceRowUpdateMutation$variables = {
  input: UpdateTrackerResourceInput;
};
export type TrackerResourceRowUpdateMutation$data = {
  readonly updateTrackerResource: {
    readonly cookieBanner: {
      readonly id: string;
      readonly latestVersion: {
        readonly id: string;
        readonly state: string;
        readonly version: number;
      } | null | undefined;
    };
    readonly trackerResource: {
      readonly description: string;
      readonly displayName: string;
      readonly excluded: boolean;
      readonly id: string;
      readonly updatedAt: string;
    };
  };
};
export type TrackerResourceRowUpdateMutation = {
  response: TrackerResourceRowUpdateMutation$data;
  variables: TrackerResourceRowUpdateMutation$variables;
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
    "concreteType": "UpdateTrackerResourcePayload",
    "kind": "LinkedField",
    "name": "updateTrackerResource",
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
    "name": "TrackerResourceRowUpdateMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TrackerResourceRowUpdateMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "ddff49e5ba7bfb974eca986eade588a6",
    "id": null,
    "metadata": {},
    "name": "TrackerResourceRowUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation TrackerResourceRowUpdateMutation(\n  $input: UpdateTrackerResourceInput!\n) {\n  updateTrackerResource(input: $input) {\n    trackerResource {\n      id\n      displayName\n      description\n      excluded\n      updatedAt\n    }\n    cookieBanner {\n      id\n      latestVersion {\n        id\n        version\n        state\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "26ec856195dd65056255278a898673d9";

export default node;
