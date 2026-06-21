/**
 * @generated SignedSource<<20fb911b44e518bfb17d47a8f290f47c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsChecklistStatus = "ACTIVE" | "ARCHIVED" | "DELETED" | "DRAFT" | "INACTIVE" | "NEEDS_REVIEW";
export type ArchiveIcpmsChecklistInput = {
  id: string;
};
export type IcpmsChecklistPageArchiveMutation$variables = {
  input: ArchiveIcpmsChecklistInput;
};
export type IcpmsChecklistPageArchiveMutation$data = {
  readonly archiveIcpmsChecklist: {
    readonly checklist: {
      readonly id: string;
      readonly status: IcpmsChecklistStatus;
    };
  };
};
export type IcpmsChecklistPageArchiveMutation = {
  response: IcpmsChecklistPageArchiveMutation$data;
  variables: IcpmsChecklistPageArchiveMutation$variables;
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
    "concreteType": "ArchiveIcpmsChecklistPayload",
    "kind": "LinkedField",
    "name": "archiveIcpmsChecklist",
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
            "name": "status",
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
    "name": "IcpmsChecklistPageArchiveMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsChecklistPageArchiveMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d7c52f933fbe54048691703610dad9c7",
    "id": null,
    "metadata": {},
    "name": "IcpmsChecklistPageArchiveMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsChecklistPageArchiveMutation(\n  $input: ArchiveIcpmsChecklistInput!\n) {\n  archiveIcpmsChecklist(input: $input) {\n    checklist {\n      id\n      status\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "67f6c27af5cacce16a01c19e2db4e919";

export default node;
