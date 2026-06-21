/**
 * @generated SignedSource<<27f20880c3b566063ca00f6d30dfcf14>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsDocumentGroup = "CANSO" | "EASA_EU" | "EUROCAE_RTCA" | "EUROCONTROL" | "ICAO" | "ICAO_APAC" | "ISO" | "OTHER" | "VATM" | "VIETNAM_LEGAL";
export type IcpmsDocumentStatus = "ACTIVE" | "ARCHIVED" | "DELETED" | "DRAFT" | "SUPERSEDED" | "UNDER_REVIEW";
export type IcpmsDocumentType = "CANSO_GUIDANCE" | "CIRCULAR_VN" | "COMPLIANCE_DOCUMENT" | "DECISION" | "DECREE" | "EASA_EU" | "EUROCAE_RTCA" | "EUROCONTROL" | "FORM" | "GUIDANCE" | "ICAO_ANNEX" | "ICAO_APAC" | "ICAO_CIRCULAR" | "ICAO_DOC" | "INTERNAL_REGULATION" | "ISO_STANDARD" | "OTHER" | "PROCEDURE" | "SAFETY_DOCUMENT" | "TECHNICAL_DOCUMENT" | "VATM_INTERNAL";
export type IcpmsDocumentsPageQuery$variables = {
  organizationId: string;
};
export type IcpmsDocumentsPageQuery$data = {
  readonly organization: {
    readonly icpmsDocuments?: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly code: string;
          readonly createdAt: string;
          readonly documentCode: string | null | undefined;
          readonly documentGroup: IcpmsDocumentGroup | null | undefined;
          readonly documentType: IcpmsDocumentType;
          readonly id: string;
          readonly mainDomain: string | null | undefined;
          readonly pageCount: number | null | undefined;
          readonly status: IcpmsDocumentStatus;
          readonly title: string;
        };
      }>;
    };
    readonly id?: string;
    readonly name?: string;
  };
};
export type IcpmsDocumentsPageQuery = {
  response: IcpmsDocumentsPageQuery$data;
  variables: IcpmsDocumentsPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "organizationId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "organizationId"
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
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "first",
      "value": 1000
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
  "concreteType": "IcpmsDocumentConnection",
  "kind": "LinkedField",
  "name": "icpmsDocuments",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "IcpmsDocumentEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "IcpmsDocument",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "code",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "documentCode",
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
              "name": "documentType",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "documentGroup",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "mainDomain",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "pageCount",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "status",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "createdAt",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "icpmsDocuments(first:1000,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IcpmsDocumentsPageQuery",
    "selections": [
      {
        "alias": "organization",
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
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "type": "Organization",
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
    "name": "IcpmsDocumentsPageQuery",
    "selections": [
      {
        "alias": "organization",
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
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "type": "Organization",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3d742e396fa2aea61c40624f013d627e",
    "id": null,
    "metadata": {},
    "name": "IcpmsDocumentsPageQuery",
    "operationKind": "query",
    "text": "query IcpmsDocumentsPageQuery(\n  $organizationId: ID!\n) {\n  organization: node(id: $organizationId) {\n    __typename\n    ... on Organization {\n      id\n      name\n      icpmsDocuments(first: 1000, orderBy: {field: CREATED_AT, direction: DESC}) {\n        edges {\n          node {\n            id\n            code\n            documentCode\n            title\n            documentType\n            documentGroup\n            mainDomain\n            pageCount\n            status\n            createdAt\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "c09ab4781c2c2a30bcd0d2c3f9dc542b";

export default node;
