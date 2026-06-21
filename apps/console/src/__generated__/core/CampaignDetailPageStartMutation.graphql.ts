/**
 * @generated SignedSource<<363a442cdf2cc75c26b929516941b804>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AccessReviewCampaignStatus = "CANCELLED" | "COMPLETED" | "DRAFT" | "IN_PROGRESS" | "PENDING_ACTIONS";
export type StartAccessReviewCampaignInput = {
  accessReviewCampaignId: string;
};
export type CampaignDetailPageStartMutation$variables = {
  input: StartAccessReviewCampaignInput;
};
export type CampaignDetailPageStartMutation$data = {
  readonly startAccessReviewCampaign: {
    readonly accessReviewCampaign: {
      readonly id: string;
      readonly startedAt: string | null | undefined;
      readonly status: AccessReviewCampaignStatus;
    };
  };
};
export type CampaignDetailPageStartMutation = {
  response: CampaignDetailPageStartMutation$data;
  variables: CampaignDetailPageStartMutation$variables;
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
    "concreteType": "StartAccessReviewCampaignPayload",
    "kind": "LinkedField",
    "name": "startAccessReviewCampaign",
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
            "name": "startedAt",
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
    "name": "CampaignDetailPageStartMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CampaignDetailPageStartMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e3cf9ea00b4d15f5a862d68db3ff7f13",
    "id": null,
    "metadata": {},
    "name": "CampaignDetailPageStartMutation",
    "operationKind": "mutation",
    "text": "mutation CampaignDetailPageStartMutation(\n  $input: StartAccessReviewCampaignInput!\n) {\n  startAccessReviewCampaign(input: $input) {\n    accessReviewCampaign {\n      id\n      status\n      startedAt\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "823d37cfdeb4b6952cafd19597c538c2";

export default node;
