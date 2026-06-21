/**
 * @generated SignedSource<<6f8a09b8802ba5beb5a42ffa3c8d9d2d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type MeasureState = "IMPLEMENTED" | "IN_PROGRESS" | "NOT_APPLICABLE" | "NOT_IMPLEMENTED" | "NOT_STARTED" | "UNKNOWN";
import { FragmentRefs } from "relay-runtime";
export type MeasuresPageRowFragment$data = {
  readonly canDelete: boolean;
  readonly canUpdate: boolean;
  readonly category: string;
  readonly id: string;
  readonly name: string;
  readonly state: MeasureState;
  readonly " $fragmentSpreads": FragmentRefs<"MeasureFormDialogMeasureFragment">;
  readonly " $fragmentType": "MeasuresPageRowFragment";
};
export type MeasuresPageRowFragment$key = {
  readonly " $data"?: MeasuresPageRowFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MeasuresPageRowFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MeasuresPageRowFragment",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "category",
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
      "alias": "canUpdate",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:measure:update"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:measure:update\")"
    },
    {
      "alias": "canDelete",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:measure:delete"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:measure:delete\")"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MeasureFormDialogMeasureFragment"
    }
  ],
  "type": "Measure",
  "abstractKey": null
};

(node as any).hash = "0b0404e2450153843da080577363c227";

export default node;
