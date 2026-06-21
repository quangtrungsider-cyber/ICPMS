/**
 * @generated SignedSource<<364f3fc1511892558bb39ba80124cb32>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ApproveDocumentVersionInput = {
  comment?: string | null | undefined;
  documentVersionId: string;
};
export type DocumentApprovePage_approveMutation$variables = {
  input: ApproveDocumentVersionInput;
};
export type DocumentApprovePage_approveMutation$data = {
  readonly approveDocumentVersion: {
    readonly approvalDecision: {
      readonly " $fragmentSpreads": FragmentRefs<"DocumentApprovePageDecisionFragment">;
    };
  };
};
export type DocumentApprovePage_approveMutation = {
  response: DocumentApprovePage_approveMutation$data;
  variables: DocumentApprovePage_approveMutation$variables;
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
    "name": "DocumentApprovePage_approveMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ApproveDocumentVersionPayload",
        "kind": "LinkedField",
        "name": "approveDocumentVersion",
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
    "name": "DocumentApprovePage_approveMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ApproveDocumentVersionPayload",
        "kind": "LinkedField",
        "name": "approveDocumentVersion",
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
    "cacheID": "aa743b1dee9e862527076d0b34da1aa5",
    "id": null,
    "metadata": {},
    "name": "DocumentApprovePage_approveMutation",
    "operationKind": "mutation",
    "text": "mutation DocumentApprovePage_approveMutation(\n  $input: ApproveDocumentVersionInput!\n) {\n  approveDocumentVersion(input: $input) {\n    approvalDecision {\n      ...DocumentApprovePageDecisionFragment\n      id\n    }\n  }\n}\n\nfragment DocumentApprovePageDecisionFragment on DocumentVersionApprovalDecision {\n  id\n  state\n  canApprove: permission(action: \"core:document-version:approve\")\n  canReject: permission(action: \"core:document-version:reject\")\n}\n"
  }
};
})();

(node as any).hash = "a66d54a41c76d5b87ad089a31c6d7bd6";

export default node;
