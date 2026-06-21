/**
 * @generated SignedSource<<5fa5c36f0474708263aa4b55f2030351>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ThirdPartyComplianceTabFragment$data = {
  readonly complianceReports: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly canDelete: boolean;
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"ThirdPartyComplianceTabFragment_report">;
      };
    }>;
  };
  readonly id: string;
  readonly " $fragmentType": "ThirdPartyComplianceTabFragment";
};
export type ThirdPartyComplianceTabFragment$key = {
  readonly " $data"?: ThirdPartyComplianceTabFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ThirdPartyComplianceTabFragment">;
};

import ComplianceReportListQuery_graphql from './ComplianceReportListQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "complianceReports"
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
      "operation": ComplianceReportListQuery_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "ThirdPartyComplianceTabFragment",
  "selections": [
    {
      "alias": "complianceReports",
      "args": [
        {
          "kind": "Variable",
          "name": "orderBy",
          "variableName": "order"
        }
      ],
      "concreteType": "ThirdPartyComplianceReportConnection",
      "kind": "LinkedField",
      "name": "__ThirdPartyComplianceTabFragment_complianceReports_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ThirdPartyComplianceReportEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ThirdPartyComplianceReport",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                {
                  "alias": "canDelete",
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "action",
                      "value": "core:thirdParty-compliance-report:delete"
                    }
                  ],
                  "kind": "ScalarField",
                  "name": "permission",
                  "storageKey": "permission(action:\"core:thirdParty-compliance-report:delete\")"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ThirdPartyComplianceTabFragment_report"
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

(node as any).hash = "58645b1fa8719f81810cd79aafa40a67";

export default node;
