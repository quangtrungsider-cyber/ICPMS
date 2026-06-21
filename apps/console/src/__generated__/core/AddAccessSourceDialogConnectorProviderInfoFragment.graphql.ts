/**
 * @generated SignedSource<<157b72114867111dbaf2a4dd97288a33>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type ConnectorProvider = "ANTHROPIC" | "ASANA" | "BETTER_STACK" | "BITBUCKET" | "BREX" | "CLERK" | "CLICKUP" | "CLOUDFLARE" | "CURSOR" | "DATADOG" | "DOCUSIGN" | "GITHUB" | "GITLAB" | "GOOGLE_WORKSPACE" | "GRAFANA" | "HEROKU" | "HUBSPOT" | "INTERCOM" | "LINEAR" | "METABASE" | "MICROSOFT_365" | "MONDAY" | "NETLIFY" | "NOTION" | "OKTA" | "ONE_PASSWORD" | "OPENAI" | "PAGERDUTY" | "POSTHOG" | "RESEND" | "SENDGRID" | "SENTRY" | "SIGNOZ" | "SLACK" | "SUPABASE" | "TAILSCALE" | "TALLY" | "VERCEL" | "ZENDESK";
import { FragmentRefs } from "relay-runtime";
export type AddAccessSourceDialogConnectorProviderInfoFragment$data = ReadonlyArray<{
  readonly apiKeySupported: boolean;
  readonly clientCredentialsSupported: boolean;
  readonly displayName: string;
  readonly extraSettings: ReadonlyArray<{
    readonly key: string;
    readonly label: string;
    readonly required: boolean;
  }>;
  readonly oauth2Scopes: ReadonlyArray<string>;
  readonly oauthConfigured: boolean;
  readonly provider: ConnectorProvider;
  readonly " $fragmentType": "AddAccessSourceDialogConnectorProviderInfoFragment";
}>;
export type AddAccessSourceDialogConnectorProviderInfoFragment$key = ReadonlyArray<{
  readonly " $data"?: AddAccessSourceDialogConnectorProviderInfoFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AddAccessSourceDialogConnectorProviderInfoFragment">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "AddAccessSourceDialogConnectorProviderInfoFragment",
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
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "oauth2Scopes",
      "storageKey": null
    },
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
  "type": "ConnectorProviderInfo",
  "abstractKey": null
};

(node as any).hash = "5f6a075eab9e0de38e841010682f1010";

export default node;
