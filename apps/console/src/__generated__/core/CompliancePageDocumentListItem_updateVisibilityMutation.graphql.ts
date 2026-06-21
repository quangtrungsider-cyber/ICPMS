/**
 * @generated SignedSource<<e1d6b68848743228f32241f81db6ca15>>
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
export type CompliancePageDocumentListItem_updateVisibilityMutation$variables = {
  input: UpdateDocumentInput;
};
export type CompliancePageDocumentListItem_updateVisibilityMutation$data = {
  readonly updateDocument: {
    readonly document: {
      readonly " $fragmentSpreads": FragmentRefs<"CompliancePageDocumentListItem_documentFragment">;
    };
  };
};
export type CompliancePageDocumentListItem_updateVisibilityMutation = {
  response: CompliancePageDocumentListItem_updateVisibilityMutation$data;
  variables: CompliancePageDocumentListItem_updateVisibilityMutation$variables;
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
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CompliancePageDocumentListItem_updateVisibilityMutation",
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
            "concreteType": "Document",
            "kind": "LinkedField",
            "name": "document",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CompliancePageDocumentListItem_documentFragment"
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
    "name": "CompliancePageDocumentListItem_updateVisibilityMutation",
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
            "concreteType": "Document",
            "kind": "LinkedField",
            "name": "document",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "trustCenterVisibility",
                "storageKey": null
              },
              {
                "alias": "latestPublishedVersion",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "filter",
                    "value": {
                      "statuses": [
                        "PUBLISHED"
                      ]
                    }
                  },
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 1
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
                "concreteType": "DocumentVersionConnection",
                "kind": "LinkedField",
                "name": "versions",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "DocumentVersionEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "DocumentVersion",
                        "kind": "LinkedField",
                        "name": "node",
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
                            "name": "documentType",
                            "storageKey": null
                          },
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "versions(filter:{\"statuses\":[\"PUBLISHED\"]},first:1,orderBy:{\"direction\":\"DESC\",\"field\":\"CREATED_AT\"})"
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
    "cacheID": "ad433ea183f7576658b5bdc448d9737b",
    "id": null,
    "metadata": {},
    "name": "CompliancePageDocumentListItem_updateVisibilityMutation",
    "operationKind": "mutation",
    "text": "mutation CompliancePageDocumentListItem_updateVisibilityMutation(\n  $input: UpdateDocumentInput!\n) {\n  updateDocument(input: $input) {\n    document {\n      ...CompliancePageDocumentListItem_documentFragment\n      id\n    }\n  }\n}\n\nfragment CompliancePageDocumentListItem_documentFragment on Document {\n  id\n  trustCenterVisibility\n  latestPublishedVersion: versions(first: 1, orderBy: {field: CREATED_AT, direction: DESC}, filter: {statuses: [PUBLISHED]}) {\n    edges {\n      node {\n        title\n        documentType\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3f49f1e719ba93bc8cc69c483d50e225";

export default node;
