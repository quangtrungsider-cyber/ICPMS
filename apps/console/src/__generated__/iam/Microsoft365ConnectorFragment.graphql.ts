/**
 * @generated SignedSource<<1a6391e2feaf9bf30294cad11f7f17b1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type SCIMBridgeState = "ACTIVE" | "DISABLED" | "FAILED" | "PENDING" | "SYNCING";
export type SCIMBridgeType = "GOOGLE_WORKSPACE" | "MICROSOFT_365";
import { FragmentRefs } from "relay-runtime";
export type Microsoft365ConnectorFragment$data = {
  readonly bridge: {
    readonly connector: {
      readonly createdAt: string;
      readonly id: string;
    } | null | undefined;
    readonly excludedUserNames: ReadonlyArray<string>;
    readonly id: string;
    readonly state: SCIMBridgeState;
    readonly syncError: string | null | undefined;
    readonly type: SCIMBridgeType;
  } | null | undefined;
  readonly id: string;
  readonly " $fragmentType": "Microsoft365ConnectorFragment";
};
export type Microsoft365ConnectorFragment$key = {
  readonly " $data"?: Microsoft365ConnectorFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"Microsoft365ConnectorFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Microsoft365ConnectorFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "SCIMBridge",
      "kind": "LinkedField",
      "name": "bridge",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "state",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "syncError",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "excludedUserNames",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Connector",
          "kind": "LinkedField",
          "name": "connector",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "createdAt",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SCIMConfiguration",
  "abstractKey": null
};
})();

(node as any).hash = "3201098a6a4a5b2b875aaad02518a381";

export default node;
