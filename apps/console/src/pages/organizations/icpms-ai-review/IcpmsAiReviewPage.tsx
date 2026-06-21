// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import {
  Badge,
  Button,
  Card,
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
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { fetchQuery, graphql, useMutation, useRelayEnvironment } from "react-relay";
import { usePageTitle } from "@probo/hooks";
import { useOrganizationId } from "#/hooks/useOrganizationId";
import { parseResponsibleUnit } from "./vatmResponsibilityMatrix";

// ─── GraphQL ─────────────────────────────────────────────────────────────────

const listJobsQuery = graphql`
  query IcpmsAiReviewPageJobsQuery($organizationId: ID!) {
    icpmsAiReviewJobs(organizationId: $organizationId) {
      edges {
        node {
          id
          jobCode
          reviewScope
          status
          progressPercent
          totalRequirements
          processedRequirements
          totalSuggestions
          totalAccepted
          totalRejected
          aiProvider
          errorMessage
          warningMessage
          createdAt
          finishedAt
          document {
            id
            code
            title
          }
          documentVersion {
            id
            versionCode
          }
        }
      }
    }
  }
`;

const listSuggestionsQuery = graphql`
  query IcpmsAiReviewPageSuggestionsQuery($jobId: ID!) {
    icpmsAiReviewSuggestions(jobId: $jobId) {
      edges {
        node {
          id
          aiReviewJobId
          status
          aiConfidence
          suggestedImplementationMethod
          suggestedResponsibleUnit
          suggestedResponsibleRole
          suggestedEvidence
          suggestedCurrentStatus
          suggestedActionPlan
          suggestedChecklistQuestion
          suggestedRiskIfNotComplied
          suggestedRequirementType
          suggestedApplicabilityStatus
          suggestedPriority
          suggestedComplianceDomain
          acceptedAt
          rejectedAt
          rejectionReason
          requirement {
            id
            requirementCode
            title
            description
            requirementType
            reviewStatus
            applicabilityStatus
            priority
          }
        }
      }
    }
  }
`;

const listDocsQuery = graphql`
  query IcpmsAiReviewPageDocsQuery($organizationId: ID!) {
    organization: node(id: $organizationId) {
      ... on Organization {
        icpmsDocuments(first: 100) {
          edges {
            node {
              id
              code
              title
              versions(first: 20) {
                edges {
                  node {
                    id
                    versionCode
                    versionName
                    isCurrent
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

const createJobMutation = graphql`
  mutation IcpmsAiReviewPageCreateJobMutation($input: CreateIcpmsAiReviewJobInput!) {
    createIcpmsAiReviewJob(input: $input) {
      job {
        id
        jobCode
        status
        aiProvider
        aiModel
      }
    }
  }
`;

const aiConfigQuery = graphql`
  query IcpmsAiReviewPageAiConfigQuery($organizationId: ID!, $provider: IcpmsAiProvider!) {
    icpmsAiConfig(organizationId: $organizationId, provider: $provider) {
      provider
      apiKeyMasked
      defaultModel
      isEnabled
      isKeyConfigured
    }
  }
`;

const upsertAiConfigMutation = graphql`
  mutation IcpmsAiReviewPageUpsertAiConfigMutation($input: UpsertIcpmsAiConfigInput!) {
    upsertIcpmsAiConfig(input: $input) {
      config {
        provider
        apiKeyMasked
        defaultModel
        isEnabled
        isKeyConfigured
      }
    }
  }
`;

const acceptSuggestionMutation = graphql`
  mutation IcpmsAiReviewPageAcceptSuggestionMutation($input: AcceptIcpmsAiReviewSuggestionInput!) {
    acceptIcpmsAiReviewSuggestion(input: $input) {
      suggestion {
        id
        status
        acceptedAt
      }
    }
  }
`;

const rejectSuggestionMutation = graphql`
  mutation IcpmsAiReviewPageRejectSuggestionMutation($input: RejectIcpmsAiReviewSuggestionInput!) {
    rejectIcpmsAiReviewSuggestion(input: $input) {
      suggestion {
        id
        status
        rejectedAt
        rejectionReason
      }
    }
  }
`;

// ─── Types ────────────────────────────────────────────────────────────────────

type AiJob = {
  id: string;
  jobCode: string;
  reviewScope: string;
  status: string;
  progressPercent: number;
  totalRequirements: number;
  processedRequirements: number;
  totalSuggestions: number;
  totalAccepted: number;
  totalRejected: number;
  aiProvider: string;
  errorMessage?: string | null;
  warningMessage?: string | null;
  createdAt: string;
  finishedAt?: string | null;
  document: { id: string; code: string; title: string };
  documentVersion: { id: string; versionCode: string };
};

type AiSuggestion = {
  id: string;
  aiReviewJobId: string;
  status: string;
  aiConfidence: number;
  suggestedImplementationMethod?: string | null;
  suggestedResponsibleUnit?: string | null;
  suggestedResponsibleRole?: string | null;
  suggestedEvidence?: string | null;
  suggestedCurrentStatus?: string | null;
  suggestedActionPlan?: string | null;
  suggestedChecklistQuestion?: string | null;
  suggestedRiskIfNotComplied?: string | null;
  suggestedRequirementType?: string | null;
  suggestedApplicabilityStatus?: string | null;
  suggestedPriority?: string | null;
  suggestedComplianceDomain?: string | null;
  acceptedAt?: string | null;
  rejectedAt?: string | null;
  rejectionReason?: string | null;
  requirement: {
    id: string;
    requirementCode: string;
    title: string;
    description?: string | null;
    requirementType: string;
    reviewStatus: string;
    applicabilityStatus: string;
    priority: string;
  };
  // local editable overrides (not persisted yet, just UI state)
  _editCurrentStatus?: string;
  _editActionPlan?: string;
};

type DocOpt = { id: string; code: string; title: string };
type VersionOpt = { id: string; versionCode: string; versionName: string; isCurrent: boolean };

// ─── Helpers ──────────────────────────────────────────────────────────────────

const JOB_STATUS_COLORS: Record<string, "success" | "warning" | "danger" | "neutral" | "info"> = {
  COMPLETED: "success",
  RUNNING: "warning",
  QUEUED: "info",
  FAILED: "danger",
  CANCELLED: "neutral",
  PARTIAL: "warning",
};

const JOB_STATUS_LABELS: Record<string, string> = {
  COMPLETED: "Hoàn thành",
  RUNNING: "Đang chạy",
  QUEUED: "Chờ chạy",
  FAILED: "Lỗi",
  CANCELLED: "Đã huỷ",
  PARTIAL: "Một phần",
};

const SUG_STATUS_COLORS: Record<string, "success" | "warning" | "danger" | "neutral"> = {
  ACCEPTED: "success",
  REJECTED: "danger",
  NEEDS_HUMAN_REVIEW: "warning",
  AI_SUGGESTED: "neutral",
  EDITED: "info" as "neutral",
};

const SUG_STATUS_LABELS: Record<string, string> = {
  ACCEPTED: "Đã duyệt",
  REJECTED: "Từ chối",
  NEEDS_HUMAN_REVIEW: "Chờ duyệt",
  AI_SUGGESTED: "AI gợi ý",
  EDITED: "Đã sửa",
};

const SCOPE_LABELS: Record<string, string> = {
  ALL: "Tất cả yêu cầu",
  NEEDS_REVIEW: "Chỉ cần rà soát",
  SELECTED: "Đã chọn",
};

const confidenceColor = (c: number) => {
  if (c >= 0.8) return "text-green-600";
  if (c >= 0.6) return "text-yellow-600";
  return "text-txt-tertiary";
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
  suggestion,
  onConfirm,
  onCancel,
}: {
  suggestion: AiSuggestion;
  onConfirm: (reason: string) => void;
  onCancel: () => void;
}) {
  const [reason, setReason] = useState("");
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-level-1 rounded-2xl shadow-lg p-6 w-full max-w-md mx-4">
        <h3 className="font-semibold text-txt-primary mb-1">Từ chối gợi ý</h3>
        <p className="text-sm text-txt-tertiary mb-4">
          <span className="font-mono">{suggestion.requirement.requirementCode}</span> — {suggestion.requirement.title}
        </p>
        <label className="block text-sm text-txt-secondary mb-1">Lý do từ chối (tuỳ chọn)</label>
        <textarea
          className="w-full border border-border-low rounded-lg p-3 text-sm text-txt-primary bg-level-1 focus:outline-none resize-none"
          rows={3}
          placeholder="Nhập lý do từ chối..."
          value={reason}
          onChange={e => setReason(e.target.value)}
        />
        <div className="flex gap-2 mt-4 justify-end">
          <Button variant="secondary" onClick={onCancel}>Huỷ</Button>
          <Button variant="danger" onClick={() => onConfirm(reason)}>Xác nhận từ chối</Button>
        </div>
      </div>
    </div>
  );
}

// ─── Inline Edit Form (rendered as an expanded table row) ────────────────────

function InlineEditForm({
  suggestion,
  onSave,
  onCancel,
}: {
  suggestion: AiSuggestion;
  onSave: (id: string, currentStatus: string, actionPlan: string, responsibleUnit: string, implMethod: string) => void;
  onCancel: () => void;
}) {
  const [currentStatus, setCurrentStatus] = useState(
    suggestion._editCurrentStatus ?? suggestion.suggestedCurrentStatus ?? ""
  );
  const [actionPlan, setActionPlan] = useState(
    suggestion._editActionPlan ?? suggestion.suggestedActionPlan ??
    "Rà soát quy trình hiện hành, xác định khoảng thiếu hụt, cập nhật tài liệu và lưu hồ sơ chứng minh."
  );
  const [responsibleUnit, setResponsibleUnit] = useState(suggestion.suggestedResponsibleUnit ?? "");
  const [implMethod, setImplMethod] = useState(
    suggestion.suggestedImplementationMethod ??
    "Rà soát quy định, quy trình hiện hành; đối chiếu với yêu cầu nguồn; cập nhật, ban hành hoặc bổ sung hồ sơ nếu còn thiếu."
  );
  const [showAssignment, setShowAssignment] = useState(false);

  const { leadUnit, coordinationUnits } = parseResponsibleUnit(suggestion.suggestedResponsibleUnit);

  const field = (label: string, children: React.ReactNode) => (
    <div>
      <label className="block text-[11px] text-txt-tertiary font-medium mb-1">{label}</label>
      {children}
    </div>
  );

  const inputCls = "w-full border border-border-low rounded-lg px-3 py-2 text-xs text-txt-primary bg-level-1 focus:outline-none focus:ring-1 focus:ring-blue-400";
  const readonlyCls = "w-full border border-border-low rounded-lg px-3 py-2 text-xs text-txt-secondary bg-bg-alt";

  return (
    <div className="rounded-xl border border-blue-200 bg-white shadow-sm">
      {/* Header strip */}
      <div className="flex items-center justify-between px-4 py-2 bg-blue-50 rounded-t-xl border-b border-blue-200">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-blue-700">Chỉnh sửa</span>
          <span className="font-mono text-[11px] text-blue-500">{suggestion.requirement.requirementCode}</span>
        </div>
        <button onClick={onCancel} className="text-txt-tertiary hover:text-txt-primary p-1 rounded hover:bg-blue-100">
          <IconCrossLargeX size={14} />
        </button>
      </div>

      <div className="p-4 space-y-3">
        {/* Yêu cầu – readonly */}
        {field("Yêu cầu",
          <div className={readonlyCls}>{suggestion.requirement.title}</div>
        )}

        {/* Nguồn + Bằng chứng (readonly) */}
        <div className="grid grid-cols-2 gap-3">
          {field("Nguồn",
            <div className={readonlyCls}>
              {suggestion.requirement.description
                ? `${suggestion.requirement.requirementCode} — ${suggestion.requirement.description.slice(0, 120)}`
                : suggestion.requirement.requirementCode}
            </div>
          )}
          {field("Bằng chứng yêu cầu",
            <div className={`${readonlyCls} line-clamp-2`} title={suggestion.suggestedEvidence ?? undefined}>
              {suggestion.suggestedEvidence ?? "Biên bản kiểm tra; hồ sơ đào tạo; tài liệu quy trình nội bộ."}
            </div>
          )}
        </div>

        {/* Phương pháp */}
        {field("Phương pháp thực hiện yêu cầu",
          <textarea
            className={`${inputCls} resize-none`}
            rows={2}
            value={implMethod}
            onChange={e => setImplMethod(e.target.value)}
            placeholder="Mô tả phương pháp thực hiện..."
          />
        )}

        {/* Trách nhiệm – editable với AI context */}
        <div>
          <label className="block text-[11px] text-txt-tertiary font-medium mb-1">Trách nhiệm thực hiện</label>
          <textarea
            className={`${inputCls} resize-none`}
            rows={2}
            value={responsibleUnit}
            onChange={e => setResponsibleUnit(e.target.value)}
            placeholder="Chủ trì: Ban Không lưu&#10;Phối hợp: Trung tâm Quản lý luồng không lưu; Ban An toàn - Chất lượng"
          />
          {/* AI suggestion breakdown */}
          {suggestion.suggestedResponsibleUnit && (
            <div className="mt-1.5 rounded-lg bg-blue-50 border border-blue-100 px-3 py-2 text-[11px]">
              <span className="text-blue-500 font-medium">AI gợi ý · </span>
              <span className="text-txt-secondary font-medium">Chủ trì:</span>{" "}
              <span className="text-txt-primary">{leadUnit}</span>
              {coordinationUnits.length > 0 && (
                <>
                  {" "}·{" "}
                  <span className="text-txt-secondary font-medium">Phối hợp:</span>{" "}
                  <span className="text-txt-tertiary">{coordinationUnits.join("; ")}</span>
                </>
              )}
            </div>
          )}
        </div>

        {/* Thực trạng + Kế hoạch */}
        <div className="grid grid-cols-2 gap-3">
          {field("Thực trạng hiện tại",
            <textarea
              className={`${inputCls} resize-none`}
              rows={3}
              value={currentStatus}
              onChange={e => setCurrentStatus(e.target.value)}
              placeholder="Điền thực trạng hiện tại..."
            />
          )}
          {field("Kế hoạch thực hiện / khắc phục",
            <textarea
              className={`${inputCls} resize-none`}
              rows={3}
              value={actionPlan}
              onChange={e => setActionPlan(e.target.value)}
            />
          )}
        </div>

        {/* Assignment suggestion section (collapsible) */}
        <div className="border border-border-low rounded-lg overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-3 py-2 bg-subtle text-left"
            onClick={() => setShowAssignment(v => !v)}
          >
            <span className="text-[11px] font-medium text-txt-secondary">Đề xuất giao việc (AI)</span>
            <span className="text-[10px] text-txt-tertiary">{showAssignment ? "▲ Đóng" : "▼ Xem"}</span>
          </button>
          {showAssignment && (
            <div className="p-3 space-y-2 text-[11px]">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-txt-tertiary font-medium mb-0.5">Đơn vị chủ trì</p>
                  <p className="text-txt-primary">{leadUnit}</p>
                </div>
                <div>
                  <p className="text-txt-tertiary font-medium mb-0.5">Đơn vị phối hợp</p>
                  <p className="text-txt-primary">{coordinationUnits.length > 0 ? coordinationUnits.join("; ") : "—"}</p>
                </div>
              </div>
              <div>
                <p className="text-txt-tertiary font-medium mb-0.5">Tiêu đề việc đề xuất</p>
                <p className="text-txt-primary">
                  Rà soát và bổ sung hồ sơ: {suggestion.requirement.requirementCode} — {suggestion.requirement.title.slice(0, 80)}
                </p>
              </div>
              <div>
                <p className="text-txt-tertiary font-medium mb-0.5">Bằng chứng cần nộp</p>
                <p className="text-txt-primary">
                  {suggestion.suggestedEvidence ?? "Biên bản kiểm tra; hồ sơ quy trình nội bộ."}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-txt-tertiary font-medium mb-0.5">Hạn đề xuất</p>
                  <p className="text-txt-primary">30 ngày kể từ ngày duyệt</p>
                </div>
                <div>
                  <p className="text-txt-tertiary font-medium mb-0.5">Ưu tiên</p>
                  <p className="text-txt-primary">{suggestion.suggestedPriority ?? "MEDIUM"}</p>
                </div>
              </div>
              <div className="pt-1 flex gap-2">
                <span className="text-txt-tertiary italic">
                  Module Giao việc sẽ được triển khai ở Phase 12. Thông tin này sẽ dùng để tạo giao việc tự động khi module sẵn sàng.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 justify-end pt-1">
          <Button variant="secondary" onClick={onCancel}>Huỷ</Button>
          <Button onClick={() => onSave(suggestion.id, currentStatus, actionPlan, responsibleUnit, implMethod)}>
            Lưu thay đổi
          </Button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export function IcpmsAiReviewPage() {
  usePageTitle("Rà soát AI");
  const organizationId = useOrganizationId();
  const environment = useRelayEnvironment();
  const { toast } = useToast();

  // Job list state
  const [jobs, setJobs] = useState<AiJob[]>([]);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [loadingJobs, setLoadingJobs] = useState(false);

  // Suggestion state
  const [suggestions, setSuggestions] = useState<AiSuggestion[]>([]);
  const [loadingSugs, setLoadingSugs] = useState(false);
  const [rejectingId, setRejectingId] = useState<AiSuggestion | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form state
  const [docs, setDocs] = useState<DocOpt[]>([]);
  const [allDocVersions, setAllDocVersions] = useState<Record<string, VersionOpt[]>>({});
  const [selectedDocId, setSelectedDocId] = useState("");
  const [selectedVersionId, setSelectedVersionId] = useState("");
  const [reviewScope, setReviewScope] = useState("ALL");
  const [aiProvider, setAiProvider] = useState("RULE_BASED");
  const [aiModel, setAiModel] = useState("gemini-2.5-flash");
  const [isCreating, setIsCreating] = useState(false);
  const [docsLoaded, setDocsLoaded] = useState(false);

  // Settings state (API key)
  const [showSettings, setShowSettings] = useState(false);
  const [geminiKeyInput, setGeminiKeyInput] = useState("");
  const [geminiKeyMasked, setGeminiKeyMasked] = useState<string | null>(null);
  const [geminiKeyConfigured, setGeminiKeyConfigured] = useState(false);
  const [savingSettings, setSavingSettings] = useState(false);

  const pollingRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [commitCreate] = useMutation(createJobMutation);
  const [commitAccept] = useMutation(acceptSuggestionMutation);
  const [commitReject] = useMutation(rejectSuggestionMutation);
  const [commitUpsertConfig] = useMutation(upsertAiConfigMutation);

  // Load jobs
  const loadJobs = useCallback(() => {
    setLoadingJobs(true);
    (fetchQuery(environment, listJobsQuery, { organizationId }, { networkCacheConfig: { force: true } }) as any)
      .toPromise()
      .then((data: any) => {
        const edges = data?.icpmsAiReviewJobs?.edges ?? [];
        setJobs(edges.map((e: any) => e.node));
      })
      .catch(() => {
        toast({ title: "Không thể tải danh sách job", description: "", variant: "error" });
      })
      .finally(() => setLoadingJobs(false));
  }, [environment, organizationId, toast]);

  // Load documents for the form
  const loadDocs = useCallback(() => {
    (fetchQuery(environment, listDocsQuery, { organizationId }, { networkCacheConfig: { force: true } }) as any)
      .toPromise()
      .then((data: any) => {
        const edges = (data?.organization as any)?.icpmsDocuments?.edges ?? [];
        const docList: DocOpt[] = edges.map((e: any) => ({
          id: e.node.id,
          code: e.node.code,
          title: e.node.title,
        }));
        const versionMap: Record<string, VersionOpt[]> = {};
        for (const e of edges) {
          versionMap[e.node.id] = e.node.versions?.edges?.map((ve: any) => ve.node) ?? [];
        }
        setDocs(docList);
        setAllDocVersions(versionMap);
        setDocsLoaded(true);

        if (docList.length > 0 && !selectedDocId) {
          const first = docList[0];
          setSelectedDocId(first.id);
          const versions = versionMap[first.id] ?? [];
          const current = versions.find(v => v.isCurrent) ?? versions[0];
          if (current) setSelectedVersionId(current.id);
        }
      })
      .catch(() => {});
  }, [environment, organizationId, selectedDocId]);

  // Load suggestions for selected job
  const loadSuggestions = useCallback((jobId: string) => {
    setLoadingSugs(true);
    (fetchQuery(environment, listSuggestionsQuery, { jobId }, { networkCacheConfig: { force: true } }) as any)
      .toPromise()
      .then((data: any) => {
        const edges = data?.icpmsAiReviewSuggestions?.edges ?? [];
        setSuggestions(edges.map((e: any) => e.node));
      })
      .catch(() => {})
      .finally(() => setLoadingSugs(false));
  }, [environment]);

  const loadGeminiConfig = useCallback(() => {
    (fetchQuery(environment, aiConfigQuery, { organizationId, provider: "GEMINI" }, { networkCacheConfig: { force: true } }) as any)
      .toPromise()
      .then((data: any) => {
        const cfg = data?.icpmsAiConfig;
        if (cfg) {
          setGeminiKeyMasked(cfg.apiKeyMasked ?? null);
          setGeminiKeyConfigured(cfg.isKeyConfigured ?? false);
          if (cfg.defaultModel) setAiModel(cfg.defaultModel);
        }
      })
      .catch(() => {});
  }, [environment, organizationId]);

  useEffect(() => {
    loadJobs();
    loadDocs();
    loadGeminiConfig();
  }, [loadJobs, loadDocs, loadGeminiConfig]);

  // Auto-poll for active jobs
  useEffect(() => {
    const hasActive = jobs.some(j => j.status === "RUNNING" || j.status === "QUEUED");
    if (hasActive) {
      pollingRef.current = setTimeout(() => {
        loadJobs();
        if (selectedJobId) loadSuggestions(selectedJobId);
      }, 3000);
    }
    return () => { if (pollingRef.current) clearTimeout(pollingRef.current); };
  }, [jobs, selectedJobId, loadJobs, loadSuggestions]);

  const handleDocChange = (docId: string) => {
    setSelectedDocId(docId);
    const versions = allDocVersions[docId] ?? [];
    const current = versions.find(v => v.isCurrent) ?? versions[0];
    setSelectedVersionId(current?.id ?? "");
  };

  const currentVersions = allDocVersions[selectedDocId] ?? [];

  const handleSaveGeminiKey = () => {
    if (!geminiKeyInput.trim() && !geminiKeyConfigured) return;
    setSavingSettings(true);
    const keyToSend = geminiKeyInput.trim() || null;
    commitUpsertConfig({
      variables: {
        input: {
          organizationId,
          provider: "GEMINI",
          apiKey: keyToSend,
          defaultModel: aiModel,
          isEnabled: true,
        },
      },
      onCompleted: (res: any) => {
        setSavingSettings(false);
        const cfg = (res as any).upsertIcpmsAiConfig?.config;
        if (cfg) {
          setGeminiKeyMasked(cfg.apiKeyMasked ?? null);
          setGeminiKeyConfigured(cfg.isKeyConfigured ?? false);
        }
        setGeminiKeyInput("");
        toast({ title: "Đã lưu cấu hình Gemini", description: "API key đã được lưu thành công.", variant: "success" });
        setShowSettings(false);
      },
      onError: (err: Error) => {
        setSavingSettings(false);
        toast({ title: "Không thể lưu cấu hình", description: err.message, variant: "error" });
      },
    });
  };

  const handleCreate = () => {
    if (!selectedDocId || !selectedVersionId) {
      toast({ title: "Vui lòng chọn tài liệu và phiên bản", description: "Chọn tài liệu và phiên bản trước khi chạy rà soát.", variant: "error" });
      return;
    }
    if (aiProvider === "GEMINI" && !geminiKeyConfigured) {
      toast({ title: "Chưa cấu hình API key Gemini", description: "Vui lòng nhập API key Gemini trong phần Cấu hình AI.", variant: "error" });
      setShowSettings(true);
      return;
    }
    setIsCreating(true);
    commitCreate({
      variables: {
        input: {
          organizationId,
          documentId: selectedDocId,
          documentVersionId: selectedVersionId,
          reviewScope: reviewScope as any,
          aiProvider: aiProvider as any,
          aiModel: aiProvider === "GEMINI" ? aiModel : undefined,
        },
      },
      onCompleted: (res: any) => {
        setIsCreating(false);
        const code = res.createIcpmsAiReviewJob?.job?.jobCode ?? "";
        toast({ title: `Đã tạo phiên rà soát ${code}`, description: "Job đang chạy, checklist draft sẽ xuất hiện sau vài giây.", variant: "success" });
        setTimeout(() => loadJobs(), 800);
      },
      onError: (err: Error) => {
        setIsCreating(false);
        toast({ title: "Không thể tạo job AI Review", description: err.message, variant: "error" });
      },
    });
  };

  const handleSelectJob = (job: AiJob) => {
    setSelectedJobId(job.id);
    setSuggestions([]);
    setEditingId(null);
    loadSuggestions(job.id);
  };

  const handleAccept = (sug: AiSuggestion) => {
    commitAccept({
      variables: { input: { id: sug.id } },
      onCompleted: () => {
        toast({
          title: "Đã duyệt và tạo checklist",
          description: `${sug.requirement.requirementCode} đã được phê duyệt. Checklist chính thức đã được tạo trong module Checklist (trạng thái: Chờ phê duyệt).`,
          variant: "success",
        });
        setSuggestions(prev => prev.map(s => s.id === sug.id ? { ...s, status: "ACCEPTED" } : s));
        if (selectedJobId) loadSuggestions(selectedJobId);
      },
      onError: (err: Error) => {
        toast({ title: "Không thể duyệt", description: err.message, variant: "error" });
      },
    });
  };

  const handleRejectConfirm = (sug: AiSuggestion, reason: string) => {
    setRejectingId(null);
    commitReject({
      variables: { input: { id: sug.id, rejectionReason: reason || null } },
      onCompleted: () => {
        toast({ title: "Đã từ chối", description: `${sug.requirement.requirementCode} đã bị từ chối.`, variant: "success" });
        setSuggestions(prev => prev.map(s => s.id === sug.id ? { ...s, status: "REJECTED" } : s));
        if (selectedJobId) loadSuggestions(selectedJobId);
      },
      onError: (err: Error) => {
        toast({ title: "Không thể từ chối", description: err.message, variant: "error" });
      },
    });
  };

  const handleSaveEdit = (
    id: string,
    currentStatus: string,
    actionPlan: string,
    responsibleUnit: string,
    implMethod: string,
  ) => {
    setSuggestions(prev => prev.map(s => s.id === id ? {
      ...s,
      _editCurrentStatus: currentStatus,
      _editActionPlan: actionPlan,
      suggestedResponsibleUnit: responsibleUnit || s.suggestedResponsibleUnit,
      suggestedImplementationMethod: implMethod || s.suggestedImplementationMethod,
    } : s));
    setEditingId(null);
    toast({ title: "Đã lưu thay đổi cục bộ", description: "Bấm Duyệt để xác nhận checklist item.", variant: "success" });
  };

  const selectedJob = jobs.find(j => j.id === selectedJobId);

  return (
    <div className="space-y-6">
      {/* Header */}
      <PageHeader
        title="Rà soát AI"
        description="Hệ thống AI phân tích tài liệu và sinh checklist draft. Người đánh giá điền Thực trạng, Kế hoạch rồi phê duyệt từng mục."
      />

      {/* Create form */}
      <Card padded>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-txt-primary">Chạy rà soát AI mới</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setShowSettings(s => !s)}
              className="text-xs text-txt-tertiary hover:text-txt-primary px-2 py-1 rounded border border-border-low hover:border-border-mid transition-colors"
            >
              ⚙ Cấu hình AI
            </button>
            <Button variant="secondary" icon={IconRotateCw} onClick={loadJobs} disabled={loadingJobs}>
              Làm mới
            </Button>
          </div>
        </div>

        {/* Settings panel */}
        {showSettings && (
          <div className="mb-4 p-4 bg-level-2 rounded-xl border border-border-low space-y-3">
            <h4 className="text-xs font-semibold text-txt-primary">Cấu hình Gemini API</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-txt-tertiary font-medium mb-1">
                  API Key Gemini
                  {geminiKeyConfigured && geminiKeyMasked && (
                    <span className="ml-2 text-green-600 font-mono">{geminiKeyMasked}</span>
                  )}
                </label>
                <input
                  type="password"
                  value={geminiKeyInput}
                  onChange={e => setGeminiKeyInput(e.target.value)}
                  placeholder={geminiKeyConfigured ? "Nhập key mới để thay thế..." : "AIzaSy..."}
                  className="w-full px-3 py-1.5 text-sm rounded-lg border border-border-low bg-level-1 focus:outline-none focus:border-blue-400"
                  autoComplete="off"
                />
                <p className="text-xs text-txt-tertiary mt-1">
                  Key không hiển thị lại sau khi lưu. Nếu để trống, key hiện tại sẽ được giữ nguyên.
                </p>
              </div>
              <div>
                <label className="block text-xs text-txt-tertiary font-medium mb-1">Model mặc định</label>
                <Select<string> value={aiModel} onValueChange={setAiModel}>
                  <Option value="gemini-2.5-flash">Gemini 2.5 Flash</Option>
                  <Option value="gemini-2.5-pro">Gemini 2.5 Pro</Option>
                </Select>
              </div>
            </div>
            <div className="flex gap-2 justify-end">
              <button onClick={() => setShowSettings(false)} className="text-xs text-txt-tertiary hover:text-txt-primary px-3 py-1.5">Đóng</button>
              <Button onClick={handleSaveGeminiKey} disabled={savingSettings}>
                {savingSettings ? "Đang lưu..." : "Lưu cấu hình"}
              </Button>
            </div>
          </div>
        )}

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4 text-xs text-amber-700">
          AI sinh <strong>checklist draft</strong> — người đánh giá phải điền Thực trạng và Kế hoạch, sau đó phê duyệt từng mục. Trách nhiệm thực hiện thuộc về các đơn vị của <strong>Tổng Công ty Quản lý bay Việt Nam (VATM)</strong>.
        </div>
        <div className="grid grid-cols-5 gap-3 items-end">
          <div>
            <label className="block text-xs text-txt-tertiary font-medium mb-1">Tài liệu</label>
            <Select<string>
              value={selectedDocId}
              onValueChange={handleDocChange}
              placeholder={docsLoaded && docs.length === 0 ? "Chưa có tài liệu" : "Chọn tài liệu..."}
              disabled={!docsLoaded || docs.length === 0}
            >
              {docs.map(d => (
                <Option key={d.id} value={d.id}>{d.code} — {d.title}</Option>
              ))}
            </Select>
          </div>
          <div>
            <label className="block text-xs text-txt-tertiary font-medium mb-1">Phiên bản</label>
            <Select<string>
              value={selectedVersionId}
              onValueChange={setSelectedVersionId}
              placeholder="Chọn phiên bản..."
              disabled={!selectedDocId || currentVersions.length === 0}
            >
              {currentVersions.map(v => (
                <Option key={v.id} value={v.id}>
                  {v.versionCode}{v.isCurrent ? " (Hiện hành)" : ""}
                </Option>
              ))}
            </Select>
          </div>
          <div>
            <label className="block text-xs text-txt-tertiary font-medium mb-1">Phạm vi rà soát</label>
            <Select<string> value={reviewScope} onValueChange={setReviewScope}>
              <Option value="ALL">Toàn bộ yêu cầu</Option>
              <Option value="NEEDS_REVIEW">Chỉ yêu cầu cần rà soát</Option>
            </Select>
          </div>
          <div>
            <label className="block text-xs text-txt-tertiary font-medium mb-1">Model AI</label>
            <Select<string> value={aiProvider} onValueChange={setAiProvider}>
              <Option value="RULE_BASED">Nội bộ (Rule-based)</Option>
              <Option value="GEMINI">
                Gemini {geminiKeyConfigured ? "✓" : "(chưa cấu hình)"}
              </Option>
            </Select>
          </div>
          <div>
            <Button
              icon={IconPlusLarge}
              onClick={handleCreate}
              disabled={isCreating || !selectedDocId || !selectedVersionId}
            >
              {isCreating ? "Đang tạo..." : "Chạy rà soát AI"}
            </Button>
          </div>
        </div>
      </Card>

      {/* Job list table */}
      <Card>
        <div className="p-4 border-b border-border-low flex items-center justify-between">
          <h3 className="text-sm font-semibold text-txt-primary">
            Danh sách phiên rà soát ({jobs.length})
          </h3>
          {loadingJobs && (
            <span className="text-xs text-txt-tertiary">Đang tải...</span>
          )}
        </div>

        {jobs.length === 0 && !loadingJobs
          ? (
            <div className="p-12 text-center">
              <p className="text-sm font-medium text-txt-secondary">Chưa có phiên rà soát AI nào</p>
              <p className="text-xs text-txt-tertiary mt-1">
                Chọn tài liệu, phiên bản và bấm "Chạy rà soát AI" để bắt đầu.
              </p>
            </div>
          )
          : (
            <Table>
              <Thead>
                <Tr>
                  <Th>Mã phiên</Th>
                  <Th>Tài liệu</Th>
                  <Th>Phiên bản</Th>
                  <Th>Phạm vi</Th>
                  <Th>Trạng thái</Th>
                  <Th>Yêu cầu</Th>
                  <Th>Gợi ý</Th>
                  <Th>Duyệt / Từ chối</Th>
                  <Th>Thời gian</Th>
                  <Th>Thao tác</Th>
                </Tr>
              </Thead>
              <Tbody>
                {jobs.map(job => (
                  <Tr
                    key={job.id}
                    className={`cursor-pointer hover:bg-bg-alt transition-colors ${selectedJobId === job.id ? "bg-blue-50" : ""}`}
                    onClick={() => handleSelectJob(job)}
                  >
                    <Td>
                      <span className="font-mono text-xs text-txt-secondary">{job.jobCode}</span>
                    </Td>
                    <Td>
                      <p className="text-xs font-medium text-txt-primary">{job.document.code}</p>
                      <p className="text-xs text-txt-tertiary truncate max-w-36">{job.document.title}</p>
                    </Td>
                    <Td>
                      <span className="text-xs text-txt-secondary">v{job.documentVersion.versionCode}</span>
                    </Td>
                    <Td>
                      <span className="text-xs text-txt-secondary">{SCOPE_LABELS[job.reviewScope] ?? job.reviewScope}</span>
                    </Td>
                    <Td>
                      <div className="space-y-1">
                        <Badge variant={JOB_STATUS_COLORS[job.status] ?? "neutral"}>
                          {JOB_STATUS_LABELS[job.status] ?? job.status}
                        </Badge>
                        {(job.status === "RUNNING" || job.status === "QUEUED") && (
                          <div className="w-24">
                            <div className="w-full bg-border-low rounded-full h-1">
                              <div
                                className="bg-blue-500 h-1 rounded-full"
                                style={{ width: `${job.progressPercent}%` }}
                              />
                            </div>
                            <span className="text-xs text-txt-tertiary">{job.progressPercent}%</span>
                          </div>
                        )}
                      </div>
                    </Td>
                    <Td>
                      <span className="text-xs text-txt-primary">{job.totalRequirements}</span>
                    </Td>
                    <Td>
                      <span className="text-xs text-txt-primary">{job.totalSuggestions}</span>
                    </Td>
                    <Td>
                      <span className="text-xs text-green-600">{job.totalAccepted} ✓</span>
                      {" / "}
                      <span className="text-xs text-red-500">{job.totalRejected} ✗</span>
                    </Td>
                    <Td>
                      <span className="text-xs text-txt-tertiary">{fmtDate(job.createdAt)}</span>
                    </Td>
                    <Td noLink>
                      <Button variant="secondary" onClick={() => handleSelectJob(job)}>
                        Xem gợi ý
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
      </Card>

      {/* Checklist Draft section */}
      {selectedJobId && (
        <div>
          <Card>
            {/* Section header */}
            <div className="p-4 border-b border-border-low flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-semibold text-txt-primary">Checklist draft</h3>
                  <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-0.5 rounded-full">
                    {suggestions.length} items
                  </span>
                </div>
                <p className="text-xs text-txt-tertiary">
                  Cột <strong>Thực trạng</strong> và <strong>Kế hoạch</strong> sẽ trống để người đánh giá điền sau.
                  Trách nhiệm thực hiện thuộc về các đơn vị VATM.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-txt-tertiary shrink-0">
                <span className="text-green-600 font-medium">{selectedJob?.totalAccepted ?? 0} đã duyệt</span>
                <span>·</span>
                <span className="text-red-500 font-medium">{selectedJob?.totalRejected ?? 0} từ chối</span>
              </div>
            </div>

            {loadingSugs && (
              <div className="p-8 text-center text-sm text-txt-tertiary">Đang tải checklist draft...</div>
            )}

            {!loadingSugs && suggestions.length === 0 && (
              <div className="p-10 text-center">
                <p className="text-sm text-txt-secondary">
                  {selectedJob?.status === "RUNNING" || selectedJob?.status === "QUEUED"
                    ? "Job đang chạy, checklist draft sẽ xuất hiện sau khi xử lý xong..."
                    : "Không có gợi ý nào trong phiên này"}
                </p>
              </div>
            )}

            {!loadingSugs && suggestions.length > 0 && (
              <div>
                <table className="w-full text-xs table-fixed">
                  <colgroup>
                    <col style={{ width: "2.5%" }} />   {/* STT */}
                    <col style={{ width: "21%" }} />    {/* Yêu cầu + Nguồn */}
                    <col style={{ width: "13%" }} />    {/* Phương pháp */}
                    <col style={{ width: "12%" }} />    {/* Trách nhiệm */}
                    <col style={{ width: "11%" }} />    {/* Bằng chứng */}
                    <col style={{ width: "9.5%" }} />   {/* Thực trạng */}
                    <col style={{ width: "9.5%" }} />   {/* Kế hoạch */}
                    <col style={{ width: "6%" }} />     {/* Confidence */}
                    <col style={{ width: "8%" }} />     {/* Trạng thái */}
                    <col style={{ width: "7.5%" }} />   {/* Thao tác */}
                  </colgroup>
                  <thead>
                    <tr className="border-b border-border-low bg-subtle">
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">STT</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Yêu cầu / Nguồn</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Phương pháp thực hiện</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Trách nhiệm thực hiện</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Bằng chứng</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Thực trạng</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Kế hoạch / Khắc phục</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Tin cậy</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Trạng thái</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {suggestions.map((sug, idx) => {
                      const currentStatusValue = sug._editCurrentStatus ?? sug.suggestedCurrentStatus ?? "";
                      const actionPlanValue = sug._editActionPlan ?? sug.suggestedActionPlan ?? "";
                      const isEditing = editingId === sug.id;

                      return (
                        <Fragment key={sug.id}>
                          {/* ── Data row ── */}
                          <tr className={`border-b border-border-low hover:bg-bg-alt transition-colors ${isEditing ? "bg-blue-50 border-blue-200" : ""}`}>
                            {/* STT */}
                            <td className="px-2 py-2 text-txt-tertiary align-top">{idx + 1}</td>

                            {/* Yêu cầu + Nguồn gộp */}
                            <td className="px-2 py-2 align-top">
                              <p className="font-mono text-txt-secondary mb-0.5 truncate" title={sug.requirement.requirementCode}>
                                {sug.requirement.requirementCode}
                              </p>
                              <p className="text-txt-primary line-clamp-3 leading-snug" title={sug.requirement.title}>
                                {sug.requirement.title}
                              </p>
                              {sug.requirement.description && (
                                <p className="text-txt-tertiary mt-1 line-clamp-1 italic" title={sug.requirement.description}>
                                  {sug.requirement.description}
                                </p>
                              )}
                            </td>

                            {/* Phương pháp */}
                            <td className="px-2 py-2 align-top">
                              <p className="text-txt-primary line-clamp-4" title={sug.suggestedImplementationMethod ?? undefined}>
                                {sug.suggestedImplementationMethod
                                  ?? "Rà soát quy định, quy trình hiện hành; đối chiếu với yêu cầu nguồn; cập nhật, ban hành hoặc bổ sung hồ sơ nếu còn thiếu."}
                              </p>
                            </td>

                            {/* Trách nhiệm */}
                            <td className="px-2 py-2 align-top">
                              {(() => {
                                const raw = sug.suggestedResponsibleUnit;
                                if (!raw) {
                                  return <span className="text-txt-tertiary text-[11px]">Cần rà soát thêm đơn vị phụ trách</span>;
                                }
                                const { leadUnit, coordinationUnits } = parseResponsibleUnit(raw);
                                return (
                                  <div>
                                    <p className="text-txt-primary font-medium line-clamp-2 leading-snug" title={leadUnit}>{leadUnit}</p>
                                    {coordinationUnits.length > 0 && (
                                      <p className="text-txt-tertiary mt-0.5 text-[10px] line-clamp-2" title={coordinationUnits.join("; ")}>
                                        Phối hợp: {coordinationUnits.join("; ")}
                                      </p>
                                    )}
                                  </div>
                                );
                              })()}
                            </td>

                            {/* Bằng chứng */}
                            <td className="px-2 py-2 align-top">
                              <p className="text-txt-primary line-clamp-3" title={sug.suggestedEvidence ?? undefined}>
                                {sug.suggestedEvidence
                                  ?? "Biên bản kiểm tra; hồ sơ đào tạo; tài liệu quy trình nội bộ."}
                              </p>
                            </td>

                            {/* Thực trạng */}
                            <td className="px-2 py-2 align-top">
                              {currentStatusValue
                                ? <p className="text-txt-primary line-clamp-3" title={currentStatusValue}>{currentStatusValue}</p>
                                : (
                                  <button
                                    onClick={() => setEditingId(sug.id)}
                                    className="flex items-center gap-1 text-txt-tertiary hover:text-blue-600"
                                    title="Bấm để điền thực trạng"
                                  >
                                    <span>✎</span>
                                    <span className="hover:underline">Chưa điền</span>
                                  </button>
                                )}
                            </td>

                            {/* Kế hoạch */}
                            <td className="px-2 py-2 align-top">
                              {actionPlanValue
                                ? <p className="text-txt-primary line-clamp-3" title={actionPlanValue}>{actionPlanValue}</p>
                                : (
                                  <p className="text-txt-secondary line-clamp-3" title={sug.suggestedActionPlan ?? undefined}>
                                    {sug.suggestedActionPlan
                                      ?? "Rà soát quy trình hiện hành, xác định khoảng thiếu hụt, cập nhật tài liệu và lưu hồ sơ chứng minh."}
                                  </p>
                                )}
                            </td>

                            {/* Confidence */}
                            <td className="px-2 py-2 align-top text-center">
                              <span className={`font-semibold ${confidenceColor(sug.aiConfidence)}`}>
                                {(sug.aiConfidence).toFixed(2)}
                              </span>
                            </td>

                            {/* Trạng thái */}
                            <td className="px-2 py-2 align-top">
                              <Badge variant={SUG_STATUS_COLORS[sug.status] ?? "neutral"}>
                                {SUG_STATUS_LABELS[sug.status] ?? sug.status}
                              </Badge>
                              {sug.status === "ACCEPTED" && sug.acceptedAt && (
                                <p className="text-txt-tertiary mt-1 text-[10px]">{fmtDate(sug.acceptedAt)}</p>
                              )}
                              {sug.status === "REJECTED" && sug.rejectedAt && (
                                <p className="text-txt-tertiary mt-1 text-[10px]">{fmtDate(sug.rejectedAt)}</p>
                              )}
                            </td>

                            {/* Thao tác */}
                            <td className="px-2 py-2 align-top">
                              <div className="flex flex-col gap-1">
                                <button
                                  onClick={() => setEditingId(isEditing ? null : sug.id)}
                                  className={`text-left text-xs font-medium hover:underline ${isEditing ? "text-txt-tertiary" : "text-blue-600 hover:text-blue-700"}`}
                                >
                                  {isEditing ? "Đóng" : "Sửa"}
                                </button>
                                {sug.status !== "ACCEPTED" && sug.status !== "REJECTED" && (
                                  <>
                                    <button
                                      onClick={() => handleAccept(sug)}
                                      className="text-left text-green-600 hover:text-green-700 text-xs font-medium hover:underline"
                                    >
                                      Duyệt
                                    </button>
                                    <button
                                      onClick={() => setRejectingId(sug)}
                                      className="text-left text-red-500 hover:text-red-600 text-xs font-medium hover:underline"
                                    >
                                      Từ chối
                                    </button>
                                  </>
                                )}
                              </div>
                            </td>
                          </tr>

                          {/* ── Inline edit row ── */}
                          {isEditing && (
                            <tr className="border-b-2 border-blue-300 bg-blue-50">
                              <td colSpan={10} className="px-4 py-4">
                                <InlineEditForm
                                  suggestion={sug}
                                  onSave={handleSaveEdit}
                                  onCancel={() => setEditingId(null)}
                                />
                              </td>
                            </tr>
                          )}
                        </Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
        </div>
      )}

      {/* Reject dialog */}
      {rejectingId && (
        <RejectDialog
          suggestion={rejectingId}
          onConfirm={reason => handleRejectConfirm(rejectingId, reason)}
          onCancel={() => setRejectingId(null)}
        />
      )}
    </div>
  );
}
