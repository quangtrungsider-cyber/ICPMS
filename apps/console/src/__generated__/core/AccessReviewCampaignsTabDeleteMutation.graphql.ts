/**
 * @generated SignedSource<<4a7fc2f89c16d5abd042b2c3ebafadad>>
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
export type AccessReviewCampaignsTabDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteAccessReviewCampaignInput;
};
export type AccessReviewCampaignsTabDeleteMutation$data = {
  readonly deleteAccessReviewCampaign: {
    readonly deletedAccessReviewCampaignId: string;
  };
};
export type AccessReviewCampaignsTabDeleteMutation = {
  response: AccessReviewCampaignsTabDeleteMutation$data;
  variables: AccessReviewCampaignsTabDeleteMutation$variables;
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
    "name": "AccessReviewCampaignsTabDeleteMutation",
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
    "name": "AccessReviewCampaignsTabDeleteMutation",
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
    "cacheID": "0a13a6a1c416189c5ab23fe59dd82876",
    "id": null,
    "metadata": {},
    "name": "AccessReviewCampaignsTabDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation AccessReviewCampaignsTabDeleteMutation(\n  $input: DeleteAccessReviewCampaignInput!\n) {\n  deleteAccessReviewCampaign(input: $input) {\n    deletedAccessReviewCampaignId\n  }\n}\n"
  }
};
})();

(node as any).hash = "b7e1bd9ade5ee9f485832f140d800af5";

export default node;
