/**
 * @generated SignedSource<<c715c086efa6ce25ca719be55a454784>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EmployeeDocumentSignaturePageQuery$variables = {
  documentId: string;
};
export type EmployeeDocumentSignaturePageQuery$data = {
  readonly viewer: {
    readonly signableDocument: {
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"EmployeeDocumentSignaturePageDocumentFragment">;
    } | null | undefined;
  };
};
export type EmployeeDocumentSignaturePageQuery = {
  response: EmployeeDocumentSignaturePageQuery$data;
  variables: EmployeeDocumentSignaturePageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "documentId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "documentId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "signed",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EmployeeDocumentSignaturePageQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": null,
          "concreteType": "Viewer",
          "kind": "LinkedField",
          "name": "viewer",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": (v1/*: any*/),
              "concreteType": "EmployeeDocument",
              "kind": "LinkedField",
              "name": "signableDocument",
              "plural": false,
              "selections": [
                (v2/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "EmployeeDocumentSignaturePageDocumentFragment"
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
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EmployeeDocumentSignaturePageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "EmployeeDocument",
            "kind": "LinkedField",
            "name": "signableDocument",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              (v3/*: any*/),
              {
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
                          (v2/*: any*/),
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "major",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "minor",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "publishedAt",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "versions(first:100,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
              }
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b02d1d3bb0f1f3454fdb135c8d53773f",
    "id": null,
    "metadata": {},
    "name": "EmployeeDocumentSignaturePageQuery",
    "operationKind": "query",
    "text": "query EmployeeDocumentSignaturePageQuery(\n  $documentId: ID!\n) {\n  viewer {\n    signableDocument(id: $documentId) {\n      id\n      ...EmployeeDocumentSignaturePageDocumentFragment\n    }\n    id\n  }\n}\n\nfragment EmployeeDocumentSignaturePageDocumentFragment on EmployeeDocument {\n  id\n  title\n  signed\n  versions(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {\n    edges {\n      node {\n        id\n        ...VersionActionsFragment\n        ...VersionRowFragment\n      }\n    }\n  }\n}\n\nfragment VersionActionsFragment on EmployeeDocumentVersion {\n  id\n  signed\n}\n\nfragment VersionRowFragment on EmployeeDocumentVersion {\n  id\n  major\n  minor\n  signed\n  publishedAt\n}\n"
  }
};
})();

(node as any).hash = "4b2db4d00f02f0826166b729e61e4e5d";

export default node;
