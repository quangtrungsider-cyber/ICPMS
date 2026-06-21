/**
 * @generated SignedSource<<1d9ad5c497638c701a2e8ce0093738af>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsDocumentApplicability = "NO" | "REVIEW" | "YES";
export type IcpmsDocumentClassification = "INTERNAL" | "PUBLIC" | "RESTRICTED";
export type IcpmsDocumentGroup = "CANSO" | "EASA_EU" | "EUROCAE_RTCA" | "EUROCONTROL" | "ICAO" | "ICAO_APAC" | "ISO" | "OTHER" | "VATM" | "VIETNAM_LEGAL";
export type IcpmsDocumentPriority = "HIGH" | "LOW" | "MEDIUM";
export type IcpmsDocumentDescriptionTabQuery$variables = {
  documentId: string;
};
export type IcpmsDocumentDescriptionTabQuery$data = {
  readonly document: {
    readonly __typename: "IcpmsDocument";
    readonly applicableToVatm: IcpmsDocumentApplicability | null | undefined;
    readonly classification: IcpmsDocumentClassification | null | undefined;
    readonly description: string | null | undefined;
    readonly documentGroup: IcpmsDocumentGroup | null | undefined;
    readonly effectiveDate: string | null | undefined;
    readonly id: string;
    readonly issuedDate: string | null | undefined;
    readonly issuer: string | null | undefined;
    readonly language: string | null | undefined;
    readonly mainDomain: string | null | undefined;
    readonly notes: string | null | undefined;
    readonly pageCount: number | null | undefined;
    readonly priority: IcpmsDocumentPriority | null | undefined;
    readonly sourceOrganization: string | null | undefined;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type IcpmsDocumentDescriptionTabQuery = {
  response: IcpmsDocumentDescriptionTabQuery$data;
  variables: IcpmsDocumentDescriptionTabQuery$variables;
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
  "name": "description",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "documentGroup",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sourceOrganization",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "issuer",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "mainDomain",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "pageCount",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "issuedDate",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "effectiveDate",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "language",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "classification",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "applicableToVatm",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "priority",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "notes",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IcpmsDocumentDescriptionTabQuery",
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
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/)
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
    "name": "IcpmsDocumentDescriptionTabQuery",
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
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/)
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
    "cacheID": "f90c7a1e10ca283c905bc5f101c6f781",
    "id": null,
    "metadata": {},
    "name": "IcpmsDocumentDescriptionTabQuery",
    "operationKind": "query",
    "text": "query IcpmsDocumentDescriptionTabQuery(\n  $documentId: ID!\n) {\n  document: node(id: $documentId) {\n    __typename\n    ... on IcpmsDocument {\n      id\n      description\n      documentGroup\n      sourceOrganization\n      issuer\n      mainDomain\n      pageCount\n      issuedDate\n      effectiveDate\n      language\n      classification\n      applicableToVatm\n      priority\n      notes\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "4ae26e77083b0ed30aea060889e0982f";

export default node;
