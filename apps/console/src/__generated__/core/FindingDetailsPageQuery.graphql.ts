/**
 * @generated SignedSource<<ed5f2cb3ab41e65c5d5ad15274587f3f>>
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
export type FindingDetailsPageQuery$variables = {
  findingId: string;
};
export type FindingDetailsPageQuery$data = {
  readonly node: {
    readonly canDelete?: boolean;
    readonly canUpdate?: boolean;
    readonly correctiveAction?: string | null | undefined;
    readonly description?: string | null | undefined;
    readonly dueDate?: string | null | undefined;
    readonly effectivenessCheck?: string | null | undefined;
    readonly id?: string;
    readonly identifiedOn?: string | null | undefined;
    readonly kind?: FindingKind;
    readonly owner?: {
      readonly id: string;
    } | null | undefined;
    readonly priority?: FindingPriority;
    readonly referenceId?: string;
    readonly rootCause?: string | null | undefined;
    readonly source?: string | null | undefined;
    readonly status?: FindingStatus;
  };
};
export type FindingDetailsPageQuery = {
  response: FindingDetailsPageQuery$data;
  variables: FindingDetailsPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "findingId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "findingId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "referenceId",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "source",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifiedOn",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rootCause",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "correctiveAction",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dueDate",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "priority",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "effectivenessCheck",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "concreteType": "Profile",
  "kind": "LinkedField",
  "name": "owner",
  "plural": false,
  "selections": [
    (v2/*: any*/)
  ],
  "storageKey": null
},
v15 = {
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
v16 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FindingDetailsPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/)
            ],
            "type": "Finding",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FindingDetailsPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/)
            ],
            "type": "Finding",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c2f2eeb03ddd153618a8fd78df7a3256",
    "id": null,
    "metadata": {},
    "name": "FindingDetailsPageQuery",
    "operationKind": "query",
    "text": "query FindingDetailsPageQuery(\n  $findingId: ID!\n) {\n  node(id: $findingId) {\n    __typename\n    ... on Finding {\n      id\n      kind\n      referenceId\n      description\n      source\n      identifiedOn\n      rootCause\n      correctiveAction\n      dueDate\n      status\n      priority\n      effectivenessCheck\n      owner {\n        id\n      }\n      canUpdate: permission(action: \"core:finding:update\")\n      canDelete: permission(action: \"core:finding:delete\")\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "5ff25fbf5ec0f99a40f5f0ee66df7d18";

export default node;
