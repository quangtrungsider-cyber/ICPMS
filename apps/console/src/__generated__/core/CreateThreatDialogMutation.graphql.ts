/**
 * @generated SignedSource<<4f406c4f4379fc585c4c4741cf69ebb8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CreateRiskAssessmentThreatInput = {
  category: string;
  name: string;
  processId: string;
  riskAssessmentScopeId: string;
};
export type CreateThreatDialogMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateRiskAssessmentThreatInput;
};
export type CreateThreatDialogMutation$data = {
  readonly createRiskAssessmentThreat: {
    readonly riskAssessmentThreatEdge: {
      readonly node: {
        readonly category: string;
        readonly id: string;
        readonly name: string;
        readonly processId: string;
      };
    };
  };
};
export type CreateThreatDialogMutation = {
  response: CreateThreatDialogMutation$data;
  variables: CreateThreatDialogMutation$variables;
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
  "concreteType": "RiskAssessmentThreatConnectionEdge",
  "kind": "LinkedField",
  "name": "riskAssessmentThreatEdge",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "RiskAssessmentThreat",
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
          "name": "processId",
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
          "name": "category",
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
    "name": "CreateThreatDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateRiskAssessmentThreatPayload",
        "kind": "LinkedField",
        "name": "createRiskAssessmentThreat",
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
    "name": "CreateThreatDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateRiskAssessmentThreatPayload",
        "kind": "LinkedField",
        "name": "createRiskAssessmentThreat",
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
            "name": "riskAssessmentThreatEdge",
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
    "cacheID": "ee4c3e4dfff065e4235fa63c5654e38a",
    "id": null,
    "metadata": {},
    "name": "CreateThreatDialogMutation",
    "operationKind": "mutation",
    "text": "mutation CreateThreatDialogMutation(\n  $input: CreateRiskAssessmentThreatInput!\n) {\n  createRiskAssessmentThreat(input: $input) {\n    riskAssessmentThreatEdge {\n      node {\n        id\n        processId\n        name\n        category\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "20df730b3a76a57bf9e28a71143ff41f";

export default node;
