/**
 * @generated SignedSource<<77a24f92923642e90291601bd6547e46>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FindingKind = "EXCEPTION" | "MAJOR_NONCONFORMITY" | "MINOR_NONCONFORMITY" | "OBSERVATION";
export type FindingPriority = "HIGH" | "LOW" | "MEDIUM";
export type FindingStatus = "CLOSED" | "FALSE_POSITIVE" | "IN_PROGRESS" | "MITIGATED" | "OPEN" | "RISK_ACCEPTED";
export type FindingsPageRefetchQuery$variables = {
  after?: string | null | undefined;
  first?: number | null | undefined;
  id: string;
  kind?: FindingKind | null | undefined;
  ownerId?: string | null | undefined;
  priority?: FindingPriority | null | undefined;
  status?: FindingStatus | null | undefined;
};
export type FindingsPageRefetchQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"FindingsPageFragment">;
  };
};
export type FindingsPageRefetchQuery = {
  response: FindingsPageRefetchQuery$data;
  variables: FindingsPageRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": 500,
  "kind": "LocalArgument",
  "name": "first"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "kind"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "ownerId"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "priority"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "status"
},
v7 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v8 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v9 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "first"
},
v10 = {
  "kind": "Variable",
  "name": "kind",
  "variableName": "kind"
},
v11 = {
  "kind": "Variable",
  "name": "ownerId",
  "variableName": "ownerId"
},
v12 = {
  "kind": "Variable",
  "name": "priority",
  "variableName": "priority"
},
v13 = {
  "kind": "Variable",
  "name": "status",
  "variableName": "status"
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v16 = [
  (v8/*: any*/),
  {
    "fields": [
      (v10/*: any*/),
      (v11/*: any*/),
      (v12/*: any*/),
      (v13/*: any*/)
    ],
    "kind": "ObjectValue",
    "name": "filter"
  },
  (v9/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "FindingsPageRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v7/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "FindingsPageFragment"
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "FindingsPageRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v7/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v14/*: any*/),
          (v15/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v16/*: any*/),
                "concreteType": "FindingConnection",
                "kind": "LinkedField",
                "name": "findings",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "FindingEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Finding",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v15/*: any*/),
                          {
                            "alias": "canUpdate",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "action",
                                "value": "core:finding:update"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "permission",
                            "storageKey": "permission(action:\"core:finding:update\")"
                          },
                          {
                            "alias": "canDelete",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "action",
                                "value": "core:finding:delete"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "permission",
                            "storageKey": "permission(action:\"core:finding:delete\")"
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "kind",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "referenceId",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "description",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "status",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "priority",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "dueDate",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Profile",
                            "kind": "LinkedField",
                            "name": "owner",
                            "plural": false,
                            "selections": [
                              (v15/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "fullName",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          (v14/*: any*/)
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
                        "name": "hasNextPage",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "endCursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v16/*: any*/),
                "filters": [
                  "filter"
                ],
                "handle": "connection",
                "key": "FindingsPage_findings",
                "kind": "LinkedHandle",
                "name": "findings"
              }
            ],
            "type": "Organization",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b07c04932699f227c012700a882385f7",
    "id": null,
    "metadata": {},
    "name": "FindingsPageRefetchQuery",
    "operationKind": "query",
    "text": "query FindingsPageRefetchQuery(\n  $after: CursorKey\n  $first: Int = 500\n  $kind: FindingKind = null\n  $ownerId: ID = null\n  $priority: FindingPriority = null\n  $status: FindingStatus = null\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...FindingsPageFragment_us2Zl\n    id\n  }\n}\n\nfragment FindingsPageFragment_us2Zl on Organization {\n  id\n  findings(first: $first, after: $after, filter: {kind: $kind, status: $status, priority: $priority, ownerId: $ownerId}) {\n    edges {\n      node {\n        id\n        canUpdate: permission(action: \"core:finding:update\")\n        canDelete: permission(action: \"core:finding:delete\")\n        ...FindingsPageRowFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment FindingsPageRowFragment on Finding {\n  id\n  kind\n  referenceId\n  description\n  status\n  priority\n  dueDate\n  owner {\n    id\n    fullName\n  }\n  canUpdate: permission(action: \"core:finding:update\")\n  canDelete: permission(action: \"core:finding:delete\")\n}\n"
  }
};
})();

(node as any).hash = "6bb5832448f82843ca87675b25bf037f";

export default node;
