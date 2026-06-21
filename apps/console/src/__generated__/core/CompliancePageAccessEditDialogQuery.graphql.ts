/**
 * @generated SignedSource<<c1d88602809f74086ab145783aeefc3c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CompliancePageAccessEditDialogQuery$variables = {
  accessId: string;
};
export type CompliancePageAccessEditDialogQuery$data = {
  readonly node: {
    readonly availableDocumentAccesses?: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly " $fragmentSpreads": FragmentRefs<"CompliancePageAccessEditDialogDocumentAccessFragment">;
        };
      }>;
    };
    readonly id?: string;
    readonly ndaSignature?: {
      readonly " $fragmentSpreads": FragmentRefs<"ElectronicSignatureSectionFragment">;
    } | null | undefined;
  };
};
export type CompliancePageAccessEditDialogQuery = {
  response: CompliancePageAccessEditDialogQuery$data;
  variables: CompliancePageAccessEditDialogQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "accessId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "accessId"
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
  "kind": "Literal",
  "name": "orderBy",
  "value": {
    "direction": "DESC",
    "field": "CREATED_AT"
  }
},
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  },
  (v3/*: any*/)
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v6 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  },
  (v3/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "documentType",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "File",
  "kind": "LinkedField",
  "name": "reportFile",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fileName",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "TrustCenterFile",
  "kind": "LinkedField",
  "name": "trustCenterFile",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v10/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "category",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CompliancePageAccessEditDialogQuery",
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
              {
                "alias": null,
                "args": null,
                "concreteType": "ElectronicSignature",
                "kind": "LinkedField",
                "name": "ndaSignature",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "ElectronicSignatureSectionFragment"
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v4/*: any*/),
                "concreteType": "TrustCenterDocumentAccessConnection",
                "kind": "LinkedField",
                "name": "availableDocumentAccesses",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TrustCenterDocumentAccessEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "TrustCenterDocumentAccess",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "InlineDataFragmentSpread",
                            "name": "CompliancePageAccessEditDialogDocumentAccessFragment",
                            "selections": [
                              (v2/*: any*/),
                              (v5/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Document",
                                "kind": "LinkedField",
                                "name": "document",
                                "plural": false,
                                "selections": [
                                  (v2/*: any*/),
                                  {
                                    "alias": null,
                                    "args": (v6/*: any*/),
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
                                              (v7/*: any*/),
                                              (v8/*: any*/)
                                            ],
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": "versions(first:1,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
                                  }
                                ],
                                "storageKey": null
                              },
                              (v9/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Audit",
                                "kind": "LinkedField",
                                "name": "audit",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Framework",
                                    "kind": "LinkedField",
                                    "name": "framework",
                                    "plural": false,
                                    "selections": [
                                      (v10/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              (v11/*: any*/)
                            ],
                            "args": null,
                            "argumentDefinitions": []
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "availableDocumentAccesses(first:100,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
              }
            ],
            "type": "TrustCenterAccess",
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
    "name": "CompliancePageAccessEditDialogQuery",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ElectronicSignature",
                "kind": "LinkedField",
                "name": "ndaSignature",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "signedAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "certificateFileUrl",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ElectronicSignatureEvent",
                    "kind": "LinkedField",
                    "name": "events",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "eventType",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "actorEmail",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "occurredAt",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v4/*: any*/),
                "concreteType": "TrustCenterDocumentAccessConnection",
                "kind": "LinkedField",
                "name": "availableDocumentAccesses",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TrustCenterDocumentAccessEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "TrustCenterDocumentAccess",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v5/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Document",
                            "kind": "LinkedField",
                            "name": "document",
                            "plural": false,
                            "selections": [
                              (v2/*: any*/),
                              {
                                "alias": null,
                                "args": (v6/*: any*/),
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
                                          (v7/*: any*/),
                                          (v8/*: any*/),
                                          (v2/*: any*/)
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": "versions(first:1,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
                              }
                            ],
                            "storageKey": null
                          },
                          (v9/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Audit",
                            "kind": "LinkedField",
                            "name": "audit",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Framework",
                                "kind": "LinkedField",
                                "name": "framework",
                                "plural": false,
                                "selections": [
                                  (v10/*: any*/),
                                  (v2/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v2/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v11/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "availableDocumentAccesses(first:100,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
              }
            ],
            "type": "TrustCenterAccess",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d24641f00e248a12a9099d9488d98442",
    "id": null,
    "metadata": {},
    "name": "CompliancePageAccessEditDialogQuery",
    "operationKind": "query",
    "text": "query CompliancePageAccessEditDialogQuery(\n  $accessId: ID!\n) {\n  node(id: $accessId) {\n    __typename\n    ... on TrustCenterAccess {\n      id\n      ndaSignature {\n        ...ElectronicSignatureSectionFragment\n        id\n      }\n      availableDocumentAccesses(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {\n        edges {\n          node {\n            ...CompliancePageAccessEditDialogDocumentAccessFragment\n            id\n          }\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment CompliancePageAccessEditDialogDocumentAccessFragment on TrustCenterDocumentAccess {\n  id\n  status\n  document {\n    id\n    versions(first: 1, orderBy: {field: CREATED_AT, direction: DESC}) {\n      edges {\n        node {\n          title\n          documentType\n          id\n        }\n      }\n    }\n  }\n  reportFile {\n    id\n    fileName\n  }\n  audit {\n    framework {\n      name\n      id\n    }\n    id\n  }\n  trustCenterFile {\n    id\n    name\n    category\n  }\n}\n\nfragment ElectronicSignatureSectionFragment on ElectronicSignature {\n  status\n  signedAt\n  certificateFileUrl\n  events {\n    id\n    eventType\n    actorEmail\n    occurredAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "5d80322ad897d98ad38b232dffe57262";

export default node;
