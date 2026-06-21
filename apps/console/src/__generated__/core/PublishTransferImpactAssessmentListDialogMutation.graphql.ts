/**
 * @generated SignedSource<<25f6f4a07fdcd8b07f076217f12dd274>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type PublishTransferImpactAssessmentListInput = {
  approverIds?: ReadonlyArray<string> | null | undefined;
  minor: boolean;
  organizationId: string;
};
export type PublishTransferImpactAssessmentListDialogMutation$variables = {
  input: PublishTransferImpactAssessmentListInput;
};
export type PublishTransferImpactAssessmentListDialogMutation$data = {
  readonly publishTransferImpactAssessmentList: {
    readonly documentEdge: {
      readonly node: {
        readonly id: string;
      };
    };
  };
};
export type PublishTransferImpactAssessmentListDialogMutation = {
  response: PublishTransferImpactAssessmentListDialogMutation$data;
  variables: PublishTransferImpactAssessmentListDialogMutation$variables;
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
    "concreteType": "PublishTransferImpactAssessmentListPayload",
    "kind": "LinkedField",
    "name": "publishTransferImpactAssessmentList",
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
    "name": "PublishTransferImpactAssessmentListDialogMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PublishTransferImpactAssessmentListDialogMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3245c0c9748a76f5885a6fa34455aa9e",
    "id": null,
    "metadata": {},
    "name": "PublishTransferImpactAssessmentListDialogMutation",
    "operationKind": "mutation",
    "text": "mutation PublishTransferImpactAssessmentListDialogMutation(\n  $input: PublishTransferImpactAssessmentListInput!\n) {\n  publishTransferImpactAssessmentList(input: $input) {\n    documentEdge {\n      node {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6b252a7a6a7d8180a3a87f72dd022594";

export default node;
