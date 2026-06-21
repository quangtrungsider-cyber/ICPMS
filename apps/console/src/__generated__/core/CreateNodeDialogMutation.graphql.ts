/**
 * @generated SignedSource<<8d1c72a4a019868fbdd3e5737b99538e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type RiskAssessmentNodeType = "ASSET" | "DATA" | "ENTITY";
export type CreateRiskAssessmentNodeInput = {
  boundaryId?: string | null | undefined;
  name: string;
  nodeType: RiskAssessmentNodeType;
  riskAssessmentScopeId: string;
};
export type CreateNodeDialogMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateRiskAssessmentNodeInput;
};
export type CreateNodeDialogMutation$data = {
  readonly createRiskAssessmentNode: {
    readonly riskAssessmentNodeEdge: {
      readonly node: {
        readonly boundaryId: string | null | undefined;
        readonly id: string;
        readonly name: string;
        readonly nodeType: RiskAssessmentNodeType;
      };
    };
  };
};
export type CreateNodeDialogMutation = {
  response: CreateNodeDialogMutation$data;
  variables: CreateNodeDialogMutation$variables;
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
  "concreteType": "RiskAssessmentNodeConnectionEdge",
  "kind": "LinkedField",
  "name": "riskAssessmentNodeEdge",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "RiskAssessmentNode",
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
          "name": "nodeType",
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
          "name": "boundaryId",
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
    "name": "CreateNodeDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateRiskAssessmentNodePayload",
        "kind": "LinkedField",
        "name": "createRiskAssessmentNode",
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
    "name": "CreateNodeDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateRiskAssessmentNodePayload",
        "kind": "LinkedField",
        "name": "createRiskAssessmentNode",
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
            "name": "riskAssessmentNodeEdge",
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
    "cacheID": "2e28fa9a2789ea62fc0df585f305ab20",
    "id": null,
    "metadata": {},
    "name": "CreateNodeDialogMutation",
    "operationKind": "mutation",
    "text": "mutation CreateNodeDialogMutation(\n  $input: CreateRiskAssessmentNodeInput!\n) {\n  createRiskAssessmentNode(input: $input) {\n    riskAssessmentNodeEdge {\n      node {\n        id\n        nodeType\n        name\n        boundaryId\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7b5654afa564090a2fa7e326723f1e7c";

export default node;
