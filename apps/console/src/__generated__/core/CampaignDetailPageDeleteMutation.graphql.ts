/**
 * @generated SignedSource<<a3ed75cf045a69f5e4d903e6d59542f4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteAccessReviewCampaignInput = {
  accessReviewCampaignId: string;
};
export type CampaignDetailPageDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteAccessReviewCampaignInput;
};
export type CampaignDetailPageDeleteMutation$data = {
  readonly deleteAccessReviewCampaign: {
    readonly deletedAccessReviewCampaignId: string;
  };
};
export type CampaignDetailPageDeleteMutation = {
  response: CampaignDetailPageDeleteMutation$data;
  variables: CampaignDetailPageDeleteMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "deletedAccessReviewCampaignId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CampaignDetailPageDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteAccessReviewCampaignPayload",
        "kind": "LinkedField",
        "name": "deleteAccessReviewCampaign",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CampaignDetailPageDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteAccessReviewCampaignPayload",
        "kind": "LinkedField",
        "name": "deleteAccessReviewCampaign",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "deletedAccessReviewCampaignId",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "afc709957ad469b36beef67dd64eae5c",
    "id": null,
    "metadata": {},
    "name": "CampaignDetailPageDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation CampaignDetailPageDeleteMutation(\n  $input: DeleteAccessReviewCampaignInput!\n) {\n  deleteAccessReviewCampaign(input: $input) {\n    deletedAccessReviewCampaignId\n  }\n}\n"
  }
};
})();

(node as any).hash = "b6ca84d0fc255b17799c86d06053ffb9";

export default node;
