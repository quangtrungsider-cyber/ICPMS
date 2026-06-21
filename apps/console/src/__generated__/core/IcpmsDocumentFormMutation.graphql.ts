/**
 * @generated SignedSource<<30d27409e580d27a33928499791a32cb>>
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
export type CreateIcpmsDocumentInput = {
  applicableToVatm?: IcpmsDocumentApplicability | null | undefined;
  classification?: IcpmsDocumentClassification | null | undefined;
  code: string;
  description?: string | null | undefined;
  documentCode?: string | null | undefined;
  documentGroup?: IcpmsDocumentGroup | null | undefined;
  documentType: IcpmsDocumentType;
  effectiveDate?: string | null | undefined;
  issuedDate?: string | null | undefined;
  issuer?: string | null | undefined;
  language?: string | null | undefined;
  mainDomain?: string | null | undefined;
  notes?: string | null | undefined;
  organizationId: string;
  owningUnitId?: string | null | undefined;
  pageCount?: number | null | undefined;
  priority?: IcpmsDocumentPriority | null | undefined;
  sourceOrganization?: string | null | undefined;
  status: IcpmsDocumentStatus;
  title: string;
};
export type IcpmsDocumentFormMutation$variables = {
  input: CreateIcpmsDocumentInput;
};
export type IcpmsDocumentFormMutation$data = {
  readonly createIcpmsDocument: {
    readonly code: string;
    readonly documentCode: string | null | undefined;
    readonly documentType: IcpmsDocumentType;
    readonly id: string;
    readonly status: IcpmsDocumentStatus;
    readonly title: string;
  };
};
export type IcpmsDocumentFormMutation = {
  response: IcpmsDocumentFormMutation$data;
  variables: IcpmsDocumentFormMutation$variables;
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
    "concreteType": "IcpmsDocument",
    "kind": "LinkedField",
    "name": "createIcpmsDocument",
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
    "name": "IcpmsDocumentFormMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IcpmsDocumentFormMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "231d1111e985af376cefe4d5734b52f4",
    "id": null,
    "metadata": {},
    "name": "IcpmsDocumentFormMutation",
    "operationKind": "mutation",
    "text": "mutation IcpmsDocumentFormMutation(\n  $input: CreateIcpmsDocumentInput!\n) {\n  createIcpmsDocument(input: $input) {\n    id\n    code\n    documentCode\n    title\n    documentType\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "463dd9ce58b7f0942f04cbe5432d5f08";

export default node;
