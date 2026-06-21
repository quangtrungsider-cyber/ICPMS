/**
 * @generated SignedSource<<a1d7c819766fae539cfb70231a855a8a>>
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
export type CategorySectionDeletePatternMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteTrackerPatternInput;
};
export type CategorySectionDeletePatternMutation$data = {
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
export type CategorySectionDeletePatternMutation = {
  response: CategorySectionDeletePatternMutation$data;
  variables: CategorySectionDeletePatternMutation$variables;
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
    "name": "CategorySectionDeletePatternMutation",
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
    "name": "CategorySectionDeletePatternMutation",
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
    "cacheID": "02d8c0d3987865a5f5cfed74cdc01481",
    "id": null,
    "metadata": {},
    "name": "CategorySectionDeletePatternMutation",
    "operationKind": "mutation",
    "text": "mutation CategorySectionDeletePatternMutation(\n  $input: DeleteTrackerPatternInput!\n) {\n  deleteTrackerPattern(input: $input) {\n    deletedTrackerPatternId\n    cookieBanner {\n      id\n      latestVersion {\n        id\n        version\n        state\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0f644731fe372e809aae4fab5f5a4600";

export default node;
