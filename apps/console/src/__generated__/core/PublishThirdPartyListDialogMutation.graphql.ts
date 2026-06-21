/**
 * @generated SignedSource<<e21c1ab222ae59bbb6445d6074ff30d2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type PublishThirdPartyListInput = {
  approverIds?: ReadonlyArray<string> | null | undefined;
  minor: boolean;
  organizationId: string;
};
export type PublishThirdPartyListDialogMutation$variables = {
  input: PublishThirdPartyListInput;
};
export type PublishThirdPartyListDialogMutation$data = {
  readonly publishThirdPartyList: {
    readonly documentEdge: {
      readonly node: {
        readonly id: string;
      };
    };
  };
};
export type PublishThirdPartyListDialogMutation = {
  response: PublishThirdPartyListDialogMutation$data;
  variables: PublishThirdPartyListDialogMutation$variables;
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
    "concreteType": "PublishThirdPartyListPayload",
    "kind": "LinkedField",
    "name": "publishThirdPartyList",
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
    "name": "PublishThirdPartyListDialogMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PublishThirdPartyListDialogMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "beea56603db2256f6397d1b20c0ad447",
    "id": null,
    "metadata": {},
    "name": "PublishThirdPartyListDialogMutation",
    "operationKind": "mutation",
    "text": "mutation PublishThirdPartyListDialogMutation(\n  $input: PublishThirdPartyListInput!\n) {\n  publishThirdPartyList(input: $input) {\n    documentEdge {\n      node {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9806357edca610166a17127ab91a9a8c";

export default node;
