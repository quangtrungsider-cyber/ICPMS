/**
 * @generated SignedSource<<7b873911a9f5fa854551bb92f0b68e1e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type PublishStatementOfApplicabilityInput = {
  approverIds?: ReadonlyArray<string> | null | undefined;
  minor: boolean;
  statementOfApplicabilityId: string;
};
export type PublishStatementOfApplicabilityDialogMutation$variables = {
  input: PublishStatementOfApplicabilityInput;
};
export type PublishStatementOfApplicabilityDialogMutation$data = {
  readonly publishStatementOfApplicability: {
    readonly documentEdge: {
      readonly node: {
        readonly id: string;
      };
    };
  };
};
export type PublishStatementOfApplicabilityDialogMutation = {
  response: PublishStatementOfApplicabilityDialogMutation$data;
  variables: PublishStatementOfApplicabilityDialogMutation$variables;
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
    "concreteType": "PublishStatementOfApplicabilityPayload",
    "kind": "LinkedField",
    "name": "publishStatementOfApplicability",
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
    "name": "PublishStatementOfApplicabilityDialogMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PublishStatementOfApplicabilityDialogMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d3b43defb154a4410f08d346e6c88116",
    "id": null,
    "metadata": {},
    "name": "PublishStatementOfApplicabilityDialogMutation",
    "operationKind": "mutation",
    "text": "mutation PublishStatementOfApplicabilityDialogMutation(\n  $input: PublishStatementOfApplicabilityInput!\n) {\n  publishStatementOfApplicability(input: $input) {\n    documentEdge {\n      node {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4a322526893a2b22a19d6bc90f30cb2e";

export default node;
