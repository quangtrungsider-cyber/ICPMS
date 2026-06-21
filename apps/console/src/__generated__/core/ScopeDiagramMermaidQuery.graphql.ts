/**
 * @generated SignedSource<<a9896cdce01b82b3ae4d276d38ceba4d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ScopeDiagramMermaidQuery$variables = {
  scopeId: string;
};
export type ScopeDiagramMermaidQuery$data = {
  readonly node: {
    readonly id?: string;
    readonly mermaidChart?: string;
  };
};
export type ScopeDiagramMermaidQuery = {
  response: ScopeDiagramMermaidQuery$data;
  variables: ScopeDiagramMermaidQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "scopeId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "scopeId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "mermaidChart",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ScopeDiagramMermaidQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "type": "RiskAssessmentScope",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ScopeDiagramMermaidQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/)
            ],
            "type": "RiskAssessmentScope",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5ec0571078342e90ba955f8a9cd12ca2",
    "id": null,
    "metadata": {},
    "name": "ScopeDiagramMermaidQuery",
    "operationKind": "query",
    "text": "query ScopeDiagramMermaidQuery(\n  $scopeId: ID!\n) {\n  node(id: $scopeId) {\n    __typename\n    ... on RiskAssessmentScope {\n      id\n      mermaidChart\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "e928937a7f0dac31ef1b6431e479f25d";

export default node;
