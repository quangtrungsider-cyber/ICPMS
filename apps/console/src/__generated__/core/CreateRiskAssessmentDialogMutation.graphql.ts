/**
 * @generated SignedSource<<5e54e3f2dcd6345bf4a9f4a5250c98c7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BusinessImpact = "CRITICAL" | "HIGH" | "LOW" | "MEDIUM";
export type DataSensitivity = "CRITICAL" | "HIGH" | "LOW" | "MEDIUM" | "NONE";
export type CreateThirdPartyRiskAssessmentInput = {
  businessImpact: BusinessImpact;
  dataSensitivity: DataSensitivity;
  expiresAt: string;
  notes?: string | null | undefined;
  thirdPartyId: string;
};
export type CreateRiskAssessmentDialogMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateThirdPartyRiskAssessmentInput;
};
export type CreateRiskAssessmentDialogMutation$data = {
  readonly createThirdPartyRiskAssessment: {
    readonly thirdPartyRiskAssessmentEdge: {
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"ThirdPartyRiskAssessmentTabFragment_assessment">;
      };
    };
  };
};
export type CreateRiskAssessmentDialogMutation = {
  response: CreateRiskAssessmentDialogMutation$data;
  variables: CreateRiskAssessmentDialogMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateRiskAssessmentDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateThirdPartyRiskAssessmentPayload",
        "kind": "LinkedField",
        "name": "createThirdPartyRiskAssessment",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ThirdPartyRiskAssessmentEdge",
            "kind": "LinkedField",
            "name": "thirdPartyRiskAssessmentEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ThirdPartyRiskAssessment",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "ThirdPartyRiskAssessmentTabFragment_assessment"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateRiskAssessmentDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateThirdPartyRiskAssessmentPayload",
        "kind": "LinkedField",
        "name": "createThirdPartyRiskAssessment",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ThirdPartyRiskAssessmentEdge",
            "kind": "LinkedField",
            "name": "thirdPartyRiskAssessmentEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ThirdPartyRiskAssessment",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
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
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "prependEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "thirdPartyRiskAssessmentEdge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0bf0281472346931a88847d5b120980c",
    "id": null,
    "metadata": {},
    "name": "CreateRiskAssessmentDialogMutation",
    "operationKind": "mutation",
    "text": "mutation CreateRiskAssessmentDialogMutation(\n  $input: CreateThirdPartyRiskAssessmentInput!\n) {\n  createThirdPartyRiskAssessment(input: $input) {\n    thirdPartyRiskAssessmentEdge {\n      node {\n        ...ThirdPartyRiskAssessmentTabFragment_assessment\n        id\n      }\n    }\n  }\n}\n\nfragment ThirdPartyRiskAssessmentTabFragment_assessment on ThirdPartyRiskAssessment {\n  id\n  createdAt\n  expiresAt\n  dataSensitivity\n  businessImpact\n  notes\n}\n"
  }
};
})();

(node as any).hash = "132f9808baa323742ee17da2cf2ca3a2";

export default node;
