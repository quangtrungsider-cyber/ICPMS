/**
 * @generated SignedSource<<2d996fa43c726f459c162fe04134e7f4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DocumentDetailsCard_documentFragment$data = {
  readonly archivedAt: string | null | undefined;
  readonly canUpdate: boolean;
  readonly defaultApprovers: ReadonlyArray<{
    readonly emailAddress: string;
    readonly fullName: string;
    readonly id: string;
  }>;
  readonly id: string;
  readonly " $fragmentType": "DocumentDetailsCard_documentFragment";
};
export type DocumentDetailsCard_documentFragment$key = {
  readonly " $data"?: DocumentDetailsCard_documentFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DocumentDetailsCard_documentFragment">;
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
  "name": "DocumentDetailsCard_documentFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "archivedAt",
      "storageKey": null
    },
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
      "alias": null,
      "args": null,
      "concreteType": "Profile",
      "kind": "LinkedField",
      "name": "defaultApprovers",
      "plural": true,
      "selections": [
        (v0/*: any*/),
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Document",
  "abstractKey": null
};
})();

(node as any).hash = "be17ba64458641c604133e544c6fab69";

export default node;
