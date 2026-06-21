/**
 * @generated SignedSource<<74d05025a90a706a762bd6dd4ca03688>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MeasuresPageListQuery$variables = {
  organizationId: string;
};
export type MeasuresPageListQuery$data = {
  readonly organization: {
    readonly __typename: "Organization";
    readonly canCreateMeasure: boolean;
    readonly measureCategories: ReadonlyArray<string>;
    readonly " $fragmentSpreads": FragmentRefs<"MeasuresPageFragment">;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type MeasuresPageListQuery = {
  response: MeasuresPageListQuery$data;
  variables: MeasuresPageListQuery$variables;
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
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": "canCreateMeasure",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:measure:create"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:measure:create\")"
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "measureCategories",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = [
  {
    "fields": [
      {
        "kind": "Literal",
        "name": "category",
        "value": null
      },
      {
        "kind": "Literal",
        "name": "query",
        "value": null
      },
      {
        "kind": "Literal",
        "name": "state",
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
    "name": "MeasuresPageListQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": "organization",
          "args": (v1/*: any*/),
          "concreteType": null,
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": [
                (v3/*: any*/),
                (v4/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "MeasuresPageFragment"
                }
              ],
              "type": "Organization",
              "abstractKey": null
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
    "name": "MeasuresPageListQuery",
    "selections": [
      {
        "alias": "organization",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v5/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": (v6/*: any*/),
                "concreteType": "MeasureConnection",
                "kind": "LinkedField",
                "name": "measures",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MeasureEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Measure",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          {
                            "alias": "canUpdate",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "action",
                                "value": "core:measure:update"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "permission",
                            "storageKey": "permission(action:\"core:measure:update\")"
                          },
                          {
                            "alias": "canDelete",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "action",
                                "value": "core:measure:delete"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "permission",
                            "storageKey": "permission(action:\"core:measure:delete\")"
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "category",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "state",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "description",
                            "storageKey": null
                          },
                          (v2/*: any*/)
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
                "storageKey": "measures(filter:{\"category\":null,\"query\":null,\"state\":null},first:500)"
              },
              {
                "alias": null,
                "args": (v6/*: any*/),
                "filters": [
                  "filter"
                ],
                "handle": "connection",
                "key": "MeasuresPage_measures",
                "kind": "LinkedHandle",
                "name": "measures"
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
    "cacheID": "541947e6589ea08ddb1c3d275514f4a3",
    "id": null,
    "metadata": {},
    "name": "MeasuresPageListQuery",
    "operationKind": "query",
    "text": "query MeasuresPageListQuery(\n  $organizationId: ID!\n) {\n  organization: node(id: $organizationId) {\n    __typename\n    ... on Organization {\n      canCreateMeasure: permission(action: \"core:measure:create\")\n      measureCategories\n      ...MeasuresPageFragment\n    }\n    id\n  }\n}\n\nfragment MeasureFormDialogMeasureFragment on Measure {\n  id\n  description\n  name\n  category\n  state\n}\n\nfragment MeasuresPageFragment on Organization {\n  id\n  measures(first: 500, filter: {}) {\n    edges {\n      node {\n        id\n        canUpdate: permission(action: \"core:measure:update\")\n        canDelete: permission(action: \"core:measure:delete\")\n        ...MeasuresPageRowFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment MeasuresPageRowFragment on Measure {\n  id\n  name\n  category\n  state\n  canUpdate: permission(action: \"core:measure:update\")\n  canDelete: permission(action: \"core:measure:delete\")\n  ...MeasureFormDialogMeasureFragment\n}\n"
  }
};
})();

(node as any).hash = "f4d95deeeb43ef4e48296cee4174e903";

export default node;
