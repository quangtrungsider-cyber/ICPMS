/**
 * @generated SignedSource<<9f30ff58f74b03d5aeb64ca5b207a494>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type DocumentVersionApprovalDecisionState = "APPROVED" | "PENDING" | "REJECTED" | "VOIDED";
import { FragmentRefs } from "relay-runtime";
export type DocumentApprovalListItemFragment$data = {
  readonly approver: {
    readonly fullName: string;
  };
  readonly canApprove: boolean;
  readonly canReject: boolean;
  readonly comment: string | null | undefined;
  readonly createdAt: string;
  readonly decidedAt: string | null | undefined;
  readonly documentVersion: {
    readonly document: {
      readonly id: string;
    };
    readonly id: string;
  };
  readonly id: string;
  readonly state: DocumentVersionApprovalDecisionState;
  readonly " $fragmentType": "DocumentApprovalListItemFragment";
};
export type DocumentApprovalListItemFragment$key = {
  readonly " $data"?: DocumentApprovalListItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DocumentApprovalListItemFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DocumentApprovalListItemFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Profile",
      "kind": "LinkedField",
      "name": "approver",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "fullName",
          "storageKey": null
        }
      ],
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "comment",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "decidedAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
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
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "DocumentVersion",
      "kind": "LinkedField",
      "name": "documentVersion",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Document",
          "kind": "LinkedField",
          "name": "document",
          "plural": false,
          "selections": [
            (v0/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "DocumentVersionApprovalDecision",
  "abstractKey": null
};
})();

(node as any).hash = "d0886b0f7654569a964df5a10d909a8d";

export default node;
