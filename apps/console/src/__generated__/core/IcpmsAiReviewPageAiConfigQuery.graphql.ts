/**
 * @generated SignedSource<<69aa645e335142505adf0f6a145a3b0a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsAiProvider = "ANTHROPIC" | "GEMINI" | "OPENAI" | "RULE_BASED";
export type IcpmsAiReviewPageAiConfigQuery$variables = {
  organizationId: string;
  provider: IcpmsAiProvider;
};
export type IcpmsAiReviewPageAiConfigQuery$data = {
  readonly icpmsAiConfig: {
    readonly apiKeyMasked: string | null | undefined;
    readonly defaultModel: string | null | undefined;
    readonly isEnabled: boolean;
    readonly isKeyConfigured: boolean;
    readonly provider: IcpmsAiProvider;
  } | null | undefined;
};
export type IcpmsAiReviewPageAiConfigQuery = {
  response: IcpmsAiReviewPageAiConfigQuery$data;
  variables: IcpmsAiReviewPageAiConfigQuery$variables;
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
    "name": "IcpmsAiReviewPageAiConfigQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsAiReviewPageAiConfigQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "58c4808e0006ec5526dd6fd69606bd42",
    "id": null,
    "metadata": {},
    "name": "IcpmsAiReviewPageAiConfigQuery",
    "operationKind": "query",
    "text": "query IcpmsAiReviewPageAiConfigQuery(\n  $organizationId: ID!\n  $provider: IcpmsAiProvider!\n) {\n  icpmsAiConfig(organizationId: $organizationId, provider: $provider) {\n    provider\n    apiKeyMasked\n    defaultModel\n    isEnabled\n    isKeyConfigured\n  }\n}\n"
  }
};
})();

(node as any).hash = "093cc1bf87a40dce184b8d485faa241d";

export default node;
