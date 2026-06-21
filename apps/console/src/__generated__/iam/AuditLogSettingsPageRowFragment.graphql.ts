/**
 * @generated SignedSource<<d39f5e4c1cf6285cff840f4128ee1a57>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type AuditLogActorType = "API_KEY" | "SYSTEM" | "USER";
import { FragmentRefs } from "relay-runtime";
export type AuditLogSettingsPageRowFragment$data = {
  readonly action: string;
  readonly actorId: string;
  readonly actorType: AuditLogActorType;
  readonly createdAt: string;
  readonly id: string;
  readonly resourceId: string;
  readonly resourceType: string;
  readonly " $fragmentType": "AuditLogSettingsPageRowFragment";
};
export type AuditLogSettingsPageRowFragment$key = {
  readonly " $data"?: AuditLogSettingsPageRowFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AuditLogSettingsPageRowFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AuditLogSettingsPageRowFragment",
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
      "name": "actorId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "actorType",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "action",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "resourceType",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "resourceId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    }
  ],
  "type": "AuditLogEntry",
  "abstractKey": null
};

(node as any).hash = "0d2fc5af615353f1f3a10ef2dc44e624";

export default node;
