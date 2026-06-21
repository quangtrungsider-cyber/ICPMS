/**
 * @generated SignedSource<<8978c9cd483a0911db2fd3bb448ed823>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SearchEngineIndexing = "INDEXABLE" | "NOT_INDEXABLE";
export type UpdateTrustCenterInput = {
  active?: boolean | null | undefined;
  searchEngineIndexing?: SearchEngineIndexing | null | undefined;
  trustCenterId: string;
};
export type TrustCenterGraphUpdateMutation$variables = {
  input: UpdateTrustCenterInput;
};
export type TrustCenterGraphUpdateMutation$data = {
  readonly updateTrustCenter: {
    readonly trustCenter: {
      readonly active: boolean;
      readonly id: string;
      readonly searchEngineIndexing: SearchEngineIndexing;
      readonly updatedAt: string;
    };
  };
};
export type TrustCenterGraphUpdateMutation = {
  response: TrustCenterGraphUpdateMutation$data;
  variables: TrustCenterGraphUpdateMutation$variables;
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
    "concreteType": "UpdateTrustCenterPayload",
    "kind": "LinkedField",
    "name": "updateTrustCenter",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TrustCenter",
        "kind": "LinkedField",
        "name": "trustCenter",
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
            "name": "active",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "searchEngineIndexing",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updatedAt",
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
    "name": "TrustCenterGraphUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TrustCenterGraphUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a261c18a1d673e4e630dcaecd8cab783",
    "id": null,
    "metadata": {},
    "name": "TrustCenterGraphUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation TrustCenterGraphUpdateMutation(\n  $input: UpdateTrustCenterInput!\n) {\n  updateTrustCenter(input: $input) {\n    trustCenter {\n      id\n      active\n      searchEngineIndexing\n      updatedAt\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "76e7cb2d8393e67cd0f08d805b89430b";

export default node;
