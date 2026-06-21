/**
 * @generated SignedSource<<30f50cda2ddce703fdf73fef8f535880>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteTrackerPatternInput = {
  trackerPatternId: string;
};
export type TrackerPatternRowDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteTrackerPatternInput;
};
export type TrackerPatternRowDeleteMutation$data = {
  readonly deleteTrackerPattern: {
    readonly cookieBanner: {
      readonly id: string;
      readonly latestVersion: {
        readonly id: string;
        readonly state: string;
        readonly version: number;
      } | null | undefined;
    };
    readonly deletedTrackerPatternId: string;
  };
};
export type TrackerPatternRowDeleteMutation = {
  response: TrackerPatternRowDeleteMutation$data;
  variables: TrackerPatternRowDeleteMutation$variables;
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
  "name": "deletedTrackerPatternId",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "CookieBanner",
  "kind": "LinkedField",
  "name": "cookieBanner",
  "plural": false,
  "selections": [
    (v4/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "CookieBannerVersion",
      "kind": "LinkedField",
      "name": "latestVersion",
      "plural": false,
      "selections": [
        (v4/*: any*/),
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
    "name": "TrackerPatternRowDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteTrackerPatternPayload",
        "kind": "LinkedField",
        "name": "deleteTrackerPattern",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v5/*: any*/)
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
    "name": "TrackerPatternRowDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteTrackerPatternPayload",
        "kind": "LinkedField",
        "name": "deleteTrackerPattern",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "deletedTrackerPatternId",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bb82b6019ad00f2422721e450fd9a42c",
    "id": null,
    "metadata": {},
    "name": "TrackerPatternRowDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation TrackerPatternRowDeleteMutation(\n  $input: DeleteTrackerPatternInput!\n) {\n  deleteTrackerPattern(input: $input) {\n    deletedTrackerPatternId\n    cookieBanner {\n      id\n      latestVersion {\n        id\n        version\n        state\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6e0570a3afe7b8cb8a7cb649d246b601";

export default node;
