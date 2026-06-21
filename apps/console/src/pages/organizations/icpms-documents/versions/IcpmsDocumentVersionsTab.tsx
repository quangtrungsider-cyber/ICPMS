// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { useTranslate } from "@probo/i18n";
import { Badge, Button, Card, Dropdown, DropdownItem, DropdownSeparator, IconPlusLarge, IconDotGrid1x3Horizontal, IconCheckmark1, IconTrashCan } from "@probo/ui";
import { type PreloadedQuery, usePreloadedQuery, useMutation } from "react-relay";
import { graphql, ConnectionHandler } from "relay-runtime";
import { useState } from "react";
import { useOutletContext } from "react-router";
import { useToast } from "@probo/ui";

import type { IcpmsDocumentVersionsTabQuery } from "#/__generated__/core/IcpmsDocumentVersionsTabQuery.graphql";
import type { IcpmsDocumentVersionsTabGenerateDownloadUrlMutation } from "#/__generated__/core/IcpmsDocumentVersionsTabGenerateDownloadUrlMutation.graphql";
import { IcpmsDocumentVersionForm } from "./IcpmsDocumentVersionForm";
import { SetCurrentVersionDialog } from "./SetCurrentVersionDialog";
import { IcpmsDocumentFileUploadDialog } from "./IcpmsDocumentFileUploadDialog";
import { IconPencil } from "@probo/ui";

export const deleteIcpmsDocumentVersionMutation = graphql`
  mutation IcpmsDocumentVersionsTabDeleteMutation($input: DeleteIcpmsDocumentVersionInput!) {
    deleteIcpmsDocumentVersion(input: $input) {
      id
    }
  }
`;

export const icpmsDocumentVersionsTabQuery = graphql`
  query IcpmsDocumentVersionsTabQuery($documentId: ID!) {
    document: node(id: $documentId) {
      __typename
      ... on IcpmsDocument {
        id
        versions(first: 50, orderBy: CREATED_AT) @connection(key: "IcpmsDocumentVersionsTab_versions", filters: []) {
          edges {
            node {
              id
              versionCode
              versionName
              edition
              amendment
              versionNumber
              effectiveDate
              status
              isCurrent
              rawFileStatus
              latestIngestionJob {
                id
                status
                progressPercent
              }
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

export const generateDownloadUrlMutation = graphql`
  mutation IcpmsDocumentVersionsTabGenerateDownloadUrlMutation($input: GenerateIcpmsDocumentFileDownloadUrlInput!) {
    generateIcpmsDocumentFileDownloadUrl(input: $input) {
      downloadUrl
    }
  }
`;

export const createIcpmsIngestionJobMutation = graphql`
  mutation IcpmsDocumentVersionsTabCreateIcpmsIngestionJobMutation($input: CreateIcpmsIngestionJobInput!) {
    createIcpmsIngestionJob(input: $input) {
      job {
        id
        jobCode
        status
      }
    }
  }
`;

export function IcpmsDocumentVersionsTab(props: { queryRef: PreloadedQuery<IcpmsDocumentVersionsTabQuery> }) {
  const { queryRef } = props;
  const { __ } = useTranslate();
  const { toast } = useToast();
  const { onRefetch } = useOutletContext<{ onRefetch: () => void }>();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [versionToEdit, setVersionToEdit] = useState<any>(null);
  const [versionToSetCurrent, setVersionToSetCurrent] = useState<string | null>(null);
  const [versionToUpload, setVersionToUpload] = useState<{ id: string; replace: boolean } | null>(null);
  const [commitDelete] = useMutation<any>(deleteIcpmsDocumentVersionMutation);

  const { document } = usePreloadedQuery<IcpmsDocumentVersionsTabQuery>(icpmsDocumentVersionsTabQuery, queryRef);
  if (document?.__typename !== "IcpmsDocument") {
    throw new Error("invalid node type");
  }

  const versions = document.versions.edges.map((e) => e?.node).filter(Boolean);

  const formatDate = (dateStr: string | null | undefined) => {
    if (!dateStr) return "-";
    return new Date(dateStr).toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const connectionId = ConnectionHandler.getConnectionID(document.id, "IcpmsDocumentVersionsTab_versions");

  const getStatusVariant = (status: string, isCurrent: boolean) => {
    if (isCurrent) return "success";
    if (status === "SUPERSEDED") return "neutral";
    if (status === "DRAFT") return "neutral";
    return "neutral";
  };

  const getIngestionStatusVariant = (status: string) => {
    switch (status) {
      case "QUEUED":
      case "RUNNING":
        return "warning";
      case "COMPLETED":
        return "success";
      case "FAILED":
      case "CANCELLED":
        return "danger";
      case "PARTIAL":
        return "warning";
      default:
        return "neutral";
    }
  };

  const [commitDownloadUrl, isGeneratingDownloadUrl] = useMutation<IcpmsDocumentVersionsTabGenerateDownloadUrlMutation>(generateDownloadUrlMutation);
  const [commitExtract] = useMutation<any>(createIcpmsIngestionJobMutation);

  const handleDownload = (fileId: string) => {
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

  const handleExtract = (ver: any) => {
    const fileId = ver.files?.edges?.[0]?.node?.id;
    if (!fileId) {
      toast({ title: "Lỗi", description: "Phiên bản này chưa có file gốc để bóc tách.", variant: "error" });
      return;
    }

    const jobStatus = ver.latestIngestionJob?.status;
    if (jobStatus === "QUEUED" || jobStatus === "RUNNING") {
      toast({ title: "Đang xử lý", description: "Job bóc tách đang chạy. Vui lòng đợi hoàn thành.", variant: "error" });
      return;
    }

    const isRerun = jobStatus === "COMPLETED";

    commitExtract({
      variables: {
        input: {
          documentId: document.id,
          documentVersionId: ver.id,
          documentFileId: fileId,
          extractionMode: "AUTO",
          ...(isRerun ? { jobType: "RE_EXTRACTION" } : {}),
        },
      },
      onCompleted: () => {
        toast({
          title: "Thành công",
          description: isRerun ? "Đã tạo job chạy lại bóc tách." : "Đã tạo job bóc tách tài liệu.",
          variant: "success",
        });
        onRefetch();
      },
      onError: (err: any) => {
        const m = err.message.match(/got error\(s\):\s*(.+?)(?:\s*See the error|$)/s);
        const detail = m ? m[1].trim() : err.message;
        toast({ title: "Không thể bóc tách", description: detail, variant: "error" });
      },
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">{__("Danh sách phiên bản")}</h2>
        <Button icon={IconPlusLarge} onClick={() => setIsFormOpen(true)}>
          {__("Thêm phiên bản")}
        </Button>
      </div>

      <Card>
        {versions.length === 0 ? (
          <div className="p-8 text-center">
            <h3 className="text-lg font-medium">{__("Chưa có phiên bản nào")}</h3>
            <p className="text-txt-secondary mt-1">{__("Bấm nút Thêm phiên bản để bắt đầu.")}</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm text-left">
              <thead>
                <tr className="border-b border-border-mid text-txt-secondary">
                  <th className="py-3 px-4 font-medium">{__("Mã PB")}</th>
                  <th className="py-3 px-4 font-medium">{__("Tên PB")}</th>
                  <th className="py-3 px-4 font-medium">{__("Edition / Amend")}</th>
                  <th className="py-3 px-4 font-medium">{__("Ngày hiệu lực")}</th>
                  <th className="py-3 px-4 font-medium">{__("Trạng thái")}</th>
                  <th className="py-3 px-4 font-medium">{__("File đính kèm")}</th>
                  <th className="py-3 px-4 font-medium">{__("Bóc tách")}</th>
                  <th className="py-3 px-4 font-medium text-right">{__("Thao tác")}</th>
                </tr>
              </thead>
              <tbody>
                {versions.map((ver: any) => (
                  <tr key={ver.id} className="border-b border-border-mid hover:bg-bg-alt">
                    <td className="py-3 px-4 font-medium text-txt-primary">{ver.versionCode}</td>
                    <td className="py-3 px-4 text-txt-primary">{ver.versionName || "-"}</td>
                    <td className="py-3 px-4 text-txt-secondary">
                      {ver.edition ? `Ed ${ver.edition}` : "-"}
                      {ver.amendment ? ` / Amd ${ver.amendment}` : ""}
                    </td>
                    <td className="py-3 px-4 text-txt-secondary">{formatDate(ver.effectiveDate)}</td>
                    <td className="py-3 px-4">
                      <Badge variant={getStatusVariant(ver.status, ver.isCurrent)}>
                        {ver.isCurrent ? __("CURRENT") : ver.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      {ver.rawFileStatus === "UPLOADED" ? (
                        <button
                          onClick={() => handleDownload(ver.files?.edges?.[0]?.node?.id)}
                          disabled={isGeneratingDownloadUrl}
                          className="text-primary hover:underline font-medium text-left"
                        >
                          {ver.files?.edges?.[0]?.node?.originalFileName || "File"}
                        </button>
                      ) : (
                        <span className="text-txt-secondary italic">{__("Chưa có")}</span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      {ver.latestIngestionJob ? (
                        <Badge variant={getIngestionStatusVariant(ver.latestIngestionJob.status)}>
                          {ver.latestIngestionJob.status} {ver.latestIngestionJob.status === "RUNNING" ? `(${ver.latestIngestionJob.progressPercent}%)` : ""}
                        </Badge>
                      ) : (
                        <span className="text-txt-secondary italic">{__("Chưa bóc tách")}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Dropdown
                        toggle={
                          <Button variant="tertiary" icon={IconDotGrid1x3Horizontal} />
                        }
                      >
                        {!ver.isCurrent && (
                          <DropdownItem
                            icon={IconCheckmark1}
                            onClick={() => setVersionToSetCurrent(ver.id)}
                          >
                            {__("Đặt làm CURRENT")}
                          </DropdownItem>
                        )}
                        {ver.rawFileStatus !== "NOT_UPLOADED" ? (
                          <>
                            <DropdownItem
                              onClick={() => setVersionToUpload({ id: ver.id, replace: true })}
                            >
                              {__("Thay thế file")}
                            </DropdownItem>
                            <DropdownSeparator />
                            <DropdownItem
                              onClick={() => handleExtract(ver)}
                            >
                              {ver.latestIngestionJob?.status === "COMPLETED"
                                ? __("Chạy lại bóc tách")
                                : __("Chạy bóc tách")}
                            </DropdownItem>
                          </>
                        ) : (
                          <DropdownItem
                            onClick={() => setVersionToUpload({ id: ver.id, replace: false })}
                          >
                            {__("Tải lên file")}
                          </DropdownItem>
                        )}
                        <DropdownSeparator />
                        <DropdownItem
                          icon={IconPencil}
                          onClick={() => setVersionToEdit(ver)}
                        >
                          {__("Sửa phiên bản")}
                        </DropdownItem>
                        <DropdownItem
                          icon={IconTrashCan}
                          variant="danger"
                          onClick={() => {
                            if (window.confirm(__("Bạn có chắc chắn muốn xóa phiên bản này? Hành động này không thể hoàn tác."))) {
                              commitDelete({
                                variables: {
                                  input: { id: ver.id },
                                },
                                onCompleted: () => {
                                  toast({ title: __("Đã xóa phiên bản"), description: "", variant: "success" });
                                  onRefetch();
                                },
                                onError: (err: any) => {
                                  toast({ title: __("Lỗi"), description: err.message, variant: "error" });
                                }
                              });
                            }
                          }}
                        >
                          {__("Xóa phiên bản")}
                        </DropdownItem>
                      </Dropdown>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {isFormOpen && (
        <IcpmsDocumentVersionForm
          documentId={document.id}
          connectionId={connectionId}
          onClose={() => setIsFormOpen(false)}
          onSuccess={() => {
            setIsFormOpen(false);
            onRefetch();
          }}
        />
      )}

      {versionToEdit && (
        <IcpmsDocumentVersionForm
          documentId={document.id}
          connectionId={connectionId}
          versionId={versionToEdit.id}
          initialValues={{
            versionCode: versionToEdit.versionCode,
            versionName: versionToEdit.versionName,
            edition: versionToEdit.edition,
            amendment: versionToEdit.amendment,
          }}
          onClose={() => setVersionToEdit(null)}
          onSuccess={() => {
            setVersionToEdit(null);
            onRefetch();
          }}
        />
      )}

      {versionToSetCurrent && (
        <SetCurrentVersionDialog
          versionId={versionToSetCurrent}
          onClose={() => setVersionToSetCurrent(null)}
          onSuccess={() => {
            setVersionToSetCurrent(null);
            onRefetch();
          }}
        />
      )}

      {versionToUpload && (
        <IcpmsDocumentFileUploadDialog
          versionId={versionToUpload.id}
          isReplace={versionToUpload.replace}
          onClose={() => setVersionToUpload(null)}
          onSuccess={() => {
            setVersionToUpload(null);
          }}
        />
      )}
    </div>
  );
}
