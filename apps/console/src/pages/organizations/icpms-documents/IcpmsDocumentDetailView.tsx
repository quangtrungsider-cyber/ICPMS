// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { useTranslate } from "@probo/i18n";
import {
  ActionDropdown,
  Badge,
  Button,
  DropdownItem,
  DropdownSeparator,
  IconArrowDown,
  IconCheckmark1,
  IconPageTextSolid,
  IconPlusLarge,
  IconTrashCan,
  IconUpload,
  useToast,
} from "@probo/ui";
import { useLazyLoadQuery, useMutation, graphql } from "react-relay";
import { useState } from "react";

import type { IcpmsDocumentDetailViewQuery } from "#/__generated__/core/IcpmsDocumentDetailViewQuery.graphql";
import type { IcpmsDocumentDetailViewGenerateDownloadUrlMutation } from "#/__generated__/core/IcpmsDocumentDetailViewGenerateDownloadUrlMutation.graphql";
import type { IcpmsDocumentDetailViewDeleteVersionMutation } from "#/__generated__/core/IcpmsDocumentDetailViewDeleteVersionMutation.graphql";
import { IcpmsDocumentVersionForm } from "./versions/IcpmsDocumentVersionForm";
import { IcpmsDocumentFileUploadDialog } from "./versions/IcpmsDocumentFileUploadDialog";
import { SetCurrentVersionDialog } from "./versions/SetCurrentVersionDialog";

const icpmsDocumentDetailViewQuery = graphql`
  query IcpmsDocumentDetailViewQuery($documentId: ID!) {
    document: node(id: $documentId) {
      __typename
      ... on IcpmsDocument {
        id
        code
        title
        documentType
        documentGroup
        mainDomain
        status
        updatedAt
        versions(first: 50, orderBy: CREATED_AT) {
          edges {
            node {
              id
              versionCode
              versionName
              edition
              amendment
              effectiveDate
              status
              isCurrent
              rawFileStatus
              files(first: 1, filter: { isActive: true }) {
                edges {
                  node {
                    id
                    originalFileName
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const generateDownloadUrlMutation = graphql`
  mutation IcpmsDocumentDetailViewGenerateDownloadUrlMutation($input: GenerateIcpmsDocumentFileDownloadUrlInput!) {
    generateIcpmsDocumentFileDownloadUrl(input: $input) {
      downloadUrl
    }
  }
`;

const deleteVersionMutation = graphql`
  mutation IcpmsDocumentDetailViewDeleteVersionMutation($input: DeleteIcpmsDocumentVersionInput!) {
    deleteIcpmsDocumentVersion(input: $input) {
      id
    }
  }
`;

export function IcpmsDocumentDetailView(props: { documentId: string }) {
  const { documentId } = props;
  const { __ } = useTranslate();
  const { toast } = useToast();

  const [refreshKey, setRefreshKey] = useState(0);
  const [isVersionFormOpen, setIsVersionFormOpen] = useState(false);
  const [uploadVersionId, setUploadVersionId] = useState<string | null>(null);
  const [versionToSetCurrent, setVersionToSetCurrent] = useState<string | null>(null);

  const data = useLazyLoadQuery<IcpmsDocumentDetailViewQuery>(
    icpmsDocumentDetailViewQuery,
    { documentId },
    { fetchPolicy: "store-and-network", fetchKey: refreshKey }
  );

  const [commitDownloadUrl, isGeneratingDownloadUrl] = useMutation<IcpmsDocumentDetailViewGenerateDownloadUrlMutation>(generateDownloadUrlMutation);
  const [commitDelete] = useMutation<IcpmsDocumentDetailViewDeleteVersionMutation>(deleteVersionMutation);

  const handleDelete = (verId: string) => {
    if (!window.confirm(__("Bạn có chắc chắn muốn xóa phiên bản này? Hành động này không thể hoàn tác."))) return;
    commitDelete({
      variables: { input: { id: verId } },
      onCompleted: () => {
        toast({ title: __("Đã xóa phiên bản"), description: "", variant: "success" });
        setRefreshKey((k) => k + 1);
      },
      onError: (err) => {
        toast({ title: __("Lỗi"), description: err.message, variant: "error" });
      },
    });
  };

  const handleDownload = (fileId: string | undefined | null) => {
    if (!fileId) return;
    commitDownloadUrl({
      variables: {
        input: { id: fileId },
      },
      onCompleted: (res) => {
        window.open(res.generateIcpmsDocumentFileDownloadUrl.downloadUrl, "_blank");
      },
      onError: (err) => {
        toast({
          title: __("Lỗi tải xuống"),
          description: err.message,
          variant: "error",
        });
      },
    });
  };

  const doc = data.document;
  if (!doc || doc.__typename !== "IcpmsDocument") return null;

  const versions = doc.versions?.edges.map(e => e.node) || [];

  return (
    <div className="flex flex-col h-full bg-level-1 border border-border-mid rounded-[10px] overflow-hidden">
      <div className="p-4 border-b border-border-mid bg-level-1">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success-10 text-success-80 rounded-lg">
              <IconPageTextSolid className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-txt-primary">{doc.code} - {doc.title}</h2>
            </div>
          </div>
          <Button icon={IconPlusLarge} onClick={() => setIsVersionFormOpen(true)}>{__("Thêm phiên bản")}</Button>
        </div>

        <div className="grid grid-cols-5 gap-4 text-sm mt-4">
          <div>
            <p className="text-txt-tertiary mb-1">{__("Loại")}</p>
            <p className="font-medium text-txt-primary">{doc.documentType}</p>
          </div>
          <div>
            <p className="text-txt-tertiary mb-1">{__("Nhóm")}</p>
            <p className="font-medium text-txt-primary">{doc.documentGroup || "-"}</p>
          </div>
          <div>
            <p className="text-txt-tertiary mb-1">{__("Lĩnh vực")}</p>
            <p className="font-medium text-txt-primary">{doc.mainDomain || "-"}</p>
          </div>
          <div>
            <p className="text-txt-tertiary mb-1">{__("Trạng thái tài liệu")}</p>
            <Badge variant={doc.status === "ACTIVE" ? "success" : "neutral"}>{doc.status}</Badge>
          </div>
          <div>
            <p className="text-txt-tertiary mb-1">{__("Cập nhật lần cuối")}</p>
            <p className="font-medium text-txt-primary">
              {doc.updatedAt ? new Date(doc.updatedAt as string).toLocaleString("vi-VN") : "-"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto bg-level-1">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="sticky top-0 bg-level-2 z-10 border-b border-border-mid">
            <tr className="text-txt-secondary">
              <th className="py-2 px-4 font-medium">{__("Mã phiên bản")}</th>
              <th className="py-2 px-4 font-medium">{__("Tên phiên bản")}</th>
              <th className="py-2 px-4 font-medium">{__("Ngày hiệu lực")}</th>
              <th className="py-2 px-4 font-medium">{__("Trạng thái")}</th>
              <th className="py-2 px-4 font-medium text-center">{__("Hiện hành")}</th>
              <th className="py-2 px-4 font-medium">{__("File gốc")}</th>
              <th className="py-2 px-4 font-medium text-center">{__("Thao tác")}</th>
            </tr>
          </thead>
          <tbody>
            {versions.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-8 text-center text-txt-secondary">
                  {__("Chưa có phiên bản nào")}
                </td>
              </tr>
            ) : versions.map((v) => (
              <tr key={v.id} className="border-b border-border-mid hover:bg-bg-alt">
                <td className="py-3 px-4 text-txt-primary font-medium">{v.versionCode}</td>
                <td className="py-3 px-4 text-txt-secondary">{v.versionName}</td>
                <td className="py-3 px-4 text-txt-secondary">
                  {v.effectiveDate ? new Date(v.effectiveDate as string).toLocaleDateString("vi-VN") : "-"}
                </td>
                <td className="py-3 px-4">
                  <Badge variant={v.status === "CURRENT" ? "success" : v.status === "SUPERSEDED" ? "warning" : "neutral"}>
                    {v.status}
                  </Badge>
                </td>
                <td className="py-3 px-4 text-txt-secondary text-center">
                  {v.isCurrent ? <span className="text-success-60">✔</span> : "-"}
                </td>
                <td className="py-3 px-4">
                  {v.rawFileStatus === "UPLOADED" ? (
                    <div className="flex items-center gap-2 text-success-60">
                      <button
                        onClick={() => handleDownload(v.files?.edges?.[0]?.node?.id)}
                        disabled={isGeneratingDownloadUrl}
                        className="flex items-center gap-2 hover:underline cursor-pointer"
                      >
                        <IconArrowDown className="w-4 h-4" />
                        {v.files?.edges?.[0]?.node?.originalFileName || __("Đã upload")}
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-txt-tertiary cursor-pointer hover:underline" onClick={() => setUploadVersionId(v.id)}>
                      <IconUpload className="w-4 h-4" /> {__("Chưa upload")}
                    </div>
                  )}
                </td>
                <td className="py-3 px-4 text-center">
                  <ActionDropdown>
                    {!v.isCurrent && (
                      <DropdownItem icon={IconCheckmark1} onClick={() => setVersionToSetCurrent(v.id)}>
                        {__("Đặt làm phiên bản hiện hành")}
                      </DropdownItem>
                    )}
                    {!v.isCurrent && <DropdownSeparator />}
                    <DropdownItem icon={IconTrashCan} onClick={() => handleDelete(v.id)} variant="danger">
                      {__("Xóa phiên bản")}
                    </DropdownItem>
                  </ActionDropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isVersionFormOpen && (
        <IcpmsDocumentVersionForm
          documentId={doc.id} connectionId=""
          onClose={() => setIsVersionFormOpen(false)}
          onSuccess={() => {
            setIsVersionFormOpen(false);
            setRefreshKey((k) => k + 1);
          }}
        />
      )}

      {uploadVersionId && (
        <IcpmsDocumentFileUploadDialog
          versionId={uploadVersionId}
          onClose={() => setUploadVersionId(null)}
          onSuccess={() => {
            setUploadVersionId(null);
            setRefreshKey((k) => k + 1);
          }}
        />
      )}

      {versionToSetCurrent && (
        <SetCurrentVersionDialog
          versionId={versionToSetCurrent}
          onClose={() => setVersionToSetCurrent(null)}
          onSuccess={() => {
            setVersionToSetCurrent(null);
            setRefreshKey((k) => k + 1);
          }}
        />
      )}
    </div>
  );
}
