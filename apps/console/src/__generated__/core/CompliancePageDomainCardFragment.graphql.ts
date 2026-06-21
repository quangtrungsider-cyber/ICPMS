/**
 * @generated SignedSource<<bc7aa055a399b7d49f1196d47473190c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type SSLStatus = "ACTIVE" | "EXPIRED" | "FAILED" | "PENDING" | "PROVISIONING" | "RENEWING";
import { FragmentRefs } from "relay-runtime";
export type CompliancePageDomainCardFragment$data = {
  readonly canDelete: boolean;
  readonly domain: string;
  readonly provisioningError: string | null | undefined;
  readonly sslStatus: SSLStatus;
  readonly " $fragmentSpreads": FragmentRefs<"CompliancePageDomainDialogFragment">;
  readonly " $fragmentType": "CompliancePageDomainCardFragment";
};
export type CompliancePageDomainCardFragment$key = {
  readonly " $data"?: CompliancePageDomainCardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CompliancePageDomainCardFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CompliancePageDomainCardFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "domain",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "sslStatus",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "provisioningError",
      "storageKey": null
    },
    {
      "alias": "canDelete",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:custom-domain:delete"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:custom-domain:delete\")"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CompliancePageDomainDialogFragment"
    }
  ],
  "type": "CustomDomain",
  "abstractKey": null
};

(node as any).hash = "8e7008667d918f4968b739321cdc86d5";

export default node;
