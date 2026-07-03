/**
 * @generated SignedSource<<f330b219b5c1787e3b965c6aa2edf414>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ConnectPageQuery$variables = Record<PropertyKey, never>;
export type ConnectPageQuery$data = {
  readonly currentTrustCenter: {
    readonly organization: {
      readonly name: string;
    };
  };
  readonly oidcProviders: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"OIDCButtonFragment">;
  }>;
};
export type ConnectPageQuery = {
  response: ConnectPageQuery$data;
  variables: ConnectPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ConnectPageQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": null,
          "concreteType": "TrustCenter",
          "kind": "LinkedField",
          "name": "currentTrustCenter",
          "plural": false,
          "selections": [
            {
              "kind": "RequiredField",
              "field": {
                "alias": null,
                "args": null,
                "concreteType": "Organization",
                "kind": "LinkedField",
                "name": "organization",
                "plural": false,
                "selections": [
                  (v0/*: any*/)
                ],
                "storageKey": null
              },
              "action": "THROW"
            }
          ],
          "storageKey": null
        },
        "action": "THROW"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "OIDCProviderInfo",
        "kind": "LinkedField",
        "name": "oidcProviders",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "OIDCButtonFragment"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ConnectPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TrustCenter",
        "kind": "LinkedField",
        "name": "currentTrustCenter",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Organization",
            "kind": "LinkedField",
            "name": "organization",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "OIDCProviderInfo",
        "kind": "LinkedField",
        "name": "oidcProviders",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "loginURL",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ccb05c21fcd696cea075b61c6335fcbc",
    "id": null,
    "metadata": {},
    "name": "ConnectPageQuery",
    "operationKind": "query",
    "text": "query ConnectPageQuery {\n  currentTrustCenter {\n    organization {\n      name\n      id\n    }\n    id\n  }\n  oidcProviders {\n    ...OIDCButtonFragment\n  }\n}\n\nfragment OIDCButtonFragment on OIDCProviderInfo {\n  name\n  loginURL\n}\n"
  }
};
})();

(node as any).hash = "03d5c92587dbfa5a875d7067652d06b6";

export default node;
