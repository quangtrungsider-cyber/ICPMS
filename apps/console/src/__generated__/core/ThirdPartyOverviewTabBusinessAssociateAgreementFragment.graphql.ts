/**
 * @generated SignedSource<<13bd41ed81d772b1beca1d0d66261f82>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ThirdPartyOverviewTabBusinessAssociateAgreementFragment$data = {
  readonly businessAssociateAgreement: {
    readonly canDelete: boolean;
    readonly canUpdate: boolean;
    readonly fileName: string;
    readonly fileUrl: string;
    readonly id: string;
    readonly validFrom: string | null | undefined;
    readonly validUntil: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "ThirdPartyOverviewTabBusinessAssociateAgreementFragment";
};
export type ThirdPartyOverviewTabBusinessAssociateAgreementFragment$key = {
  readonly " $data"?: ThirdPartyOverviewTabBusinessAssociateAgreementFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ThirdPartyOverviewTabBusinessAssociateAgreementFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ThirdPartyOverviewTabBusinessAssociateAgreementFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ThirdPartyBusinessAssociateAgreement",
      "kind": "LinkedField",
      "name": "businessAssociateAgreement",
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
              "value": "core:thirdParty-business-associate-agreement:update"
            }
          ],
          "kind": "ScalarField",
          "name": "permission",
          "storageKey": "permission(action:\"core:thirdParty-business-associate-agreement:update\")"
        },
        {
          "alias": "canDelete",
          "args": [
            {
              "kind": "Literal",
              "name": "action",
              "value": "core:thirdParty-business-associate-agreement:delete"
            }
          ],
          "kind": "ScalarField",
          "name": "permission",
          "storageKey": "permission(action:\"core:thirdParty-business-associate-agreement:delete\")"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ThirdParty",
  "abstractKey": null
};

(node as any).hash = "ee50b4c45cc65833407909428680031a";

export default node;
