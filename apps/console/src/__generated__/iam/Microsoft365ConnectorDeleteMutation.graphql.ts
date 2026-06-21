/**
 * @generated SignedSource<<17fe053c9014d039e323b6d9f82237a2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteSCIMConfigurationInput = {
  organizationId: string;
  scimConfigurationId: string;
};
export type Microsoft365ConnectorDeleteMutation$variables = {
  input: DeleteSCIMConfigurationInput;
};
export type Microsoft365ConnectorDeleteMutation$data = {
  readonly deleteSCIMConfiguration: {
    readonly deletedScimConfigurationId: string;
  } | null | undefined;
};
export type Microsoft365ConnectorDeleteMutation = {
  response: Microsoft365ConnectorDeleteMutation$data;
  variables: Microsoft365ConnectorDeleteMutation$variables;
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "deletedScimConfigurationId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Microsoft365ConnectorDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteSCIMConfigurationPayload",
        "kind": "LinkedField",
        "name": "deleteSCIMConfiguration",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "Microsoft365ConnectorDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteSCIMConfigurationPayload",
        "kind": "LinkedField",
        "name": "deleteSCIMConfiguration",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteRecord",
            "key": "",
            "kind": "ScalarHandle",
            "name": "deletedScimConfigurationId"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "48a8cfa260d3c69aa7c0d8357308b61e",
    "id": null,
    "metadata": {},
    "name": "Microsoft365ConnectorDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation Microsoft365ConnectorDeleteMutation(\n  $input: DeleteSCIMConfigurationInput!\n) {\n  deleteSCIMConfiguration(input: $input) {\n    deletedScimConfigurationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "762e0a4958cb52a586218cec103de21a";

export default node;
