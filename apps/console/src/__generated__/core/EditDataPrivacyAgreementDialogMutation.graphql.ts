/**
 * @generated SignedSource<<249df5e0a30e08158297d35b316caede>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UpdateThirdPartyDataPrivacyAgreementInput = {
  thirdPartyId: string;
  validFrom?: string | null | undefined;
  validUntil?: string | null | undefined;
};
export type EditDataPrivacyAgreementDialogMutation$variables = {
  input: UpdateThirdPartyDataPrivacyAgreementInput;
};
export type EditDataPrivacyAgreementDialogMutation$data = {
  readonly updateThirdPartyDataPrivacyAgreement: {
    readonly thirdPartyDataPrivacyAgreement: {
      readonly createdAt: string;
      readonly fileUrl: string;
      readonly id: string;
      readonly validFrom: string | null | undefined;
      readonly validUntil: string | null | undefined;
    };
  };
};
export type EditDataPrivacyAgreementDialogMutation = {
  response: EditDataPrivacyAgreementDialogMutation$data;
  variables: EditDataPrivacyAgreementDialogMutation$variables;
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
    "concreteType": "UpdateThirdPartyDataPrivacyAgreementPayload",
    "kind": "LinkedField",
    "name": "updateThirdPartyDataPrivacyAgreement",
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
    "name": "EditDataPrivacyAgreementDialogMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditDataPrivacyAgreementDialogMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "dc6e37c9e66d7c6434b01f7781b97724",
    "id": null,
    "metadata": {},
    "name": "EditDataPrivacyAgreementDialogMutation",
    "operationKind": "mutation",
    "text": "mutation EditDataPrivacyAgreementDialogMutation(\n  $input: UpdateThirdPartyDataPrivacyAgreementInput!\n) {\n  updateThirdPartyDataPrivacyAgreement(input: $input) {\n    thirdPartyDataPrivacyAgreement {\n      id\n      fileUrl\n      validFrom\n      validUntil\n      createdAt\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a491be247897912039d02618c4149bb2";

export default node;
