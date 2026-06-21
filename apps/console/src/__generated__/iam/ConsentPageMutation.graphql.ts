/**
 * @generated SignedSource<<5a0588b41f0120bf68ee27a37a7e0343>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ApproveConsentInput = {
  approved: boolean;
  consentId: string;
};
export type ConsentPageMutation$variables = {
  input: ApproveConsentInput;
};
export type ConsentPageMutation$data = {
  readonly approveConsent: {
    readonly deviceAuthorized: boolean | null | undefined;
    readonly redirectURL: string | null | undefined;
  } | null | undefined;
};
export type ConsentPageMutation = {
  response: ConsentPageMutation$data;
  variables: ConsentPageMutation$variables;
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
    "concreteType": "ApproveConsentPayload",
    "kind": "LinkedField",
    "name": "approveConsent",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "redirectURL",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deviceAuthorized",
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
    "name": "ConsentPageMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ConsentPageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3eb735a151f3c97c923c18675324dd28",
    "id": null,
    "metadata": {},
    "name": "ConsentPageMutation",
    "operationKind": "mutation",
    "text": "mutation ConsentPageMutation(\n  $input: ApproveConsentInput!\n) {\n  approveConsent(input: $input) {\n    redirectURL\n    deviceAuthorized\n  }\n}\n"
  }
};
})();

(node as any).hash = "cf9594d88d9b6e3bb1804f7620079335";

export default node;
