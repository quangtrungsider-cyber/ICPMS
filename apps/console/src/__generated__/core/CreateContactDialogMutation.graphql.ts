/**
 * @generated SignedSource<<02f4c04e2d39fb8c03eef3d6b0faba71>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateThirdPartyContactInput = {
  email?: string | null | undefined;
  fullName?: string | null | undefined;
  phone?: string | null | undefined;
  role?: string | null | undefined;
  thirdPartyId: string;
};
export type CreateContactDialogMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateThirdPartyContactInput;
};
export type CreateContactDialogMutation$data = {
  readonly createThirdPartyContact: {
    readonly thirdPartyContactEdge: {
      readonly node: {
        readonly canDelete: boolean;
        readonly canUpdate: boolean;
        readonly " $fragmentSpreads": FragmentRefs<"ThirdPartyContactsTabFragment_contact">;
      };
    };
  };
};
export type CreateContactDialogMutation = {
  response: CreateContactDialogMutation$data;
  variables: CreateContactDialogMutation$variables;
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
  "alias": "canUpdate",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:thirdParty-contact:update"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:thirdParty-contact:update\")"
},
v4 = {
  "alias": "canDelete",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:thirdParty-contact:delete"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:thirdParty-contact:delete\")"
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateContactDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateThirdPartyContactPayload",
        "kind": "LinkedField",
        "name": "createThirdPartyContact",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ThirdPartyContactEdge",
            "kind": "LinkedField",
            "name": "thirdPartyContactEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ThirdPartyContact",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "ThirdPartyContactsTabFragment_contact"
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
    "name": "CreateContactDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateThirdPartyContactPayload",
        "kind": "LinkedField",
        "name": "createThirdPartyContact",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ThirdPartyContactEdge",
            "kind": "LinkedField",
            "name": "thirdPartyContactEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ThirdPartyContact",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
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
                    "name": "fullName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "email",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "phone",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "role",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "prependEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "thirdPartyContactEdge",
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
    "cacheID": "5f97afa2897655b1f8c9e0620ad9e8dd",
    "id": null,
    "metadata": {},
    "name": "CreateContactDialogMutation",
    "operationKind": "mutation",
    "text": "mutation CreateContactDialogMutation(\n  $input: CreateThirdPartyContactInput!\n) {\n  createThirdPartyContact(input: $input) {\n    thirdPartyContactEdge {\n      node {\n        canUpdate: permission(action: \"core:thirdParty-contact:update\")\n        canDelete: permission(action: \"core:thirdParty-contact:delete\")\n        ...ThirdPartyContactsTabFragment_contact\n        id\n      }\n    }\n  }\n}\n\nfragment ThirdPartyContactsTabFragment_contact on ThirdPartyContact {\n  id\n  fullName\n  email\n  phone\n  role\n  canUpdate: permission(action: \"core:thirdParty-contact:update\")\n  canDelete: permission(action: \"core:thirdParty-contact:delete\")\n}\n"
  }
};
})();

(node as any).hash = "4d37b8b5b5bc9be0b0033f365d4b11ed";

export default node;
