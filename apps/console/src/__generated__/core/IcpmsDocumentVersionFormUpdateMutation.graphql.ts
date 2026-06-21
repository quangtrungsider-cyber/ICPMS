/**
 * @generated SignedSource<<6a6b8270bd8ac23bd2e1196b67fd4dd7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsDocumentVersionRawFileStatus = "FAILED" | "NOT_UPLOADED" | "PROCESSING" | "UPLOADED";
export type IcpmsDocumentVersionStatus = "ARCHIVED" | "CURRENT" | "DELETED" | "DRAFT" | "EFFECTIVE" | "EXPIRED" | "SUPERSEDED";
export type UpdateIcpmsDocumentVersionInput = {
  amendment?: string | null | undefined;
  changeSummary?: string | null | undefined;
  edition?: string | null | undefined;
  effectiveDate?: string | null | undefined;
  expiryDate?: string | null | undefined;
  id: string;
  isCurrent?: boolean | null | undefined;
  notes?: string | null | undefined;
  publicationDate?: string | null | undefined;
  status?: IcpmsDocumentVersionStatus | null | undefined;
  supersedesVersionId?: string | null | undefined;
  versionCode?: string | null | undefined;
  versionName?: string | null | undefined;
  versionNumber?: string | null | undefined;
};
export type IcpmsDocumentVersionFormUpdateMutation$variables = {
  input: UpdateIcpmsDocumentVersionInput;
};
export type IcpmsDocumentVersionFormUpdateMutation$data = {
  readonly updateIcpmsDocumentVersion: {
    readonly version: {
      readonly amendment: string | null | undefined;
      readonly edition: string | null | undefined;
      readonly effectiveDate: string | null | undefined;
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
export type IcpmsDocumentVersionFormUpdateMutation = {
  response: IcpmsDocumentVersionFormUpdateMutation$data;
  variables: IcpmsDocumentVersionFormUpdateMutation$variables;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateIcpmsDocumentVersionPayload",
    "kind": "LinkedField",
    "name": "updateIcpmsDocumentVersion",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsDocumentVersion",
        "kind": "LinkedField",
        "name": "version",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
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
    "name": "IcpmsDocumentVersionFormUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsDocumentVersionFormUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a63d37598a5504f7df33869579f4b2df",
    "id": null,
    "metadata": {},
    "name": "IcpmsDocumentVersionFormUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsDocumentVersionFormUpdateMutation(\n  $input: UpdateIcpmsDocumentVersionInput!\n) {\n  updateIcpmsDocumentVersion(input: $input) {\n    version {\n      id\n      versionCode\n      versionName\n      status\n      edition\n      amendment\n      versionNumber\n      effectiveDate\n      isCurrent\n      rawFileStatus\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b1fc1e9072b17a715184baea6ec3f0f0";

export default node;
