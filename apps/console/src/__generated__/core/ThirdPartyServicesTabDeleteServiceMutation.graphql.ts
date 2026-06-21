/**
 * @generated SignedSource<<3b594d42a4675f3b035b55042fb0e0bf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteThirdPartyServiceInput = {
  thirdPartyServiceId: string;
};
export type ThirdPartyServicesTabDeleteServiceMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteThirdPartyServiceInput;
};
export type ThirdPartyServicesTabDeleteServiceMutation$data = {
  readonly deleteThirdPartyService: {
    readonly deletedThirdPartyServiceId: string;
  };
};
export type ThirdPartyServicesTabDeleteServiceMutation = {
  response: ThirdPartyServicesTabDeleteServiceMutation$data;
  variables: ThirdPartyServicesTabDeleteServiceMutation$variables;
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
  "name": "deletedThirdPartyServiceId",
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
    "name": "ThirdPartyServicesTabDeleteServiceMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteThirdPartyServicePayload",
        "kind": "LinkedField",
        "name": "deleteThirdPartyService",
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
    "name": "ThirdPartyServicesTabDeleteServiceMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteThirdPartyServicePayload",
        "kind": "LinkedField",
        "name": "deleteThirdPartyService",
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
            "name": "deletedThirdPartyServiceId",
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
    "cacheID": "95b873fd26a03d1820700d28a2f8f15f",
    "id": null,
    "metadata": {},
    "name": "ThirdPartyServicesTabDeleteServiceMutation",
    "operationKind": "mutation",
    "text": "mutation ThirdPartyServicesTabDeleteServiceMutation(\n  $input: DeleteThirdPartyServiceInput!\n) {\n  deleteThirdPartyService(input: $input) {\n    deletedThirdPartyServiceId\n  }\n}\n"
  }
};
})();

(node as any).hash = "5e40cd9a3ab41fc7df8775f441fded19";

export default node;
