/**
 * @generated SignedSource<<3b13cddf9dd7d32cc8da46026f048205>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type SCIMBridgeType = "GOOGLE_WORKSPACE" | "MICROSOFT_365";
import { FragmentRefs } from "relay-runtime";
export type ConnectorListFragment$data = {
  readonly scimBridgeTypes: ReadonlyArray<{
    readonly oauth2Scopes: ReadonlyArray<string>;
    readonly type: SCIMBridgeType;
  }>;
  readonly scimConfiguration: {
    readonly bridge: {
      readonly type: SCIMBridgeType;
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"GoogleWorkspaceConnectorFragment" | "Microsoft365ConnectorFragment">;
  } | null | undefined;
  readonly " $fragmentType": "ConnectorListFragment";
};
export type ConnectorListFragment$key = {
  readonly " $data"?: ConnectorListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ConnectorListFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ConnectorListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SCIMBridgeTypeInfo",
      "kind": "LinkedField",
      "name": "scimBridgeTypes",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "oauth2Scopes",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "SCIMConfiguration",
      "kind": "LinkedField",
      "name": "scimConfiguration",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "SCIMBridge",
          "kind": "LinkedField",
          "name": "bridge",
          "plural": false,
          "selections": [
            (v0/*: any*/)
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "GoogleWorkspaceConnectorFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Microsoft365ConnectorFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Organization",
  "abstractKey": null
};
})();

(node as any).hash = "1e1fd97f2b4a848ab4840e5c61a3eb8d";

export default node;
