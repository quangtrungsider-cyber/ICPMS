/**
 * @generated SignedSource<<3626097d6d4c825bbe8931f844080efc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RejectDocumentVersionInput = {
  comment?: string | null | undefined;
  documentVersionId: string;
};
export type DocumentApprovePage_rejectMutation$variables = {
  input: RejectDocumentVersionInput;
};
export type DocumentApprovePage_rejectMutation$data = {
  readonly rejectDocumentVersion: {
    readonly approvalDecision: {
      readonly " $fragmentSpreads": FragmentRefs<"DocumentApprovePageDecisionFragment">;
    };
  };
};
export type DocumentApprovePage_rejectMutation = {
  response: DocumentApprovePage_rejectMutation$data;
  variables: DocumentApprovePage_rejectMutation$variables;
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DocumentApprovePage_rejectMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RejectDocumentVersionPayload",
        "kind": "LinkedField",
        "name": "rejectDocumentVersion",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "DocumentVersionApprovalDecision",
            "kind": "LinkedField",
            "name": "approvalDecision",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "DocumentApprovePageDecisionFragment"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentApprovePage_rejectMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RejectDocumentVersionPayload",
        "kind": "LinkedField",
        "name": "rejectDocumentVersion",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "DocumentVersionApprovalDecision",
            "kind": "LinkedField",
            "name": "approvalDecision",
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
                "name": "state",
                "storageKey": null
              },
              {
                "alias": "canApprove",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "action",
                    "value": "core:document-version:approve"
                  }
                ],
                "kind": "ScalarField",
                "name": "permission",
                "storageKey": "permission(action:\"core:document-version:approve\")"
              },
              {
                "alias": "canReject",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "action",
                    "value": "core:document-version:reject"
                  }
                ],
                "kind": "ScalarField",
                "name": "permission",
                "storageKey": "permission(action:\"core:document-version:reject\")"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d8aa99b4306c83ef8cb16b3cd4a4256b",
    "id": null,
    "metadata": {},
    "name": "DocumentApprovePage_rejectMutation",
    "operationKind": "mutation",
    "text": "mutation DocumentApprovePage_rejectMutation(\n  $input: RejectDocumentVersionInput!\n) {\n  rejectDocumentVersion(input: $input) {\n    approvalDecision {\n      ...DocumentApprovePageDecisionFragment\n      id\n    }\n  }\n}\n\nfragment DocumentApprovePageDecisionFragment on DocumentVersionApprovalDecision {\n  id\n  state\n  canApprove: permission(action: \"core:document-version:approve\")\n  canReject: permission(action: \"core:document-version:reject\")\n}\n"
  }
};
})();

(node as any).hash = "16c91b7ee2ed62c6a6d4213aab584dce";

export default node;
