/**
 * @generated SignedSource<<eee702ebef3f33a6a37b0862bcadf76e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MeasureDocumentsTabFragment$data = {
  readonly canCreateDocumentMapping: boolean;
  readonly canDeleteDocumentMapping: boolean;
  readonly documents: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"LinkedDocumentsCardFragment">;
      };
    }>;
  };
  readonly id: string;
  readonly " $fragmentType": "MeasureDocumentsTabFragment";
};
export type MeasureDocumentsTabFragment$key = {
  readonly " $data"?: MeasureDocumentsTabFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MeasureDocumentsTabFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "documents"
        ]
      }
    ]
  },
  "name": "MeasureDocumentsTabFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": "canCreateDocumentMapping",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:measure:create-document-mapping"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:measure:create-document-mapping\")"
    },
    {
      "alias": "canDeleteDocumentMapping",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:measure:delete-document-mapping"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:measure:delete-document-mapping\")"
    },
    {
      "alias": "documents",
      "args": null,
      "concreteType": "DocumentConnection",
      "kind": "LinkedField",
      "name": "__Measure__documents_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "DocumentEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Document",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "LinkedDocumentsCardFragment"
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
    }
  ],
  "type": "Measure",
  "abstractKey": null
};
})();

(node as any).hash = "32af5a2d7af9512d18f921922e9a3d1f";

export default node;
