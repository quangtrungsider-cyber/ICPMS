/**
 * @generated SignedSource<<1ad84e0c8260d232f4f4a130fc4f48f7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IcpmsNhatKyPageQuery$variables = {
  organizationId: string;
};
export type IcpmsNhatKyPageQuery$data = {
  readonly organization: {
    readonly __typename: "Organization";
    readonly profiles: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly emailAddress: string;
          readonly fullName: string;
          readonly id: string;
          readonly identity: {
            readonly id: string;
          } | null | undefined;
        };
      }>;
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"IcpmsNhatKyPageFragment">;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type IcpmsNhatKyPageQuery = {
  response: IcpmsNhatKyPageQuery$data;
  variables: IcpmsNhatKyPageQuery$variables;
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
v4 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "first",
      "value": 500
    },
    {
      "kind": "Literal",
      "name": "orderBy",
      "value": {
        "direction": "ASC",
        "field": "FULL_NAME"
      }
    }
  ],
  "concreteType": "ProfileConnection",
  "kind": "LinkedField",
  "name": "profiles",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ProfileEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Profile",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v3/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "fullName",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "emailAddress",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Identity",
              "kind": "LinkedField",
              "name": "identity",
              "plural": false,
              "selections": [
                (v3/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "profiles(first:500,orderBy:{\"direction\":\"ASC\",\"field\":\"FULL_NAME\"})"
},
v5 = [
  {
    "fields": [
      {
        "kind": "Literal",
        "name": "action",
        "value": null
      },
      {
        "kind": "Literal",
        "name": "resourceType",
        "value": null
      }
    ],
    "kind": "ObjectValue",
    "name": "filter"
  },
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
    "name": "IcpmsNhatKyPageQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
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
                (v4/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "IcpmsNhatKyPageFragment"
                }
              ],
              "type": "Organization",
              "abstractKey": null
            }
          ],
          "storageKey": null
        },
        "action": "THROW"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsNhatKyPageQuery",
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
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": (v5/*: any*/),
                "concreteType": "AuditLogEntryConnection",
                "kind": "LinkedField",
                "name": "auditLogEntries",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AuditLogEntryEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AuditLogEntry",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "actorId",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "actorType",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "action",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "resourceType",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "resourceId",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "metadata",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "createdAt",
                            "storageKey": null
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
                    "kind": "ScalarField",
                    "name": "totalCount",
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
                        "name": "hasNextPage",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "endCursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "auditLogEntries(filter:{\"action\":null,\"resourceType\":null},first:50,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
              },
              {
                "alias": null,
                "args": (v5/*: any*/),
                "filters": [
                  "filter",
                  "orderBy"
                ],
                "handle": "connection",
                "key": "IcpmsNhatKyPage_auditLogEntries",
                "kind": "LinkedHandle",
                "name": "auditLogEntries"
              }
            ],
            "type": "Organization",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b89517f6474b1bee53143078bcdbea01",
    "id": null,
    "metadata": {},
    "name": "IcpmsNhatKyPageQuery",
    "operationKind": "query",
    "text": "query IcpmsNhatKyPageQuery(\n  $organizationId: ID!\n) {\n  organization: node(id: $organizationId) {\n    __typename\n    ... on Organization {\n      profiles(first: 500, orderBy: {field: FULL_NAME, direction: ASC}) {\n        edges {\n          node {\n            id\n            fullName\n            emailAddress\n            identity {\n              id\n            }\n          }\n        }\n      }\n      ...IcpmsNhatKyPageFragment\n    }\n    id\n  }\n}\n\nfragment IcpmsNhatKyPageFragment on Organization {\n  auditLogEntries(first: 50, filter: {}, orderBy: {field: CREATED_AT, direction: DESC}) {\n    edges {\n      node {\n        id\n        ...IcpmsNhatKyPageRowFragment\n        __typename\n      }\n      cursor\n    }\n    totalCount\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n  id\n}\n\nfragment IcpmsNhatKyPageRowFragment on AuditLogEntry {\n  id\n  actorId\n  actorType\n  action\n  resourceType\n  resourceId\n  metadata\n  createdAt\n}\n"
  }
};
})();

(node as any).hash = "05764b63454add7d66f3f06c5c36a0bc";

export default node;
