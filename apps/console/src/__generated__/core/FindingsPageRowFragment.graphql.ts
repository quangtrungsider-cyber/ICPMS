/**
 * @generated SignedSource<<db53d30baf780c003234b636417e1941>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type FindingKind = "EXCEPTION" | "MAJOR_NONCONFORMITY" | "MINOR_NONCONFORMITY" | "OBSERVATION";
export type FindingPriority = "HIGH" | "LOW" | "MEDIUM";
export type FindingStatus = "CLOSED" | "FALSE_POSITIVE" | "IN_PROGRESS" | "MITIGATED" | "OPEN" | "RISK_ACCEPTED";
import { FragmentRefs } from "relay-runtime";
export type FindingsPageRowFragment$data = {
  readonly canDelete: boolean;
  readonly canUpdate: boolean;
  readonly description: string | null | undefined;
  readonly dueDate: string | null | undefined;
  readonly id: string;
  readonly kind: FindingKind;
  readonly owner: {
    readonly fullName: string;
    readonly id: string;
  } | null | undefined;
  readonly priority: FindingPriority;
  readonly referenceId: string;
  readonly status: FindingStatus;
  readonly " $fragmentType": "FindingsPageRowFragment";
};
export type FindingsPageRowFragment$key = {
  readonly " $data"?: FindingsPageRowFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FindingsPageRowFragment">;
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
  "name": "FindingsPageRowFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "kind",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "referenceId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "priority",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "dueDate",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Profile",
      "kind": "LinkedField",
      "name": "owner",
      "plural": false,
      "selections": [
        (v0/*: any*/),
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
      "alias": "canUpdate",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:finding:update"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:finding:update\")"
    },
    {
      "alias": "canDelete",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:finding:delete"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:finding:delete\")"
    }
  ],
  "type": "Finding",
  "abstractKey": null
};
})();

(node as any).hash = "71ccaae812e496387cda60a7eeeacbd4";

export default node;
