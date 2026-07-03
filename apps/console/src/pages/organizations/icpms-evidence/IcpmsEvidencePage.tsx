// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import {
  Badge,
  Button,
  Card,
  IconCrossLargeX,
  IconRotateCw,
  Option,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@probo/ui";
import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchQuery, graphql, useMutation, useRelayEnvironment } from "react-relay";
import { usePageTitle } from "@probo/hooks";
import { useOrganizationId } from "#/hooks/useOrganizationId";

// ─── GraphQL ──────────────────────────────────────────────────────────────────

const listQuery = graphql`
  query IcpmsEvidencePageListQuery($organizationId: ID!) {
    icpmsAssignments(organizationId: $organizationId) {
      edges {
        node {
          id
          assignmentCode
          assignmentTitle
          leadUnitName
          priority
          status
          evidenceStatus
          requiresEvidence
          progressPercent
          dueDate
          isOverdue
          currentStatusText
          actionPlanText
          responseNote
          checklist {
            id
            checklistCode
            checklistQuestion
            requiredEvidence
            implementationMethod
          }
          document {
            id
            code
            title
          }
          requirement {
            id
            requirementCode
            title
          }
          updatedAt
        }
      }
      totalCount
    }
  }
`;

const submitUpdateMutation = graphql`
  mutation IcpmsEvidencePageSubmitUpdateMutation($input: SubmitIcpmsAssignmentUpdateInput!) {
    submitIcpmsAssignmentUpdate(input: $input) {
      assignment {
        id
        status
        progressPercent
        currentStatusText
        actionPlanText
        responseNote
        evidenceStatus
        updatedAt
      }
    }
  }
`;

// ─── Types ────────────────────────────────────────────────────────────────────

type EvidenceStatus =
  | "NOT_REQUIRED"
  | "REQUIRED_NOT_SUBMITTED"
  | "SUBMITTED"
  | "APPROVED"
  | "REJECTED";

type AssignmentStatus =
  | "DRAFT"
  | "ASSIGNED"
  | "ACCEPTED"
  | "IN_PROGRESS"
  | "SUBMITTED"
  | "RETURNED"
  | "COMPLETED"
  | "CLOSED"
  | "OVERDUE"
  | "CANCELLED"
  | "DELETED";

type Priority = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

type EvidenceAssignment = {
  id: string;
  assignmentCode: string;
  assignmentTitle: string;
  leadUnitName: string;
  priority: Priority;
  status: AssignmentStatus;
  evidenceStatus: EvidenceStatus;
  requiresEvidence: boolean;
  progressPercent: number;
  dueDate: string | null;
  isOverdue: boolean;
  currentStatusText: string | null;
  actionPlanText: string | null;
  responseNote: string | null;
  checklist: {
    id: string;
    checklistCode: string;
    checklistQuestion: string;
    requiredEvidence: string | null;
    implementationMethod: string | null;
  } | null;
  document: { id: string; code: string; title: string } | null;
  requirement: { id: string; requirementCode: string; title: string } | null;
  updatedAt: string;
};

type FilterState = {
  evidenceStatus: EvidenceStatus | "ALL";
  leadUnit: string;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const EVIDENCE_STATUS_LABEL: Record<EvidenceStatus, string> = {
  NOT_REQUIRED: "Không cần",
  REQUIRED_NOT_SUBMITTED: "Chưa nộp",
  SUBMITTED: "Đã nộp",
  APPROVED: "Đã duyệt",
  REJECTED: "Bị từ chối",
};

const EVIDENCE_STATUS_VARIANT: Record<
  EvidenceStatus,
  "info" | "success" | "warning" | "danger" | "neutral"
> = {
  NOT_REQUIRED: "neutral",
  REQUIRED_NOT_SUBMITTED: "danger",
  SUBMITTED: "warning",
  APPROVED: "success",
  REJECTED: "danger",
};

const ASSIGNMENT_STATUS_LABEL: Record<AssignmentStatus, string> = {
  DRAFT: "Nháp",
  ASSIGNED: "Đã giao",
  ACCEPTED: "Đã nhận",
  IN_PROGRESS: "Đang thực hiện",
  SUBMITTED: "Đã báo cáo",
  RETURNED: "Trả lại",
  COMPLETED: "Hoàn thành",
  CLOSED: "Đóng",
  OVERDUE: "Quá hạn",
  CANCELLED: "Đã huỷ",
  DELETED: "Đã xoá",
};

const ASSIGNMENT_STATUS_VARIANT: Record<
  AssignmentStatus,
  "info" | "success" | "warning" | "danger" | "neutral"
> = {
  DRAFT: "neutral",
  ASSIGNED: "info",
  ACCEPTED: "info",
  IN_PROGRESS: "warning",
  SUBMITTED: "warning",
  RETURNED: "danger",
  COMPLETED: "success",
  CLOSED: "neutral",
  OVERDUE: "danger",
  CANCELLED: "neutral",
  DELETED: "neutral",
};

const PRIORITY_LABEL: Record<Priority, string> = {
  LOW: "Thấp",
  MEDIUM: "Trung bình",
  HIGH: "Cao",
  CRITICAL: "Khẩn cấp",
};

const PRIORITY_VARIANT: Record<Priority, "info" | "warning" | "danger" | "neutral"> = {
  LOW: "neutral",
  MEDIUM: "info",
  HIGH: "warning",
  CRITICAL: "danger",
};

function formatDate(iso: string | null): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function formatDateTime(iso: string | null): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// ─── Submit Update Dialog ─────────────────────────────────────────────────────

function SubmitUpdateDialog({
  assignment,
  onClose,
  onSubmitted,
}: {
  assignment: EvidenceAssignment;
  onClose: () => void;
  onSubmitted: (updated: Partial<EvidenceAssignment>) => void;
}) {
  const { toast } = useToast();
  const [currentStatusText, setCurrentStatusText] = useState(
    assignment.currentStatusText ?? ""
  );
  const [actionPlanText, setActionPlanText] = useState(
    assignment.actionPlanText ?? ""
  );
  const [responseNote, setResponseNote] = useState(
    assignment.responseNote ?? ""
  );
  const [progressPercent, setProgressPercent] = useState(
    assignment.progressPercent
  );
  const [commitSubmit, isSubmitting] = useMutation(submitUpdateMutation);

  const handleSubmit = () => {
    if (!currentStatusText.trim()) {
      toast({
        title: "Vui lòng nhập tình trạng hiện tại",
        description: "",
        variant: "error",
      });
      return;
    }
    commitSubmit({
      variables: {
        input: {
          id: assignment.id,
          currentStatusText: currentStatusText.trim(),
          actionPlanText: actionPlanText.trim() || null,
          responseNote: responseNote.trim() || null,
          progressPercent,
        },
      },
      onCompleted(data: unknown) {
        const updated = (data as any).submitIcpmsAssignmentUpdate?.assignment;
        toast({
          title: "Đã cập nhật bằng chứng",
          description: `${assignment.assignmentCode} — Tiến độ: ${progressPercent}%`,
          variant: "success",
        });
        onSubmitted({
          currentStatusText: updated?.currentStatusText ?? currentStatusText,
          actionPlanText: updated?.actionPlanText ?? actionPlanText,
          responseNote: updated?.responseNote ?? responseNote,
          progressPercent: updated?.progressPercent ?? progressPercent,
          evidenceStatus: updated?.evidenceStatus ?? assignment.evidenceStatus,
          status: updated?.status ?? assignment.status,
        });
        onClose();
      },
      onError(err: Error) {
        toast({
          title: "Không thể cập nhật",
          description: err.message,
          variant: "error",
        });
      },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-level-0 rounded-2xl shadow-2xl w-full max-w-xl mx-4 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-start justify-between px-6 py-4 border-b border-border-mid">
          <div className="flex-1 min-w-0 pr-3">
            <h3 className="text-base font-semibold text-txt-primary">Cập nhật bằng chứng</h3>
            <p className="text-xs text-txt-tertiary font-mono mt-0.5">{assignment.assignmentCode}</p>
          </div>
          <button onClick={onClose} className="text-txt-tertiary hover:text-txt-primary p-1 mt-0.5">
            <IconCrossLargeX className="h-4 w-4" />
          </button>
        </div>

        {/* Evidence required info */}
        {assignment.checklist?.requiredEvidence && (
          <div className="px-6 py-3 bg-blue-50 border-b border-blue-100">
            <p className="text-xs font-semibold text-blue-700 mb-1">Bằng chứng yêu cầu:</p>
            <p className="text-xs text-blue-800 leading-relaxed whitespace-pre-wrap">
              {assignment.checklist.requiredEvidence}
            </p>
          </div>
        )}

        {/* Form */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-txt-secondary mb-1.5">
              Tình trạng hiện tại <span className="text-danger-500">*</span>
            </label>
            <textarea
              className="w-full border border-border-mid rounded-lg px-3 py-2.5 text-sm text-txt-primary bg-level-1 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              rows={3}
              placeholder="Mô tả tình trạng thực hiện hiện tại, các bằng chứng đã thu thập được..."
              value={currentStatusText}
              onChange={(e) => setCurrentStatusText(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-txt-secondary mb-1.5">
              Ghi chú / Tài liệu minh chứng
            </label>
            <textarea
              className="w-full border border-border-mid rounded-lg px-3 py-2.5 text-sm text-txt-primary bg-level-1 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              rows={3}
              placeholder="Liệt kê tài liệu minh chứng, số hiệu văn bản, đường dẫn lưu trữ..."
              value={responseNote}
              onChange={(e) => setResponseNote(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-txt-secondary mb-1.5">
              Kế hoạch xử lý (nếu chưa hoàn thành)
            </label>
            <textarea
              className="w-full border border-border-mid rounded-lg px-3 py-2.5 text-sm text-txt-primary bg-level-1 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              rows={2}
              placeholder="Dự kiến hoàn thành khi nào, cần phối hợp với ai..."
              value={actionPlanText}
              onChange={(e) => setActionPlanText(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-txt-secondary mb-1.5">
              Tiến độ thực hiện: <span className="font-bold text-txt-primary">{progressPercent}%</span>
            </label>
            <input
              type="range"
              min={0}
              max={100}
              step={5}
              value={progressPercent}
              onChange={(e) => setProgressPercent(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-xs text-txt-tertiary mt-0.5">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-border-mid flex justify-end gap-2">
          <Button variant="tertiary" onClick={onClose} disabled={isSubmitting}>
            Hủy
          </Button>
          <Button onClick={handleSubmit} disabled={isSubmitting || !currentStatusText.trim()}>
            {isSubmitting ? "Đang nộp..." : "Nộp cập nhật"}
          </Button>
        </div>
      </div>
    </div>
  );
}

// ─── Detail Panel ─────────────────────────────────────────────────────────────

function DetailPanel({
  assignment,
  onClose,
  onSubmitEvidence,
}: {
  assignment: EvidenceAssignment;
  onClose: () => void;
  onSubmitEvidence: () => void;
}) {
  const canSubmit = !["COMPLETED", "CLOSED", "CANCELLED", "DELETED"].includes(
    assignment.status
  );

  return (
    <>
      <div
        className="fixed inset-0 z-30 bg-black/20"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="fixed right-0 top-0 bottom-[40px] w-[480px] z-40 flex flex-col bg-level-0 shadow-2xl border-l border-border-mid">
        {/* Header */}
        <div className="flex items-start justify-between px-5 py-4 border-b border-border-mid">
          <div className="flex-1 min-w-0 pr-3">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-xs font-mono text-txt-tertiary bg-level-2 px-2 py-0.5 rounded">
                {assignment.assignmentCode}
              </span>
              <Badge variant={EVIDENCE_STATUS_VARIANT[assignment.evidenceStatus]}>
                {EVIDENCE_STATUS_LABEL[assignment.evidenceStatus]}
              </Badge>
            </div>
            <h3 className="text-sm font-semibold text-txt-primary leading-snug line-clamp-2">
              {assignment.assignmentTitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-txt-tertiary hover:text-txt-primary shrink-0 mt-0.5 p-1"
          >
            <IconCrossLargeX className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
          {/* Checklist info */}
          {assignment.checklist && (
            <section className="space-y-2">
              <p className="text-xs font-semibold text-txt-tertiary uppercase tracking-wide">
                Checklist liên kết
              </p>
              <div className="rounded-lg border border-border-mid p-3 bg-level-1">
                <p className="text-xs font-mono text-txt-tertiary mb-1">
                  {assignment.checklist.checklistCode}
                </p>
                <p className="text-sm text-txt-primary leading-snug">
                  {assignment.checklist.checklistQuestion}
                </p>
              </div>
            </section>
          )}

          {/* Evidence required */}
          {assignment.checklist?.requiredEvidence && (
            <section className="space-y-2">
              <p className="text-xs font-semibold text-txt-tertiary uppercase tracking-wide">
                Bằng chứng yêu cầu
              </p>
              <div className="rounded-lg bg-blue-50 border border-blue-100 p-3">
                <p className="text-xs text-blue-800 leading-relaxed whitespace-pre-wrap">
                  {assignment.checklist.requiredEvidence}
                </p>
              </div>
            </section>
          )}

          {/* Implementation method */}
          {assignment.checklist?.implementationMethod && (
            <section className="space-y-2">
              <p className="text-xs font-semibold text-txt-tertiary uppercase tracking-wide">
                Phương pháp thực hiện
              </p>
              <p className="text-sm text-txt-secondary leading-relaxed">
                {assignment.checklist.implementationMethod}
              </p>
            </section>
          )}

          {/* Assignment metadata */}
          <section className="space-y-3 border-t border-border-mid pt-4">
            <p className="text-xs font-semibold text-txt-tertiary uppercase tracking-wide">
              Thông tin giao việc
            </p>
            <div className="grid grid-cols-2 gap-3">
              <InfoRow
                label="Đơn vị chủ trì"
                value={assignment.leadUnitName}
              />
              <InfoRow
                label="Ưu tiên"
                value={
                  <Badge variant={PRIORITY_VARIANT[assignment.priority]}>
                    {PRIORITY_LABEL[assignment.priority]}
                  </Badge>
                }
              />
              <InfoRow
                label="Trạng thái GV"
                value={
                  <Badge variant={ASSIGNMENT_STATUS_VARIANT[assignment.status]}>
                    {ASSIGNMENT_STATUS_LABEL[assignment.status]}
                  </Badge>
                }
              />
              <InfoRow
                label="Tiến độ"
                value={
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-border-mid rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${assignment.progressPercent}%` }}
                      />
                    </div>
                    <span className="text-xs font-mono text-txt-secondary">
                      {assignment.progressPercent}%
                    </span>
                  </div>
                }
              />
              <InfoRow
                label="Hạn nộp"
                value={
                  <span
                    className={
                      assignment.isOverdue
                        ? "text-danger-600 font-semibold"
                        : ""
                    }
                  >
                    {formatDate(assignment.dueDate)}
                    {assignment.isOverdue && " ⚠ Quá hạn"}
                  </span>
                }
              />
              <InfoRow
                label="Cập nhật lần cuối"
                value={formatDateTime(assignment.updatedAt)}
              />
            </div>
          </section>

          {/* Current status / evidence notes */}
          {(assignment.currentStatusText || assignment.responseNote || assignment.actionPlanText) && (
            <section className="space-y-3 border-t border-border-mid pt-4">
              <p className="text-xs font-semibold text-txt-tertiary uppercase tracking-wide">
                Báo cáo gần nhất
              </p>
              {assignment.currentStatusText && (
                <div>
                  <p className="text-xs text-txt-tertiary mb-1">Tình trạng</p>
                  <p className="text-sm text-txt-primary bg-level-1 rounded-lg p-3 leading-relaxed whitespace-pre-wrap">
                    {assignment.currentStatusText}
                  </p>
                </div>
              )}
              {assignment.responseNote && (
                <div>
                  <p className="text-xs text-txt-tertiary mb-1">Tài liệu minh chứng</p>
                  <p className="text-sm text-txt-primary bg-level-1 rounded-lg p-3 leading-relaxed whitespace-pre-wrap">
                    {assignment.responseNote}
                  </p>
                </div>
              )}
              {assignment.actionPlanText && (
                <div>
                  <p className="text-xs text-txt-tertiary mb-1">Kế hoạch xử lý</p>
                  <p className="text-sm text-txt-primary bg-level-1 rounded-lg p-3 leading-relaxed whitespace-pre-wrap">
                    {assignment.actionPlanText}
                  </p>
                </div>
              )}
            </section>
          )}

          {/* Requirement link */}
          {assignment.requirement && (
            <section className="space-y-2 border-t border-border-mid pt-4">
              <p className="text-xs font-semibold text-txt-tertiary uppercase tracking-wide">
                Yêu cầu pháp lý
              </p>
              <div className="flex items-start gap-2">
                <span className="text-xs font-mono text-txt-tertiary bg-level-2 px-1.5 py-0.5 rounded shrink-0">
                  {assignment.requirement.requirementCode}
                </span>
                <p className="text-sm text-txt-secondary line-clamp-2">
                  {assignment.requirement.title}
                </p>
              </div>
            </section>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3.5 border-t border-border-mid flex justify-end gap-2">
          <Button variant="tertiary" onClick={onClose}>
            Đóng
          </Button>
          {canSubmit && (
            <Button onClick={onSubmitEvidence}>
              Cập nhật bằng chứng
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs text-txt-tertiary mb-0.5">{label}</p>
      <div className="text-sm text-txt-primary">{value}</div>
    </div>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  variant,
  active,
  onClick,
}: {
  label: string;
  value: number;
  variant: "neutral" | "danger" | "warning" | "success" | "info";
  active?: boolean;
  onClick?: () => void;
}) {
  const borderColors = {
    neutral: "#94a3b8",
    danger: "#ef4444",
    warning: "#f59e0b",
    success: "#22c55e",
    info: "#3b82f6",
  };

  return (
    <button
      onClick={onClick}
      className={`text-left rounded-lg border bg-level-0 p-4 transition-all ${
        active
          ? "ring-2 ring-primary shadow-md"
          : "hover:shadow-sm hover:border-border-high"
      }`}
      style={{ borderLeftWidth: 4, borderLeftColor: borderColors[variant] }}
    >
      <p className="text-xs text-txt-tertiary mb-1">{label}</p>
      <p className="text-2xl font-bold text-txt-primary">{value}</p>
    </button>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export function IcpmsEvidencePage() {
  usePageTitle("Bằng chứng");
  const organizationId = useOrganizationId();
  const environment = useRelayEnvironment();
  const { toast } = useToast();

  const [allAssignments, setAllAssignments] = useState<EvidenceAssignment[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<FilterState>({
    evidenceStatus: "ALL",
    leadUnit: "",
  });
  const [selected, setSelected] = useState<EvidenceAssignment | null>(null);
  const [submitTarget, setSubmitTarget] = useState<EvidenceAssignment | null>(null);

  const loadData = useCallback(() => {
    if (!organizationId) return;
    setLoading(true);
    (
      fetchQuery(environment, listQuery, { organizationId }, {
        networkCacheConfig: { force: true },
      }) as any
    )
      .toPromise()
      .then((data: any) => {
        const edges = data?.icpmsAssignments?.edges ?? [];
        const all: EvidenceAssignment[] = edges
          .map((e: any) => e.node)
          .filter((a: EvidenceAssignment) => a.requiresEvidence);
        setAllAssignments(all);
      })
      .catch((err: unknown) => {
        const msg = err instanceof Error ? err.message : String(err);
        toast({
          title: "Không thể tải dữ liệu bằng chứng",
          description: msg,
          variant: "error",
        });
      })
      .finally(() => setLoading(false));
  }, [environment, organizationId, toast]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Stats
  const stats = useMemo(() => {
    const base = allAssignments;
    return {
      total: base.length,
      notSubmitted: base.filter((a) => a.evidenceStatus === "REQUIRED_NOT_SUBMITTED").length,
      submitted: base.filter((a) => a.evidenceStatus === "SUBMITTED").length,
      approved: base.filter((a) => a.evidenceStatus === "APPROVED").length,
      rejected: base.filter((a) => a.evidenceStatus === "REJECTED").length,
    };
  }, [allAssignments]);

  // Unique lead units for filter
  const leadUnits = useMemo(() => {
    const units = new Set(allAssignments.map((a) => a.leadUnitName));
    return Array.from(units).sort();
  }, [allAssignments]);

  // Filtered list
  const filtered = useMemo(() => {
    return allAssignments.filter((a) => {
      if (filter.evidenceStatus !== "ALL" && a.evidenceStatus !== filter.evidenceStatus)
        return false;
      if (filter.leadUnit && a.leadUnitName !== filter.leadUnit) return false;
      return true;
    });
  }, [allAssignments, filter]);

  const handleSubmitted = useCallback(
    (updated: Partial<EvidenceAssignment>) => {
      setAllAssignments((prev) =>
        prev.map((a) =>
          a.id === submitTarget?.id ? { ...a, ...updated } : a
        )
      );
      if (selected?.id === submitTarget?.id) {
        setSelected((prev) => (prev ? { ...prev, ...updated } : prev));
      }
      setSubmitTarget(null);
    },
    [submitTarget, selected]
  );

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border-mid shrink-0">
        <div className="flex gap-3 items-start">
          <span
            aria-hidden
            className="mt-1.5 h-7 w-[3px] rounded-full shrink-0"
            style={{ background: "linear-gradient(180deg, #0a3d8f 0%, #2563eb 100%)" }}
          />
          <div>
            <h1 className="text-3xl font-bold tracking-tight" style={{ color: "#0a3d8f" }}>
              Bằng chứng
            </h1>
            <p className="text-sm text-txt-secondary mt-1">
              Theo dõi và cập nhật hồ sơ minh chứng cho các giao việc tuân thủ
            </p>
          </div>
        </div>
        <Button variant="tertiary" onClick={loadData} disabled={loading}>
          <IconRotateCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
        </Button>
      </div>

      {/* Stats */}
      <div className="px-6 py-4 border-b border-border-mid shrink-0">
        <div className="grid grid-cols-5 gap-3">
          <StatCard
            label="Tổng cần bằng chứng"
            value={stats.total}
            variant="neutral"
            active={filter.evidenceStatus === "ALL"}
            onClick={() => setFilter((f) => ({ ...f, evidenceStatus: "ALL" }))}
          />
          <StatCard
            label="Chưa nộp"
            value={stats.notSubmitted}
            variant="danger"
            active={filter.evidenceStatus === "REQUIRED_NOT_SUBMITTED"}
            onClick={() =>
              setFilter((f) => ({
                ...f,
                evidenceStatus:
                  f.evidenceStatus === "REQUIRED_NOT_SUBMITTED"
                    ? "ALL"
                    : "REQUIRED_NOT_SUBMITTED",
              }))
            }
          />
          <StatCard
            label="Đã nộp (chờ duyệt)"
            value={stats.submitted}
            variant="warning"
            active={filter.evidenceStatus === "SUBMITTED"}
            onClick={() =>
              setFilter((f) => ({
                ...f,
                evidenceStatus:
                  f.evidenceStatus === "SUBMITTED" ? "ALL" : "SUBMITTED",
              }))
            }
          />
          <StatCard
            label="Đã duyệt"
            value={stats.approved}
            variant="success"
            active={filter.evidenceStatus === "APPROVED"}
            onClick={() =>
              setFilter((f) => ({
                ...f,
                evidenceStatus:
                  f.evidenceStatus === "APPROVED" ? "ALL" : "APPROVED",
              }))
            }
          />
          <StatCard
            label="Bị từ chối"
            value={stats.rejected}
            variant="danger"
            active={filter.evidenceStatus === "REJECTED"}
            onClick={() =>
              setFilter((f) => ({
                ...f,
                evidenceStatus:
                  f.evidenceStatus === "REJECTED" ? "ALL" : "REJECTED",
              }))
            }
          />
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 px-6 py-3 border-b border-border-mid shrink-0 flex-wrap">
        <Select
          value={filter.evidenceStatus}
          onValueChange={(v) =>
            setFilter((f) => ({ ...f, evidenceStatus: v as EvidenceStatus | "ALL" }))
          }
        >
          <Option value="ALL">Tất cả trạng thái bằng chứng</Option>
          <Option value="REQUIRED_NOT_SUBMITTED">Chưa nộp</Option>
          <Option value="SUBMITTED">Đã nộp</Option>
          <Option value="APPROVED">Đã duyệt</Option>
          <Option value="REJECTED">Bị từ chối</Option>
        </Select>
        {leadUnits.length > 0 && (
          <Select
            value={filter.leadUnit || undefined}
            onValueChange={(v) => setFilter((f) => ({ ...f, leadUnit: v }))}
            placeholder="Tất cả đơn vị"
          >
            {leadUnits.map((u) => (
              <Option key={u} value={u}>
                {u}
              </Option>
            ))}
          </Select>
        )}
        {(filter.evidenceStatus !== "ALL" || filter.leadUnit) && (
          <Button
            variant="tertiary"
            onClick={() => setFilter({ evidenceStatus: "ALL", leadUnit: "" })}
          >
            <IconCrossLargeX className="h-3 w-3 mr-1" />
            Xóa bộ lọc
          </Button>
        )}
        <span className="text-xs text-txt-tertiary ml-auto">
          {filtered.length} / {allAssignments.length} giao việc
        </span>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto px-6 py-4">
        {loading && allAssignments.length === 0 ? (
          <div className="flex items-center justify-center py-20 text-txt-tertiary text-sm">
            Đang tải...
          </div>
        ) : allAssignments.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-sm font-medium text-txt-secondary">
              Chưa có giao việc nào yêu cầu bằng chứng.
            </p>
            <p className="text-xs text-txt-tertiary mt-2 max-w-sm mx-auto">
              Khi tạo giao việc từ checklist, bật tùy chọn &ldquo;Yêu cầu bằng chứng&rdquo; để theo dõi tại đây.
            </p>
          </Card>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 gap-2 text-txt-tertiary">
            <p className="text-sm">Không có kết quả khớp với bộ lọc.</p>
            <Button
              variant="tertiary"
              onClick={() => setFilter({ evidenceStatus: "ALL", leadUnit: "" })}
            >
              Xóa bộ lọc
            </Button>
          </div>
        ) : (
          <Table>
            <Thead>
              <Tr>
                <Th width={140}>Mã GV</Th>
                <Th>Tên giao việc / Checklist</Th>
                <Th width={160}>Đơn vị chủ trì</Th>
                <Th width={90}>Ưu tiên</Th>
                <Th width={120}>Trạng thái GV</Th>
                <Th width={140}>Bằng chứng</Th>
                <Th width={80}>Tiến độ</Th>
                <Th width={100}>Hạn nộp</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filtered.map((a) => (
                <Tr
                  key={a.id}
                  onClick={() => setSelected(a.id === selected?.id ? null : a)}
                  className={selected?.id === a.id ? "bg-blue-50" : ""}
                >
                  <Td noLink>
                    <span className="text-xs font-mono text-txt-tertiary">
                      {a.assignmentCode}
                    </span>
                  </Td>
                  <Td noLink>
                    <p className="text-sm text-txt-primary line-clamp-1 font-medium">
                      {a.assignmentTitle}
                    </p>
                    {a.checklist && (
                      <p className="text-xs text-txt-tertiary font-mono mt-0.5">
                        {a.checklist.checklistCode}
                      </p>
                    )}
                  </Td>
                  <Td noLink>
                    <span className="text-xs text-txt-secondary">{a.leadUnitName}</span>
                  </Td>
                  <Td noLink>
                    <Badge variant={PRIORITY_VARIANT[a.priority]}>
                      {PRIORITY_LABEL[a.priority]}
                    </Badge>
                  </Td>
                  <Td noLink>
                    <Badge variant={ASSIGNMENT_STATUS_VARIANT[a.status]}>
                      {ASSIGNMENT_STATUS_LABEL[a.status]}
                    </Badge>
                  </Td>
                  <Td noLink>
                    <Badge variant={EVIDENCE_STATUS_VARIANT[a.evidenceStatus]}>
                      {EVIDENCE_STATUS_LABEL[a.evidenceStatus]}
                    </Badge>
                  </Td>
                  <Td noLink>
                    <div className="flex items-center gap-1.5">
                      <div className="w-12 h-1.5 bg-border-mid rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${a.progressPercent}%` }}
                        />
                      </div>
                      <span className="text-xs text-txt-tertiary">{a.progressPercent}%</span>
                    </div>
                  </Td>
                  <Td noLink>
                    <span
                      className={`text-xs ${
                        a.isOverdue
                          ? "text-danger-600 font-semibold"
                          : "text-txt-tertiary"
                      }`}
                    >
                      {formatDate(a.dueDate)}
                      {a.isOverdue && " ⚠"}
                    </span>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </div>

      {/* Detail panel */}
      {selected && (
        <DetailPanel
          assignment={selected}
          onClose={() => setSelected(null)}
          onSubmitEvidence={() => setSubmitTarget(selected)}
        />
      )}

      {/* Submit update dialog */}
      {submitTarget && (
        <SubmitUpdateDialog
          assignment={submitTarget}
          onClose={() => setSubmitTarget(null)}
          onSubmitted={handleSubmitted}
        />
      )}
    </div>
  );
}
