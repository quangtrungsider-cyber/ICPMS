/**
 * @generated SignedSource<<cd7f4281ef3bacea247dfc40e1fbd81b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CountryCode = "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "EU" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GLOBAL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW";
export type ThirdPartyCategory = "ANALYTICS" | "CLOUD_MONITORING" | "CLOUD_PROVIDER" | "COLLABORATION" | "CUSTOMER_SUPPORT" | "DATA_STORAGE_AND_PROCESSING" | "DOCUMENT_MANAGEMENT" | "EMPLOYEE_MANAGEMENT" | "ENGINEERING" | "FINANCE" | "IDENTITY_PROVIDER" | "IT" | "MARKETING" | "OFFICE_OPERATIONS" | "OTHER" | "PASSWORD_MANAGEMENT" | "PRODUCT_AND_DESIGN" | "PROFESSIONAL_SERVICES" | "RECRUITING" | "SALES" | "SECURITY" | "VERSION_CONTROL";
export type CreateThirdPartyInput = {
  businessAssociateAgreementUrl?: string | null | undefined;
  businessOwnerId?: string | null | undefined;
  category?: ThirdPartyCategory | null | undefined;
  certifications?: ReadonlyArray<string> | null | undefined;
  countries?: ReadonlyArray<CountryCode> | null | undefined;
  dataProcessingAgreementUrl?: string | null | undefined;
  description?: string | null | undefined;
  firstLevel?: boolean | null | undefined;
  headquarterAddress?: string | null | undefined;
  legalName?: string | null | undefined;
  name: string;
  organizationId: string;
  privacyPolicyUrl?: string | null | undefined;
  securityOwnerId?: string | null | undefined;
  securityPageUrl?: string | null | undefined;
  serviceLevelAgreementUrl?: string | null | undefined;
  statusPageUrl?: string | null | undefined;
  subprocessorsListUrl?: string | null | undefined;
  termsOfServiceUrl?: string | null | undefined;
  trustPageUrl?: string | null | undefined;
  websiteUrl?: string | null | undefined;
};
export type ThirdPartyGraphCreateMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateThirdPartyInput;
};
export type ThirdPartyGraphCreateMutation$data = {
  readonly createThirdParty: {
    readonly thirdPartyEdge: {
      readonly node: {
        readonly canDelete: boolean;
        readonly canUpdate: boolean;
        readonly createdAt: string;
        readonly description: string | null | undefined;
        readonly id: string;
        readonly name: string;
        readonly updatedAt: string;
        readonly websiteUrl: string | null | undefined;
      };
    };
  };
};
export type ThirdPartyGraphCreateMutation = {
  response: ThirdPartyGraphCreateMutation$data;
  variables: ThirdPartyGraphCreateMutation$variables;
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
          "name": "description",
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
          "name": "createdAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "updatedAt",
          "storageKey": null
        },
        {
          "alias": "canUpdate",
          "args": [
            {
              "kind": "Literal",
              "name": "action",
              "value": "core:thirdParty:update"
            }
          ],
          "kind": "ScalarField",
          "name": "permission",
          "storageKey": "permission(action:\"core:thirdParty:update\")"
        },
        {
          "alias": "canDelete",
          "args": [
            {
              "kind": "Literal",
              "name": "action",
              "value": "core:thirdParty:delete"
            }
          ],
          "kind": "ScalarField",
          "name": "permission",
          "storageKey": "permission(action:\"core:thirdParty:delete\")"
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
    "name": "ThirdPartyGraphCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateThirdPartyPayload",
        "kind": "LinkedField",
        "name": "createThirdParty",
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
    "name": "ThirdPartyGraphCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateThirdPartyPayload",
        "kind": "LinkedField",
        "name": "createThirdParty",
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
    "cacheID": "ca9e89c6e7a35090510eaa7c45ac924f",
    "id": null,
    "metadata": {},
    "name": "ThirdPartyGraphCreateMutation",
    "operationKind": "mutation",
    "text": "mutation ThirdPartyGraphCreateMutation(\n  $input: CreateThirdPartyInput!\n) {\n  createThirdParty(input: $input) {\n    thirdPartyEdge {\n      node {\n        id\n        name\n        description\n        websiteUrl\n        createdAt\n        updatedAt\n        canUpdate: permission(action: \"core:thirdParty:update\")\n        canDelete: permission(action: \"core:thirdParty:delete\")\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "16c9281af0bb9e3a8edd6db551c46d9d";

export default node;
