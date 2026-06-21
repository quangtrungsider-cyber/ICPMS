/**
 * @generated SignedSource<<e55758323f40ea7ece232e149ee7565c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DocumentClassification = "CONFIDENTIAL" | "INTERNAL" | "PUBLIC" | "SECRET";
export type DocumentType = "GOVERNANCE" | "OTHER" | "PLAN" | "POLICY" | "PROCEDURE" | "RECORD" | "REGISTER" | "REPORT" | "STATEMENT_OF_APPLICABILITY" | "TEMPLATE";
export type TrustCenterVisibility = "NONE" | "PRIVATE" | "PUBLIC";
export type UpdateDocumentInput = {
  classification?: DocumentClassification | null | undefined;
  content?: string | null | undefined;
  defaultApproverIds?: ReadonlyArray<string> | null | undefined;
  documentType?: DocumentType | null | undefined;
  id: string;
  title?: string | null | undefined;
  trustCenterVisibility?: TrustCenterVisibility | null | undefined;
};
export type DocumentDetailsCardMutation$variables = {
  input: UpdateDocumentInput;
};
export type DocumentDetailsCardMutation$data = {
  readonly updateDocument: {
    readonly document: {
      readonly id: string;
      readonly versions: {
        readonly edges: ReadonlyArray<{
          readonly node: {
            readonly documentType: DocumentType;
            readonly id: string;
          };
        }>;
      };
    };
  };
};
export type DocumentDetailsCardMutation = {
  response: DocumentDetailsCardMutation$data;
  variables: DocumentDetailsCardMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateDocumentPayload",
    "kind": "LinkedField",
    "name": "updateDocument",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Document",
        "kind": "LinkedField",
        "name": "document",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 1
              },
              {
                "kind": "Literal",
                "name": "orderBy",
                "value": {
                  "direction": "DESC",
                  "field": "CREATED_AT"
                }
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
                      (v1/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "documentType",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "versions(first:1,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DocumentDetailsCardMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentDetailsCardMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "6a70f27692fae0d03b923250ba28042c",
    "id": null,
    "metadata": {},
    "name": "DocumentDetailsCardMutation",
    "operationKind": "mutation",
    "text": "mutation DocumentDetailsCardMutation(\n  $input: UpdateDocumentInput!\n) {\n  updateDocument(input: $input) {\n    document {\n      id\n      versions(first: 1, orderBy: {field: CREATED_AT, direction: DESC}) {\n        edges {\n          node {\n            id\n            documentType\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a30a054c60c181086ab32ca80dd562e7";

export default node;
