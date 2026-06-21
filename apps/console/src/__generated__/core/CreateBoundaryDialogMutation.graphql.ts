/**
 * @generated SignedSource<<3a85f35e30f38a624d9b2868c7cced61>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CreateRiskAssessmentBoundaryInput = {
  name: string;
  parentBoundaryId?: string | null | undefined;
  riskAssessmentScopeId: string;
};
export type CreateBoundaryDialogMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateRiskAssessmentBoundaryInput;
};
export type CreateBoundaryDialogMutation$data = {
  readonly createRiskAssessmentBoundary: {
    readonly riskAssessmentBoundaryEdge: {
      readonly node: {
        readonly id: string;
        readonly name: string;
        readonly parentBoundaryId: string | null | undefined;
      };
    };
  };
};
export type CreateBoundaryDialogMutation = {
  response: CreateBoundaryDialogMutation$data;
  variables: CreateBoundaryDialogMutation$variables;
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
  "concreteType": "RiskAssessmentBoundaryConnectionEdge",
  "kind": "LinkedField",
  "name": "riskAssessmentBoundaryEdge",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "RiskAssessmentBoundary",
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
          "name": "parentBoundaryId",
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
    "name": "CreateBoundaryDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateRiskAssessmentBoundaryPayload",
        "kind": "LinkedField",
        "name": "createRiskAssessmentBoundary",
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
    "name": "CreateBoundaryDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateRiskAssessmentBoundaryPayload",
        "kind": "LinkedField",
        "name": "createRiskAssessmentBoundary",
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
            "name": "riskAssessmentBoundaryEdge",
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
    "cacheID": "06e674aa7f419bc6a480cc9d6b516b8e",
    "id": null,
    "metadata": {},
    "name": "CreateBoundaryDialogMutation",
    "operationKind": "mutation",
    "text": "mutation CreateBoundaryDialogMutation(\n  $input: CreateRiskAssessmentBoundaryInput!\n) {\n  createRiskAssessmentBoundary(input: $input) {\n    riskAssessmentBoundaryEdge {\n      node {\n        id\n        name\n        parentBoundaryId\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "84d445035af7443eba9cc0abc2af9158";

export default node;
