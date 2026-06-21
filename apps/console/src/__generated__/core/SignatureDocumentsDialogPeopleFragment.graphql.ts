/**
 * @generated SignedSource<<102a24642dc7e06b8aa871b32ef2e306>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SignatureDocumentsDialogPeopleFragment$data = {
  readonly id: string;
  readonly profiles: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly emailAddress: string;
        readonly fullName: string;
        readonly id: string;
      };
    }>;
  };
  readonly " $fragmentType": "SignatureDocumentsDialogPeopleFragment";
};
export type SignatureDocumentsDialogPeopleFragment$key = {
  readonly " $data"?: SignatureDocumentsDialogPeopleFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SignatureDocumentsDialogPeopleFragment">;
};

import SignatureDocumentsDialogPeopleRefetchQuery_graphql from './SignatureDocumentsDialogPeopleRefetchQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "profiles"
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
      "name": "after"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "before"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "filter"
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
      "defaultValue": {
        "direction": "ASC",
        "field": "FULL_NAME"
      },
      "kind": "LocalArgument",
      "name": "order"
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
      "operation": SignatureDocumentsDialogPeopleRefetchQuery_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "SignatureDocumentsDialogPeopleFragment",
  "selections": [
    {
      "alias": "profiles",
      "args": [
        {
          "kind": "Variable",
          "name": "filter",
          "variableName": "filter"
        },
        {
          "kind": "Variable",
          "name": "orderBy",
          "variableName": "order"
        }
      ],
      "concreteType": "ProfileConnection",
      "kind": "LinkedField",
      "name": "__SignatureDocumentsDialog_profiles_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ProfileEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Profile",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "fullName",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "emailAddress",
                  "storageKey": null
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
    (v1/*: any*/)
  ],
  "type": "Organization",
  "abstractKey": null
};
})();

(node as any).hash = "d536ff94a70315b45aa85dd46e7c3de5";

export default node;
