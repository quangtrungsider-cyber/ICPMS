/**
 * @generated SignedSource<<0917c5ad9b911add56a4c4f28ca83d30>>
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
export type GoogleWorkspaceConnectorDeleteMutation$variables = {
  input: DeleteSCIMConfigurationInput;
};
export type GoogleWorkspaceConnectorDeleteMutation$data = {
  readonly deleteSCIMConfiguration: {
    readonly deletedScimConfigurationId: string;
  } | null | undefined;
};
export type GoogleWorkspaceConnectorDeleteMutation = {
  response: GoogleWorkspaceConnectorDeleteMutation$data;
  variables: GoogleWorkspaceConnectorDeleteMutation$variables;
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
    "name": "GoogleWorkspaceConnectorDeleteMutation",
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
    "name": "GoogleWorkspaceConnectorDeleteMutation",
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
    "cacheID": "8fa5927c728a768a19fd163d162facac",
    "id": null,
    "metadata": {},
    "name": "GoogleWorkspaceConnectorDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation GoogleWorkspaceConnectorDeleteMutation(\n  $input: DeleteSCIMConfigurationInput!\n) {\n  deleteSCIMConfiguration(input: $input) {\n    deletedScimConfigurationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "a4c0bf922ecd1eb541525715a92a4ab6";

export default node;
