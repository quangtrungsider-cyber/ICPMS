/**
 * @generated SignedSource<<7e6e3a2d20bc3110149b158b9289eb0a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SidebarFragment$data = {
  readonly canGetContext: boolean;
  readonly canGetTrustCenter: boolean;
  readonly canListAccessReviewCampaigns: boolean;
  readonly canListAssets: boolean;
  readonly canListAudits: boolean;
  readonly canListCookieBanners: boolean;
  readonly canListData: boolean;
  readonly canListDocuments: boolean;
  readonly canListFindings: boolean;
  readonly canListFrameworks: boolean;
  readonly canListMeasures: boolean;
  readonly canListMembers: boolean;
  readonly canListObligations: boolean;
  readonly canListProcessingActivities: boolean;
  readonly canListRightsRequests: boolean;
  readonly canListRisks: boolean;
  readonly canListStatementsOfApplicability: boolean;
  readonly canListTasks: boolean;
  readonly canListThirdParties: boolean;
  readonly canUpdateOrganization: boolean;
  readonly " $fragmentType": "SidebarFragment";
};
export type SidebarFragment$key = {
  readonly " $data"?: SidebarFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SidebarFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SidebarFragment",
  "selections": [
    {
      "alias": "canGetContext",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:organization-context:get"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:organization-context:get\")"
    },
    {
      "alias": "canListTasks",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:task:list"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:task:list\")"
    },
    {
      "alias": "canListMeasures",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:measure:list"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:measure:list\")"
    },
    {
      "alias": "canListRisks",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:risk:list"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:risk:list\")"
    },
    {
      "alias": "canListFrameworks",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:framework:list"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:framework:list\")"
    },
    {
      "alias": "canListMembers",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "iam:membership:list"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"iam:membership:list\")"
    },
    {
      "alias": "canListThirdParties",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:thirdParty:list"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:thirdParty:list\")"
    },
    {
      "alias": "canListDocuments",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:document:list"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:document:list\")"
    },
    {
      "alias": "canListAssets",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:asset:list"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:asset:list\")"
    },
    {
      "alias": "canListData",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:datum:list"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:datum:list\")"
    },
    {
      "alias": "canListAudits",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:audit:list"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:audit:list\")"
    },
    {
      "alias": "canListFindings",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:finding:list"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:finding:list\")"
    },
    {
      "alias": "canListObligations",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:obligation:list"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:obligation:list\")"
    },
    {
      "alias": "canListProcessingActivities",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:processing-activity:list"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:processing-activity:list\")"
    },
    {
      "alias": "canListRightsRequests",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:rights-request:list"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:rights-request:list\")"
    },
    {
      "alias": "canGetTrustCenter",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:trust-center:get"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:trust-center:get\")"
    },
    {
      "alias": "canListCookieBanners",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:cookie-banner:list"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:cookie-banner:list\")"
    },
    {
      "alias": "canUpdateOrganization",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "iam:organization:update"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"iam:organization:update\")"
    },
    {
      "alias": "canListStatementsOfApplicability",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:statement-of-applicability:list"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:statement-of-applicability:list\")"
    },
    {
      "alias": "canListAccessReviewCampaigns",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:access-review-campaign:list"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:access-review-campaign:list\")"
    }
  ],
  "type": "Organization",
  "abstractKey": null
};

(node as any).hash = "b08e4aeb522d758e160ae699ffeb0200";

export default node;
