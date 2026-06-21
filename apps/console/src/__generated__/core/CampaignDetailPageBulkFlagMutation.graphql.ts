/**
 * @generated SignedSource<<45e731ec4e2fbf3bfb57c30b07d89e40>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AccessEntryFlag = "CONTRACTOR_EXPIRED" | "DORMANT" | "EXCESSIVE" | "INACTIVE" | "NEW" | "NONE" | "NO_BUSINESS_JUSTIFICATION" | "ORPHANED" | "OUT_OF_DEPARTMENT" | "PRIVILEGED_ACCESS" | "ROLE_CREEP" | "ROLE_MISMATCH" | "SHARED_ACCOUNT" | "SOD_CONFLICT" | "TERMINATED_USER";
export type FlagAccessEntryInput = {
  accessEntryId: string;
  flagReasons?: ReadonlyArray<string> | null | undefined;
  flags: ReadonlyArray<AccessEntryFlag>;
};
export type CampaignDetailPageBulkFlagMutation$variables = {
  input: FlagAccessEntryInput;
};
export type CampaignDetailPageBulkFlagMutation$data = {
  readonly flagAccessEntry: {
    readonly accessEntry: {
      readonly flagReasons: ReadonlyArray<string>;
      readonly flags: ReadonlyArray<AccessEntryFlag>;
      readonly id: string;
    };
  };
};
export type CampaignDetailPageBulkFlagMutation = {
  response: CampaignDetailPageBulkFlagMutation$data;
  variables: CampaignDetailPageBulkFlagMutation$variables;
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
    "concreteType": "FlagAccessEntryPayload",
    "kind": "LinkedField",
    "name": "flagAccessEntry",
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
            "name": "flags",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "flagReasons",
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
    "name": "CampaignDetailPageBulkFlagMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CampaignDetailPageBulkFlagMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3ad4af86a58c54dc2e7f313a06604f12",
    "id": null,
    "metadata": {},
    "name": "CampaignDetailPageBulkFlagMutation",
    "operationKind": "mutation",
    "text": "mutation CampaignDetailPageBulkFlagMutation(\n  $input: FlagAccessEntryInput!\n) {\n  flagAccessEntry(input: $input) {\n    accessEntry {\n      id\n      flags\n      flagReasons\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3d4bdfdde050b86b1f7f058bb8687e5a";

export default node;
