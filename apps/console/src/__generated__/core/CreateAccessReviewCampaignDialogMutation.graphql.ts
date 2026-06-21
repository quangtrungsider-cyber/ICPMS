/**
 * @generated SignedSource<<3a6a150482af80b6a45ad3b0479bbfe8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AccessReviewCampaignStatus = "CANCELLED" | "COMPLETED" | "DRAFT" | "IN_PROGRESS" | "PENDING_ACTIONS";
export type CreateAccessReviewCampaignInput = {
  accessSourceIds?: ReadonlyArray<string> | null | undefined;
  description?: string | null | undefined;
  frameworkControls?: ReadonlyArray<string> | null | undefined;
  name: string;
  organizationId: string;
};
export type CreateAccessReviewCampaignDialogMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateAccessReviewCampaignInput;
};
export type CreateAccessReviewCampaignDialogMutation$data = {
  readonly createAccessReviewCampaign: {
    readonly accessReviewCampaignEdge: {
      readonly node: {
        readonly createdAt: string;
        readonly id: string;
        readonly name: string;
        readonly status: AccessReviewCampaignStatus;
      };
    };
  };
};
export type CreateAccessReviewCampaignDialogMutation = {
  response: CreateAccessReviewCampaignDialogMutation$data;
  variables: CreateAccessReviewCampaignDialogMutation$variables;
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
  "concreteType": "AccessReviewCampaignEdge",
  "kind": "LinkedField",
  "name": "accessReviewCampaignEdge",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "AccessReviewCampaign",
      "kind": "LinkedField",
      "name": "node",
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
          "name": "name",
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
          "name": "createdAt",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
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
    "name": "CreateAccessReviewCampaignDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateAccessReviewCampaignPayload",
        "kind": "LinkedField",
        "name": "createAccessReviewCampaign",
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
    "name": "CreateAccessReviewCampaignDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateAccessReviewCampaignPayload",
        "kind": "LinkedField",
        "name": "createAccessReviewCampaign",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "prependEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "accessReviewCampaignEdge",
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
    "cacheID": "ca216e6ae0620d9b6b0f2a1532d80d6a",
    "id": null,
    "metadata": {},
    "name": "CreateAccessReviewCampaignDialogMutation",
    "operationKind": "mutation",
    "text": "mutation CreateAccessReviewCampaignDialogMutation(\n  $input: CreateAccessReviewCampaignInput!\n) {\n  createAccessReviewCampaign(input: $input) {\n    accessReviewCampaignEdge {\n      node {\n        id\n        name\n        status\n        createdAt\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b5d2a777353bfcf42c131149a195c52c";

export default node;
