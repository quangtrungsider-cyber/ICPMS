/**
 * @generated SignedSource<<911d852c5f65259b148ea5cbdab138ed>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AccessReviewCampaignStatus = "CANCELLED" | "COMPLETED" | "DRAFT" | "IN_PROGRESS" | "PENDING_ACTIONS";
export type CloseAccessReviewCampaignInput = {
  accessReviewCampaignId: string;
};
export type CampaignDetailPageCloseMutation$variables = {
  input: CloseAccessReviewCampaignInput;
};
export type CampaignDetailPageCloseMutation$data = {
  readonly closeAccessReviewCampaign: {
    readonly accessReviewCampaign: {
      readonly completedAt: string | null | undefined;
      readonly id: string;
      readonly status: AccessReviewCampaignStatus;
    };
  };
};
export type CampaignDetailPageCloseMutation = {
  response: CampaignDetailPageCloseMutation$data;
  variables: CampaignDetailPageCloseMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CloseAccessReviewCampaignPayload",
    "kind": "LinkedField",
    "name": "closeAccessReviewCampaign",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AccessReviewCampaign",
        "kind": "LinkedField",
        "name": "accessReviewCampaign",
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
            "name": "status",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "completedAt",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CampaignDetailPageCloseMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CampaignDetailPageCloseMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7656e97944b74fc9a610d31215266327",
    "id": null,
    "metadata": {},
    "name": "CampaignDetailPageCloseMutation",
    "operationKind": "mutation",
    "text": "mutation CampaignDetailPageCloseMutation(\n  $input: CloseAccessReviewCampaignInput!\n) {\n  closeAccessReviewCampaign(input: $input) {\n    accessReviewCampaign {\n      id\n      status\n      completedAt\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "243412c7f1a0f00237482be64fba8638";

export default node;
