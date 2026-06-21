/**
 * @generated SignedSource<<8f9a64dac259292049729306dc72cf5b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type PublishProcessingActivityListInput = {
  approverIds?: ReadonlyArray<string> | null | undefined;
  minor: boolean;
  organizationId: string;
};
export type PublishProcessingActivityListDialogMutation$variables = {
  input: PublishProcessingActivityListInput;
};
export type PublishProcessingActivityListDialogMutation$data = {
  readonly publishProcessingActivityList: {
    readonly documentEdge: {
      readonly node: {
        readonly id: string;
      };
    };
  };
};
export type PublishProcessingActivityListDialogMutation = {
  response: PublishProcessingActivityListDialogMutation$data;
  variables: PublishProcessingActivityListDialogMutation$variables;
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
    "concreteType": "PublishProcessingActivityListPayload",
    "kind": "LinkedField",
    "name": "publishProcessingActivityList",
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
    "name": "PublishProcessingActivityListDialogMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PublishProcessingActivityListDialogMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f66ce0a3baa73667c8715c12775fe054",
    "id": null,
    "metadata": {},
    "name": "PublishProcessingActivityListDialogMutation",
    "operationKind": "mutation",
    "text": "mutation PublishProcessingActivityListDialogMutation(\n  $input: PublishProcessingActivityListInput!\n) {\n  publishProcessingActivityList(input: $input) {\n    documentEdge {\n      node {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "09c2570261dc3ec78765e713262a8b70";

export default node;
