// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { useTranslate } from "@probo/i18n";
import { Dialog, DialogContent, DialogFooter, Button, Input } from "@probo/ui";
import { useCallback, useState } from "react";
import { useMutation, graphql } from "react-relay";
import { useForm, Controller } from "react-hook-form";

import type { IcpmsDocumentVersionFormMutation } from "#/__generated__/core/IcpmsDocumentVersionFormMutation.graphql";

export const icpmsDocumentVersionFormMutation = graphql`
  mutation IcpmsDocumentVersionFormMutation($input: CreateIcpmsDocumentVersionInput!, $connections: [ID!]!) {
    createIcpmsDocumentVersion(input: $input) {
      version @prependNode(connections: $connections, edgeTypeName: "IcpmsDocumentVersionEdge") {
        id
        versionCode
        versionName
        status
        edition
        amendment
        versionNumber
        effectiveDate
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
`;

export const icpmsDocumentVersionFormUpdateMutation = graphql`
  mutation IcpmsDocumentVersionFormUpdateMutation($input: UpdateIcpmsDocumentVersionInput!) {
    updateIcpmsDocumentVersion(input: $input) {
      version {
        id
        versionCode
        versionName
        status
        edition
        amendment
        versionNumber
        effectiveDate
        isCurrent
        rawFileStatus
      }
    }
  }
`;

export interface IcpmsDocumentVersionFormValues {
  versionCode: string;
  versionName?: string;
  edition?: string;
  amendment?: string;
  effectiveDate?: string;
  expiryDate?: string;
}

export function IcpmsDocumentVersionForm(props: {
  documentId: string;
  connectionId: string;
  versionId?: string;
  initialValues?: IcpmsDocumentVersionFormValues;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const { documentId, connectionId, versionId, initialValues, onClose, onSuccess } = props;
  const { __ } = useTranslate();
  const [commitCreate, isCreating] = useMutation<IcpmsDocumentVersionFormMutation>(icpmsDocumentVersionFormMutation);
  const [commitUpdate, isUpdating] = useMutation<any>(icpmsDocumentVersionFormUpdateMutation);
  const isInFlight = isCreating || isUpdating;
  const [errorMsg, setErrorMsg] = useState("");

  const { control, handleSubmit, setError, formState: { errors } } = useForm<IcpmsDocumentVersionFormValues>({
    defaultValues: initialValues || {
      versionCode: "",
      versionName: "",
      edition: "",
      amendment: "",
    },
  });

  const onSubmit = useCallback(
    (values: IcpmsDocumentVersionFormValues) => {
      setErrorMsg("");

      const effectiveDate = values.effectiveDate ? new Date(values.effectiveDate).toISOString() : null;
      const expiryDate = values.expiryDate ? new Date(values.expiryDate).toISOString() : null;

      const onCompleted = (_: any, errors: any) => {
        if (errors) {
          const msg = errors[0].message;
          if (msg.includes("đã tồn tại")) {
            const cleanedMsg = msg.split(":").pop()?.trim() || msg;
            setError("versionCode", { type: "server", message: cleanedMsg });
          } else {
            setErrorMsg(msg);
          }
        } else {
          onSuccess();
        }
      };

      const onError = (err: any) => {
        const graphqlErrors = err?.source?.errors;
        const msg = graphqlErrors?.[0]?.message || err.message;
        
        if (msg.includes("đã tồn tại")) {
          const cleanedMsg = msg.split(":").pop()?.trim() || msg;
          setError("versionCode", { type: "server", message: cleanedMsg });
        } else {
          setErrorMsg(msg);
        }
      };

      if (versionId) {
        commitUpdate({
          variables: {
            input: {
              id: versionId,
              versionCode: values.versionCode,
              versionName: values.versionName || "",
              edition: values.edition || undefined,
              amendment: values.amendment || undefined,
              effectiveDate,
              expiryDate,
            },
          },
          onCompleted,
          onError,
        });
      } else {
        commitCreate({
          variables: {
            connections: [connectionId],
            input: {
              documentId,
              versionCode: values.versionCode,
              versionName: values.versionName || "",
              edition: values.edition || undefined,
              amendment: values.amendment || undefined,
              effectiveDate,
              expiryDate,
              status: "DRAFT",
              isCurrent: false,
            },
          },
          onCompleted,
          onError,
        });
      }
    },
    [commitCreate, commitUpdate, documentId, connectionId, versionId, onSuccess, setError],
  );

  return (
    <Dialog defaultOpen onClose={onClose} title={versionId ? __("Cập nhật phiên bản") : __("Thêm phiên bản mới")}>
      <DialogContent padded>
        <form id="create-version-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <Controller
            control={control}
            name="versionCode"
            rules={{ required: __("Mã phiên bản là bắt buộc") }}
            render={({ field }) => (
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-txt-primary">{__("Mã phiên bản")} <span className="text-red-500">*</span></label>
                <Input {...field} placeholder="VD: v1.0, 4th Edition..." />
                {errors.versionCode?.message && <span className="text-xs text-red-500">{errors.versionCode.message}</span>}
              </div>
            )}
          />

          <Controller
            control={control}
            name="versionName"
            render={({ field }) => (
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-txt-primary">{__("Tên phiên bản")}</label>
                <Input {...field} placeholder="VD: Bản sửa đổi lần 1..." />
              </div>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <Controller
              control={control}
              name="edition"
              render={({ field }) => (
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-txt-primary">{__("Edition")}</label>
                  <Input {...field} placeholder="VD: 4" />
                </div>
              )}
            />

            <Controller
              control={control}
              name="amendment"
              render={({ field }) => (
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-txt-primary">{__("Amendment")}</label>
                  <Input {...field} placeholder="VD: 39" />
                </div>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Controller
              control={control}
              name="effectiveDate"
              render={({ field }) => (
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-txt-primary">{__("Ngày có hiệu lực")}</label>
                  <input type="date" className="border border-border-mid rounded-md p-2 text-sm bg-bg-base" value={field.value || ""} onChange={field.onChange} />
                </div>
              )}
            />

            <Controller
              control={control}
              name="expiryDate"
              render={({ field }) => (
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-txt-primary">{__("Ngày hết hiệu lực")}</label>
                  <input type="date" className="border border-border-mid rounded-md p-2 text-sm bg-bg-base" value={field.value || ""} onChange={field.onChange} />
                </div>
              )}
            />
          </div>

          {errorMsg && <div className="text-red-500 text-sm mt-2">{errorMsg}</div>}
        </div>
        </form>
      </DialogContent>
      <DialogFooter exitLabel={__("Hủy")}>
        <Button form="create-version-form" type="submit" disabled={isInFlight}>
          {versionId ? __("Cập nhật") : __("Tạo mới")}
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
