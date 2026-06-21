/**
 * @generated SignedSource<<0a5d9c7567df5eb0567a5fbbc4b84317>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsChecklistApprovalStatus = "APPROVED" | "NEEDS_REVISION" | "PENDING_REVIEW" | "REJECTED";
export type IcpmsChecklistStatus = "ACTIVE" | "ARCHIVED" | "DELETED" | "DRAFT" | "INACTIVE" | "NEEDS_REVIEW";
export type IcpmsAssignmentsPageChecklistsQuery$variables = {
  organizationId: string;
};
export type IcpmsAssignmentsPageChecklistsQuery$data = {
  readonly icpmsChecklists: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly approvalStatus: IcpmsChecklistApprovalStatus;
        readonly checklistCode: string;
        readonly checklistQuestion: string;
        readonly id: string;
        readonly priority: string;
        readonly responsibleUnit: string | null | undefined;
        readonly status: IcpmsChecklistStatus;
      };
    }>;
  };
};
export type IcpmsAssignmentsPageChecklistsQuery = {
  response: IcpmsAssignmentsPageChecklistsQuery$data;
  variables: IcpmsAssignmentsPageChecklistsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "organizationId"
  }
],
v1 = [
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
                "name": "responsibleUnit",
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
    "name": "IcpmsAssignmentsPageChecklistsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsAssignmentsPageChecklistsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "98877a19c26b4e4a48ad9022712cebe2",
    "id": null,
    "metadata": {},
    "name": "IcpmsAssignmentsPageChecklistsQuery",
    "operationKind": "query",
    "text": "query IcpmsAssignmentsPageChecklistsQuery(\n  $organizationId: ID!\n) {\n  icpmsChecklists(organizationId: $organizationId) {\n    edges {\n      node {\n        id\n        checklistCode\n        checklistQuestion\n        responsibleUnit\n        priority\n        status\n        approvalStatus\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0c2c3456f2907b9a9e90cf8bac14b0f5";

export default node;
