/**
 * @generated SignedSource<<9d56bfad97a7804568603ceefddca83d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AccessEntryDecision = "APPROVED" | "DEFER" | "ESCALATE" | "PENDING" | "REVOKE";
export type RecordAccessEntryDecisionInput = {
  accessEntryId: string;
  decision: AccessEntryDecision;
  decisionNote?: string | null | undefined;
};
export type EntryDecisionActionsMutation$variables = {
  input: RecordAccessEntryDecisionInput;
};
export type EntryDecisionActionsMutation$data = {
  readonly recordAccessEntryDecision: {
    readonly accessEntry: {
      readonly decision: AccessEntryDecision;
      readonly decisionNote: string | null | undefined;
      readonly id: string;
    };
  };
};
export type EntryDecisionActionsMutation = {
  response: EntryDecisionActionsMutation$data;
  variables: EntryDecisionActionsMutation$variables;
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
    "concreteType": "RecordAccessEntryDecisionPayload",
    "kind": "LinkedField",
    "name": "recordAccessEntryDecision",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AccessEntry",
        "kind": "LinkedField",
        "name": "accessEntry",
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
    "name": "EntryDecisionActionsMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EntryDecisionActionsMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d53e65ce41b840325fff22dfed78585e",
    "id": null,
    "metadata": {},
    "name": "EntryDecisionActionsMutation",
    "operationKind": "mutation",
    "text": "mutation EntryDecisionActionsMutation(\n  $input: RecordAccessEntryDecisionInput!\n) {\n  recordAccessEntryDecision(input: $input) {\n    accessEntry {\n      id\n      decision\n      decisionNote\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "fff928db978b3ac193c3f7edacbb8726";

export default node;
