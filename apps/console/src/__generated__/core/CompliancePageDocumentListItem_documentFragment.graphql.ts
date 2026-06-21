/**
 * @generated SignedSource<<c845bbb9bfe161657116585e75335a31>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type DocumentType = "GOVERNANCE" | "OTHER" | "PLAN" | "POLICY" | "PROCEDURE" | "RECORD" | "REGISTER" | "REPORT" | "STATEMENT_OF_APPLICABILITY" | "TEMPLATE";
export type TrustCenterVisibility = "NONE" | "PRIVATE" | "PUBLIC";
import { FragmentRefs } from "relay-runtime";
export type CompliancePageDocumentListItem_documentFragment$data = {
  readonly id: string;
  readonly latestPublishedVersion: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly documentType: DocumentType;
        readonly title: string;
      };
    }>;
  };
  readonly trustCenterVisibility: TrustCenterVisibility;
  readonly " $fragmentType": "CompliancePageDocumentListItem_documentFragment";
};
export type CompliancePageDocumentListItem_documentFragment$key = {
  readonly " $data"?: CompliancePageDocumentListItem_documentFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CompliancePageDocumentListItem_documentFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CompliancePageDocumentListItem_documentFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "trustCenterVisibility",
      "storageKey": null
    },
    {
      "alias": "latestPublishedVersion",
      "args": [
        {
          "kind": "Literal",
          "name": "filter",
          "value": {
            "statuses": [
              "PUBLISHED"
            ]
          }
        },
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
      "concreteType": "DocumentVersionConnection",
      "kind": "LinkedField",
      "name": "versions",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "DocumentVersionEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "DocumentVersion",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "title",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "documentType",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "versions(filter:{\"statuses\":[\"PUBLISHED\"]},first:1,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
    }
  ],
  "type": "Document",
  "abstractKey": null
};

(node as any).hash = "069c763ab9f5fb9663b4a7c16adeb813";

export default node;
