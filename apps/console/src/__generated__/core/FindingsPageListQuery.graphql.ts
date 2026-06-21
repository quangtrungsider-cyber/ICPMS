/**
 * @generated SignedSource<<6c0df4895170dcc3e21749dfbad4b1cd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FindingsPageListQuery$variables = {
  organizationId: string;
};
export type FindingsPageListQuery$data = {
  readonly node: {
    readonly canCreateFinding?: boolean;
    readonly canPublishFindings?: boolean;
    readonly findingsDocument?: {
      readonly defaultApprovers: ReadonlyArray<{
        readonly id: string;
      }>;
      readonly id: string;
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"FindingsPageFragment">;
  };
};
export type FindingsPageListQuery = {
  response: FindingsPageListQuery$data;
  variables: FindingsPageListQuery$variables;
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
  "alias": "canCreateFinding",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:finding:create"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:finding:create\")"
},
v3 = {
  "alias": "canPublishFindings",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:finding:publish"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:finding:publish\")"
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "Document",
  "kind": "LinkedField",
  "name": "findingsDocument",
  "plural": false,
  "selections": [
    (v4/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Profile",
      "kind": "LinkedField",
      "name": "defaultApprovers",
      "plural": true,
      "selections": [
        (v4/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v7 = [
  {
    "fields": [
      {
        "kind": "Literal",
        "name": "kind",
        "value": null
      },
      {
        "kind": "Literal",
        "name": "ownerId",
        "value": null
      },
      {
        "kind": "Literal",
        "name": "priority",
        "value": null
      },
      {
        "kind": "Literal",
        "name": "status",
        "value": null
      }
    ],
    "kind": "ObjectValue",
    "name": "filter"
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 500
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FindingsPageListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v5/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "FindingsPageFragment"
              }
            ],
            "type": "Organization",
            "abstractKey": null
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
    "name": "FindingsPageListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          (v4/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": (v7/*: any*/),
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
                          (v4/*: any*/),
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
                              (v4/*: any*/),
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
                          (v6/*: any*/)
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
                "storageKey": "findings(filter:{\"kind\":null,\"ownerId\":null,\"priority\":null,\"status\":null},first:500)"
              },
              {
                "alias": null,
                "args": (v7/*: any*/),
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
    "cacheID": "b70ae55ff9805c05d6862e8c1cf1f5bd",
    "id": null,
    "metadata": {},
    "name": "FindingsPageListQuery",
    "operationKind": "query",
    "text": "query FindingsPageListQuery(\n  $organizationId: ID!\n) {\n  node(id: $organizationId) {\n    __typename\n    ... on Organization {\n      canCreateFinding: permission(action: \"core:finding:create\")\n      canPublishFindings: permission(action: \"core:finding:publish\")\n      findingsDocument {\n        id\n        defaultApprovers {\n          id\n        }\n      }\n      ...FindingsPageFragment\n    }\n    id\n  }\n}\n\nfragment FindingsPageFragment on Organization {\n  id\n  findings(first: 500, filter: {}) {\n    edges {\n      node {\n        id\n        canUpdate: permission(action: \"core:finding:update\")\n        canDelete: permission(action: \"core:finding:delete\")\n        ...FindingsPageRowFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment FindingsPageRowFragment on Finding {\n  id\n  kind\n  referenceId\n  description\n  status\n  priority\n  dueDate\n  owner {\n    id\n    fullName\n  }\n  canUpdate: permission(action: \"core:finding:update\")\n  canDelete: permission(action: \"core:finding:delete\")\n}\n"
  }
};
})();

(node as any).hash = "740db91e80542275c30cf2243a5e3e6d";

export default node;
