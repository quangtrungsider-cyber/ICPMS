/**
 * @generated SignedSource<<39767256c64061979aa9b7126bcf28e0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ThirdPartyCategory = "ANALYTICS" | "CLOUD_MONITORING" | "CLOUD_PROVIDER" | "COLLABORATION" | "CUSTOMER_SUPPORT" | "DATA_STORAGE_AND_PROCESSING" | "DOCUMENT_MANAGEMENT" | "EMPLOYEE_MANAGEMENT" | "ENGINEERING" | "FINANCE" | "IDENTITY_PROVIDER" | "IT" | "MARKETING" | "OFFICE_OPERATIONS" | "OTHER" | "PASSWORD_MANAGEMENT" | "PRODUCT_AND_DESIGN" | "PROFESSIONAL_SERVICES" | "RECRUITING" | "SALES" | "SECURITY" | "VERSION_CONTROL";
export type CreateThirdPartyThirdPartyMappingInput = {
  childThirdPartyId: string;
  parentThirdPartyId: string;
};
export type AddChildThirdPartyDialogCreateMappingMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateThirdPartyThirdPartyMappingInput;
};
export type AddChildThirdPartyDialogCreateMappingMutation$data = {
  readonly createThirdPartyThirdPartyMapping: {
    readonly thirdPartyEdge: {
      readonly node: {
        readonly category: ThirdPartyCategory;
        readonly id: string;
        readonly name: string;
        readonly websiteUrl: string | null | undefined;
      };
    };
  };
};
export type AddChildThirdPartyDialogCreateMappingMutation = {
  response: AddChildThirdPartyDialogCreateMappingMutation$data;
  variables: AddChildThirdPartyDialogCreateMappingMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "ThirdPartyEdge",
  "kind": "LinkedField",
  "name": "thirdPartyEdge",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ThirdParty",
      "kind": "LinkedField",
      "name": "node",
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
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "websiteUrl",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "category",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddChildThirdPartyDialogCreateMappingMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateThirdPartyThirdPartyMappingPayload",
        "kind": "LinkedField",
        "name": "createThirdPartyThirdPartyMapping",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "AddChildThirdPartyDialogCreateMappingMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateThirdPartyThirdPartyMappingPayload",
        "kind": "LinkedField",
        "name": "createThirdPartyThirdPartyMapping",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "prependEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "thirdPartyEdge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1e28a69b31b7a954f3de019c53a70b02",
    "id": null,
    "metadata": {},
    "name": "AddChildThirdPartyDialogCreateMappingMutation",
    "operationKind": "mutation",
    "text": "mutation AddChildThirdPartyDialogCreateMappingMutation(\n  $input: CreateThirdPartyThirdPartyMappingInput!\n) {\n  createThirdPartyThirdPartyMapping(input: $input) {\n    thirdPartyEdge {\n      node {\n        id\n        name\n        websiteUrl\n        category\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e7dcdfb20f8d3484ecc072772430ba41";

export default node;
