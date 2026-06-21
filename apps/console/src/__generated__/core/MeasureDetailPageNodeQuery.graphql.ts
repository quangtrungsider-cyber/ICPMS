/**
 * @generated SignedSource<<90346cd8d6b25d79da736c1ccde02e5a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MeasureState = "IMPLEMENTED" | "IN_PROGRESS" | "NOT_APPLICABLE" | "NOT_IMPLEMENTED" | "NOT_STARTED" | "UNKNOWN";
export type MeasureDetailPageNodeQuery$variables = {
  measureId: string;
};
export type MeasureDetailPageNodeQuery$data = {
  readonly node: {
    readonly canDelete?: boolean;
    readonly canListTasks?: boolean;
    readonly canUpdate?: boolean;
    readonly category?: string;
    readonly controlsInfos?: {
      readonly totalCount: number;
    };
    readonly description?: string | null | undefined;
    readonly documentsInfos?: {
      readonly totalCount: number;
    };
    readonly evidencesInfos?: {
      readonly totalCount: number;
    };
    readonly name?: string;
    readonly risksInfos?: {
      readonly totalCount: number;
    };
    readonly state?: MeasureState;
    readonly thirdPartiesInfos?: {
      readonly totalCount: number;
    };
    readonly " $fragmentSpreads": FragmentRefs<"MeasureControlsTabFragment" | "MeasureDocumentsTabFragment" | "MeasureEvidencesTabFragment" | "MeasureFormDialogMeasureFragment" | "MeasureRisksTabFragment" | "MeasureThirdPartiesPageFragment">;
  };
};
export type MeasureDetailPageNodeQuery = {
  response: MeasureDetailPageNodeQuery$data;
  variables: MeasureDetailPageNodeQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "measureId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "measureId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "state",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "category",
  "storageKey": null
},
v6 = {
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
v7 = {
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
v8 = {
  "alias": "canListTasks",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:task:list"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:task:list\")"
},
v9 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 0
  }
],
v10 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
],
v11 = {
  "alias": "evidencesInfos",
  "args": (v9/*: any*/),
  "concreteType": "EvidenceConnection",
  "kind": "LinkedField",
  "name": "evidences",
  "plural": false,
  "selections": (v10/*: any*/),
  "storageKey": "evidences(first:0)"
},
v12 = {
  "alias": "risksInfos",
  "args": (v9/*: any*/),
  "concreteType": "RiskConnection",
  "kind": "LinkedField",
  "name": "risks",
  "plural": false,
  "selections": (v10/*: any*/),
  "storageKey": "risks(first:0)"
},
v13 = {
  "alias": "controlsInfos",
  "args": (v9/*: any*/),
  "concreteType": "ControlConnection",
  "kind": "LinkedField",
  "name": "controls",
  "plural": false,
  "selections": (v10/*: any*/),
  "storageKey": "controls(first:0)"
},
v14 = {
  "alias": "documentsInfos",
  "args": (v9/*: any*/),
  "concreteType": "DocumentConnection",
  "kind": "LinkedField",
  "name": "documents",
  "plural": false,
  "selections": (v10/*: any*/),
  "storageKey": "documents(first:0)"
},
v15 = {
  "alias": "thirdPartiesInfos",
  "args": (v9/*: any*/),
  "concreteType": "ThirdPartyConnection",
  "kind": "LinkedField",
  "name": "thirdParties",
  "plural": false,
  "selections": (v10/*: any*/),
  "storageKey": "thirdParties(first:0)"
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v18 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  }
],
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endCursor",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasNextPage",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    (v20/*: any*/),
    (v21/*: any*/)
  ],
  "storageKey": null
},
v23 = {
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
},
v24 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v25 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    (v20/*: any*/),
    (v21/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasPreviousPage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startCursor",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v26 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 50
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MeasureDetailPageNodeQuery",
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
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "MeasureRisksTabFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "MeasureControlsTabFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "MeasureDocumentsTabFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "MeasureFormDialogMeasureFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "MeasureEvidencesTabFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "MeasureThirdPartiesPageFragment"
              }
            ],
            "type": "Measure",
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
    "name": "MeasureDetailPageNodeQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v16/*: any*/),
          (v17/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              {
                "alias": "canCreateRiskMeasureMapping",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "action",
                    "value": "core:risk:create-measure-mapping"
                  }
                ],
                "kind": "ScalarField",
                "name": "permission",
                "storageKey": "permission(action:\"core:risk:create-measure-mapping\")"
              },
              {
                "alias": "canDeleteRiskMeasureMapping",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "action",
                    "value": "core:risk:delete-measure-mapping"
                  }
                ],
                "kind": "ScalarField",
                "name": "permission",
                "storageKey": "permission(action:\"core:risk:delete-measure-mapping\")"
              },
              {
                "alias": null,
                "args": (v18/*: any*/),
                "concreteType": "RiskConnection",
                "kind": "LinkedField",
                "name": "risks",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "RiskEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Risk",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v17/*: any*/),
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "inherentRiskScore",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "residualRiskScore",
                            "storageKey": null
                          },
                          (v16/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v19/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v22/*: any*/),
                  (v23/*: any*/)
                ],
                "storageKey": "risks(first:100)"
              },
              {
                "alias": null,
                "args": (v18/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "Measure__risks",
                "kind": "LinkedHandle",
                "name": "risks"
              },
              {
                "alias": "canCreateControlMeasureMapping",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "action",
                    "value": "core:control:create-measure-mapping"
                  }
                ],
                "kind": "ScalarField",
                "name": "permission",
                "storageKey": "permission(action:\"core:control:create-measure-mapping\")"
              },
              {
                "alias": "canDeleteControlMeasureMapping",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "action",
                    "value": "core:control:delete-measure-mapping"
                  }
                ],
                "kind": "ScalarField",
                "name": "permission",
                "storageKey": "permission(action:\"core:control:delete-measure-mapping\")"
              },
              {
                "alias": null,
                "args": (v24/*: any*/),
                "concreteType": "ControlConnection",
                "kind": "LinkedField",
                "name": "controls",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ControlEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Control",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v17/*: any*/),
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "sectionTitle",
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
                              (v17/*: any*/),
                              (v2/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v16/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v19/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v25/*: any*/),
                  (v23/*: any*/)
                ],
                "storageKey": "controls(first:20)"
              },
              {
                "alias": null,
                "args": (v24/*: any*/),
                "filters": [
                  "orderBy",
                  "filter"
                ],
                "handle": "connection",
                "key": "MeasureControlsTab_controls",
                "kind": "LinkedHandle",
                "name": "controls"
              },
              {
                "alias": "canCreateDocumentMapping",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "action",
                    "value": "core:measure:create-document-mapping"
                  }
                ],
                "kind": "ScalarField",
                "name": "permission",
                "storageKey": "permission(action:\"core:measure:create-document-mapping\")"
              },
              {
                "alias": "canDeleteDocumentMapping",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "action",
                    "value": "core:measure:delete-document-mapping"
                  }
                ],
                "kind": "ScalarField",
                "name": "permission",
                "storageKey": "permission(action:\"core:measure:delete-document-mapping\")"
              },
              {
                "alias": null,
                "args": (v18/*: any*/),
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
                          (v17/*: any*/),
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "first",
                                "value": 1
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
                                      (v17/*: any*/),
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
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "status",
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "versions(first:1)"
                          },
                          (v16/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v19/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v22/*: any*/),
                  (v23/*: any*/)
                ],
                "storageKey": "documents(first:100)"
              },
              {
                "alias": null,
                "args": (v18/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "Measure__documents",
                "kind": "LinkedHandle",
                "name": "documents"
              },
              {
                "alias": "canUploadEvidence",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "action",
                    "value": "core:measure:upload-evidence"
                  }
                ],
                "kind": "ScalarField",
                "name": "permission",
                "storageKey": "permission(action:\"core:measure:upload-evidence\")"
              },
              {
                "alias": null,
                "args": (v26/*: any*/),
                "concreteType": "EvidenceConnection",
                "kind": "LinkedField",
                "name": "evidences",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "EvidenceEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Evidence",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v17/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "File",
                            "kind": "LinkedField",
                            "name": "file",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "fileName",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "mimeType",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "size",
                                "storageKey": null
                              },
                              (v17/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "createdAt",
                            "storageKey": null
                          },
                          {
                            "alias": "canDelete",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "action",
                                "value": "core:evidence:delete"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "permission",
                            "storageKey": "permission(action:\"core:evidence:delete\")"
                          },
                          (v16/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v19/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v25/*: any*/),
                  (v23/*: any*/)
                ],
                "storageKey": "evidences(first:50)"
              },
              {
                "alias": null,
                "args": (v26/*: any*/),
                "filters": [
                  "orderBy"
                ],
                "handle": "connection",
                "key": "MeasureEvidencesTabFragment_evidences",
                "kind": "LinkedHandle",
                "name": "evidences"
              },
              {
                "alias": "canCreateMeasureThirdPartyMapping",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "action",
                    "value": "core:measure:create-third-party-mapping"
                  }
                ],
                "kind": "ScalarField",
                "name": "permission",
                "storageKey": "permission(action:\"core:measure:create-third-party-mapping\")"
              },
              {
                "alias": "canDeleteMeasureThirdPartyMapping",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "action",
                    "value": "core:measure:delete-third-party-mapping"
                  }
                ],
                "kind": "ScalarField",
                "name": "permission",
                "storageKey": "permission(action:\"core:measure:delete-third-party-mapping\")"
              },
              {
                "alias": null,
                "args": (v18/*: any*/),
                "concreteType": "ThirdPartyConnection",
                "kind": "LinkedField",
                "name": "thirdParties",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ThirdPartyEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ThirdParty",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v17/*: any*/),
                          (v2/*: any*/),
                          (v5/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "websiteUrl",
                            "storageKey": null
                          },
                          (v16/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v19/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v22/*: any*/),
                  (v23/*: any*/)
                ],
                "storageKey": "thirdParties(first:100)"
              },
              {
                "alias": null,
                "args": (v18/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "MeasureThirdPartiesPage_thirdParties",
                "kind": "LinkedHandle",
                "name": "thirdParties"
              }
            ],
            "type": "Measure",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8f3332d71167d776fc140a2f55aea2de",
    "id": null,
    "metadata": {},
    "name": "MeasureDetailPageNodeQuery",
    "operationKind": "query",
    "text": "query MeasureDetailPageNodeQuery(\n  $measureId: ID!\n) {\n  node(id: $measureId) {\n    __typename\n    ... on Measure {\n      name\n      description\n      state\n      category\n      canUpdate: permission(action: \"core:measure:update\")\n      canDelete: permission(action: \"core:measure:delete\")\n      canListTasks: permission(action: \"core:task:list\")\n      evidencesInfos: evidences(first: 0) {\n        totalCount\n      }\n      risksInfos: risks(first: 0) {\n        totalCount\n      }\n      controlsInfos: controls(first: 0) {\n        totalCount\n      }\n      documentsInfos: documents(first: 0) {\n        totalCount\n      }\n      thirdPartiesInfos: thirdParties(first: 0) {\n        totalCount\n      }\n      ...MeasureRisksTabFragment\n      ...MeasureControlsTabFragment\n      ...MeasureDocumentsTabFragment\n      ...MeasureFormDialogMeasureFragment\n      ...MeasureEvidencesTabFragment\n      ...MeasureThirdPartiesPageFragment\n    }\n    id\n  }\n}\n\nfragment LinkedControlsCardFragment on Control {\n  id\n  name\n  sectionTitle\n  framework {\n    id\n    name\n  }\n}\n\nfragment LinkedDocumentsCardFragment on Document {\n  id\n  versions(first: 1) {\n    edges {\n      node {\n        id\n        title\n        documentType\n        status\n      }\n    }\n  }\n}\n\nfragment LinkedRisksCardFragment on Risk {\n  id\n  name\n  inherentRiskScore\n  residualRiskScore\n}\n\nfragment LinkedThirdPartiesCardFragment on ThirdParty {\n  id\n  name\n  category\n  websiteUrl\n}\n\nfragment MeasureControlsTabFragment on Measure {\n  canCreateControlMeasureMapping: permission(action: \"core:control:create-measure-mapping\")\n  canDeleteControlMeasureMapping: permission(action: \"core:control:delete-measure-mapping\")\n  controls(first: 20) {\n    edges {\n      node {\n        ...LinkedControlsCardFragment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n\nfragment MeasureDocumentsTabFragment on Measure {\n  id\n  canCreateDocumentMapping: permission(action: \"core:measure:create-document-mapping\")\n  canDeleteDocumentMapping: permission(action: \"core:measure:delete-document-mapping\")\n  documents(first: 100) {\n    edges {\n      node {\n        id\n        ...LinkedDocumentsCardFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment MeasureEvidencesTabFragment on Measure {\n  name\n  canUploadEvidence: permission(action: \"core:measure:upload-evidence\")\n  evidences(first: 50) {\n    edges {\n      node {\n        id\n        file {\n          fileName\n          mimeType\n          size\n          id\n        }\n        ...MeasureEvidencesTabFragment_evidence\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n\nfragment MeasureEvidencesTabFragment_evidence on Evidence {\n  id\n  file {\n    fileName\n    mimeType\n    size\n    id\n  }\n  description\n  createdAt\n  canDelete: permission(action: \"core:evidence:delete\")\n}\n\nfragment MeasureFormDialogMeasureFragment on Measure {\n  id\n  description\n  name\n  category\n  state\n}\n\nfragment MeasureRisksTabFragment on Measure {\n  id\n  canCreateRiskMeasureMapping: permission(action: \"core:risk:create-measure-mapping\")\n  canDeleteRiskMeasureMapping: permission(action: \"core:risk:delete-measure-mapping\")\n  risks(first: 100) {\n    edges {\n      node {\n        id\n        ...LinkedRisksCardFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment MeasureThirdPartiesPageFragment on Measure {\n  id\n  canCreateMeasureThirdPartyMapping: permission(action: \"core:measure:create-third-party-mapping\")\n  canDeleteMeasureThirdPartyMapping: permission(action: \"core:measure:delete-third-party-mapping\")\n  thirdParties(first: 100) {\n    edges {\n      node {\n        id\n        ...LinkedThirdPartiesCardFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4d791b51f9336d076f3cc966b449bf9f";

export default node;
