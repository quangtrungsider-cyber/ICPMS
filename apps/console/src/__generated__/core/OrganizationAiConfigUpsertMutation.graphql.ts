/**
 * @generated SignedSource<<a90f39d69ee64dba327ebfffcc39f94a>>
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
export type OrganizationAiConfigUpsertMutation$variables = {
  input: UpsertIcpmsAiConfigInput;
};
export type OrganizationAiConfigUpsertMutation$data = {
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
export type OrganizationAiConfigUpsertMutation = {
  response: OrganizationAiConfigUpsertMutation$data;
  variables: OrganizationAiConfigUpsertMutation$variables;
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
    "name": "OrganizationAiConfigUpsertMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OrganizationAiConfigUpsertMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8e99b93e1a4d48cc3118904570d880cf",
    "id": null,
    "metadata": {},
    "name": "OrganizationAiConfigUpsertMutation",
    "operationKind": "mutation",
    "text": "mutation OrganizationAiConfigUpsertMutation(\n  $input: UpsertIcpmsAiConfigInput!\n) {\n  upsertIcpmsAiConfig(input: $input) {\n    config {\n      provider\n      apiKeyMasked\n      defaultModel\n      isEnabled\n      isKeyConfigured\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "17ae94df05019d48996e300661e6bd42";

export default node;
