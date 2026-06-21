/**
 * @generated SignedSource<<ed522053373504be51068eb066e2b196>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CookieCategoryKind = "NECESSARY" | "NORMAL" | "UNCATEGORISED";
export type CookieConsentAction = "ACCEPT_ALL" | "CUSTOMIZE" | "GPC" | "REJECT_ALL";
export type CountryCode = "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "EU" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GLOBAL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW";
export type Regulation = "APPI" | "CCPA" | "DPDP" | "FADP" | "GDPR" | "LFPDPPP" | "LGPD" | "NONE" | "PDPA" | "PDPL" | "PIPA" | "PIPEDA" | "PIPL" | "POPIA" | "UK_GDPR";
export type CookieBannerConsentRecordPageQuery$variables = {
  consentRecordId: string;
};
export type CookieBannerConsentRecordPageQuery$data = {
  readonly node: {
    readonly __typename: "CookieConsentRecord";
    readonly action: CookieConsentAction;
    readonly consentData: string;
    readonly cookieBanner: {
      readonly id: string;
      readonly name: string;
    };
    readonly cookieBannerVersion: {
      readonly categories: ReadonlyArray<{
        readonly cookies: ReadonlyArray<{
          readonly description: string;
          readonly maxAgeSeconds: number | null | undefined;
          readonly name: string;
        }>;
        readonly description: string;
        readonly kind: CookieCategoryKind;
        readonly name: string;
        readonly slug: string;
      }>;
      readonly id: string;
      readonly version: number;
    };
    readonly countryCode: CountryCode | null | undefined;
    readonly createdAt: string;
    readonly id: string;
    readonly ipAddress: string | null | undefined;
    readonly regulation: Regulation | null | undefined;
    readonly sdkVersion: string;
    readonly userAgent: string | null | undefined;
    readonly visitorId: string;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type CookieBannerConsentRecordPageQuery = {
  response: CookieBannerConsentRecordPageQuery$data;
  variables: CookieBannerConsentRecordPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "consentRecordId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "consentRecordId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "visitorId",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "action",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "CookieBanner",
  "kind": "LinkedField",
  "name": "cookieBanner",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v6/*: any*/)
  ],
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "CookieBannerVersion",
  "kind": "LinkedField",
  "name": "cookieBannerVersion",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "version",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "CookieBannerVersionCategory",
      "kind": "LinkedField",
      "name": "categories",
      "plural": true,
      "selections": [
        (v6/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        },
        (v8/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "kind",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "CookieBannerVersionCookie",
          "kind": "LinkedField",
          "name": "cookies",
          "plural": true,
          "selections": [
            (v6/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "maxAgeSeconds",
              "storageKey": null
            },
            (v8/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "ipAddress",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "userAgent",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sdkVersion",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "regulation",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "countryCode",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "consentData",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CookieBannerConsentRecordPageQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": (v1/*: any*/),
          "concreteType": null,
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": [
                (v3/*: any*/),
                (v4/*: any*/),
                (v5/*: any*/),
                {
                  "kind": "RequiredField",
                  "field": (v7/*: any*/),
                  "action": "THROW"
                },
                {
                  "kind": "RequiredField",
                  "field": (v9/*: any*/),
                  "action": "THROW"
                },
                (v10/*: any*/),
                (v11/*: any*/),
                (v12/*: any*/),
                (v13/*: any*/),
                (v14/*: any*/),
                (v15/*: any*/),
                (v16/*: any*/)
              ],
              "type": "CookieConsentRecord",
              "abstractKey": null
            }
          ],
          "storageKey": null
        },
        "action": "THROW"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CookieBannerConsentRecordPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v7/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/)
            ],
            "type": "CookieConsentRecord",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d726ebd2b8b7179311b06f163f7a9b16",
    "id": null,
    "metadata": {},
    "name": "CookieBannerConsentRecordPageQuery",
    "operationKind": "query",
    "text": "query CookieBannerConsentRecordPageQuery(\n  $consentRecordId: ID!\n) {\n  node(id: $consentRecordId) {\n    __typename\n    ... on CookieConsentRecord {\n      id\n      visitorId\n      action\n      cookieBanner {\n        id\n        name\n      }\n      cookieBannerVersion {\n        id\n        version\n        categories {\n          name\n          slug\n          description\n          kind\n          cookies {\n            name\n            maxAgeSeconds\n            description\n          }\n        }\n      }\n      ipAddress\n      userAgent\n      sdkVersion\n      regulation\n      countryCode\n      consentData\n      createdAt\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "b2f572e1dd59452f1ec46a421e6d3419";

export default node;
