/**
 * @generated SignedSource<<ff0d00cc659f37914d00aec12f7c8a55>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CookieBannerConsentRecordsPageFragment$data = {
  readonly consentRecords: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"ConsentRecordRowFragment">;
      };
    }>;
  };
  readonly id: string;
  readonly " $fragmentType": "CookieBannerConsentRecordsPageFragment";
};
export type CookieBannerConsentRecordsPageFragment$key = {
  readonly " $data"?: CookieBannerConsentRecordsPageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CookieBannerConsentRecordsPageFragment">;
};

import CookieBannerConsentRecordsPageRefetchQuery_graphql from './CookieBannerConsentRecordsPageRefetchQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "consentRecords"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "action"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "before"
    },
    {
      "defaultValue": 50,
      "kind": "LocalArgument",
      "name": "first"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "last"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "order"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "version"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "visitorId"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "bidirectional",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": {
          "count": "last",
          "cursor": "before"
        },
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": CookieBannerConsentRecordsPageRefetchQuery_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "CookieBannerConsentRecordsPageFragment",
  "selections": [
    {
      "kind": "RequiredField",
      "field": {
        "alias": "consentRecords",
        "args": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "action",
                "variableName": "action"
              },
              {
                "kind": "Variable",
                "name": "version",
                "variableName": "version"
              },
              {
                "kind": "Variable",
                "name": "visitorId",
                "variableName": "visitorId"
              }
            ],
            "kind": "ObjectValue",
            "name": "filter"
          },
          {
            "kind": "Variable",
            "name": "orderBy",
            "variableName": "order"
          }
        ],
        "concreteType": "CookieConsentRecordConnection",
        "kind": "LinkedField",
        "name": "__CookieBannerConsentRecordsPage_consentRecords_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CookieConsentRecordEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CookieConsentRecord",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "ConsentRecordRowFragment"
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      "action": "THROW"
    },
    (v1/*: any*/)
  ],
  "type": "CookieBanner",
  "abstractKey": null
};
})();

(node as any).hash = "c74090291ebdc30c286330abbecebbef";

export default node;
