/**
 * @generated SignedSource<<de25383c8a7b0844f4bdf4869e70c264>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type DocumentVersionApprovalDecisionState = "APPROVED" | "PENDING" | "REJECTED" | "VOIDED";
import { FragmentRefs } from "relay-runtime";
export type DocumentApprovePageVersionRowFragment$data = {
  readonly approvalDecision: {
    readonly id: string;
    readonly state: DocumentVersionApprovalDecisionState;
  } | null | undefined;
  readonly id: string;
  readonly major: number;
  readonly minor: number;
  readonly publishedAt: string | null | undefined;
  readonly " $fragmentType": "DocumentApprovePageVersionRowFragment";
};
export type DocumentApprovePageVersionRowFragment$key = {
  readonly " $data"?: DocumentApprovePageVersionRowFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DocumentApprovePageVersionRowFragment">;
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
  "name": "DocumentApprovePageVersionRowFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "major",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "minor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "publishedAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "DocumentVersionApprovalDecision",
      "kind": "LinkedField",
      "name": "approvalDecision",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "state",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "EmployeeDocumentVersion",
  "abstractKey": null
};
})();

(node as any).hash = "00dba38f3825e33f603ef9c4b645be64";

export default node;
