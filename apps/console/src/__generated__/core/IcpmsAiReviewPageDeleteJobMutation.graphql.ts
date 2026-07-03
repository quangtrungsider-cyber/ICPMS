/**
 * @generated SignedSource<<175061ef34c36787d198af90eb1b8add>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteIcpmsAiReviewJobInput = {
  id: string;
};
export type IcpmsAiReviewPageDeleteJobMutation$variables = {
  input: DeleteIcpmsAiReviewJobInput;
};
export type IcpmsAiReviewPageDeleteJobMutation$data = {
  readonly deleteIcpmsAiReviewJob: {
    readonly id: string;
  };
};
export type IcpmsAiReviewPageDeleteJobMutation = {
  response: IcpmsAiReviewPageDeleteJobMutation$data;
  variables: IcpmsAiReviewPageDeleteJobMutation$variables;
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
    "concreteType": "DeleteIcpmsAiReviewJobPayload",
    "kind": "LinkedField",
    "name": "deleteIcpmsAiReviewJob",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
    "name": "IcpmsAiReviewPageDeleteJobMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsAiReviewPageDeleteJobMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "edad881a6294230b7ca98bdd671d3f4f",
    "id": null,
    "metadata": {},
    "name": "IcpmsAiReviewPageDeleteJobMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsAiReviewPageDeleteJobMutation(\n  $input: DeleteIcpmsAiReviewJobInput!\n) {\n  deleteIcpmsAiReviewJob(input: $input) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "93c2c1c8c76c8c8464ac54dc82a19d6b";

export default node;
