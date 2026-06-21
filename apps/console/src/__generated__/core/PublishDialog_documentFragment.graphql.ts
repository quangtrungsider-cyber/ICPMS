/**
 * @generated SignedSource<<423e43be11f633631c72ad0d73999603>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PublishDialog_documentFragment$data = {
  readonly defaultApprovers: ReadonlyArray<{
    readonly id: string;
  }>;
  readonly " $fragmentType": "PublishDialog_documentFragment";
};
export type PublishDialog_documentFragment$key = {
  readonly " $data"?: PublishDialog_documentFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PublishDialog_documentFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PublishDialog_documentFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Profile",
      "kind": "LinkedField",
      "name": "defaultApprovers",
      "plural": true,
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
  "type": "Document",
  "abstractKey": null
};

(node as any).hash = "6bc544dea37ffea4ffd8553fdf15850c";

export default node;
