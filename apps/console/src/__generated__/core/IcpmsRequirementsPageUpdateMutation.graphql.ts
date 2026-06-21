/**
 * @generated SignedSource<<9b3d6fe4f19c8c0108c1eda38fd9ce4a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsApplicabilityStatus = "APPLICABLE" | "NEEDS_REVIEW" | "NOT_APPLICABLE" | "PARTIALLY_APPLICABLE" | "UNKNOWN";
export type IcpmsRequirementPriority = "HIGH" | "LOW" | "MEDIUM";
export type IcpmsRequirementReviewStatus = "APPROVED" | "ARCHIVED" | "CANDIDATE" | "NEEDS_REVIEW" | "REJECTED" | "REVIEWED";
export type IcpmsRequirementType = "EVIDENCE" | "INFORMATION" | "MONITORING" | "OBLIGATION" | "OTHER" | "PROCESS" | "PROHIBITION" | "RECORD" | "REPORTING" | "RESPONSIBILITY" | "REVIEW" | "TRAINING";
export type UpdateIcpmsRequirementInput = {
  applicabilityStatus?: IcpmsApplicabilityStatus | null | undefined;
  description?: string | null | undefined;
  id: string;
  priority?: IcpmsRequirementPriority | null | undefined;
  requirementType?: IcpmsRequirementType | null | undefined;
  reviewStatus?: IcpmsRequirementReviewStatus | null | undefined;
  title?: string | null | undefined;
};
export type IcpmsRequirementsPageUpdateMutation$variables = {
  input: UpdateIcpmsRequirementInput;
};
export type IcpmsRequirementsPageUpdateMutation$data = {
  readonly updateIcpmsRequirement: {
    readonly requirement: {
      readonly applicabilityStatus: IcpmsApplicabilityStatus;
      readonly description: string | null | undefined;
      readonly id: string;
      readonly priority: IcpmsRequirementPriority;
      readonly requirementType: IcpmsRequirementType;
      readonly reviewStatus: IcpmsRequirementReviewStatus;
      readonly title: string;
      readonly updatedAt: string;
    } | null | undefined;
  };
};
export type IcpmsRequirementsPageUpdateMutation = {
  response: IcpmsRequirementsPageUpdateMutation$data;
  variables: IcpmsRequirementsPageUpdateMutation$variables;
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
    "concreteType": "UpdateIcpmsRequirementPayload",
    "kind": "LinkedField",
    "name": "updateIcpmsRequirement",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsRequirement",
        "kind": "LinkedField",
        "name": "requirement",
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
            "name": "applicabilityStatus",
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
            "name": "priority",
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IcpmsRequirementsPageUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsRequirementsPageUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7cbb9e8a0c863989c4c4f6c63580302e",
    "id": null,
    "metadata": {},
    "name": "IcpmsRequirementsPageUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsRequirementsPageUpdateMutation(\n  $input: UpdateIcpmsRequirementInput!\n) {\n  updateIcpmsRequirement(input: $input) {\n    requirement {\n      id\n      title\n      description\n      requirementType\n      applicabilityStatus\n      reviewStatus\n      priority\n      updatedAt\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d3821d906f7449c24bc8922ca6686bda";

export default node;
