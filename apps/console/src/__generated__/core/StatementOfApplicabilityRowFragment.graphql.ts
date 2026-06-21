/**
 * @generated SignedSource<<c46a7889661d3a24fe471a68d10d8476>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StatementOfApplicabilityRowFragment$data = {
  readonly canDelete: boolean;
  readonly createdAt: string;
  readonly id: string;
  readonly name: string;
  readonly statementsInfo: {
    readonly totalCount: number;
  };
  readonly " $fragmentType": "StatementOfApplicabilityRowFragment";
};
export type StatementOfApplicabilityRowFragment$key = {
  readonly " $data"?: StatementOfApplicabilityRowFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"StatementOfApplicabilityRowFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StatementOfApplicabilityRowFragment",
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
      "name": "createdAt",
      "storageKey": null
    },
    {
      "alias": "canDelete",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:statement-of-applicability:delete"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:statement-of-applicability:delete\")"
    },
    {
      "alias": "statementsInfo",
      "args": null,
      "concreteType": "ApplicabilityStatementConnection",
      "kind": "LinkedField",
      "name": "applicabilityStatements",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "StatementOfApplicability",
  "abstractKey": null
};

(node as any).hash = "f05a1422df429baff0c5fd94a4178f70";

export default node;
