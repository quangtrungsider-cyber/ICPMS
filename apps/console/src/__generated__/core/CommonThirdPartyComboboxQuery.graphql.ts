/**
 * @generated SignedSource<<7e80fcf5918c2e5175832c4d864d92c3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommonThirdPartyComboboxQuery$variables = {
  name: string;
};
export type CommonThirdPartyComboboxQuery$data = {
  readonly commonThirdParties: ReadonlyArray<{
    readonly id: string;
    readonly logoUrl: string | null | undefined;
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"CommonThirdPartyCombobox_commonThirdParty">;
  }>;
};
export type CommonThirdPartyComboboxQuery = {
  response: CommonThirdPartyComboboxQuery$data;
  variables: CommonThirdPartyComboboxQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
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
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "logoUrl",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "category",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "websiteUrl",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "headquarterAddress",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "legalName",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "privacyPolicyUrl",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "serviceLevelAgreementUrl",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dataProcessingAgreementUrl",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "certifications",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "securityPageUrl",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "trustPageUrl",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "statusPageUrl",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "termsOfServiceUrl",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CommonThirdPartyComboboxQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CommonThirdParty",
        "kind": "LinkedField",
        "name": "commonThirdParties",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "InlineDataFragmentSpread",
            "name": "CommonThirdPartyCombobox_commonThirdParty",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/)
            ],
            "args": null,
            "argumentDefinitions": []
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CommonThirdPartyComboboxQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CommonThirdParty",
        "kind": "LinkedField",
        "name": "commonThirdParties",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          (v14/*: any*/),
          (v15/*: any*/),
          (v16/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e0b437be5f2f2897141a51e3f1c51a8a",
    "id": null,
    "metadata": {},
    "name": "CommonThirdPartyComboboxQuery",
    "operationKind": "query",
    "text": "query CommonThirdPartyComboboxQuery(\n  $name: String!\n) {\n  commonThirdParties(name: $name) {\n    id\n    name\n    logoUrl\n    ...CommonThirdPartyCombobox_commonThirdParty\n  }\n}\n\nfragment CommonThirdPartyCombobox_commonThirdParty on CommonThirdParty {\n  name\n  logoUrl\n  category\n  websiteUrl\n  headquarterAddress\n  legalName\n  privacyPolicyUrl\n  serviceLevelAgreementUrl\n  dataProcessingAgreementUrl\n  certifications\n  securityPageUrl\n  trustPageUrl\n  statusPageUrl\n  termsOfServiceUrl\n}\n"
  }
};
})();

(node as any).hash = "3fe67bfff24e588fd1ccfc871e68bc8d";

export default node;
