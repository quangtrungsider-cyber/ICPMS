/**
 * @generated SignedSource<<fadbebcacd60b92ff38c403efc1a7683>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsDocumentSectionType = "APPENDIX" | "ARTICLE" | "ATTACHMENT" | "CHAPTER" | "CLAUSE" | "DEFINITION" | "EXAMPLE" | "FIGURE" | "NOTE" | "PARAGRAPH" | "PART" | "POINT" | "SECTION" | "SUBPARAGRAPH" | "SUBSECTION" | "TABLE" | "UNKNOWN";
export type IcpmsAiReviewPageArticleWithDescendantsQuery$variables = {
  sectionId: string;
};
export type IcpmsAiReviewPageArticleWithDescendantsQuery$data = {
  readonly articleSectionWithDescendants: {
    readonly article: {
      readonly contentText: string | null | undefined;
      readonly depthLevel: number;
      readonly fullHeading: string;
      readonly id: string;
      readonly sectionNumber: string | null | undefined;
      readonly sectionType: IcpmsDocumentSectionType;
      readonly sortOrder: number;
    };
    readonly sections: ReadonlyArray<{
      readonly contentText: string | null | undefined;
      readonly depthLevel: number;
      readonly fullHeading: string;
      readonly id: string;
      readonly parentId: string | null | undefined;
      readonly sectionNumber: string | null | undefined;
      readonly sectionType: IcpmsDocumentSectionType;
      readonly sortOrder: number;
    }>;
  } | null | undefined;
};
export type IcpmsAiReviewPageArticleWithDescendantsQuery = {
  response: IcpmsAiReviewPageArticleWithDescendantsQuery$data;
  variables: IcpmsAiReviewPageArticleWithDescendantsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "sectionId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sectionType",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sectionNumber",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullHeading",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "contentText",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "depthLevel",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sortOrder",
  "storageKey": null
},
v8 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "sectionId",
        "variableName": "sectionId"
      }
    ],
    "concreteType": "IcpmsArticleContent",
    "kind": "LinkedField",
    "name": "articleSectionWithDescendants",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsParsedDocumentSection",
        "kind": "LinkedField",
        "name": "article",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsParsedDocumentSection",
        "kind": "LinkedField",
        "name": "sections",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "parentId",
            "storageKey": null
          },
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/)
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
    "name": "IcpmsAiReviewPageArticleWithDescendantsQuery",
    "selections": (v8/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsAiReviewPageArticleWithDescendantsQuery",
    "selections": (v8/*: any*/)
  },
  "params": {
    "cacheID": "2c27beda2ad7c36061fd4e2c431be11a",
    "id": null,
    "metadata": {},
    "name": "IcpmsAiReviewPageArticleWithDescendantsQuery",
    "operationKind": "query",
    "text": "query IcpmsAiReviewPageArticleWithDescendantsQuery(\n  $sectionId: ID!\n) {\n  articleSectionWithDescendants(sectionId: $sectionId) {\n    article {\n      id\n      sectionType\n      sectionNumber\n      fullHeading\n      contentText\n      depthLevel\n      sortOrder\n    }\n    sections {\n      id\n      parentId\n      sectionType\n      sectionNumber\n      fullHeading\n      contentText\n      depthLevel\n      sortOrder\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4e3b085a36ae204b5f774ca68b5e0571";

export default node;
