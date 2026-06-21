// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { useTranslate } from "@probo/i18n";
import { usePageTitle } from "@probo/hooks";
import { Badge, Button, Card, IconPlusLarge, IconArrowDown, IconUpload, IconImport2, IconCrossLargeX, IconCircleInfo, IconMagnifyingGlass, Input, Select, Option, PageHeader, Dropdown, DropdownItem, DropdownSeparator, IconDotGrid1x3Horizontal, IconTrashCan, IconPencil } from "@probo/ui";
import { Suspense, useState, useMemo } from "react";
import { type PreloadedQuery, usePreloadedQuery, useMutation } from "react-relay";
import { graphql } from "relay-runtime";
import { useNavigate } from "react-router";

import type { IcpmsDocumentsPageQuery } from "#/__generated__/core/IcpmsDocumentsPageQuery.graphql";
import type { IcpmsDocumentFormMutation } from "#/__generated__/core/IcpmsDocumentFormMutation.graphql";
import { useOrganizationId } from "#/hooks/useOrganizationId";
import { IcpmsDocumentForm, icpmsDocumentFormMutation, type IcpmsDocumentFormValues } from "./IcpmsDocumentForm";
import { IcpmsDocumentDetailView } from "./IcpmsDocumentDetailView";
import * as XLSX from "xlsx";

const deleteDocumentMutation = graphql`
  mutation IcpmsDocumentsPageDeleteMutation($id: ID!) {
    deleteIcpmsDocument(id: $id)
  }
`;

export const icpmsDocumentsPageQuery = graphql`
  query IcpmsDocumentsPageQuery($organizationId: ID!) {
    organization: node(id: $organizationId) {
      ... on Organization {
        id
        name
        icpmsDocuments(first: 1000, orderBy: { field: CREATED_AT, direction: DESC }) {
          edges {
            node {
              id
              code
              documentCode
              title
              documentType
              documentGroup
              mainDomain
              pageCount
              status
              createdAt
            }
          }
        }
      }
    }
  }
`;

export function IcpmsDocumentsPage(props: { queryRef: PreloadedQuery<IcpmsDocumentsPageQuery> }) {
  usePageTitle("Tài liệu ICPMS");
  const { queryRef } = props;
  const data = usePreloadedQuery(icpmsDocumentsPageQuery, queryRef);
  const organizationId = useOrganizationId();
  const { __ } = useTranslate();
  const navigate = useNavigate();

  const [selectedDocumentId, setSelectedDocumentId] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [documentToEdit, setDocumentToEdit] = useState<{ id: string; values: IcpmsDocumentFormValues } | null>(null);
  const [isImporting, setIsImporting] = useState(false);
  const [importProgress, setImportProgress] = useState(0);

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<string | null>(null);
  const [groupFilter, setGroupFilter] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  const [commitMutation] = useMutation<IcpmsDocumentFormMutation>(icpmsDocumentFormMutation);
  const [commitDelete] = useMutation<any>(deleteDocumentMutation);

  const handleDeleteDocument = (id: string) => {
    if (!window.confirm(__("Bạn có chắc chắn muốn xóa tài liệu này? Hành động này không thể hoàn tác."))) return;
    commitDelete({
      variables: { id },
      onCompleted: () => {
        if (selectedDocumentId === id) setSelectedDocumentId(null);
        navigate(0);
      },
      onError: (err) => alert("Lỗi xóa: " + err.message),
    });
  };

  const organization = data.organization;
  if (!organization) {
    throw new Error("Invalid organization");
  }

  const documents = organization.icpmsDocuments?.edges.map((e) => e.node) || [];

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchCode = doc.code.toLowerCase().includes(q);
        const matchTitle = doc.title.toLowerCase().includes(q);
        const matchDomain = (doc.mainDomain || "").toLowerCase().includes(q);
        if (!matchCode && !matchTitle && !matchDomain) return false;
      }
      if (typeFilter && doc.documentType !== typeFilter) return false;
      if (groupFilter && doc.documentGroup !== groupFilter) return false;
      if (statusFilter && doc.status !== statusFilter) return false;
      return true;
    });
  }, [documents, searchQuery, typeFilter, groupFilter, statusFilter]);

  const handleExport = () => {
    const ws = XLSX.utils.json_to_sheet(filteredDocuments.map(d => ({
      "Mã tài liệu": d.code,
      "Tên tài liệu": d.title,
      "Loại": d.documentType,
      "Nhóm": d.documentGroup || "",
      "Lĩnh vực": d.mainDomain || "",
      "Số trang": d.pageCount || "",
      "Trạng thái": d.status,
      "Ngày tạo": d.createdAt ? new Date(d.createdAt as string).toLocaleDateString() : ""
    })));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Documents");
    XLSX.writeFile(wb, "icpms_documents.xlsx");
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsImporting(true);
    const reader = new FileReader();
    reader.onload = async (evt) => {
      try {
        const bstr = evt.target?.result;
        const wb = XLSX.read(bstr, { type: "binary" });
        const wsname = wb.SheetNames[0]; // Assuming data is in the first sheet
        const ws = wb.Sheets[wsname];
        const rows = XLSX.utils.sheet_to_json(ws);
        
        let successCount = 0;
        
        const validTypes = [
          "ICAO_ANNEX", "ICAO_DOC", "ICAO_CIRCULAR", "ICAO_APAC", "CANSO_GUIDANCE",
          "ISO_STANDARD", "EASA_EU", "EUROCONTROL", "EUROCAE_RTCA", "VATM_INTERNAL",
          "DECREE", "CIRCULAR_VN", "DECISION", "INTERNAL_REGULATION", "PROCEDURE",
          "GUIDANCE", "FORM", "TECHNICAL_DOCUMENT", "SAFETY_DOCUMENT", "COMPLIANCE_DOCUMENT", "OTHER"
        ];
        
        for (let i = 0; i < rows.length; i++) {
          const row: any = rows[i];
          if (!row.document_code || !row.document_title) continue;
          
          let docType = (row.document_type || "OTHER").toUpperCase();
          if (!validTypes.includes(docType)) docType = "OTHER";

          await new Promise<void>((resolve) => {
            commitMutation({
              variables: {
                input: {
                  organizationId,
                  code: row.document_code.toString(),
                  title: row.document_title.toString(),
                  documentType: docType,
                  documentGroup: (row.document_group || "OTHER").toUpperCase(),
                  sourceOrganization: row.source_organization || "",
                  mainDomain: row.main_domain || "",
                  pageCount: row.page_count ? parseInt(row.page_count) : null,
                  language: row.language || "",
                  classification: (row.classification || "PUBLIC").toUpperCase() as any,
                  applicableToVatm: (row.applicable_to_vatm || "REVIEW").toUpperCase() as any,
                  priority: (row.priority || "MEDIUM").toUpperCase() as any,
                  status: (row.status || "ACTIVE").toUpperCase() as any,
                  notes: row.notes || "",
                }
              },
              onCompleted: () => {
                successCount++;
                resolve();
              },
              onError: (err) => {
                console.error("Lỗi import tại row", row.document_code, err);
                if (successCount === 0 && i === 0) {
                  alert(`Lỗi import: ${err.message || JSON.stringify(err)}`);
                }
                resolve();
              }
            });
          });
          
          setImportProgress(Math.round(((i + 1) / rows.length) * 100));
        }
        
        alert(`Import thành công ${successCount} tài liệu! Xin chờ giây lát để tải lại trang.`);
        navigate(0);
      } catch (err) {
        console.error(err);
        alert("Có lỗi xảy ra khi import file Excel!");
      } finally {
        setIsImporting(false);
        setImportProgress(0);
        if (e.target) e.target.value = '';
      }
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className="space-y-8 flex flex-col h-full">
      <PageHeader
        title={__("Tài liệu ICPMS")}
        description={__("Quản lý tài liệu tuân thủ, quy định, hướng dẫn và ICAO Doc/Annex.")}
      >
        <div className="flex items-center gap-2">
          <Button icon={IconPlusLarge} onClick={() => setIsFormOpen(true)}>{__("Thêm tài liệu mới")}</Button>
          <div className="w-px h-6 bg-border-mid mx-1" aria-hidden />
          <Button variant="secondary" icon={IconArrowDown} onClick={() => window.open("/template_import_icpms.xlsx", "_blank")}>{__("Tải file mẫu import")}</Button>
          
          <div className="relative">
            <input 
              type="file" 
              accept=".xlsx,.xls" 
              onChange={handleImport} 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
              disabled={isImporting}
              title={__("Import file Excel")}
            />
            <Button variant="secondary" icon={IconImport2} disabled={isImporting}>
              {isImporting ? `${__("Đang import...")} ${importProgress}%` : __("Import danh mục")}
            </Button>
          </div>
          
          <Button variant="secondary" icon={IconUpload} onClick={handleExport} disabled={isImporting}>{__("Export")}</Button>
        </div>
      </PageHeader>

      <div className="flex flex-col gap-4">
        {/* Filters and Search Bar */}
        <div className="flex gap-4 items-center">
          <Input 
            className="w-[300px]" 
            icon={IconMagnifyingGlass}
            placeholder={__("Tìm kiếm mã hoặc tên tài liệu...")} 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Select 
            value={typeFilter ?? "ALL"} 
            onValueChange={(val) => setTypeFilter(val === "ALL" ? null : val)}
          >
            <Option value="ALL">{__("Tất cả loại")}</Option>
            <Option value="ICAO_ANNEX">ICAO Annex</Option>
            <Option value="ICAO_DOC">ICAO Doc</Option>
            <Option value="ICAO_CIRCULAR">ICAO Circular</Option>
            <Option value="ICAO_APAC">ICAO APAC</Option>
            <Option value="CANSO_GUIDANCE">CANSO Guidance</Option>
            <Option value="ISO_STANDARD">ISO Standard</Option>
            <Option value="EASA_EU">EASA/EU</Option>
            <Option value="EUROCONTROL">EUROCONTROL</Option>
            <Option value="EUROCAE_RTCA">EUROCAE/RTCA</Option>
            <Option value="VATM_INTERNAL">VATM Internal</Option>
            <Option value="DECREE">Decree</Option>
            <Option value="CIRCULAR_VN">Circular VN</Option>
            <Option value="DECISION">Decision</Option>
            <Option value="INTERNAL_REGULATION">Internal Regulation</Option>
            <Option value="PROCEDURE">Procedure</Option>
            <Option value="GUIDANCE">Guidance</Option>
            <Option value="FORM">Form</Option>
            <Option value="TECHNICAL_DOCUMENT">Technical Document</Option>
            <Option value="SAFETY_DOCUMENT">Safety Document</Option>
            <Option value="COMPLIANCE_DOCUMENT">Compliance Document</Option>
            <Option value="OTHER">{__("Khác")}</Option>
          </Select>

          <Select 
            value={groupFilter ?? "ALL"} 
            onValueChange={(val) => setGroupFilter(val === "ALL" ? null : val)}
          >
            <Option value="ALL">{__("Tất cả nhóm")}</Option>
            <Option value="ICAO">ICAO</Option>
            <Option value="ICAO_APAC">ICAO APAC</Option>
            <Option value="CANSO">CANSO</Option>
            <Option value="ISO">ISO</Option>
            <Option value="EASA_EU">EASA/EU</Option>
            <Option value="EUROCONTROL">EUROCONTROL</Option>
            <Option value="EUROCAE_RTCA">EUROCAE/RTCA</Option>
            <Option value="VIETNAM_LEGAL">VIETNAM LEGAL</Option>
            <Option value="VATM">VATM</Option>
            <Option value="OTHER">{__("Khác")}</Option>
          </Select>

          <Select 
            value={statusFilter ?? "ALL"} 
            onValueChange={(val) => setStatusFilter(val === "ALL" ? null : val)}
          >
            <Option value="ALL">{__("Tất cả trạng thái")}</Option>
            <Option value="DRAFT">{__("Nháp")}</Option>
            <Option value="ACTIVE">{__("Đang hiệu lực")}</Option>
            <Option value="UNDER_REVIEW">{__("Đang rà soát")}</Option>
            <Option value="SUPERSEDED">{__("Thay thế")}</Option>
            <Option value="ARCHIVED">{__("Lưu trữ")}</Option>
          </Select>

          <Button 
            variant="tertiary" 
            icon={IconCrossLargeX}
            onClick={() => {
              setSearchQuery("");
              setTypeFilter(null);
              setGroupFilter(null);
              setStatusFilter(null);
            }}
          >
            {__("Xóa lọc")}
          </Button>
        </div>

        <div
          className="w-full px-4 py-2.5 rounded-lg text-sm flex items-center gap-2"
          style={{ background: "#eff6ff", color: "#1d4ed8" }}
        >
          <IconCircleInfo size={16} className="shrink-0" />
          {__("Chọn một tài liệu để xem ngay các phiên bản bên cạnh.")}
        </div>

        {/* Master Detail Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7">
            <Card className="h-[calc(100vh-250px)] flex flex-col overflow-hidden">
              <div className="p-4 border-b border-border-mid flex justify-between items-center bg-level-1">
                <h3 className="font-semibold text-txt-primary">
                  {__("Danh sách tài liệu")} ({filteredDocuments.length})
                </h3>
                <Button variant="tertiary" onClick={() => navigate(0)}>{__("Làm mới")}</Button>
              </div>
              
              <div className="flex-1 overflow-auto bg-level-1">
                {filteredDocuments.length === 0 ? (
                  <div className="py-12 flex flex-col items-center justify-center gap-2 text-center h-full">
                    <h3 className="text-lg font-medium text-txt-primary">{__("Chưa có tài liệu nào")}</h3>
                    <p className="text-sm text-txt-secondary">{__("Không tìm thấy tài liệu phù hợp với bộ lọc hoặc chưa có tài liệu nào được nạp.")}</p>
                  </div>
                ) : (
                  <table className="w-full border-collapse text-sm text-left">
                    <thead className="sticky top-0 bg-level-2 z-10 border-b border-border-mid shadow-sm">
                      <tr className="text-txt-secondary">
                        <th className="py-3 px-4 font-medium">{__("Mã tài liệu")}</th>
                        <th className="py-3 px-4 font-medium">{__("Tên tài liệu")}</th>
                        <th className="py-3 px-4 font-medium">{__("Loại")}</th>
                        <th className="py-3 px-4 font-medium">{__("Nhóm")}</th>
                        <th className="py-3 px-4 font-medium">{__("Lĩnh vực")}</th>
                        <th className="py-3 px-4 font-medium">{__("Trạng thái")}</th>
                         <th className="py-3 px-4 font-medium text-right">{__("Thao tác")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredDocuments.map((doc) => (
                        <tr 
                          key={doc.id} 
                          onClick={() => setSelectedDocumentId(doc.id)}
                          className={`border-b border-border-mid cursor-pointer transition-colors ${selectedDocumentId === doc.id ? 'bg-success-10 border-l-4 border-l-success-60' : 'hover:bg-bg-alt border-l-4 border-l-transparent'}`}
                        >
                          <td className="py-3 px-4 font-medium text-txt-primary flex items-center gap-2">
                            {selectedDocumentId === doc.id && <span className="w-4 h-4 bg-success-60 text-white rounded-full flex items-center justify-center text-[10px]">✔</span>}
                            {doc.code}
                          </td>
                          <td className="py-3 px-4 text-txt-primary">{doc.title}</td>
                          <td className="py-3 px-4 text-txt-secondary">{doc.documentType}</td>
                          <td className="py-3 px-4 text-txt-secondary">{doc.documentGroup || "-"}</td>
                          <td className="py-3 px-4 text-txt-secondary">{doc.mainDomain || "-"}</td>
                          <td className="py-3 px-4">
                            <Badge variant={doc.status === "ACTIVE" ? "success" : doc.status === "DRAFT" ? "warning" : "neutral"}>
                              {doc.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                            <Dropdown toggle={<Button variant="tertiary" icon={IconDotGrid1x3Horizontal} />}>
                              <DropdownItem
                                icon={IconPencil}
                                onClick={() => setDocumentToEdit({
                                  id: doc.id,
                                  values: {
                                    code: doc.code,
                                    documentCode: doc.documentCode || "",
                                    title: doc.title,
                                    documentType: doc.documentType,
                                    documentGroup: doc.documentGroup || "",
                                    mainDomain: doc.mainDomain || "",
                                    pageCount: doc.pageCount != null ? String(doc.pageCount) : "",
                                    status: doc.status,
                                  },
                                })}
                              >
                                {__("Sửa tài liệu")}
                              </DropdownItem>
                              <DropdownSeparator />
                              <DropdownItem
                                icon={IconTrashCan}
                                variant="danger"
                                onClick={() => handleDeleteDocument(doc.id)}
                              >
                                {__("Xóa tài liệu")}
                              </DropdownItem>
                            </Dropdown>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </Card>
          </div>

          <div className="lg:col-span-5 h-[calc(100vh-250px)]">
            {selectedDocumentId ? (
              <Suspense fallback={<div className="p-8 text-center text-txt-secondary">{__("Đang tải phiên bản...")}</div>}>
                <IcpmsDocumentDetailView documentId={selectedDocumentId} />
              </Suspense>
            ) : (
              <Card className="h-full flex items-center justify-center text-txt-tertiary bg-level-2 border-dashed">
                {__("Chọn một tài liệu để xem phiên bản")}
              </Card>
            )}
          </div>
        </div>
      </div>

      {isFormOpen && (
        <IcpmsDocumentForm
          organizationId={organizationId}
          onClose={() => setIsFormOpen(false)}
          onSuccess={() => { setIsFormOpen(false); navigate(0); }}
        />
      )}

      {documentToEdit && (
        <IcpmsDocumentForm
          organizationId={organizationId}
          documentId={documentToEdit.id}
          initialValues={documentToEdit.values}
          onClose={() => setDocumentToEdit(null)}
          onSuccess={() => { setDocumentToEdit(null); navigate(0); }}
        />
      )}
    </div>
  );
}