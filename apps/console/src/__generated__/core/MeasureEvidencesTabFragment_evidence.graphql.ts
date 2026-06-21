/**
 * @generated SignedSource<<a9ec6e9f3bc2bbb06760f1e465f04fc7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MeasureEvidencesTabFragment_evidence$data = {
  readonly canDelete: boolean;
  readonly createdAt: string;
  readonly description: string | null | undefined;
  readonly file: {
    readonly fileName: string;
    readonly mimeType: string;
    readonly size: number;
  } | null | undefined;
  readonly id: string;
  readonly " $fragmentType": "MeasureEvidencesTabFragment_evidence";
};
export type MeasureEvidencesTabFragment_evidence$key = {
  readonly " $data"?: MeasureEvidencesTabFragment_evidence$data;
  readonly " $fragmentSpreads": FragmentRefs<"MeasureEvidencesTabFragment_evidence">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MeasureEvidencesTabFragment_evidence",
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
      "concreteType": "File",
      "kind": "LinkedField",
      "name": "file",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "fileName",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "mimeType",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "size",
          "storageKey": null
        }
      ],
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
      "name": "createdAt",
      "storageKey": null
    },
    {
      "alias": "canDelete",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:evidence:delete"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:evidence:delete\")"
    }
  ],
  "type": "Evidence",
  "abstractKey": null
};

(node as any).hash = "95943ac9c1311875425dcf2fb6dbfdad";

export default node;
