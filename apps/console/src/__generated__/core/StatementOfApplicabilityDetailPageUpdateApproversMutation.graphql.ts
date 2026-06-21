/**
 * @generated SignedSource<<168620991446df4261af9a911d7f7c7f>>
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
export type StatementOfApplicabilityDetailPageUpdateApproversMutation$variables = {
  input: UpdateDocumentInput;
};
export type StatementOfApplicabilityDetailPageUpdateApproversMutation$data = {
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
export type StatementOfApplicabilityDetailPageUpdateApproversMutation = {
  response: StatementOfApplicabilityDetailPageUpdateApproversMutation$data;
  variables: StatementOfApplicabilityDetailPageUpdateApproversMutation$variables;
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
    "name": "StatementOfApplicabilityDetailPageUpdateApproversMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "StatementOfApplicabilityDetailPageUpdateApproversMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "8c71c0443d8b9133e55f28eef2f842f6",
    "id": null,
    "metadata": {},
    "name": "StatementOfApplicabilityDetailPageUpdateApproversMutation",
    "operationKind": "mutation",
    "text": "mutation StatementOfApplicabilityDetailPageUpdateApproversMutation(\n  $input: UpdateDocumentInput!\n) {\n  updateDocument(input: $input) {\n    document {\n      id\n      defaultApprovers {\n        id\n        fullName\n        emailAddress\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "fd93307a9f4635c4b34825169e714d3a";

export default node;
