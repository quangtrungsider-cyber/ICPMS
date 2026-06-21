/**
 * @generated SignedSource<<3eb93bfa854b20f07d76b0ac3af219b3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TrackerPatternDetailPageQuery$variables = {
  cookieBannerId: string;
  trackerPatternId: string;
};
export type TrackerPatternDetailPageQuery$data = {
  readonly cookieBanner: {
    readonly __typename: "CookieBanner";
    readonly id: string;
    readonly name: string;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
  readonly node: {
    readonly __typename: "TrackerPattern";
    readonly displayName: string;
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"TrackerPatternDetectedTrackersSection_trackerPattern" | "TrackerPatternPropertiesSection_trackerPattern">;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type TrackerPatternDetailPageQuery = {
  response: TrackerPatternDetailPageQuery$data;
  variables: TrackerPatternDetailPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cookieBannerId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "trackerPatternId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "cookieBannerId"
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
  "name": "name",
  "storageKey": null
},
v5 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "trackerPatternId"
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayName",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "source",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "maxAgeSeconds",
  "storageKey": null
},
v9 = [
  (v4/*: any*/),
  (v3/*: any*/)
],
v10 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 50
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "DESC",
      "field": "LAST_DETECTED_AT"
    }
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TrackerPatternDetailPageQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": "cookieBanner",
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
                (v4/*: any*/)
              ],
              "type": "CookieBanner",
              "abstractKey": null
            }
          ],
          "storageKey": null
        },
        "action": "THROW"
      },
      {
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": (v5/*: any*/),
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
                (v6/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "TrackerPatternPropertiesSection_trackerPattern"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "TrackerPatternDetectedTrackersSection_trackerPattern"
                }
              ],
              "type": "TrackerPattern",
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
    "name": "TrackerPatternDetailPageQuery",
    "selections": [
      {
        "alias": "cookieBanner",
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
              (v4/*: any*/)
            ],
            "type": "CookieBanner",
            "abstractKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v5/*: any*/),
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
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "pattern",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "matchType",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "trackerType",
                "storageKey": null
              },
              (v7/*: any*/),
              (v8/*: any*/),
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
                "name": "excluded",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "detectedCount",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lastMatchedAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "commonTrackerPatternId",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "CookieCategory",
                "kind": "LinkedField",
                "name": "cookieCategory",
                "plural": false,
                "selections": (v9/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ThirdParty",
                "kind": "LinkedField",
                "name": "thirdParty",
                "plural": false,
                "selections": (v9/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "CommonThirdParty",
                "kind": "LinkedField",
                "name": "commonThirdParty",
                "plural": false,
                "selections": (v9/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v10/*: any*/),
                "concreteType": "DetectedTrackerConnection",
                "kind": "LinkedField",
                "name": "detectedTrackers",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "DetectedTrackerEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "DetectedTracker",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "identifier",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "initiatorUrl",
                            "storageKey": null
                          },
                          (v8/*: any*/),
                          (v7/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "lastDetectedAt",
                            "storageKey": null
                          },
                          (v2/*: any*/)
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
                  },
                  {
                    "kind": "ClientExtension",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__id",
                        "storageKey": null
                      }
                    ]
                  }
                ],
                "storageKey": "detectedTrackers(first:50,orderBy:{\"direction\":\"DESC\",\"field\":\"LAST_DETECTED_AT\"})"
              },
              {
                "alias": null,
                "args": (v10/*: any*/),
                "filters": [
                  "orderBy"
                ],
                "handle": "connection",
                "key": "TrackerPatternDetectedTrackersSection_detectedTrackers",
                "kind": "LinkedHandle",
                "name": "detectedTrackers"
              }
            ],
            "type": "TrackerPattern",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e127688fbc2000b91af11715c94abe5e",
    "id": null,
    "metadata": {},
    "name": "TrackerPatternDetailPageQuery",
    "operationKind": "query",
    "text": "query TrackerPatternDetailPageQuery(\n  $cookieBannerId: ID!\n  $trackerPatternId: ID!\n) {\n  cookieBanner: node(id: $cookieBannerId) {\n    __typename\n    ... on CookieBanner {\n      id\n      name\n    }\n    id\n  }\n  node(id: $trackerPatternId) {\n    __typename\n    ... on TrackerPattern {\n      id\n      displayName\n      ...TrackerPatternPropertiesSection_trackerPattern\n      ...TrackerPatternDetectedTrackersSection_trackerPattern\n    }\n    id\n  }\n}\n\nfragment DetectedTrackerRow_detectedTracker on DetectedTracker {\n  id\n  identifier\n  initiatorUrl\n  maxAgeSeconds\n  source\n  lastDetectedAt\n}\n\nfragment TrackerPatternDetectedTrackersSection_trackerPattern on TrackerPattern {\n  detectedTrackers(first: 50, orderBy: {field: LAST_DETECTED_AT, direction: DESC}) {\n    edges {\n      node {\n        id\n        ...DetectedTrackerRow_detectedTracker\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n  id\n}\n\nfragment TrackerPatternPropertiesSection_trackerPattern on TrackerPattern {\n  pattern\n  matchType\n  trackerType\n  source\n  maxAgeSeconds\n  description\n  excluded\n  detectedCount\n  lastMatchedAt\n  commonTrackerPatternId\n  cookieCategory {\n    name\n    id\n  }\n  thirdParty {\n    name\n    id\n  }\n  commonThirdParty {\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "1f2d362550a9c7a6d9017a6d86abf498";

export default node;
