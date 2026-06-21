/**
 * @generated SignedSource<<78db63977cbc7bfd3c5a715540cd5ec2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ThirdPartyThirdPartiesPageQuery$variables = {
  thirdPartyId: string;
};
export type ThirdPartyThirdPartiesPageQuery$data = {
  readonly node: {
    readonly __typename: "ThirdParty";
    readonly canUpdate: boolean;
    readonly id: string;
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"ThirdPartyThirdPartiesPageFragment">;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type ThirdPartyThirdPartiesPageQuery = {
  response: ThirdPartyThirdPartiesPageQuery$data;
  variables: ThirdPartyThirdPartiesPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "thirdPartyId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "thirdPartyId"
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
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
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
v6 = [
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
    "name": "ThirdPartyThirdPartiesPageQuery",
    "selections": [
      {
        "alias": null,
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
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ThirdPartyThirdPartiesPageFragment"
              }
            ],
            "type": "ThirdParty",
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
    "name": "ThirdPartyThirdPartiesPageQuery",
    "selections": [
      {
        "alias": null,
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
              (v5/*: any*/),
              {
                "alias": null,
                "args": (v6/*: any*/),
                "concreteType": "ThirdPartyConnection",
                "kind": "LinkedField",
                "name": "childThirdParties",
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
                          (v3/*: any*/),
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "websiteUrl",
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
                                      (v3/*: any*/),
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
                "storageKey": "childThirdParties(first:50)"
              },
              {
                "alias": null,
                "args": (v6/*: any*/),
                "filters": [],
                "handle": "connection",
                "key": "ThirdPartyThirdPartiesPageFragment_childThirdParties",
                "kind": "LinkedHandle",
                "name": "childThirdParties"
              }
            ],
            "type": "ThirdParty",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b84302e006af35e8a76a56b11b0ab980",
    "id": null,
    "metadata": {},
    "name": "ThirdPartyThirdPartiesPageQuery",
    "operationKind": "query",
    "text": "query ThirdPartyThirdPartiesPageQuery(\n  $thirdPartyId: ID!\n) {\n  node(id: $thirdPartyId) {\n    __typename\n    ... on ThirdParty {\n      id\n      name\n      canUpdate: permission(action: \"core:thirdParty:update\")\n      ...ThirdPartyThirdPartiesPageFragment\n    }\n    id\n  }\n}\n\nfragment ThirdPartyThirdPartiesPageFragment on ThirdParty {\n  childThirdParties(first: 50) {\n    edges {\n      node {\n        id\n        name\n        websiteUrl\n        riskAssessments(first: 1, orderBy: {direction: DESC, field: CREATED_AT}) {\n          edges {\n            node {\n              id\n              createdAt\n              dataSensitivity\n              businessImpact\n            }\n          }\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "0d4ed0395c8ab1a888d1377231eedcfb";

export default node;
