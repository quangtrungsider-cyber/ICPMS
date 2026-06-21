/**
 * @generated SignedSource<<ba05b8abd67fbee94c2f23ed9021a1e6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type DocumentClassification = "CONFIDENTIAL" | "INTERNAL" | "PUBLIC" | "SECRET";
export type DocumentType = "GOVERNANCE" | "OTHER" | "PLAN" | "POLICY" | "PROCEDURE" | "RECORD" | "REGISTER" | "REPORT" | "STATEMENT_OF_APPLICABILITY" | "TEMPLATE";
export type DocumentVersionApprovalDecisionState = "APPROVED" | "PENDING" | "REJECTED" | "VOIDED";
import { FragmentRefs } from "relay-runtime";
export type ApprovableDocumentRowFragment$data = {
  readonly approvalState: DocumentVersionApprovalDecisionState | null | undefined;
  readonly id: string;
  readonly lastVersion: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly classification: DocumentClassification;
        readonly documentType: DocumentType;
      };
    }>;
  };
  readonly title: string;
  readonly updatedAt: string;
  readonly " $fragmentType": "ApprovableDocumentRowFragment";
};
export type ApprovableDocumentRowFragment$key = {
  readonly " $data"?: ApprovableDocumentRowFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ApprovableDocumentRowFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ApprovableDocumentRowFragment",
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
      "name": "approvalState",
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

(node as any).hash = "b07f26ae3af06a62fd17a614b10c81f4";

export default node;
