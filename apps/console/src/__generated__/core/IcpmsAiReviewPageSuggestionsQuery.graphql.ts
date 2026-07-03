/**
 * @generated SignedSource<<edc4db69badd7c5af616144d67f50dad>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsAiReviewSuggestionStatus = "ACCEPTED" | "AI_SUGGESTED" | "ARCHIVED" | "DELETED" | "EDITED" | "NEEDS_HUMAN_REVIEW" | "REJECTED";
export type IcpmsApplicabilityStatus = "APPLICABLE" | "NEEDS_REVIEW" | "NOT_APPLICABLE" | "PARTIALLY_APPLICABLE" | "UNKNOWN";
export type IcpmsRequirementPriority = "HIGH" | "LOW" | "MEDIUM";
export type IcpmsRequirementReviewStatus = "APPROVED" | "ARCHIVED" | "CANDIDATE" | "NEEDS_REVIEW" | "REJECTED" | "REVIEWED";
export type IcpmsRequirementType = "EVIDENCE" | "INFORMATION" | "MONITORING" | "OBLIGATION" | "OTHER" | "PROCESS" | "PROHIBITION" | "RECORD" | "REPORTING" | "RESPONSIBILITY" | "REVIEW" | "TRAINING";
export type IcpmsAiReviewPageSuggestionsQuery$variables = {
  jobId: string;
};
export type IcpmsAiReviewPageSuggestionsQuery$data = {
  readonly icpmsAiReviewSuggestions: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly acceptedAt: string | null | undefined;
        readonly aiConfidence: number;
        readonly aiReviewJobId: string;
        readonly id: string;
        readonly rejectedAt: string | null | undefined;
        readonly rejectionReason: string | null | undefined;
        readonly requirement: {
          readonly applicabilityStatus: IcpmsApplicabilityStatus;
          readonly description: string | null | undefined;
          readonly id: string;
          readonly priority: IcpmsRequirementPriority;
          readonly requirementCode: string;
          readonly requirementType: IcpmsRequirementType;
          readonly reviewStatus: IcpmsRequirementReviewStatus;
          readonly sourceReference: string | null | undefined;
          readonly sourceSectionId: string | null | undefined;
          readonly title: string;
        };
        readonly status: IcpmsAiReviewSuggestionStatus;
        readonly suggestedActionPlan: string | null | undefined;
        readonly suggestedApplicabilityStatus: string | null | undefined;
        readonly suggestedChecklistQuestion: string | null | undefined;
        readonly suggestedComplianceDomain: string | null | undefined;
        readonly suggestedCurrentStatus: string | null | undefined;
        readonly suggestedEvidence: string | null | undefined;
        readonly suggestedImplementationMethod: string | null | undefined;
        readonly suggestedPriority: string | null | undefined;
        readonly suggestedRequirementType: string | null | undefined;
        readonly suggestedResponsibleRole: string | null | undefined;
        readonly suggestedResponsibleUnit: string | null | undefined;
        readonly suggestedRiskIfNotComplied: string | null | undefined;
      };
    }>;
  };
};
export type IcpmsAiReviewPageSuggestionsQuery = {
  response: IcpmsAiReviewPageSuggestionsQuery$data;
  variables: IcpmsAiReviewPageSuggestionsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "jobId"
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
        "name": "jobId",
        "variableName": "jobId"
      }
    ],
    "concreteType": "IcpmsAiReviewSuggestionConnection",
    "kind": "LinkedField",
    "name": "icpmsAiReviewSuggestions",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsAiReviewSuggestionEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "IcpmsAiReviewSuggestion",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "aiReviewJobId",
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
                "name": "aiConfidence",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "suggestedImplementationMethod",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "suggestedResponsibleUnit",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "suggestedResponsibleRole",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "suggestedEvidence",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "suggestedCurrentStatus",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "suggestedActionPlan",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "suggestedChecklistQuestion",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "suggestedRiskIfNotComplied",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "suggestedRequirementType",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "suggestedApplicabilityStatus",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "suggestedPriority",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "suggestedComplianceDomain",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "acceptedAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "rejectedAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "rejectionReason",
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
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
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
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "requirementType",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "reviewStatus",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "applicabilityStatus",
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
                    "name": "sourceSectionId",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "sourceReference",
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IcpmsAiReviewPageSuggestionsQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsAiReviewPageSuggestionsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "90a1bfc142298c56152b0f12ffb97092",
    "id": null,
    "metadata": {},
    "name": "IcpmsAiReviewPageSuggestionsQuery",
    "operationKind": "query",
    "text": "query IcpmsAiReviewPageSuggestionsQuery(\n  $jobId: ID!\n) {\n  icpmsAiReviewSuggestions(jobId: $jobId) {\n    edges {\n      node {\n        id\n        aiReviewJobId\n        status\n        aiConfidence\n        suggestedImplementationMethod\n        suggestedResponsibleUnit\n        suggestedResponsibleRole\n        suggestedEvidence\n        suggestedCurrentStatus\n        suggestedActionPlan\n        suggestedChecklistQuestion\n        suggestedRiskIfNotComplied\n        suggestedRequirementType\n        suggestedApplicabilityStatus\n        suggestedPriority\n        suggestedComplianceDomain\n        acceptedAt\n        rejectedAt\n        rejectionReason\n        requirement {\n          id\n          requirementCode\n          title\n          description\n          requirementType\n          reviewStatus\n          applicabilityStatus\n          priority\n          sourceSectionId\n          sourceReference\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1d698b23b8815a96ecdbaed348c5ba8c";

export default node;
