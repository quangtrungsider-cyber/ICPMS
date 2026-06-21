/**
 * @generated SignedSource<<4d498d0bb5d851498e44dc5c7c2fbda0>>
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
export type CreateFindingInput = {
  correctiveAction?: string | null | undefined;
  description?: string | null | undefined;
  dueDate?: string | null | undefined;
  effectivenessCheck?: string | null | undefined;
  identifiedOn?: string | null | undefined;
  kind: FindingKind;
  organizationId: string;
  ownerId?: string | null | undefined;
  priority: FindingPriority;
  riskId?: string | null | undefined;
  rootCause?: string | null | undefined;
  source?: string | null | undefined;
  status: FindingStatus;
};
export type CreateFindingDialogMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateFindingInput;
};
export type CreateFindingDialogMutation$data = {
  readonly createFinding: {
    readonly findingEdge: {
      readonly node: {
        readonly canDelete: boolean;
        readonly canUpdate: boolean;
        readonly correctiveAction: string | null | undefined;
        readonly createdAt: string;
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
      };
    } | null | undefined;
  } | null | undefined;
};
export type CreateFindingDialogMutation = {
  response: CreateFindingDialogMutation$data;
  variables: CreateFindingDialogMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "FindingEdge",
  "kind": "LinkedField",
  "name": "findingEdge",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Finding",
      "kind": "LinkedField",
      "name": "node",
      "plural": false,
      "selections": [
        (v3/*: any*/),
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
            (v3/*: any*/),
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
          "name": "createdAt",
          "storageKey": null
        },
        {
          "alias": "canUpdate",
          "args": [
            {
              "kind": "Literal",
              "name": "action",
              "value": "core:finding:update"
            }
          ],
          "kind": "ScalarField",
          "name": "permission",
          "storageKey": "permission(action:\"core:finding:update\")"
        },
        {
          "alias": "canDelete",
          "args": [
            {
              "kind": "Literal",
              "name": "action",
              "value": "core:finding:delete"
            }
          ],
          "kind": "ScalarField",
          "name": "permission",
          "storageKey": "permission(action:\"core:finding:delete\")"
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateFindingDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateFindingPayload",
        "kind": "LinkedField",
        "name": "createFinding",
        "plural": false,
        "selections": [
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateFindingDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateFindingPayload",
        "kind": "LinkedField",
        "name": "createFinding",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "prependEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "findingEdge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5308d663a2289d9de0be42b83b862822",
    "id": null,
    "metadata": {},
    "name": "CreateFindingDialogMutation",
    "operationKind": "mutation",
    "text": "mutation CreateFindingDialogMutation(\n  $input: CreateFindingInput!\n) {\n  createFinding(input: $input) {\n    findingEdge {\n      node {\n        id\n        kind\n        referenceId\n        description\n        source\n        identifiedOn\n        rootCause\n        correctiveAction\n        dueDate\n        status\n        priority\n        effectivenessCheck\n        owner {\n          id\n          fullName\n        }\n        createdAt\n        canUpdate: permission(action: \"core:finding:update\")\n        canDelete: permission(action: \"core:finding:delete\")\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0f2c1c48bd985e918a593fe91cc2136b";

export default node;
