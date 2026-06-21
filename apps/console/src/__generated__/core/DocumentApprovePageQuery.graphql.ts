/**
 * @generated SignedSource<<2ce500f2f9f65127304666ee3954f1cb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DocumentApprovePageQuery$variables = {
  documentId: string;
};
export type DocumentApprovePageQuery$data = {
  readonly viewer: {
    readonly approvableDocument: {
      readonly " $fragmentSpreads": FragmentRefs<"DocumentApprovePageDocumentFragment">;
    } | null | undefined;
  };
};
export type DocumentApprovePageQuery = {
  response: DocumentApprovePageQuery$data;
  variables: DocumentApprovePageQuery$variables;
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DocumentApprovePageQuery",
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
              "name": "approvableDocument",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "DocumentApprovePageDocumentFragment"
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
    "name": "DocumentApprovePageQuery",
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
            "name": "approvableDocument",
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
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "DocumentVersionApprovalDecision",
                            "kind": "LinkedField",
                            "name": "approvalDecision",
                            "plural": false,
                            "selections": [
                              (v2/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "state",
                                "storageKey": null
                              },
                              {
                                "alias": "canApprove",
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "action",
                                    "value": "core:document-version:approve"
                                  }
                                ],
                                "kind": "ScalarField",
                                "name": "permission",
                                "storageKey": "permission(action:\"core:document-version:approve\")"
                              },
                              {
                                "alias": "canReject",
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "action",
                                    "value": "core:document-version:reject"
                                  }
                                ],
                                "kind": "ScalarField",
                                "name": "permission",
                                "storageKey": "permission(action:\"core:document-version:reject\")"
                              }
                            ],
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
    "cacheID": "dafc283699feeb3db549b3f782029ed1",
    "id": null,
    "metadata": {},
    "name": "DocumentApprovePageQuery",
    "operationKind": "query",
    "text": "query DocumentApprovePageQuery(\n  $documentId: ID!\n) {\n  viewer {\n    approvableDocument(id: $documentId) {\n      ...DocumentApprovePageDocumentFragment\n      id\n    }\n    id\n  }\n}\n\nfragment DocumentApprovePageDecisionFragment on DocumentVersionApprovalDecision {\n  id\n  state\n  canApprove: permission(action: \"core:document-version:approve\")\n  canReject: permission(action: \"core:document-version:reject\")\n}\n\nfragment DocumentApprovePageDocumentFragment on EmployeeDocument {\n  id\n  title\n  versions(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {\n    edges {\n      node {\n        id\n        ...DocumentApprovePageVersionRowFragment\n        approvalDecision {\n          ...DocumentApprovePageDecisionFragment\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment DocumentApprovePageVersionRowFragment on EmployeeDocumentVersion {\n  id\n  major\n  minor\n  publishedAt\n  approvalDecision {\n    id\n    state\n  }\n}\n"
  }
};
})();

(node as any).hash = "c337b78bcc0854ce84852926bd060e3a";

export default node;
