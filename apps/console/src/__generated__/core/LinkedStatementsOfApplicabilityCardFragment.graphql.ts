/**
 * @generated SignedSource<<7351871479504b4ff2b91c2a89698b72>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LinkedStatementsOfApplicabilityCardFragment$data = {
  readonly applicability: boolean;
  readonly control: {
    readonly id: string;
  };
  readonly id: string;
  readonly justification: string;
  readonly statementOfApplicability: {
    readonly id: string;
    readonly name: string;
  };
  readonly " $fragmentType": "LinkedStatementsOfApplicabilityCardFragment";
};
export type LinkedStatementsOfApplicabilityCardFragment$key = {
  readonly " $data"?: LinkedStatementsOfApplicabilityCardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"LinkedStatementsOfApplicabilityCardFragment">;
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
  "name": "LinkedStatementsOfApplicabilityCardFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "StatementOfApplicability",
      "kind": "LinkedField",
      "name": "statementOfApplicability",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Control",
      "kind": "LinkedField",
      "name": "control",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "applicability",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "justification",
      "storageKey": null
    }
  ],
  "type": "ApplicabilityStatement",
  "abstractKey": null
};
})();

(node as any).hash = "75ab55232e24caade99139f9ee1da59e";

export default node;
