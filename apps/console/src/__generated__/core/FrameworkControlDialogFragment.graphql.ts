/**
 * @generated SignedSource<<51446fc3edc48444ae1037d33fe1e51d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type ControlMaturityLevel = "DEFINED" | "INITIAL" | "MANAGED" | "NONE" | "OPTIMIZING" | "QUANTITATIVELY_MANAGED";
import { FragmentRefs } from "relay-runtime";
export type FrameworkControlDialogFragment$data = {
  readonly bestPractice: boolean;
  readonly description: string | null | undefined;
  readonly id: string;
  readonly maturityLevel: ControlMaturityLevel;
  readonly name: string;
  readonly notImplementedJustification: string | null | undefined;
  readonly sectionTitle: string;
  readonly " $fragmentType": "FrameworkControlDialogFragment";
};
export type FrameworkControlDialogFragment$key = {
  readonly " $data"?: FrameworkControlDialogFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FrameworkControlDialogFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FrameworkControlDialogFragment",
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
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "sectionTitle",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "bestPractice",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "notImplementedJustification",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "maturityLevel",
      "storageKey": null
    }
  ],
  "type": "Control",
  "abstractKey": null
};

(node as any).hash = "80a9918d2481d4278dbf48c29570657d";

export default node;
