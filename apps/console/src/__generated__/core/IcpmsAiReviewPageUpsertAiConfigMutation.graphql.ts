/**
 * @generated SignedSource<<af9c97958205372f3557b89a1383958b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsAiProvider = "ANTHROPIC" | "GEMINI" | "OPENAI" | "RULE_BASED";
export type UpsertIcpmsAiConfigInput = {
  apiKey?: string | null | undefined;
  defaultModel?: string | null | undefined;
  isEnabled?: boolean | null | undefined;
  organizationId: string;
  provider: IcpmsAiProvider;
};
export type IcpmsAiReviewPageUpsertAiConfigMutation$variables = {
  input: UpsertIcpmsAiConfigInput;
};
export type IcpmsAiReviewPageUpsertAiConfigMutation$data = {
  readonly upsertIcpmsAiConfig: {
    readonly config: {
      readonly apiKeyMasked: string | null | undefined;
      readonly defaultModel: string | null | undefined;
      readonly isEnabled: boolean;
      readonly isKeyConfigured: boolean;
      readonly provider: IcpmsAiProvider;
    };
  };
};
export type IcpmsAiReviewPageUpsertAiConfigMutation = {
  response: IcpmsAiReviewPageUpsertAiConfigMutation$data;
  variables: IcpmsAiReviewPageUpsertAiConfigMutation$variables;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpsertIcpmsAiConfigPayload",
    "kind": "LinkedField",
    "name": "upsertIcpmsAiConfig",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsAiConfig",
        "kind": "LinkedField",
        "name": "config",
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IcpmsAiReviewPageUpsertAiConfigMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsAiReviewPageUpsertAiConfigMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c0beef59d200224abc40f1df1aee5247",
    "id": null,
    "metadata": {},
    "name": "IcpmsAiReviewPageUpsertAiConfigMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsAiReviewPageUpsertAiConfigMutation(\n  $input: UpsertIcpmsAiConfigInput!\n) {\n  upsertIcpmsAiConfig(input: $input) {\n    config {\n      provider\n      apiKeyMasked\n      defaultModel\n      isEnabled\n      isKeyConfigured\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "752fbf6bac3cdb219f11e1b2457858c1";

export default node;
