/**
 * @generated SignedSource<<769c3ee9d980bdab1efc42e372641c64>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DocumentAccessStatus = "GRANTED" | "REJECTED" | "REQUESTED" | "REVOKED";
export type RequestReportAccessInput = {
  reportId: string;
};
export type DocumentPageRequestReportAccessMutation$variables = {
  input: RequestReportAccessInput;
};
export type DocumentPageRequestReportAccessMutation$data = {
  readonly requestReportAccess: {
    readonly audit: {
      readonly reportFile: {
        readonly access: {
          readonly id: string;
          readonly status: DocumentAccessStatus;
        } | null | undefined;
      } | null | undefined;
    } | null | undefined;
  };
};
export type DocumentPageRequestReportAccessMutation = {
  response: DocumentPageRequestReportAccessMutation$data;
  variables: DocumentPageRequestReportAccessMutation$variables;
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
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "DocumentAccess",
  "kind": "LinkedField",
  "name": "access",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DocumentPageRequestReportAccessMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RequestReportAccessPayload",
        "kind": "LinkedField",
        "name": "requestReportAccess",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Audit",
            "kind": "LinkedField",
            "name": "audit",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AuditReport",
                "kind": "LinkedField",
                "name": "reportFile",
                "plural": false,
                "selections": [
                  (v3/*: any*/)
                ],
                "storageKey": null
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
    "name": "DocumentPageRequestReportAccessMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RequestReportAccessPayload",
        "kind": "LinkedField",
        "name": "requestReportAccess",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Audit",
            "kind": "LinkedField",
            "name": "audit",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AuditReport",
                "kind": "LinkedField",
                "name": "reportFile",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d74bab44151f2b43ca94d5490ce0ff84",
    "id": null,
    "metadata": {},
    "name": "DocumentPageRequestReportAccessMutation",
    "operationKind": "mutation",
    "text": "mutation DocumentPageRequestReportAccessMutation(\n  $input: RequestReportAccessInput!\n) {\n  requestReportAccess(input: $input) {\n    audit {\n      reportFile {\n        access {\n          id\n          status\n        }\n        id\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b84da645b151edcd96730b6ce91e1c94";

export default node;
