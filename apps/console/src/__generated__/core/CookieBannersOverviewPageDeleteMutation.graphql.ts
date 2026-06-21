/**
 * @generated SignedSource<<c472cd2162691a718f98f31e136f1496>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteCookieBannerInput = {
  cookieBannerId: string;
};
export type CookieBannersOverviewPageDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteCookieBannerInput;
};
export type CookieBannersOverviewPageDeleteMutation$data = {
  readonly deleteCookieBanner: {
    readonly deletedCookieBannerId: string;
  };
};
export type CookieBannersOverviewPageDeleteMutation = {
  response: CookieBannersOverviewPageDeleteMutation$data;
  variables: CookieBannersOverviewPageDeleteMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "deletedCookieBannerId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CookieBannersOverviewPageDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteCookieBannerPayload",
        "kind": "LinkedField",
        "name": "deleteCookieBanner",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CookieBannersOverviewPageDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteCookieBannerPayload",
        "kind": "LinkedField",
        "name": "deleteCookieBanner",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "deletedCookieBannerId",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9d6d937ea22b81691b04240da058aa28",
    "id": null,
    "metadata": {},
    "name": "CookieBannersOverviewPageDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation CookieBannersOverviewPageDeleteMutation(\n  $input: DeleteCookieBannerInput!\n) {\n  deleteCookieBanner(input: $input) {\n    deletedCookieBannerId\n  }\n}\n"
  }
};
})();

(node as any).hash = "255e6681cc62decc12f5bb8d7614d9a2";

export default node;
