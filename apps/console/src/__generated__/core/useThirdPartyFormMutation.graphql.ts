/**
 * @generated SignedSource<<5ce08177e70af5c1d7d62aebe01e755e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CountryCode = "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "EU" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GLOBAL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW";
export type ThirdPartyCategory = "ANALYTICS" | "CLOUD_MONITORING" | "CLOUD_PROVIDER" | "COLLABORATION" | "CUSTOMER_SUPPORT" | "DATA_STORAGE_AND_PROCESSING" | "DOCUMENT_MANAGEMENT" | "EMPLOYEE_MANAGEMENT" | "ENGINEERING" | "FINANCE" | "IDENTITY_PROVIDER" | "IT" | "MARKETING" | "OFFICE_OPERATIONS" | "OTHER" | "PASSWORD_MANAGEMENT" | "PRODUCT_AND_DESIGN" | "PROFESSIONAL_SERVICES" | "RECRUITING" | "SALES" | "SECURITY" | "VERSION_CONTROL";
export type UpdateThirdPartyInput = {
  businessAssociateAgreementUrl?: string | null | undefined;
  businessOwnerId?: string | null | undefined;
  category?: ThirdPartyCategory | null | undefined;
  certifications?: ReadonlyArray<string> | null | undefined;
  countries?: ReadonlyArray<CountryCode> | null | undefined;
  dataProcessingAgreementUrl?: string | null | undefined;
  description?: string | null | undefined;
  firstLevel?: boolean | null | undefined;
  headquarterAddress?: string | null | undefined;
  id: string;
  legalName?: string | null | undefined;
  name?: string | null | undefined;
  privacyPolicyUrl?: string | null | undefined;
  securityOwnerId?: string | null | undefined;
  securityPageUrl?: string | null | undefined;
  serviceLevelAgreementUrl?: string | null | undefined;
  showOnTrustCenter?: boolean | null | undefined;
  statusPageUrl?: string | null | undefined;
  subprocessorsListUrl?: string | null | undefined;
  termsOfServiceUrl?: string | null | undefined;
  trustPageUrl?: string | null | undefined;
  websiteUrl?: string | null | undefined;
};
export type useThirdPartyFormMutation$variables = {
  input: UpdateThirdPartyInput;
};
export type useThirdPartyFormMutation$data = {
  readonly updateThirdParty: {
    readonly thirdParty: {
      readonly " $fragmentSpreads": FragmentRefs<"useThirdPartyFormFragment">;
    };
  };
};
export type useThirdPartyFormMutation = {
  response: useThirdPartyFormMutation$data;
  variables: useThirdPartyFormMutation$variables;
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useThirdPartyFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateThirdPartyPayload",
        "kind": "LinkedField",
        "name": "updateThirdParty",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ThirdParty",
            "kind": "LinkedField",
            "name": "thirdParty",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "useThirdPartyFormFragment"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useThirdPartyFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateThirdPartyPayload",
        "kind": "LinkedField",
        "name": "updateThirdParty",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ThirdParty",
            "kind": "LinkedField",
            "name": "thirdParty",
            "plural": false,
            "selections": [
              (v2/*: any*/),
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
                "name": "category",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "statusPageUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "termsOfServiceUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "privacyPolicyUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "serviceLevelAgreementUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "dataProcessingAgreementUrl",
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
                "name": "legalName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "headquarterAddress",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "certifications",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "countries",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "securityPageUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "trustPageUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Profile",
                "kind": "LinkedField",
                "name": "businessOwner",
                "plural": false,
                "selections": (v3/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Profile",
                "kind": "LinkedField",
                "name": "securityOwner",
                "plural": false,
                "selections": (v3/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9ca219f319ab4d482aae246396fb47d1",
    "id": null,
    "metadata": {},
    "name": "useThirdPartyFormMutation",
    "operationKind": "mutation",
    "text": "mutation useThirdPartyFormMutation(\n  $input: UpdateThirdPartyInput!\n) {\n  updateThirdParty(input: $input) {\n    thirdParty {\n      ...useThirdPartyFormFragment\n      id\n    }\n  }\n}\n\nfragment useThirdPartyFormFragment on ThirdParty {\n  id\n  name\n  description\n  category\n  statusPageUrl\n  termsOfServiceUrl\n  privacyPolicyUrl\n  serviceLevelAgreementUrl\n  dataProcessingAgreementUrl\n  websiteUrl\n  legalName\n  headquarterAddress\n  certifications\n  countries\n  securityPageUrl\n  trustPageUrl\n  businessOwner {\n    id\n  }\n  securityOwner {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "7177193b47bfa7bdf891e884355ff11e";

export default node;
