/**
 * @generated SignedSource<<201b99445445260b742ef805ba00d72b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CreateRiskAssessmentInput = {
  description?: string | null | undefined;
  name: string;
  organizationId: string;
};
export type CreateRiskAssessmentDialogCreateMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateRiskAssessmentInput;
};
export type CreateRiskAssessmentDialogCreateMutation$data = {
  readonly createRiskAssessment: {
    readonly riskAssessmentEdge: {
      readonly node: {
        readonly createdAt: string;
        readonly description: string | null | undefined;
        readonly id: string;
        readonly name: string;
      };
    };
  };
};
export type CreateRiskAssessmentDialogCreateMutation = {
  response: CreateRiskAssessmentDialogCreateMutation$data;
  variables: CreateRiskAssessmentDialogCreateMutation$variables;
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
  "concreteType": "RiskAssessmentConnectionEdge",
  "kind": "LinkedField",
  "name": "riskAssessmentEdge",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "RiskAssessment",
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
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "createdAt",
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
    "name": "CreateRiskAssessmentDialogCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateRiskAssessmentPayload",
        "kind": "LinkedField",
        "name": "createRiskAssessment",
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
    "name": "CreateRiskAssessmentDialogCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateRiskAssessmentPayload",
        "kind": "LinkedField",
        "name": "createRiskAssessment",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "prependEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "riskAssessmentEdge",
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
    "cacheID": "fece172788149ac4fe84f5bfd8a036eb",
    "id": null,
    "metadata": {},
    "name": "CreateRiskAssessmentDialogCreateMutation",
    "operationKind": "mutation",
    "text": "mutation CreateRiskAssessmentDialogCreateMutation(\n  $input: CreateRiskAssessmentInput!\n) {\n  createRiskAssessment(input: $input) {\n    riskAssessmentEdge {\n      node {\n        id\n        name\n        description\n        createdAt\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "fe01f9954a47d515d38cfecbc307093c";

export default node;
