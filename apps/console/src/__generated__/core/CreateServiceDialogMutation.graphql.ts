/**
 * @generated SignedSource<<0d3ec0939782f8ff8407e2137e9e5463>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateThirdPartyServiceInput = {
  description?: string | null | undefined;
  name: string;
  thirdPartyId: string;
  type?: string | null | undefined;
  url?: string | null | undefined;
};
export type CreateServiceDialogMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateThirdPartyServiceInput;
};
export type CreateServiceDialogMutation$data = {
  readonly createThirdPartyService: {
    readonly thirdPartyServiceEdge: {
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"ThirdPartyServicesTabFragment_service">;
      };
    };
  };
};
export type CreateServiceDialogMutation = {
  response: CreateServiceDialogMutation$data;
  variables: CreateServiceDialogMutation$variables;
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
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateServiceDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateThirdPartyServicePayload",
        "kind": "LinkedField",
        "name": "createThirdPartyService",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ThirdPartyServiceEdge",
            "kind": "LinkedField",
            "name": "thirdPartyServiceEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ThirdPartyService",
                "kind": "LinkedField",
                "name": "node",
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
    "name": "CreateServiceDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateThirdPartyServicePayload",
        "kind": "LinkedField",
        "name": "createThirdPartyService",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ThirdPartyServiceEdge",
            "kind": "LinkedField",
            "name": "thirdPartyServiceEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ThirdPartyService",
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
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "prependEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "thirdPartyServiceEdge",
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
    "cacheID": "afeb8b33ba2d0eeedac281a0b756c3c8",
    "id": null,
    "metadata": {},
    "name": "CreateServiceDialogMutation",
    "operationKind": "mutation",
    "text": "mutation CreateServiceDialogMutation(\n  $input: CreateThirdPartyServiceInput!\n) {\n  createThirdPartyService(input: $input) {\n    thirdPartyServiceEdge {\n      node {\n        ...ThirdPartyServicesTabFragment_service\n        id\n      }\n    }\n  }\n}\n\nfragment ThirdPartyServicesTabFragment_service on ThirdPartyService {\n  id\n  name\n  description\n  canUpdate: permission(action: \"core:thirdParty-service:update\")\n  canDelete: permission(action: \"core:thirdParty-service:delete\")\n}\n"
  }
};
})();

(node as any).hash = "d4d64d990eaab6687a198ed4d1f407e2";

export default node;
