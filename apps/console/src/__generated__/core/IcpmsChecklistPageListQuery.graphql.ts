/**
 * @generated SignedSource<<14dc6686ff45048e85bf3565418293a7>>
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
        readonly approvalStatus: IcpmsChecklistApprovalStatus;
        readonly checklistCode: string;
        readonly checklistQuestion: string;
        readonly complianceDomain: string | null | undefined;
        readonly createdAt: string;
        readonly createdFrom: IcpmsChecklistCreatedFrom;
        readonly document: {
          readonly code: string;
          readonly id: string;
          readonly title: string;
        };
        readonly documentVersion: {
          readonly id: string;
          readonly versionCode: string;
        };
        readonly id: string;
        readonly priority: string;
        readonly requirement: {
          readonly id: string;
          readonly requirementCode: string;
          readonly title: string;
        } | null | undefined;
        readonly responsibleUnit: string | null | undefined;
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
                "name": "complianceDomain",
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
    "cacheID": "93393440ffb8806a648fa20898628ace",
    "id": null,
    "metadata": {},
    "name": "IcpmsChecklistPageListQuery",
    "operationKind": "query",
    "text": "query IcpmsChecklistPageListQuery(\n  $organizationId: ID!\n) {\n  icpmsChecklists(organizationId: $organizationId) {\n    edges {\n      node {\n        id\n        checklistCode\n        checklistQuestion\n        priority\n        status\n        approvalStatus\n        createdFrom\n        responsibleUnit\n        complianceDomain\n        createdAt\n        updatedAt\n        document {\n          id\n          code\n          title\n        }\n        documentVersion {\n          id\n          versionCode\n        }\n        requirement {\n          id\n          requirementCode\n          title\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f27222778d8b6b437d70a0011c6b145e";

export default node;
