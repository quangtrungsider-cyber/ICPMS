/**
 * @generated SignedSource<<b9c5c2631708db5e727dd8d0ec5d8581>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type BusinessImpact = "CRITICAL" | "HIGH" | "LOW" | "MEDIUM";
export type DataSensitivity = "CRITICAL" | "HIGH" | "LOW" | "MEDIUM" | "NONE";
import { FragmentRefs } from "relay-runtime";
export type ThirdPartyGraphPaginatedFragment$data = {
  readonly id: string;
  readonly thirdParties: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly canDelete: boolean;
        readonly canUpdate: boolean;
        readonly id: string;
        readonly name: string;
        readonly riskAssessments: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly businessImpact: BusinessImpact;
              readonly createdAt: string;
              readonly dataSensitivity: DataSensitivity;
              readonly expiresAt: string;
              readonly id: string;
            };
          }>;
        };
        readonly updatedAt: string;
        readonly websiteUrl: string | null | undefined;
      };
    }>;
  };
  readonly " $fragmentType": "ThirdPartyGraphPaginatedFragment";
};
export type ThirdPartyGraphPaginatedFragment$key = {
  readonly " $data"?: ThirdPartyGraphPaginatedFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ThirdPartyGraphPaginatedFragment">;
};

import ThirdPartiesListQuery_graphql from './ThirdPartiesListQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "thirdParties"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "before"
    },
    {
      "defaultValue": {
        "firstLevel": true
      },
      "kind": "LocalArgument",
      "name": "filter"
    },
    {
      "defaultValue": 50,
      "kind": "LocalArgument",
      "name": "first"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "last"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "order"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "bidirectional",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": {
          "count": "last",
          "cursor": "before"
        },
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": ThirdPartiesListQuery_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "ThirdPartyGraphPaginatedFragment",
  "selections": [
    {
      "alias": "thirdParties",
      "args": [
        {
          "kind": "Variable",
          "name": "filter",
          "variableName": "filter"
        }
      ],
      "concreteType": "ThirdPartyConnection",
      "kind": "LinkedField",
      "name": "__ThirdPartiesListQuery_thirdParties_connection",
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
                (v1/*: any*/),
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
                            (v1/*: any*/),
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
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
      "storageKey": null
    },
    (v1/*: any*/)
  ],
  "type": "Organization",
  "abstractKey": null
};
})();

(node as any).hash = "f8e44eeafcb04e41b4da6fe7f39d56e6";

export default node;
