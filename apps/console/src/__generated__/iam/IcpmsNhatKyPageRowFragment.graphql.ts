/**
 * @generated SignedSource<<c5a1463d60c3d0efa0395f5560f9e6f8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type AuditLogActorType = "API_KEY" | "SYSTEM" | "USER";
import { FragmentRefs } from "relay-runtime";
export type IcpmsNhatKyPageRowFragment$data = {
  readonly action: string;
  readonly actorId: string;
  readonly actorType: AuditLogActorType;
  readonly createdAt: string;
  readonly id: string;
  readonly metadata: string | null | undefined;
  readonly resourceId: string;
  readonly resourceType: string;
  readonly " $fragmentType": "IcpmsNhatKyPageRowFragment";
};
export type IcpmsNhatKyPageRowFragment$key = {
  readonly " $data"?: IcpmsNhatKyPageRowFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"IcpmsNhatKyPageRowFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IcpmsNhatKyPageRowFragment",
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
      "name": "metadata",
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

(node as any).hash = "789ab78d8aa674f7030619f52f6d70ce";

export default node;
