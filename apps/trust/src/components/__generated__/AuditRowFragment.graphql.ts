/**
 * @generated SignedSource<<a1e6bdb198541a37a2d5805155c193cf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type DocumentAccessStatus = "GRANTED" | "REJECTED" | "REQUESTED" | "REVOKED";
import { FragmentRefs } from "relay-runtime";
export type AuditRowFragment$data = {
  readonly framework: {
    readonly darkLogoURL: string | null | undefined;
    readonly id: string;
    readonly lightLogoURL: string | null | undefined;
    readonly name: string;
  };
  readonly name: string | null | undefined;
  readonly reportFile: {
    readonly access: {
      readonly id: string;
      readonly status: DocumentAccessStatus;
    } | null | undefined;
    readonly id: string;
    readonly isUserAuthorized: boolean;
  } | null | undefined;
  readonly " $fragmentType": "AuditRowFragment";
};
export type AuditRowFragment$key = {
  readonly " $data"?: AuditRowFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AuditRowFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
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
  "name": "AuditRowFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "AuditReport",
      "kind": "LinkedField",
      "name": "reportFile",
      "plural": false,
      "selections": [
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isUserAuthorized",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "DocumentAccess",
          "kind": "LinkedField",
          "name": "access",
          "plural": false,
          "selections": [
            (v1/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "status",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Framework",
      "kind": "LinkedField",
      "name": "framework",
      "plural": false,
      "selections": [
        (v1/*: any*/),
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "lightLogoURL",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "darkLogoURL",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Audit",
  "abstractKey": null
};
})();

(node as any).hash = "f1b570a01e7a73553f59318cde22fd23";

export default node;
