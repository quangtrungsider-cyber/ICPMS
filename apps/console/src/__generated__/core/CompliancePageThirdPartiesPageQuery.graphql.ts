/**
 * @generated SignedSource<<d02b10ea422eebce660def2e2f7870ef>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CompliancePageThirdPartiesPageQuery$variables = {
  organizationId: string;
};
export type CompliancePageThirdPartiesPageQuery$data = {
  readonly organization: {
    readonly " $fragmentSpreads": FragmentRefs<"CompliancePageThirdPartyListFragment">;
  };
};
export type CompliancePageThirdPartiesPageQuery = {
  response: CompliancePageThirdPartiesPageQuery$data;
  variables: CompliancePageThirdPartiesPageQuery$variables;
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
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CompliancePageThirdPartiesPageQuery",
    "selections": [
      {
        "alias": "organization",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CompliancePageThirdPartyListFragment"
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
    "name": "CompliancePageThirdPartiesPageQuery",
    "selections": [
      {
        "alias": "organization",
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
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 100
                  }
                ],
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
                          (v2/*: any*/),
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
                            "name": "name",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "showOnTrustCenter",
                            "storageKey": null
                          },
                          {
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
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "thirdParties(first:100)"
              }
            ],
            "type": "Organization",
            "abstractKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d1ce532c8856f635d9cd3b8f35324004",
    "id": null,
    "metadata": {},
    "name": "CompliancePageThirdPartiesPageQuery",
    "operationKind": "query",
    "text": "query CompliancePageThirdPartiesPageQuery(\n  $organizationId: ID!\n) {\n  organization: node(id: $organizationId) {\n    __typename\n    ...CompliancePageThirdPartyListFragment\n    id\n  }\n}\n\nfragment CompliancePageThirdPartyListFragment on Organization {\n  thirdParties(first: 100) {\n    edges {\n      node {\n        id\n        ...CompliancePageThirdPartyListItem_thirdPartyFragment\n      }\n    }\n  }\n}\n\nfragment CompliancePageThirdPartyListItem_thirdPartyFragment on ThirdParty {\n  id\n  category\n  name\n  showOnTrustCenter\n  canUpdate: permission(action: \"core:thirdParty:update\")\n}\n"
  }
};
})();

(node as any).hash = "976b6922ef8705123e71218a3e7f24f4";

export default node;
