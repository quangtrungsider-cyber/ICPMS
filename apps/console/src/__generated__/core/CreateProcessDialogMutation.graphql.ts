/**
 * @generated SignedSource<<d7a642f81b2c9447e82dc21450af86cd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CreateRiskAssessmentProcessInput = {
  name: string;
  riskAssessmentScopeId: string;
  sourceNodeId: string;
  targetNodeId: string;
};
export type CreateProcessDialogMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateRiskAssessmentProcessInput;
};
export type CreateProcessDialogMutation$data = {
  readonly createRiskAssessmentProcess: {
    readonly riskAssessmentProcessEdge: {
      readonly node: {
        readonly id: string;
        readonly name: string;
        readonly sourceNodeId: string;
        readonly targetNodeId: string;
      };
    };
  };
};
export type CreateProcessDialogMutation = {
  response: CreateProcessDialogMutation$data;
  variables: CreateProcessDialogMutation$variables;
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
  "concreteType": "RiskAssessmentProcessConnectionEdge",
  "kind": "LinkedField",
  "name": "riskAssessmentProcessEdge",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "RiskAssessmentProcess",
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
          "name": "sourceNodeId",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "targetNodeId",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
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
    "name": "CreateProcessDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateRiskAssessmentProcessPayload",
        "kind": "LinkedField",
        "name": "createRiskAssessmentProcess",
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
    "name": "CreateProcessDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateRiskAssessmentProcessPayload",
        "kind": "LinkedField",
        "name": "createRiskAssessmentProcess",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "riskAssessmentProcessEdge",
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
    "cacheID": "06d5e242143f4c08aae56c703b5f861b",
    "id": null,
    "metadata": {},
    "name": "CreateProcessDialogMutation",
    "operationKind": "mutation",
    "text": "mutation CreateProcessDialogMutation(\n  $input: CreateRiskAssessmentProcessInput!\n) {\n  createRiskAssessmentProcess(input: $input) {\n    riskAssessmentProcessEdge {\n      node {\n        id\n        sourceNodeId\n        targetNodeId\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ce592a48ea990c125819f494dcfce124";

export default node;
