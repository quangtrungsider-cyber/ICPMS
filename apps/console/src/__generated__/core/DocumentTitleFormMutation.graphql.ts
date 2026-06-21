/**
 * @generated SignedSource<<b4bab9aed0d8832bd2ba46dda9fe5268>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
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
export type DocumentTitleFormMutation$variables = {
  input: UpdateDocumentInput;
};
export type DocumentTitleFormMutation$data = {
  readonly updateDocument: {
    readonly documentVersion: {
      readonly " $fragmentSpreads": FragmentRefs<"DocumentTitleFormFragment">;
    } | null | undefined;
  };
};
export type DocumentTitleFormMutation = {
  response: DocumentTitleFormMutation$data;
  variables: DocumentTitleFormMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DocumentTitleFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateDocumentPayload",
        "kind": "LinkedField",
        "name": "updateDocument",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "DocumentVersion",
            "kind": "LinkedField",
            "name": "documentVersion",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "DocumentTitleFormFragment"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentTitleFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateDocumentPayload",
        "kind": "LinkedField",
        "name": "updateDocument",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "DocumentVersion",
            "kind": "LinkedField",
            "name": "documentVersion",
            "plural": false,
            "selections": [
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
                "name": "status",
                "storageKey": null
              },
              {
                "alias": "canUpdate",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "action",
                    "value": "core:document:update"
                  }
                ],
                "kind": "ScalarField",
                "name": "permission",
                "storageKey": "permission(action:\"core:document:update\")"
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "516bc4d2f3f04140fef7b9c18cda3d0b",
    "id": null,
    "metadata": {},
    "name": "DocumentTitleFormMutation",
    "operationKind": "mutation",
    "text": "mutation DocumentTitleFormMutation(\n  $input: UpdateDocumentInput!\n) {\n  updateDocument(input: $input) {\n    documentVersion {\n      ...DocumentTitleFormFragment\n      id\n    }\n  }\n}\n\nfragment DocumentTitleFormFragment on DocumentVersion {\n  title\n  status\n  canUpdate: permission(action: \"core:document:update\")\n}\n"
  }
};
})();

(node as any).hash = "e5f65384872edded2496de6601b64248";

export default node;
