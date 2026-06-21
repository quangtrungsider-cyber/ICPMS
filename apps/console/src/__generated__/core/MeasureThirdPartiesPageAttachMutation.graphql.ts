/**
 * @generated SignedSource<<69de3ddedb22bec1851fc8c4c1d47599>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateMeasureThirdPartyMappingInput = {
  measureId: string;
  thirdPartyId: string;
};
export type MeasureThirdPartiesPageAttachMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateMeasureThirdPartyMappingInput;
};
export type MeasureThirdPartiesPageAttachMutation$data = {
  readonly createMeasureThirdPartyMapping: {
    readonly thirdPartyEdge: {
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"LinkedThirdPartiesCardFragment">;
      };
    };
  };
};
export type MeasureThirdPartiesPageAttachMutation = {
  response: MeasureThirdPartiesPageAttachMutation$data;
  variables: MeasureThirdPartiesPageAttachMutation$variables;
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
  "name": "id",
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
    "name": "MeasureThirdPartiesPageAttachMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateMeasureThirdPartyMappingPayload",
        "kind": "LinkedField",
        "name": "createMeasureThirdPartyMapping",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ThirdPartyEdge",
            "kind": "LinkedField",
            "name": "thirdPartyEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ThirdParty",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "LinkedThirdPartiesCardFragment"
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
    "name": "MeasureThirdPartiesPageAttachMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateMeasureThirdPartyMappingPayload",
        "kind": "LinkedField",
        "name": "createMeasureThirdPartyMapping",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ThirdPartyEdge",
            "kind": "LinkedField",
            "name": "thirdPartyEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ThirdParty",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
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
                    "name": "category",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "websiteUrl",
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
            "name": "thirdPartyEdge",
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
    "cacheID": "1b9e1724cd714ab7babb8de4a1bc0c06",
    "id": null,
    "metadata": {},
    "name": "MeasureThirdPartiesPageAttachMutation",
    "operationKind": "mutation",
    "text": "mutation MeasureThirdPartiesPageAttachMutation(\n  $input: CreateMeasureThirdPartyMappingInput!\n) {\n  createMeasureThirdPartyMapping(input: $input) {\n    thirdPartyEdge {\n      node {\n        id\n        ...LinkedThirdPartiesCardFragment\n      }\n    }\n  }\n}\n\nfragment LinkedThirdPartiesCardFragment on ThirdParty {\n  id\n  name\n  category\n  websiteUrl\n}\n"
  }
};
})();

(node as any).hash = "c94216442c3001827edee4875350fd0e";

export default node;
