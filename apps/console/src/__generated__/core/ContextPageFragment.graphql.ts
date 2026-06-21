/**
 * @generated SignedSource<<4d10411e39abf6a86dcab3af23d33383>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContextPageFragment$data = {
  readonly canUpdateContext: boolean;
  readonly context: {
    readonly architecture: string | null | undefined;
    readonly customers: string | null | undefined;
    readonly processes: string | null | undefined;
    readonly product: string | null | undefined;
    readonly team: string | null | undefined;
  } | null | undefined;
  readonly id: string;
  readonly " $fragmentType": "ContextPageFragment";
};
export type ContextPageFragment$key = {
  readonly " $data"?: ContextPageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContextPageFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContextPageFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": "canUpdateContext",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:organization-context:update"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:organization-context:update\")"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "OrganizationContext",
      "kind": "LinkedField",
      "name": "context",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "product",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "architecture",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "team",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "processes",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "customers",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Organization",
  "abstractKey": null
};

(node as any).hash = "0f01772a1315965350297648f7ef8979";

export default node;
