/**
 * @generated SignedSource<<85dc81961bc2fac7c0625f380a5682d3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DocumentApprovePageDocumentFragment$data = {
  readonly id: string;
  readonly title: string;
  readonly versions: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly approvalDecision: {
          readonly " $fragmentSpreads": FragmentRefs<"DocumentApprovePageDecisionFragment">;
        } | null | undefined;
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"DocumentApprovePageVersionRowFragment">;
      };
    }>;
  };
  readonly " $fragmentType": "DocumentApprovePageDocumentFragment";
};
export type DocumentApprovePageDocumentFragment$key = {
  readonly " $data"?: DocumentApprovePageDocumentFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DocumentApprovePageDocumentFragment">;
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
  "name": "DocumentApprovePageDocumentFragment",
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
                        "name": "DocumentApprovePageVersionRowFragment"
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "DocumentVersionApprovalDecision",
                        "kind": "LinkedField",
                        "name": "approvalDecision",
                        "plural": false,
                        "selections": [
                          {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "DocumentApprovePageDecisionFragment"
                          }
                        ],
                        "storageKey": null
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

(node as any).hash = "f443926ae736586bf1a23af63f32cf44";

export default node;
