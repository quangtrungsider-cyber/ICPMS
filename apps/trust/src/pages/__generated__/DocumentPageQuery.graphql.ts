/**
 * @generated SignedSource<<b1c9766249970a16a48e34f76425e0df>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DocumentAccessStatus = "GRANTED" | "REJECTED" | "REQUESTED" | "REVOKED";
export type DocumentPageQuery$variables = {
  id: string;
};
export type DocumentPageQuery$data = {
  readonly currentTrustCenter: {
    readonly darkLogoFileUrl: string | null | undefined;
    readonly logoFileUrl: string | null | undefined;
  } | null | undefined;
  readonly node: {
    readonly __typename: "AuditReport";
    readonly access: {
      readonly id: string;
      readonly status: DocumentAccessStatus;
    } | null | undefined;
    readonly fileName: string;
    readonly id: string;
    readonly isUserAuthorized: boolean;
  } | {
    readonly __typename: "Document";
    readonly access: {
      readonly id: string;
      readonly status: DocumentAccessStatus;
    } | null | undefined;
    readonly id: string;
    readonly isUserAuthorized: boolean;
    readonly title: string;
  } | {
    readonly __typename: "TrustCenterFile";
    readonly access: {
      readonly id: string;
      readonly status: DocumentAccessStatus;
    } | null | undefined;
    readonly id: string;
    readonly isUserAuthorized: boolean;
    readonly name: string;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type DocumentPageQuery = {
  response: DocumentPageQuery$data;
  variables: DocumentPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "logoFileUrl",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "darkLogoFileUrl",
  "storageKey": null
},
v3 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isUserAuthorized",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "DocumentAccess",
  "kind": "LinkedField",
  "name": "access",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fileName",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DocumentPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TrustCenter",
        "kind": "LinkedField",
        "name": "currentTrustCenter",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      {
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": (v3/*: any*/),
          "concreteType": null,
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v4/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": [
                (v5/*: any*/),
                (v6/*: any*/),
                (v7/*: any*/),
                (v8/*: any*/)
              ],
              "type": "Document",
              "abstractKey": null
            },
            {
              "kind": "InlineFragment",
              "selections": [
                (v5/*: any*/),
                (v9/*: any*/),
                (v7/*: any*/),
                (v8/*: any*/)
              ],
              "type": "TrustCenterFile",
              "abstractKey": null
            },
            {
              "kind": "InlineFragment",
              "selections": [
                (v5/*: any*/),
                (v10/*: any*/),
                (v7/*: any*/),
                (v8/*: any*/)
              ],
              "type": "AuditReport",
              "abstractKey": null
            }
          ],
          "storageKey": null
        },
        "action": "THROW"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TrustCenter",
        "kind": "LinkedField",
        "name": "currentTrustCenter",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/)
            ],
            "type": "Document",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v9/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/)
            ],
            "type": "TrustCenterFile",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v10/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/)
            ],
            "type": "AuditReport",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3fc3e9ce127dfc7ff36d0d2ed4e1dfb4",
    "id": null,
    "metadata": {},
    "name": "DocumentPageQuery",
    "operationKind": "query",
    "text": "query DocumentPageQuery(\n  $id: ID!\n) {\n  currentTrustCenter {\n    logoFileUrl\n    darkLogoFileUrl\n    id\n  }\n  node(id: $id) {\n    __typename\n    ... on Document {\n      id\n      title\n      isUserAuthorized\n      access {\n        id\n        status\n      }\n    }\n    ... on TrustCenterFile {\n      id\n      name\n      isUserAuthorized\n      access {\n        id\n        status\n      }\n    }\n    ... on AuditReport {\n      id\n      fileName\n      isUserAuthorized\n      access {\n        id\n        status\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "4b7a371bd2bd03f01676fdaf8e0600ff";

export default node;
