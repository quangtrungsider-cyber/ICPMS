/**
 * @generated SignedSource<<3056ab0449ca5050039e137254061345>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteTrackerResourceInput = {
  trackerResourceId: string;
};
export type TrackerResourceRowDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteTrackerResourceInput;
};
export type TrackerResourceRowDeleteMutation$data = {
  readonly deleteTrackerResource: {
    readonly cookieBanner: {
      readonly id: string;
      readonly latestVersion: {
        readonly id: string;
        readonly state: string;
        readonly version: number;
      } | null | undefined;
    };
    readonly deletedTrackerResourceId: string;
  };
};
export type TrackerResourceRowDeleteMutation = {
  response: TrackerResourceRowDeleteMutation$data;
  variables: TrackerResourceRowDeleteMutation$variables;
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
  "name": "deletedTrackerResourceId",
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
    "name": "TrackerResourceRowDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteTrackerResourcePayload",
        "kind": "LinkedField",
        "name": "deleteTrackerResource",
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
    "name": "TrackerResourceRowDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteTrackerResourcePayload",
        "kind": "LinkedField",
        "name": "deleteTrackerResource",
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
            "name": "deletedTrackerResourceId",
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
    "cacheID": "95d229096658c70aa8289a2fcd990e1b",
    "id": null,
    "metadata": {},
    "name": "TrackerResourceRowDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation TrackerResourceRowDeleteMutation(\n  $input: DeleteTrackerResourceInput!\n) {\n  deleteTrackerResource(input: $input) {\n    deletedTrackerResourceId\n    cookieBanner {\n      id\n      latestVersion {\n        id\n        version\n        state\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b3f9d18dd8dfb9498670bf1365a68859";

export default node;
