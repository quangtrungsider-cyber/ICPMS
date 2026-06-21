/**
 * @generated SignedSource<<646198453c36d55f0aaf6a4cc0b62b78>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteSlackConnectionInput = {
  slackConnectionId: string;
};
export type CompliancePageSlackSectionDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteSlackConnectionInput;
};
export type CompliancePageSlackSectionDeleteMutation$data = {
  readonly deleteSlackConnection: {
    readonly deletedSlackConnectionId: string;
  };
};
export type CompliancePageSlackSectionDeleteMutation = {
  response: CompliancePageSlackSectionDeleteMutation$data;
  variables: CompliancePageSlackSectionDeleteMutation$variables;
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
  "name": "deletedSlackConnectionId",
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
    "name": "CompliancePageSlackSectionDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteSlackConnectionPayload",
        "kind": "LinkedField",
        "name": "deleteSlackConnection",
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
    "name": "CompliancePageSlackSectionDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteSlackConnectionPayload",
        "kind": "LinkedField",
        "name": "deleteSlackConnection",
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
            "name": "deletedSlackConnectionId",
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
    "cacheID": "1d681f36c3a778c73f7e6847f53c1df9",
    "id": null,
    "metadata": {},
    "name": "CompliancePageSlackSectionDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation CompliancePageSlackSectionDeleteMutation(\n  $input: DeleteSlackConnectionInput!\n) {\n  deleteSlackConnection(input: $input) {\n    deletedSlackConnectionId\n  }\n}\n"
  }
};
})();

(node as any).hash = "6585af895ce96cc722083676c34d67ec";

export default node;
