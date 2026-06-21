/**
 * @generated SignedSource<<6fe27e3327c652b8f8fb5b993baa2e4a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsDocumentVersionRawFileStatus = "FAILED" | "NOT_UPLOADED" | "PROCESSING" | "UPLOADED";
export type IcpmsDocumentVersionStatus = "ARCHIVED" | "CURRENT" | "DELETED" | "DRAFT" | "EFFECTIVE" | "EXPIRED" | "SUPERSEDED";
export type CreateIcpmsDocumentVersionInput = {
  amendment?: string | null | undefined;
  changeSummary?: string | null | undefined;
  documentId: string;
  edition?: string | null | undefined;
  effectiveDate?: string | null | undefined;
  expiryDate?: string | null | undefined;
  isCurrent: boolean;
  notes?: string | null | undefined;
  publicationDate?: string | null | undefined;
  status: IcpmsDocumentVersionStatus;
  supersedesVersionId?: string | null | undefined;
  versionCode: string;
  versionName: string;
  versionNumber?: string | null | undefined;
};
export type IcpmsDocumentVersionFormMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateIcpmsDocumentVersionInput;
};
export type IcpmsDocumentVersionFormMutation$data = {
  readonly createIcpmsDocumentVersion: {
    readonly version: {
      readonly amendment: string | null | undefined;
      readonly edition: string | null | undefined;
      readonly effectiveDate: string | null | undefined;
      readonly files: {
        readonly edges: ReadonlyArray<{
          readonly node: {
            readonly id: string;
            readonly originalFileName: string;
          };
        }>;
      };
      readonly id: string;
      readonly isCurrent: boolean;
      readonly rawFileStatus: IcpmsDocumentVersionRawFileStatus;
      readonly status: IcpmsDocumentVersionStatus;
      readonly versionCode: string;
      readonly versionName: string;
      readonly versionNumber: string | null | undefined;
    };
  };
};
export type IcpmsDocumentVersionFormMutation = {
  response: IcpmsDocumentVersionFormMutation$data;
  variables: IcpmsDocumentVersionFormMutation$variables;
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
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "IcpmsDocumentVersion",
  "kind": "LinkedField",
  "name": "version",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "versionCode",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "versionName",
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
      "name": "edition",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "amendment",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "versionNumber",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "effectiveDate",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isCurrent",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rawFileStatus",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "filter",
          "value": {
            "isActive": true
          }
        },
        {
          "kind": "Literal",
          "name": "first",
          "value": 1
        }
      ],
      "concreteType": "IcpmsDocumentFileConnection",
      "kind": "LinkedField",
      "name": "files",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "IcpmsDocumentFileEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "IcpmsDocumentFile",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v3/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "originalFileName",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "files(filter:{\"isActive\":true},first:1)"
    }
  ],
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
    "name": "IcpmsDocumentVersionFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateIcpmsDocumentVersionPayload",
        "kind": "LinkedField",
        "name": "createIcpmsDocumentVersion",
        "plural": false,
        "selections": [
          (v4/*: any*/)
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
    "name": "IcpmsDocumentVersionFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateIcpmsDocumentVersionPayload",
        "kind": "LinkedField",
        "name": "createIcpmsDocumentVersion",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "prependNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "version",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "IcpmsDocumentVersionEdge"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d9431c3c19cb652bf455602c2fc13ebc",
    "id": null,
    "metadata": {},
    "name": "IcpmsDocumentVersionFormMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsDocumentVersionFormMutation(\n  $input: CreateIcpmsDocumentVersionInput!\n) {\n  createIcpmsDocumentVersion(input: $input) {\n    version {\n      id\n      versionCode\n      versionName\n      status\n      edition\n      amendment\n      versionNumber\n      effectiveDate\n      isCurrent\n      rawFileStatus\n      files(first: 1, filter: {isActive: true}) {\n        edges {\n          node {\n            id\n            originalFileName\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a2d48794371ddaa0ccef08d8d82fc0ee";

export default node;
