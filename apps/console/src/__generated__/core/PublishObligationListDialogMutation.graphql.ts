/**
 * @generated SignedSource<<e70fccfec79c1c97ef7c0c6c242cb02e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type PublishObligationListInput = {
  approverIds?: ReadonlyArray<string> | null | undefined;
  minor: boolean;
  organizationId: string;
};
export type PublishObligationListDialogMutation$variables = {
  input: PublishObligationListInput;
};
export type PublishObligationListDialogMutation$data = {
  readonly publishObligationList: {
    readonly documentEdge: {
      readonly node: {
        readonly id: string;
      };
    };
  };
};
export type PublishObligationListDialogMutation = {
  response: PublishObligationListDialogMutation$data;
  variables: PublishObligationListDialogMutation$variables;
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
    "concreteType": "PublishObligationListPayload",
    "kind": "LinkedField",
    "name": "publishObligationList",
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
    "name": "PublishObligationListDialogMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PublishObligationListDialogMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b83778b48af19066e5c2f1eb1c0fc31d",
    "id": null,
    "metadata": {},
    "name": "PublishObligationListDialogMutation",
    "operationKind": "mutation",
    "text": "mutation PublishObligationListDialogMutation(\n  $input: PublishObligationListInput!\n) {\n  publishObligationList(input: $input) {\n    documentEdge {\n      node {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b5f2c96df14644b76383a0196f1147d3";

export default node;
