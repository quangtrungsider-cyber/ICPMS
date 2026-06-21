/**
 * @generated SignedSource<<65a3e4e4d968239daecc9d3230cb2b98>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type DataProtectionImpactAssessmentResidualRisk = "HIGH" | "LOW" | "MEDIUM";
import { FragmentRefs } from "relay-runtime";
export type ProcessingActivitiesPageDPIAFragment$data = {
  readonly dataProtectionImpactAssessments: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly description: string | null | undefined;
        readonly id: string;
        readonly potentialRisk: string | null | undefined;
        readonly processingActivity: {
          readonly id: string;
          readonly name: string;
        };
        readonly residualRisk: DataProtectionImpactAssessmentResidualRisk | null | undefined;
      };
    }>;
    readonly pageInfo: {
      readonly endCursor: string | null | undefined;
      readonly hasNextPage: boolean;
    };
  };
  readonly id: string;
  readonly " $fragmentType": "ProcessingActivitiesPageDPIAFragment";
};
export type ProcessingActivitiesPageDPIAFragment$key = {
  readonly " $data"?: ProcessingActivitiesPageDPIAFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProcessingActivitiesPageDPIAFragment">;
};

import ProcessingActivitiesPageDPIARefetchQuery_graphql from './ProcessingActivitiesPageDPIARefetchQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "dataProtectionImpactAssessments"
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
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "first"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": ProcessingActivitiesPageDPIARefetchQuery_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "ProcessingActivitiesPageDPIAFragment",
  "selections": [
    (v1/*: any*/),
    {
      "alias": "dataProtectionImpactAssessments",
      "args": null,
      "concreteType": "DataProtectionImpactAssessmentConnection",
      "kind": "LinkedField",
      "name": "__ProcessingActivitiesPage_dataProtectionImpactAssessments_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "DataProtectionImpactAssessmentEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "DataProtectionImpactAssessment",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "description",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "potentialRisk",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "residualRisk",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "ProcessingActivity",
                  "kind": "LinkedField",
                  "name": "processingActivity",
                  "plural": false,
                  "selections": [
                    (v1/*: any*/),
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
      "storageKey": null
    }
  ],
  "type": "Organization",
  "abstractKey": null
};
})();

(node as any).hash = "2f06f562d8767487ebb630ff1b6d9307";

export default node;
