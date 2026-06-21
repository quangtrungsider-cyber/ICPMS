/**
 * @generated SignedSource<<707fa07bf6e9b0a7aaadf8fcf808f238>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UpdateThirdPartyServiceInput = {
  description?: string | null | undefined;
  id: string;
  name?: string | null | undefined;
  type?: string | null | undefined;
  url?: string | null | undefined;
};
export type EditServiceDialogUpdateMutation$variables = {
  input: UpdateThirdPartyServiceInput;
};
export type EditServiceDialogUpdateMutation$data = {
  readonly updateThirdPartyService: {
    readonly thirdPartyService: {
      readonly " $fragmentSpreads": FragmentRefs<"ThirdPartyServicesTabFragment_service">;
    };
  };
};
export type EditServiceDialogUpdateMutation = {
  response: EditServiceDialogUpdateMutation$data;
  variables: EditServiceDialogUpdateMutation$variables;
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
    "name": "EditServiceDialogUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateThirdPartyServicePayload",
        "kind": "LinkedField",
        "name": "updateThirdPartyService",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ThirdPartyService",
            "kind": "LinkedField",
            "name": "thirdPartyService",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ThirdPartyServicesTabFragment_service"
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
    "name": "EditServiceDialogUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateThirdPartyServicePayload",
        "kind": "LinkedField",
        "name": "updateThirdPartyService",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ThirdPartyService",
            "kind": "LinkedField",
            "name": "thirdPartyService",
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
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "description",
                "storageKey": null
              },
              {
                "alias": "canUpdate",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "action",
                    "value": "core:thirdParty-service:update"
                  }
                ],
                "kind": "ScalarField",
                "name": "permission",
                "storageKey": "permission(action:\"core:thirdParty-service:update\")"
              },
              {
                "alias": "canDelete",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "action",
                    "value": "core:thirdParty-service:delete"
                  }
                ],
                "kind": "ScalarField",
                "name": "permission",
                "storageKey": "permission(action:\"core:thirdParty-service:delete\")"
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
    "cacheID": "2fd621730fe85b168df3e436b470aaaf",
    "id": null,
    "metadata": {},
    "name": "EditServiceDialogUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation EditServiceDialogUpdateMutation(\n  $input: UpdateThirdPartyServiceInput!\n) {\n  updateThirdPartyService(input: $input) {\n    thirdPartyService {\n      ...ThirdPartyServicesTabFragment_service\n      id\n    }\n  }\n}\n\nfragment ThirdPartyServicesTabFragment_service on ThirdPartyService {\n  id\n  name\n  description\n  canUpdate: permission(action: \"core:thirdParty-service:update\")\n  canDelete: permission(action: \"core:thirdParty-service:delete\")\n}\n"
  }
};
})();

(node as any).hash = "004023f7e1b7c422e35972e38b13fbad";

export default node;
