/**
 * @generated SignedSource<<d2f01ab750b8513e726e61771aab00f1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ThirdPartyContactsTabFragment_contact$data = {
  readonly canDelete: boolean;
  readonly canUpdate: boolean;
  readonly email: string | null | undefined;
  readonly fullName: string | null | undefined;
  readonly id: string;
  readonly phone: string | null | undefined;
  readonly role: string | null | undefined;
  readonly " $fragmentType": "ThirdPartyContactsTabFragment_contact";
};
export type ThirdPartyContactsTabFragment_contact$key = {
  readonly " $data"?: ThirdPartyContactsTabFragment_contact$data;
  readonly " $fragmentSpreads": FragmentRefs<"ThirdPartyContactsTabFragment_contact">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ThirdPartyContactsTabFragment_contact",
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
      "name": "fullName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "phone",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "role",
      "storageKey": null
    },
    {
      "alias": "canUpdate",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:thirdParty-contact:update"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:thirdParty-contact:update\")"
    },
    {
      "alias": "canDelete",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:thirdParty-contact:delete"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:thirdParty-contact:delete\")"
    }
  ],
  "type": "ThirdPartyContact",
  "abstractKey": null
};

(node as any).hash = "87086696e30efe882291daa950d2b029";

export default node;
