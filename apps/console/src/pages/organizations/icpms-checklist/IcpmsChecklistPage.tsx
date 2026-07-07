// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import {
  Badge,
  Button,
  Card,
  IconCheckmark1,
  IconCrossLargeX,
  IconPlusLarge,
  IconRotateCw,
  Option,
  PageHeader,
  Select,
  useToast,
} from "@probo/ui";
import { useCallback, useEffect, useState } from "react";
import { fetchQuery, graphql, useMutation, useRelayEnvironment } from "react-relay";
import { useNavigate } from "react-router";
import { useOrganizationId } from "#/hooks/useOrganizationId";
import { formatError } from "#/utils/formatError";
import { parseResponsibleUnit } from "../icpms-ai-review/vatmResponsibilityMatrix";

// ─── GraphQL ─────────────────────────────────────────────────────────────────

const listChecklistsQuery = graphql`
  query IcpmsChecklistPageListQuery($organizationId: ID!) {
    icpmsChecklists(organizationId: $organizationId) {
      edges {
        node {
          id
          checklistCode
          checklistQuestion
          requirementText
          sourceReference
          priority
          status
          approvalStatus
          createdFrom
          responsibleUnit
          responsibleRole
          complianceDomain
          frequency
          implementationMethod
          currentStatusText
          actionPlan
          requiredEvidence
          riskIfNotComplied
          dueDays
          createdAt
          updatedAt
          document {
            id
            code
            title
          }
          documentVersion {
            id
            versionCode
          }
          requirement {
            id
            requirementCode
            title
          }
        }
      }
    }
  }
`;

const listAiJobsQuery = graphql`
  query IcpmsChecklistPageAiJobsQuery($organizationId: ID!) {
    icpmsAiReviewJobs(organizationId: $organizationId) {
      edges {
        node {
          id
          jobCode
          status
          totalSuggestions
          totalAccepted
          document { code title }
          documentVersion { versionCode }
          finishedAt
        }
      }
    }
  }
`;

const listSuggestionsForJobQuery = graphql`
  query IcpmsChecklistPageSuggestionsQuery($jobId: ID!) {
    icpmsAiReviewSuggestions(jobId: $jobId) {
      edges {
        node {
          id
          status
          aiConfidence
          suggestedChecklistQuestion
          suggestedResponsibleUnit
          suggestedPriority
          requirement {
            id
            requirementCode
            title
          }
        }
      }
    }
  }
`;

const approveChecklistMutation = graphql`
  mutation IcpmsChecklistPageApproveMutation($input: ApproveIcpmsChecklistInput!) {
    approveIcpmsChecklist(input: $input) {
      checklist {
        id
        status
        approvalStatus
        approvedAt
      }
    }
  }
`;

const rejectChecklistMutation = graphql`
  mutation IcpmsChecklistPageRejectMutation($input: RejectIcpmsChecklistInput!) {
    rejectIcpmsChecklist(input: $input) {
      checklist {
        id
        status
        approvalStatus
        rejectedAt
        rejectionReason
      }
    }
  }
`;

const deleteChecklistMutation = graphql`
  mutation IcpmsChecklistPageDeleteMutation($input: DeleteIcpmsChecklistInput!) {
    deleteIcpmsChecklist(input: $input) {
      deletedChecklistId
    }
  }
`;

const archiveChecklistMutation = graphql`
  mutation IcpmsChecklistPageArchiveMutation($input: ArchiveIcpmsChecklistInput!) {
    archiveIcpmsChecklist(input: $input) {
      checklist {
        id
        status
      }
    }
  }
`;

const createFromAiSuggestionsMutation = graphql`
  mutation IcpmsChecklistPageCreateFromAiMutation($input: CreateIcpmsChecklistsFromAiSuggestionsInput!) {
    createIcpmsChecklistsFromAiSuggestions(input: $input) {
      checklists {
        id
        checklistCode
      }
      createdCount
      existingCount
    }
  }
`;

const updateChecklistMutation = graphql`
  mutation IcpmsChecklistPageUpdateMutation($input: UpdateIcpmsChecklistInput!) {
    updateIcpmsChecklist(input: $input) {
      checklist {
        id
        implementationMethod
        currentStatusText
        actionPlan
        requiredEvidence
        riskIfNotComplied
        dueDays
        responsibleUnit
        responsibleRole
        complianceDomain
        frequency
        updatedAt
      }
    }
  }
`;

// ─── Types ────────────────────────────────────────────────────────────────────

type Checklist = {
  id: string;
  checklistCode: string;
  checklistQuestion: string;
  requirementText?: string | null;
  sourceReference?: string | null;
  priority: string;
  status: string;
  approvalStatus: string;
  createdFrom: string;
  responsibleUnit?: string | null;
  responsibleRole?: string | null;
  complianceDomain?: string | null;
  frequency?: string | null;
  implementationMethod?: string | null;
  currentStatusText?: string | null;
  actionPlan?: string | null;
  requiredEvidence?: string | null;
  riskIfNotComplied?: string | null;
  dueDays?: number | null;
  createdAt: string;
  updatedAt: string;
  document: { id: string; code: string; title: string };
  documentVersion: { id: string; versionCode: string };
  requirement?: { id: string; requirementCode: string; title: string } | null;
};

type AiJob = {
  id: string;
  jobCode: string;
  status: string;
  totalSuggestions: number;
  totalAccepted: number;
  document: { code: string; title: string };
  documentVersion: { versionCode: string };
  finishedAt?: string | null;
};

type AiSuggestionItem = {
  id: string;
  status: string;
  aiConfidence: number;
  suggestedChecklistQuestion?: string | null;
  suggestedResponsibleUnit?: string | null;
  suggestedPriority?: string | null;
  requirement: { id: string; requirementCode: string; title: string };
};

type UpdateFields = {
  implementationMethod: string;
  responsibleUnit: string;
  responsibleRole: string;
  requiredEvidence: string;
  actionPlan: string;
  currentStatusText: string;
  riskIfNotComplied: string;
  dueDays: number | null;
  complianceDomain: string;
  frequency: string;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const STATUS_COLORS: Record<string, "success" | "warning" | "danger" | "neutral" | "info"> = {
  ACTIVE: "success",
  NEEDS_REVIEW: "warning",
  DRAFT: "neutral",
  INACTIVE: "neutral",
  ARCHIVED: "neutral",
  DELETED: "danger",
};

const STATUS_LABELS: Record<string, string> = {
  ACTIVE: "Đang áp dụng",
  NEEDS_REVIEW: "Chờ duyệt",
  DRAFT: "Nháp",
  INACTIVE: "Không áp dụng",
  ARCHIVED: "Lưu trữ",
  DELETED: "Đã xóa",
};

const APPROVAL_COLORS: Record<string, "success" | "warning" | "danger" | "neutral"> = {
  APPROVED: "success",
  PENDING_REVIEW: "warning",
  REJECTED: "danger",
  NEEDS_REVISION: "warning",
};

const APPROVAL_LABELS: Record<string, string> = {
  APPROVED: "Đã duyệt",
  PENDING_REVIEW: "Chờ duyệt",
  REJECTED: "Từ chối",
  NEEDS_REVISION: "Cần sửa",
};

const PRIORITY_COLORS: Record<string, string> = {
  CRITICAL: "text-red-600 font-semibold",
  HIGH: "text-orange-500 font-semibold",
  MEDIUM: "text-yellow-600",
  LOW: "text-txt-tertiary",
};

const PRIORITY_LABELS: Record<string, string> = {
  CRITICAL: "Rất cao",
  HIGH: "Cao",
  MEDIUM: "Trung bình",
  LOW: "Thấp",
};

const CREATED_FROM_LABELS: Record<string, string> = {
  AI_REVIEW: "AI Review",
  MANUAL: "Thủ công",
  IMPORT: "Import",
  SYSTEM: "Hệ thống",
};

const SUG_STATUS_LABELS: Record<string, string> = {
  ACCEPTED: "Đã duyệt",
  REJECTED: "Từ chối",
  NEEDS_HUMAN_REVIEW: "Chờ duyệt",
  AI_SUGGESTED: "AI gợi ý",
};

const textareaClass =
  "w-full border border-border-low rounded-lg p-2.5 text-sm text-txt-primary bg-level-1 focus:outline-none focus:ring-1 focus:ring-blue-400 resize-none";
const inputClass =
  "w-full border border-border-low rounded-lg px-3 py-2 text-sm text-txt-primary bg-level-1 focus:outline-none focus:ring-1 focus:ring-blue-400";

function fmtDate(s: string | null | undefined): string {
  if (!s) return "—";
  return new Date(s).toLocaleString("vi-VN", {
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

// ─── Field helper ─────────────────────────────────────────────────────────────

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs text-txt-tertiary font-medium mb-1">{label}</label>
      {children}
    </div>
  );
}

// ─── Reject Dialog ────────────────────────────────────────────────────────────

function RejectDialog({
  checklist,
  onConfirm,
  onCancel,
}: {
  checklist: Checklist;
  onConfirm: (reason: string) => void;
  onCancel: () => void;
}) {
  const [reason, setReason] = useState("");
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-level-1 rounded-2xl shadow-lg p-6 w-full max-w-md mx-4">
        <h3 className="font-semibold text-txt-primary mb-1">Từ chối checklist</h3>
        <p className="text-sm text-txt-tertiary mb-4">
          <span className="font-mono">{checklist.checklistCode}</span>
        </p>
        <label className="block text-sm text-txt-secondary mb-1">Lý do từ chối</label>
        <textarea
          className={textareaClass}
          rows={3}
          placeholder="Nhập lý do từ chối..."
          value={reason}
          onChange={e => setReason(e.target.value)}
        />
        <div className="flex gap-2 mt-4 justify-end">
          <Button variant="secondary" onClick={onCancel}>Huỷ</Button>
          <Button variant="danger" onClick={() => onConfirm(reason)} disabled={!reason.trim()}>
            Xác nhận từ chối
          </Button>
        </div>
      </div>
    </div>
  );
}

// ─── Update Dialog ────────────────────────────────────────────────────────────

function UpdateDialog({
  checklist,
  onSave,
  onCancel,
  saving,
}: {
  checklist: Checklist;
  onSave: (data: UpdateFields) => void;
  onCancel: () => void;
  saving: boolean;
}) {
  const [form, setForm] = useState({
    implementationMethod: checklist.implementationMethod ?? "",
    responsibleUnit: checklist.responsibleUnit ?? "",
    responsibleRole: checklist.responsibleRole ?? "",
    requiredEvidence: checklist.requiredEvidence ?? "",
    actionPlan: checklist.actionPlan ?? "",
    currentStatusText: checklist.currentStatusText ?? "",
    riskIfNotComplied: checklist.riskIfNotComplied ?? "",
    dueDays: checklist.dueDays?.toString() ?? "",
    complianceDomain: checklist.complianceDomain ?? "",
    frequency: checklist.frequency ?? "",
  });

  const setField = (k: string) =>
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
      setForm(prev => ({ ...prev, [k]: e.target.value }));

  const handleSave = () => {
    onSave({
      implementationMethod: form.implementationMethod,
      responsibleUnit: form.responsibleUnit,
      responsibleRole: form.responsibleRole,
      requiredEvidence: form.requiredEvidence,
      actionPlan: form.actionPlan,
      currentStatusText: form.currentStatusText,
      riskIfNotComplied: form.riskIfNotComplied,
      dueDays: form.dueDays.trim() !== "" ? parseInt(form.dueDays) : null,
      complianceDomain: form.complianceDomain,
      frequency: form.frequency,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-level-1 rounded-2xl shadow-lg w-full max-w-2xl mx-4 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border-low shrink-0">
          <div>
            <h3 className="text-sm font-semibold text-txt-primary">Cập nhật chi tiết thực thi</h3>
            <p className="text-xs text-txt-tertiary mt-0.5 font-mono">{checklist.checklistCode}</p>
          </div>
          <button onClick={onCancel} className="text-txt-tertiary hover:text-txt-primary p-1">
            <IconCrossLargeX size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          <Field label="Phương thức thực hiện">
            <textarea
              rows={3}
              className={textareaClass}
              value={form.implementationMethod}
              onChange={setField("implementationMethod")}
              placeholder="Mô tả cách đơn vị thực hiện tuân thủ yêu cầu này..."
            />
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Đơn vị chủ trì">
              <input
                type="text"
                className={inputClass}
                value={form.responsibleUnit}
                onChange={setField("responsibleUnit")}
                placeholder="VD: Phòng An toàn hàng không"
              />
            </Field>
            <Field label="Vai trò / Chức danh">
              <input
                type="text"
                className={inputClass}
                value={form.responsibleRole}
                onChange={setField("responsibleRole")}
                placeholder="VD: Trưởng phòng, Chuyên viên"
              />
            </Field>
          </div>

          <Field label="Bằng chứng yêu cầu">
            <textarea
              rows={2}
              className={textareaClass}
              value={form.requiredEvidence}
              onChange={setField("requiredEvidence")}
              placeholder="Liệt kê các tài liệu, hồ sơ cần nộp làm bằng chứng tuân thủ..."
            />
          </Field>

          <Field label="Tình trạng hiện tại">
            <textarea
              rows={2}
              className={textareaClass}
              value={form.currentStatusText}
              onChange={setField("currentStatusText")}
              placeholder="Mô tả tình trạng tuân thủ hiện tại của đơn vị..."
            />
          </Field>

          <Field label="Kế hoạch hành động">
            <textarea
              rows={2}
              className={textareaClass}
              value={form.actionPlan}
              onChange={setField("actionPlan")}
              placeholder="Các bước cần thực hiện để đạt tuân thủ..."
            />
          </Field>

          <Field label="Rủi ro nếu không tuân thủ">
            <textarea
              rows={2}
              className={textareaClass}
              value={form.riskIfNotComplied}
              onChange={setField("riskIfNotComplied")}
              placeholder="Hệ quả pháp lý, an toàn nếu không thực hiện..."
            />
          </Field>

          <div className="grid grid-cols-3 gap-4">
            <Field label="Thời hạn (ngày)">
              <input
                type="number"
                min={0}
                className={inputClass}
                value={form.dueDays}
                onChange={setField("dueDays")}
                placeholder="VD: 30"
              />
            </Field>
            <Field label="Lĩnh vực tuân thủ">
              <input
                type="text"
                className={inputClass}
                value={form.complianceDomain}
                onChange={setField("complianceDomain")}
                placeholder="VD: An toàn bay"
              />
            </Field>
            <Field label="Tần suất">
              <input
                type="text"
                className={inputClass}
                value={form.frequency}
                onChange={setField("frequency")}
                placeholder="VD: Hàng năm"
              />
            </Field>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-border-low flex gap-2 justify-end shrink-0">
          <Button variant="secondary" onClick={onCancel}>Huỷ</Button>
          <Button disabled={saving} onClick={handleSave}>
            {saving ? "Đang lưu..." : "Lưu thay đổi"}
          </Button>
        </div>
      </div>
    </div>
  );
}

// ─── Detail Panel ─────────────────────────────────────────────────────────────

function DetailPanel({
  checklist,
  onClose,
  onApprove,
  onReject,
  onUpdate,
  onGotoAssignments,
}: {
  checklist: Checklist;
  onClose: () => void;
  onApprove: () => void;
  onReject: () => void;
  onUpdate: () => void;
  onGotoAssignments: () => void;
}) {
  const hasExecInfo =
    checklist.implementationMethod ||
    checklist.responsibleUnit ||
    checklist.dueDays != null ||
    checklist.complianceDomain ||
    checklist.frequency;

  const hasStatusInfo =
    checklist.currentStatusText || checklist.actionPlan || checklist.riskIfNotComplied;

  return (
    <Card padded className="sticky top-4 space-y-3 overflow-y-auto max-h-[calc(100vh-160px)]">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-txt-primary">Chi tiết checklist</h3>
        <button onClick={onClose}>
          <IconCrossLargeX size={16} className="text-txt-tertiary" />
        </button>
      </div>

      {/* Code + Question */}
      <div className="bg-subtle rounded-lg p-3 space-y-1">
        <p className="font-mono text-xs text-txt-secondary">{checklist.checklistCode}</p>
        <p className="text-sm font-medium text-txt-primary leading-snug">{checklist.checklistQuestion}</p>
        {checklist.sourceReference && (
          <p className="text-xs text-txt-tertiary mt-1">Nguồn: {checklist.sourceReference}</p>
        )}
      </div>

      {/* Base info */}
      <div className="space-y-2 text-sm">
        <DetailRow label="Tài liệu" value={`${checklist.document.code} — ${checklist.document.title}`} />
        <DetailRow label="Phiên bản" value={`v${checklist.documentVersion.versionCode}`} />
        {checklist.requirement && (
          <DetailRow
            label="Yêu cầu liên quan"
            value={`${checklist.requirement.requirementCode}: ${checklist.requirement.title}`}
          />
        )}
        <DetailRow label="Ưu tiên" value={PRIORITY_LABELS[checklist.priority] ?? checklist.priority} />
        <DetailRow label="Nguồn tạo" value={CREATED_FROM_LABELS[checklist.createdFrom] ?? checklist.createdFrom} />
        <DetailRow label="Ngày tạo" value={fmtDate(checklist.createdAt)} />
        <DetailRow label="Cập nhật" value={fmtDate(checklist.updatedAt)} />
      </div>

      {/* Status badges */}
      <div className="flex gap-2 items-center">
        <Badge variant={STATUS_COLORS[checklist.status] ?? "neutral"}>
          {STATUS_LABELS[checklist.status] ?? checklist.status}
        </Badge>
        <Badge variant={APPROVAL_COLORS[checklist.approvalStatus] ?? "neutral"}>
          {APPROVAL_LABELS[checklist.approvalStatus] ?? checklist.approvalStatus}
        </Badge>
      </div>

      {/* ── Section: Thực thi ── */}
      <div className="border-t border-border-low pt-3">
        <p className="text-xs font-semibold text-green-700 mb-2 flex items-center gap-1">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
          Thực thi
        </p>
        <div
          className="rounded-lg p-3 space-y-2 text-xs"
          style={{ background: "rgba(240,253,244,0.7)", border: "1px solid #bbf7d0" }}
        >
          <ExecRow
            label="Phương thức"
            value={checklist.implementationMethod}
            empty="Chưa thiết lập"
          />
          <ExecRow
            label="Đơn vị chủ trì"
            value={[checklist.responsibleUnit, checklist.responsibleRole].filter(Boolean).join(" · ") || null}
            empty="Chưa thiết lập"
          />
          <ExecRow
            label="Thời hạn"
            value={checklist.dueDays != null ? `${checklist.dueDays} ngày` : null}
            empty="Chưa thiết lập"
          />
          {checklist.complianceDomain && (
            <ExecRow label="Lĩnh vực" value={checklist.complianceDomain} />
          )}
          {checklist.frequency && (
            <ExecRow label="Tần suất" value={checklist.frequency} />
          )}
          {!hasExecInfo && (
            <p className="text-txt-tertiary italic">Chưa có thông tin thực thi. Bấm "Cập nhật chi tiết" để điền.</p>
          )}
        </div>
      </div>

      {/* ── Section: Bằng chứng yêu cầu ── */}
      {checklist.requiredEvidence && (
        <div className="border-t border-border-low pt-3">
          <p className="text-xs font-semibold text-amber-700 mb-2 flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400" />
            Bằng chứng yêu cầu
          </p>
          <div
            className="rounded-lg p-3 text-xs text-txt-primary leading-relaxed"
            style={{ background: "rgba(255,251,235,0.8)", border: "1px solid #fde68a" }}
          >
            {checklist.requiredEvidence}
          </div>
        </div>
      )}

      {/* ── Section: Tình trạng & Kế hoạch ── */}
      {hasStatusInfo && (
        <div className="border-t border-border-low pt-3">
          <p className="text-xs font-semibold text-blue-700 mb-2 flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500" />
            Tình trạng & Kế hoạch
          </p>
          <div className="space-y-2">
            {checklist.currentStatusText && (
              <div>
                <p className="text-[10px] text-txt-tertiary mb-0.5">Tình trạng hiện tại</p>
                <p className="text-xs text-txt-primary leading-relaxed">{checklist.currentStatusText}</p>
              </div>
            )}
            {checklist.actionPlan && (
              <div>
                <p className="text-[10px] text-txt-tertiary mb-0.5">Kế hoạch hành động</p>
                <p className="text-xs text-txt-primary leading-relaxed">{checklist.actionPlan}</p>
              </div>
            )}
            {checklist.riskIfNotComplied && (
              <div>
                <p className="text-[10px] text-txt-tertiary mb-0.5">Rủi ro nếu không tuân thủ</p>
                <p className="text-xs text-red-600 leading-relaxed">{checklist.riskIfNotComplied}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Approval actions */}
      {checklist.approvalStatus === "PENDING_REVIEW" && (
        <div className="flex gap-2 pt-2 border-t border-border-low">
          <Button icon={IconCheckmark1} onClick={onApprove}>
            Phê duyệt
          </Button>
          <Button variant="secondary" icon={IconCrossLargeX} onClick={onReject}>
            Từ chối
          </Button>
        </div>
      )}

      {/* Operational actions */}
      <div className="flex gap-2 pt-2 border-t border-border-low">
        <Button onClick={onUpdate}>
          Cập nhật chi tiết
        </Button>
        <Button variant="secondary" onClick={onGotoAssignments}>
          Giao việc →
        </Button>
      </div>
    </Card>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-txt-tertiary mb-0.5">{label}</p>
      <p className="text-sm text-txt-primary leading-snug">{value}</p>
    </div>
  );
}

function ExecRow({ label, value, empty }: { label: string; value?: string | null; empty?: string }) {
  return (
    <div className="flex gap-2">
      <span className="text-txt-tertiary shrink-0 w-24">{label}:</span>
      <span className={value ? "text-txt-primary font-medium" : "text-txt-tertiary italic"}>
        {value ?? empty ?? "—"}
      </span>
    </div>
  );
}

// ─── From AI Review Modal ─────────────────────────────────────────────────────

function FromAiReviewModal({
  organizationId,
  environment,
  docCode,
  onClose,
  onCreated,
}: {
  organizationId: string;
  environment: any;
  docCode?: string | null;
  onClose: () => void;
  onCreated: (count: number) => void;
}) {
  const { toast } = useToast();
  const [jobs, setJobs] = useState<AiJob[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [selectedJobId, setSelectedJobId] = useState<string>("");
  const [suggestions, setSuggestions] = useState<AiSuggestionItem[]>([]);
  const [loadingSugs, setLoadingSugs] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [creating, setCreating] = useState(false);
  // Mặc định chỉ hiện các gợi ý ĐÃ DUYỆT từ Checklist draft bên AI Review
  const [onlyAccepted, setOnlyAccepted] = useState(true);

  const [commitCreate] = useMutation(createFromAiSuggestionsMutation);

  useEffect(() => {
    (fetchQuery(environment, listAiJobsQuery, { organizationId }, { networkCacheConfig: { force: true } }) as any)
      .toPromise()
      .then((data: any) => {
        const edges = data?.icpmsAiReviewJobs?.edges ?? [];
        let completed = edges
          .map((e: any) => e.node)
          .filter((j: AiJob) => j.status === "COMPLETED");
        // Đang đứng trong một tài liệu → chỉ hiện các phiên của tài liệu đó
        if (docCode) completed = completed.filter((j: AiJob) => j.document.code === docCode);
        setJobs(completed);
        if (completed.length > 0) setSelectedJobId(completed[0].id);
      })
      .catch(() => toast({ title: "Không thể tải danh sách phiên AI Review", description: "", variant: "error" }))
      .finally(() => setLoadingJobs(false));
  }, [environment, organizationId, docCode, toast]);

  useEffect(() => {
    if (!selectedJobId) return;
    setLoadingSugs(true);
    setSuggestions([]);
    setSelectedIds(new Set());
    (fetchQuery(environment, listSuggestionsForJobQuery, { jobId: selectedJobId }, { networkCacheConfig: { force: true } }) as any)
      .toPromise()
      .then((data: any) => {
        const edges = data?.icpmsAiReviewSuggestions?.edges ?? [];
        const items: AiSuggestionItem[] = edges.map((e: any) => e.node);
        setSuggestions(items);
        // Tick sẵn toàn bộ gợi ý đã duyệt để tạo nhanh
        setSelectedIds(new Set(items.filter(s => s.status === "ACCEPTED").map(s => s.id)));
      })
      .catch((err: unknown) => {
        toast({ title: "Không thể tải gợi ý của phiên này", description: formatError(err), variant: "error" });
      })
      .finally(() => setLoadingSugs(false));
  }, [environment, selectedJobId, toast]);

  // Danh sách hiển thị theo bộ lọc "chỉ đã duyệt"
  const visibleSuggestions = onlyAccepted
    ? suggestions.filter(s => s.status === "ACCEPTED")
    : suggestions;

  const toggleAll = () => {
    if (selectedIds.size === visibleSuggestions.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(visibleSuggestions.map(s => s.id)));
    }
  };

  const toggleOne = (id: string) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const handleCreate = () => {
    if (selectedIds.size === 0) return;
    setCreating(true);
    commitCreate({
      variables: { input: { aiReviewSuggestionIds: Array.from(selectedIds) } },
      onCompleted: (res: any) => {
        setCreating(false);
        const payload = (res as any).createIcpmsChecklistsFromAiSuggestions;
        const created = payload?.createdCount ?? 0;
        const existing = payload?.existingCount ?? 0;
        toast({
          title: `Đã tạo ${created} checklist`,
          description: existing > 0 ? `${existing} checklist đã tồn tại (bỏ qua).` : "Tất cả checklist đã được tạo thành công.",
          variant: "success",
        });
        onCreated(created + existing);
        onClose();
      },
      onError: (err: Error) => {
        setCreating(false);
        toast({ title: "Không thể tạo checklist", description: formatError(err), variant: "error" });
      },
    });
  };

  const selectedJob = jobs.find(j => j.id === selectedJobId);

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-level-1 rounded-2xl shadow-lg w-full max-w-2xl mx-4 flex flex-col max-h-[80vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border-low shrink-0">
          <div>
            <h3 className="text-sm font-semibold text-txt-primary">Tạo checklist từ AI Review</h3>
            <p className="text-xs text-txt-tertiary mt-0.5">
              Chọn phiên AI Review, sau đó chọn các gợi ý để tạo checklist chính thức.
            </p>
          </div>
          <button onClick={onClose} className="text-txt-tertiary hover:text-txt-primary p-1">
            <IconCrossLargeX size={16} />
          </button>
        </div>

        {/* Job selector */}
        <div className="px-5 py-3 border-b border-border-low shrink-0">
          <label className="block text-xs text-txt-tertiary font-medium mb-1">Phiên AI Review</label>
          {loadingJobs ? (
            <p className="text-sm text-txt-tertiary">Đang tải...</p>
          ) : jobs.length === 0 ? (
            <p className="text-sm text-txt-secondary">Chưa có phiên AI Review nào hoàn thành. Vui lòng chạy AI Review trước.</p>
          ) : (
            <Select<string> value={selectedJobId} onValueChange={setSelectedJobId}>
              {jobs.map(j => (
                <Option key={j.id} value={j.id}>
                  {j.jobCode} — {j.document.code} v{j.documentVersion.versionCode} ({j.totalSuggestions} gợi ý)
                </Option>
              ))}
            </Select>
          )}
          {selectedJob && (
            <p className="text-xs text-txt-tertiary mt-1">
              Đã duyệt: {selectedJob.totalAccepted} / {selectedJob.totalSuggestions} · Hoàn thành: {fmtDate(selectedJob.finishedAt)}
            </p>
          )}
          <label className="flex items-center gap-2 text-xs text-txt-secondary mt-2 cursor-pointer">
            <input
              type="checkbox"
              checked={onlyAccepted}
              onChange={e => setOnlyAccepted(e.target.checked)}
              className="rounded"
            />
            Chỉ hiện gợi ý đã duyệt trong Checklist draft
          </label>
        </div>

        {/* Suggestions list */}
        <div className="flex-1 overflow-y-auto">
          {loadingSugs ? (
            <div className="p-8 text-center text-sm text-txt-tertiary">Đang tải gợi ý...</div>
          ) : visibleSuggestions.length === 0 ? (
            <div className="p-8 text-center space-y-2">
              <p className="text-sm text-txt-secondary">
                {!selectedJobId
                  ? "Chọn phiên AI Review để xem gợi ý."
                  : suggestions.length > 0
                    ? "Phiên này chưa có gợi ý nào được duyệt — bỏ tick \"Chỉ hiện gợi ý đã duyệt\" để xem tất cả, hoặc sang AI Review duyệt trước."
                    : "Không còn gợi ý hợp lệ trong phiên này."}
              </p>
              {selectedJobId && suggestions.length === 0 && (
                <p className="text-xs text-txt-tertiary max-w-md mx-auto">
                  Nguyên nhân thường gặp: các yêu cầu của phiên này đã bị xóa hoặc tạo lại
                  (bấm "Tạo từ bản phân tích" ở trang Yêu cầu ICPMS). Hãy chạy một phiên
                  AI Review mới trên bộ yêu cầu hiện tại rồi quay lại đây.
                </p>
              )}
            </div>
          ) : (
            <table className="w-full text-xs">
              <thead className="sticky top-0 bg-level-1 border-b border-border-low">
                <tr>
                  <th className="px-4 py-2 text-left w-8">
                    <input
                      type="checkbox"
                      checked={selectedIds.size === visibleSuggestions.length && visibleSuggestions.length > 0}
                      onChange={toggleAll}
                      className="rounded"
                    />
                  </th>
                  <th className="px-4 py-2 text-left text-txt-tertiary font-medium">Yêu cầu</th>
                  <th className="px-4 py-2 text-left text-txt-tertiary font-medium">Câu hỏi checklist</th>
                  <th className="px-4 py-2 text-left text-txt-tertiary font-medium">Trạng thái</th>
                  <th className="px-4 py-2 text-left text-txt-tertiary font-medium">Tin cậy</th>
                </tr>
              </thead>
              <tbody>
                {visibleSuggestions.map(sug => (
                  <tr
                    key={sug.id}
                    className={`border-b border-border-low cursor-pointer hover:bg-bg-alt ${selectedIds.has(sug.id) ? "bg-blue-50" : ""}`}
                    onClick={() => toggleOne(sug.id)}
                  >
                    <td className="px-4 py-2">
                      <input
                        type="checkbox"
                        checked={selectedIds.has(sug.id)}
                        onChange={() => toggleOne(sug.id)}
                        onClick={e => e.stopPropagation()}
                        className="rounded"
                      />
                    </td>
                    <td className="px-4 py-2 align-top">
                      <p className="font-mono text-txt-secondary">{sug.requirement.requirementCode}</p>
                      <p className="text-txt-primary line-clamp-2 mt-0.5">{sug.requirement.title}</p>
                    </td>
                    <td className="px-4 py-2 align-top">
                      <p className="text-txt-primary line-clamp-2">
                        {sug.suggestedChecklistQuestion ?? sug.requirement.title}
                      </p>
                    </td>
                    <td className="px-4 py-2 align-top">
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                        sug.status === "ACCEPTED" ? "bg-green-100 text-green-700" :
                        sug.status === "REJECTED" ? "bg-red-100 text-red-600" :
                        "bg-amber-100 text-amber-700"
                      }`}>
                        {SUG_STATUS_LABELS[sug.status] ?? sug.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 align-top text-center">
                      <span className={`font-semibold ${sug.aiConfidence >= 0.8 ? "text-green-600" : sug.aiConfidence >= 0.6 ? "text-yellow-600" : "text-txt-tertiary"}`}>
                        {sug.aiConfidence.toFixed(2)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-border-low flex items-center justify-between shrink-0">
          <span className="text-xs text-txt-tertiary">
            {selectedIds.size > 0 ? `Đã chọn ${selectedIds.size} gợi ý` : "Chưa chọn gợi ý nào"}
          </span>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={onClose}>Huỷ</Button>
            <Button
              icon={IconPlusLarge}
              disabled={selectedIds.size === 0 || creating}
              onClick={handleCreate}
            >
              {creating ? "Đang tạo..." : `Tạo ${selectedIds.size > 0 ? selectedIds.size + " " : ""}checklist`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Status Filter ────────────────────────────────────────────────────────────

type StatusFilter = "ALL" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "DRAFT";

// ─── Main Page ────────────────────────────────────────────────────────────────

export function IcpmsChecklistPage() {
  const organizationId = useOrganizationId();
  const environment = useRelayEnvironment();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [checklists, setChecklists] = useState<Checklist[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Checklist | null>(null);
  const [rejectTarget, setRejectTarget] = useState<Checklist | null>(null);
  const [updateTarget, setUpdateTarget] = useState<Checklist | null>(null);
  const [updating, setUpdating] = useState(false);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("ALL");
  const [showAiModal, setShowAiModal] = useState(false);
  // Tổ chức theo tài liệu (key = document code): null = đang ở màn chọn tài liệu
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  const [docSearch, setDocSearch] = useState("");
  // Các phiên AI Review hoàn thành — để tài liệu chưa có checklist vẫn hiện card
  const [aiJobs, setAiJobs] = useState<AiJob[]>([]);

  const [commitApprove] = useMutation(approveChecklistMutation);
  const [commitReject] = useMutation(rejectChecklistMutation);
  const [commitDelete] = useMutation(deleteChecklistMutation);
  const [commitArchive] = useMutation(archiveChecklistMutation);
  const [commitUpdate] = useMutation(updateChecklistMutation);

  const loadChecklists = useCallback(() => {
    setLoading(true);
    Promise.all([
      (fetchQuery(environment, listChecklistsQuery, { organizationId }, { networkCacheConfig: { force: true } }) as any)
        .toPromise()
        .then((data: any) => {
          const edges = data?.icpmsChecklists?.edges ?? [];
          setChecklists(edges.map((e: any) => e.node));
        }),
      (fetchQuery(environment, listAiJobsQuery, { organizationId }, { networkCacheConfig: { force: true } }) as any)
        .toPromise()
        .then((data: any) => {
          const edges = data?.icpmsAiReviewJobs?.edges ?? [];
          setAiJobs(edges.map((e: any) => e.node).filter((j: AiJob) => j.status === "COMPLETED"));
        }),
    ])
      .catch((err: unknown) => {
        console.error("[IcpmsChecklistPage] loadChecklists error:", err);
        toast({ title: "Không thể tải danh sách checklist", description: formatError(err), variant: "error" });
      })
      .finally(() => setLoading(false));
  }, [environment, organizationId, toast]);

  useEffect(() => {
    loadChecklists();
  }, [loadChecklists]);

  const handleApprove = (cl: Checklist) => {
    commitApprove({
      variables: { input: { id: cl.id } },
      onCompleted: () => {
        toast({ title: "Đã phê duyệt checklist", description: `${cl.checklistCode} — Trạng thái: Đang áp dụng`, variant: "success" });
        setChecklists(prev => prev.map(c => c.id === cl.id
          ? { ...c, status: "ACTIVE", approvalStatus: "APPROVED" }
          : c
        ));
        if (selected?.id === cl.id) setSelected(prev => prev ? { ...prev, status: "ACTIVE", approvalStatus: "APPROVED" } : prev);
      },
      onError: (err: Error) => {
        toast({ title: "Không thể phê duyệt", description: formatError(err), variant: "error" });
      },
    });
  };

  const handleRejectConfirm = (cl: Checklist, reason: string) => {
    setRejectTarget(null);
    commitReject({
      variables: { input: { id: cl.id, rejectionReason: reason } },
      onCompleted: () => {
        toast({ title: "Đã từ chối checklist", description: cl.checklistCode, variant: "success" });
        setChecklists(prev => prev.map(c => c.id === cl.id
          ? { ...c, approvalStatus: "REJECTED" }
          : c
        ));
        if (selected?.id === cl.id) setSelected(null);
      },
      onError: (err: Error) => {
        toast({ title: "Không thể từ chối", description: formatError(err), variant: "error" });
      },
    });
  };

  const handleDelete = (cl: Checklist) => {
    if (!window.confirm(`Xóa checklist "${cl.checklistCode}"?`)) return;
    commitDelete({
      variables: { input: { id: cl.id } },
      onCompleted: () => {
        toast({ title: "Đã xóa checklist", description: "", variant: "success" });
        setChecklists(prev => prev.filter(c => c.id !== cl.id));
        if (selected?.id === cl.id) setSelected(null);
      },
      onError: (err: Error) => {
        toast({ title: "Không thể xóa", description: formatError(err), variant: "error" });
      },
    });
  };

  const handleArchive = (cl: Checklist) => {
    commitArchive({
      variables: { input: { id: cl.id } },
      onCompleted: () => {
        toast({ title: "Đã lưu trữ checklist", description: cl.checklistCode, variant: "success" });
        setChecklists(prev => prev.map(c => c.id === cl.id ? { ...c, status: "ARCHIVED" } : c));
        if (selected?.id === cl.id) setSelected(prev => prev ? { ...prev, status: "ARCHIVED" } : prev);
      },
      onError: (err: Error) => {
        toast({ title: "Không thể lưu trữ", description: formatError(err), variant: "error" });
      },
    });
  };

  const handleUpdate = (cl: Checklist, fields: UpdateFields) => {
    setUpdating(true);
    commitUpdate({
      variables: {
        input: {
          id: cl.id,
          implementationMethod: fields.implementationMethod || null,
          responsibleUnit: fields.responsibleUnit || null,
          responsibleRole: fields.responsibleRole || null,
          requiredEvidence: fields.requiredEvidence || null,
          actionPlan: fields.actionPlan || null,
          currentStatusText: fields.currentStatusText || null,
          riskIfNotComplied: fields.riskIfNotComplied || null,
          dueDays: fields.dueDays,
          complianceDomain: fields.complianceDomain || null,
          frequency: fields.frequency || null,
        },
      },
      onCompleted: (res: any) => {
        setUpdating(false);
        const updated = res?.updateIcpmsChecklist?.checklist;
        if (updated) {
          setChecklists(prev => prev.map(c => c.id === cl.id ? { ...c, ...updated } : c));
          if (selected?.id === cl.id) setSelected(prev => prev ? { ...prev, ...updated } : prev);
        }
        setUpdateTarget(null);
        toast({ title: "Đã cập nhật chi tiết checklist", description: cl.checklistCode, variant: "success" });
      },
      onError: (err: Error) => {
        setUpdating(false);
        toast({ title: "Không thể cập nhật", description: formatError(err), variant: "error" });
      },
    });
  };

  // Nhóm theo tài liệu (key = document code) từ CẢ checklist lẫn phiên AI Review
  // hoàn thành — để tài liệu đã rà soát nhưng chưa tạo checklist vẫn hiện card.
  type DocGroup = {
    id: string; code: string; title: string;
    total: number; pending: number; approved: number; active: number;
    versions: Set<string>; aiSessions: number; aiAccepted: number;
  };
  const docGroups = checklists.reduce<Record<string, DocGroup>>((acc, cl) => {
    const d = cl.document;
    if (!acc[d.code]) {
      acc[d.code] = { id: d.code, code: d.code, title: d.title, total: 0, pending: 0, approved: 0, active: 0, versions: new Set(), aiSessions: 0, aiAccepted: 0 };
    }
    const g = acc[d.code];
    g.total += 1;
    if (cl.approvalStatus === "PENDING_REVIEW") g.pending += 1;
    if (cl.approvalStatus === "APPROVED") g.approved += 1;
    if (cl.status === "ACTIVE") g.active += 1;
    g.versions.add(cl.documentVersion.versionCode);
    return acc;
  }, {});
  for (const j of aiJobs) {
    const code = j.document.code;
    if (!docGroups[code]) {
      docGroups[code] = { id: code, code, title: j.document.title, total: 0, pending: 0, approved: 0, active: 0, versions: new Set(), aiSessions: 0, aiAccepted: 0 };
    }
    docGroups[code].aiSessions += 1;
    docGroups[code].aiAccepted += j.totalAccepted ?? 0;
  }
  const docList = Object.values(docGroups).sort((a, b) => a.code.localeCompare(b.code));
  const selectedDoc = selectedDocId ? docGroups[selectedDocId] : null;

  // Phạm vi thống kê + danh sách: theo tài liệu đang chọn
  const inScope = selectedDocId ? checklists.filter(cl => cl.document.code === selectedDocId) : checklists;

  const filtered = inScope.filter(cl => {
    if (statusFilter === "ALL") return true;
    if (statusFilter === "PENDING_REVIEW") return cl.approvalStatus === "PENDING_REVIEW";
    if (statusFilter === "APPROVED") return cl.approvalStatus === "APPROVED";
    if (statusFilter === "ACTIVE") return cl.status === "ACTIVE";
    if (statusFilter === "DRAFT") return cl.status === "DRAFT";
    return true;
  });

  const pendingCount = inScope.filter(c => c.approvalStatus === "PENDING_REVIEW").length;
  const approvedCount = inScope.filter(c => c.approvalStatus === "APPROVED").length;
  const activeCount = inScope.filter(c => c.status === "ACTIVE").length;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Checklist tuân thủ"
        description="Nơi các đơn vị VATM thực thi tuân thủ — điền phương thức, cập nhật tình trạng, giao việc và theo dõi tiến độ hoàn thành."
      />

      {/* ── Màn 1: chọn tài liệu — thiết kế bảng giống Danh sách phiên rà soát (AI Review) ── */}
      {!selectedDocId && (
        <Card>
          <div className="p-4 border-b border-border-low flex items-center justify-between gap-3 flex-wrap">
            <h3 className="text-sm font-semibold text-txt-primary">
              Danh sách tài liệu <span className="font-normal text-txt-tertiary">{docList.length}</span>
            </h3>
            <div className="flex items-center gap-2">
              <Button icon={IconPlusLarge} onClick={() => setShowAiModal(true)}>
                Tạo từ AI Review
              </Button>
              <Button variant="secondary" icon={IconRotateCw} onClick={loadChecklists} disabled={loading}>
                Làm mới
              </Button>
            </div>
          </div>

          {/* Thanh tìm kiếm */}
          <div className="px-4 py-3 border-b border-border-low bg-subtle flex items-center gap-2">
            <input
              type="text"
              placeholder="Tìm mã, tên tài liệu..."
              value={docSearch}
              onChange={e => setDocSearch(e.target.value)}
              className="w-72 border border-border-low rounded-lg px-3 py-1.5 text-sm text-txt-primary bg-level-1 focus:outline-none focus:ring-1 focus:ring-blue-400 placeholder:text-txt-tertiary"
            />
          </div>

          {loading && <div className="p-6 text-center text-sm text-txt-tertiary">Đang tải...</div>}

          {!loading && docList.length === 0 && (
            <div className="p-12 text-center space-y-4">
              <p className="text-sm font-medium text-txt-secondary">Chưa có tài liệu nào được rà soát</p>
              <p className="text-xs text-txt-tertiary max-w-sm mx-auto">
                Hãy chạy phiên rà soát bên AI Review trước — tài liệu sẽ tự xuất hiện ở đây để tạo checklist và giao việc.
              </p>
            </div>
          )}

          {!loading && docList.length > 0 && (() => {
            const q = docSearch.trim().toLowerCase();
            const shown = q
              ? docList.filter(d => d.code.toLowerCase().includes(q) || d.title.toLowerCase().includes(q))
              : docList;
            return shown.length === 0 ? (
              <div className="p-10 text-center text-sm text-txt-tertiary">Không có tài liệu nào khớp tìm kiếm.</div>
            ) : (
              <table className="w-full text-sm">
                <thead className="border-b border-border-low">
                  <tr>
                    <th className="text-left px-4 py-2.5 text-xs text-txt-tertiary font-medium uppercase tracking-wide w-12">STT</th>
                    <th className="text-left px-4 py-2.5 text-xs text-txt-tertiary font-medium uppercase tracking-wide">Mã tài liệu</th>
                    <th className="text-left px-4 py-2.5 text-xs text-txt-tertiary font-medium uppercase tracking-wide">Tài liệu</th>
                    <th className="text-left px-4 py-2.5 text-xs text-txt-tertiary font-medium uppercase tracking-wide">Checklist</th>
                    <th className="text-left px-4 py-2.5 text-xs text-txt-tertiary font-medium uppercase tracking-wide">Phiên AI Review</th>
                    <th className="text-left px-4 py-2.5 text-xs text-txt-tertiary font-medium uppercase tracking-wide">Trạng thái</th>
                    <th className="text-left px-4 py-2.5 text-xs text-txt-tertiary font-medium uppercase tracking-wide w-24">Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {shown.map((doc, idx) => (
                    <tr
                      key={doc.id}
                      onClick={() => { setSelectedDocId(doc.id); setSelected(null); setStatusFilter("ALL"); }}
                      className="border-b border-border-low cursor-pointer hover:bg-bg-alt transition-colors"
                    >
                      <td className="px-4 py-3 text-txt-tertiary tabular-nums">{idx + 1}</td>
                      <td className="px-4 py-3"><span className="font-mono text-xs text-txt-secondary">{doc.code}</span></td>
                      <td className="px-4 py-3"><span className="font-medium text-txt-primary line-clamp-2">{doc.title}</span></td>
                      <td className="px-4 py-3"><span className="font-semibold text-txt-primary tabular-nums">{doc.total}</span></td>
                      <td className="px-4 py-3 text-txt-secondary tabular-nums">{doc.aiSessions}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {doc.pending > 0 && <Badge variant="warning">{doc.pending} chờ duyệt</Badge>}
                          {doc.approved > 0 && <Badge variant="success">{doc.approved} đã duyệt</Badge>}
                          {doc.active > 0 && <Badge variant="info">{doc.active} đang áp dụng</Badge>}
                          {doc.total === 0 && doc.aiAccepted > 0 && (
                            <Badge variant="warning">{doc.aiAccepted} gợi ý đã duyệt — chưa tạo checklist</Badge>
                          )}
                          {doc.total === 0 && doc.aiAccepted === 0 && (
                            <span className="text-xs text-txt-tertiary">—</span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-xs font-medium text-blue-600 hover:underline">Xem →</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          })()}
        </Card>
      )}

      {/* ── Màn 2: checklist của tài liệu đã chọn ── */}
      {selectedDocId && (
        <>
          {/* Breadcrumb + Stats */}
          <div className="flex items-center gap-2 text-sm">
            <button
              onClick={() => { setSelectedDocId(null); setSelected(null); }}
              className="text-txt-tertiary hover:text-txt-primary transition-colors"
            >
              ← Danh sách tài liệu
            </button>
            <span className="text-border-mid">/</span>
            <span className="font-mono text-xs text-txt-tertiary">{selectedDoc?.code}</span>
            <span className="font-semibold text-txt-primary truncate max-w-md">{selectedDoc?.title}</span>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Tổng checklist", value: inScope.length, color: "text-txt-primary" },
              { label: "Chờ phê duyệt", value: pendingCount, color: pendingCount > 0 ? "text-amber-600 font-semibold" : "text-txt-primary" },
              { label: "Đã duyệt", value: approvedCount, color: "text-green-600" },
              { label: "Đang áp dụng", value: activeCount, color: "text-blue-600" },
            ].map(stat => (
              <Card padded key={stat.label}>
                <p className="text-xs text-txt-tertiary">{stat.label}</p>
                <p className={`text-2xl mt-1 ${stat.color}`}>{stat.value}</p>
              </Card>
            ))}
          </div>
        </>
      )}

      {/* Main content */}
      {selectedDocId && (
      <div className={selected ? "grid grid-cols-5 gap-4" : ""}>
        {/* List */}
        <div className={selected ? "col-span-3" : ""}>
          <Card>
            <div className="p-4 border-b border-border-low flex items-center justify-between gap-3 flex-wrap">
              <h3 className="text-sm font-semibold text-txt-primary">
                Danh sách checklist ({filtered.length})
                {statusFilter !== "ALL" && ` — lọc: ${statusFilter}`}
              </h3>
              <div className="flex items-center gap-2">
                <Select<StatusFilter>
                  value={statusFilter}
                  onValueChange={(v) => setStatusFilter(v as StatusFilter)}
                >
                  <Option value="ALL">Tất cả trạng thái</Option>
                  <Option value="PENDING_REVIEW">Chờ phê duyệt</Option>
                  <Option value="APPROVED">Đã duyệt</Option>
                  <Option value="ACTIVE">Đang áp dụng</Option>
                  <Option value="DRAFT">Nháp</Option>
                </Select>
                <Button
                  icon={IconPlusLarge}
                  onClick={() => setShowAiModal(true)}
                >
                  Tạo từ AI Review
                </Button>
                <Button variant="secondary" icon={IconRotateCw} onClick={loadChecklists} disabled={loading}>
                  Làm mới
                </Button>
              </div>
            </div>

            {loading && (
              <div className="p-6 text-center text-sm text-txt-tertiary">Đang tải...</div>
            )}

            {!loading && filtered.length === 0 && (
              <div className="p-12 text-center space-y-4">
                <p className="text-sm font-medium text-txt-secondary">
                  {inScope.length === 0
                    ? "Tài liệu này chưa có checklist nào"
                    : "Không có checklist phù hợp bộ lọc"}
                </p>
              </div>
            )}

            {!loading && filtered.length > 0 && (
              <div className="overflow-x-auto">
                {/* Bảng giữ nguyên form Checklist draft của AI Review */}
                <table className="w-full text-xs table-fixed">
                  <colgroup>
                    <col style={{ width: "3%" }} />   {/* STT */}
                    <col style={{ width: "14%" }} />  {/* Yêu cầu */}
                    <col style={{ width: "7%" }} />   {/* Nguồn */}
                    <col style={{ width: "13%" }} />  {/* Phương pháp */}
                    <col style={{ width: "10%" }} />  {/* Chủ trì */}
                    <col style={{ width: "9%" }} />   {/* Phối hợp */}
                    <col style={{ width: "11%" }} />  {/* Bằng chứng */}
                    <col style={{ width: "8%" }} />   {/* Thực trạng */}
                    <col style={{ width: "11%" }} />  {/* Kế hoạch */}
                    <col style={{ width: "8%" }} />   {/* Trạng thái */}
                    <col style={{ width: "6%" }} />   {/* Thao tác */}
                  </colgroup>
                  <thead className="sticky top-0 bg-level-1 border-b border-border-low">
                    <tr>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">STT</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Yêu cầu</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Nguồn</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Phương pháp thực hiện</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Chủ trì</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Phối hợp</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Bằng chứng</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Thực trạng</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Kế hoạch / Khắc phục</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Trạng thái</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((cl, idx) => {
                      const { leadUnit, coordinationUnits } = parseResponsibleUnit(cl.responsibleUnit);
                      return (
                        <tr
                          key={cl.id}
                          className={`border-b border-border-low cursor-pointer hover:bg-bg-alt transition-colors ${selected?.id === cl.id ? "bg-blue-50" : ""}`}
                          onClick={() => setSelected(cl.id === selected?.id ? null : cl)}
                        >
                          {/* STT */}
                          <td className="px-2 py-2 text-txt-tertiary align-top">{idx + 1}</td>

                          {/* Yêu cầu */}
                          <td className="px-2 py-2 align-top">
                            <p className="font-mono text-txt-secondary mb-0.5 truncate" title={cl.requirement?.requirementCode ?? cl.checklistCode}>
                              {cl.requirement?.requirementCode ?? cl.checklistCode}
                            </p>
                            <p className="text-txt-primary line-clamp-3 leading-snug" title={cl.requirement?.title ?? cl.checklistQuestion}>
                              {cl.requirement?.title ?? cl.checklistQuestion}
                            </p>
                          </td>

                          {/* Nguồn */}
                          <td className="px-2 py-2 align-top">
                            {cl.sourceReference ? (
                              <span className="inline-block bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-medium px-1.5 py-0.5 rounded leading-tight">
                                {cl.sourceReference}
                              </span>
                            ) : (
                              <span className="text-txt-tertiary text-[10px]">—</span>
                            )}
                          </td>

                          {/* Phương pháp */}
                          <td className="px-2 py-2 align-top">
                            <p className="text-txt-primary line-clamp-4" title={cl.implementationMethod ?? undefined}>
                              {cl.implementationMethod ?? "—"}
                            </p>
                          </td>

                          {/* Chủ trì */}
                          <td className="px-2 py-2 align-top">
                            <p className="text-txt-primary font-medium line-clamp-3 leading-snug text-[11px]" title={leadUnit}>
                              {leadUnit}
                            </p>
                          </td>

                          {/* Phối hợp */}
                          <td className="px-2 py-2 align-top">
                            {coordinationUnits.length > 0 ? (
                              <ul className="space-y-0.5">
                                {coordinationUnits.map((u, i) => (
                                  <li key={i} className="text-txt-secondary text-[11px] leading-snug line-clamp-1" title={u}>{u}</li>
                                ))}
                              </ul>
                            ) : (
                              <span className="text-txt-tertiary text-[11px]">—</span>
                            )}
                          </td>

                          {/* Bằng chứng */}
                          <td className="px-2 py-2 align-top">
                            <p className="text-txt-primary line-clamp-3" title={cl.requiredEvidence ?? undefined}>
                              {cl.requiredEvidence ?? "—"}
                            </p>
                          </td>

                          {/* Thực trạng */}
                          <td className="px-2 py-2 align-top">
                            <p className="text-txt-secondary line-clamp-3" title={cl.currentStatusText ?? undefined}>
                              {cl.currentStatusText ?? "Chưa điền"}
                            </p>
                          </td>

                          {/* Kế hoạch / Khắc phục */}
                          <td className="px-2 py-2 align-top">
                            <p className="text-txt-primary line-clamp-3" title={cl.actionPlan ?? undefined}>
                              {cl.actionPlan ?? "—"}
                            </p>
                          </td>

                          {/* Trạng thái */}
                          <td className="px-2 py-2 align-top">
                            <div className="space-y-1">
                              <Badge variant={APPROVAL_COLORS[cl.approvalStatus] ?? "neutral"}>
                                {APPROVAL_LABELS[cl.approvalStatus] ?? cl.approvalStatus}
                              </Badge>
                              <p className={`text-[10px] ${PRIORITY_COLORS[cl.priority] ?? "text-txt-tertiary"}`}>
                                {PRIORITY_LABELS[cl.priority] ?? cl.priority} · {fmtDate(cl.createdAt)}
                              </p>
                            </div>
                          </td>

                          {/* Thao tác */}
                          <td className="px-2 py-2 align-top" onClick={e => e.stopPropagation()}>
                            <div className="flex flex-col gap-1">
                              {cl.approvalStatus === "PENDING_REVIEW" && (
                                <>
                                  <button
                                    onClick={() => handleApprove(cl)}
                                    className="text-left text-xs font-medium text-green-600 hover:text-green-700 hover:underline"
                                  >
                                    Duyệt
                                  </button>
                                  <button
                                    onClick={() => setRejectTarget(cl)}
                                    className="text-left text-xs font-medium text-red-500 hover:text-red-600 hover:underline"
                                  >
                                    Từ chối
                                  </button>
                                </>
                              )}
                              {cl.status !== "ARCHIVED" && cl.status !== "DELETED" && (
                                <button
                                  onClick={() => handleArchive(cl)}
                                  className="text-left text-xs font-medium text-txt-tertiary hover:text-txt-secondary hover:underline"
                                >
                                  Lưu trữ
                                </button>
                              )}
                              <button
                                onClick={() => handleDelete(cl)}
                                className="text-left text-xs font-medium text-red-400 hover:text-red-500 hover:underline"
                              >
                                Xóa
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
        </div>

        {/* Detail panel */}
        {selected && (
          <div className="col-span-2">
            <DetailPanel
              checklist={selected}
              onClose={() => setSelected(null)}
              onApprove={() => handleApprove(selected)}
              onReject={() => setRejectTarget(selected)}
              onUpdate={() => setUpdateTarget(selected)}
              onGotoAssignments={() => navigate(`/organizations/${organizationId}/assignments`)}
            />
          </div>
        )}
      </div>
      )}

      {/* How-to info (only when empty) */}
      {checklists.length === 0 && !loading && (
        <Card padded>
          <div className="flex items-start gap-3">
            <IconPlusLarge size={20} className="text-txt-tertiary mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-txt-primary">Cách tạo checklist</p>
              <p className="text-xs text-txt-tertiary mt-1">
                <strong>Cách 1 (Tự động):</strong> Vào <strong>AI Review</strong> → chạy phiên rà soát → bấm <strong>"Duyệt"</strong> trên từng gợi ý. Hệ thống sẽ tự động tạo checklist chính thức.
              </p>
              <p className="text-xs text-txt-tertiary mt-0.5">
                <strong>Cách 2 (Từ phiên cũ):</strong> Bấm <strong>"Tạo từ AI Review"</strong> bên trên, chọn phiên đã hoàn thành và tạo checklist hàng loạt.
              </p>
              <p className="text-xs text-txt-tertiary mt-0.5">
                <strong>Sau khi tạo:</strong> Phê duyệt checklist, sau đó bấm <strong>"Cập nhật chi tiết"</strong> để điền phương thức thực thi, đơn vị chủ trì và thời hạn. Cuối cùng bấm <strong>"Giao việc →"</strong> để tạo nhiệm vụ thực hiện.
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* AI Review modal */}
      {showAiModal && (
        <FromAiReviewModal
          organizationId={organizationId}
          environment={environment}
          docCode={selectedDocId}
          onClose={() => setShowAiModal(false)}
          onCreated={() => {
            setShowAiModal(false);
            loadChecklists();
          }}
        />
      )}

      {/* Reject dialog */}
      {rejectTarget && (
        <RejectDialog
          checklist={rejectTarget}
          onConfirm={reason => handleRejectConfirm(rejectTarget, reason)}
          onCancel={() => setRejectTarget(null)}
        />
      )}

      {/* Update dialog */}
      {updateTarget && (
        <UpdateDialog
          checklist={updateTarget}
          saving={updating}
          onSave={fields => handleUpdate(updateTarget, fields)}
          onCancel={() => setUpdateTarget(null)}
        />
      )}
    </div>
  );
}
