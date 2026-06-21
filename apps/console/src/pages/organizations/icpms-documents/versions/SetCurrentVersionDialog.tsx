// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { useTranslate } from "@probo/i18n";
import { Button, Dialog, DialogContent, DialogFooter } from "@probo/ui";
import { useCallback, useState } from "react";
import { useMutation, graphql } from "react-relay";

import type { SetCurrentVersionDialogMutation } from "#/__generated__/core/SetCurrentVersionDialogMutation.graphql";

export const setCurrentVersionDialogMutation = graphql`
  mutation SetCurrentVersionDialogMutation($input: SetIcpmsDocumentVersionCurrentInput!) {
    setIcpmsDocumentVersionCurrent(input: $input) {
      version {
        id
        status
        isCurrent
      }
    }
  }
`;

export function SetCurrentVersionDialog(props: {
  versionId: string;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const { versionId, onClose, onSuccess } = props;
  const { __ } = useTranslate();
  const [commit, isInFlight] = useMutation<SetCurrentVersionDialogMutation>(setCurrentVersionDialogMutation);
  const [errorMsg, setErrorMsg] = useState("");

  const handleConfirm = useCallback(() => {
    setErrorMsg("");
    commit({
      variables: {
        input: { id: versionId }
      },
      onCompleted: (_, errors) => {
        if (errors) {
          setErrorMsg(errors[0].message);
        } else {
          onSuccess();
        }
      },
      onError: (err) => {
        setErrorMsg(err.message);
      },
    });
  }, [commit, versionId, onSuccess]);

  return (
    <Dialog
      defaultOpen
      onClose={onClose}
      title={__("Xác nhận phiên bản hiện hành")}
    >
      <DialogContent padded className="space-y-4">
        <p className="text-txt-secondary">
          {__("Bạn có chắc chắn muốn thiết lập phiên bản này thành CURRENT (Hiện hành)?")}
        </p>
        <p className="text-txt-secondary">
          {__("Phiên bản CURRENT trước đó (nếu có) sẽ tự động chuyển sang trạng thái SUPERSEDED (Đã bị thay thế).")}
        </p>

        {errorMsg && <div className="text-red-500 text-sm">{errorMsg}</div>}
      </DialogContent>

      <DialogFooter exitLabel={__("Hủy")}>
        <Button onClick={handleConfirm} disabled={isInFlight} variant="primary">
          {__("Xác nhận")}
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
