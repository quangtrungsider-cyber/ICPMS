/**
 * @generated SignedSource<<731b8aad9867135cc54003b9abe9a599>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VersionRowFragment$data = {
  readonly id: string;
  readonly major: number;
  readonly minor: number;
  readonly publishedAt: string | null | undefined;
  readonly signed: boolean;
  readonly " $fragmentType": "VersionRowFragment";
};
export type VersionRowFragment$key = {
  readonly " $data"?: VersionRowFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"VersionRowFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "VersionRowFragment",
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
      "name": "signed",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "publishedAt",
      "storageKey": null
    }
  ],
  "type": "EmployeeDocumentVersion",
  "abstractKey": null
};

(node as any).hash = "3282aa6c87edf999fe421c06be6fade0";

export default node;
