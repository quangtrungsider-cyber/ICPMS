/**
 * @generated SignedSource<<c60ced52a91ba9723b3f24479b582309>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type RiskTreatment = "ACCEPTED" | "AVOIDED" | "MITIGATED" | "TRANSFERRED";
import { FragmentRefs } from "relay-runtime";
export type FormRiskDialog_risk$data = {
  readonly category: string;
  readonly description: string | null | undefined;
  readonly id: string;
  readonly inherentImpact: number;
  readonly inherentLikelihood: number;
  readonly inherentRiskScore: number;
  readonly name: string;
  readonly note: string;
  readonly owner: {
    readonly id: string;
  } | null | undefined;
  readonly residualImpact: number;
  readonly residualLikelihood: number;
  readonly residualRiskScore: number;
  readonly treatment: RiskTreatment;
  readonly " $fragmentType": "FormRiskDialog_risk";
};
export type FormRiskDialog_risk$key = {
  readonly " $data"?: FormRiskDialog_risk$data;
  readonly " $fragmentSpreads": FragmentRefs<"FormRiskDialog_risk">;
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
  "name": "FormRiskDialog_risk",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "category",
      "storageKey": null
    },
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
      "name": "treatment",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "inherentLikelihood",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "inherentImpact",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "residualLikelihood",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "residualImpact",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "inherentRiskScore",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "residualRiskScore",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "note",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Profile",
      "kind": "LinkedField",
      "name": "owner",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Risk",
  "abstractKey": null
};
})();

(node as any).hash = "56178868f6a89b9a7f320eb93ec48730";

export default node;
