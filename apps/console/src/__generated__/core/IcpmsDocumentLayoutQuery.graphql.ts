/**
 * @generated SignedSource<<4409de3ff8e0ae1673b358de0254e9a0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsDocumentStatus = "ACTIVE" | "ARCHIVED" | "DELETED" | "DRAFT" | "SUPERSEDED" | "UNDER_REVIEW";
export type IcpmsDocumentType = "CANSO_GUIDANCE" | "CIRCULAR_VN" | "COMPLIANCE_DOCUMENT" | "DECISION" | "DECREE" | "EASA_EU" | "EUROCAE_RTCA" | "EUROCONTROL" | "FORM" | "GUIDANCE" | "ICAO_ANNEX" | "ICAO_APAC" | "ICAO_CIRCULAR" | "ICAO_DOC" | "INTERNAL_REGULATION" | "ISO_STANDARD" | "OTHER" | "PROCEDURE" | "SAFETY_DOCUMENT" | "TECHNICAL_DOCUMENT" | "VATM_INTERNAL";
export type IcpmsDocumentLayoutQuery$variables = {
  documentId: string;
};
export type IcpmsDocumentLayoutQuery$data = {
  readonly document: {
    readonly __typename: "IcpmsDocument";
    readonly code: string;
    readonly documentType: IcpmsDocumentType;
    readonly id: string;
    readonly status: IcpmsDocumentStatus;
    readonly title: string;
    readonly versions: {
      readonly totalCount: number;
    };
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type IcpmsDocumentLayoutQuery = {
  response: IcpmsDocumentLayoutQuery$data;
  variables: IcpmsDocumentLayoutQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "documentId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "documentId"
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
  "name": "code",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "documentType",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "first",
      "value": 0
    }
  ],
  "concreteType": "IcpmsDocumentVersionConnection",
  "kind": "LinkedField",
  "name": "versions",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCount",
      "storageKey": null
    }
  ],
  "storageKey": "versions(first:0)"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IcpmsDocumentLayoutQuery",
    "selections": [
      {
        "alias": "document",
        "args": (v1/*: any*/),
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
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/)
            ],
            "type": "IcpmsDocument",
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
    "name": "IcpmsDocumentLayoutQuery",
    "selections": [
      {
        "alias": "document",
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
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/)
            ],
            "type": "IcpmsDocument",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e3cd761c9383a7b97d5d7d6e14958e78",
    "id": null,
    "metadata": {},
    "name": "IcpmsDocumentLayoutQuery",
    "operationKind": "query",
    "text": "query IcpmsDocumentLayoutQuery(\n  $documentId: ID!\n) {\n  document: node(id: $documentId) {\n    __typename\n    ... on IcpmsDocument {\n      id\n      code\n      title\n      status\n      documentType\n      versions(first: 0) {\n        totalCount\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "679cc5bec8903e319894eb26e87bb622";

export default node;
