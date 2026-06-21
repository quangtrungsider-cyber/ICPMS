/**
 * @generated SignedSource<<9a6bbf4f78e31161e0ffa9d4f48af991>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteMeasureInput = {
  measureId: string;
};
export type MeasuresPageDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteMeasureInput;
};
export type MeasuresPageDeleteMutation$data = {
  readonly deleteMeasure: {
    readonly deletedMeasureId: string;
  };
};
export type MeasuresPageDeleteMutation = {
  response: MeasuresPageDeleteMutation$data;
  variables: MeasuresPageDeleteMutation$variables;
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
  "name": "deletedMeasureId",
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
    "name": "MeasuresPageDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteMeasurePayload",
        "kind": "LinkedField",
        "name": "deleteMeasure",
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
    "name": "MeasuresPageDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteMeasurePayload",
        "kind": "LinkedField",
        "name": "deleteMeasure",
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
            "name": "deletedMeasureId",
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
    "cacheID": "ff03476dca05e0ba3b72d4105dbadbb0",
    "id": null,
    "metadata": {},
    "name": "MeasuresPageDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation MeasuresPageDeleteMutation(\n  $input: DeleteMeasureInput!\n) {\n  deleteMeasure(input: $input) {\n    deletedMeasureId\n  }\n}\n"
  }
};
})();

(node as any).hash = "a04c1196ce97aee23bd3ced6bf18b193";

export default node;
