/**
 * @generated SignedSource<<0d41afb8ddcacfdde13a67b134e8949d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateRiskObligationMappingInput = {
  obligationId: string;
  riskId: string;
};
export type RiskObligationsPageCreateMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateRiskObligationMappingInput;
};
export type RiskObligationsPageCreateMutation$data = {
  readonly createRiskObligationMapping: {
    readonly obligationEdge: {
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"LinkedObligationsCardFragment">;
      };
    };
  };
};
export type RiskObligationsPageCreateMutation = {
  response: RiskObligationsPageCreateMutation$data;
  variables: RiskObligationsPageCreateMutation$variables;
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
    "name": "RiskObligationsPageCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateRiskObligationMappingPayload",
        "kind": "LinkedField",
        "name": "createRiskObligationMapping",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ObligationEdge",
            "kind": "LinkedField",
            "name": "obligationEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Obligation",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "LinkedObligationsCardFragment"
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
    "name": "RiskObligationsPageCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateRiskObligationMappingPayload",
        "kind": "LinkedField",
        "name": "createRiskObligationMapping",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ObligationEdge",
            "kind": "LinkedField",
            "name": "obligationEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Obligation",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "area",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "source",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "status",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Profile",
                    "kind": "LinkedField",
                    "name": "owner",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "fullName",
                        "storageKey": null
                      },
                      (v3/*: any*/)
                    ],
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
            "name": "obligationEdge",
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
    "cacheID": "2dfbfbe2bbd7a9058f7348fdc0468307",
    "id": null,
    "metadata": {},
    "name": "RiskObligationsPageCreateMutation",
    "operationKind": "mutation",
    "text": "mutation RiskObligationsPageCreateMutation(\n  $input: CreateRiskObligationMappingInput!\n) {\n  createRiskObligationMapping(input: $input) {\n    obligationEdge {\n      node {\n        id\n        ...LinkedObligationsCardFragment\n      }\n    }\n  }\n}\n\nfragment LinkedObligationsCardFragment on Obligation {\n  id\n  area\n  source\n  status\n  owner {\n    fullName\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "c66d5d60dc8d472f806b8cdb711690d0";

export default node;
