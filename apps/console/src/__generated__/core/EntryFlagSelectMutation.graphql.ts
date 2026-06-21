/**
 * @generated SignedSource<<33b562f2875fb2867af8853481f48758>>
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
export type EntryFlagSelectMutation$variables = {
  input: FlagAccessEntryInput;
};
export type EntryFlagSelectMutation$data = {
  readonly flagAccessEntry: {
    readonly accessEntry: {
      readonly flagReasons: ReadonlyArray<string>;
      readonly flags: ReadonlyArray<AccessEntryFlag>;
      readonly id: string;
    };
  };
};
export type EntryFlagSelectMutation = {
  response: EntryFlagSelectMutation$data;
  variables: EntryFlagSelectMutation$variables;
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
    "name": "EntryFlagSelectMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EntryFlagSelectMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1702865d3bf60988795a11bba60da91c",
    "id": null,
    "metadata": {},
    "name": "EntryFlagSelectMutation",
    "operationKind": "mutation",
    "text": "mutation EntryFlagSelectMutation(\n  $input: FlagAccessEntryInput!\n) {\n  flagAccessEntry(input: $input) {\n    accessEntry {\n      id\n      flags\n      flagReasons\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b3abcf0854f1e49fda009e26ba027d73";

export default node;
