/**
 * @generated SignedSource<<943889f89f7d40666ff024ef70d56ab3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsAssignmentPriority = "CRITICAL" | "HIGH" | "LOW" | "MEDIUM";
export type CreateIcpmsAssignmentsFromChecklistsInput = {
  checklistIds: ReadonlyArray<string>;
  coordinationUnitNames?: string | null | undefined;
  dueDate?: string | null | undefined;
  dueDays?: number | null | undefined;
  leadUnitName: string;
  priority?: IcpmsAssignmentPriority | null | undefined;
  requiresEvidence?: boolean | null | undefined;
};
export type IcpmsAssignmentsPageCreateFromChecklistsMutation$variables = {
  input: CreateIcpmsAssignmentsFromChecklistsInput;
};
export type IcpmsAssignmentsPageCreateFromChecklistsMutation$data = {
  readonly createIcpmsAssignmentsFromChecklists: {
    readonly assignments: ReadonlyArray<{
      readonly assignmentCode: string;
      readonly id: string;
    }>;
    readonly createdCount: number;
    readonly errorCount: number;
    readonly skippedCount: number;
  };
};
export type IcpmsAssignmentsPageCreateFromChecklistsMutation = {
  response: IcpmsAssignmentsPageCreateFromChecklistsMutation$data;
  variables: IcpmsAssignmentsPageCreateFromChecklistsMutation$variables;
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
    "concreteType": "CreateIcpmsAssignmentsFromChecklistsPayload",
    "kind": "LinkedField",
    "name": "createIcpmsAssignmentsFromChecklists",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsAssignment",
        "kind": "LinkedField",
        "name": "assignments",
        "plural": true,
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
            "name": "assignmentCode",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdCount",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "skippedCount",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "errorCount",
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
    "name": "IcpmsAssignmentsPageCreateFromChecklistsMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsAssignmentsPageCreateFromChecklistsMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "52d2f905f9445621e4bb74a76d556a8f",
    "id": null,
    "metadata": {},
    "name": "IcpmsAssignmentsPageCreateFromChecklistsMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsAssignmentsPageCreateFromChecklistsMutation(\n  $input: CreateIcpmsAssignmentsFromChecklistsInput!\n) {\n  createIcpmsAssignmentsFromChecklists(input: $input) {\n    assignments {\n      id\n      assignmentCode\n    }\n    createdCount\n    skippedCount\n    errorCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "b0da546f861e985b9c57c21a399d6205";

export default node;
