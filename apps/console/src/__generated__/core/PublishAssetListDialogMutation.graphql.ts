/**
 * @generated SignedSource<<950d42e2e840c1cb58be916c5a3d906b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type PublishAssetListInput = {
  approverIds?: ReadonlyArray<string> | null | undefined;
  minor: boolean;
  organizationId: string;
};
export type PublishAssetListDialogMutation$variables = {
  input: PublishAssetListInput;
};
export type PublishAssetListDialogMutation$data = {
  readonly publishAssetList: {
    readonly documentEdge: {
      readonly node: {
        readonly id: string;
      };
    };
  };
};
export type PublishAssetListDialogMutation = {
  response: PublishAssetListDialogMutation$data;
  variables: PublishAssetListDialogMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "PublishAssetListPayload",
    "kind": "LinkedField",
    "name": "publishAssetList",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "DocumentEdge",
        "kind": "LinkedField",
        "name": "documentEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Document",
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
    "name": "PublishAssetListDialogMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PublishAssetListDialogMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ca0de73385abc47e6b59da58613fc8ed",
    "id": null,
    "metadata": {},
    "name": "PublishAssetListDialogMutation",
    "operationKind": "mutation",
    "text": "mutation PublishAssetListDialogMutation(\n  $input: PublishAssetListInput!\n) {\n  publishAssetList(input: $input) {\n    documentEdge {\n      node {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b05b1e3b1385b957c9fa2fbf83b2cdee";

export default node;
