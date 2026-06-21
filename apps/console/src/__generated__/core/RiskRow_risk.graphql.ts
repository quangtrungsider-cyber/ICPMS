/**
 * @generated SignedSource<<4021a4f339aed62e38ba12800730266c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type RiskTreatment = "ACCEPTED" | "AVOIDED" | "MITIGATED" | "TRANSFERRED";
import { FragmentRefs } from "relay-runtime";
export type RiskRow_risk$data = {
  readonly canDelete: boolean;
  readonly canUpdate: boolean;
  readonly category: string;
  readonly id: string;
  readonly inherentRiskScore: number;
  readonly name: string;
  readonly owner: {
    readonly fullName: string;
    readonly id: string;
  } | null | undefined;
  readonly residualRiskScore: number;
  readonly treatment: RiskTreatment;
  readonly " $fragmentSpreads": FragmentRefs<"FormRiskDialog_risk">;
  readonly " $fragmentType": "RiskRow_risk";
};
export type RiskRow_risk$key = {
  readonly " $data"?: RiskRow_risk$data;
  readonly " $fragmentSpreads": FragmentRefs<"RiskRow_risk">;
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
  "name": "RiskRow_risk",
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
      "name": "treatment",
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
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "fullName",
          "storageKey": null
        }
      ],
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
      "alias": "canUpdate",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:risk:update"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:risk:update\")"
    },
    {
      "alias": "canDelete",
      "args": [
        {
          "kind": "Literal",
          "name": "action",
          "value": "core:risk:delete"
        }
      ],
      "kind": "ScalarField",
      "name": "permission",
      "storageKey": "permission(action:\"core:risk:delete\")"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FormRiskDialog_risk"
    }
  ],
  "type": "Risk",
  "abstractKey": null
};
})();

(node as any).hash = "607513f34dbd80b787ad69a59fd56168";

export default node;
