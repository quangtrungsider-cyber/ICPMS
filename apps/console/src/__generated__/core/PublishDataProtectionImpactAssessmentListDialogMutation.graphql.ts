/**
 * @generated SignedSource<<fdece1ea1f2b8f161aad2c2af48cadf0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type PublishDataProtectionImpactAssessmentListInput = {
  approverIds?: ReadonlyArray<string> | null | undefined;
  minor: boolean;
  organizationId: string;
};
export type PublishDataProtectionImpactAssessmentListDialogMutation$variables = {
  input: PublishDataProtectionImpactAssessmentListInput;
};
export type PublishDataProtectionImpactAssessmentListDialogMutation$data = {
  readonly publishDataProtectionImpactAssessmentList: {
    readonly documentEdge: {
      readonly node: {
        readonly id: string;
      };
    };
  };
};
export type PublishDataProtectionImpactAssessmentListDialogMutation = {
  response: PublishDataProtectionImpactAssessmentListDialogMutation$data;
  variables: PublishDataProtectionImpactAssessmentListDialogMutation$variables;
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
    "concreteType": "PublishDataProtectionImpactAssessmentListPayload",
    "kind": "LinkedField",
    "name": "publishDataProtectionImpactAssessmentList",
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
    "name": "PublishDataProtectionImpactAssessmentListDialogMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PublishDataProtectionImpactAssessmentListDialogMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9996a3983d8d2feb515d9eb9f38a8634",
    "id": null,
    "metadata": {},
    "name": "PublishDataProtectionImpactAssessmentListDialogMutation",
    "operationKind": "mutation",
    "text": "mutation PublishDataProtectionImpactAssessmentListDialogMutation(\n  $input: PublishDataProtectionImpactAssessmentListInput!\n) {\n  publishDataProtectionImpactAssessmentList(input: $input) {\n    documentEdge {\n      node {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "92d91b44d24b1d94783465c03e990ef7";

export default node;
