/**
 * @generated SignedSource<<5836b79c9deb7a4c04879f6c892047bd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IcpmsDocumentApplicability = "NO" | "REVIEW" | "YES";
export type IcpmsDocumentClassification = "INTERNAL" | "PUBLIC" | "RESTRICTED";
export type IcpmsDocumentGroup = "CANSO" | "EASA_EU" | "EUROCAE_RTCA" | "EUROCONTROL" | "ICAO" | "ICAO_APAC" | "ISO" | "OTHER" | "VATM" | "VIETNAM_LEGAL";
export type IcpmsDocumentPriority = "HIGH" | "LOW" | "MEDIUM";
export type IcpmsDocumentStatus = "ACTIVE" | "ARCHIVED" | "DELETED" | "DRAFT" | "SUPERSEDED" | "UNDER_REVIEW";
export type IcpmsDocumentType = "CANSO_GUIDANCE" | "CIRCULAR_VN" | "COMPLIANCE_DOCUMENT" | "DECISION" | "DECREE" | "EASA_EU" | "EUROCAE_RTCA" | "EUROCONTROL" | "FORM" | "GUIDANCE" | "ICAO_ANNEX" | "ICAO_APAC" | "ICAO_CIRCULAR" | "ICAO_DOC" | "INTERNAL_REGULATION" | "ISO_STANDARD" | "OTHER" | "PROCEDURE" | "SAFETY_DOCUMENT" | "TECHNICAL_DOCUMENT" | "VATM_INTERNAL";
export type UpdateIcpmsDocumentInput = {
  applicableToVatm?: IcpmsDocumentApplicability | null | undefined;
  classification?: IcpmsDocumentClassification | null | undefined;
  code?: string | null | undefined;
  description?: string | null | undefined;
  documentCode?: string | null | undefined;
  documentGroup?: IcpmsDocumentGroup | null | undefined;
  documentType?: IcpmsDocumentType | null | undefined;
  effectiveDate?: string | null | undefined;
  issuedDate?: string | null | undefined;
  issuer?: string | null | undefined;
  language?: string | null | undefined;
  mainDomain?: string | null | undefined;
  notes?: string | null | undefined;
  owningUnitId?: string | null | undefined;
  pageCount?: number | null | undefined;
  priority?: IcpmsDocumentPriority | null | undefined;
  sourceOrganization?: string | null | undefined;
  status?: IcpmsDocumentStatus | null | undefined;
  title?: string | null | undefined;
};
export type IcpmsDocumentFormUpdateMutation$variables = {
  id: string;
  input: UpdateIcpmsDocumentInput;
};
export type IcpmsDocumentFormUpdateMutation$data = {
  readonly updateIcpmsDocument: {
    readonly code: string;
    readonly documentCode: string | null | undefined;
    readonly documentType: IcpmsDocumentType;
    readonly id: string;
    readonly status: IcpmsDocumentStatus;
    readonly title: string;
  };
};
export type IcpmsDocumentFormUpdateMutation = {
  response: IcpmsDocumentFormUpdateMutation$data;
  variables: IcpmsDocumentFormUpdateMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
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
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "IcpmsDocument",
    "kind": "LinkedField",
    "name": "updateIcpmsDocument",
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
        "name": "code",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "documentCode",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "documentType",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "status",
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
    "name": "IcpmsDocumentFormUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsDocumentFormUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6cb52c4d00debc7a02105668fda4b005",
    "id": null,
    "metadata": {},
    "name": "IcpmsDocumentFormUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsDocumentFormUpdateMutation(\n  $id: ID!\n  $input: UpdateIcpmsDocumentInput!\n) {\n  updateIcpmsDocument(id: $id, input: $input) {\n    id\n    code\n    documentCode\n    title\n    documentType\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "c19f51e646e906c7c5ec6e46881abbf0";

export default node;
