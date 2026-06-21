/**
 * @generated SignedSource<<a2353c76930c8ed4329583a5b1964c53>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DocumentStatus = "ACTIVE" | "ARCHIVED";
export type DocumentVersionStatus = "DRAFT" | "PENDING_APPROVAL" | "PUBLISHED";
export type DocumentWriteMode = "AUTHORED" | "GENERATED";
export type DocumentDescriptionPageQuery$variables = {
  documentId: string;
  versionId: string;
  versionSpecified: boolean;
};
export type DocumentDescriptionPageQuery$data = {
  readonly document: {
    readonly __typename: "Document";
    readonly canUpdate: boolean;
    readonly id: string;
    readonly lastVersion?: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly content: string;
          readonly id: string;
          readonly status: DocumentVersionStatus;
        };
      }>;
    };
    readonly status: DocumentStatus;
    readonly writeMode: DocumentWriteMode;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
  readonly version?: {
    readonly __typename: "DocumentVersion";
    readonly content: string;
    readonly id: string;
    readonly status: DocumentVersionStatus;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type DocumentDescriptionPageQuery = {
  response: DocumentDescriptionPageQuery$data;
  variables: DocumentDescriptionPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "documentId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "versionId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "versionSpecified"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "versionId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v6 = [
  (v3/*: any*/),
  (v4/*: any*/),
  (v5/*: any*/)
],
v7 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "documentId"
  }
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "writeMode",
  "storageKey": null
},
v9 = {
  "alias": "canUpdate",
  "args": [
    {
      "kind": "Literal",
      "name": "action",
      "value": "core:document:update"
    }
  ],
  "kind": "ScalarField",
  "name": "permission",
  "storageKey": "permission(action:\"core:document:update\")"
},
v10 = {
  "condition": "versionSpecified",
  "kind": "Condition",
  "passingValue": false,
  "selections": [
    {
      "alias": "lastVersion",
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
              "selections": (v6/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "versions(first:1,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
    }
  ]
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DocumentDescriptionPageQuery",
    "selections": [
      {
        "condition": "versionSpecified",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": "version",
            "args": (v1/*: any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": (v6/*: any*/),
                "type": "DocumentVersion",
                "abstractKey": null
              }
            ],
            "storageKey": null
          }
        ]
      },
      {
        "alias": "document",
        "args": (v7/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v5/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/)
            ],
            "type": "Document",
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
    "name": "DocumentDescriptionPageQuery",
    "selections": [
      {
        "alias": "document",
        "args": (v7/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v5/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/)
            ],
            "type": "Document",
            "abstractKey": null
          }
        ],
        "storageKey": null
      },
      {
        "condition": "versionSpecified",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": "version",
            "args": (v1/*: any*/),
            "concreteType": null,
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/)
                ],
                "type": "DocumentVersion",
                "abstractKey": null
              }
            ],
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "d4cbf8fbf7039b40b7d253f8a2efdb75",
    "id": null,
    "metadata": {},
    "name": "DocumentDescriptionPageQuery",
    "operationKind": "query",
    "text": "query DocumentDescriptionPageQuery(\n  $documentId: ID!\n  $versionId: ID!\n  $versionSpecified: Boolean!\n) {\n  version: node(id: $versionId) @include(if: $versionSpecified) {\n    __typename\n    ... on DocumentVersion {\n      id\n      content\n      status\n    }\n    id\n  }\n  document: node(id: $documentId) {\n    __typename\n    ... on Document {\n      id\n      status\n      writeMode\n      canUpdate: permission(action: \"core:document:update\")\n      lastVersion: versions(first: 1, orderBy: {field: CREATED_AT, direction: DESC}) @skip(if: $versionSpecified) {\n        edges {\n          node {\n            id\n            content\n            status\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "203760c6856713a679878047366a8b42";

export default node;
