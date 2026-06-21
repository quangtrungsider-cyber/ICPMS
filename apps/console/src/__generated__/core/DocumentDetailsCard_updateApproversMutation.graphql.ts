/**
 * @generated SignedSource<<9d65c18c7330a28513ee85c36758c100>>
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
export type DocumentDetailsCard_updateApproversMutation$variables = {
  input: UpdateDocumentInput;
};
export type DocumentDetailsCard_updateApproversMutation$data = {
  readonly updateDocument: {
    readonly document: {
      readonly defaultApprovers: ReadonlyArray<{
        readonly emailAddress: string;
        readonly fullName: string;
        readonly id: string;
      }>;
      readonly id: string;
    };
  };
};
export type DocumentDetailsCard_updateApproversMutation = {
  response: DocumentDetailsCard_updateApproversMutation$data;
  variables: DocumentDetailsCard_updateApproversMutation$variables;
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
            "args": null,
            "concreteType": "Profile",
            "kind": "LinkedField",
            "name": "defaultApprovers",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fullName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "emailAddress",
                "storageKey": null
              }
            ],
            "storageKey": null
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
    "name": "DocumentDetailsCard_updateApproversMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentDetailsCard_updateApproversMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "38cbb6f0c546c798daaa57703a45b717",
    "id": null,
    "metadata": {},
    "name": "DocumentDetailsCard_updateApproversMutation",
    "operationKind": "mutation",
    "text": "mutation DocumentDetailsCard_updateApproversMutation(\n  $input: UpdateDocumentInput!\n) {\n  updateDocument(input: $input) {\n    document {\n      id\n      defaultApprovers {\n        id\n        fullName\n        emailAddress\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "78b4c515ffedb2de45de6821fa9e4dbf";

export default node;
