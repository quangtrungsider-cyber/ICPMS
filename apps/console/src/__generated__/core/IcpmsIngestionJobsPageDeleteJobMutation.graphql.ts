/**
 * @generated SignedSource<<d80c47db42001ecf7f372423be2b95b9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteIcpmsIngestionJobInput = {
  id: string;
};
export type IcpmsIngestionJobsPageDeleteJobMutation$variables = {
  input: DeleteIcpmsIngestionJobInput;
};
export type IcpmsIngestionJobsPageDeleteJobMutation$data = {
  readonly deleteIcpmsIngestionJob: {
    readonly deletedId: string | null | undefined;
  };
};
export type IcpmsIngestionJobsPageDeleteJobMutation = {
  response: IcpmsIngestionJobsPageDeleteJobMutation$data;
  variables: IcpmsIngestionJobsPageDeleteJobMutation$variables;
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
    "concreteType": "DeleteIcpmsIngestionJobPayload",
    "kind": "LinkedField",
    "name": "deleteIcpmsIngestionJob",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedId",
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
    "name": "IcpmsIngestionJobsPageDeleteJobMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsIngestionJobsPageDeleteJobMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a67c81b4e85a457f5a69e50fc5a7a594",
    "id": null,
    "metadata": {},
    "name": "IcpmsIngestionJobsPageDeleteJobMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsIngestionJobsPageDeleteJobMutation(\n  $input: DeleteIcpmsIngestionJobInput!\n) {\n  deleteIcpmsIngestionJob(input: $input) {\n    deletedId\n  }\n}\n"
  }
};
})();

(node as any).hash = "f1c0339ebb08274e5b516bdcd99a896d";

export default node;
