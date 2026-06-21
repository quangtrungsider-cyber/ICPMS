/**
 * @generated SignedSource<<fe1866532f21d59dec47593dc37d85f2>>
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
export type PeopleListItem_archiveMutation$variables = {
  input: ArchiveUserInput;
};
export type PeopleListItem_archiveMutation$data = {
  readonly archiveUser: {
    readonly archivedProfileId: string;
  } | null | undefined;
};
export type PeopleListItem_archiveMutation = {
  response: PeopleListItem_archiveMutation$data;
  variables: PeopleListItem_archiveMutation$variables;
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
    "name": "PeopleListItem_archiveMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PeopleListItem_archiveMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c9a57ddbe2057920fb6a346d99acab3d",
    "id": null,
    "metadata": {},
    "name": "PeopleListItem_archiveMutation",
    "operationKind": "mutation",
    "text": "mutation PeopleListItem_archiveMutation(\n  $input: ArchiveUserInput!\n) {\n  archiveUser(input: $input) {\n    archivedProfileId\n  }\n}\n"
  }
};
})();

(node as any).hash = "7c01c7345f0c9ec1f26424c6ccf1cf61";

export default node;
