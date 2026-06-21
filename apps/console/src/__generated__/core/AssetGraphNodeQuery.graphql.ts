/**
 * @generated SignedSource<<ec1819dd3238cc467ff35c32d2bf7a34>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AssetType = "PHYSICAL" | "VIRTUAL";
export type ThirdPartyCategory = "ANALYTICS" | "CLOUD_MONITORING" | "CLOUD_PROVIDER" | "COLLABORATION" | "CUSTOMER_SUPPORT" | "DATA_STORAGE_AND_PROCESSING" | "DOCUMENT_MANAGEMENT" | "EMPLOYEE_MANAGEMENT" | "ENGINEERING" | "FINANCE" | "IDENTITY_PROVIDER" | "IT" | "MARKETING" | "OFFICE_OPERATIONS" | "OTHER" | "PASSWORD_MANAGEMENT" | "PRODUCT_AND_DESIGN" | "PROFESSIONAL_SERVICES" | "RECRUITING" | "SALES" | "SECURITY" | "VERSION_CONTROL";
export type AssetGraphNodeQuery$variables = {
  assetId: string;
};
export type AssetGraphNodeQuery$data = {
  readonly node: {
    readonly amount?: number;
    readonly assetType?: AssetType;
    readonly canDelete?: boolean;
    readonly canUpdate?: boolean;
    readonly createdAt?: string;
    readonly dataTypesStored?: string;
    readonly id?: string;
    readonly name?: string;
    readonly owner?: {
      readonly fullName: string;
      readonly id: string;
    };
    readonly thirdParties?: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly category: ThirdPartyCategory;
          readonly id: string;
          readonly name: string;
          readonly websiteUrl: string | null | undefined;
        };
      }>;
    };
    readonly updatedAt?: string;
  };
};
export type AssetGraphNodeQuery = {
  response: AssetGraphNodeQuery$data;
  variables: AssetGraphNodeQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "assetId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "assetId"
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
  "name": "amount",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "assetType",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dataTypesStored",
  "storageKey": null
},
v7 = {
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
v8 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "first",
      "value": 50
    }
  ],
  "concreteType": "ThirdPartyConnection",
  "kind": "LinkedField",
  "name": "thirdParties",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ThirdPartyEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ThirdParty",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            (v3/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "websiteUrl",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "category",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "thirdParties(first:50)"
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v11 = {
  "alias": "canUpdate",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:asset:update"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:asset:update\")"
},
v12 = {
  "alias": "canDelete",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:asset:delete"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:asset:delete\")"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AssetGraphNodeQuery",
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
              (v12/*: any*/)
            ],
            "type": "Asset",
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
    "name": "AssetGraphNodeQuery",
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
              (v12/*: any*/)
            ],
            "type": "Asset",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7f8b7e14aff71fdf782bb171f711bc81",
    "id": null,
    "metadata": {},
    "name": "AssetGraphNodeQuery",
    "operationKind": "query",
    "text": "query AssetGraphNodeQuery(\n  $assetId: ID!\n) {\n  node(id: $assetId) {\n    __typename\n    ... on Asset {\n      id\n      name\n      amount\n      assetType\n      dataTypesStored\n      owner {\n        id\n        fullName\n      }\n      thirdParties(first: 50) {\n        edges {\n          node {\n            id\n            name\n            websiteUrl\n            category\n          }\n        }\n      }\n      createdAt\n      updatedAt\n      canUpdate: permission(action: \"core:asset:update\")\n      canDelete: permission(action: \"core:asset:delete\")\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "5d9963e823890a5c578b16d0dfcbeb4f";

export default node;
