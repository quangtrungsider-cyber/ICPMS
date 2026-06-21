/**
 * @generated SignedSource<<01fbc53ce03f8236077d191d4d8ea561>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsDocumentFileStatus = "DELETED" | "FAILED" | "UPLOADED";
export type IcpmsDocumentVersionRawFileStatus = "FAILED" | "NOT_UPLOADED" | "PROCESSING" | "UPLOADED";
export type UploadIcpmsDocumentFileInput = {
  documentVersionId: string;
  file: any;
};
export type IcpmsDocumentFileUploadDialogMutation$variables = {
  input: UploadIcpmsDocumentFileInput;
};
export type IcpmsDocumentFileUploadDialogMutation$data = {
  readonly uploadIcpmsDocumentFile: {
    readonly documentVersion: {
      readonly files: {
        readonly edges: ReadonlyArray<{
          readonly node: {
            readonly id: string;
            readonly originalFileName: string;
          };
        }>;
      };
      readonly id: string;
      readonly rawFileStatus: IcpmsDocumentVersionRawFileStatus;
    };
    readonly file: {
      readonly id: string;
      readonly originalFileName: string;
      readonly uploadStatus: IcpmsDocumentFileStatus;
    };
  };
};
export type IcpmsDocumentFileUploadDialogMutation = {
  response: IcpmsDocumentFileUploadDialogMutation$data;
  variables: IcpmsDocumentFileUploadDialogMutation$variables;
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "originalFileName",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UploadIcpmsDocumentFilePayload",
    "kind": "LinkedField",
    "name": "uploadIcpmsDocumentFile",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsDocumentFile",
        "kind": "LinkedField",
        "name": "file",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "uploadStatus",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsDocumentVersion",
        "kind": "LinkedField",
        "name": "documentVersion",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
                      (v1/*: any*/),
                      (v2/*: any*/)
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
    "name": "IcpmsDocumentFileUploadDialogMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsDocumentFileUploadDialogMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "ef587f74eb1b98bfcf9ed6c6f010475f",
    "id": null,
    "metadata": {},
    "name": "IcpmsDocumentFileUploadDialogMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsDocumentFileUploadDialogMutation(\n  $input: UploadIcpmsDocumentFileInput!\n) {\n  uploadIcpmsDocumentFile(input: $input) {\n    file {\n      id\n      originalFileName\n      uploadStatus\n    }\n    documentVersion {\n      id\n      rawFileStatus\n      files(first: 1, filter: {isActive: true}) {\n        edges {\n          node {\n            id\n            originalFileName\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f2fed925c962d29b980e45bb990683b6";

export default node;
