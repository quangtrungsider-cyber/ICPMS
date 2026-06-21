/**
 * @generated SignedSource<<847987fd3c6b8d88cade76a0d21005f6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DocumentListFragment$data = {
  readonly documents: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly canArchive: boolean;
        readonly canDelete: boolean;
        readonly canRequestSignatures: boolean;
        readonly canSendSigningNotifications: boolean;
        readonly canUnarchive: boolean;
        readonly canUpdate: boolean;
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"DocumentListItemFragment">;
      };
    }>;
  };
  readonly id: string;
  readonly " $fragmentType": "DocumentListFragment";
};
export type DocumentListFragment$key = {
  readonly " $data"?: DocumentListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DocumentListFragment">;
};

import DocumentsListQuery_graphql from './DocumentsListQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "documents"
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
      "name": "classifications"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "documentTypes"
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
        "field": "TITLE"
      },
      "kind": "LocalArgument",
      "name": "order"
    },
    {
      "defaultValue": [
        "ACTIVE"
      ],
      "kind": "LocalArgument",
      "name": "status"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "writeModes"
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
      "operation": DocumentsListQuery_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "DocumentListFragment",
  "selections": [
    {
      "alias": "documents",
      "args": [
        {
          "fields": [
            {
              "kind": "Variable",
              "name": "classifications",
              "variableName": "classifications"
            },
            {
              "kind": "Variable",
              "name": "documentTypes",
              "variableName": "documentTypes"
            },
            {
              "kind": "Variable",
              "name": "status",
              "variableName": "status"
            },
            {
              "kind": "Variable",
              "name": "writeModes",
              "variableName": "writeModes"
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
      "concreteType": "DocumentConnection",
      "kind": "LinkedField",
      "name": "__DocumentsListQuery_documents_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "DocumentEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Document",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                {
                  "alias": "canUpdate",
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "action",
                      "value": "core:document:update"
                    }
                  ],
                  "kind": "ScalarField",
                  "name": "permission",
                  "storageKey": "permission(action:\"core:document:update\")"
                },
                {
                  "alias": "canDelete",
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "action",
                      "value": "core:document:delete"
                    }
                  ],
                  "kind": "ScalarField",
                  "name": "permission",
                  "storageKey": "permission(action:\"core:document:delete\")"
                },
                {
                  "alias": "canRequestSignatures",
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "action",
                      "value": "core:document-version:request-signature"
                    }
                  ],
                  "kind": "ScalarField",
                  "name": "permission",
                  "storageKey": "permission(action:\"core:document-version:request-signature\")"
                },
                {
                  "alias": "canArchive",
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "action",
                      "value": "core:document:archive"
                    }
                  ],
                  "kind": "ScalarField",
                  "name": "permission",
                  "storageKey": "permission(action:\"core:document:archive\")"
                },
                {
                  "alias": "canUnarchive",
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "action",
                      "value": "core:document:unarchive"
                    }
                  ],
                  "kind": "ScalarField",
                  "name": "permission",
                  "storageKey": "permission(action:\"core:document:unarchive\")"
                },
                {
                  "alias": "canSendSigningNotifications",
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "action",
                      "value": "core:document:send-signing-notifications"
                    }
                  ],
                  "kind": "ScalarField",
                  "name": "permission",
                  "storageKey": "permission(action:\"core:document:send-signing-notifications\")"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "DocumentListItemFragment"
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
      "storageKey": null
    },
    (v1/*: any*/)
  ],
  "type": "Organization",
  "abstractKey": null
};
})();

(node as any).hash = "210163ad82af36cf566063ed35337ab1";

export default node;
