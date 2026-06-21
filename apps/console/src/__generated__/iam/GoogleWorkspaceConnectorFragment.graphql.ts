/**
 * @generated SignedSource<<405cb716a8b0200adb5633e8c2479a0f>>
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
export type GoogleWorkspaceConnectorFragment$data = {
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
  readonly " $fragmentType": "GoogleWorkspaceConnectorFragment";
};
export type GoogleWorkspaceConnectorFragment$key = {
  readonly " $data"?: GoogleWorkspaceConnectorFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"GoogleWorkspaceConnectorFragment">;
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
  "name": "GoogleWorkspaceConnectorFragment",
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

(node as any).hash = "78b34594062fe6231875125bf317ed8f";

export default node;
