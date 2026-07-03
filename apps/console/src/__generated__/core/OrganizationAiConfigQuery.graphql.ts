/**
 * @generated SignedSource<<86bc1bfc22cbe58825020cb2c98806fa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsAiProvider = "ANTHROPIC" | "GEMINI" | "OPENAI" | "RULE_BASED";
export type OrganizationAiConfigQuery$variables = {
  organizationId: string;
  provider: IcpmsAiProvider;
};
export type OrganizationAiConfigQuery$data = {
  readonly icpmsAiConfig: {
    readonly apiKeyMasked: string | null | undefined;
    readonly defaultModel: string | null | undefined;
    readonly isEnabled: boolean;
    readonly isKeyConfigured: boolean;
    readonly provider: IcpmsAiProvider;
  } | null | undefined;
};
export type OrganizationAiConfigQuery = {
  response: OrganizationAiConfigQuery$data;
  variables: OrganizationAiConfigQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "organizationId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "provider"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "organizationId",
        "variableName": "organizationId"
      },
      {
        "kind": "Variable",
        "name": "provider",
        "variableName": "provider"
      }
    ],
    "concreteType": "IcpmsAiConfig",
    "kind": "LinkedField",
    "name": "icpmsAiConfig",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "provider",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "apiKeyMasked",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "defaultModel",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isEnabled",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isKeyConfigured",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OrganizationAiConfigQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OrganizationAiConfigQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3b524d743ad0773e488b9263f515c81b",
    "id": null,
    "metadata": {},
    "name": "OrganizationAiConfigQuery",
    "operationKind": "query",
    "text": "query OrganizationAiConfigQuery(\n  $organizationId: ID!\n  $provider: IcpmsAiProvider!\n) {\n  icpmsAiConfig(organizationId: $organizationId, provider: $provider) {\n    provider\n    apiKeyMasked\n    defaultModel\n    isEnabled\n    isKeyConfigured\n  }\n}\n"
  }
};
})();

(node as any).hash = "7c2420309d0fe29f22fbff6e7958df26";

export default node;
