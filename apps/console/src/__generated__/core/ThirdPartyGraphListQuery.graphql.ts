/**
 * @generated SignedSource<<baeda1654578b4f7b2ff75aad5eca918>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ThirdPartyGraphListQuery$variables = {
  organizationId: string;
};
export type ThirdPartyGraphListQuery$data = {
  readonly node: {
    readonly canCreateThirdParty?: boolean;
    readonly canPublishThirdParty?: boolean;
    readonly id?: string;
    readonly thirdPartiesDocument?: {
      readonly currentPublishedMajor: number | null | undefined;
      readonly currentPublishedMinor: number | null | undefined;
      readonly defaultApprovers: ReadonlyArray<{
        readonly id: string;
      }>;
      readonly id: string;
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"ThirdPartyGraphPaginatedFragment">;
  };
};
export type ThirdPartyGraphListQuery = {
  response: ThirdPartyGraphListQuery$data;
  variables: ThirdPartyGraphListQuery$variables;
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": "canCreateThirdParty",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:thirdParty:create"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:thirdParty:create\")"
},
v4 = {
  "alias": "canPublishThirdParty",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:thirdParty:publish"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:thirdParty:publish\")"
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "Document",
  "kind": "LinkedField",
  "name": "thirdPartiesDocument",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "currentPublishedMajor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "currentPublishedMinor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Profile",
      "kind": "LinkedField",
      "name": "defaultApprovers",
      "plural": true,
      "selections": [
        (v2/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v7 = [
  {
    "kind": "Literal",
    "name": "filter",
    "value": {
      "firstLevel": true
    }
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 50
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ThirdPartyGraphListQuery",
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
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ThirdPartyGraphPaginatedFragment"
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
    "name": "ThirdPartyGraphListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": (v7/*: any*/),
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
                            "name": "websiteUrl",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "updatedAt",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "first",
                                "value": 1
                              },
                              {
                                "kind": "Literal",
                                "name": "orderBy",
                                "value": {
                                  "direction": "DESC",
                                  "field": "CREATED_AT"
                                }
                              }
                            ],
                            "concreteType": "ThirdPartyRiskAssessmentConnection",
                            "kind": "LinkedField",
                            "name": "riskAssessments",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ThirdPartyRiskAssessmentEdge",
                                "kind": "LinkedField",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ThirdPartyRiskAssessment",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      (v2/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "createdAt",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "expiresAt",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "dataSensitivity",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "businessImpact",
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "riskAssessments(first:1,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
                          },
                          {
                            "alias": "canUpdate",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "action",
                                "value": "core:thirdParty:update"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "permission",
                            "storageKey": "permission(action:\"core:thirdParty:update\")"
                          },
                          {
                            "alias": "canDelete",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "action",
                                "value": "core:thirdParty:delete"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "permission",
                            "storageKey": "permission(action:\"core:thirdParty:delete\")"
                          },
                          (v6/*: any*/)
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
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasPreviousPage",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "startCursor",
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
                "storageKey": "thirdParties(filter:{\"firstLevel\":true},first:50)"
              },
              {
                "alias": null,
                "args": (v7/*: any*/),
                "filters": [
                  "filter"
                ],
                "handle": "connection",
                "key": "ThirdPartiesListQuery_thirdParties",
                "kind": "LinkedHandle",
                "name": "thirdParties"
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
    "cacheID": "10e7309281352e5daf60a1552acc4cc0",
    "id": null,
    "metadata": {},
    "name": "ThirdPartyGraphListQuery",
    "operationKind": "query",
    "text": "query ThirdPartyGraphListQuery(\n  $organizationId: ID!\n) {\n  node(id: $organizationId) {\n    __typename\n    ... on Organization {\n      id\n      canCreateThirdParty: permission(action: \"core:thirdParty:create\")\n      canPublishThirdParty: permission(action: \"core:thirdParty:publish\")\n      thirdPartiesDocument {\n        id\n        currentPublishedMajor\n        currentPublishedMinor\n        defaultApprovers {\n          id\n        }\n      }\n      ...ThirdPartyGraphPaginatedFragment\n    }\n    id\n  }\n}\n\nfragment ThirdPartyGraphPaginatedFragment on Organization {\n  thirdParties(first: 50, filter: {firstLevel: true}) {\n    edges {\n      node {\n        id\n        name\n        websiteUrl\n        updatedAt\n        riskAssessments(first: 1, orderBy: {direction: DESC, field: CREATED_AT}) {\n          edges {\n            node {\n              id\n              createdAt\n              expiresAt\n              dataSensitivity\n              businessImpact\n            }\n          }\n        }\n        canUpdate: permission(action: \"core:thirdParty:update\")\n        canDelete: permission(action: \"core:thirdParty:delete\")\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "49fd872d8d9fc65fe1b0fca7e0822308";

export default node;
