/**
 * @generated SignedSource<<1ddf262c5abb6bec1c0cd93ed5123077>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type AccessSourceConnectionStatus = "CONNECTED" | "DISCONNECTED" | "NOT_APPLICABLE";
export type ConnectorProvider = "ANTHROPIC" | "ASANA" | "BETTER_STACK" | "BITBUCKET" | "BREX" | "CLERK" | "CLICKUP" | "CLOUDFLARE" | "CURSOR" | "DATADOG" | "DOCUSIGN" | "GITHUB" | "GITLAB" | "GOOGLE_WORKSPACE" | "GRAFANA" | "HEROKU" | "HUBSPOT" | "INTERCOM" | "LINEAR" | "METABASE" | "MICROSOFT_365" | "MONDAY" | "NETLIFY" | "NOTION" | "OKTA" | "ONE_PASSWORD" | "OPENAI" | "PAGERDUTY" | "POSTHOG" | "RESEND" | "SENDGRID" | "SENTRY" | "SIGNOZ" | "SLACK" | "SUPABASE" | "TAILSCALE" | "TALLY" | "VERCEL" | "ZENDESK";
import { FragmentRefs } from "relay-runtime";
export type AccessSourceRowFragment$data = {
  readonly canDelete: boolean;
  readonly connectionStatus: AccessSourceConnectionStatus;
  readonly connector: {
    readonly oauth2Scopes: ReadonlyArray<string>;
    readonly provider: ConnectorProvider;
  } | null | undefined;
  readonly connectorId: string | null | undefined;
  readonly createdAt: string;
  readonly id: string;
  readonly name: string;
  readonly needsConfiguration: boolean;
  readonly selectedOrganization: string | null | undefined;
  readonly " $fragmentType": "AccessSourceRowFragment";
};
export type AccessSourceRowFragment$key = {
  readonly " $data"?: AccessSourceRowFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AccessSourceRowFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AccessSourceRowFragment",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "connectorId",
      "storageKey": null
    },
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
          "name": "provider",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "oauth2Scopes",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "connectionStatus",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "selectedOrganization",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "needsConfiguration",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    },
    {
      "alias": "canDelete",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:access-source:delete"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:access-source:delete\")"
    }
  ],
  "type": "AccessSource",
  "abstractKey": null
};

(node as any).hash = "927b3fd0b14754348529ccd605fa846d";

export default node;
