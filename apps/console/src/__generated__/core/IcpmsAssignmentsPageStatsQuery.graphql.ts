/**
 * @generated SignedSource<<3a0808b51bdb48084c533a8e1c62aa85>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsAssignmentsPageStatsQuery$variables = {
  organizationId: string;
};
export type IcpmsAssignmentsPageStatsQuery$data = {
  readonly icpmsAssignmentStats: {
    readonly accepted: number;
    readonly assigned: number;
    readonly cancelled: number;
    readonly closed: number;
    readonly completed: number;
    readonly inProgress: number;
    readonly overdue: number;
    readonly submitted: number;
    readonly totalAssignments: number;
  };
};
export type IcpmsAssignmentsPageStatsQuery = {
  response: IcpmsAssignmentsPageStatsQuery$data;
  variables: IcpmsAssignmentsPageStatsQuery$variables;
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
    "concreteType": "IcpmsAssignmentStats",
    "kind": "LinkedField",
    "name": "icpmsAssignmentStats",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalAssignments",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "assigned",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "accepted",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "inProgress",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "submitted",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "completed",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "closed",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "overdue",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cancelled",
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
    "name": "IcpmsAssignmentsPageStatsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsAssignmentsPageStatsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "cba6c68d5df5918f147047ecce813530",
    "id": null,
    "metadata": {},
    "name": "IcpmsAssignmentsPageStatsQuery",
    "operationKind": "query",
    "text": "query IcpmsAssignmentsPageStatsQuery(\n  $organizationId: ID!\n) {\n  icpmsAssignmentStats(organizationId: $organizationId) {\n    totalAssignments\n    assigned\n    accepted\n    inProgress\n    submitted\n    completed\n    closed\n    overdue\n    cancelled\n  }\n}\n"
  }
};
})();

(node as any).hash = "497b68e4cc00cf4f718a55abda58005b";

export default node;
