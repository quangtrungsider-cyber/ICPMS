/**
 * @generated SignedSource<<6b914203122b07bf557fb7c78ce69064>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsDocumentSectionType = "APPENDIX" | "ARTICLE" | "ATTACHMENT" | "CHAPTER" | "CLAUSE" | "DEFINITION" | "EXAMPLE" | "FIGURE" | "NOTE" | "PARAGRAPH" | "PART" | "POINT" | "SECTION" | "SUBPARAGRAPH" | "SUBSECTION" | "TABLE" | "UNKNOWN";
export type IcpmsIngestionJobDetailPageParsedSectionsQuery$variables = {
  parseJobId: string;
};
export type IcpmsIngestionJobDetailPageParsedSectionsQuery$data = {
  readonly parsedSectionsForJob: ReadonlyArray<{
    readonly contentText: string | null | undefined;
    readonly depthLevel: number;
    readonly fullHeading: string;
    readonly id: string;
    readonly parentId: string | null | undefined;
    readonly parseJobId: string;
    readonly path: string | null | undefined;
    readonly sectionNumber: string | null | undefined;
    readonly sectionType: IcpmsDocumentSectionType;
    readonly sortOrder: number;
    readonly title: string;
  }>;
};
export type IcpmsIngestionJobDetailPageParsedSectionsQuery = {
  response: IcpmsIngestionJobDetailPageParsedSectionsQuery$data;
  variables: IcpmsIngestionJobDetailPageParsedSectionsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "parseJobId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "parseJobId",
        "variableName": "parseJobId"
      }
    ],
    "concreteType": "IcpmsParsedDocumentSection",
    "kind": "LinkedField",
    "name": "parsedSectionsForJob",
    "plural": true,
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
        "name": "parseJobId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "parentId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "sectionType",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "sectionNumber",
        "storageKey": null
      },
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
        "name": "fullHeading",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "contentText",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "depthLevel",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "sortOrder",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "path",
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
    "name": "IcpmsIngestionJobDetailPageParsedSectionsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsIngestionJobDetailPageParsedSectionsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "667c79169939fc73588d7a0ba2e9d236",
    "id": null,
    "metadata": {},
    "name": "IcpmsIngestionJobDetailPageParsedSectionsQuery",
    "operationKind": "query",
    "text": "query IcpmsIngestionJobDetailPageParsedSectionsQuery(\n  $parseJobId: ID!\n) {\n  parsedSectionsForJob(parseJobId: $parseJobId) {\n    id\n    parseJobId\n    parentId\n    sectionType\n    sectionNumber\n    title\n    fullHeading\n    contentText\n    depthLevel\n    sortOrder\n    path\n  }\n}\n"
  }
};
})();

(node as any).hash = "6aae67d35115bcc2660b2378377a78d3";

export default node;
