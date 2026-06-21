/**
 * @generated SignedSource<<1e86d1f601025fd72cdaf15a42a89753>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EmployeeApprovalsPageQuery$variables = {
  organizationId: string;
};
export type EmployeeApprovalsPageQuery$data = {
  readonly viewer: {
    readonly approvableDocuments: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly " $fragmentSpreads": FragmentRefs<"ApprovableDocumentRowFragment">;
        };
      }>;
    };
  };
};
export type EmployeeApprovalsPageQuery = {
  response: EmployeeApprovalsPageQuery$data;
  variables: EmployeeApprovalsPageQuery$variables;
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
    "name": "EmployeeApprovalsPageQuery",
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
                "name": "approvableDocuments",
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
                                "name": "ApprovableDocumentRowFragment"
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
    "name": "EmployeeApprovalsPageQuery",
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
            "name": "approvableDocuments",
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
    "cacheID": "d34016f452ad3fdcbf49dbf9d6e55731",
    "id": null,
    "metadata": {},
    "name": "EmployeeApprovalsPageQuery",
    "operationKind": "query",
    "text": "query EmployeeApprovalsPageQuery(\n  $organizationId: ID!\n) {\n  viewer {\n    approvableDocuments(organizationId: $organizationId, first: 1000, orderBy: {field: UPDATED_AT, direction: DESC}) {\n      edges {\n        node {\n          id\n          ...ApprovableDocumentRowFragment\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment ApprovableDocumentRowFragment on EmployeeDocument {\n  id\n  title\n  approvalState\n  updatedAt\n  lastVersion: versions(first: 1, orderBy: {field: CREATED_AT, direction: DESC}) {\n    edges {\n      node {\n        documentType\n        classification\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "959d0844698504883acd8cde64cb43b4";

export default node;
