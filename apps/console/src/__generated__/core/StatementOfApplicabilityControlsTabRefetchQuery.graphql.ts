/**
 * @generated SignedSource<<fc6d3b3f50430a29f8bd739757d89864>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StatementOfApplicabilityControlsTabRefetchQuery$variables = {
  statementOfApplicabilityId: string;
};
export type StatementOfApplicabilityControlsTabRefetchQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"StatementOfApplicabilityControlsTabFragment">;
  };
};
export type StatementOfApplicabilityControlsTabRefetchQuery = {
  response: StatementOfApplicabilityControlsTabRefetchQuery$data;
  variables: StatementOfApplicabilityControlsTabRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "statementOfApplicabilityId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "statementOfApplicabilityId"
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "Organization",
  "kind": "LinkedField",
  "name": "organization",
  "plural": false,
  "selections": [
    (v3/*: any*/)
  ],
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1000
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "ASC",
      "field": "CONTROL_SECTION_TITLE"
    }
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "StatementOfApplicabilityControlsTabRefetchQuery",
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
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "StatementOfApplicabilityControlsTabFragment"
              }
            ],
            "type": "StatementOfApplicability",
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
    "name": "StatementOfApplicabilityControlsTabRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/),
              {
                "alias": "canCreateApplicabilityStatement",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "action",
                    "value": "core:applicability-statement:create"
                  }
                ],
                "kind": "ScalarField",
                "name": "permission",
                "storageKey": "permission(action:\"core:applicability-statement:create\")"
              },
              {
                "alias": "canUpdateApplicabilityStatement",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "action",
                    "value": "core:applicability-statement:update"
                  }
                ],
                "kind": "ScalarField",
                "name": "permission",
                "storageKey": "permission(action:\"core:applicability-statement:update\")"
              },
              {
                "alias": "canDeleteApplicabilityStatement",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "action",
                    "value": "core:applicability-statement:delete"
                  }
                ],
                "kind": "ScalarField",
                "name": "permission",
                "storageKey": "permission(action:\"core:applicability-statement:delete\")"
              },
              {
                "alias": null,
                "args": (v5/*: any*/),
                "concreteType": "ApplicabilityStatementConnection",
                "kind": "LinkedField",
                "name": "applicabilityStatements",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ApplicabilityStatementEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ApplicabilityStatement",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "applicability",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "justification",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Control",
                            "kind": "LinkedField",
                            "name": "control",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "sectionTitle",
                                "storageKey": null
                              },
                              (v6/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "bestPractice",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "notImplementedJustification",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "maturityLevel",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "regulatory",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "contractual",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "riskAssessment",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Framework",
                                "kind": "LinkedField",
                                "name": "framework",
                                "plural": false,
                                "selections": [
                                  (v3/*: any*/),
                                  (v6/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v4/*: any*/)
                            ],
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
                        "name": "endCursor",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasNextPage",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "ClientExtension",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__id",
                        "storageKey": null
                      }
                    ]
                  }
                ],
                "storageKey": "applicabilityStatements(first:1000,orderBy:{\"direction\":\"ASC\",\"field\":\"CONTROL_SECTION_TITLE\"})"
              },
              {
                "alias": null,
                "args": (v5/*: any*/),
                "filters": [
                  "orderBy"
                ],
                "handle": "connection",
                "key": "StatementOfApplicabilityControlsTab_applicabilityStatements",
                "kind": "LinkedHandle",
                "name": "applicabilityStatements"
              }
            ],
            "type": "StatementOfApplicability",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "28845b44bed6d9f61122bcfd92d928df",
    "id": null,
    "metadata": {},
    "name": "StatementOfApplicabilityControlsTabRefetchQuery",
    "operationKind": "query",
    "text": "query StatementOfApplicabilityControlsTabRefetchQuery(\n  $statementOfApplicabilityId: ID!\n) {\n  node(id: $statementOfApplicabilityId) {\n    __typename\n    ... on StatementOfApplicability {\n      ...StatementOfApplicabilityControlsTabFragment\n    }\n    id\n  }\n}\n\nfragment StatementOfApplicabilityControlsTabFragment on StatementOfApplicability {\n  id\n  organization {\n    id\n  }\n  canCreateApplicabilityStatement: permission(action: \"core:applicability-statement:create\")\n  canUpdateApplicabilityStatement: permission(action: \"core:applicability-statement:update\")\n  canDeleteApplicabilityStatement: permission(action: \"core:applicability-statement:delete\")\n  applicabilityStatements(first: 1000, orderBy: {direction: ASC, field: CONTROL_SECTION_TITLE}) {\n    edges {\n      node {\n        id\n        applicability\n        justification\n        control {\n          id\n          sectionTitle\n          name\n          bestPractice\n          notImplementedJustification\n          maturityLevel\n          regulatory\n          contractual\n          riskAssessment\n          framework {\n            id\n            name\n          }\n          organization {\n            id\n          }\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "42094d60bee1fda4c29109ecd5a0e666";

export default node;
