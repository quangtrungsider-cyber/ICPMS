/**
 * @generated SignedSource<<76f3a90e833e3001bd302425e97469c3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UpdateThirdPartyBusinessAssociateAgreementInput = {
  thirdPartyId: string;
  validFrom?: string | null | undefined;
  validUntil?: string | null | undefined;
};
export type EditBusinessAssociateAgreementDialogMutation$variables = {
  input: UpdateThirdPartyBusinessAssociateAgreementInput;
};
export type EditBusinessAssociateAgreementDialogMutation$data = {
  readonly updateThirdPartyBusinessAssociateAgreement: {
    readonly thirdPartyBusinessAssociateAgreement: {
      readonly createdAt: string;
      readonly fileUrl: string;
      readonly id: string;
      readonly validFrom: string | null | undefined;
      readonly validUntil: string | null | undefined;
    };
  };
};
export type EditBusinessAssociateAgreementDialogMutation = {
  response: EditBusinessAssociateAgreementDialogMutation$data;
  variables: EditBusinessAssociateAgreementDialogMutation$variables;
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
    "concreteType": "UpdateThirdPartyBusinessAssociateAgreementPayload",
    "kind": "LinkedField",
    "name": "updateThirdPartyBusinessAssociateAgreement",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ThirdPartyBusinessAssociateAgreement",
        "kind": "LinkedField",
        "name": "thirdPartyBusinessAssociateAgreement",
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
    "name": "EditBusinessAssociateAgreementDialogMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditBusinessAssociateAgreementDialogMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1194c8a1c66930a5de23bb09d225d80d",
    "id": null,
    "metadata": {},
    "name": "EditBusinessAssociateAgreementDialogMutation",
    "operationKind": "mutation",
    "text": "mutation EditBusinessAssociateAgreementDialogMutation(\n  $input: UpdateThirdPartyBusinessAssociateAgreementInput!\n) {\n  updateThirdPartyBusinessAssociateAgreement(input: $input) {\n    thirdPartyBusinessAssociateAgreement {\n      id\n      fileUrl\n      validFrom\n      validUntil\n      createdAt\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "dabd30d9870bfd2aa5526ceb75174049";

export default node;
