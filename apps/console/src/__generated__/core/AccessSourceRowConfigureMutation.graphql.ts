/**
 * @generated SignedSource<<764b77245185e855765ad108374c1c96>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ConfigureAccessSourceInput = {
  accessSourceId: string;
  organizationSlug: string;
};
export type AccessSourceRowConfigureMutation$variables = {
  input: ConfigureAccessSourceInput;
};
export type AccessSourceRowConfigureMutation$data = {
  readonly configureAccessSource: {
    readonly accessSource: {
      readonly id: string;
      readonly needsConfiguration: boolean;
      readonly selectedOrganization: string | null | undefined;
    };
  };
};
export type AccessSourceRowConfigureMutation = {
  response: AccessSourceRowConfigureMutation$data;
  variables: AccessSourceRowConfigureMutation$variables;
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
    "concreteType": "ConfigureAccessSourcePayload",
    "kind": "LinkedField",
    "name": "configureAccessSource",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AccessSource",
        "kind": "LinkedField",
        "name": "accessSource",
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
            "name": "selectedOrganization",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "needsConfiguration",
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
    "name": "AccessSourceRowConfigureMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AccessSourceRowConfigureMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e4ff9f51449244b019e8a3da40b9d727",
    "id": null,
    "metadata": {},
    "name": "AccessSourceRowConfigureMutation",
    "operationKind": "mutation",
    "text": "mutation AccessSourceRowConfigureMutation(\n  $input: ConfigureAccessSourceInput!\n) {\n  configureAccessSource(input: $input) {\n    accessSource {\n      id\n      selectedOrganization\n      needsConfiguration\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "89af64820ae3070e46df0b340cf34a1d";

export default node;
