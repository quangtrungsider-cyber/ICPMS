/**
 * @generated SignedSource<<d4d672efc0a8301ff480033352dabba4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DeleteThirdPartyComplianceReportInput = {
  reportId: string;
};
export type ThirdPartyComplianceTabDeleteReportMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteThirdPartyComplianceReportInput;
};
export type ThirdPartyComplianceTabDeleteReportMutation$data = {
  readonly deleteThirdPartyComplianceReport: {
    readonly deletedThirdPartyComplianceReportId: string;
  };
};
export type ThirdPartyComplianceTabDeleteReportMutation = {
  response: ThirdPartyComplianceTabDeleteReportMutation$data;
  variables: ThirdPartyComplianceTabDeleteReportMutation$variables;
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
  "name": "deletedThirdPartyComplianceReportId",
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
    "name": "ThirdPartyComplianceTabDeleteReportMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteThirdPartyComplianceReportPayload",
        "kind": "LinkedField",
        "name": "deleteThirdPartyComplianceReport",
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
    "name": "ThirdPartyComplianceTabDeleteReportMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteThirdPartyComplianceReportPayload",
        "kind": "LinkedField",
        "name": "deleteThirdPartyComplianceReport",
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
            "name": "deletedThirdPartyComplianceReportId",
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
    "cacheID": "9ffaf8ef2c19bd7ef7c82db770110bb6",
    "id": null,
    "metadata": {},
    "name": "ThirdPartyComplianceTabDeleteReportMutation",
    "operationKind": "mutation",
    "text": "mutation ThirdPartyComplianceTabDeleteReportMutation(\n  $input: DeleteThirdPartyComplianceReportInput!\n) {\n  deleteThirdPartyComplianceReport(input: $input) {\n    deletedThirdPartyComplianceReportId\n  }\n}\n"
  }
};
})();

(node as any).hash = "ec5c995f5c8eed6b65258aa9950cf697";

export default node;
