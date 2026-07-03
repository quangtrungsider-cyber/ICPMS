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
import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { fetchQuery, graphql, useMutation, useRelayEnvironment } from "react-relay";
import type { IcpmsAiReviewPageArticleWithDescendantsQuery as ArticleWithDescendantsQueryType } from "#/__generated__/core/IcpmsAiReviewPageArticleWithDescendantsQuery.graphql";
import { usePageTitle } from "@probo/hooks";
import { useOrganizationId } from "#/hooks/useOrganizationId";
import { parseResponsibleUnit, VATM_UNITS } from "./vatmResponsibilityMatrix";

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
            sourceSectionId
            sourceReference
          }
        }
      }
    }
  }
`;

const articleWithDescendantsQuery = graphql`
  query IcpmsAiReviewPageArticleWithDescendantsQuery($sectionId: ID!) {
    articleSectionWithDescendants(sectionId: $sectionId) {
      article {
        id
        sectionType
        sectionNumber
        fullHeading
        contentText
        depthLevel
        sortOrder
      }
      sections {
        id
        parentId
        sectionType
        sectionNumber
        fullHeading
        contentText
        depthLevel
        sortOrder
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

const cancelJobMutation = graphql`
  mutation IcpmsAiReviewPageCancelJobMutation($input: CancelIcpmsAiReviewJobInput!) {
    cancelIcpmsAiReviewJob(input: $input) {
      job {
        id
        status
        finishedAt
      }
    }
  }
`;

const deleteJobMutation = graphql`
  mutation IcpmsAiReviewPageDeleteJobMutation($input: DeleteIcpmsAiReviewJobInput!) {
    deleteIcpmsAiReviewJob(input: $input) {
      id
    }
  }
`;

const deleteSuggestionMutation = graphql`
  mutation IcpmsAiReviewPageDeleteSuggestionMutation($id: ID!) {
    deleteIcpmsAiReviewSuggestion(id: $id)
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
    sourceSectionId?: string | null;
    sourceReference?: string | null;
  };
  // local editable overrides (not persisted yet, just UI state)
  _editCurrentStatus?: string;
  _editActionPlan?: string;
};

type ArticleSection = {
  id: string;
  parentId?: string | null;
  sectionType: string;
  sectionNumber?: string | null;
  fullHeading: string;
  contentText?: string | null;
  depthLevel: number;
  sortOrder: number;
};

type ArticlePanel = {
  reference: string;
  article: ArticleSection | null;
  sections: ArticleSection[];
  loading: boolean;
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

// Parse "Điểm b, Khoản 2, Điều 4" → [điều, khoản, điểm] for document-order sort
function parseSectionOrder(ref: string | null | undefined): [number, number, number] {
  if (!ref) return [9999, 0, 0];
  const dieuMatch = ref.match(/Điều\s+(\d+)/i);
  const khoanMatch = ref.match(/Khoản\s+(\d+)/i);
  const diemMatch = ref.match(/Điểm\s+([a-z])/i);
  return [
    dieuMatch ? parseInt(dieuMatch[1]) : 9999,
    khoanMatch ? parseInt(khoanMatch[1]) : 0,
    diemMatch ? diemMatch[1].toLowerCase().charCodeAt(0) - 96 : 0,
  ];
}

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

  // Article panel state
  const [articlePanel, setArticlePanel] = useState<ArticlePanel | null>(null);

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

  // Filter + search + pagination state for jobs list
  const [jobSearch, setJobSearch] = useState("");
  const [jobFilterStatus, setJobFilterStatus] = useState("ALL");
  const [jobPage, setJobPage] = useState(1);
  const JOB_PAGE_SIZE = 15;

  // Filter + sort state for checklist draft table
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [filterUnit, setFilterUnit] = useState("ALL");
  const [filterSource, setFilterSource] = useState("ALL");
  const [filterConfidence, setFilterConfidence] = useState("ALL");
  const [sortOrder, setSortOrder] = useState<"DOC_ORDER" | "DEFAULT" | "CONF_DESC" | "CONF_ASC">("DOC_ORDER");

  // Settings state (API key)
  const [geminiKeyConfigured, setGeminiKeyConfigured] = useState(false);

  const pollingRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [commitCreate] = useMutation(createJobMutation);
  const [commitAccept] = useMutation(acceptSuggestionMutation);
  const [commitReject] = useMutation(rejectSuggestionMutation);
  const [commitCancel] = useMutation(cancelJobMutation);
  const [commitDelete] = useMutation(deleteJobMutation);
  const [commitDeleteSuggestion] = useMutation(deleteSuggestionMutation);
  const [cancellingId, setCancellingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

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

  const openArticlePanel = useCallback((sug: AiSuggestion) => {
    const ref = sug.requirement.sourceReference ?? sug.requirement.requirementCode;
    const sectionId = sug.requirement.sourceSectionId;
    if (!sectionId) {
      setArticlePanel({ reference: ref, article: null, sections: [], loading: false });
      return;
    }
    setArticlePanel({ reference: ref, article: null, sections: [], loading: true });
    (fetchQuery(environment, articleWithDescendantsQuery, { sectionId }, { networkCacheConfig: { force: true } }) as any)
      .toPromise()
      .then((data: any) => {
        const payload = data?.articleSectionWithDescendants;
        setArticlePanel(prev => prev ? {
          ...prev,
          article: (payload?.article as ArticleSection | null) ?? null,
          sections: (payload?.sections as ArticleSection[]) ?? [],
          loading: false,
        } : null);
      })
      .catch(() => {
        setArticlePanel(prev => prev ? { ...prev, loading: false } : null);
      });
  }, [environment]);

  const loadGeminiConfig = useCallback(() => {
    (fetchQuery(environment, aiConfigQuery, { organizationId, provider: "GEMINI" }, { networkCacheConfig: { force: true } }) as any)
      .toPromise()
      .then((data: any) => {
        const cfg = data?.icpmsAiConfig;
        if (cfg) {
          setGeminiKeyConfigured(cfg.isKeyConfigured ?? false);
          if (cfg.defaultModel === "RULE_BASED") {
            setAiProvider("RULE_BASED");
          } else if (cfg.defaultModel) {
            setAiProvider("GEMINI");
            setAiModel(cfg.defaultModel);
          }
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


  const handleCreate = () => {
    if (!selectedDocId || !selectedVersionId) {
      toast({ title: "Vui lòng chọn tài liệu và phiên bản", description: "Chọn tài liệu và phiên bản trước khi chạy rà soát.", variant: "error" });
      return;
    }
    if (aiProvider === "GEMINI" && !geminiKeyConfigured) {
      toast({ title: "Chưa cấu hình API key Gemini", description: "Vui lòng cấu hình API key trong mục Cài đặt tổ chức.", variant: "error" });
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
    setSearchText("");
    setFilterStatus("ALL");
    setFilterUnit("ALL");
    setFilterSource("ALL");
    setFilterConfidence("ALL");
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

  const handleCancel = (job: AiJob) => {
    setCancellingId(job.id);
    commitCancel({
      variables: { input: { id: job.id } },
      onCompleted: () => {
        setCancellingId(null);
        toast({ title: "Đã dừng phiên rà soát", description: `${job.jobCode} đã bị huỷ.`, variant: "success" });
        loadJobs();
      },
      onError: (err: Error) => {
        setCancellingId(null);
        toast({ title: "Không thể dừng", description: err.message, variant: "error" });
      },
    });
  };

  const handleDelete = (job: AiJob) => {
    if (!window.confirm(`Xoá phiên rà soát "${job.jobCode}"? Hành động này không thể hoàn tác.`)) return;
    setDeletingId(job.id);
    commitDelete({
      variables: { input: { id: job.id } },
      onCompleted: () => {
        setDeletingId(null);
        toast({ title: "Đã xoá phiên rà soát", description: `${job.jobCode} đã được xoá.`, variant: "success" });
        if (selectedJobId === job.id) {
          setSelectedJobId(null);
          setSuggestions([]);
        }
        loadJobs();
      },
      onError: (err: Error) => {
        setDeletingId(null);
        toast({ title: "Không thể xoá", description: err.message, variant: "error" });
      },
    });
  };

  const handleDeleteSuggestion = (sug: AiSuggestion) => {
    if (!window.confirm(`Xóa gợi ý "${sug.requirement.requirementCode}"? Hành động này không thể hoàn tác.`)) return;
    commitDeleteSuggestion({
      variables: { id: sug.id },
      onCompleted: () => {
        toast({ title: "Đã xóa gợi ý", description: sug.requirement.requirementCode, variant: "success" });
        setSuggestions(prev => prev.filter(s => s.id !== sug.id));
      },
      onError: (err: Error) => {
        toast({ title: "Không thể xóa", description: err.message, variant: "error" });
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

  // Unique individual units present in suggestions (matched against known VATM units list)
  const KNOWN_UNITS = Object.values(VATM_UNITS);
  const unitOptions = useMemo(() => {
    const set = new Set<string>();
    for (const s of suggestions) {
      if (!s.suggestedResponsibleUnit) continue;
      const raw = s.suggestedResponsibleUnit;
      for (const unit of KNOWN_UNITS) {
        if (raw.includes(unit)) set.add(unit);
      }
    }
    return Array.from(set).sort();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [suggestions]);

  // Unique source references (Điều) for filter
  const sourceOptions = useMemo(() => {
    const set = new Set<string>();
    for (const s of suggestions) {
      if (s.requirement.sourceReference) {
        // Extract just the Điều part for grouping
        const m = s.requirement.sourceReference.match(/Điều\s+\d+/i);
        if (m) set.add(m[0]);
      }
    }
    return Array.from(set).sort((a, b) => {
      const na = parseInt(a.match(/\d+/)?.[0] ?? "0");
      const nb = parseInt(b.match(/\d+/)?.[0] ?? "0");
      return na - nb;
    });
  }, [suggestions]);

  // Filtered + sorted suggestions
  const filteredSuggestions = useMemo(() => {
    let result = [...suggestions];

    if (searchText.trim()) {
      const q = searchText.toLowerCase();
      result = result.filter(s =>
        s.requirement.title.toLowerCase().includes(q) ||
        s.requirement.requirementCode.toLowerCase().includes(q) ||
        (s.suggestedResponsibleUnit ?? "").toLowerCase().includes(q) ||
        (s.requirement.description ?? "").toLowerCase().includes(q)
      );
    }

    if (filterStatus !== "ALL") {
      result = result.filter(s => s.status === filterStatus);
    }

    if (filterUnit !== "ALL") {
      result = result.filter(s => (s.suggestedResponsibleUnit ?? "").includes(filterUnit));
    }

    if (filterSource !== "ALL") {
      result = result.filter(s => {
        const ref = s.requirement.sourceReference ?? "";
        const m = ref.match(/Điều\s+\d+/i);
        return m ? m[0] === filterSource : false;
      });
    }

    if (filterConfidence === "HIGH") result = result.filter(s => s.aiConfidence >= 0.8);
    else if (filterConfidence === "MEDIUM") result = result.filter(s => s.aiConfidence >= 0.6 && s.aiConfidence < 0.8);
    else if (filterConfidence === "LOW") result = result.filter(s => s.aiConfidence < 0.6);

    if (sortOrder === "DOC_ORDER") {
      result.sort((a, b) => {
        const [da, ka, pa] = parseSectionOrder(a.requirement.sourceReference);
        const [db, kb, pb] = parseSectionOrder(b.requirement.sourceReference);
        if (da !== db) return da - db;
        if (ka !== kb) return ka - kb;
        return pa - pb;
      });
    } else if (sortOrder === "CONF_DESC") {
      result.sort((a, b) => b.aiConfidence - a.aiConfidence);
    } else if (sortOrder === "CONF_ASC") {
      result.sort((a, b) => a.aiConfidence - b.aiConfidence);
    }

    return result;
  }, [suggestions, searchText, filterStatus, filterUnit, filterSource, filterConfidence, sortOrder]);

  // Filtered + paged jobs list
  const filteredJobs = useMemo(() => {
    let result = [...jobs];
    if (jobSearch.trim()) {
      const q = jobSearch.toLowerCase();
      result = result.filter(j =>
        j.jobCode.toLowerCase().includes(q) ||
        j.document.code.toLowerCase().includes(q) ||
        j.document.title.toLowerCase().includes(q)
      );
    }
    if (jobFilterStatus !== "ALL") {
      result = result.filter(j => j.status === jobFilterStatus);
    }
    return result;
  }, [jobs, jobSearch, jobFilterStatus]);

  const jobTotalPages = Math.max(1, Math.ceil(filteredJobs.length / JOB_PAGE_SIZE));
  const jobPageClamped = Math.min(jobPage, jobTotalPages);
  const pagedJobs = filteredJobs.slice((jobPageClamped - 1) * JOB_PAGE_SIZE, jobPageClamped * JOB_PAGE_SIZE);

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
            <Button variant="secondary" icon={IconRotateCw} onClick={loadJobs} disabled={loadingJobs}>
              Làm mới
            </Button>
          </div>
        </div>

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
        {/* Header */}
        <div className="p-4 border-b border-border-low flex items-center justify-between">
          <h3 className="text-sm font-semibold text-txt-primary">
            Danh sách phiên rà soát
            <span className="ml-2 text-xs font-normal text-txt-tertiary">
              {filteredJobs.length !== jobs.length
                ? `${filteredJobs.length} / ${jobs.length}`
                : jobs.length}
            </span>
          </h3>
          {loadingJobs && <span className="text-xs text-txt-tertiary">Đang tải...</span>}
        </div>

        {/* Search + filter bar */}
        {jobs.length > 0 && (
          <div className="px-4 py-2.5 border-b border-border-low bg-subtle flex flex-wrap items-center gap-2">
            <input
              type="text"
              value={jobSearch}
              onChange={e => { setJobSearch(e.target.value); setJobPage(1); }}
              placeholder="Tìm mã phiên, tài liệu..."
              className="text-xs border border-border-mid rounded-md px-3 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-primary w-56"
            />
            <select
              value={jobFilterStatus}
              onChange={e => { setJobFilterStatus(e.target.value); setJobPage(1); }}
              className="text-xs border border-border-mid rounded-md px-2 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="ALL">Tất cả trạng thái</option>
              <option value="QUEUED">Đang chờ</option>
              <option value="RUNNING">Đang chạy</option>
              <option value="COMPLETED">Hoàn thành</option>
              <option value="FAILED">Thất bại</option>
            </select>
            {(jobSearch || jobFilterStatus !== "ALL") && (
              <button
                onClick={() => { setJobSearch(""); setJobFilterStatus("ALL"); setJobPage(1); }}
                className="text-xs text-txt-tertiary hover:text-txt-primary hover:underline"
              >
                Xóa bộ lọc
              </button>
            )}
          </div>
        )}

        {jobs.length === 0 && !loadingJobs ? (
          <div className="p-12 text-center">
            <p className="text-sm font-medium text-txt-secondary">Chưa có phiên rà soát AI nào</p>
            <p className="text-xs text-txt-tertiary mt-1">
              Chọn tài liệu, phiên bản và bấm "Chạy rà soát AI" để bắt đầu.
            </p>
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="p-10 text-center text-sm text-txt-secondary">
            Không có kết quả phù hợp.
          </div>
        ) : (
          <>
            <Table>
              <Thead>
                <Tr>
                  <Th>STT</Th>
                  <Th>Mã phiên</Th>
                  <Th>Tài liệu</Th>
                  <Th>Phiên bản</Th>
                  <Th>Phạm vi</Th>
                  <Th>Trạng thái</Th>
                  <Th>Yêu cầu</Th>
                  <Th>Gợi ý</Th>
                  <Th>Thao tác</Th>
                  <Th>Thời gian</Th>
                  <Th>Thao tác</Th>
                </Tr>
              </Thead>
              <Tbody>
                {pagedJobs.map((job, idx) => (
                  <Tr
                    key={job.id}
                    className={`cursor-pointer hover:bg-bg-alt transition-colors ${selectedJobId === job.id ? "bg-blue-50" : ""}`}
                    onClick={() => handleSelectJob(job)}
                  >
                    <Td>
                      <span className="text-xs text-txt-tertiary tabular-nums">
                        {(jobPageClamped - 1) * JOB_PAGE_SIZE + idx + 1}
                      </span>
                    </Td>
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
                        {job.errorMessage && (
                          <div
                            className="max-w-[220px] rounded border border-red-200 bg-red-50 px-2 py-1 cursor-help"
                            title={job.errorMessage}
                          >
                            <span className="text-[10px] font-semibold text-red-600">⚠ Lỗi: </span>
                            <span className="text-[10px] text-red-700 line-clamp-2">{job.errorMessage}</span>
                          </div>
                        )}
                        {!job.errorMessage && job.warningMessage && (
                          <div
                            className="max-w-[220px] rounded border border-amber-200 bg-amber-50 px-2 py-1 cursor-help"
                            title={job.warningMessage}
                          >
                            <span className="text-[10px] font-semibold text-amber-600">⚠ Cảnh báo: </span>
                            <span className="text-[10px] text-amber-700 line-clamp-2">{job.warningMessage}</span>
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
                      <div className="flex flex-col gap-1">
                        {(job.status === "RUNNING" || job.status === "QUEUED") && (
                          <Button
                            variant="danger"
                            onClick={e => { e.stopPropagation(); handleCancel(job); }}
                            disabled={cancellingId === job.id}
                          >
                            {cancellingId === job.id ? "Đang dừng..." : "Dừng"}
                          </Button>
                        )}
                        <Button
                          variant="danger"
                          onClick={e => { e.stopPropagation(); handleDelete(job); }}
                          disabled={deletingId === job.id}
                        >
                          {deletingId === job.id ? "Đang xoá..." : "Xoá"}
                        </Button>
                      </div>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>

            {/* Pagination */}
            {jobTotalPages > 1 && (
              <div className="flex items-center justify-between px-4 py-3 border-t border-border-low">
                <span className="text-xs text-txt-tertiary">
                  Trang {jobPageClamped} / {jobTotalPages} · {filteredJobs.length} kết quả
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setJobPage(1)}
                    disabled={jobPageClamped === 1}
                    className="px-2 py-1 text-xs rounded border border-border-mid disabled:opacity-40 hover:bg-bg-alt"
                  >
                    «
                  </button>
                  <button
                    onClick={() => setJobPage(p => Math.max(1, p - 1))}
                    disabled={jobPageClamped === 1}
                    className="px-2.5 py-1 text-xs rounded border border-border-mid disabled:opacity-40 hover:bg-bg-alt"
                  >
                    ‹
                  </button>
                  {Array.from({ length: jobTotalPages }, (_, i) => i + 1)
                    .filter(p => Math.abs(p - jobPageClamped) <= 2)
                    .map(p => (
                      <button
                        key={p}
                        onClick={() => setJobPage(p)}
                        className={`px-2.5 py-1 text-xs rounded border ${
                          p === jobPageClamped
                            ? "border-primary bg-primary text-white"
                            : "border-border-mid hover:bg-bg-alt"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  <button
                    onClick={() => setJobPage(p => Math.min(jobTotalPages, p + 1))}
                    disabled={jobPageClamped === jobTotalPages}
                    className="px-2.5 py-1 text-xs rounded border border-border-mid disabled:opacity-40 hover:bg-bg-alt"
                  >
                    ›
                  </button>
                  <button
                    onClick={() => setJobPage(jobTotalPages)}
                    disabled={jobPageClamped === jobTotalPages}
                    className="px-2 py-1 text-xs rounded border border-border-mid disabled:opacity-40 hover:bg-bg-alt"
                  >
                    »
                  </button>
                </div>
              </div>
            )}
          </>
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
                    {filteredSuggestions.length !== suggestions.length
                      ? `${filteredSuggestions.length} / ${suggestions.length} items`
                      : `${suggestions.length} items`}
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
                {/* ── Filter bar ── */}
                <div className="px-3 py-2.5 border-b border-border-low bg-subtle flex flex-wrap items-center gap-2">
                  {/* Search */}
                  <input
                    type="text"
                    placeholder="Tìm yêu cầu, đơn vị thực hiện..."
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    className="flex-1 min-w-48 border border-border-low rounded-lg px-3 py-1.5 text-xs text-txt-primary bg-level-1 focus:outline-none focus:ring-1 focus:ring-blue-400 placeholder:text-txt-tertiary"
                  />

                  {/* Status filter */}
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="text-[11px] text-txt-tertiary font-medium">Trạng thái:</span>
                    <select
                      value={filterStatus}
                      onChange={e => setFilterStatus(e.target.value)}
                      className="border border-border-low rounded-lg px-2 py-1.5 text-xs text-txt-primary bg-level-1 focus:outline-none"
                    >
                      <option value="ALL">Tất cả</option>
                      <option value="AI_SUGGESTED">AI gợi ý</option>
                      <option value="NEEDS_HUMAN_REVIEW">Chờ duyệt</option>
                      <option value="ACCEPTED">Đã duyệt</option>
                      <option value="REJECTED">Từ chối</option>
                    </select>
                  </div>

                  {/* Unit filter */}
                  {unitOptions.length > 0 && (
                    <div className="flex items-center gap-1 shrink-0">
                      <span className="text-[11px] text-txt-tertiary font-medium">Đơn vị:</span>
                      <select
                        value={filterUnit}
                        onChange={e => setFilterUnit(e.target.value)}
                        className="border border-border-low rounded-lg px-2 py-1.5 text-xs text-txt-primary bg-level-1 focus:outline-none max-w-44"
                      >
                        <option value="ALL">Tất cả</option>
                        {unitOptions.map(u => <option key={u} value={u}>{u}</option>)}
                      </select>
                    </div>
                  )}

                  {/* Source (Điều) filter */}
                  {sourceOptions.length > 0 && (
                    <div className="flex items-center gap-1 shrink-0">
                      <span className="text-[11px] text-txt-tertiary font-medium">Nguồn:</span>
                      <select
                        value={filterSource}
                        onChange={e => setFilterSource(e.target.value)}
                        className="border border-border-low rounded-lg px-2 py-1.5 text-xs text-txt-primary bg-level-1 focus:outline-none"
                      >
                        <option value="ALL">Tất cả Điều</option>
                        {sourceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  )}

                  {/* Confidence filter */}
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="text-[11px] text-txt-tertiary font-medium">Tin cậy:</span>
                    <select
                      value={filterConfidence}
                      onChange={e => setFilterConfidence(e.target.value)}
                      className="border border-border-low rounded-lg px-2 py-1.5 text-xs text-txt-primary bg-level-1 focus:outline-none"
                    >
                      <option value="ALL">Tất cả</option>
                      <option value="HIGH">Cao (≥0.8)</option>
                      <option value="MEDIUM">TB (0.6–0.8)</option>
                      <option value="LOW">Thấp (&lt;0.6)</option>
                    </select>
                  </div>

                  {/* Sort */}
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="text-[11px] text-txt-tertiary font-medium">Sắp xếp:</span>
                    <select
                      value={sortOrder}
                      onChange={e => setSortOrder(e.target.value as typeof sortOrder)}
                      className="border border-border-low rounded-lg px-2 py-1.5 text-xs text-txt-primary bg-level-1 focus:outline-none"
                    >
                      <option value="DOC_ORDER">Thứ tự văn bản</option>
                      <option value="DEFAULT">Mặc định</option>
                      <option value="CONF_DESC">Tin cậy cao → thấp</option>
                      <option value="CONF_ASC">Tin cậy thấp → cao</option>
                    </select>
                  </div>

                  {/* Clear filters */}
                  {(searchText || filterStatus !== "ALL" || filterUnit !== "ALL" || filterSource !== "ALL" || filterConfidence !== "ALL") && (
                    <button
                      onClick={() => { setSearchText(""); setFilterStatus("ALL"); setFilterUnit("ALL"); setFilterSource("ALL"); setFilterConfidence("ALL"); }}
                      className="text-[11px] text-blue-600 hover:underline shrink-0 whitespace-nowrap"
                    >
                      ✕ Xóa bộ lọc
                    </button>
                  )}
                </div>

                {/* Empty after filter */}
                {filteredSuggestions.length === 0 && (
                  <div className="p-8 text-center text-sm text-txt-secondary">
                    Không có kết quả phù hợp. <button onClick={() => { setSearchText(""); setFilterStatus("ALL"); setFilterUnit("ALL"); setFilterSource("ALL"); setFilterConfidence("ALL"); }} className="text-blue-600 hover:underline">Xóa bộ lọc</button>
                  </div>
                )}

                <table className="w-full text-xs table-fixed">
                  <colgroup>
                    <col style={{ width: "2.5%" }} />   {/* STT */}
                    <col style={{ width: "15%" }} />    {/* Yêu cầu */}
                    <col style={{ width: "6.5%" }} />   {/* Nguồn */}
                    <col style={{ width: "11%" }} />    {/* Phương pháp */}
                    <col style={{ width: "9%" }} />     {/* Chủ trì */}
                    <col style={{ width: "9%" }} />     {/* Phối hợp */}
                    <col style={{ width: "9%" }} />     {/* Bằng chứng */}
                    <col style={{ width: "8%" }} />     {/* Thực trạng */}
                    <col style={{ width: "8%" }} />     {/* Kế hoạch */}
                    <col style={{ width: "5%" }} />     {/* Confidence */}
                    <col style={{ width: "8%" }} />     {/* Trạng thái */}
                    <col style={{ width: "9%" }} />     {/* Thao tác */}
                  </colgroup>
                  <thead>
                    <tr className="border-b border-border-low bg-subtle">
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">STT</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Yêu cầu</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Nguồn</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Phương pháp thực hiện</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Chủ trì</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Phối hợp</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Bằng chứng</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Thực trạng</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Kế hoạch / Khắc phục</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Tin cậy</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Trạng thái</th>
                      <th className="text-left px-2 py-2 text-txt-tertiary font-medium">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSuggestions.map((sug, idx) => {
                      const currentStatusValue = sug._editCurrentStatus ?? sug.suggestedCurrentStatus ?? "";
                      const actionPlanValue = sug._editActionPlan ?? sug.suggestedActionPlan ?? "";
                      const isEditing = editingId === sug.id;

                      return (
                        <Fragment key={sug.id}>
                          {/* ── Data row ── */}
                          <tr className={`border-b border-border-low hover:bg-bg-alt transition-colors ${isEditing ? "bg-blue-50 border-blue-200" : ""}`}>
                            {/* STT */}
                            <td className="px-2 py-2 text-txt-tertiary align-top">{idx + 1}</td>

                            {/* Yêu cầu */}
                            <td className="px-2 py-2 align-top">
                              <p className="font-mono text-txt-secondary mb-0.5 truncate" title={sug.requirement.requirementCode}>
                                {sug.requirement.requirementCode}
                              </p>
                              <p className="text-txt-primary line-clamp-3 leading-snug" title={sug.requirement.title}>
                                {sug.requirement.title}
                              </p>
                            </td>

                            {/* Nguồn */}
                            <td className="px-2 py-2 align-top">
                              {sug.requirement.sourceReference ? (
                                <button
                                  onClick={() => openArticlePanel(sug)}
                                  className="text-left group"
                                  title="Bấm để xem toàn bộ điều khoản"
                                >
                                  <span className="inline-block bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-medium px-1.5 py-0.5 rounded leading-tight group-hover:bg-blue-100 group-hover:border-blue-300 transition-colors">
                                    {sug.requirement.sourceReference}
                                  </span>
                                </button>
                              ) : (
                                <span className="text-txt-tertiary text-[10px]">—</span>
                              )}
                            </td>

                            {/* Phương pháp */}
                            <td className="px-2 py-2 align-top">
                              <p className="text-txt-primary line-clamp-4" title={sug.suggestedImplementationMethod ?? undefined}>
                                {sug.suggestedImplementationMethod
                                  ?? "Rà soát quy định, quy trình hiện hành; đối chiếu với yêu cầu nguồn; cập nhật, ban hành hoặc bổ sung hồ sơ nếu còn thiếu."}
                              </p>
                            </td>

                            {/* Chủ trì */}
                            {(() => {
                              const { leadUnit, coordinationUnits } = parseResponsibleUnit(sug.suggestedResponsibleUnit);
                              return (
                                <>
                                  <td className="px-2 py-2 align-top">
                                    <p className="text-txt-primary font-medium line-clamp-3 leading-snug text-[11px]" title={leadUnit}>
                                      {leadUnit}
                                    </p>
                                  </td>
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
                                </>
                              );
                            })()}

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
                                  <button
                                    onClick={() => handleAccept(sug)}
                                    className="text-left text-green-600 hover:text-green-700 text-xs font-medium hover:underline"
                                  >
                                    Duyệt
                                  </button>
                                )}
                                <button
                                  onClick={() => handleDeleteSuggestion(sug)}
                                  className="text-left text-red-500 hover:text-red-600 text-xs font-medium hover:underline"
                                >
                                  Xóa
                                </button>
                              </div>
                            </td>
                          </tr>

                          {/* ── Inline edit row ── */}
                          {isEditing && (
                            <tr className="border-b-2 border-blue-300 bg-blue-50">
                              <td colSpan={12} className="px-4 py-4">
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

      {/* Article panel — slide-over from right */}
      {articlePanel && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/30" onClick={() => setArticlePanel(null)} />
          <div className="relative w-full max-w-xl bg-level-1 shadow-2xl flex flex-col h-full overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-border-low bg-subtle shrink-0">
              <div>
                <p className="text-[11px] text-txt-tertiary font-medium mb-0.5">Điều khoản nguồn</p>
                <h3 className="text-sm font-semibold text-blue-700">{articlePanel.reference}</h3>
              </div>
              <button
                onClick={() => setArticlePanel(null)}
                className="text-txt-tertiary hover:text-txt-primary p-1.5 rounded-lg hover:bg-bg-alt"
              >
                <IconCrossLargeX size={16} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {articlePanel.loading && (
                <p className="text-sm text-txt-tertiary text-center mt-8">Đang tải nội dung điều khoản...</p>
              )}

              {!articlePanel.loading && !articlePanel.article && (
                <p className="text-sm text-txt-secondary text-center mt-8">Không tìm thấy nội dung điều khoản này.</p>
              )}

              {!articlePanel.loading && articlePanel.article && (
                <div>
                  {/* Article heading — Vietnamese legal doc style: centered, bold */}
                  <div className="text-center mb-5">
                    <h4 className="text-[15px] font-bold text-txt-primary leading-snug">
                      {articlePanel.article.fullHeading}
                    </h4>
                    {articlePanel.article.contentText && (
                      <p className="text-[13px] text-txt-primary mt-3 leading-relaxed text-left">
                        {articlePanel.article.contentText.replace(/\r?\n/g, " ").replace(/\s{2,}/g, " ").trim()}
                      </p>
                    )}
                  </div>

                  {/* Descendant sections */}
                  {articlePanel.sections.length === 0 && (
                    <p className="text-sm text-txt-tertiary italic text-center">Điều khoản này không có nội dung văn bản.</p>
                  )}
                  <div>
                    {articlePanel.sections.map(sec => {
                      const baseDepth = articlePanel.article?.depthLevel ?? 0;
                      const indent = Math.max(0, sec.depthLevel - baseDepth - 1);
                      const refLower = articlePanel.reference.toLowerCase();
                      const secNumLower = (sec.sectionNumber ?? "").toLowerCase();
                      const isHighlighted = secNumLower !== "" && refLower.includes(secNumLower);
                      // Normalize text: collapse embedded newlines/spaces from OCR so text flows naturally
                      const text = sec.contentText?.replace(/\r?\n/g, " ").replace(/\s{2,}/g, " ").trim();
                      return (
                        <div
                          key={sec.id}
                          className="border-b border-border-low last:border-0"
                          style={{
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            paddingRight: "0",
                            paddingLeft: `${indent * 24}px`,
                            borderLeft: isHighlighted ? "3px solid #3b82f6" : undefined,
                            background: isHighlighted ? "rgba(239,246,255,0.7)" : undefined,
                          }}
                        >
                          {text ? (
                            <p className={`text-[13px] leading-relaxed ${isHighlighted ? "text-txt-primary font-semibold" : "text-txt-primary"}`}>
                              {text}
                            </p>
                          ) : (
                            <p className={`text-[12px] font-semibold ${isHighlighted ? "text-blue-700" : "text-txt-secondary"}`}>
                              {sec.fullHeading}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
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
