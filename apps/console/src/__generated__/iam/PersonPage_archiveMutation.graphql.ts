/**
 * @generated SignedSource<<f3c0635bfc0af89f083896c9ca81e8f8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ArchiveUserInput = {
  organizationId: string;
  profileId: string;
};
export type PersonPage_archiveMutation$variables = {
  input: ArchiveUserInput;
};
export type PersonPage_archiveMutation$data = {
  readonly archiveUser: {
    readonly archivedProfileId: string;
  } | null | undefined;
};
export type PersonPage_archiveMutation = {
  response: PersonPage_archiveMutation$data;
  variables: PersonPage_archiveMutation$variables;
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
    "concreteType": "ArchiveUserPayload",
    "kind": "LinkedField",
    "name": "archiveUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "archivedProfileId",
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
    "name": "PersonPage_archiveMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PersonPage_archiveMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d4f5fad473045cfa9b58424720c19024",
    "id": null,
    "metadata": {},
    "name": "PersonPage_archiveMutation",
    "operationKind": "mutation",
    "text": "mutation PersonPage_archiveMutation(\n  $input: ArchiveUserInput!\n) {\n  archiveUser(input: $input) {\n    archivedProfileId\n  }\n}\n"
  }
};
})();

(node as any).hash = "a6723eb9ca872aa099971dfd6ed91952";

export default node;
