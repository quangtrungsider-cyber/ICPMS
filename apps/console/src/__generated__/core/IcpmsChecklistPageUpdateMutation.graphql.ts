/**
 * @generated SignedSource<<9f787bdbc57fbf684fb0ffe7921cd203>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UpdateIcpmsChecklistInput = {
  actionPlan?: string | null | undefined;
  checklistQuestion?: string | null | undefined;
  complianceDomain?: string | null | undefined;
  currentStatusText?: string | null | undefined;
  dueDays?: number | null | undefined;
  frequency?: string | null | undefined;
  id: string;
  implementationMethod?: string | null | undefined;
  priority?: string | null | undefined;
  requiredEvidence?: string | null | undefined;
  responsibleRole?: string | null | undefined;
  responsibleUnit?: string | null | undefined;
  riskIfNotComplied?: string | null | undefined;
  sourceReference?: string | null | undefined;
};
export type IcpmsChecklistPageUpdateMutation$variables = {
  input: UpdateIcpmsChecklistInput;
};
export type IcpmsChecklistPageUpdateMutation$data = {
  readonly updateIcpmsChecklist: {
    readonly checklist: {
      readonly actionPlan: string | null | undefined;
      readonly complianceDomain: string | null | undefined;
      readonly currentStatusText: string | null | undefined;
      readonly dueDays: number | null | undefined;
      readonly frequency: string | null | undefined;
      readonly id: string;
      readonly implementationMethod: string | null | undefined;
      readonly requiredEvidence: string | null | undefined;
      readonly responsibleRole: string | null | undefined;
      readonly responsibleUnit: string | null | undefined;
      readonly riskIfNotComplied: string | null | undefined;
      readonly updatedAt: string;
    };
  };
};
export type IcpmsChecklistPageUpdateMutation = {
  response: IcpmsChecklistPageUpdateMutation$data;
  variables: IcpmsChecklistPageUpdateMutation$variables;
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
    "concreteType": "UpdateIcpmsChecklistPayload",
    "kind": "LinkedField",
    "name": "updateIcpmsChecklist",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsChecklist",
        "kind": "LinkedField",
        "name": "checklist",
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
            "name": "implementationMethod",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "currentStatusText",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "actionPlan",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "requiredEvidence",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "riskIfNotComplied",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "dueDays",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "responsibleUnit",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "responsibleRole",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "complianceDomain",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "frequency",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updatedAt",
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
    "name": "IcpmsChecklistPageUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsChecklistPageUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a442c83dbe9430155ad25295936d70b8",
    "id": null,
    "metadata": {},
    "name": "IcpmsChecklistPageUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsChecklistPageUpdateMutation(\n  $input: UpdateIcpmsChecklistInput!\n) {\n  updateIcpmsChecklist(input: $input) {\n    checklist {\n      id\n      implementationMethod\n      currentStatusText\n      actionPlan\n      requiredEvidence\n      riskIfNotComplied\n      dueDays\n      responsibleUnit\n      responsibleRole\n      complianceDomain\n      frequency\n      updatedAt\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5b1cd46fc3397725735ed11dc930c33d";

export default node;
