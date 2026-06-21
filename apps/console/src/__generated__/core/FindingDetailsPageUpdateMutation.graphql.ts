/**
 * @generated SignedSource<<a65793653d33d7555cd2d59d45f5b511>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type FindingKind = "EXCEPTION" | "MAJOR_NONCONFORMITY" | "MINOR_NONCONFORMITY" | "OBSERVATION";
export type FindingPriority = "HIGH" | "LOW" | "MEDIUM";
export type FindingStatus = "CLOSED" | "FALSE_POSITIVE" | "IN_PROGRESS" | "MITIGATED" | "OPEN" | "RISK_ACCEPTED";
export type UpdateFindingInput = {
  correctiveAction?: string | null | undefined;
  description?: string | null | undefined;
  dueDate?: string | null | undefined;
  effectivenessCheck?: string | null | undefined;
  id: string;
  identifiedOn?: string | null | undefined;
  ownerId?: string | null | undefined;
  priority?: FindingPriority | null | undefined;
  riskId?: string | null | undefined;
  rootCause?: string | null | undefined;
  source?: string | null | undefined;
  status?: FindingStatus | null | undefined;
};
export type FindingDetailsPageUpdateMutation$variables = {
  input: UpdateFindingInput;
};
export type FindingDetailsPageUpdateMutation$data = {
  readonly updateFinding: {
    readonly finding: {
      readonly correctiveAction: string | null | undefined;
      readonly description: string | null | undefined;
      readonly dueDate: string | null | undefined;
      readonly effectivenessCheck: string | null | undefined;
      readonly id: string;
      readonly identifiedOn: string | null | undefined;
      readonly kind: FindingKind;
      readonly owner: {
        readonly fullName: string;
        readonly id: string;
      } | null | undefined;
      readonly priority: FindingPriority;
      readonly referenceId: string;
      readonly rootCause: string | null | undefined;
      readonly source: string | null | undefined;
      readonly status: FindingStatus;
      readonly updatedAt: string;
    } | null | undefined;
  } | null | undefined;
};
export type FindingDetailsPageUpdateMutation = {
  response: FindingDetailsPageUpdateMutation$data;
  variables: FindingDetailsPageUpdateMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
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
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateFindingPayload",
    "kind": "LinkedField",
    "name": "updateFinding",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Finding",
        "kind": "LinkedField",
        "name": "finding",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "kind",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "referenceId",
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
            "name": "source",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "identifiedOn",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "rootCause",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "correctiveAction",
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
            "name": "status",
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
            "name": "effectivenessCheck",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Profile",
            "kind": "LinkedField",
            "name": "owner",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fullName",
                "storageKey": null
              }
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FindingDetailsPageUpdateMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FindingDetailsPageUpdateMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "e7634ec8f7aee46806cdd2e329c4186a",
    "id": null,
    "metadata": {},
    "name": "FindingDetailsPageUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation FindingDetailsPageUpdateMutation(\n  $input: UpdateFindingInput!\n) {\n  updateFinding(input: $input) {\n    finding {\n      id\n      kind\n      referenceId\n      description\n      source\n      identifiedOn\n      rootCause\n      correctiveAction\n      dueDate\n      status\n      priority\n      effectivenessCheck\n      owner {\n        id\n        fullName\n      }\n      updatedAt\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e99cacceb3aad3f879f141da60e8107e";

export default node;
