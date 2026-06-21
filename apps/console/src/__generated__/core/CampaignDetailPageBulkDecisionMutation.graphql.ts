/**
 * @generated SignedSource<<369d1fe811402c7b636d578eca016f05>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AccessEntryDecision = "APPROVED" | "DEFER" | "ESCALATE" | "PENDING" | "REVOKE";
export type RecordAccessEntryDecisionsInput = {
  decisions: ReadonlyArray<AccessEntryDecisionInput>;
};
export type AccessEntryDecisionInput = {
  accessEntryId: string;
  decision: AccessEntryDecision;
  decisionNote?: string | null | undefined;
};
export type CampaignDetailPageBulkDecisionMutation$variables = {
  input: RecordAccessEntryDecisionsInput;
};
export type CampaignDetailPageBulkDecisionMutation$data = {
  readonly recordAccessEntryDecisions: {
    readonly accessEntries: ReadonlyArray<{
      readonly decision: AccessEntryDecision;
      readonly decisionNote: string | null | undefined;
      readonly id: string;
    }>;
  };
};
export type CampaignDetailPageBulkDecisionMutation = {
  response: CampaignDetailPageBulkDecisionMutation$data;
  variables: CampaignDetailPageBulkDecisionMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "RecordAccessEntryDecisionsPayload",
    "kind": "LinkedField",
    "name": "recordAccessEntryDecisions",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AccessEntry",
        "kind": "LinkedField",
        "name": "accessEntries",
        "plural": true,
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
            "name": "decision",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "decisionNote",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CampaignDetailPageBulkDecisionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CampaignDetailPageBulkDecisionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "da78526915341aa9e51fa318eca16cff",
    "id": null,
    "metadata": {},
    "name": "CampaignDetailPageBulkDecisionMutation",
    "operationKind": "mutation",
    "text": "mutation CampaignDetailPageBulkDecisionMutation(\n  $input: RecordAccessEntryDecisionsInput!\n) {\n  recordAccessEntryDecisions(input: $input) {\n    accessEntries {\n      id\n      decision\n      decisionNote\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "409f07eb023b2086b59da2c9dc2ae113";

export default node;
