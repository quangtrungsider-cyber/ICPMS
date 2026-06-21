/**
 * @generated SignedSource<<160af5102fd273f91f2fb29aa8ba7dff>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type SSLStatus = "ACTIVE" | "EXPIRED" | "FAILED" | "PENDING" | "PROVISIONING" | "RENEWING";
import { FragmentRefs } from "relay-runtime";
export type CompliancePageDomainDialogFragment$data = {
  readonly dnsRecords: ReadonlyArray<{
    readonly name: string;
    readonly purpose: string;
    readonly ttl: number;
    readonly type: string;
    readonly value: string;
  }>;
  readonly domain: string;
  readonly provisioningError: string | null | undefined;
  readonly sslExpiresAt: string | null | undefined;
  readonly sslStatus: SSLStatus;
  readonly " $fragmentType": "CompliancePageDomainDialogFragment";
};
export type CompliancePageDomainDialogFragment$key = {
  readonly " $data"?: CompliancePageDomainDialogFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CompliancePageDomainDialogFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CompliancePageDomainDialogFragment",
  "selections": [
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
      "name": "domain",
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
      "alias": null,
      "args": null,
      "concreteType": "DNSRecordInstruction",
      "kind": "LinkedField",
      "name": "dnsRecords",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
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
          "name": "value",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "ttl",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "purpose",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "sslExpiresAt",
      "storageKey": null
    }
  ],
  "type": "CustomDomain",
  "abstractKey": null
};

(node as any).hash = "79b95712467d2400735e2cdbcdecf7f9";

export default node;
