/**
 * @generated SignedSource<<fa15a9259e952d9d2ee91ac06e2df0a8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ThirdPartyComplianceTabFragment_report$data = {
  readonly canDelete: boolean;
  readonly file: {
    readonly downloadUrl: string;
    readonly fileName: string;
    readonly size: number;
  } | null | undefined;
  readonly id: string;
  readonly reportDate: string;
  readonly reportName: string;
  readonly validUntil: string | null | undefined;
  readonly " $fragmentType": "ThirdPartyComplianceTabFragment_report";
};
export type ThirdPartyComplianceTabFragment_report$key = {
  readonly " $data"?: ThirdPartyComplianceTabFragment_report$data;
  readonly " $fragmentSpreads": FragmentRefs<"ThirdPartyComplianceTabFragment_report">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ThirdPartyComplianceTabFragment_report",
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
      "name": "reportDate",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "validUntil",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "reportName",
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
          "name": "size",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "downloadUrl",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": "canDelete",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:thirdParty-compliance-report:delete"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:thirdParty-compliance-report:delete\")"
    }
  ],
  "type": "ThirdPartyComplianceReport",
  "abstractKey": null
};

(node as any).hash = "48d2e6da00f1bf3a5550d8b2f665699b";

export default node;
