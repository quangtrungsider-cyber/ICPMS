/**
 * @generated SignedSource<<e4b3509af336b51a7fdc37fb2a8a74b7>>
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
export type FindingDetailsPageDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteFindingInput;
};
export type FindingDetailsPageDeleteMutation$data = {
  readonly deleteFinding: {
    readonly deletedFindingId: string | null | undefined;
  } | null | undefined;
};
export type FindingDetailsPageDeleteMutation = {
  response: FindingDetailsPageDeleteMutation$data;
  variables: FindingDetailsPageDeleteMutation$variables;
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
    "name": "FindingDetailsPageDeleteMutation",
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
    "name": "FindingDetailsPageDeleteMutation",
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
    "cacheID": "c98fa637029488c2bce3bfbae231b606",
    "id": null,
    "metadata": {},
    "name": "FindingDetailsPageDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation FindingDetailsPageDeleteMutation(\n  $input: DeleteFindingInput!\n) {\n  deleteFinding(input: $input) {\n    deletedFindingId\n  }\n}\n"
  }
};
})();

(node as any).hash = "66ff53d119411d57ed67b3ebb01a6cfb";

export default node;
