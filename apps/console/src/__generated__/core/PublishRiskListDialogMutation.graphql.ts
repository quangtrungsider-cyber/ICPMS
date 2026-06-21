/**
 * @generated SignedSource<<ff169e51c0587913483a354d7bf8c6d9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type PublishRiskListInput = {
  approverIds?: ReadonlyArray<string> | null | undefined;
  minor: boolean;
  organizationId: string;
};
export type PublishRiskListDialogMutation$variables = {
  input: PublishRiskListInput;
};
export type PublishRiskListDialogMutation$data = {
  readonly publishRiskList: {
    readonly documentEdge: {
      readonly node: {
        readonly id: string;
      };
    };
  };
};
export type PublishRiskListDialogMutation = {
  response: PublishRiskListDialogMutation$data;
  variables: PublishRiskListDialogMutation$variables;
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
    "concreteType": "PublishRiskListPayload",
    "kind": "LinkedField",
    "name": "publishRiskList",
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
    "name": "PublishRiskListDialogMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PublishRiskListDialogMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ac6014fe054ad198a5b741c36d93bdf0",
    "id": null,
    "metadata": {},
    "name": "PublishRiskListDialogMutation",
    "operationKind": "mutation",
    "text": "mutation PublishRiskListDialogMutation(\n  $input: PublishRiskListInput!\n) {\n  publishRiskList(input: $input) {\n    documentEdge {\n      node {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c10a1bd5d8cdbf9d6fa0f6790142cc25";

export default node;
