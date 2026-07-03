/**
 * @generated SignedSource<<082248eb9eedace406ff73accb642d6e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsAssignmentEvidenceStatus = "APPROVED" | "NOT_REQUIRED" | "REJECTED" | "REQUIRED_NOT_SUBMITTED" | "SUBMITTED";
export type IcpmsAssignmentPriority = "CRITICAL" | "HIGH" | "LOW" | "MEDIUM";
export type IcpmsAssignmentStatus = "ACCEPTED" | "ASSIGNED" | "CANCELLED" | "CLOSED" | "COMPLETED" | "DELETED" | "DRAFT" | "IN_PROGRESS" | "OVERDUE" | "RETURNED" | "SUBMITTED";
export type IcpmsEvidencePageListQuery$variables = {
  organizationId: string;
};
export type IcpmsEvidencePageListQuery$data = {
  readonly icpmsAssignments: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly actionPlanText: string | null | undefined;
        readonly assignmentCode: string;
        readonly assignmentTitle: string;
        readonly checklist: {
          readonly checklistCode: string;
          readonly checklistQuestion: string;
          readonly id: string;
          readonly implementationMethod: string | null | undefined;
          readonly requiredEvidence: string | null | undefined;
        } | null | undefined;
        readonly currentStatusText: string | null | undefined;
        readonly document: {
          readonly code: string;
          readonly id: string;
          readonly title: string;
        } | null | undefined;
        readonly dueDate: string | null | undefined;
        readonly evidenceStatus: IcpmsAssignmentEvidenceStatus;
        readonly id: string;
        readonly isOverdue: boolean;
        readonly leadUnitName: string;
        readonly priority: IcpmsAssignmentPriority;
        readonly progressPercent: number;
        readonly requirement: {
          readonly id: string;
          readonly requirementCode: string;
          readonly title: string;
        } | null | undefined;
        readonly requiresEvidence: boolean;
        readonly responseNote: string | null | undefined;
        readonly status: IcpmsAssignmentStatus;
        readonly updatedAt: string;
      };
    }>;
    readonly totalCount: number;
  };
};
export type IcpmsEvidencePageListQuery = {
  response: IcpmsEvidencePageListQuery$data;
  variables: IcpmsEvidencePageListQuery$variables;
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
    "concreteType": "IcpmsAssignmentConnection",
    "kind": "LinkedField",
    "name": "icpmsAssignments",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsAssignmentEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "IcpmsAssignment",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "assignmentCode",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "assignmentTitle",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "leadUnitName",
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
                "name": "evidenceStatus",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "requiresEvidence",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "progressPercent",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "dueDate",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isOverdue",
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
                "name": "actionPlanText",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "responseNote",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "IcpmsChecklist",
                "kind": "LinkedField",
                "name": "checklist",
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
                    "name": "requiredEvidence",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "implementationMethod",
                    "storageKey": null
                  }
                ],
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
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "updatedAt",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalCount",
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
    "name": "IcpmsEvidencePageListQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsEvidencePageListQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "8ee999e41c17215a851ea607b0f01721",
    "id": null,
    "metadata": {},
    "name": "IcpmsEvidencePageListQuery",
    "operationKind": "query",
    "text": "query IcpmsEvidencePageListQuery(\n  $organizationId: ID!\n) {\n  icpmsAssignments(organizationId: $organizationId) {\n    edges {\n      node {\n        id\n        assignmentCode\n        assignmentTitle\n        leadUnitName\n        priority\n        status\n        evidenceStatus\n        requiresEvidence\n        progressPercent\n        dueDate\n        isOverdue\n        currentStatusText\n        actionPlanText\n        responseNote\n        checklist {\n          id\n          checklistCode\n          checklistQuestion\n          requiredEvidence\n          implementationMethod\n        }\n        document {\n          id\n          code\n          title\n        }\n        requirement {\n          id\n          requirementCode\n          title\n        }\n        updatedAt\n      }\n    }\n    totalCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "b6fa31c9aac51e2222f6b9f6dfff8cb2";

export default node;
