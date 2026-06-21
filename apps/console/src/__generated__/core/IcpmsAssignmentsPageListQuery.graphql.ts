/**
 * @generated SignedSource<<2bddede6ffe34a95b324f3983df729e6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsAssignmentCreatedFrom = "AI_REVIEW_SUGGESTION" | "CHECKLIST" | "MANUAL" | "SYSTEM";
export type IcpmsAssignmentPriority = "CRITICAL" | "HIGH" | "LOW" | "MEDIUM";
export type IcpmsAssignmentStatus = "ACCEPTED" | "ASSIGNED" | "CANCELLED" | "CLOSED" | "COMPLETED" | "DELETED" | "DRAFT" | "IN_PROGRESS" | "OVERDUE" | "RETURNED" | "SUBMITTED";
export type IcpmsAssignmentsPageListQuery$variables = {
  organizationId: string;
};
export type IcpmsAssignmentsPageListQuery$data = {
  readonly icpmsAssignments: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly assignedAt: string | null | undefined;
        readonly assignmentCode: string;
        readonly assignmentTitle: string;
        readonly checklist: {
          readonly checklistCode: string;
          readonly checklistQuestion: string;
          readonly id: string;
        } | null | undefined;
        readonly coordinationUnitNames: string | null | undefined;
        readonly createdFrom: IcpmsAssignmentCreatedFrom;
        readonly document: {
          readonly code: string;
          readonly id: string;
          readonly title: string;
        } | null | undefined;
        readonly dueDate: string | null | undefined;
        readonly id: string;
        readonly isOverdue: boolean;
        readonly leadUnitName: string;
        readonly priority: IcpmsAssignmentPriority;
        readonly progressPercent: number;
        readonly status: IcpmsAssignmentStatus;
      };
    }>;
    readonly totalCount: number;
  };
};
export type IcpmsAssignmentsPageListQuery = {
  response: IcpmsAssignmentsPageListQuery$data;
  variables: IcpmsAssignmentsPageListQuery$variables;
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
v2 = [
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
                "name": "coordinationUnitNames",
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
                "name": "assignedAt",
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
                "name": "isOverdue",
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
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
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
    "name": "IcpmsAssignmentsPageListQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsAssignmentsPageListQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "1ded669fbeb1c2c98b3d266f1b6bc999",
    "id": null,
    "metadata": {},
    "name": "IcpmsAssignmentsPageListQuery",
    "operationKind": "query",
    "text": "query IcpmsAssignmentsPageListQuery(\n  $organizationId: ID!\n) {\n  icpmsAssignments(organizationId: $organizationId) {\n    edges {\n      node {\n        id\n        assignmentCode\n        assignmentTitle\n        leadUnitName\n        coordinationUnitNames\n        priority\n        status\n        progressPercent\n        dueDate\n        assignedAt\n        createdFrom\n        isOverdue\n        checklist {\n          id\n          checklistCode\n          checklistQuestion\n        }\n        document {\n          id\n          code\n          title\n        }\n      }\n    }\n    totalCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "42c62ae7e8ff667f65cfddd05bda2602";

export default node;
