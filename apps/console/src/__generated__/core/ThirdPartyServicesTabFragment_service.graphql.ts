/**
 * @generated SignedSource<<3e8c1dafc562a8604f9b55a4c44dfe11>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ThirdPartyServicesTabFragment_service$data = {
  readonly canDelete: boolean;
  readonly canUpdate: boolean;
  readonly description: string | null | undefined;
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "ThirdPartyServicesTabFragment_service";
};
export type ThirdPartyServicesTabFragment_service$key = {
  readonly " $data"?: ThirdPartyServicesTabFragment_service$data;
  readonly " $fragmentSpreads": FragmentRefs<"ThirdPartyServicesTabFragment_service">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ThirdPartyServicesTabFragment_service",
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
      "name": "description",
      "storageKey": null
    },
    {
      "alias": "canUpdate",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:thirdParty-service:update"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:thirdParty-service:update\")"
    },
    {
      "alias": "canDelete",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:thirdParty-service:delete"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:thirdParty-service:delete\")"
    }
  ],
  "type": "ThirdPartyService",
  "abstractKey": null
};

(node as any).hash = "64a4fc2567eced6fabf0bacd98c950ea";

export default node;
