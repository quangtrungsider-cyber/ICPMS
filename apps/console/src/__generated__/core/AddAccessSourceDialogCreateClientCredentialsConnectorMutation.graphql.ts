/**
 * @generated SignedSource<<e8d66b8cd388319c51229827fe1c5982>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ConnectorProvider = "ANTHROPIC" | "ASANA" | "BETTER_STACK" | "BITBUCKET" | "BREX" | "CLERK" | "CLICKUP" | "CLOUDFLARE" | "CURSOR" | "DATADOG" | "DOCUSIGN" | "GITHUB" | "GITLAB" | "GOOGLE_WORKSPACE" | "GRAFANA" | "HEROKU" | "HUBSPOT" | "INTERCOM" | "LINEAR" | "METABASE" | "MICROSOFT_365" | "MONDAY" | "NETLIFY" | "NOTION" | "OKTA" | "ONE_PASSWORD" | "OPENAI" | "PAGERDUTY" | "POSTHOG" | "RESEND" | "SENDGRID" | "SENTRY" | "SIGNOZ" | "SLACK" | "SUPABASE" | "TAILSCALE" | "TALLY" | "VERCEL" | "ZENDESK";
export type CreateClientCredentialsConnectorInput = {
  clientId: string;
  clientSecret: string;
  onePasswordAccountId?: string | null | undefined;
  onePasswordRegion?: string | null | undefined;
  organizationId: string;
  provider: ConnectorProvider;
  scope?: string | null | undefined;
  tokenUrl: string;
};
export type AddAccessSourceDialogCreateClientCredentialsConnectorMutation$variables = {
  input: CreateClientCredentialsConnectorInput;
};
export type AddAccessSourceDialogCreateClientCredentialsConnectorMutation$data = {
  readonly createClientCredentialsConnector: {
    readonly connector: {
      readonly id: string;
      readonly provider: ConnectorProvider;
    } | null | undefined;
  };
};
export type AddAccessSourceDialogCreateClientCredentialsConnectorMutation = {
  response: AddAccessSourceDialogCreateClientCredentialsConnectorMutation$data;
  variables: AddAccessSourceDialogCreateClientCredentialsConnectorMutation$variables;
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
    "concreteType": "CreateClientCredentialsConnectorPayload",
    "kind": "LinkedField",
    "name": "createClientCredentialsConnector",
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
    "name": "AddAccessSourceDialogCreateClientCredentialsConnectorMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddAccessSourceDialogCreateClientCredentialsConnectorMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6b900f1dd7fa1e4e9ddd4aef9b1c8fbe",
    "id": null,
    "metadata": {},
    "name": "AddAccessSourceDialogCreateClientCredentialsConnectorMutation",
    "operationKind": "mutation",
    "text": "mutation AddAccessSourceDialogCreateClientCredentialsConnectorMutation(\n  $input: CreateClientCredentialsConnectorInput!\n) {\n  createClientCredentialsConnector(input: $input) {\n    connector {\n      id\n      provider\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f88b8059f5f5f108d229e361af16512b";

export default node;
