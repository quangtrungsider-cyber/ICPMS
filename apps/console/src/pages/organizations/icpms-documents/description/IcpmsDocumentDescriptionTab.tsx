// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { useTranslate } from "@probo/i18n";
import { Card } from "@probo/ui";

const LabeledValue = ({ label, value }: { label: string, value: string }) => (
  <div className="flex flex-col gap-1">
    <span className="text-sm font-medium text-txt-secondary">{label}</span>
    <span className="text-sm text-txt-primary">{value}</span>
  </div>
);
import { type PreloadedQuery, usePreloadedQuery } from "react-relay";
import { graphql } from "relay-runtime";

import type { IcpmsDocumentDescriptionTabQuery } from "#/__generated__/core/IcpmsDocumentDescriptionTabQuery.graphql";

export const icpmsDocumentDescriptionTabQuery = graphql`
  query IcpmsDocumentDescriptionTabQuery($documentId: ID!) {
    document: node(id: $documentId) {
      __typename
      ... on IcpmsDocument {
        id
        description
        documentGroup
        sourceOrganization
        issuer
        mainDomain
        pageCount
        issuedDate
        effectiveDate
        language
        classification
        applicableToVatm
        priority
        notes
      }
    }
  }
`;

export function IcpmsDocumentDescriptionTab(props: { queryRef: PreloadedQuery<IcpmsDocumentDescriptionTabQuery> }) {
  const { queryRef } = props;
  const { __ } = useTranslate();

  const { document } = usePreloadedQuery<IcpmsDocumentDescriptionTabQuery>(icpmsDocumentDescriptionTabQuery, queryRef);
  if (document?.__typename !== "IcpmsDocument") {
    throw new Error("invalid node type");
  }

  const formatDate = (dateStr: string | null | undefined) => {
    if (!dateStr) return "-";
    return new Date(dateStr).toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium">{__("Thông tin cơ bản")}</h3>
          <Card>
            <div className="space-y-4 p-4">
            <LabeledValue label={__("Mô tả")} value={document.description || "-"} />
            <LabeledValue label={__("Nhóm tài liệu")} value={document.documentGroup || "-"} />
            <LabeledValue label={__("Tổ chức ban hành")} value={document.sourceOrganization || "-"} />
            <LabeledValue label={__("Người ký ban hành")} value={document.issuer || "-"} />
            <LabeledValue label={__("Lĩnh vực chính")} value={document.mainDomain || "-"} />
            </div>
          </Card>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium">{__("Thông tin thêm")}</h3>
          <Card>
            <div className="space-y-4 p-4">
            <LabeledValue label={__("Số trang")} value={document.pageCount?.toString() || "-"} />
            <LabeledValue label={__("Ngôn ngữ")} value={document.language || "-"} />
            <LabeledValue label={__("Ghi chú")} value={document.notes || "-"} />
            </div>
          </Card>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium">{__("Hiệu lực & Phân loại")}</h3>
          <Card>
            <div className="space-y-4 p-4">
            <LabeledValue label={__("Ngày ban hành")} value={formatDate(document.issuedDate)} />
            <LabeledValue label={__("Ngày có hiệu lực")} value={formatDate(document.effectiveDate)} />
            <LabeledValue label={__("Mức độ bảo mật")} value={document.classification || "-"} />
            <LabeledValue label={__("Mức độ ưu tiên")} value={document.priority || "-"} />
            <LabeledValue label={__("Áp dụng cho VATM")} value={document.applicableToVatm || "-"} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
