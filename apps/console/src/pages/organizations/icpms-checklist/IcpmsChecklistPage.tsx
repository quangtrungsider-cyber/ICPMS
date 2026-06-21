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
import { formatError } from "#/utils/formatError";

// ─── GraphQL ─────────────────────────────────────────────────────────────────

const listChecklistsQuery = graphql`
  query IcpmsChecklistPageListQuery($organizationId: ID!) {
    icpmsChecklists(organizationId: $organizationId) {
      edges {
        node {
          id
          checklistCode
          checklistQuestion
          priority
          status
          approvalStatus
          createdFrom
          responsibleUnit
          complianceDomain
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

// ─── Types ────────────────────────────────────────────────────────────────────

type Checklist = {
  id: string;
  checklistCode: string;
  checklistQuestion: string;
  priority: string;
  status: string;
  approvalStatus: string;
  createdFrom: string;
  responsibleUnit?: string | null;
  complianceDomain?: string | null;
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

function fmtDate(s: string | null | undefined): string {
  if (!s) return "—";
  return new Date(s).toLocaleString("vi-VN", {
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
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
          className="w-full border border-border-low rounded-lg p-3 text-sm text-txt-primary bg-level-1 focus:outline-none resize-none"
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

// ─── Detail Panel ─────────────────────────────────────────────────────────────

function DetailPanel({
  checklist,
  onClose,
  onApprove,
  onReject,
}: {
  checklist: Checklist;
  onClose: () => void;
  onApprove: () => void;
  onReject: () => void;
}) {
  return (
    <Card padded className="sticky top-4 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-txt-primary">Chi tiết checklist</h3>
        <button onClick={onClose}>
          <IconCrossLargeX size={16} className="text-txt-tertiary" />
        </button>
      </div>

      <div className="bg-subtle rounded-lg p-3 space-y-1">
        <p className="font-mono text-xs text-txt-secondary">{checklist.checklistCode}</p>
        <p className="text-sm font-medium text-txt-primary leading-snug">{checklist.checklistQuestion}</p>
      </div>

      <div className="space-y-2 text-sm">
        <DetailRow label="Tài liệu" value={`${checklist.document.code} — ${checklist.document.title}`} />
        <DetailRow label="Phiên bản" value={`v${checklist.documentVersion.versionCode}`} />
        {checklist.requirement && (
          <DetailRow
            label="Yêu cầu liên quan"
            value={`${checklist.requirement.requirementCode}: ${checklist.requirement.title}`}
          />
        )}
        {checklist.responsibleUnit && (
          <DetailRow label="Đơn vị thực hiện" value={checklist.responsibleUnit} />
        )}
        {checklist.complianceDomain && (
          <DetailRow label="Lĩnh vực tuân thủ" value={checklist.complianceDomain} />
        )}
        <DetailRow label="Ưu tiên" value={PRIORITY_LABELS[checklist.priority] ?? checklist.priority} />
        <DetailRow label="Nguồn tạo" value={CREATED_FROM_LABELS[checklist.createdFrom] ?? checklist.createdFrom} />
        <DetailRow label="Ngày tạo" value={fmtDate(checklist.createdAt)} />
        <DetailRow label="Cập nhật" value={fmtDate(checklist.updatedAt)} />
      </div>

      <div className="flex gap-2 items-center">
        <Badge variant={STATUS_COLORS[checklist.status] ?? "neutral"}>
          {STATUS_LABELS[checklist.status] ?? checklist.status}
        </Badge>
        <Badge variant={APPROVAL_COLORS[checklist.approvalStatus] ?? "neutral"}>
          {APPROVAL_LABELS[checklist.approvalStatus] ?? checklist.approvalStatus}
        </Badge>
      </div>

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

// ─── From AI Review Modal ─────────────────────────────────────────────────────

function FromAiReviewModal({
  organizationId,
  environment,
  onClose,
  onCreated,
}: {
  organizationId: string;
  environment: any;
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

  const [commitCreate] = useMutation(createFromAiSuggestionsMutation);

  useEffect(() => {
    (fetchQuery(environment, listAiJobsQuery, { organizationId }, { networkCacheConfig: { force: true } }) as any)
      .toPromise()
      .then((data: any) => {
        const edges = data?.icpmsAiReviewJobs?.edges ?? [];
        const completed = edges
          .map((e: any) => e.node)
          .filter((j: AiJob) => j.status === "COMPLETED");
        setJobs(completed);
        if (completed.length > 0) setSelectedJobId(completed[0].id);
      })
      .catch(() => toast({ title: "Không thể tải danh sách phiên AI Review", description: "", variant: "error" }))
      .finally(() => setLoadingJobs(false));
  }, [environment, organizationId, toast]);

  useEffect(() => {
    if (!selectedJobId) return;
    setLoadingSugs(true);
    setSuggestions([]);
    setSelectedIds(new Set());
    (fetchQuery(environment, listSuggestionsForJobQuery, { jobId: selectedJobId }, { networkCacheConfig: { force: true } }) as any)
      .toPromise()
      .then((data: any) => {
        const edges = data?.icpmsAiReviewSuggestions?.edges ?? [];
        setSuggestions(edges.map((e: any) => e.node));
      })
      .catch(() => {})
      .finally(() => setLoadingSugs(false));
  }, [environment, selectedJobId]);

  const toggleAll = () => {
    if (selectedIds.size === suggestions.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(suggestions.map(s => s.id)));
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
        </div>

        {/* Suggestions list */}
        <div className="flex-1 overflow-y-auto">
          {loadingSugs ? (
            <div className="p-8 text-center text-sm text-txt-tertiary">Đang tải gợi ý...</div>
          ) : suggestions.length === 0 ? (
            <div className="p-8 text-center text-sm text-txt-secondary">
              {selectedJobId ? "Không có gợi ý nào trong phiên này." : "Chọn phiên AI Review để xem gợi ý."}
            </div>
          ) : (
            <table className="w-full text-xs">
              <thead className="sticky top-0 bg-level-1 border-b border-border-low">
                <tr>
                  <th className="px-4 py-2 text-left w-8">
                    <input
                      type="checkbox"
                      checked={selectedIds.size === suggestions.length && suggestions.length > 0}
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
                {suggestions.map(sug => (
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

  const [checklists, setChecklists] = useState<Checklist[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Checklist | null>(null);
  const [rejectTarget, setRejectTarget] = useState<Checklist | null>(null);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("ALL");
  const [showAiModal, setShowAiModal] = useState(false);

  const [commitApprove] = useMutation(approveChecklistMutation);
  const [commitReject] = useMutation(rejectChecklistMutation);
  const [commitDelete] = useMutation(deleteChecklistMutation);
  const [commitArchive] = useMutation(archiveChecklistMutation);

  const loadChecklists = useCallback(() => {
    setLoading(true);
    (fetchQuery(environment, listChecklistsQuery, { organizationId }, { networkCacheConfig: { force: true } }) as any)
      .toPromise()
      .then((data: any) => {
        const edges = data?.icpmsChecklists?.edges ?? [];
        setChecklists(edges.map((e: any) => e.node));
      })
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

  const filtered = checklists.filter(cl => {
    if (statusFilter === "ALL") return true;
    if (statusFilter === "PENDING_REVIEW") return cl.approvalStatus === "PENDING_REVIEW";
    if (statusFilter === "APPROVED") return cl.approvalStatus === "APPROVED";
    if (statusFilter === "ACTIVE") return cl.status === "ACTIVE";
    if (statusFilter === "DRAFT") return cl.status === "DRAFT";
    return true;
  });

  const pendingCount = checklists.filter(c => c.approvalStatus === "PENDING_REVIEW").length;
  const approvedCount = checklists.filter(c => c.approvalStatus === "APPROVED").length;
  const activeCount = checklists.filter(c => c.status === "ACTIVE").length;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Checklist tuân thủ"
        description="Danh sách các checklist tuân thủ ICPMS. Checklist được tạo từ gợi ý AI Review hoặc nhập thủ công và phải được phê duyệt trước khi áp dụng."
      />

      {/* Stats bar */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Tổng checklist", value: checklists.length, color: "text-txt-primary" },
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

      {/* Main content */}
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
                  {checklists.length === 0
                    ? "Chưa có checklist nào"
                    : "Không có checklist phù hợp bộ lọc"}
                </p>
                {checklists.length === 0 && (
                  <>
                    <p className="text-xs text-txt-tertiary max-w-sm mx-auto">
                      Vui lòng duyệt checklist draft từ AI Review hoặc tạo checklist từ phiên AI Review đã hoàn thành.
                    </p>
                    <div className="flex gap-2 justify-center mt-2">
                      <Button icon={IconPlusLarge} onClick={() => setShowAiModal(true)}>
                        Tạo từ AI Review
                      </Button>
                    </div>
                  </>
                )}
              </div>
            )}

            {!loading && filtered.length > 0 && (
              <Table>
                <Thead>
                  <Tr>
                    <Th>Mã / Câu hỏi</Th>
                    <Th>Tài liệu</Th>
                    <Th>Yêu cầu</Th>
                    <Th>Ưu tiên</Th>
                    <Th>Trạng thái</Th>
                    <Th>Phê duyệt</Th>
                    <Th>Nguồn</Th>
                    <Th>Ngày tạo</Th>
                    <Th>Thao tác</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filtered.map(cl => (
                    <Tr
                      key={cl.id}
                      className={`cursor-pointer hover:bg-bg-alt transition-colors ${selected?.id === cl.id ? "bg-blue-50" : ""}`}
                      onClick={() => setSelected(cl.id === selected?.id ? null : cl)}
                    >
                      <Td>
                        <p className="font-mono text-xs text-txt-secondary mb-0.5">{cl.checklistCode}</p>
                        <p className="text-xs text-txt-primary line-clamp-2 max-w-56">{cl.checklistQuestion}</p>
                      </Td>
                      <Td>
                        <p className="text-xs font-medium text-txt-primary">{cl.document.code}</p>
                        <p className="text-xs text-txt-tertiary">v{cl.documentVersion.versionCode}</p>
                      </Td>
                      <Td>
                        {cl.requirement
                          ? (
                            <p className="font-mono text-xs text-txt-secondary">{cl.requirement.requirementCode}</p>
                          )
                          : <span className="text-xs text-txt-tertiary">—</span>}
                      </Td>
                      <Td>
                        <span className={`text-xs ${PRIORITY_COLORS[cl.priority] ?? "text-txt-secondary"}`}>
                          {PRIORITY_LABELS[cl.priority] ?? cl.priority}
                        </span>
                      </Td>
                      <Td>
                        <Badge variant={STATUS_COLORS[cl.status] ?? "neutral"}>
                          {STATUS_LABELS[cl.status] ?? cl.status}
                        </Badge>
                      </Td>
                      <Td>
                        <Badge variant={APPROVAL_COLORS[cl.approvalStatus] ?? "neutral"}>
                          {APPROVAL_LABELS[cl.approvalStatus] ?? cl.approvalStatus}
                        </Badge>
                      </Td>
                      <Td>
                        <span className="text-xs text-txt-tertiary">
                          {CREATED_FROM_LABELS[cl.createdFrom] ?? cl.createdFrom}
                        </span>
                      </Td>
                      <Td>
                        <span className="text-xs text-txt-tertiary">{fmtDate(cl.createdAt)}</span>
                      </Td>
                      <Td noLink onClick={e => e.stopPropagation()}>
                        <div className="flex gap-1">
                          {cl.approvalStatus === "PENDING_REVIEW" && (
                            <>
                              <button
                                title="Phê duyệt"
                                onClick={() => handleApprove(cl)}
                                className="p-1 text-green-600 hover:bg-green-50 rounded"
                              >
                                <IconCheckmark1 size={14} />
                              </button>
                              <button
                                title="Từ chối"
                                onClick={() => setRejectTarget(cl)}
                                className="p-1 text-red-500 hover:bg-red-50 rounded"
                              >
                                <IconCrossLargeX size={14} />
                              </button>
                            </>
                          )}
                          {cl.status !== "ARCHIVED" && cl.status !== "DELETED" && (
                            <button
                              title="Lưu trữ"
                              onClick={() => handleArchive(cl)}
                              className="p-1 text-txt-tertiary hover:bg-bg-alt rounded text-xs"
                            >
                              ↓
                            </button>
                          )}
                          <button
                            title="Xóa"
                            onClick={() => handleDelete(cl)}
                            className="p-1 text-red-400 hover:bg-red-50 rounded text-xs"
                          >
                            ✕
                          </button>
                        </div>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
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
            />
          </div>
        )}
      </div>

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
                <strong>Sau khi tạo:</strong> Kiểm tra nội dung và bấm <strong>"Phê duyệt"</strong> để checklist có hiệu lực (trạng thái: Đang áp dụng).
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
    </div>
  );
}
