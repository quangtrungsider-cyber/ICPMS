/**
 * @generated SignedSource<<1c15aa6d01dc04fd450b12c7a1858784>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteThirdPartyBusinessAssociateAgreementInput = {
  thirdPartyId: string;
};
export type DeleteBusinessAssociateAgreementDialogMutation$variables = {
  input: DeleteThirdPartyBusinessAssociateAgreementInput;
};
export type DeleteBusinessAssociateAgreementDialogMutation$data = {
  readonly deleteThirdPartyBusinessAssociateAgreement: {
    readonly deletedThirdPartyId: string;
  };
};
export type DeleteBusinessAssociateAgreementDialogMutation = {
  response: DeleteBusinessAssociateAgreementDialogMutation$data;
  variables: DeleteBusinessAssociateAgreementDialogMutation$variables;
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
    "concreteType": "DeleteThirdPartyBusinessAssociateAgreementPayload",
    "kind": "LinkedField",
    "name": "deleteThirdPartyBusinessAssociateAgreement",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedThirdPartyId",
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
    "name": "DeleteBusinessAssociateAgreementDialogMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteBusinessAssociateAgreementDialogMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "18da1c643fc4336edb0f36c49bf871f2",
    "id": null,
    "metadata": {},
    "name": "DeleteBusinessAssociateAgreementDialogMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteBusinessAssociateAgreementDialogMutation(\n  $input: DeleteThirdPartyBusinessAssociateAgreementInput!\n) {\n  deleteThirdPartyBusinessAssociateAgreement(input: $input) {\n    deletedThirdPartyId\n  }\n}\n"
  }
};
})();

(node as any).hash = "d39e9dc822ac50158bb2ce36f92772f4";

export default node;
