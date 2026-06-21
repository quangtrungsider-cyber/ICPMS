/**
 * @generated SignedSource<<c9fe320a508878f1fcd21f36dd2f124e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ControlMaturityLevel = "DEFINED" | "INITIAL" | "MANAGED" | "NONE" | "OPTIMIZING" | "QUANTITATIVELY_MANAGED";
export type CreateControlInput = {
  bestPractice: boolean;
  description?: string | null | undefined;
  frameworkId: string;
  maturityLevel: ControlMaturityLevel;
  name: string;
  notImplementedJustification?: string | null | undefined;
  sectionTitle: string;
};
export type FrameworkControlDialogCreateMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateControlInput;
};
export type FrameworkControlDialogCreateMutation$data = {
  readonly createControl: {
    readonly controlEdge: {
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"FrameworkControlDialogFragment">;
      };
    };
  };
};
export type FrameworkControlDialogCreateMutation = {
  response: FrameworkControlDialogCreateMutation$data;
  variables: FrameworkControlDialogCreateMutation$variables;
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
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "FrameworkControlDialogCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateControlPayload",
        "kind": "LinkedField",
        "name": "createControl",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ControlEdge",
            "kind": "LinkedField",
            "name": "controlEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Control",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "FrameworkControlDialogFragment"
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
    "name": "FrameworkControlDialogCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateControlPayload",
        "kind": "LinkedField",
        "name": "createControl",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ControlEdge",
            "kind": "LinkedField",
            "name": "controlEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Control",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
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
                    "name": "sectionTitle",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "bestPractice",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "notImplementedJustification",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "maturityLevel",
                    "storageKey": null
                  }
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
            "handle": "prependEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "controlEdge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c830104db90fda66f6e26d0e647099db",
    "id": null,
    "metadata": {},
    "name": "FrameworkControlDialogCreateMutation",
    "operationKind": "mutation",
    "text": "mutation FrameworkControlDialogCreateMutation(\n  $input: CreateControlInput!\n) {\n  createControl(input: $input) {\n    controlEdge {\n      node {\n        ...FrameworkControlDialogFragment\n        id\n      }\n    }\n  }\n}\n\nfragment FrameworkControlDialogFragment on Control {\n  id\n  name\n  description\n  sectionTitle\n  bestPractice\n  notImplementedJustification\n  maturityLevel\n}\n"
  }
};
})();

(node as any).hash = "a64e6fd936555c0dd2cb4148cde736b6";

export default node;
