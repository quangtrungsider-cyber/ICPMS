/**
 * @generated SignedSource<<5306360278dd2a681ad1a021a85a8d03>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AccessReviewSourcesTabQuery$variables = {
  organizationId: string;
};
export type AccessReviewSourcesTabQuery$data = {
  readonly accessReviewDrivers: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"AddAccessSourceDialogConnectorProviderInfoFragment">;
  }>;
  readonly organization: {
    readonly __typename: "Organization";
    readonly canCreateSource: boolean;
    readonly " $fragmentSpreads": FragmentRefs<"AccessReviewSourcesTabFragment">;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type AccessReviewSourcesTabQuery = {
  response: AccessReviewSourcesTabQuery$data;
  variables: AccessReviewSourcesTabQuery$variables;
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
  "alias": "canCreateSource",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:access-source:create"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:access-source:create\")"
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "provider",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "oauth2Scopes",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 50
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "DESC",
      "field": "CREATED_AT"
    }
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AccessReviewSourcesTabQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ConnectorProviderInfo",
        "kind": "LinkedField",
        "name": "accessReviewDrivers",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AddAccessSourceDialogConnectorProviderInfoFragment"
          }
        ],
        "storageKey": null
      },
      {
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
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "AccessReviewSourcesTabFragment"
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
    "name": "AccessReviewSourcesTabQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ConnectorProviderInfo",
        "kind": "LinkedField",
        "name": "accessReviewDrivers",
        "plural": true,
        "selections": [
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "displayName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "oauthConfigured",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "apiKeySupported",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "clientCredentialsSupported",
            "storageKey": null
          },
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ConnectorProviderSettingInfo",
            "kind": "LinkedField",
            "name": "extraSettings",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "key",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "label",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "required",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": "organization",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v6/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": (v7/*: any*/),
                "concreteType": "AccessSourceConnection",
                "kind": "LinkedField",
                "name": "accessSources",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AccessSourceEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AccessSource",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "connectorId",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Connector",
                            "kind": "LinkedField",
                            "name": "connector",
                            "plural": false,
                            "selections": [
                              (v4/*: any*/),
                              (v6/*: any*/),
                              (v5/*: any*/)
                            ],
                            "storageKey": null
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
                            "name": "connectionStatus",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "selectedOrganization",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "needsConfiguration",
                            "storageKey": null
                          },
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
                                "value": "core:access-source:delete"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "permission",
                            "storageKey": "permission(action:\"core:access-source:delete\")"
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
                      },
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
                "storageKey": "accessSources(first:50,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
              },
              {
                "alias": null,
                "args": (v7/*: any*/),
                "filters": [
                  "orderBy"
                ],
                "handle": "connection",
                "key": "AccessReviewSourcesTab_accessSources",
                "kind": "LinkedHandle",
                "name": "accessSources"
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
    "cacheID": "ae08048d5c63e86287b8b4bfb6a9a8ac",
    "id": null,
    "metadata": {},
    "name": "AccessReviewSourcesTabQuery",
    "operationKind": "query",
    "text": "query AccessReviewSourcesTabQuery(\n  $organizationId: ID!\n) {\n  accessReviewDrivers {\n    ...AddAccessSourceDialogConnectorProviderInfoFragment\n  }\n  organization: node(id: $organizationId) {\n    __typename\n    ... on Organization {\n      canCreateSource: permission(action: \"core:access-source:create\")\n      ...AccessReviewSourcesTabFragment\n    }\n    id\n  }\n}\n\nfragment AccessReviewSourcesTabFragment on Organization {\n  accessSources(first: 50, orderBy: {direction: DESC, field: CREATED_AT}) {\n    edges {\n      node {\n        id\n        connectorId\n        connector {\n          provider\n          id\n        }\n        ...AccessSourceRowFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n\nfragment AccessSourceRowFragment on AccessSource {\n  id\n  name\n  connectorId\n  connector {\n    provider\n    oauth2Scopes\n    id\n  }\n  connectionStatus\n  selectedOrganization\n  needsConfiguration\n  createdAt\n  canDelete: permission(action: \"core:access-source:delete\")\n}\n\nfragment AddAccessSourceDialogConnectorProviderInfoFragment on ConnectorProviderInfo {\n  provider\n  displayName\n  oauthConfigured\n  apiKeySupported\n  clientCredentialsSupported\n  oauth2Scopes\n  extraSettings {\n    key\n    label\n    required\n  }\n}\n"
  }
};
})();

(node as any).hash = "e6f76035ca4c411444729fa1828daacd";

export default node;
