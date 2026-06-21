/**
 * @generated SignedSource<<afcf5c10590b11cc4be8a81530fa988a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UpdateThirdPartyContactInput = {
  email?: string | null | undefined;
  fullName?: string | null | undefined;
  id: string;
  phone?: string | null | undefined;
  role?: string | null | undefined;
};
export type EditContactDialogUpdateMutation$variables = {
  input: UpdateThirdPartyContactInput;
};
export type EditContactDialogUpdateMutation$data = {
  readonly updateThirdPartyContact: {
    readonly thirdPartyContact: {
      readonly " $fragmentSpreads": FragmentRefs<"ThirdPartyContactsTabFragment_contact">;
    };
  };
};
export type EditContactDialogUpdateMutation = {
  response: EditContactDialogUpdateMutation$data;
  variables: EditContactDialogUpdateMutation$variables;
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EditContactDialogUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateThirdPartyContactPayload",
        "kind": "LinkedField",
        "name": "updateThirdPartyContact",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ThirdPartyContact",
            "kind": "LinkedField",
            "name": "thirdPartyContact",
            "plural": false,
            "selections": [
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditContactDialogUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateThirdPartyContactPayload",
        "kind": "LinkedField",
        "name": "updateThirdPartyContact",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ThirdPartyContact",
            "kind": "LinkedField",
            "name": "thirdPartyContact",
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
              },
              {
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
              {
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
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9e7f9093f6e387f6be373c3a32706db6",
    "id": null,
    "metadata": {},
    "name": "EditContactDialogUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation EditContactDialogUpdateMutation(\n  $input: UpdateThirdPartyContactInput!\n) {\n  updateThirdPartyContact(input: $input) {\n    thirdPartyContact {\n      ...ThirdPartyContactsTabFragment_contact\n      id\n    }\n  }\n}\n\nfragment ThirdPartyContactsTabFragment_contact on ThirdPartyContact {\n  id\n  fullName\n  email\n  phone\n  role\n  canUpdate: permission(action: \"core:thirdParty-contact:update\")\n  canDelete: permission(action: \"core:thirdParty-contact:delete\")\n}\n"
  }
};
})();

(node as any).hash = "a8f4576a2cd7ece99bdceba9135664a5";

export default node;
