/**
 * @generated SignedSource<<ca4f28a85c11fea63a487ca080631da0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ConnectorProvider = "ANTHROPIC" | "ASANA" | "BETTER_STACK" | "BITBUCKET" | "BREX" | "CLERK" | "CLICKUP" | "CLOUDFLARE" | "CURSOR" | "DATADOG" | "DOCUSIGN" | "GITHUB" | "GITLAB" | "GOOGLE_WORKSPACE" | "GRAFANA" | "HEROKU" | "HUBSPOT" | "INTERCOM" | "LINEAR" | "METABASE" | "MICROSOFT_365" | "MONDAY" | "NETLIFY" | "NOTION" | "OKTA" | "ONE_PASSWORD" | "OPENAI" | "PAGERDUTY" | "POSTHOG" | "RESEND" | "SENDGRID" | "SENTRY" | "SIGNOZ" | "SLACK" | "SUPABASE" | "TAILSCALE" | "TALLY" | "VERCEL" | "ZENDESK";
export type CreateAPIKeyConnectorInput = {
  apiKey: string;
  betterStackTeamName?: string | null | undefined;
  githubOrganization?: string | null | undefined;
  grafanaBaseUrl?: string | null | undefined;
  metabaseInstanceUrl?: string | null | undefined;
  oktaDomain?: string | null | undefined;
  onePasswordScimBridgeUrl?: string | null | undefined;
  organizationId: string;
  posthogInstanceUrl?: string | null | undefined;
  posthogRegion?: string | null | undefined;
  provider: ConnectorProvider;
  sentryOrganizationSlug?: string | null | undefined;
  signozBaseUrl?: string | null | undefined;
  supabaseOrganizationSlug?: string | null | undefined;
  tallyOrganizationId?: string | null | undefined;
};
export type AddAccessSourceDialogCreateAPIKeyConnectorMutation$variables = {
  input: CreateAPIKeyConnectorInput;
};
export type AddAccessSourceDialogCreateAPIKeyConnectorMutation$data = {
  readonly createAPIKeyConnector: {
    readonly connector: {
      readonly id: string;
      readonly provider: ConnectorProvider;
    };
  };
};
export type AddAccessSourceDialogCreateAPIKeyConnectorMutation = {
  response: AddAccessSourceDialogCreateAPIKeyConnectorMutation$data;
  variables: AddAccessSourceDialogCreateAPIKeyConnectorMutation$variables;
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
    "concreteType": "CreateAPIKeyConnectorPayload",
    "kind": "LinkedField",
    "name": "createAPIKeyConnector",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Connector",
        "kind": "LinkedField",
        "name": "connector",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "provider",
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
    "name": "AddAccessSourceDialogCreateAPIKeyConnectorMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddAccessSourceDialogCreateAPIKeyConnectorMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7628c10ae33476d6ea852630910c006c",
    "id": null,
    "metadata": {},
    "name": "AddAccessSourceDialogCreateAPIKeyConnectorMutation",
    "operationKind": "mutation",
    "text": "mutation AddAccessSourceDialogCreateAPIKeyConnectorMutation(\n  $input: CreateAPIKeyConnectorInput!\n) {\n  createAPIKeyConnector(input: $input) {\n    connector {\n      id\n      provider\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "35297a5c2e04874d9da1885727636046";

export default node;
