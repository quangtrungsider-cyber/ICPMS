/**
 * @generated SignedSource<<82d54bba08774219e627a5634a9b0d1e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UploadThirdPartyDataPrivacyAgreementInput = {
  file: any;
  fileName: string;
  thirdPartyId: string;
  validFrom?: string | null | undefined;
  validUntil?: string | null | undefined;
};
export type UploadDataPrivacyAgreementDialogMutation$variables = {
  input: UploadThirdPartyDataPrivacyAgreementInput;
};
export type UploadDataPrivacyAgreementDialogMutation$data = {
  readonly uploadThirdPartyDataPrivacyAgreement: {
    readonly thirdPartyDataPrivacyAgreement: {
      readonly createdAt: string;
      readonly fileName: string;
      readonly fileUrl: string;
      readonly id: string;
      readonly validFrom: string | null | undefined;
      readonly validUntil: string | null | undefined;
    };
  };
};
export type UploadDataPrivacyAgreementDialogMutation = {
  response: UploadDataPrivacyAgreementDialogMutation$data;
  variables: UploadDataPrivacyAgreementDialogMutation$variables;
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
    "concreteType": "UploadThirdPartyDataPrivacyAgreementPayload",
    "kind": "LinkedField",
    "name": "uploadThirdPartyDataPrivacyAgreement",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ThirdPartyDataPrivacyAgreement",
        "kind": "LinkedField",
        "name": "thirdPartyDataPrivacyAgreement",
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
            "name": "fileName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "fileUrl",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "validFrom",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "validUntil",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
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
    "name": "UploadDataPrivacyAgreementDialogMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UploadDataPrivacyAgreementDialogMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "08a0b1f6abce3b3ce502d547701f0058",
    "id": null,
    "metadata": {},
    "name": "UploadDataPrivacyAgreementDialogMutation",
    "operationKind": "mutation",
    "text": "mutation UploadDataPrivacyAgreementDialogMutation(\n  $input: UploadThirdPartyDataPrivacyAgreementInput!\n) {\n  uploadThirdPartyDataPrivacyAgreement(input: $input) {\n    thirdPartyDataPrivacyAgreement {\n      id\n      fileName\n      fileUrl\n      validFrom\n      validUntil\n      createdAt\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b20c1b76977f90f45c6f44bfc8612b34";

export default node;
