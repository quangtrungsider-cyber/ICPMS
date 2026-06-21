/**
 * @generated SignedSource<<6881bdfd40a73b9bb2bc9b5d2e854164>>
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
export type ThirdPartyThirdPartiesPageFragment$data = {
  readonly childThirdParties: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
        readonly riskAssessments: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly businessImpact: BusinessImpact;
              readonly createdAt: string;
              readonly dataSensitivity: DataSensitivity;
              readonly id: string;
            };
          }>;
        };
        readonly websiteUrl: string | null | undefined;
      };
    }>;
  };
  readonly id: string;
  readonly " $fragmentType": "ThirdPartyThirdPartiesPageFragment";
};
export type ThirdPartyThirdPartiesPageFragment$key = {
  readonly " $data"?: ThirdPartyThirdPartiesPageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ThirdPartyThirdPartiesPageFragment">;
};

import ThirdPartyThirdPartiesPagePaginationQuery_graphql from './ThirdPartyThirdPartiesPagePaginationQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "childThirdParties"
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
      "operation": ThirdPartyThirdPartiesPagePaginationQuery_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "ThirdPartyThirdPartiesPageFragment",
  "selections": [
    {
      "alias": "childThirdParties",
      "args": null,
      "concreteType": "ThirdPartyConnection",
      "kind": "LinkedField",
      "name": "__ThirdPartyThirdPartiesPageFragment_childThirdParties_connection",
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
  "type": "ThirdParty",
  "abstractKey": null
};
})();

(node as any).hash = "b9d70b3d8673c78e43b999ab68cbfc14";

export default node;
