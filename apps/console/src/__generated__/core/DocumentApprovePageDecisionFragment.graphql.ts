/**
 * @generated SignedSource<<1b11b9f731497a46af1172c1ab5075cb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type DocumentVersionApprovalDecisionState = "APPROVED" | "PENDING" | "REJECTED" | "VOIDED";
import { FragmentRefs } from "relay-runtime";
export type DocumentApprovePageDecisionFragment$data = {
  readonly canApprove: boolean;
  readonly canReject: boolean;
  readonly id: string;
  readonly state: DocumentVersionApprovalDecisionState;
  readonly " $fragmentType": "DocumentApprovePageDecisionFragment";
};
export type DocumentApprovePageDecisionFragment$key = {
  readonly " $data"?: DocumentApprovePageDecisionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DocumentApprovePageDecisionFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DocumentApprovePageDecisionFragment",
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
  "type": "DocumentVersionApprovalDecision",
  "abstractKey": null
};

(node as any).hash = "fc24b636bf261b399ea72f55bce5b27a";

export default node;
