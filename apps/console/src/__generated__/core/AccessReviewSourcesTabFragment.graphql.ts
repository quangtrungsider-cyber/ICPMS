/**
 * @generated SignedSource<<c00cbaaa1b4c3dfd49a536fe0c35e783>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type ConnectorProvider = "ANTHROPIC" | "ASANA" | "BETTER_STACK" | "BITBUCKET" | "BREX" | "CLERK" | "CLICKUP" | "CLOUDFLARE" | "CURSOR" | "DATADOG" | "DOCUSIGN" | "GITHUB" | "GITLAB" | "GOOGLE_WORKSPACE" | "GRAFANA" | "HEROKU" | "HUBSPOT" | "INTERCOM" | "LINEAR" | "METABASE" | "MICROSOFT_365" | "MONDAY" | "NETLIFY" | "NOTION" | "OKTA" | "ONE_PASSWORD" | "OPENAI" | "PAGERDUTY" | "POSTHOG" | "RESEND" | "SENDGRID" | "SENTRY" | "SIGNOZ" | "SLACK" | "SUPABASE" | "TAILSCALE" | "TALLY" | "VERCEL" | "ZENDESK";
import { FragmentRefs } from "relay-runtime";
export type AccessReviewSourcesTabFragment$data = {
  readonly accessSources: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly connector: {
          readonly provider: ConnectorProvider;
        } | null | undefined;
        readonly connectorId: string | null | undefined;
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"AccessSourceRowFragment">;
      };
    }>;
  };
  readonly id: string;
  readonly " $fragmentType": "AccessReviewSourcesTabFragment";
};
export type AccessReviewSourcesTabFragment$key = {
  readonly " $data"?: AccessReviewSourcesTabFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AccessReviewSourcesTabFragment">;
};

import AccessReviewSourcesTabPaginationQuery_graphql from './AccessReviewSourcesTabPaginationQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "accessSources"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "before"
    },
    {
      "defaultValue": 50,
      "kind": "LocalArgument",
      "name": "first"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "last"
    },
    {
      "defaultValue": {
        "direction": "DESC",
        "field": "CREATED_AT"
      },
      "kind": "LocalArgument",
      "name": "order"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "bidirectional",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": {
          "count": "last",
          "cursor": "before"
        },
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": AccessReviewSourcesTabPaginationQuery_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "AccessReviewSourcesTabFragment",
  "selections": [
    {
      "alias": "accessSources",
      "args": [
        {
          "kind": "Variable",
          "name": "orderBy",
          "variableName": "order"
        }
      ],
      "concreteType": "AccessSourceConnection",
      "kind": "LinkedField",
      "name": "__AccessReviewSourcesTab_accessSources_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "AccessSourceEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "AccessSource",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
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
                    }
                  ],
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "AccessSourceRowFragment"
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasPreviousPage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "startCursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "kind": "ClientExtension",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "__id",
              "storageKey": null
            }
          ]
        }
      ],
      "storageKey": null
    },
    (v1/*: any*/)
  ],
  "type": "Organization",
  "abstractKey": null
};
})();

(node as any).hash = "061d5554ffeb9e29aed20bb65cc59607";

export default node;
