/**
 * @generated SignedSource<<fd043c4e0f6b15434babf1cc495e6eab>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateMeasureDocumentMappingInput = {
  documentId: string;
  measureId: string;
};
export type MeasureDocumentsTabCreateMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateMeasureDocumentMappingInput;
};
export type MeasureDocumentsTabCreateMutation$data = {
  readonly createMeasureDocumentMapping: {
    readonly documentEdge: {
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"LinkedDocumentsCardFragment">;
      };
    };
  };
};
export type MeasureDocumentsTabCreateMutation = {
  response: MeasureDocumentsTabCreateMutation$data;
  variables: MeasureDocumentsTabCreateMutation$variables;
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
    "name": "MeasureDocumentsTabCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateMeasureDocumentMappingPayload",
        "kind": "LinkedField",
        "name": "createMeasureDocumentMapping",
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
    "name": "MeasureDocumentsTabCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateMeasureDocumentMappingPayload",
        "kind": "LinkedField",
        "name": "createMeasureDocumentMapping",
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
    "cacheID": "e425340e2741c2908e31bff3421a6d5a",
    "id": null,
    "metadata": {},
    "name": "MeasureDocumentsTabCreateMutation",
    "operationKind": "mutation",
    "text": "mutation MeasureDocumentsTabCreateMutation(\n  $input: CreateMeasureDocumentMappingInput!\n) {\n  createMeasureDocumentMapping(input: $input) {\n    documentEdge {\n      node {\n        id\n        ...LinkedDocumentsCardFragment\n      }\n    }\n  }\n}\n\nfragment LinkedDocumentsCardFragment on Document {\n  id\n  versions(first: 1) {\n    edges {\n      node {\n        id\n        title\n        documentType\n        status\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "011a52fd620b5f97f067b6b9b426a14c";

export default node;
