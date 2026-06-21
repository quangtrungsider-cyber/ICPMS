/**
 * @generated SignedSource<<87c97474dcd20d7c3963623a9ba63c03>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CookieBannerState = "ACTIVE" | "INACTIVE";
export type CookieBannersOverviewPageQuery$variables = {
  organizationId: string;
};
export type CookieBannersOverviewPageQuery$data = {
  readonly organization: {
    readonly __typename: "Organization";
    readonly cookieBanners: {
      readonly __id: string;
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly canDelete: boolean;
          readonly createdAt: string;
          readonly id: string;
          readonly name: string;
          readonly origin: string;
          readonly state: CookieBannerState;
        };
      }>;
    };
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type CookieBannersOverviewPageQuery = {
  response: CookieBannersOverviewPageQuery$data;
  variables: CookieBannersOverviewPageQuery$variables;
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
    "kind": "Variable",
    "name": "id",
    "variableName": "organizationId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "CookieBannerEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CookieBanner",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "origin",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "state",
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
            "alias": "canDelete",
            "args": [
              {
                "kind": "Literal",
                "name": "action",
                "value": "core:cookie-banner:delete"
              }
            ],
            "kind": "ScalarField",
            "name": "permission",
            "storageKey": "permission(action:\"core:cookie-banner:delete\")"
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cursor",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "PageInfo",
    "kind": "LinkedField",
    "name": "pageInfo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "endCursor",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hasNextPage",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "kind": "ClientExtension",
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__id",
        "storageKey": null
      }
    ]
  }
],
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 50
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "DESC",
      "field": "CREATED_AT"
    }
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CookieBannersOverviewPageQuery",
    "selections": [
      {
        "alias": "organization",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "RequiredField",
                "field": {
                  "alias": "cookieBanners",
                  "args": null,
                  "concreteType": "CookieBannerConnection",
                  "kind": "LinkedField",
                  "name": "__CookieBannersOverviewPage_cookieBanners_connection",
                  "plural": false,
                  "selections": (v4/*: any*/),
                  "storageKey": null
                },
                "action": "THROW"
              }
            ],
            "type": "Organization",
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
    "name": "CookieBannersOverviewPageQuery",
    "selections": [
      {
        "alias": "organization",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v5/*: any*/),
                "concreteType": "CookieBannerConnection",
                "kind": "LinkedField",
                "name": "cookieBanners",
                "plural": false,
                "selections": (v4/*: any*/),
                "storageKey": "cookieBanners(first:50,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
              },
              {
                "alias": null,
                "args": (v5/*: any*/),
                "filters": [],
                "handle": "connection",
                "key": "CookieBannersOverviewPage_cookieBanners",
                "kind": "LinkedHandle",
                "name": "cookieBanners"
              }
            ],
            "type": "Organization",
            "abstractKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "564345853635a608ab1cd0816b53f59e",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "organization",
            "cookieBanners"
          ]
        }
      ]
    },
    "name": "CookieBannersOverviewPageQuery",
    "operationKind": "query",
    "text": "query CookieBannersOverviewPageQuery(\n  $organizationId: ID!\n) {\n  organization: node(id: $organizationId) {\n    __typename\n    ... on Organization {\n      cookieBanners(first: 50, orderBy: {field: CREATED_AT, direction: DESC}) {\n        edges {\n          node {\n            id\n            name\n            origin\n            state\n            createdAt\n            canDelete: permission(action: \"core:cookie-banner:delete\")\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "b0231140ba9de620a42b1b4a9c7e8830";

export default node;
