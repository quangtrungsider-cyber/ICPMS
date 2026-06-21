/**
 * @generated SignedSource<<80a23b0c2fbc41434797749da11d1913>>
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
export type ThirdPartyMeasuresPageAttachMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateMeasureThirdPartyMappingInput;
};
export type ThirdPartyMeasuresPageAttachMutation$data = {
  readonly createMeasureThirdPartyMapping: {
    readonly measureEdge: {
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"LinkedMeasuresCardFragment">;
      };
    };
  };
};
export type ThirdPartyMeasuresPageAttachMutation = {
  response: ThirdPartyMeasuresPageAttachMutation$data;
  variables: ThirdPartyMeasuresPageAttachMutation$variables;
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
    "name": "ThirdPartyMeasuresPageAttachMutation",
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
            "concreteType": "MeasureEdge",
            "kind": "LinkedField",
            "name": "measureEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Measure",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "LinkedMeasuresCardFragment"
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
    "name": "ThirdPartyMeasuresPageAttachMutation",
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
            "concreteType": "MeasureEdge",
            "kind": "LinkedField",
            "name": "measureEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Measure",
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
                    "name": "state",
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
            "name": "measureEdge",
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
    "cacheID": "143d92596ce58c77cfcfc0aae2a9f389",
    "id": null,
    "metadata": {},
    "name": "ThirdPartyMeasuresPageAttachMutation",
    "operationKind": "mutation",
    "text": "mutation ThirdPartyMeasuresPageAttachMutation(\n  $input: CreateMeasureThirdPartyMappingInput!\n) {\n  createMeasureThirdPartyMapping(input: $input) {\n    measureEdge {\n      node {\n        id\n        ...LinkedMeasuresCardFragment\n      }\n    }\n  }\n}\n\nfragment LinkedMeasuresCardFragment on Measure {\n  id\n  name\n  state\n}\n"
  }
};
})();

(node as any).hash = "c02a8e5c4797cf34855850ff7d09e126";

export default node;
