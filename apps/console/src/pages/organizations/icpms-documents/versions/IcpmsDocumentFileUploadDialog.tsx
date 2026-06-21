// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { useTranslate } from "@probo/i18n";
import { Button, Dialog, DialogContent, DialogFooter, Dropzone, useToast } from "@probo/ui";
import { useState } from "react";
import { useMutation } from "react-relay";
import { graphql } from "relay-runtime";

import type { IcpmsDocumentFileUploadDialogMutation } from "#/__generated__/core/IcpmsDocumentFileUploadDialogMutation.graphql";
import type { IcpmsDocumentFileUploadDialogReplaceMutation } from "#/__generated__/core/IcpmsDocumentFileUploadDialogReplaceMutation.graphql";

const uploadMutation = graphql`
  mutation IcpmsDocumentFileUploadDialogMutation($input: UploadIcpmsDocumentFileInput!) {
    uploadIcpmsDocumentFile(input: $input) {
      file {
        id
        originalFileName
        uploadStatus
      }
      documentVersion {
        id
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

const replaceMutation = graphql`
  mutation IcpmsDocumentFileUploadDialogReplaceMutation($input: ReplaceIcpmsDocumentFileInput!) {
    replaceIcpmsDocumentFile(input: $input) {
      file {
        id
        originalFileName
        uploadStatus
      }
      documentVersion {
        id
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

export function IcpmsDocumentFileUploadDialog(props: {
  versionId: string;
  isReplace?: boolean;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const { versionId, isReplace, onClose, onSuccess } = props;
  const { __ } = useTranslate();
  const { toast } = useToast();
  
  const [file, setFile] = useState<File | null>(null);
  
  const [commitUpload, isUploading] = useMutation<IcpmsDocumentFileUploadDialogMutation>(uploadMutation);
  const [commitReplace, isReplacing] = useMutation<IcpmsDocumentFileUploadDialogReplaceMutation>(replaceMutation);

  const isInFlight = isUploading || isReplacing;

  const handleSubmit = () => {
    if (!file) return;

    const onCompleted = () => {
      toast({
        title: isReplace ? __("Thay thế file thành công") : __("Upload file thành công"),
        description: "",
        variant: "success",
      });
      onSuccess();
    };

    const onError = (err: Error) => {
      toast({
        title: isReplace ? __("Thay thế file thất bại") : __("Upload file thất bại"),
        description: err.message,
        variant: "error",
      });
    };

    if (isReplace) {
      commitReplace({
        variables: {
          input: {
            documentVersionId: versionId,
            file: null,
          },
        },
        uploadables: {
          "input.file": file,
        },
        onCompleted,
        onError,
      });
    } else {
      commitUpload({
        variables: {
          input: {
            documentVersionId: versionId,
            file: null,
          },
        },
        uploadables: {
          "input.file": file,
        },
        onCompleted,
        onError,
      });
    }
  };

  return (
    <Dialog defaultOpen onClose={onClose} title={isReplace ? __("Thay thế file gốc") : __("Tải lên file gốc")}>
      <DialogContent padded>
        <p className="text-sm text-txt-secondary mb-4">
          {__("Chọn file tài liệu gốc từ máy tính của bạn (PDF, DOC, DOCX, TXT). Dung lượng tối đa 100MB.")}
        </p>
        <div className="py-4">
          <Dropzone
            description={__("Chọn file tài liệu gốc từ máy tính của bạn (PDF, DOC, DOCX, TXT). Dung lượng tối đa 100MB.")}
            isUploading={isInFlight}
            onDrop={(files) => {
              if (files.length > 0) setFile(files[0]);
            }}
            maxSize={100}
            accept={{
              "application/pdf": [".pdf"],
              "application/msword": [".doc"],
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
              "text/plain": [".txt"]
            }}
          />
          {file && (
            <div className="mt-4 text-sm font-medium text-txt-primary flex justify-between items-center bg-bg-alt p-3 rounded border border-border-mid">
              <span>{file.name}</span>
              <button 
                className="text-txt-secondary hover:text-red-500" 
                onClick={() => setFile(null)}
              >
                {__("Xóa")}
              </button>
            </div>
          )}
        </div>
      </DialogContent>
      <DialogFooter exitLabel={__("Hủy")}>
        <Button onClick={handleSubmit} disabled={!file || isInFlight}>
          {isReplace ? __("Thay thế") : __("Tải lên")}
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
