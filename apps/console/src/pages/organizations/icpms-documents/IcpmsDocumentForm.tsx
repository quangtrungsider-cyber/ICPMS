// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { useTranslate } from "@probo/i18n";
import { Button, Dialog, DialogContent, DialogFooter, Input, Select, Option, useToast } from "@probo/ui";
import { useCallback, useState } from "react";
import { useMutation, graphql } from "react-relay";
import { useForm, Controller } from "react-hook-form";

import type { IcpmsDocumentFormMutation } from "#/__generated__/core/IcpmsDocumentFormMutation.graphql";

export const icpmsDocumentFormMutation = graphql`
  mutation IcpmsDocumentFormMutation($input: CreateIcpmsDocumentInput!) {
    createIcpmsDocument(input: $input) {
      id
      code
      documentCode
      title
      documentType
      status
    }
  }
`;

export const icpmsDocumentFormUpdateMutation = graphql`
  mutation IcpmsDocumentFormUpdateMutation($id: ID!, $input: UpdateIcpmsDocumentInput!) {
    updateIcpmsDocument(id: $id, input: $input) {
      id
      code
      documentCode
      title
      documentType
      status
    }
  }
`;

export interface IcpmsDocumentFormValues {
  code: string;
  documentCode: string;
  title: string;
  documentType: string;
  documentGroup: string;
  mainDomain: string;
  pageCount: string;
  status: string;
}

export function IcpmsDocumentForm(props: {
  organizationId: string;
  documentId?: string;
  initialValues?: IcpmsDocumentFormValues;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const { organizationId, documentId, initialValues, onClose, onSuccess } = props;
  const { __ } = useTranslate();
  const { toast } = useToast();

  const [commitCreate, isCreating] = useMutation<IcpmsDocumentFormMutation>(icpmsDocumentFormMutation);
  const [commitUpdate, isUpdating] = useMutation<any>(icpmsDocumentFormUpdateMutation);
  const isInFlight = isCreating || isUpdating;
  const [errorMsg, setErrorMsg] = useState("");

  const { control, handleSubmit, register, setError, formState: { errors } } = useForm<IcpmsDocumentFormValues>({
    defaultValues: initialValues || {
      code: "",
      documentCode: "",
      title: "",
      documentType: "ICAO_DOC",
      documentGroup: "",
      mainDomain: "",
      pageCount: "",
      status: "DRAFT",
    },
  });

  const documentTypeOptions = [
    { label: "ICAO Annex", value: "ICAO_ANNEX" },
    { label: "ICAO Doc", value: "ICAO_DOC" },
    { label: "ICAO Circular", value: "ICAO_CIRCULAR" },
    { label: "ICAO APAC", value: "ICAO_APAC" },
    { label: "CANSO Guidance", value: "CANSO_GUIDANCE" },
    { label: "ISO Standard", value: "ISO_STANDARD" },
    { label: "EASA/EU", value: "EASA_EU" },
    { label: "EUROCONTROL", value: "EUROCONTROL" },
    { label: "EUROCAE/RTCA", value: "EUROCAE_RTCA" },
    { label: "VATM Internal", value: "VATM_INTERNAL" },
    { label: "Decree", value: "DECREE" },
    { label: "Circular VN", value: "CIRCULAR_VN" },
    { label: "Decision", value: "DECISION" },
    { label: "Internal Regulation", value: "INTERNAL_REGULATION" },
    { label: "Procedure", value: "PROCEDURE" },
    { label: "Guidance", value: "GUIDANCE" },
    { label: "Form", value: "FORM" },
    { label: "Technical Document", value: "TECHNICAL_DOCUMENT" },
    { label: "Safety Document", value: "SAFETY_DOCUMENT" },
    { label: "Compliance Document", value: "COMPLIANCE_DOCUMENT" },
    { label: __("Khác"), value: "OTHER" },
  ];

  const documentGroupOptions = [
    { label: "ICAO", value: "ICAO" },
    { label: "ICAO APAC", value: "ICAO_APAC" },
    { label: "CANSO", value: "CANSO" },
    { label: "ISO", value: "ISO" },
    { label: "EASA/EU", value: "EASA_EU" },
    { label: "EUROCONTROL", value: "EUROCONTROL" },
    { label: "EUROCAE/RTCA", value: "EUROCAE_RTCA" },
    { label: "Vietnam Legal", value: "VIETNAM_LEGAL" },
    { label: "VATM", value: "VATM" },
    { label: __("Khác"), value: "OTHER" },
  ];

  const statusOptions = [
    { label: __("Nháp"), value: "DRAFT" },
    { label: __("Đang hiệu lực"), value: "ACTIVE" },
    { label: __("Đang rà soát"), value: "UNDER_REVIEW" },
    { label: __("Thay thế"), value: "SUPERSEDED" },
    { label: __("Lưu trữ"), value: "ARCHIVED" },
  ];

  const handleMutationError = useCallback(
    (message: string) => {
      if (
        message.includes("organization_code_unique") ||
        message.includes("mã tài liệu") ||
        (message.includes("duplicate") && message.includes("code") && !message.includes("document_code"))
      ) {
        setError("code", { message: __("Mã tài liệu này đã tồn tại trong tổ chức, vui lòng dùng mã khác") });
      } else if (message.includes("idx_icpms_documents_document_code") || message.includes("document_code")) {
        setError("documentCode", { message: __("Mã nghiệp vụ này đã được dùng trong tổ chức, vui lòng chọn mã khác") });
      } else {
        setErrorMsg(message);
      }
    },
    [setError, __],
  );

  const onSubmit = useCallback(
    (values: IcpmsDocumentFormValues) => {
      setErrorMsg("");

      const onCompleted = (_: any, errors: any) => {
        if (errors) {
          handleMutationError(errors[0].message);
        } else {
          toast({
            title: documentId ? __("Cập nhật tài liệu thành công") : __("Thêm tài liệu thành công"),
            description: "",
            variant: "success",
          });
          onSuccess();
        }
      };

      const onError = (err: Error) => {
        handleMutationError(err.message);
      };

      const pageCountNum = values.pageCount ? parseInt(values.pageCount, 10) : null;

      const documentCode = values.documentCode.trim().toUpperCase() || null;

      if (documentId) {
        commitUpdate({
          variables: {
            id: documentId,
            input: {
              code: values.code,
              documentCode,
              title: values.title,
              documentType: values.documentType as any,
              documentGroup: (values.documentGroup || null) as any,
              mainDomain: values.mainDomain || null,
              pageCount: pageCountNum,
              status: values.status as any,
            },
          },
          onCompleted,
          onError,
        });
      } else {
        commitCreate({
          variables: {
            input: {
              organizationId,
              code: values.code,
              documentCode,
              title: values.title,
              documentType: values.documentType as any,
              documentGroup: (values.documentGroup || null) as any,
              mainDomain: values.mainDomain || null,
              pageCount: pageCountNum,
              status: values.status as any,
            },
          },
          onCompleted,
          onError,
        });
      }
    },
    [commitCreate, commitUpdate, documentId, organizationId, onSuccess, toast, __, handleMutationError],
  );

  return (
    <Dialog defaultOpen onClose={onClose} title={documentId ? __("Cập nhật tài liệu") : __("Thêm tài liệu mới")}>
      <DialogContent padded>
        <form id="create-document-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Controller
              control={control}
              name="code"
              rules={{ required: __("Mã tài liệu là bắt buộc") }}
              render={({ field }) => (
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-txt-primary">
                    {__("Mã tài liệu")} <span className="text-red-500">*</span>
                  </label>
                  <Input {...field} placeholder="VD: 125/2015/NĐ-CP" />
                  {errors.code?.message && <span className="text-xs text-red-500">{errors.code.message}</span>}
                </div>
              )}
            />

            <Controller
              control={control}
              name="documentCode"
              rules={{
                pattern: {
                  value: /^[A-Z0-9]+(-[A-Z0-9]+)*$/,
                  message: __("Mã nghiệp vụ chỉ gồm chữ IN HOA, số, dấu gạch ngang. VD: ND125, ANX11, QC-VATM"),
                },
              }}
              render={({ field }) => (
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-txt-primary">
                    {__("Mã nghiệp vụ")}
                    <span className="ml-1 text-xs text-txt-secondary font-normal">({__("dùng để tạo mã Job, tùy chọn")})</span>
                  </label>
                  <Input
                    {...field}
                    placeholder="VD: ND125, ANX11, QC-VATM, TT32"
                    onChange={(e) => field.onChange(e.target.value.toUpperCase())}
                  />
                  {errors.documentCode?.message && <span className="text-xs text-red-500">{errors.documentCode.message}</span>}
                </div>
              )}
            />

            <Controller
              control={control}
              name="title"
              rules={{ required: __("Tên tài liệu là bắt buộc") }}
              render={({ field }) => (
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-txt-primary">
                    {__("Tên tài liệu")} <span className="text-red-500">*</span>
                  </label>
                  <Input {...field} placeholder="VD: Safety Management Manual" />
                  {errors.title?.message && <span className="text-xs text-red-500">{errors.title.message}</span>}
                </div>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <Controller
                control={control}
                name="documentType"
                render={({ field }) => (
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-txt-primary">{__("Loại tài liệu")}</label>
                    <Select value={field.value} onValueChange={field.onChange}>
                      {documentTypeOptions.map(opt => (
                        <Option key={opt.value} value={opt.value}>{opt.label}</Option>
                      ))}
                    </Select>
                  </div>
                )}
              />

              <Controller
                control={control}
                name="documentGroup"
                render={({ field }) => (
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-txt-primary">{__("Nhóm tài liệu")}</label>
                    <Select value={field.value || undefined} onValueChange={field.onChange} placeholder={__("-- Chọn nhóm --")}>
                      {documentGroupOptions.map(opt => (
                        <Option key={opt.value} value={opt.value}>{opt.label}</Option>
                      ))}
                    </Select>
                  </div>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-txt-primary">{__("Lĩnh vực")}</label>
                <Input {...register("mainDomain")} placeholder="VD: Safety Management" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-txt-primary">{__("Số trang")}</label>
                <Input {...register("pageCount")} type="number" min="1" placeholder="VD: 120" />
              </div>
            </div>

            <Controller
              control={control}
              name="status"
              render={({ field }) => (
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-txt-primary">{__("Trạng thái")}</label>
                  <Select value={field.value} onValueChange={field.onChange}>
                    {statusOptions.map(opt => (
                      <Option key={opt.value} value={opt.value}>{opt.label}</Option>
                    ))}
                  </Select>
                </div>
              )}
            />

            {errorMsg && <div className="text-red-500 text-sm mt-2">{errorMsg}</div>}
          </div>
        </form>
      </DialogContent>
      <DialogFooter exitLabel={__("Hủy")}>
        <Button form="create-document-form" type="submit" disabled={isInFlight}>
          {documentId ? __("Cập nhật") : __("Tạo mới")}
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
