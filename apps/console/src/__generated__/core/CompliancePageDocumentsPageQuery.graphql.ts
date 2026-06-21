/**
 * @generated SignedSource<<a3685f6369eca45c9fa76bb9feffc061>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CompliancePageDocumentsPageQuery$variables = {
  organizationId: string;
};
export type CompliancePageDocumentsPageQuery$data = {
  readonly organization: {
    readonly " $fragmentSpreads": FragmentRefs<"CompliancePageDocumentListFragment">;
  };
};
export type CompliancePageDocumentsPageQuery = {
  response: CompliancePageDocumentsPageQuery$data;
  variables: CompliancePageDocumentsPageQuery$variables;
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
    "kind": "Variable",
    "name": "id",
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
    "name": "CompliancePageDocumentsPageQuery",
    "selections": [
      {
        "alias": "organization",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CompliancePageDocumentListFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CompliancePageDocumentsPageQuery",
    "selections": [
      {
        "alias": "organization",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": "compliancePage",
                "args": null,
                "concreteType": "TrustCenter",
                "kind": "LinkedField",
                "name": "trustCenter",
                "plural": false,
                "selections": [
                  {
                    "alias": "canUpdate",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "core:trust-center:update"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"core:trust-center:update\")"
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "filter",
                    "value": {
                      "status": [
                        "ACTIVE"
                      ]
                    }
                  },
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 100
                  }
                ],
                "concreteType": "DocumentConnection",
                "kind": "LinkedField",
                "name": "documents",
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
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "currentPublishedMajor",
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
                                      },
                                      (v2/*: any*/)
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
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "documents(filter:{\"status\":[\"ACTIVE\"]},first:100)"
              }
            ],
            "type": "Organization",
            "abstractKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "eb3882f196537338df098f30db3abd7c",
    "id": null,
    "metadata": {},
    "name": "CompliancePageDocumentsPageQuery",
    "operationKind": "query",
    "text": "query CompliancePageDocumentsPageQuery(\n  $organizationId: ID!\n) {\n  organization: node(id: $organizationId) {\n    __typename\n    ...CompliancePageDocumentListFragment\n    id\n  }\n}\n\nfragment CompliancePageDocumentListFragment on Organization {\n  compliancePage: trustCenter {\n    ...CompliancePageDocumentListItem_compliancePageFragment\n    id\n  }\n  documents(first: 100, filter: {status: [ACTIVE]}) {\n    edges {\n      node {\n        id\n        currentPublishedMajor\n        ...CompliancePageDocumentListItem_documentFragment\n      }\n    }\n  }\n}\n\nfragment CompliancePageDocumentListItem_compliancePageFragment on TrustCenter {\n  canUpdate: permission(action: \"core:trust-center:update\")\n}\n\nfragment CompliancePageDocumentListItem_documentFragment on Document {\n  id\n  trustCenterVisibility\n  latestPublishedVersion: versions(first: 1, orderBy: {field: CREATED_AT, direction: DESC}, filter: {statuses: [PUBLISHED]}) {\n    edges {\n      node {\n        title\n        documentType\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d81c7a5da1810d0e8d7fadb5b8a3766a";

export default node;
