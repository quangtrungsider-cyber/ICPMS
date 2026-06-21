/**
 * @generated SignedSource<<5fb6956f514debc92d84e0d90c7cafa8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EmployeeDocumentSignaturePageDocumentFragment$data = {
  readonly id: string;
  readonly signed: boolean | null | undefined;
  readonly title: string;
  readonly versions: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"VersionActionsFragment" | "VersionRowFragment">;
      };
    }>;
  };
  readonly " $fragmentType": "EmployeeDocumentSignaturePageDocumentFragment";
};
export type EmployeeDocumentSignaturePageDocumentFragment$key = {
  readonly " $data"?: EmployeeDocumentSignaturePageDocumentFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EmployeeDocumentSignaturePageDocumentFragment">;
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
  "metadata": null,
  "name": "EmployeeDocumentSignaturePageDocumentFragment",
  "selections": [
    (v0/*: any*/),
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
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 100
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
            "kind": "RequiredField",
            "field": {
              "alias": null,
              "args": null,
              "concreteType": "EmployeeDocumentVersionEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "kind": "RequiredField",
                  "field": {
                    "alias": null,
                    "args": null,
                    "concreteType": "EmployeeDocumentVersion",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "VersionActionsFragment"
                      },
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "VersionRowFragment"
                      }
                    ],
                    "storageKey": null
                  },
                  "action": "THROW"
                }
              ],
              "storageKey": null
            },
            "action": "THROW"
          }
        ],
        "storageKey": "versions(first:100,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
      },
      "action": "THROW"
    }
  ],
  "type": "EmployeeDocument",
  "abstractKey": null
};
})();

(node as any).hash = "4bcc8414c7c1a495648db28a38f239fa";

export default node;
