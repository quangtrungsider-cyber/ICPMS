/**
 * @generated SignedSource<<8a7bdf6fcded8f73670e562f79ac13ce>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type PublishFindingListInput = {
  approverIds?: ReadonlyArray<string> | null | undefined;
  minor: boolean;
  organizationId: string;
};
export type PublishFindingListDialogMutation$variables = {
  input: PublishFindingListInput;
};
export type PublishFindingListDialogMutation$data = {
  readonly publishFindingList: {
    readonly documentEdge: {
      readonly node: {
        readonly id: string;
      };
    };
  };
};
export type PublishFindingListDialogMutation = {
  response: PublishFindingListDialogMutation$data;
  variables: PublishFindingListDialogMutation$variables;
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
    "concreteType": "PublishFindingListPayload",
    "kind": "LinkedField",
    "name": "publishFindingList",
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
    "name": "PublishFindingListDialogMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PublishFindingListDialogMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bd0a67e237677dc92c093b12cefcf304",
    "id": null,
    "metadata": {},
    "name": "PublishFindingListDialogMutation",
    "operationKind": "mutation",
    "text": "mutation PublishFindingListDialogMutation(\n  $input: PublishFindingListInput!\n) {\n  publishFindingList(input: $input) {\n    documentEdge {\n      node {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "de9cc377b10cb96862222c83c8389a02";

export default node;
