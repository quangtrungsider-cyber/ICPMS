/**
 * @generated SignedSource<<9e17c6cdbf1c005f6769db27808a656f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProcessingActivityGraphListQuery$variables = {
  organizationId: string;
};
export type ProcessingActivityGraphListQuery$data = {
  readonly node: {
    readonly canCreateProcessingActivity?: boolean;
    readonly canPublishDataProtectionImpactAssessments?: boolean;
    readonly canPublishProcessingActivities?: boolean;
    readonly canPublishTransferImpactAssessments?: boolean;
    readonly dataProtectionImpactAssessmentsDocument?: {
      readonly defaultApprovers: ReadonlyArray<{
        readonly id: string;
      }>;
      readonly id: string;
    } | null | undefined;
    readonly processingActivitiesDocument?: {
      readonly defaultApprovers: ReadonlyArray<{
        readonly id: string;
      }>;
      readonly id: string;
    } | null | undefined;
    readonly transferImpactAssessmentsDocument?: {
      readonly defaultApprovers: ReadonlyArray<{
        readonly id: string;
      }>;
      readonly id: string;
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"ProcessingActivitiesPageDPIAFragment" | "ProcessingActivitiesPageFragment" | "ProcessingActivitiesPageTIAFragment">;
  };
};
export type ProcessingActivityGraphListQuery = {
  response: ProcessingActivityGraphListQuery$data;
  variables: ProcessingActivityGraphListQuery$variables;
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
  "alias": "canCreateProcessingActivity",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:processing-activity:create"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:processing-activity:create\")"
},
v3 = {
  "alias": "canPublishProcessingActivities",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:processing-activity:publish"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:processing-activity:publish\")"
},
v4 = {
  "alias": "canPublishDataProtectionImpactAssessments",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:data-protection-impact-assessment:publish"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:data-protection-impact-assessment:publish\")"
},
v5 = {
  "alias": "canPublishTransferImpactAssessments",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:transfer-impact-assessment:publish"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:transfer-impact-assessment:publish\")"
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = [
  (v6/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Profile",
    "kind": "LinkedField",
    "name": "defaultApprovers",
    "plural": true,
    "selections": [
      (v6/*: any*/)
    ],
    "storageKey": null
  }
],
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "Document",
  "kind": "LinkedField",
  "name": "processingActivitiesDocument",
  "plural": false,
  "selections": (v7/*: any*/),
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "Document",
  "kind": "LinkedField",
  "name": "dataProtectionImpactAssessmentsDocument",
  "plural": false,
  "selections": (v7/*: any*/),
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "Document",
  "kind": "LinkedField",
  "name": "transferImpactAssessmentsDocument",
  "plural": false,
  "selections": (v7/*: any*/),
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v12 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v15 = {
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
},
v16 = {
  "alias": null,
  "args": null,
  "concreteType": "ProcessingActivity",
  "kind": "LinkedField",
  "name": "processingActivity",
  "plural": false,
  "selections": [
    (v6/*: any*/),
    (v13/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProcessingActivityGraphListQuery",
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
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ProcessingActivitiesPageFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ProcessingActivitiesPageDPIAFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ProcessingActivitiesPageTIAFragment"
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
    "name": "ProcessingActivityGraphListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v11/*: any*/),
          (v6/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              {
                "alias": null,
                "args": (v12/*: any*/),
                "concreteType": "ProcessingActivityConnection",
                "kind": "LinkedField",
                "name": "processingActivities",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ProcessingActivityEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ProcessingActivity",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
                          (v13/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "purpose",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "dataSubjectCategory",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "lawfulBasis",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "location",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "internationalTransfers",
                            "storageKey": null
                          },
                          {
                            "alias": "canUpdate",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "action",
                                "value": "core:processing-activity:update"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "permission",
                            "storageKey": "permission(action:\"core:processing-activity:update\")"
                          },
                          {
                            "alias": "canDelete",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "action",
                                "value": "core:processing-activity:delete"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "permission",
                            "storageKey": "permission(action:\"core:processing-activity:delete\")"
                          },
                          (v11/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v14/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v15/*: any*/)
                ],
                "storageKey": "processingActivities(first:10)"
              },
              {
                "alias": null,
                "args": (v12/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "ProcessingActivitiesPage_processingActivities",
                "kind": "LinkedHandle",
                "name": "processingActivities"
              },
              {
                "alias": null,
                "args": (v12/*: any*/),
                "concreteType": "DataProtectionImpactAssessmentConnection",
                "kind": "LinkedField",
                "name": "dataProtectionImpactAssessments",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "DataProtectionImpactAssessmentEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "DataProtectionImpactAssessment",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
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
                            "name": "potentialRisk",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "residualRisk",
                            "storageKey": null
                          },
                          (v16/*: any*/),
                          (v11/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v14/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v15/*: any*/)
                ],
                "storageKey": "dataProtectionImpactAssessments(first:10)"
              },
              {
                "alias": null,
                "args": (v12/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "ProcessingActivitiesPage_dataProtectionImpactAssessments",
                "kind": "LinkedHandle",
                "name": "dataProtectionImpactAssessments"
              },
              {
                "alias": null,
                "args": (v12/*: any*/),
                "concreteType": "TransferImpactAssessmentConnection",
                "kind": "LinkedField",
                "name": "transferImpactAssessments",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TransferImpactAssessmentEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "TransferImpactAssessment",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "dataSubjects",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "transfer",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "localLawRisk",
                            "storageKey": null
                          },
                          (v16/*: any*/),
                          (v11/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v14/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v15/*: any*/)
                ],
                "storageKey": "transferImpactAssessments(first:10)"
              },
              {
                "alias": null,
                "args": (v12/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "ProcessingActivitiesPage_transferImpactAssessments",
                "kind": "LinkedHandle",
                "name": "transferImpactAssessments"
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
    "cacheID": "bd1610b11bbbe32063b23bdc9f940090",
    "id": null,
    "metadata": {},
    "name": "ProcessingActivityGraphListQuery",
    "operationKind": "query",
    "text": "query ProcessingActivityGraphListQuery(\n  $organizationId: ID!\n) {\n  node(id: $organizationId) {\n    __typename\n    ... on Organization {\n      canCreateProcessingActivity: permission(action: \"core:processing-activity:create\")\n      canPublishProcessingActivities: permission(action: \"core:processing-activity:publish\")\n      canPublishDataProtectionImpactAssessments: permission(action: \"core:data-protection-impact-assessment:publish\")\n      canPublishTransferImpactAssessments: permission(action: \"core:transfer-impact-assessment:publish\")\n      processingActivitiesDocument {\n        id\n        defaultApprovers {\n          id\n        }\n      }\n      dataProtectionImpactAssessmentsDocument {\n        id\n        defaultApprovers {\n          id\n        }\n      }\n      transferImpactAssessmentsDocument {\n        id\n        defaultApprovers {\n          id\n        }\n      }\n      ...ProcessingActivitiesPageFragment\n      ...ProcessingActivitiesPageDPIAFragment\n      ...ProcessingActivitiesPageTIAFragment\n    }\n    id\n  }\n}\n\nfragment ProcessingActivitiesPageDPIAFragment on Organization {\n  id\n  dataProtectionImpactAssessments(first: 10) {\n    edges {\n      node {\n        id\n        description\n        potentialRisk\n        residualRisk\n        processingActivity {\n          id\n          name\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment ProcessingActivitiesPageFragment on Organization {\n  id\n  processingActivities(first: 10) {\n    edges {\n      node {\n        id\n        name\n        purpose\n        dataSubjectCategory\n        lawfulBasis\n        location\n        internationalTransfers\n        canUpdate: permission(action: \"core:processing-activity:update\")\n        canDelete: permission(action: \"core:processing-activity:delete\")\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment ProcessingActivitiesPageTIAFragment on Organization {\n  id\n  transferImpactAssessments(first: 10) {\n    edges {\n      node {\n        id\n        dataSubjects\n        transfer\n        localLawRisk\n        processingActivity {\n          id\n          name\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ae4c75a144f8e154080b8a8122670853";

export default node;
