/**
 * @generated SignedSource<<65296405a6aecdd9fea21516ff906559>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateRiskDocumentMappingInput = {
  documentId: string;
  riskId: string;
};
export type RiskDocumentsPageCreateMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateRiskDocumentMappingInput;
};
export type RiskDocumentsPageCreateMutation$data = {
  readonly createRiskDocumentMapping: {
    readonly documentEdge: {
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"LinkedDocumentsCardFragment">;
      };
    };
  };
};
export type RiskDocumentsPageCreateMutation = {
  response: RiskDocumentsPageCreateMutation$data;
  variables: RiskDocumentsPageCreateMutation$variables;
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
    "name": "RiskDocumentsPageCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateRiskDocumentMappingPayload",
        "kind": "LinkedField",
        "name": "createRiskDocumentMapping",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "DocumentEdge",
            "kind": "LinkedField",
            "name": "documentEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Document",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "LinkedDocumentsCardFragment"
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
    "name": "RiskDocumentsPageCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateRiskDocumentMappingPayload",
        "kind": "LinkedField",
        "name": "createRiskDocumentMapping",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "DocumentEdge",
            "kind": "LinkedField",
            "name": "documentEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Document",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "first",
                        "value": 1
                      }
                    ],
                    "concreteType": "DocumentVersionConnection",
                    "kind": "LinkedField",
                    "name": "versions",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "DocumentVersionEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "DocumentVersion",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "title",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "documentType",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "status",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "versions(first:1)"
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
            "name": "documentEdge",
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
    "cacheID": "7c9bbfaaf1179119f6daf74e02d7de65",
    "id": null,
    "metadata": {},
    "name": "RiskDocumentsPageCreateMutation",
    "operationKind": "mutation",
    "text": "mutation RiskDocumentsPageCreateMutation(\n  $input: CreateRiskDocumentMappingInput!\n) {\n  createRiskDocumentMapping(input: $input) {\n    documentEdge {\n      node {\n        id\n        ...LinkedDocumentsCardFragment\n      }\n    }\n  }\n}\n\nfragment LinkedDocumentsCardFragment on Document {\n  id\n  versions(first: 1) {\n    edges {\n      node {\n        id\n        title\n        documentType\n        status\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e091529476c7a4304303c07c9a913bee";

export default node;
