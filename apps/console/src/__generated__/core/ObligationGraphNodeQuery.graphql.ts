/**
 * @generated SignedSource<<f35d4058f317775b39070e47a8e43b0f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ObligationStatus = "COMPLIANT" | "NON_COMPLIANT" | "PARTIALLY_COMPLIANT";
export type ObligationType = "CONTRACTUAL" | "LEGAL";
export type ObligationGraphNodeQuery$variables = {
  obligationId: string;
};
export type ObligationGraphNodeQuery$data = {
  readonly node: {
    readonly actionsToBeImplemented?: string | null | undefined;
    readonly area?: string | null | undefined;
    readonly canDelete?: boolean;
    readonly canUpdate?: boolean;
    readonly createdAt?: string;
    readonly dueDate?: string | null | undefined;
    readonly id?: string;
    readonly lastReviewDate?: string | null | undefined;
    readonly organization?: {
      readonly id: string;
      readonly name: string;
    };
    readonly owner?: {
      readonly fullName: string;
      readonly id: string;
    };
    readonly regulator?: string | null | undefined;
    readonly requirement?: string | null | undefined;
    readonly source?: string | null | undefined;
    readonly status?: ObligationStatus;
    readonly type?: ObligationType;
    readonly updatedAt?: string;
  };
};
export type ObligationGraphNodeQuery = {
  response: ObligationGraphNodeQuery$data;
  variables: ObligationGraphNodeQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "obligationId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "obligationId"
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
  "name": "area",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "source",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "requirement",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "actionsToBeImplemented",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "regulator",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastReviewDate",
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
  "concreteType": "Profile",
  "kind": "LinkedField",
  "name": "owner",
  "plural": false,
  "selections": [
    (v2/*: any*/),
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
v13 = {
  "alias": null,
  "args": null,
  "concreteType": "Organization",
  "kind": "LinkedField",
  "name": "organization",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v16 = {
  "alias": "canUpdate",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:obligation:update"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:obligation:update\")"
},
v17 = {
  "alias": "canDelete",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:obligation:delete"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:obligation:delete\")"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ObligationGraphNodeQuery",
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
              (v16/*: any*/),
              (v17/*: any*/)
            ],
            "type": "Obligation",
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
    "name": "ObligationGraphNodeQuery",
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
              (v16/*: any*/),
              (v17/*: any*/)
            ],
            "type": "Obligation",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b5462c0f8e026b47caadd26734a6ed1a",
    "id": null,
    "metadata": {},
    "name": "ObligationGraphNodeQuery",
    "operationKind": "query",
    "text": "query ObligationGraphNodeQuery(\n  $obligationId: ID!\n) {\n  node(id: $obligationId) {\n    __typename\n    ... on Obligation {\n      id\n      area\n      source\n      requirement\n      actionsToBeImplemented\n      regulator\n      type\n      lastReviewDate\n      dueDate\n      status\n      owner {\n        id\n        fullName\n      }\n      organization {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n      canUpdate: permission(action: \"core:obligation:update\")\n      canDelete: permission(action: \"core:obligation:delete\")\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "aa6b57473c71936dc3ed49a2ffb808b3";

export default node;
