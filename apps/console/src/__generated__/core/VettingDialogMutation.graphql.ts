/**
 * @generated SignedSource<<1b93ed51720ac3332a373ffc78267445>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ThirdPartyVettingStatus = "COMPLETED" | "FAILED" | "PENDING" | "PROCESSING";
export type VetThirdPartyInput = {
  id: string;
  procedure?: string | null | undefined;
  websiteUrl: string;
};
export type VettingDialogMutation$variables = {
  input: VetThirdPartyInput;
};
export type VettingDialogMutation$data = {
  readonly vetThirdParty: {
    readonly thirdParty: {
      readonly id: string;
      readonly name: string;
      readonly vettingStatus: ThirdPartyVettingStatus | null | undefined;
      readonly websiteUrl: string | null | undefined;
      readonly " $fragmentSpreads": FragmentRefs<"ThirdPartyComplianceTabFragment" | "ThirdPartyRiskAssessmentTabFragment" | "useThirdPartyFormFragment">;
    };
  };
};
export type VettingDialogMutation = {
  response: VettingDialogMutation$data;
  variables: VettingDialogMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
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
  "name": "vettingStatus",
  "storageKey": null
},
v6 = [
  (v2/*: any*/)
],
v7 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 50
  }
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endCursor",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasNextPage",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasPreviousPage",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "startCursor",
  "storageKey": null
},
v14 = {
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
v15 = [
  "orderBy"
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "VettingDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "VetThirdPartyPayload",
        "kind": "LinkedField",
        "name": "vetThirdParty",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ThirdParty",
            "kind": "LinkedField",
            "name": "thirdParty",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
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
                "name": "ThirdPartyRiskAssessmentTabFragment"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "VettingDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "VetThirdPartyPayload",
        "kind": "LinkedField",
        "name": "vetThirdParty",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ThirdParty",
            "kind": "LinkedField",
            "name": "thirdParty",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
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
                "selections": (v6/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Profile",
                "kind": "LinkedField",
                "name": "securityOwner",
                "plural": false,
                "selections": (v6/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v7/*: any*/),
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
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "validUntil",
                            "storageKey": null
                          },
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
                          (v8/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v9/*: any*/)
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
                      (v10/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v14/*: any*/)
                ],
                "storageKey": "complianceReports(first:50)"
              },
              {
                "alias": null,
                "args": (v7/*: any*/),
                "filters": (v15/*: any*/),
                "handle": "connection",
                "key": "ThirdPartyComplianceTabFragment_complianceReports",
                "kind": "LinkedHandle",
                "name": "complianceReports"
              },
              {
                "alias": null,
                "args": (v7/*: any*/),
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
                          (v8/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v9/*: any*/)
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
                      (v11/*: any*/),
                      (v10/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v14/*: any*/)
                ],
                "storageKey": "riskAssessments(first:50)"
              },
              {
                "alias": null,
                "args": (v7/*: any*/),
                "filters": (v15/*: any*/),
                "handle": "connection",
                "key": "ThirdPartyRiskAssessmentTabFragment_riskAssessments",
                "kind": "LinkedHandle",
                "name": "riskAssessments"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c0284b73673e18bdb3afb0062d473353",
    "id": null,
    "metadata": {},
    "name": "VettingDialogMutation",
    "operationKind": "mutation",
    "text": "mutation VettingDialogMutation(\n  $input: VetThirdPartyInput!\n) {\n  vetThirdParty(input: $input) {\n    thirdParty {\n      id\n      name\n      websiteUrl\n      vettingStatus\n      ...useThirdPartyFormFragment\n      ...ThirdPartyComplianceTabFragment\n      ...ThirdPartyRiskAssessmentTabFragment\n    }\n  }\n}\n\nfragment ThirdPartyComplianceTabFragment on ThirdParty {\n  complianceReports(first: 50) {\n    edges {\n      node {\n        id\n        canDelete: permission(action: \"core:thirdParty-compliance-report:delete\")\n        ...ThirdPartyComplianceTabFragment_report\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n\nfragment ThirdPartyComplianceTabFragment_report on ThirdPartyComplianceReport {\n  id\n  reportDate\n  validUntil\n  reportName\n  file {\n    fileName\n    size\n    downloadUrl\n    id\n  }\n  canDelete: permission(action: \"core:thirdParty-compliance-report:delete\")\n}\n\nfragment ThirdPartyRiskAssessmentTabFragment on ThirdParty {\n  id\n  riskAssessments(first: 50) {\n    edges {\n      node {\n        id\n        ...ThirdPartyRiskAssessmentTabFragment_assessment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment ThirdPartyRiskAssessmentTabFragment_assessment on ThirdPartyRiskAssessment {\n  id\n  createdAt\n  expiresAt\n  dataSensitivity\n  businessImpact\n  notes\n}\n\nfragment useThirdPartyFormFragment on ThirdParty {\n  id\n  name\n  description\n  category\n  statusPageUrl\n  termsOfServiceUrl\n  privacyPolicyUrl\n  serviceLevelAgreementUrl\n  dataProcessingAgreementUrl\n  websiteUrl\n  legalName\n  headquarterAddress\n  certifications\n  countries\n  securityPageUrl\n  trustPageUrl\n  businessOwner {\n    id\n  }\n  securityOwner {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "6cbe89c4f998d8280f601c5ffb52faba";

export default node;
