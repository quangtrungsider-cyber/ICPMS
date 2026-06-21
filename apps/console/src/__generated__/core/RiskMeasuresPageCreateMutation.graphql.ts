/**
 * @generated SignedSource<<7b23d9804c5d3915e4f0012008d1a153>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateRiskMeasureMappingInput = {
  measureId: string;
  riskId: string;
};
export type RiskMeasuresPageCreateMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateRiskMeasureMappingInput;
};
export type RiskMeasuresPageCreateMutation$data = {
  readonly createRiskMeasureMapping: {
    readonly measureEdge: {
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"LinkedMeasuresCardFragment">;
      };
    };
  };
};
export type RiskMeasuresPageCreateMutation = {
  response: RiskMeasuresPageCreateMutation$data;
  variables: RiskMeasuresPageCreateMutation$variables;
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
    "name": "RiskMeasuresPageCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateRiskMeasureMappingPayload",
        "kind": "LinkedField",
        "name": "createRiskMeasureMapping",
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
    "name": "RiskMeasuresPageCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateRiskMeasureMappingPayload",
        "kind": "LinkedField",
        "name": "createRiskMeasureMapping",
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
    "cacheID": "5660582711a3f245531a59849cce793a",
    "id": null,
    "metadata": {},
    "name": "RiskMeasuresPageCreateMutation",
    "operationKind": "mutation",
    "text": "mutation RiskMeasuresPageCreateMutation(\n  $input: CreateRiskMeasureMappingInput!\n) {\n  createRiskMeasureMapping(input: $input) {\n    measureEdge {\n      node {\n        id\n        ...LinkedMeasuresCardFragment\n      }\n    }\n  }\n}\n\nfragment LinkedMeasuresCardFragment on Measure {\n  id\n  name\n  state\n}\n"
  }
};
})();

(node as any).hash = "f26343e4b703a45fa3d9b26835f1a367";

export default node;
