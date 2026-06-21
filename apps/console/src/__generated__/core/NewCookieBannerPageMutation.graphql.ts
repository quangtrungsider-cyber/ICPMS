/**
 * @generated SignedSource<<a537bec5ed22d597e9f07cee8578037b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CreateCookieBannerInput = {
  consentExpiryDays: number;
  cookiePolicyUrl: string;
  name: string;
  organizationId: string;
  origin: string;
  privacyPolicyUrl?: string | null | undefined;
};
export type NewCookieBannerPageMutation$variables = {
  input: CreateCookieBannerInput;
};
export type NewCookieBannerPageMutation$data = {
  readonly createCookieBanner: {
    readonly cookieBannerEdge: {
      readonly node: {
        readonly id: string;
      };
    };
  };
};
export type NewCookieBannerPageMutation = {
  response: NewCookieBannerPageMutation$data;
  variables: NewCookieBannerPageMutation$variables;
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
    "concreteType": "CreateCookieBannerPayload",
    "kind": "LinkedField",
    "name": "createCookieBanner",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CookieBannerEdge",
        "kind": "LinkedField",
        "name": "cookieBannerEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CookieBanner",
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
              }
            ],
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
    "name": "NewCookieBannerPageMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NewCookieBannerPageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "adb9df9b315cd74b002bc3f3bb19a16f",
    "id": null,
    "metadata": {},
    "name": "NewCookieBannerPageMutation",
    "operationKind": "mutation",
    "text": "mutation NewCookieBannerPageMutation(\n  $input: CreateCookieBannerInput!\n) {\n  createCookieBanner(input: $input) {\n    cookieBannerEdge {\n      node {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "725f902ed77990a384d241ca44974ae3";

export default node;
