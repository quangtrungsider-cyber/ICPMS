/**
 * @generated SignedSource<<3325ad2358583872b56e36c079e94a3a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type BusinessImpact = "CRITICAL" | "HIGH" | "LOW" | "MEDIUM";
export type DataSensitivity = "CRITICAL" | "HIGH" | "LOW" | "MEDIUM" | "NONE";
import { FragmentRefs } from "relay-runtime";
export type ThirdPartyRiskAssessmentTabFragment_assessment$data = {
  readonly businessImpact: BusinessImpact;
  readonly createdAt: string;
  readonly dataSensitivity: DataSensitivity;
  readonly expiresAt: string;
  readonly id: string;
  readonly notes: string | null | undefined;
  readonly " $fragmentType": "ThirdPartyRiskAssessmentTabFragment_assessment";
};
export type ThirdPartyRiskAssessmentTabFragment_assessment$key = {
  readonly " $data"?: ThirdPartyRiskAssessmentTabFragment_assessment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ThirdPartyRiskAssessmentTabFragment_assessment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ThirdPartyRiskAssessmentTabFragment_assessment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "expiresAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "dataSensitivity",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "businessImpact",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "notes",
      "storageKey": null
    }
  ],
  "type": "ThirdPartyRiskAssessment",
  "abstractKey": null
};

(node as any).hash = "1d4d2e9b72236d351835acc384d8275f";

export default node;
