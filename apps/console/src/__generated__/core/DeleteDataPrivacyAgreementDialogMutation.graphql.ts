/**
 * @generated SignedSource<<94f7d845dde1a8d426edce1f8ebb77e1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteThirdPartyDataPrivacyAgreementInput = {
  thirdPartyId: string;
};
export type DeleteDataPrivacyAgreementDialogMutation$variables = {
  input: DeleteThirdPartyDataPrivacyAgreementInput;
};
export type DeleteDataPrivacyAgreementDialogMutation$data = {
  readonly deleteThirdPartyDataPrivacyAgreement: {
    readonly deletedThirdPartyId: string;
  };
};
export type DeleteDataPrivacyAgreementDialogMutation = {
  response: DeleteDataPrivacyAgreementDialogMutation$data;
  variables: DeleteDataPrivacyAgreementDialogMutation$variables;
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
    "concreteType": "DeleteThirdPartyDataPrivacyAgreementPayload",
    "kind": "LinkedField",
    "name": "deleteThirdPartyDataPrivacyAgreement",
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
    "name": "DeleteDataPrivacyAgreementDialogMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteDataPrivacyAgreementDialogMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "41af37fffd45b6132061616ff63ec0ec",
    "id": null,
    "metadata": {},
    "name": "DeleteDataPrivacyAgreementDialogMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteDataPrivacyAgreementDialogMutation(\n  $input: DeleteThirdPartyDataPrivacyAgreementInput!\n) {\n  deleteThirdPartyDataPrivacyAgreement(input: $input) {\n    deletedThirdPartyId\n  }\n}\n"
  }
};
})();

(node as any).hash = "7c454dd64f4c9617167face1960e6e68";

export default node;
