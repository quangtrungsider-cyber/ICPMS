/**
 * @generated SignedSource<<26e0624184329405fd009d0b30ba29eb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type DocumentClassification = "CONFIDENTIAL" | "INTERNAL" | "PUBLIC" | "SECRET";
export type DocumentType = "GOVERNANCE" | "OTHER" | "PLAN" | "POLICY" | "PROCEDURE" | "RECORD" | "REGISTER" | "REPORT" | "STATEMENT_OF_APPLICABILITY" | "TEMPLATE";
import { FragmentRefs } from "relay-runtime";
export type DocumentRowFragment$data = {
  readonly id: string;
  readonly lastVersion: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly classification: DocumentClassification;
        readonly documentType: DocumentType;
      };
    }>;
  };
  readonly signed: boolean | null | undefined;
  readonly title: string;
  readonly updatedAt: string;
  readonly " $fragmentType": "DocumentRowFragment";
};
export type DocumentRowFragment$key = {
  readonly " $data"?: DocumentRowFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DocumentRowFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DocumentRowFragment",
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
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "signed",
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
      "alias": "lastVersion",
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
      "concreteType": "EmployeeDocumentVersionConnection",
      "kind": "LinkedField",
      "name": "versions",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "EmployeeDocumentVersionEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "EmployeeDocumentVersion",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "documentType",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "classification",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "versions(first:1,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
    }
  ],
  "type": "EmployeeDocument",
  "abstractKey": null
};

(node as any).hash = "13ac7a3977913c4b7608e41c9ca0d4d3";

export default node;
