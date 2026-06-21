/**
 * @generated SignedSource<<c8b8f77915804c105af9d8b13d8d8e2d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EmployeeDocumentsPageQuery$variables = {
  organizationId: string;
};
export type EmployeeDocumentsPageQuery$data = {
  readonly viewer: {
    readonly signableDocuments: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly " $fragmentSpreads": FragmentRefs<"DocumentRowFragment">;
        };
      }>;
    };
  };
};
export type EmployeeDocumentsPageQuery = {
  response: EmployeeDocumentsPageQuery$data;
  variables: EmployeeDocumentsPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "organizationId"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1000
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "DESC",
      "field": "UPDATED_AT"
    }
  },
  {
    "kind": "Variable",
    "name": "organizationId",
    "variableName": "organizationId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EmployeeDocumentsPageQuery",
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
              "kind": "RequiredField",
              "field": {
                "alias": null,
                "args": (v1/*: any*/),
                "concreteType": "EmployeeDocumentConnection",
                "kind": "LinkedField",
                "name": "signableDocuments",
                "plural": false,
                "selections": [
                  {
                    "kind": "RequiredField",
                    "field": {
                      "alias": null,
                      "args": null,
                      "concreteType": "EmployeeDocumentEdge",
                      "kind": "LinkedField",
                      "name": "edges",
                      "plural": true,
                      "selections": [
                        {
                          "kind": "RequiredField",
                          "field": {
                            "alias": null,
                            "args": null,
                            "concreteType": "EmployeeDocument",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v2/*: any*/),
                              {
                                "args": null,
                                "kind": "FragmentSpread",
                                "name": "DocumentRowFragment"
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
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EmployeeDocumentsPageQuery",
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
            "concreteType": "EmployeeDocumentConnection",
            "kind": "LinkedField",
            "name": "signableDocuments",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "EmployeeDocumentEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "EmployeeDocument",
                    "kind": "LinkedField",
                    "name": "node",
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
                                  },
                                  (v2/*: any*/)
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
                    "storageKey": null
                  }
                ],
                "storageKey": null
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
    "cacheID": "e5e41614e06591b18165755a6ebd57fb",
    "id": null,
    "metadata": {},
    "name": "EmployeeDocumentsPageQuery",
    "operationKind": "query",
    "text": "query EmployeeDocumentsPageQuery(\n  $organizationId: ID!\n) {\n  viewer {\n    signableDocuments(organizationId: $organizationId, first: 1000, orderBy: {field: UPDATED_AT, direction: DESC}) {\n      edges {\n        node {\n          id\n          ...DocumentRowFragment\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment DocumentRowFragment on EmployeeDocument {\n  id\n  title\n  signed\n  updatedAt\n  lastVersion: versions(first: 1, orderBy: {field: CREATED_AT, direction: DESC}) {\n    edges {\n      node {\n        documentType\n        classification\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6a16ca5c1bfab8639eaf512e4408e7f1";

export default node;
