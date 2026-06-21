/**
 * @generated SignedSource<<e929bd7c508af54696c7087a4cfa9642>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CreateIcpmsChecklistsFromAiSuggestionsInput = {
  aiReviewSuggestionIds: ReadonlyArray<string>;
};
export type IcpmsChecklistPageCreateFromAiMutation$variables = {
  input: CreateIcpmsChecklistsFromAiSuggestionsInput;
};
export type IcpmsChecklistPageCreateFromAiMutation$data = {
  readonly createIcpmsChecklistsFromAiSuggestions: {
    readonly checklists: ReadonlyArray<{
      readonly checklistCode: string;
      readonly id: string;
    }>;
    readonly createdCount: number;
    readonly existingCount: number;
  };
};
export type IcpmsChecklistPageCreateFromAiMutation = {
  response: IcpmsChecklistPageCreateFromAiMutation$data;
  variables: IcpmsChecklistPageCreateFromAiMutation$variables;
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
    "concreteType": "CreateIcpmsChecklistsFromAiSuggestionsPayload",
    "kind": "LinkedField",
    "name": "createIcpmsChecklistsFromAiSuggestions",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "IcpmsChecklist",
        "kind": "LinkedField",
        "name": "checklists",
        "plural": true,
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
            "name": "checklistCode",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdCount",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "existingCount",
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
    "name": "IcpmsChecklistPageCreateFromAiMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsChecklistPageCreateFromAiMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "61a171c08b289ab33c351271e5822e9c",
    "id": null,
    "metadata": {},
    "name": "IcpmsChecklistPageCreateFromAiMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsChecklistPageCreateFromAiMutation(\n  $input: CreateIcpmsChecklistsFromAiSuggestionsInput!\n) {\n  createIcpmsChecklistsFromAiSuggestions(input: $input) {\n    checklists {\n      id\n      checklistCode\n    }\n    createdCount\n    existingCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "e6eeb1e7df740d12dfcf5cdf4005772d";

export default node;
