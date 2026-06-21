/**
 * @generated SignedSource<<3fd12af13086e5093d04fa34073a496c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SignInPageQuery$variables = Record<PropertyKey, never>;
export type SignInPageQuery$data = {
  readonly oidcProviders: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"OIDCButtonFragment">;
  }>;
};
export type SignInPageQuery = {
  response: SignInPageQuery$data;
  variables: SignInPageQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SignInPageQuery",
    "selections": [
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
    "name": "SignInPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "OIDCProviderInfo",
        "kind": "LinkedField",
        "name": "oidcProviders",
        "plural": true,
        "selections": [
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
            "name": "loginURL",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7cb932b73eb45c66d170998f8674e1eb",
    "id": null,
    "metadata": {},
    "name": "SignInPageQuery",
    "operationKind": "query",
    "text": "query SignInPageQuery {\n  oidcProviders {\n    ...OIDCButtonFragment\n  }\n}\n\nfragment OIDCButtonFragment on OIDCProviderInfo {\n  name\n  loginURL\n}\n"
  }
};

(node as any).hash = "52f38a21acd8e836f8fed2332f816824";

export default node;
