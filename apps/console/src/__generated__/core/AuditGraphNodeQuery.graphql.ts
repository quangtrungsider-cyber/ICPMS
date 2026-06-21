/**
 * @generated SignedSource<<d5c033fa227e3aa3ef4d44d1a2acac0e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AuditState = "COMPLETED" | "IN_PROGRESS" | "NOT_STARTED" | "OUTDATED" | "REJECTED";
export type AuditGraphNodeQuery$variables = {
  auditId: string;
};
export type AuditGraphNodeQuery$data = {
  readonly node: {
    readonly canDelete?: boolean;
    readonly canUpdate?: boolean;
    readonly createdAt?: string;
    readonly framework?: {
      readonly darkLogoURL: string | null | undefined;
      readonly id: string;
      readonly lightLogoURL: string | null | undefined;
      readonly name: string;
    } | null | undefined;
    readonly id?: string;
    readonly name?: string | null | undefined;
    readonly organization?: {
      readonly id: string;
      readonly name: string;
    } | null | undefined;
    readonly reportFile?: {
      readonly createdAt: string;
      readonly downloadUrl: string;
      readonly fileName: string;
      readonly id: string;
      readonly mimeType: string;
      readonly size: number;
    } | null | undefined;
    readonly state?: AuditState;
    readonly updatedAt?: string;
    readonly validFrom?: string | null | undefined;
    readonly validUntil?: string | null | undefined;
  };
};
export type AuditGraphNodeQuery = {
  response: AuditGraphNodeQuery$data;
  variables: AuditGraphNodeQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "auditId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "auditId"
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
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "validFrom",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "validUntil",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "File",
  "kind": "LinkedField",
  "name": "reportFile",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fileName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "mimeType",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "size",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "downloadUrl",
      "storageKey": null
    },
    (v6/*: any*/)
  ],
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "state",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "Framework",
  "kind": "LinkedField",
  "name": "framework",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lightLogoURL",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "darkLogoURL",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "Organization",
  "kind": "LinkedField",
  "name": "organization",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/)
  ],
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v12 = {
  "alias": "canUpdate",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:audit:update"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:audit:update\")"
},
v13 = {
  "alias": "canDelete",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:audit:delete"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:audit:delete\")"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AuditGraphNodeQuery",
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
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v6/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/)
            ],
            "type": "Audit",
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
    "name": "AuditGraphNodeQuery",
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
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v6/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/)
            ],
            "type": "Audit",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "fe2b652be2268f46e549841571473f25",
    "id": null,
    "metadata": {},
    "name": "AuditGraphNodeQuery",
    "operationKind": "query",
    "text": "query AuditGraphNodeQuery(\n  $auditId: ID!\n) {\n  node(id: $auditId) {\n    __typename\n    ... on Audit {\n      id\n      name\n      validFrom\n      validUntil\n      reportFile {\n        id\n        fileName\n        mimeType\n        size\n        downloadUrl\n        createdAt\n      }\n      state\n      framework {\n        id\n        name\n        lightLogoURL\n        darkLogoURL\n      }\n      organization {\n        id\n        name\n      }\n      createdAt\n      updatedAt\n      canUpdate: permission(action: \"core:audit:update\")\n      canDelete: permission(action: \"core:audit:delete\")\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "356cc45375bafeb8791316302cb246ab";

export default node;
