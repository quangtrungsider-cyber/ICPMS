/**
 * @generated SignedSource<<882b0aa76f3efb84a7512b1a754a01c1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ThirdPartyOverviewTabDataPrivacyAgreementFragment$data = {
  readonly dataPrivacyAgreement: {
    readonly canDelete: boolean;
    readonly canUpdate: boolean;
    readonly fileName: string;
    readonly fileUrl: string;
    readonly id: string;
    readonly validFrom: string | null | undefined;
    readonly validUntil: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "ThirdPartyOverviewTabDataPrivacyAgreementFragment";
};
export type ThirdPartyOverviewTabDataPrivacyAgreementFragment$key = {
  readonly " $data"?: ThirdPartyOverviewTabDataPrivacyAgreementFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ThirdPartyOverviewTabDataPrivacyAgreementFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ThirdPartyOverviewTabDataPrivacyAgreementFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ThirdPartyDataPrivacyAgreement",
      "kind": "LinkedField",
      "name": "dataPrivacyAgreement",
      "plural": false,
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
          "name": "fileName",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "fileUrl",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "validFrom",
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
          "alias": "canUpdate",
          "args": [
            {
              "kind": "Literal",
              "name": "action",
              "value": "core:thirdParty-data-privacy-agreement:update"
            }
          ],
          "kind": "ScalarField",
          "name": "permission",
          "storageKey": "permission(action:\"core:thirdParty-data-privacy-agreement:update\")"
        },
        {
          "alias": "canDelete",
          "args": [
            {
              "kind": "Literal",
              "name": "action",
              "value": "core:thirdParty-data-privacy-agreement:delete"
            }
          ],
          "kind": "ScalarField",
          "name": "permission",
          "storageKey": "permission(action:\"core:thirdParty-data-privacy-agreement:delete\")"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ThirdParty",
  "abstractKey": null
};

(node as any).hash = "13c3f56158334b5c3daf5f3638343efb";

export default node;
