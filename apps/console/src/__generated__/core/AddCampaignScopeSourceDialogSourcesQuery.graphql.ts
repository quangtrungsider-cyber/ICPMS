/**
 * @generated SignedSource<<d28df016f6613e9a9a03542e944c7548>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AddCampaignScopeSourceDialogSourcesQuery$variables = {
  organizationId: string;
};
export type AddCampaignScopeSourceDialogSourcesQuery$data = {
  readonly organization: {
    readonly accessSources?: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly name: string;
        };
      }>;
    };
  };
};
export type AddCampaignScopeSourceDialogSourcesQuery = {
  response: AddCampaignScopeSourceDialogSourcesQuery$data;
  variables: AddCampaignScopeSourceDialogSourcesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "organizationId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "organizationId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 100
        }
      ],
      "concreteType": "AccessSourceConnection",
      "kind": "LinkedField",
      "name": "accessSources",
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
                (v2/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "name",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "accessSources(first:100)"
    }
  ],
  "type": "Organization",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddCampaignScopeSourceDialogSourcesQuery",
    "selections": [
      {
        "alias": "organization",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddCampaignScopeSourceDialogSourcesQuery",
    "selections": [
      {
        "alias": "organization",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v3/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "92a3b1d3cc940b8acbe12eacd9931c17",
    "id": null,
    "metadata": {},
    "name": "AddCampaignScopeSourceDialogSourcesQuery",
    "operationKind": "query",
    "text": "query AddCampaignScopeSourceDialogSourcesQuery(\n  $organizationId: ID!\n) {\n  organization: node(id: $organizationId) {\n    __typename\n    ... on Organization {\n      accessSources(first: 100) {\n        edges {\n          node {\n            id\n            name\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "adaaf33fb364cc939dac9fd141cff259";

export default node;
