/**
 * @generated SignedSource<<fed3bd7990eca1496154cf5f0836eb4d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteFindingInput = {
  findingId: string;
};
export type FindingsPageDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteFindingInput;
};
export type FindingsPageDeleteMutation$data = {
  readonly deleteFinding: {
    readonly deletedFindingId: string | null | undefined;
  } | null | undefined;
};
export type FindingsPageDeleteMutation = {
  response: FindingsPageDeleteMutation$data;
  variables: FindingsPageDeleteMutation$variables;
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
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "deletedFindingId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "FindingsPageDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteFindingPayload",
        "kind": "LinkedField",
        "name": "deleteFinding",
        "plural": false,
        "selections": [
          (v3/*: any*/)
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
    "name": "FindingsPageDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteFindingPayload",
        "kind": "LinkedField",
        "name": "deleteFinding",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "deletedFindingId",
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
    "cacheID": "b6bbce74c7c5dffc053350c4edf85621",
    "id": null,
    "metadata": {},
    "name": "FindingsPageDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation FindingsPageDeleteMutation(\n  $input: DeleteFindingInput!\n) {\n  deleteFinding(input: $input) {\n    deletedFindingId\n  }\n}\n"
  }
};
})();

(node as any).hash = "7c1cf66d65f6eec6411d48c31051bcd8";

export default node;
