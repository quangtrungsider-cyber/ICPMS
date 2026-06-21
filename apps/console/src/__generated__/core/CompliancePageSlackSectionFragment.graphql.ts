/**
 * @generated SignedSource<<8369960ef528667c1711ddd883bb34f7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CompliancePageSlackSectionFragment$data = {
  readonly canConnectSlack: boolean;
  readonly slackConnections: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly canDelete: boolean;
        readonly channel: string | null | undefined;
        readonly createdAt: string;
        readonly id: string;
      };
    }>;
  };
  readonly slackOAuth2Scopes: ReadonlyArray<string>;
  readonly " $fragmentType": "CompliancePageSlackSectionFragment";
};
export type CompliancePageSlackSectionFragment$key = {
  readonly " $data"?: CompliancePageSlackSectionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CompliancePageSlackSectionFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CompliancePageSlackSectionFragment",
  "selections": [
    {
      "alias": "canConnectSlack",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:connector:initiate"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:connector:initiate\")"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slackOAuth2Scopes",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 100
        }
      ],
      "concreteType": "SlackConnectionConnection",
      "kind": "LinkedField",
      "name": "slackConnections",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "SlackConnectionEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "SlackConnection",
              "kind": "LinkedField",
              "name": "node",
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
                  "name": "channel",
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
                      "value": "core:connector:delete"
                    }
                  ],
                  "kind": "ScalarField",
                  "name": "permission",
                  "storageKey": "permission(action:\"core:connector:delete\")"
                }
              ],
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
      "storageKey": "slackConnections(first:100)"
    }
  ],
  "type": "Organization",
  "abstractKey": null
};

(node as any).hash = "1607d0e0842faf23b61798bbebf011b0";

export default node;
