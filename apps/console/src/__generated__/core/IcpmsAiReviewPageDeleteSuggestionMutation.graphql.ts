/**
 * @generated SignedSource<<100aaf693ae70ad08cac507de4f5e220>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsAiReviewPageDeleteSuggestionMutation$variables = {
  id: string;
};
export type IcpmsAiReviewPageDeleteSuggestionMutation$data = {
  readonly deleteIcpmsAiReviewSuggestion: boolean;
};
export type IcpmsAiReviewPageDeleteSuggestionMutation = {
  response: IcpmsAiReviewPageDeleteSuggestionMutation$data;
  variables: IcpmsAiReviewPageDeleteSuggestionMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "kind": "ScalarField",
    "name": "deleteIcpmsAiReviewSuggestion",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IcpmsAiReviewPageDeleteSuggestionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsAiReviewPageDeleteSuggestionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "917fdc9659651f264828b4a4bf165180",
    "id": null,
    "metadata": {},
    "name": "IcpmsAiReviewPageDeleteSuggestionMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsAiReviewPageDeleteSuggestionMutation(\n  $id: ID!\n) {\n  deleteIcpmsAiReviewSuggestion(id: $id)\n}\n"
  }
};
})();

(node as any).hash = "a725f75d331c17a13e6d6c6a16787764";

export default node;
