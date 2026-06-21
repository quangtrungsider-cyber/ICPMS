/**
 * @generated SignedSource<<8edaf5933ef4d06e9d77111e2faf7b98>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DocumentClassification = "CONFIDENTIAL" | "INTERNAL" | "PUBLIC" | "SECRET";
export type DocumentType = "GOVERNANCE" | "OTHER" | "PLAN" | "POLICY" | "PROCEDURE" | "RECORD" | "REGISTER" | "REPORT" | "STATEMENT_OF_APPLICABILITY" | "TEMPLATE";
export type DocumentVersionStatus = "DRAFT" | "PENDING_APPROVAL" | "PUBLISHED";
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
export type DocumentDescriptionPage_updateContentMutation$variables = {
  input: UpdateDocumentInput;
};
export type DocumentDescriptionPage_updateContentMutation$data = {
  readonly updateDocument: {
    readonly document: {
      readonly id: string;
    };
    readonly documentVersion: {
      readonly content: string;
      readonly id: string;
      readonly status: DocumentVersionStatus;
    } | null | undefined;
  };
};
export type DocumentDescriptionPage_updateContentMutation = {
  response: DocumentDescriptionPage_updateContentMutation$data;
  variables: DocumentDescriptionPage_updateContentMutation$variables;
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
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "DocumentVersion",
        "kind": "LinkedField",
        "name": "documentVersion",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "content",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "status",
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
    "name": "DocumentDescriptionPage_updateContentMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentDescriptionPage_updateContentMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "ab1c4025d84edc3f592aebc912980da8",
    "id": null,
    "metadata": {},
    "name": "DocumentDescriptionPage_updateContentMutation",
    "operationKind": "mutation",
    "text": "mutation DocumentDescriptionPage_updateContentMutation(\n  $input: UpdateDocumentInput!\n) {\n  updateDocument(input: $input) {\n    document {\n      id\n    }\n    documentVersion {\n      id\n      content\n      status\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "334ecbbd3eb2f10ac3779bccadff2801";

export default node;
