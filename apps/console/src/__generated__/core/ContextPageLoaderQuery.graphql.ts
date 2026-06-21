/**
 * @generated SignedSource<<4673e46091a614c7422b81072c46fe9c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContextPageLoaderQuery$variables = {
  organizationId: string;
};
export type ContextPageLoaderQuery$data = {
  readonly organization: {
    readonly " $fragmentSpreads": FragmentRefs<"ContextPageFragment">;
  };
};
export type ContextPageLoaderQuery = {
  response: ContextPageLoaderQuery$data;
  variables: ContextPageLoaderQuery$variables;
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ContextPageLoaderQuery",
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
            "kind": "InlineFragment",
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ContextPageFragment"
              }
            ],
            "type": "Organization",
            "abstractKey": null
          }
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
    "name": "ContextPageLoaderQuery",
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": "canUpdateContext",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "action",
                    "value": "core:organization-context:update"
                  }
                ],
                "kind": "ScalarField",
                "name": "permission",
                "storageKey": "permission(action:\"core:organization-context:update\")"
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "OrganizationContext",
                "kind": "LinkedField",
                "name": "context",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "product",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "architecture",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "team",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "processes",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "customers",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "Organization",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0ede74e57b31cde981ebc4aa9a4d7702",
    "id": null,
    "metadata": {},
    "name": "ContextPageLoaderQuery",
    "operationKind": "query",
    "text": "query ContextPageLoaderQuery(\n  $organizationId: ID!\n) {\n  organization: node(id: $organizationId) {\n    __typename\n    ... on Organization {\n      ...ContextPageFragment\n    }\n    id\n  }\n}\n\nfragment ContextPageFragment on Organization {\n  id\n  canUpdateContext: permission(action: \"core:organization-context:update\")\n  context {\n    product\n    architecture\n    team\n    processes\n    customers\n  }\n}\n"
  }
};
})();

(node as any).hash = "10185807e2ba58ce433fd96d859c65b8";

export default node;
