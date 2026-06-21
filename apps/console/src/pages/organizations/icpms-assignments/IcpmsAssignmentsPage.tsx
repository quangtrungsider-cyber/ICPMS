// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import {
  Badge,
  Button,
  Card,
  IconPlusLarge,
  IconRotateCw,
  Option,
  PageHeader,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@probo/ui";
import { useCallback, useEffect, useState } from "react";
import { fetchQuery, graphql, useMutation, useRelayEnvironment } from "react-relay";
import { useOrganizationId } from "#/hooks/useOrganizationId";
import { usePageTitle } from "@probo/hooks";

// ─── GraphQL ──────────────────────────────────────────────────────────────────

const listAssignmentsQuery = graphql`
  query IcpmsAssignmentsPageListQuery($organizationId: ID!) {
    icpmsAssignments(organizationId: $organizationId) {
      edges {
        node {
          id
          assignmentCode
          assignmentTitle
          leadUnitName
          coordinationUnitNames
          priority
          status
          progressPercent
          dueDate
          assignedAt
          createdFrom
          isOverdue
          checklist {
            id
            checklistCode
            checklistQuestion
          }
          document {
            id
            code
            title
          }
        }
      }
      totalCount
    }
  }
`;

const statsQuery = graphql`
  query IcpmsAssignmentsPageStatsQuery($organizationId: ID!) {
    icpmsAssignmentStats(organizationId: $organizationId) {
      totalAssignments
      assigned
      accepted
      inProgress
      submitted
      completed
      closed
      overdue
      cancelled
    }
  }
`;

const listChecklistsQuery = graphql`
  query IcpmsAssignmentsPageChecklistsQuery($organizationId: ID!) {
    icpmsChecklists(organizationId: $organizationId) {
      edges {
        node {
          id
          checklistCode
          checklistQuestion
          responsibleUnit
          priority
          status
          approvalStatus
        }
      }
    }
  }
`;

const createFromChecklistsMutation = graphql`
  mutation IcpmsAssignmentsPageCreateFromChecklistsMutation(
    $input: CreateIcpmsAssignmentsFromChecklistsInput!
  ) {
    createIcpmsAssignmentsFromChecklists(input: $input) {
      assignments {
        id
        assignmentCode
      }
      createdCount
      skippedCount
      errorCount
    }
  }
`;

const acceptMutation = graphql`
  mutation IcpmsAssignmentsPageAcceptMutation($input: AcceptIcpmsAssignmentInput!) {
    acceptIcpmsAssignment(input: $input) {
      assignment { id status }
    }
  }
`;

const startMutation = graphql`
  mutation IcpmsAssignmentsPageStartMutation($input: StartIcpmsAssignmentInput!) {
    startIcpmsAssignment(input: $input) {
      assignment { id status progressPercent }
    }
  }
`;

const completeMutation = graphql`
  mutation IcpmsAssignmentsPageCompleteMutation($input: CompleteIcpmsAssignmentInput!) {
    completeIcpmsAssignment(input: $input) {
      assignment { id status progressPercent }
    }
  }
`;

const closeMutation = graphql`
  mutation IcpmsAssignmentsPageCloseMutation($input: CloseIcpmsAssignmentInput!) {
    closeIcpmsAssignment(input: $input) {
      assignment { id status }
    }
  }
`;

const cancelMutation = graphql`
  mutation IcpmsAssignmentsPageCancelMutation($input: CancelIcpmsAssignmentInput!) {
    cancelIcpmsAssignment(input: $input) {
      assignment { id status }
    }
  }
`;

// ─── Types ────────────────────────────────────────────────────────────────────

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

type Assignment = {
  id: string;
  assignmentCode: string;
  assignmentTitle: string;
  leadUnitName: string;
  coordinationUnitNames: string | null;
  priority: Priority;
  status: AssignmentStatus;
  progressPercent: number;
  dueDate: string | null;
  assignedAt: string | null;
  createdFrom: string;
  isOverdue: boolean;
  checklist: {
    id: string;
    checklistCode: string;
    checklistQuestion: string;
  } | null;
  document: { id: string; code: string; title: string } | null;
};

type ChecklistItem = {
  id: string;
  checklistCode: string;
  checklistQuestion: string;
  responsibleUnit: string | null;
  priority: string;
  status: string;
  approvalStatus: string;
};

type Stats = {
  totalAssignments: number;
  assigned: number;
  accepted: number;
  inProgress: number;
  submitted: number;
  completed: number;
  closed: number;
  overdue: number;
  cancelled: number;
};

type StatusFilter = "ALL" | AssignmentStatus;

// ─── Helpers ─────────────────────────────────────────────────────────────────

const STATUS_LABEL: Record<AssignmentStatus, string> = {
  DRAFT: "Bản nháp",
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

const STATUS_VARIANT: Record<
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

const PRIORITY_VARIANT: Record<
  Priority,
  "info" | "success" | "warning" | "danger" | "neutral"
> = {
  LOW: "neutral",
  MEDIUM: "info",
  HIGH: "warning",
  CRITICAL: "danger",
};

function formatDate(iso: string | null): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("vi-VN");
}

// ─── Sub-components ───────────────────────────────────────────────────────────

type StatCardProps = {
  label: string;
  value: number;
  color: string;
};

function StatCard({ label, value, color }: StatCardProps) {
  return (
    <div
      className="rounded-lg border border-border-low bg-level-1 p-3 flex flex-col gap-1"
      style={{ borderLeft: `4px solid ${color}` }}
    >
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-2xl font-bold">{value}</span>
    </div>
  );
}

// ─── Create From Checklists Modal ─────────────────────────────────────────────

type CreateModalProps = {
  checklists: ChecklistItem[];
  onClose: () => void;
  onCreated: () => void;
};

function CreateFromChecklistsModal({ checklists, onClose, onCreated }: CreateModalProps) {
  const { toast } = useToast();
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [leadUnitName, setLeadUnitName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("MEDIUM");
  const [requiresEvidence, setRequiresEvidence] = useState(false);

  const [commitCreate, creating] = useMutation(createFromChecklistsMutation);

  const approved = checklists.filter((c) => c.approvalStatus === "APPROVED");

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSelectAll = () => {
    if (selectedIds.size === approved.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(approved.map((c) => c.id)));
    }
  };

  const handleCreate = () => {
    if (selectedIds.size === 0) {
      toast({ title: "Vui lòng chọn ít nhất một checklist", description: "", variant: "error" });
      return;
    }
    if (!leadUnitName.trim()) {
      toast({ title: "Vui lòng nhập đơn vị chủ trì", description: "", variant: "error" });
      return;
    }

    const input: Record<string, unknown> = {
      checklistIds: Array.from(selectedIds),
      leadUnitName: leadUnitName.trim(),
      priority,
      requiresEvidence,
    };
    if (dueDate) {
      input["dueDate"] = new Date(dueDate).toISOString();
    }

    commitCreate({
      variables: { input },
      onCompleted(data: unknown) {
        const { createdCount, skippedCount, errorCount } =
          (data as any).createIcpmsAssignmentsFromChecklists;
        toast({
          title: `Đã tạo ${createdCount} giao việc`,
          description:
            skippedCount > 0
              ? `Bỏ qua ${skippedCount} (đã tồn tại). ${errorCount > 0 ? `Lỗi: ${errorCount}` : ""}`
              : errorCount > 0
                ? `Lỗi: ${errorCount}`
                : "",
          variant: createdCount > 0 ? "success" : "warning",
        });
        onCreated();
        onClose();
      },
      onError(err: Error) {
        toast({ title: "Không thể tạo giao việc", description: err.message, variant: "error" });
      },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-level-1 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
        <div className="p-5 border-b flex items-center justify-between">
          <h2 className="text-lg font-semibold">Tạo giao việc từ Checklist</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {/* Form fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Đơn vị chủ trì <span className="text-destructive">*</span>
              </label>
              <input
                className="w-full border rounded px-3 py-2 text-sm"
                placeholder="VD: Ban Kỹ thuật - BKT"
                value={leadUnitName}
                onChange={(e) => setLeadUnitName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Hạn hoàn thành</label>
              <input
                type="date"
                className="w-full border rounded px-3 py-2 text-sm"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Mức độ ưu tiên</label>
              <select
                className="w-full border rounded px-3 py-2 text-sm"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="LOW">Thấp</option>
                <option value="MEDIUM">Trung bình</option>
                <option value="HIGH">Cao</option>
                <option value="CRITICAL">Khẩn cấp</option>
              </select>
            </div>
            <div className="flex items-end pb-2">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={requiresEvidence}
                  onChange={(e) => setRequiresEvidence(e.target.checked)}
                />
                Yêu cầu bằng chứng
              </label>
            </div>
          </div>

          {/* Checklist list */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">
                Chọn checklist ({selectedIds.size}/{approved.length})
              </span>
              {approved.length > 0 && (
                <button
                  className="text-xs text-primary underline"
                  onClick={handleSelectAll}
                >
                  {selectedIds.size === approved.length ? "Bỏ chọn tất cả" : "Chọn tất cả"}
                </button>
              )}
            </div>
            {approved.length === 0 ? (
              <p className="text-sm text-muted-foreground py-4 text-center">
                Chưa có checklist nào được duyệt. Vui lòng duyệt checklist trước khi giao việc.
              </p>
            ) : (
              <div className="border rounded divide-y max-h-64 overflow-y-auto">
                {approved.map((c) => (
                  <label
                    key={c.id}
                    className="flex items-start gap-3 p-3 cursor-pointer hover:bg-muted/30"
                  >
                    <input
                      type="checkbox"
                      className="mt-0.5"
                      checked={selectedIds.has(c.id)}
                      onChange={() => toggleSelect(c.id)}
                    />
                    <div className="min-w-0">
                      <div className="text-sm font-medium">{c.checklistCode}</div>
                      <div className="text-xs text-muted-foreground truncate">
                        {c.checklistQuestion}
                      </div>
                      {c.responsibleUnit && (
                        <div className="text-xs text-muted-foreground">
                          Đơn vị chịu trách nhiệm: {c.responsibleUnit}
                        </div>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="p-4 border-t flex justify-end gap-3">
          <Button variant="tertiary" onClick={onClose}>
            Huỷ
          </Button>
          <Button
            onClick={handleCreate}
            disabled={creating || selectedIds.size === 0 || !leadUnitName.trim()}
          >
            {creating ? "Đang tạo..." : `Tạo ${selectedIds.size} giao việc`}
          </Button>
        </div>
      </div>
    </div>
  );
}

// ─── Detail Panel ─────────────────────────────────────────────────────────────

type DetailPanelProps = {
  assignment: Assignment;
  onClose: () => void;
  onRefresh: () => void;
};

function DetailPanel({ assignment, onClose, onRefresh }: DetailPanelProps) {
  const { toast } = useToast();
  const [commitAccept, accepting] = useMutation(acceptMutation);
  const [commitStart, starting] = useMutation(startMutation);
  const [commitComplete, completing] = useMutation(completeMutation);
  const [commitClose, closing] = useMutation(closeMutation);
  const [commitCancel, cancelling] = useMutation(cancelMutation);
  const [cancelReason, setCancelReason] = useState("");
  const [showCancelForm, setShowCancelForm] = useState(false);

  const handleTransition = (
    commit: (args: { variables: unknown; onCompleted: () => void; onError: (e: Error) => void }) => void,
    input: Record<string, unknown>,
    label: string,
  ) => {
    commit({
      variables: { input },
      onCompleted() {
        toast({ title: `${label} thành công`, description: "", variant: "success" });
        onRefresh();
      },
      onError(err: Error) {
        toast({ title: `Không thể ${label.toLowerCase()}`, description: err.message, variant: "error" });
      },
    });
  };

  const s = assignment.status;
  const canAccept = s === "ASSIGNED";
  const canStart = s === "ACCEPTED" || s === "ASSIGNED";
  const canComplete = s === "IN_PROGRESS" || s === "SUBMITTED";
  const canClose = s === "COMPLETED";
  const canCancel = !["COMPLETED", "CLOSED", "CANCELLED", "DELETED"].includes(s);

  return (
    <div className="fixed inset-y-0 right-0 z-40 w-96 bg-level-1 border-l border-border-low shadow-xl flex flex-col">
      <div className="p-4 border-b flex items-center justify-between">
        <h3 className="font-semibold truncate">{assignment.assignmentCode}</h3>
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground">✕</button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div>
          <p className="text-xs text-muted-foreground">Tên giao việc</p>
          <p className="text-sm font-medium">{assignment.assignmentTitle}</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs text-muted-foreground">Trạng thái</p>
            <Badge variant={STATUS_VARIANT[assignment.status]}>
              {STATUS_LABEL[assignment.status]}
            </Badge>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Ưu tiên</p>
            <Badge variant={PRIORITY_VARIANT[assignment.priority]}>
              {PRIORITY_LABEL[assignment.priority]}
            </Badge>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Đơn vị chủ trì</p>
            <p className="text-sm">{assignment.leadUnitName}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Tiến độ</p>
            <p className="text-sm font-medium">{assignment.progressPercent}%</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Hạn hoàn thành</p>
            <p className={`text-sm ${assignment.isOverdue ? "text-destructive font-medium" : ""}`}>
              {formatDate(assignment.dueDate)}
              {assignment.isOverdue && " ⚠ Quá hạn"}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Ngày giao</p>
            <p className="text-sm">{formatDate(assignment.assignedAt)}</p>
          </div>
        </div>

        {assignment.checklist && (
          <div>
            <p className="text-xs text-muted-foreground mb-1">Checklist liên kết</p>
            <div className="border rounded p-2 text-sm">
              <span className="font-mono text-xs bg-muted px-1 rounded">
                {assignment.checklist.checklistCode}
              </span>
              <p className="mt-1 text-muted-foreground text-xs line-clamp-2">
                {assignment.checklist.checklistQuestion}
              </p>
            </div>
          </div>
        )}

        {assignment.coordinationUnitNames && (
          <div>
            <p className="text-xs text-muted-foreground">Đơn vị phối hợp</p>
            <p className="text-sm">{assignment.coordinationUnitNames}</p>
          </div>
        )}

        {/* Action buttons */}
        <div className="pt-2 space-y-2">
          {canAccept && (
            <Button
              className="w-full"
              onClick={() => handleTransition(commitAccept as Parameters<typeof handleTransition>[0], { id: assignment.id }, "Nhận giao việc")}
              disabled={accepting}
            >
              Nhận giao việc
            </Button>
          )}
          {canStart && (
            <Button
              className="w-full"
              variant="secondary"
              onClick={() => handleTransition(commitStart as Parameters<typeof handleTransition>[0], { id: assignment.id }, "Bắt đầu thực hiện")}
              disabled={starting}
            >
              Bắt đầu thực hiện
            </Button>
          )}
          {canComplete && (
            <Button
              className="w-full"
              onClick={() => handleTransition(commitComplete as Parameters<typeof handleTransition>[0], { id: assignment.id }, "Hoàn thành")}
              disabled={completing}
            >
              Đánh dấu hoàn thành
            </Button>
          )}
          {canClose && (
            <Button
              className="w-full"
              variant="secondary"
              onClick={() => handleTransition(commitClose as Parameters<typeof handleTransition>[0], { id: assignment.id }, "Đóng giao việc")}
              disabled={closing}
            >
              Đóng giao việc
            </Button>
          )}
          {canCancel && !showCancelForm && (
            <Button
              className="w-full"
              variant="tertiary"
              onClick={() => setShowCancelForm(true)}
            >
              Huỷ giao việc
            </Button>
          )}
          {showCancelForm && (
            <div className="space-y-2">
              <textarea
                className="w-full border rounded p-2 text-sm"
                placeholder="Lý do huỷ..."
                rows={3}
                value={cancelReason}
                onChange={(e) => setCancelReason(e.target.value)}
              />
              <div className="flex gap-2">
                <Button
                  variant="tertiary"
                  onClick={() => setShowCancelForm(false)}
                >
                  Trở lại
                </Button>
                <Button
                  variant="danger"
                  disabled={cancelling || !cancelReason.trim()}
                  onClick={() =>
                    handleTransition(commitCancel as Parameters<typeof handleTransition>[0], { id: assignment.id, cancelReason }, "Huỷ giao việc")
                  }
                >
                  Xác nhận huỷ
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export function IcpmsAssignmentsPage() {
  usePageTitle("Giao việc");
  const { toast } = useToast();
  const organizationId = useOrganizationId();
  const environment = useRelayEnvironment();

  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [checklists, setChecklists] = useState<ChecklistItem[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("ALL");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);

  const loadData = useCallback(() => {
    if (!organizationId) return;
    setLoading(true);

    const vars = { organizationId };

    Promise.all([
      new Promise<void>((resolve, reject) => {
        fetchQuery(environment, listAssignmentsQuery, vars).subscribe({
          next(data: unknown) {
            setAssignments((data as { icpmsAssignments: { edges: { node: Assignment }[] } }).icpmsAssignments.edges.map((e) => e.node));
            resolve();
          },
          error: reject,
        });
      }),
      new Promise<void>((resolve, reject) => {
        fetchQuery(environment, statsQuery, vars).subscribe({
          next(data: unknown) {
            setStats((data as { icpmsAssignmentStats: Stats }).icpmsAssignmentStats);
            resolve();
          },
          error: reject,
        });
      }),
      new Promise<void>((resolve, reject) => {
        fetchQuery(environment, listChecklistsQuery, vars).subscribe({
          next(data: unknown) {
            setChecklists((data as { icpmsChecklists: { edges: { node: ChecklistItem }[] } }).icpmsChecklists.edges.map((e) => e.node));
            resolve();
          },
          error: reject,
        });
      }),
    ])
      .catch((err: unknown) => {
        const msg = err instanceof Error ? err.message : String(err);
        toast({ title: "Không thể tải dữ liệu giao việc", description: msg, variant: "error" });
      })
      .finally(() => setLoading(false));
  }, [environment, organizationId, toast]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const filtered =
    statusFilter === "ALL"
      ? assignments
      : assignments.filter((a) => a.status === statusFilter);

  return (
    <div className="space-y-5">
      <PageHeader
        title="Giao việc"
        description="Quản lý và theo dõi tiến độ giao việc thực hiện checklist"
      >
        <Button variant="secondary" onClick={loadData} disabled={loading}>
          <IconRotateCw className="mr-1 h-4 w-4" />
          {loading ? "Đang tải..." : "Làm mới"}
        </Button>
        <Button onClick={() => setShowCreateModal(true)}>
          <IconPlusLarge className="mr-1 h-4 w-4" />
          Tạo giao việc
        </Button>
      </PageHeader>

      {/* Stats */}
      {stats && (
        <div className="grid grid-cols-4 gap-3">
          <StatCard label="Tổng giao việc" value={stats.totalAssignments} color="#6366f1" />
          <StatCard label="Đã giao / Đã nhận" value={stats.assigned + stats.accepted} color="#3b82f6" />
          <StatCard label="Đang thực hiện" value={stats.inProgress + stats.submitted} color="#f59e0b" />
          <StatCard label="Quá hạn" value={stats.overdue} color="#ef4444" />
        </div>
      )}

      {/* Filter */}
      <div className="flex items-center gap-3">
        <Select
          value={statusFilter}
          onValueChange={(v) => setStatusFilter(v as StatusFilter)}
        >
          <Option value="ALL">Tất cả trạng thái</Option>
          <Option value="ASSIGNED">Đã giao</Option>
          <Option value="ACCEPTED">Đã nhận</Option>
          <Option value="IN_PROGRESS">Đang thực hiện</Option>
          <Option value="SUBMITTED">Đã báo cáo</Option>
          <Option value="RETURNED">Trả lại</Option>
          <Option value="COMPLETED">Hoàn thành</Option>
          <Option value="CLOSED">Đóng</Option>
          <Option value="CANCELLED">Đã huỷ</Option>
        </Select>
        <span className="text-sm text-muted-foreground">
          {filtered.length} kết quả
        </span>
      </div>

      {/* Table */}
      <Card>
        {filtered.length === 0 && !loading ? (
          <div className="py-16 text-center">
            <p className="text-muted-foreground text-sm">
              {assignments.length === 0
                ? "Chưa có giao việc nào. Bấm \"Tạo giao việc\" để bắt đầu giao việc từ checklist."
                : "Không có giao việc nào khớp với bộ lọc."}
            </p>
          </div>
        ) : (
          <Table>
            <Thead>
              <Tr>
                <Th>Mã</Th>
                <Th>Tên giao việc</Th>
                <Th>Đơn vị chủ trì</Th>
                <Th>Ưu tiên</Th>
                <Th>Trạng thái</Th>
                <Th>Tiến độ</Th>
                <Th>Hạn</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filtered.map((a) => (
                <Tr
                  key={a.id}
                  className="cursor-pointer hover:bg-muted/30"
                  onClick={() => setSelectedAssignment(a)}
                >
                  <Td>
                    <span className="font-mono text-xs">{a.assignmentCode}</span>
                  </Td>
                  <Td>
                    <div className="max-w-xs">
                      <p className="font-medium text-sm truncate">{a.assignmentTitle}</p>
                      {a.checklist && (
                        <p className="text-xs text-muted-foreground truncate">
                          CL: {a.checklist.checklistCode}
                        </p>
                      )}
                    </div>
                  </Td>
                  <Td className="text-sm">{a.leadUnitName}</Td>
                  <Td>
                    <Badge variant={PRIORITY_VARIANT[a.priority]}>
                      {PRIORITY_LABEL[a.priority]}
                    </Badge>
                  </Td>
                  <Td>
                    <Badge variant={STATUS_VARIANT[a.status]}>
                      {STATUS_LABEL[a.status]}
                    </Badge>
                  </Td>
                  <Td>
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-muted rounded-full h-1.5">
                        <div
                          className="bg-primary h-1.5 rounded-full"
                          style={{ width: `${a.progressPercent}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">{a.progressPercent}%</span>
                    </div>
                  </Td>
                  <Td>
                    <span className={`text-xs ${a.isOverdue ? "text-destructive font-medium" : "text-muted-foreground"}`}>
                      {formatDate(a.dueDate)}
                      {a.isOverdue && " ⚠"}
                    </span>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </Card>

      {/* Modals & panels */}
      {showCreateModal && (
        <CreateFromChecklistsModal
          checklists={checklists}
          onClose={() => setShowCreateModal(false)}
          onCreated={loadData}
        />
      )}

      {selectedAssignment && (
        <>
          <div
            className="fixed inset-0 z-30"
            onClick={() => setSelectedAssignment(null)}
          />
          <DetailPanel
            assignment={selectedAssignment}
            onClose={() => setSelectedAssignment(null)}
            onRefresh={() => {
              setSelectedAssignment(null);
              loadData();
            }}
          />
        </>
      )}
    </div>
  );
}