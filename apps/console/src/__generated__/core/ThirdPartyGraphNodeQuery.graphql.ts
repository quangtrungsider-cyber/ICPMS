/**
 * @generated SignedSource<<18e95799208c027383bf9a0be4076510>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ThirdPartyVettingStatus = "COMPLETED" | "FAILED" | "PENDING" | "PROCESSING";
export type ThirdPartyGraphNodeQuery$variables = {
  thirdPartyId: string;
};
export type ThirdPartyGraphNodeQuery$data = {
  readonly node: {
    readonly canCreateContact?: boolean;
    readonly canCreateRiskAssessment?: boolean;
    readonly canCreateService?: boolean;
    readonly canDelete?: boolean;
    readonly canUpdate?: boolean;
    readonly canUploadBAA?: boolean;
    readonly canUploadComplianceReport?: boolean;
    readonly canUploadDPA?: boolean;
    readonly canVet?: boolean;
    readonly firstLevel?: boolean;
    readonly id: string;
    readonly measuresInfos?: {
      readonly totalCount: number;
    };
    readonly name?: string;
    readonly vettingStatus?: ThirdPartyVettingStatus | null | undefined;
    readonly websiteUrl?: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"ThirdPartyComplianceTabFragment" | "ThirdPartyContactsTabFragment" | "ThirdPartyMeasuresPageFragment" | "ThirdPartyOverviewTabBusinessAssociateAgreementFragment" | "ThirdPartyOverviewTabDataPrivacyAgreementFragment" | "ThirdPartyRiskAssessmentTabFragment" | "ThirdPartyServicesTabFragment" | "useThirdPartyFormFragment">;
  };
  readonly viewer: {
    readonly id: string;
  };
};
export type ThirdPartyGraphNodeQuery = {
  response: ThirdPartyGraphNodeQuery$data;
  variables: ThirdPartyGraphNodeQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "thirdPartyId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "thirdPartyId"
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
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "websiteUrl",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstLevel",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "vettingStatus",
  "storageKey": null
},
v7 = {
  "alias": "canVet",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:thirdParty:vet"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:thirdParty:vet\")"
},
v8 = {
  "alias": "canUpdate",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:thirdParty:update"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:thirdParty:update\")"
},
v9 = {
  "alias": "canDelete",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:thirdParty:delete"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:thirdParty:delete\")"
},
v10 = {
  "alias": "canUploadComplianceReport",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:thirdParty-compliance-report:upload"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:thirdParty-compliance-report:upload\")"
},
v11 = {
  "alias": "canCreateRiskAssessment",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:thirdParty-risk-assessment:create"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:thirdParty-risk-assessment:create\")"
},
v12 = {
  "alias": "canCreateContact",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:thirdParty-contact:create"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:thirdParty-contact:create\")"
},
v13 = {
  "alias": "canCreateService",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:thirdParty-service:create"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:thirdParty-service:create\")"
},
v14 = {
  "alias": "canUploadBAA",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:thirdParty-business-associate-agreement:upload"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:thirdParty-business-associate-agreement:upload\")"
},
v15 = {
  "alias": "canUploadDPA",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:thirdParty-data-privacy-agreement:upload"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:thirdParty-data-privacy-agreement:upload\")"
},
v16 = {
  "alias": "measuresInfos",
  "args": [
    {
      "kind": "Literal",
      "name": "first",
      "value": 0
    }
  ],
  "concreteType": "MeasureConnection",
  "kind": "LinkedField",
  "name": "measures",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCount",
      "storageKey": null
    }
  ],
  "storageKey": "measures(first:0)"
},
v17 = [
  (v2/*: any*/)
],
v18 = {
  "alias": null,
  "args": null,
  "concreteType": "Viewer",
  "kind": "LinkedField",
  "name": "viewer",
  "plural": false,
  "selections": (v17/*: any*/),
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v21 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 50
  }
],
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "validUntil",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fileName",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endCursor",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasNextPage",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasPreviousPage",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "startCursor",
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    (v25/*: any*/),
    (v26/*: any*/),
    (v27/*: any*/),
    (v28/*: any*/)
  ],
  "storageKey": null
},
v30 = {
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
v31 = [
  "orderBy"
],
v32 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fileUrl",
  "storageKey": null
},
v33 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "validFrom",
  "storageKey": null
},
v34 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ThirdPartyGraphNodeQuery",
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
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "useThirdPartyFormFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ThirdPartyComplianceTabFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ThirdPartyContactsTabFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ThirdPartyServicesTabFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ThirdPartyRiskAssessmentTabFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ThirdPartyOverviewTabBusinessAssociateAgreementFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ThirdPartyOverviewTabDataPrivacyAgreementFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ThirdPartyMeasuresPageFragment"
              }
            ],
            "type": "ThirdParty",
            "abstractKey": null
          }
        ],
        "storageKey": null
      },
      (v18/*: any*/)
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ThirdPartyGraphNodeQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v19/*: any*/),
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/),
              (v20/*: any*/),
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
                "name": "statusPageUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "termsOfServiceUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "privacyPolicyUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "serviceLevelAgreementUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "dataProcessingAgreementUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "legalName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "headquarterAddress",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "certifications",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "countries",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "securityPageUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "trustPageUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Profile",
                "kind": "LinkedField",
                "name": "businessOwner",
                "plural": false,
                "selections": (v17/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Profile",
                "kind": "LinkedField",
                "name": "securityOwner",
                "plural": false,
                "selections": (v17/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v21/*: any*/),
                "concreteType": "ThirdPartyComplianceReportConnection",
                "kind": "LinkedField",
                "name": "complianceReports",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ThirdPartyComplianceReportEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ThirdPartyComplianceReport",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "alias": "canDelete",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "action",
                                "value": "core:thirdParty-compliance-report:delete"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "permission",
                            "storageKey": "permission(action:\"core:thirdParty-compliance-report:delete\")"
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "reportDate",
                            "storageKey": null
                          },
                          (v22/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "reportName",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "File",
                            "kind": "LinkedField",
                            "name": "file",
                            "plural": false,
                            "selections": [
                              (v23/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "size",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "downloadUrl",
                                "storageKey": null
                              },
                              (v2/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v19/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v24/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v29/*: any*/),
                  (v30/*: any*/)
                ],
                "storageKey": "complianceReports(first:50)"
              },
              {
                "alias": null,
                "args": (v21/*: any*/),
                "filters": (v31/*: any*/),
                "handle": "connection",
                "key": "ThirdPartyComplianceTabFragment_complianceReports",
                "kind": "LinkedHandle",
                "name": "complianceReports"
              },
              {
                "alias": null,
                "args": (v21/*: any*/),
                "concreteType": "ThirdPartyContactConnection",
                "kind": "LinkedField",
                "name": "contacts",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ThirdPartyContactEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ThirdPartyContact",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "alias": "canUpdate",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "action",
                                "value": "core:thirdParty-contact:update"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "permission",
                            "storageKey": "permission(action:\"core:thirdParty-contact:update\")"
                          },
                          {
                            "alias": "canDelete",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "action",
                                "value": "core:thirdParty-contact:delete"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "permission",
                            "storageKey": "permission(action:\"core:thirdParty-contact:delete\")"
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "fullName",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "email",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "phone",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "role",
                            "storageKey": null
                          },
                          (v19/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v24/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v29/*: any*/),
                  (v30/*: any*/)
                ],
                "storageKey": "contacts(first:50)"
              },
              {
                "alias": null,
                "args": (v21/*: any*/),
                "filters": (v31/*: any*/),
                "handle": "connection",
                "key": "ThirdPartyContactsTabFragment_contacts",
                "kind": "LinkedHandle",
                "name": "contacts"
              },
              {
                "alias": null,
                "args": (v21/*: any*/),
                "concreteType": "ThirdPartyServiceConnection",
                "kind": "LinkedField",
                "name": "services",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ThirdPartyServiceEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ThirdPartyService",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "alias": "canUpdate",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "action",
                                "value": "core:thirdParty-service:update"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "permission",
                            "storageKey": "permission(action:\"core:thirdParty-service:update\")"
                          },
                          {
                            "alias": "canDelete",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "action",
                                "value": "core:thirdParty-service:delete"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "permission",
                            "storageKey": "permission(action:\"core:thirdParty-service:delete\")"
                          },
                          (v3/*: any*/),
                          (v20/*: any*/),
                          (v19/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v24/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v29/*: any*/),
                  (v30/*: any*/)
                ],
                "storageKey": "services(first:50)"
              },
              {
                "alias": null,
                "args": (v21/*: any*/),
                "filters": (v31/*: any*/),
                "handle": "connection",
                "key": "ThirdPartyServicesTabFragment_services",
                "kind": "LinkedHandle",
                "name": "services"
              },
              {
                "alias": null,
                "args": (v21/*: any*/),
                "concreteType": "ThirdPartyRiskAssessmentConnection",
                "kind": "LinkedField",
                "name": "riskAssessments",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ThirdPartyRiskAssessmentEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ThirdPartyRiskAssessment",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "createdAt",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "expiresAt",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "dataSensitivity",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "businessImpact",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "notes",
                            "storageKey": null
                          },
                          (v19/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v24/*: any*/)
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
                      (v26/*: any*/),
                      (v25/*: any*/),
                      (v27/*: any*/),
                      (v28/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v30/*: any*/)
                ],
                "storageKey": "riskAssessments(first:50)"
              },
              {
                "alias": null,
                "args": (v21/*: any*/),
                "filters": (v31/*: any*/),
                "handle": "connection",
                "key": "ThirdPartyRiskAssessmentTabFragment_riskAssessments",
                "kind": "LinkedHandle",
                "name": "riskAssessments"
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ThirdPartyBusinessAssociateAgreement",
                "kind": "LinkedField",
                "name": "businessAssociateAgreement",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v23/*: any*/),
                  (v32/*: any*/),
                  (v33/*: any*/),
                  (v22/*: any*/),
                  {
                    "alias": "canUpdate",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "core:thirdParty-business-associate-agreement:update"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"core:thirdParty-business-associate-agreement:update\")"
                  },
                  {
                    "alias": "canDelete",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "core:thirdParty-business-associate-agreement:delete"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"core:thirdParty-business-associate-agreement:delete\")"
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ThirdPartyDataPrivacyAgreement",
                "kind": "LinkedField",
                "name": "dataPrivacyAgreement",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v23/*: any*/),
                  (v32/*: any*/),
                  (v33/*: any*/),
                  (v22/*: any*/),
                  {
                    "alias": "canUpdate",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "core:thirdParty-data-privacy-agreement:update"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"core:thirdParty-data-privacy-agreement:update\")"
                  },
                  {
                    "alias": "canDelete",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "action",
                        "value": "core:thirdParty-data-privacy-agreement:delete"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "permission",
                    "storageKey": "permission(action:\"core:thirdParty-data-privacy-agreement:delete\")"
                  }
                ],
                "storageKey": null
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
                "args": (v34/*: any*/),
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
                          (v2/*: any*/),
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "state",
                            "storageKey": null
                          },
                          (v19/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v24/*: any*/)
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
                      (v25/*: any*/),
                      (v26/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v30/*: any*/)
                ],
                "storageKey": "measures(first:100)"
              },
              {
                "alias": null,
                "args": (v34/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "ThirdPartyMeasuresPage_measures",
                "kind": "LinkedHandle",
                "name": "measures"
              }
            ],
            "type": "ThirdParty",
            "abstractKey": null
          }
        ],
        "storageKey": null
      },
      (v18/*: any*/)
    ]
  },
  "params": {
    "cacheID": "1ff04593668f4f9ce21ae7cf9b57adf9",
    "id": null,
    "metadata": {},
    "name": "ThirdPartyGraphNodeQuery",
    "operationKind": "query",
    "text": "query ThirdPartyGraphNodeQuery(\n  $thirdPartyId: ID!\n) {\n  node(id: $thirdPartyId) {\n    __typename\n    id\n    ... on ThirdParty {\n      name\n      websiteUrl\n      firstLevel\n      vettingStatus\n      canVet: permission(action: \"core:thirdParty:vet\")\n      canUpdate: permission(action: \"core:thirdParty:update\")\n      canDelete: permission(action: \"core:thirdParty:delete\")\n      canUploadComplianceReport: permission(action: \"core:thirdParty-compliance-report:upload\")\n      canCreateRiskAssessment: permission(action: \"core:thirdParty-risk-assessment:create\")\n      canCreateContact: permission(action: \"core:thirdParty-contact:create\")\n      canCreateService: permission(action: \"core:thirdParty-service:create\")\n      canUploadBAA: permission(action: \"core:thirdParty-business-associate-agreement:upload\")\n      canUploadDPA: permission(action: \"core:thirdParty-data-privacy-agreement:upload\")\n      measuresInfos: measures(first: 0) {\n        totalCount\n      }\n      ...useThirdPartyFormFragment\n      ...ThirdPartyComplianceTabFragment\n      ...ThirdPartyContactsTabFragment\n      ...ThirdPartyServicesTabFragment\n      ...ThirdPartyRiskAssessmentTabFragment\n      ...ThirdPartyOverviewTabBusinessAssociateAgreementFragment\n      ...ThirdPartyOverviewTabDataPrivacyAgreementFragment\n      ...ThirdPartyMeasuresPageFragment\n    }\n  }\n  viewer {\n    id\n  }\n}\n\nfragment LinkedMeasuresCardFragment on Measure {\n  id\n  name\n  state\n}\n\nfragment ThirdPartyComplianceTabFragment on ThirdParty {\n  complianceReports(first: 50) {\n    edges {\n      node {\n        id\n        canDelete: permission(action: \"core:thirdParty-compliance-report:delete\")\n        ...ThirdPartyComplianceTabFragment_report\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n\nfragment ThirdPartyComplianceTabFragment_report on ThirdPartyComplianceReport {\n  id\n  reportDate\n  validUntil\n  reportName\n  file {\n    fileName\n    size\n    downloadUrl\n    id\n  }\n  canDelete: permission(action: \"core:thirdParty-compliance-report:delete\")\n}\n\nfragment ThirdPartyContactsTabFragment on ThirdParty {\n  contacts(first: 50) {\n    edges {\n      node {\n        id\n        canUpdate: permission(action: \"core:thirdParty-contact:update\")\n        canDelete: permission(action: \"core:thirdParty-contact:delete\")\n        ...ThirdPartyContactsTabFragment_contact\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n\nfragment ThirdPartyContactsTabFragment_contact on ThirdPartyContact {\n  id\n  fullName\n  email\n  phone\n  role\n  canUpdate: permission(action: \"core:thirdParty-contact:update\")\n  canDelete: permission(action: \"core:thirdParty-contact:delete\")\n}\n\nfragment ThirdPartyMeasuresPageFragment on ThirdParty {\n  id\n  canCreateMeasureThirdPartyMapping: permission(action: \"core:measure:create-third-party-mapping\")\n  canDeleteMeasureThirdPartyMapping: permission(action: \"core:measure:delete-third-party-mapping\")\n  measures(first: 100) {\n    edges {\n      node {\n        id\n        ...LinkedMeasuresCardFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment ThirdPartyOverviewTabBusinessAssociateAgreementFragment on ThirdParty {\n  businessAssociateAgreement {\n    id\n    fileName\n    fileUrl\n    validFrom\n    validUntil\n    canUpdate: permission(action: \"core:thirdParty-business-associate-agreement:update\")\n    canDelete: permission(action: \"core:thirdParty-business-associate-agreement:delete\")\n  }\n}\n\nfragment ThirdPartyOverviewTabDataPrivacyAgreementFragment on ThirdParty {\n  dataPrivacyAgreement {\n    id\n    fileName\n    fileUrl\n    validFrom\n    validUntil\n    canUpdate: permission(action: \"core:thirdParty-data-privacy-agreement:update\")\n    canDelete: permission(action: \"core:thirdParty-data-privacy-agreement:delete\")\n  }\n}\n\nfragment ThirdPartyRiskAssessmentTabFragment on ThirdParty {\n  id\n  riskAssessments(first: 50) {\n    edges {\n      node {\n        id\n        ...ThirdPartyRiskAssessmentTabFragment_assessment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment ThirdPartyRiskAssessmentTabFragment_assessment on ThirdPartyRiskAssessment {\n  id\n  createdAt\n  expiresAt\n  dataSensitivity\n  businessImpact\n  notes\n}\n\nfragment ThirdPartyServicesTabFragment on ThirdParty {\n  services(first: 50) {\n    edges {\n      node {\n        id\n        canUpdate: permission(action: \"core:thirdParty-service:update\")\n        canDelete: permission(action: \"core:thirdParty-service:delete\")\n        ...ThirdPartyServicesTabFragment_service\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n\nfragment ThirdPartyServicesTabFragment_service on ThirdPartyService {\n  id\n  name\n  description\n  canUpdate: permission(action: \"core:thirdParty-service:update\")\n  canDelete: permission(action: \"core:thirdParty-service:delete\")\n}\n\nfragment useThirdPartyFormFragment on ThirdParty {\n  id\n  name\n  description\n  category\n  statusPageUrl\n  termsOfServiceUrl\n  privacyPolicyUrl\n  serviceLevelAgreementUrl\n  dataProcessingAgreementUrl\n  websiteUrl\n  legalName\n  headquarterAddress\n  certifications\n  countries\n  securityPageUrl\n  trustPageUrl\n  businessOwner {\n    id\n  }\n  securityOwner {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "c9920ac30080a88095da527ca6b32e8a";

export default node;
