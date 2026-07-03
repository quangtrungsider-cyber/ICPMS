/**
 * @generated SignedSource<<d17240723b8f9a7670f897501fb1477f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsChecklistApprovalStatus = "APPROVED" | "NEEDS_REVISION" | "PENDING_REVIEW" | "REJECTED";
export type IcpmsChecklistCreatedFrom = "AI_REVIEW" | "IMPORT" | "MANUAL" | "SYSTEM";
export type IcpmsChecklistStatus = "ACTIVE" | "ARCHIVED" | "DELETED" | "DRAFT" | "INACTIVE" | "NEEDS_REVIEW";
export type IcpmsChecklistPageListQuery$variables = {
  organizationId: string;
};
export type IcpmsChecklistPageListQuery$data = {
  readonly icpmsChecklists: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly actionPlan: string | null | undefined;
        readonly approvalStatus: IcpmsChecklistApprovalStatus;
        readonly checklistCode: string;
        readonly checklistQuestion: string;
        readonly complianceDomain: string | null | undefined;
        readonly createdAt: string;
        readonly createdFrom: IcpmsChecklistCreatedFrom;
        readonly currentStatusText: string | null | undefined;
        readonly document: {
          readonly code: string;
          readonly id: string;
          readonly title: string;
        };
        readonly documentVersion: {
          readonly id: string;
          readonly versionCode: string;
        };
        readonly dueDays: number | null | undefined;
        readonly frequency: string | null | undefined;
        readonly id: string;
        readonly implementationMethod: string | null | undefined;
        readonly priority: string;
        readonly requiredEvidence: string | null | undefined;
        readonly requirement: {
          readonly id: string;
          readonly requirementCode: string;
          readonly title: string;
        } | null | undefined;
        readonly requirementText: string | null | undefined;
        readonly responsibleRole: string | null | undefined;
        readonly responsibleUnit: string | null | undefined;
        readonly riskIfNotComplied: string | null | undefined;
        readonly sourceReference: string | null | undefined;
        readonly status: IcpmsChecklistStatus;
        readonly updatedAt: string;
      };
    }>;
  };
};
export type IcpmsChecklistPageListQuery = {
  response: IcpmsChecklistPageListQuery$data;
  variables: IcpmsChecklistPageListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "organizationId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "organizationId",
        "variableName": "organizationId"
      }
    ],
    "concreteType": "IcpmsChecklistConnection",
    "kind": "LinkedField",
    "name": "icpmsChecklists",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsChecklistEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "IcpmsChecklist",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "checklistCode",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "checklistQuestion",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "requirementText",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "sourceReference",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "priority",
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
                "name": "approvalStatus",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "createdFrom",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "responsibleUnit",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "responsibleRole",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "complianceDomain",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "frequency",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "implementationMethod",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "currentStatusText",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "actionPlan",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "requiredEvidence",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "riskIfNotComplied",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "dueDays",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "createdAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "updatedAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "IcpmsDocument",
                "kind": "LinkedField",
                "name": "document",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "code",
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "IcpmsDocumentVersion",
                "kind": "LinkedField",
                "name": "documentVersion",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "versionCode",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "IcpmsRequirement",
                "kind": "LinkedField",
                "name": "requirement",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "requirementCode",
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
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
    "name": "IcpmsChecklistPageListQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsChecklistPageListQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "4dfc4cb990681d2cf622fc19700b5262",
    "id": null,
    "metadata": {},
    "name": "IcpmsChecklistPageListQuery",
    "operationKind": "query",
    "text": "query IcpmsChecklistPageListQuery(\n  $organizationId: ID!\n) {\n  icpmsChecklists(organizationId: $organizationId) {\n    edges {\n      node {\n        id\n        checklistCode\n        checklistQuestion\n        requirementText\n        sourceReference\n        priority\n        status\n        approvalStatus\n        createdFrom\n        responsibleUnit\n        responsibleRole\n        complianceDomain\n        frequency\n        implementationMethod\n        currentStatusText\n        actionPlan\n        requiredEvidence\n        riskIfNotComplied\n        dueDays\n        createdAt\n        updatedAt\n        document {\n          id\n          code\n          title\n        }\n        documentVersion {\n          id\n          versionCode\n        }\n        requirement {\n          id\n          requirementCode\n          title\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9af2b6e36c2d676764fe17d4b34a82c6";

export default node;
