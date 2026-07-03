// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { useTranslate } from "@probo/i18n";
import { Badge, Button, IconCrossLargeX, IconRotateCw } from "@probo/ui";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useMutation, useRelayEnvironment } from "react-relay";
import { fetchQuery, graphql } from "relay-runtime";
import { useToast } from "@probo/ui";
import { useOrganizationId } from "#/hooks/useOrganizationId";

// ---------------------------------------------------------------------------
// GraphQL
// ---------------------------------------------------------------------------

const JobDetailQueryNode = graphql`
  query IcpmsIngestionJobDetailPageJobsQuery($organizationId: ID!) {
    ingestionJobs(organizationId: $organizationId) {
      edges {
        node {
          id
          jobCode
          jobType
          extractionMode
          status
          progressPercent
          totalBlocks
          totalPages
          totalChars
          languageDetected
          errorMessage
          warningMessage
          aiModelUsed
          startedAt
          finishedAt
          createdAt
          document { id code title }
          documentVersion { id versionCode }
          documentFile { id originalFileName }
        }
      }
    }
  }
`;

const TextBlocksQueryNode = graphql`
  query IcpmsIngestionJobDetailPageTextBlocksQuery($jobId: ID!) {
    ingestionJobTextBlocks(jobId: $jobId) {
      totalCount
      edges {
        node {
          id
          blockIndex
          pageNumber
          blockType
          rawText
          normalizedText
          charCount
          wordCount
        }

      }
    }
  }
`;

const LatestParseJobQueryNode = graphql`
  query IcpmsIngestionJobDetailPageLatestParseJobQuery($ingestionJobId: ID!) {
    latestParseJobForIngestionJob(ingestionJobId: $ingestionJobId) {
      id
      status
      totalSections
      language
      errorMessage
    }
  }
`;

const LatestIcaoParseJobQueryNode = graphql`
  query IcpmsIngestionJobDetailPageLatestIcaoParseJobQuery($ingestionJobId: ID!) {
    latestIcaoParseJobForIngestionJob(ingestionJobId: $ingestionJobId) {
      id
      status
      totalSections
      language
      errorMessage
    }
  }
`;

const ParsedSectionsQueryNode = graphql`
  query IcpmsIngestionJobDetailPageParsedSectionsQuery($parseJobId: ID!) {
    parsedSectionsForJob(parseJobId: $parseJobId) {
      id
      parseJobId
      parentId
      sectionType
      sectionNumber
      title
      fullHeading
      contentText
      depthLevel
      sortOrder
      path
    }
  }
`;

const createVietnameseParseJobMutation = graphql`
  mutation IcpmsIngestionJobDetailPageCreateVietnameseParseJobMutation($input: CreateIcpmsDocumentParseJobInput!) {
    createAndRunVietnameseParseJob(input: $input) {
      parseJob {
        id
        status
        totalSections
        language
        errorMessage
      }
    }
  }
`;

const createIcaoParseJobMutation = graphql`
  mutation IcpmsIngestionJobDetailPageCreateIcaoParseJobMutation($input: CreateIcpmsDocumentParseJobInput!) {
    createAndRunIcaoParseJob(input: $input) {
      parseJob {
        id
        status
        totalSections
        language
        errorMessage
      }
    }
  }
`;

const retryIngestionJobMutation = graphql`
  mutation IcpmsIngestionJobDetailPageRetryMutation($input: CreateIcpmsIngestionJobInput!) {
    createIcpmsIngestionJob(input: $input) {
      job {
        id
        jobCode
        status
      }
    }
  }
`;

const generateDownloadUrlMutation = graphql`
  mutation IcpmsIngestionJobDetailPageGenerateDownloadUrlMutation($input: GenerateIcpmsDocumentFileDownloadUrlInput!) {
    generateIcpmsDocumentFileDownloadUrl(input: $input) {
      downloadUrl
    }
  }
`;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type JobStatus = "QUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED" | "PARTIAL";
type JobType = "TEXT_EXTRACTION" | "RE_EXTRACTION" | "VALIDATION_ONLY";

interface IngestionJob {
  id: string;
  jobCode: string;
  jobType: JobType;
  extractionMode: string;
  status: JobStatus;
  progressPercent: number;
  totalBlocks: number;
  totalPages: number;
  totalChars: number;
  languageDetected: string | null;
  errorMessage: string | null;
  warningMessage: string | null;
  aiModelUsed: string | null;
  startedAt: string | null;
  finishedAt: string | null;
  createdAt: string;
  document: { id: string; code: string; title: string };
  documentVersion: { id: string; versionCode: string };
  documentFile: { id: string; originalFileName: string };
}

interface TextBlock {
  id: string;
  blockIndex: number;
  pageNumber: number | null;
  blockType: string;
  rawText: string;
  normalizedText: string;
  charCount: number;
  wordCount: number;
  sectionHint: string | null;
}

interface ParsedSection {
  id: string;
  parentId: string | null;
  sectionType: string;
  sectionNumber: string | null;
  title: string;
  fullHeading: string;
  depthLevel: number;
  sortOrder: number;
  confidenceScore: number;
  contentText?: string | null;
  path?: string | null;
  warnings?: string | null;
}

interface SectionTreeNode extends ParsedSection {
  children: SectionTreeNode[];
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Gộp các dòng OCR trong cùng đoạn văn thành một dòng liên tục.
 * Dòng ngắn (tiêu đề, số hiệu, v.v.) và dòng kết thúc câu (.!?) giữ nguyên.
 */
function reflowOcrText(raw: string): string {
  const lines = raw.split("\n").map((l) => l.trim());
  const nonEmpty = lines.filter((l) => l.length > 4);
  if (nonEmpty.length === 0) return raw;

  // Dùng 75th percentile để ước tính độ rộng "đầy dòng"
  const sorted = [...nonEmpty].sort((a, b) => a.length - b.length);
  const p75 = sorted[Math.floor(sorted.length * 0.75)].length;
  const shortThresh = Math.max(25, Math.floor(p75 * 0.55));

  const out: string[] = [];
  let para: string[] = [];

  const flush = () => {
    if (para.length > 0) {
      out.push(para.join(" "));
      para = [];
    }
  };

  for (const line of lines) {
    if (!line) {
      flush();
      out.push("");
      continue;
    }
    para.push(line);
    // Kết thúc đoạn nếu: câu kết thúc (.!?) hoặc dòng ngắn (tiêu đề/nhãn)
    if (/[.!?]$/.test(line) || line.length <= shortThresh) {
      flush();
    }
  }
  flush();

  // Loại bỏ dòng trống liên tiếp
  return out
    .reduce<string[]>((acc, l) => {
      if (l === "" && acc.at(-1) === "") return acc;
      acc.push(l);
      return acc;
    }, [])
    .join("\n");
}

function formatDate(iso: string | null | undefined): string {
  if (!iso) return "-";
  const d = new Date(iso);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${day}-${month}-${year} ${hh}:${mm}`;
}

function formatNumber(n: number): string {
  return n.toLocaleString("vi-VN");
}

function statusVariant(status: JobStatus): "success" | "danger" | "warning" | "neutral" {
  switch (status) {
    case "COMPLETED": return "success";
    case "RUNNING":
    case "QUEUED": return "warning";
    case "FAILED":
    case "CANCELLED": return "danger";
    case "PARTIAL": return "warning";
    default: return "neutral";
  }
}

function statusLabel(status: JobStatus): string {
  switch (status) {
    case "COMPLETED": return "Hoàn thành";
    case "RUNNING": return "Đang chạy";
    case "QUEUED": return "Đang chờ";
    case "FAILED": return "Lỗi";
    case "CANCELLED": return "Đã hủy";
    case "PARTIAL": return "Một phần";
    default: return status;
  }
}

function langLabel(lang: string | null): string {
  if (!lang) return "-";
  if (lang === "vi") return "Tiếng Việt";
  if (lang === "en") return "English";
  return lang;
}

function aiModelLabel(model: string | null): string {
  if (model === null || model === undefined) return "—";
  if (model === "RULE_BASED") return "Nội bộ (Rule-based)";
  if (model === "gemini-2.5-flash") return "Gemini 2.5 Flash";
  if (model === "gemini-2.5-pro") return "Gemini 2.5 Pro";
  if (model === "gemini-2.0-flash") return "Gemini 2.0 Flash";
  return model;
}

const SECTION_TYPE_LABELS: Record<string, string> = {
  PART: "Part", CHAPTER: "Chương", SECTION: "Section", SUBSECTION: "Subsection",
  PARAGRAPH: "Paragraph", SUBPARAGRAPH: "Subparagraph", ARTICLE: "Điều",
  CLAUSE: "Khoản", POINT: "Điểm", APPENDIX: "Appendix", ATTACHMENT: "Attachment",
  TABLE: "Bảng", FIGURE: "Hình", NOTE: "Ghi chú", EXAMPLE: "Ví dụ",
  DEFINITION: "Định nghĩa", UNKNOWN: "Không xác định",
};

function buildSectionTree(sections: ParsedSection[]): SectionTreeNode[] {
  const nodeMap = new Map<string, SectionTreeNode>();
  const roots: SectionTreeNode[] = [];
  for (const s of sections) nodeMap.set(s.id, { ...s, children: [] });
  for (const s of sections) {
    const node = nodeMap.get(s.id)!;
    if (s.parentId && nodeMap.has(s.parentId)) {
      nodeMap.get(s.parentId)!.children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}

function mapJobNode(node: any): IngestionJob {
  return {
    id: node.id,
    jobCode: node.jobCode,
    jobType: node.jobType as JobType,
    extractionMode: node.extractionMode,
    status: node.status as JobStatus,
    progressPercent: node.progressPercent,
    totalBlocks: node.totalBlocks,
    totalPages: node.totalPages,
    totalChars: node.totalChars,
    languageDetected: node.languageDetected ?? null,
    errorMessage: node.errorMessage ?? null,
    warningMessage: node.warningMessage ?? null,
    aiModelUsed: node.aiModelUsed ?? null,
    startedAt: node.startedAt ?? null,
    finishedAt: node.finishedAt ?? null,
    createdAt: node.createdAt,
    document: { id: node.document.id, code: node.document.code, title: node.document.title },
    documentVersion: { id: node.documentVersion.id, versionCode: node.documentVersion.versionCode },
    documentFile: { id: node.documentFile.id, originalFileName: node.documentFile.originalFileName },
  };
}

// ---------------------------------------------------------------------------
// TextBlocksView — hiển thị text blocks với toggle raw OCR / văn bản đã làm sạch
// ---------------------------------------------------------------------------

function TextBlocksView({
  blocks,
  total,
  aiModelUsed,
}: {
  blocks: TextBlock[];
  total: number;
  aiModelUsed: string | null;
}) {
  const [showRaw, setShowRaw] = useState(false);
  const isAiCleaned = aiModelUsed && aiModelUsed !== "RULE_BASED";

  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-txt-secondary">
          Hiển thị <strong>{blocks.length}</strong>
          {total > blocks.length ? ` / ${total.toLocaleString("vi-VN")}` : ""} block
        </p>
        <div className="flex items-center gap-2">
          {isAiCleaned && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
              ✦ Làm sạch bởi {aiModelLabel(aiModelUsed)}
            </span>
          )}
          <div className="flex rounded-lg border border-border-mid overflow-hidden text-xs">
            <button
              className={`px-3 py-1.5 transition-colors ${!showRaw ? "bg-primary text-white font-medium" : "bg-white text-txt-secondary hover:bg-gray-50"}`}
              onClick={() => setShowRaw(false)}
            >
              Văn bản đã làm sạch
            </button>
            <button
              className={`px-3 py-1.5 border-l border-border-mid transition-colors ${showRaw ? "bg-primary text-white font-medium" : "bg-white text-txt-secondary hover:bg-gray-50"}`}
              onClick={() => setShowRaw(true)}
            >
              Văn bản gốc OCR
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-border-mid overflow-hidden">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-50">
            <tr className="border-b border-border-mid">
              <th className="py-2.5 px-4 text-left text-xs font-medium text-txt-secondary w-12">#</th>
              <th className="py-2.5 px-4 text-left text-xs font-medium text-txt-secondary w-16">Trang</th>
              <th className="py-2.5 px-4 text-left text-xs font-medium text-txt-secondary w-28">Loại</th>
              <th className="py-2.5 px-4 text-left text-xs font-medium text-txt-secondary">
                {showRaw ? "Văn bản gốc OCR" : "Văn bản đã làm sạch"}
              </th>
              <th className="py-2.5 px-4 text-right text-xs font-medium text-txt-secondary w-20">Ký tự</th>
            </tr>
          </thead>
          <tbody>
            {blocks.map((b) => (
              <tr key={b.id} className="border-b border-border-light last:border-0 hover:bg-gray-50">
                <td className="py-2.5 px-4 text-txt-secondary text-xs">{b.blockIndex + 1}</td>
                <td className="py-2.5 px-4 text-txt-secondary text-xs">{b.pageNumber ?? "—"}</td>
                <td className="py-2.5 px-4"><Badge variant="neutral">{b.blockType}</Badge></td>
                <td className="py-2.5 px-4 text-txt-primary text-xs leading-relaxed whitespace-pre-wrap">
                  {showRaw ? b.rawText : b.normalizedText}
                  {!showRaw && isAiCleaned && b.rawText !== b.normalizedText && (
                    <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded text-xs bg-purple-50 text-purple-600 font-normal">✦ đã sửa</span>
                  )}
                </td>
                <td className="py-2.5 px-4 text-txt-secondary text-xs text-right">{b.charCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function SectionTreeItem({
  node,
  depth = 0,
  onSelect,
  selectedId,
}: {
  node: SectionTreeNode;
  depth?: number;
  onSelect?: (n: SectionTreeNode) => void;
  selectedId?: string | null;
}) {
  const [expanded, setExpanded] = useState(depth < 2);
  const hasChildren = node.children.length > 0;
  const typeLabel = SECTION_TYPE_LABELS[node.sectionType] ?? node.sectionType;
  const isSelected = selectedId === node.id;
  const headingText = node.fullHeading || node.title;
  const contentPreview = node.contentText
    ? node.contentText.split("\n").slice(0, 2).join(" ").slice(0, 160)
    : "";

  return (
    <div className={depth > 0 ? "pl-4" : ""}>
      <div
        className={`flex items-start gap-1 py-1 px-1 rounded cursor-pointer transition-colors ${
          isSelected ? "bg-primary/10" : "hover:bg-gray-50"
        }`}
        onClick={() => {
          if (hasChildren) setExpanded((v) => !v);
          if (onSelect) onSelect(node);
        }}
      >
        {hasChildren ? (
          <span className="text-txt-secondary text-xs mt-0.5 w-3 shrink-0">{expanded ? "▾" : "▸"}</span>
        ) : (
          <span className="w-3 shrink-0" />
        )}
        <div className="min-w-0">
          <span className="text-xs text-primary font-medium mr-1">[{typeLabel}]</span>
          {node.sectionNumber && (
            <span className="text-xs font-mono text-txt-secondary mr-1">{node.sectionNumber}</span>
          )}
          <span className="text-xs text-txt-primary">{headingText}</span>
          {contentPreview && (
            <span className="text-xs text-txt-secondary ml-1 italic">
              {" "}{contentPreview}{node.contentText && node.contentText.length > 160 ? "…" : ""}
            </span>
          )}
          {node.warnings && (
            <span className="ml-1 text-amber-500 text-xs" title={node.warnings}>⚠</span>
          )}
        </div>
      </div>
      {expanded && hasChildren && (
        <div>
          {node.children.map((child) => (
            <SectionTreeItem key={child.id} node={child} depth={depth + 1} onSelect={onSelect} selectedId={selectedId} />
          ))}
        </div>
      )}
    </div>
  );
}

function SectionDetailPanel({ node, onClose }: { node: SectionTreeNode; onClose: () => void }) {
  const typeLabel = SECTION_TYPE_LABELS[node.sectionType] ?? node.sectionType;
  return (
    <div className="flex flex-col h-full border border-border-mid rounded-lg bg-gray-50 text-xs overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between px-3 py-2 border-b border-border-low bg-white shrink-0">
        <div>
          <span className="font-semibold text-txt-primary text-sm">
            [{typeLabel}]{node.sectionNumber ? ` ${node.sectionNumber}` : ""}
          </span>
          <div className="flex gap-3 mt-0.5 flex-wrap">
            {node.confidenceScore > 0 && (
              <span className="text-txt-tertiary">Confidence: {node.confidenceScore}%</span>
            )}
            <span className="text-txt-tertiary">Depth: {node.depthLevel}</span>
          </div>
        </div>
        <button className="text-txt-secondary hover:text-txt-primary p-0.5 rounded shrink-0" onClick={onClose}>
          <IconCrossLargeX size={14} />
        </button>
      </div>

      {/* Body — scrollable */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {node.path && (
          <p className="text-txt-tertiary italic text-[11px]" title={node.path}>{node.path}</p>
        )}
        {node.warnings && (
          <div className="bg-amber-50 border border-amber-200 rounded p-2 text-amber-700">
            <strong>Cảnh báo:</strong> {node.warnings}
          </div>
        )}
        <div>
          <p className="font-semibold text-txt-primary mb-1 text-[11px] uppercase tracking-wide">
            {node.fullHeading}
          </p>
          {node.contentText ? (
            <pre className="whitespace-pre-wrap font-sans text-txt-secondary leading-relaxed text-xs">
              {node.contentText}
            </pre>
          ) : (
            <p className="text-txt-tertiary italic text-xs">Không có nội dung văn bản.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function ParseJobSection({
  label,
  parseJob,
  loading,
  sectionsLoading,
  sectionTree,
  selectedNode,
  onSelectNode,
  onRun,
  isRunning,
  runLabel,
  rerunLabel,
  extraStats,
  notRunLabel,
}: {
  label: string;
  parseJob: any;
  loading: boolean;
  sectionsLoading: boolean;
  sectionTree: SectionTreeNode[];
  selectedNode: SectionTreeNode | null;
  onSelectNode: (n: SectionTreeNode) => void;
  onRun: () => void;
  isRunning: boolean;
  runLabel: string;
  rerunLabel: string;
  extraStats?: (pj: any) => string;
  notRunLabel?: string;
}) {
  const { __ } = useTranslate();
  const stats =
    parseJob == null
      ? ""
      : extraStats
        ? extraStats(parseJob)
        : `${parseJob.totalSections ?? 0} mục`;

  return (
    <div>
      <h4 className="text-xs font-semibold text-txt-secondary uppercase tracking-wide mb-3">{label}</h4>

      {loading ? (
        <p className="text-sm text-txt-secondary italic py-4">{__("Đang tải...")}</p>
      ) : parseJob == null ? (
        <div className="flex flex-col items-start gap-3 py-4">
          <p className="text-sm text-txt-secondary">
            {notRunLabel ?? __("Chưa chạy parser")}
          </p>
          <Button icon={IconRotateCw} onClick={onRun} disabled={isRunning}>
            {isRunning ? __("Đang phân tích...") : runLabel}
          </Button>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Badge
                variant={
                  parseJob.status === "COMPLETED" ? "success" : parseJob.status === "FAILED" ? "danger" : "warning"
                }
              >
                {parseJob.status}
              </Badge>
              {parseJob.status === "COMPLETED" && (
                <span className="text-xs text-txt-secondary">{stats}</span>
              )}
            </div>
            <button className="text-xs text-primary hover:underline" onClick={onRun} disabled={isRunning}>
              {isRunning ? __("Đang chạy...") : rerunLabel}
            </button>
          </div>

          {parseJob.status === "FAILED" && parseJob.errorMessage && (
            <div className="bg-red-50 border border-red-200 rounded p-3 text-xs text-red-700 mb-3">
              {parseJob.errorMessage}
            </div>
          )}

          {parseJob.status === "COMPLETED" && (
            <>
              {sectionsLoading ? (
                <p className="text-sm text-txt-secondary italic">{__("Đang tải cấu trúc...")}</p>
              ) : sectionTree.length === 0 ? (
                <p className="text-sm text-txt-secondary italic">{__("Không tìm thấy mục nào.")}</p>
              ) : (
                <div className="flex gap-3 items-start" style={{ minHeight: "400px" }}>
                  {/* Tree — 2/3 width when panel open, full width otherwise */}
                  <div
                    className="border border-border-light rounded overflow-hidden overflow-y-auto"
                    style={{ flex: selectedNode ? "0 0 66.666%" : "1 1 100%", maxHeight: "600px" }}
                  >
                    {sectionTree.map((node) => (
                      <SectionTreeItem
                        key={node.id}
                        node={node}
                        depth={0}
                        onSelect={onSelectNode}
                        selectedId={selectedNode?.id}
                      />
                    ))}
                  </div>

                  {/* Detail panel — 1/3 width, fixed height */}
                  {selectedNode && (
                    <div style={{ flex: "0 0 33.333%", height: "600px" }}>
                      <SectionDetailPanel node={selectedNode} onClose={() => onSelectNode(null as any)} />
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main page component
// ---------------------------------------------------------------------------

export function IcpmsIngestionJobDetailPage() {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const organizationId = useOrganizationId();
  const env = useRelayEnvironment();
  const { __ } = useTranslate();
  const { toast } = useToast();

  // --- Job data ---
  const [job, setJob] = useState<IngestionJob | null>(null);
  const [jobLoading, setJobLoading] = useState(true);

  const fetchJob = useCallback(() => {
    if (!jobId) return;
    (fetchQuery(env, JobDetailQueryNode as any, { organizationId }) as any)
      .toPromise()
      .then((data: any) => {
        const edges = data?.ingestionJobs?.edges ?? [];
        const found = edges.find((e: any) => e.node.id === jobId);
        setJob(found ? mapJobNode(found.node) : null);
      })
      .catch(() => {})
      .finally(() => setJobLoading(false));
  }, [env, organizationId, jobId]);

  useEffect(() => {
    fetchJob();
  }, [fetchJob]);

  // Auto-poll while job is RUNNING or QUEUED
  useEffect(() => {
    if (!job || (job.status !== "RUNNING" && job.status !== "QUEUED")) return;
    const timer = setInterval(fetchJob, 3000);
    return () => clearInterval(timer);
  }, [job?.status, fetchJob]);

  // --- Elapsed timer (ticks every second while job is RUNNING/QUEUED) ---
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  useEffect(() => {
    if (!job || (job.status !== "RUNNING" && job.status !== "QUEUED")) {
      setElapsedSeconds(0);
      return;
    }
    const start = job.startedAt ? new Date(job.startedAt).getTime() : Date.now();
    const tick = () => setElapsedSeconds(Math.floor((Date.now() - start) / 1000));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [job?.status, job?.startedAt]);

  // --- Tabs ---
  const [activeTab, setActiveTab] = useState<"overview" | "file" | "text" | "markdown" | "log" | "errors" | "structure">("overview");

  // --- File gốc tab ---
  const [fileBlobUrl, setFileBlobUrl] = useState<string | null>(null);   // for iframe (blob URL bypasses Content-Disposition: attachment)
  const [fileDownloadUrl, setFileDownloadUrl] = useState<string | null>(null); // presigned URL for direct download link
  const [fileUrlLoading, setFileUrlLoading] = useState(false);
  const [generateDownloadUrl] = useMutation(generateDownloadUrlMutation);
  const fileBlobUrlRef = useRef<string | null>(null); // for cleanup

  // Revoke blob URL and reset when job changes
  useEffect(() => {
    if (fileBlobUrlRef.current) {
      URL.revokeObjectURL(fileBlobUrlRef.current);
      fileBlobUrlRef.current = null;
    }
    setFileBlobUrl(null);
    setFileDownloadUrl(null);
  }, [job?.id]);

  useEffect(() => {
    if (activeTab !== "file" || !job?.documentFile?.id) return;
    if (fileBlobUrl || fileUrlLoading) return; // already loaded or loading
    setFileUrlLoading(true);
    generateDownloadUrl({
      variables: { input: { id: job.documentFile.id } },
      onCompleted: (data: any) => {
        const presignedUrl: string | null = data?.generateIcpmsDocumentFileDownloadUrl?.downloadUrl ?? null;
        if (!presignedUrl) { setFileUrlLoading(false); return; }
        setFileDownloadUrl(presignedUrl);
        // Fetch as blob to bypass Content-Disposition: attachment header so PDF renders inline
        fetch(presignedUrl)
          .then((r) => r.blob())
          .then((blob) => {
            const blobUrl = URL.createObjectURL(blob);
            fileBlobUrlRef.current = blobUrl;
            setFileBlobUrl(blobUrl);
            setFileUrlLoading(false);
          })
          .catch(() => {
            // Fallback: use presigned URL directly (may download instead of display)
            setFileBlobUrl(presignedUrl);
            setFileUrlLoading(false);
          });
      },
      onError: () => setFileUrlLoading(false),
    });
  }, [activeTab, job?.documentFile?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const lang = job?.languageDetected?.toLowerCase() ?? "";
  const isEnglish = lang.includes("english") || lang === "en" || lang.includes("icao");

  // --- Text blocks ---
  const [textBlocks, setTextBlocks] = useState<TextBlock[]>([]);
  const [textBlocksLoading, setTextBlocksLoading] = useState(false);
  const [textBlocksTotal, setTextBlocksTotal] = useState(0);
  const textBlocksLoadedForJob = useRef<string | null>(null);

  // --- Editable text for markdown tab ---
  const [editableText, setEditableText] = useState("");
  const [markdownFileName, setMarkdownFileName] = useState("ocr_result");

  useEffect(() => {
    if (!job || (activeTab !== "text" && activeTab !== "markdown") || job.status !== "COMPLETED") return;
    if (textBlocksLoadedForJob.current === job.id) return;
    setTextBlocksLoading(true);
    (fetchQuery(env, TextBlocksQueryNode as any, { jobId: job.id }) as any)
      .toPromise()
      .then((data: any) => {
        const edges = data?.ingestionJobTextBlocks?.edges ?? [];
        const blocks: TextBlock[] = edges.map((e: any) => e.node as TextBlock);
        setTextBlocks(blocks);
        setTextBlocksTotal(data?.ingestionJobTextBlocks?.totalCount ?? 0);
        textBlocksLoadedForJob.current = job.id;

        // Build editable text grouped by page
        // Dùng rawText (có xuống dòng gốc từ OCR), fallback normalizedText
        const pageMap = new Map<number, string[]>();
        const noPaged: string[] = [];
        const totalPagesFound = Math.max(0, ...blocks.map(b => b.pageNumber ?? 0));
        for (const b of blocks) {
          const raw = b.rawText || b.normalizedText || "";
          const normalized = raw.replace(/\r\n/g, "\n").replace(/\r/g, "\n").trimEnd();
          const text = reflowOcrText(normalized);
          if (!text) continue;
          if (b.pageNumber != null && b.pageNumber > 0) {
            if (!pageMap.has(b.pageNumber)) pageMap.set(b.pageNumber, []);
            pageMap.get(b.pageNumber)!.push(text);
          } else {
            noPaged.push(text);
          }
        }
        const parts: string[] = [];
        if (pageMap.size > 0) {
          const sortedPages = Array.from(pageMap.keys()).sort((a, b) => a - b);
          for (const pg of sortedPages) {
            parts.push(`--- Trang ${pg}/${totalPagesFound} ---`);
            // Mỗi block trên trang cách nhau bằng 1 dòng trống
            parts.push(pageMap.get(pg)!.join("\n\n"));
          }
        } else {
          parts.push(...noPaged);
        }
        // Các trang cách nhau bằng 2 dòng trống
        setEditableText(parts.join("\n\n"));
        setMarkdownFileName("ocr_result");
      })
      .catch(() => {})
      .finally(() => setTextBlocksLoading(false));
  }, [activeTab, job?.id, job?.status, env]);

  // --- Vietnamese parser ---
  const [viParseJob, setViParseJob] = useState<any>(null);
  const [viParseJobLoading, setViParseJobLoading] = useState(false);
  const [viSections, setViSections] = useState<ParsedSection[]>([]);
  const [viSectionsLoading, setViSectionsLoading] = useState(false);
  const [viSelectedNode, setViSelectedNode] = useState<SectionTreeNode | null>(null);
  const [commitRunViParser, isRunningViParser] = useMutation<any>(createVietnameseParseJobMutation);
  const [commitRetry, isRetrying] = useMutation<any>(retryIngestionJobMutation);

  // --- ICAO parser ---
  const [icaoParseJob, setIcaoParseJob] = useState<any>(null);
  const [icaoParseJobLoading, setIcaoParseJobLoading] = useState(false);
  const [icaoSections, setIcaoSections] = useState<ParsedSection[]>([]);
  const [icaoSectionsLoading, setIcaoSectionsLoading] = useState(false);
  const [icaoSelectedNode, setIcaoSelectedNode] = useState<SectionTreeNode | null>(null);
  const [commitRunIcaoParser, isRunningIcaoParser] = useMutation<any>(createIcaoParseJobMutation);

  const canRunViParser = job?.status === "COMPLETED" && !isEnglish;
  const canRunIcaoParser = job?.status === "COMPLETED" && isEnglish;

  const loadSections = useCallback(
    (parseJobId: string, setter: (s: ParsedSection[]) => void, setLoading: (v: boolean) => void) => {
      setLoading(true);
      (fetchQuery(env, ParsedSectionsQueryNode as any, { parseJobId }) as any)
        .toPromise()
        .then((sd: any) => setter(sd?.parsedSectionsForJob ?? []))
        .catch(() => {})
        .finally(() => setLoading(false));
    },
    [env],
  );

  const loadViParseJob = useCallback(() => {
    if (!job) return;
    setViParseJobLoading(true);
    (fetchQuery(env, LatestParseJobQueryNode as any, { ingestionJobId: job.id }) as any)
      .toPromise()
      .then((data: any) => {
        const pj = data?.latestParseJobForIngestionJob ?? null;
        setViParseJob(pj);
        if (pj?.status === "COMPLETED" && pj.id) {
          loadSections(pj.id, setViSections, setViSectionsLoading);
        }
      })
      .catch(() => {})
      .finally(() => setViParseJobLoading(false));
  }, [env, job?.id, loadSections]);

  const loadIcaoParseJob = useCallback(() => {
    if (!job) return;
    setIcaoParseJobLoading(true);
    (fetchQuery(env, LatestIcaoParseJobQueryNode as any, { ingestionJobId: job.id }) as any)
      .toPromise()
      .then((data: any) => {
        const pj = data?.latestIcaoParseJobForIngestionJob ?? null;
        setIcaoParseJob(pj);
        if (pj?.status === "COMPLETED" && pj.id) {
          loadSections(pj.id, setIcaoSections, setIcaoSectionsLoading);
        }
      })
      .catch(() => {})
      .finally(() => setIcaoParseJobLoading(false));
  }, [env, job?.id, loadSections]);

  useEffect(() => {
    if (activeTab === "structure") {
      if (canRunViParser) loadViParseJob();
      if (canRunIcaoParser) loadIcaoParseJob();
    }
  }, [activeTab, canRunViParser, canRunIcaoParser, loadViParseJob, loadIcaoParseJob]);

  const handleRunViParser = () => {
    if (!job) return;
    commitRunViParser({
      variables: { input: { ingestionJobId: job.id } },
      onCompleted: (res: any) => {
        const pj = res?.createAndRunVietnameseParseJob?.parseJob;
        if (pj) {
          setViParseJob(pj);
          toast({ title: __("Parser Việt Nam đã chạy xong"), description: `${pj.totalSections} mục`, variant: "success" });
          if (pj.status === "COMPLETED") loadSections(pj.id, setViSections, setViSectionsLoading);
        }
      },
      onError: (err: Error) => {
        toast({ title: __("Lỗi khi chạy parser Việt Nam"), description: err.message, variant: "error" });
      },
    });
  };

  const handleRunIcaoParser = () => {
    if (!job) return;
    commitRunIcaoParser({
      variables: { input: { ingestionJobId: job.id } },
      onCompleted: (res: any) => {
        const pj = res?.createAndRunIcaoParseJob?.parseJob;
        if (pj) {
          setIcaoParseJob(pj);
          toast({ title: __("ICAO parser đã chạy xong"), description: `${pj.totalSections} mục`, variant: "success" });
          if (pj.status === "COMPLETED") loadSections(pj.id, setIcaoSections, setIcaoSectionsLoading);
        }
      },
      onError: (err: Error) => {
        toast({ title: __("Lỗi khi chạy ICAO parser"), description: err.message, variant: "error" });
      },
    });
  };

  const viSectionTree = buildSectionTree(viSections) as SectionTreeNode[];
  const icaoSectionTree = buildSectionTree(icaoSections) as SectionTreeNode[];

  const onClose = () => navigate(`/organizations/${organizationId}/ingestion-jobs`);

  const handleRetry = () => {
    if (!job) return;
    commitRetry({
      variables: {
        input: {
          documentId: job.document.id,
          documentVersionId: job.documentVersion.id,
          documentFileId: job.documentFile.id,
          extractionMode: job.extractionMode,
          jobType: "RE_EXTRACTION",
        },
      },
      onCompleted: (_, errors) => {
        if (errors) {
          toast({ title: "Lỗi", description: errors[0]?.message ?? "Không thể chạy lại job", variant: "error" });
          return;
        }
        toast({ title: "Đã tạo job mới", description: "Job đang được xếp hàng chạy lại.", variant: "success" });
        fetchJob();
      },
      onError: (e) => {
        toast({ title: "Lỗi", description: e.message, variant: "error" });
      },
    });
  };

  // --- Render ---

  if (jobLoading) {
    return (
      <div className="flex items-center justify-center h-full text-txt-secondary text-sm">
        {__("Đang tải chi tiết job...")}
      </div>
    );
  }

  if (!job) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <p className="text-txt-secondary">{__("Không tìm thấy job này.")}</p>
        <Button onClick={onClose}>{__("Quay lại danh sách")}</Button>
      </div>
    );
  }

  const tabs = [
    { key: "overview", label: "Tổng quan" },
    { key: "file", label: "File gốc" },
    { key: "text", label: "Text trích xuất" },
    { key: "markdown", label: "Văn bản / OCR" },
    { key: "log", label: "Log" },
    { key: "errors", label: "Lỗi / Cảnh báo" },
    { key: "structure", label: "Cấu trúc văn bản" },
  ] as const;

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* ── Header ── */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border-mid shrink-0 bg-white">
        <div className="min-w-0">
          <h2 className="text-base font-semibold text-txt-primary truncate">
            {__("Chi tiết job bóc tách")}
          </h2>
          <p className="text-xs text-txt-secondary mt-0.5 truncate">
            <span className="font-mono">{job.jobCode}</span>
            <span className="mx-1">·</span>
            {job.document.code} — {job.document.title}
          </p>
        </div>
        <button
          className="ml-4 shrink-0 p-1.5 rounded text-txt-secondary hover:text-txt-primary hover:bg-gray-100 transition-colors"
          onClick={onClose}
          aria-label={__("Đóng")}
        >
          <IconCrossLargeX size={20} />
        </button>
      </div>

      {/* ── Status bar ── */}
      <div className="flex items-center gap-4 px-6 py-2.5 border-b border-border-mid bg-gray-50 shrink-0 flex-wrap">
        <Badge variant={statusVariant(job.status)}>{statusLabel(job.status)}</Badge>
        {(job.status === "RUNNING" || job.status === "QUEUED") && (
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 w-44">
              <div className="flex-1 bg-white rounded-full h-2 overflow-hidden border border-border-light">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${job.progressPercent}%`,
                    background: "linear-gradient(90deg, #2563eb, #60a5fa)",
                  }}
                />
              </div>
              <span className="text-xs font-semibold text-primary shrink-0 w-8">{job.progressPercent}%</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-txt-secondary">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-mono tabular-nums">
                {Math.floor(elapsedSeconds / 60) > 0
                  ? `${Math.floor(elapsedSeconds / 60)}p ${elapsedSeconds % 60}s`
                  : `${elapsedSeconds}s`}
              </span>
              <span className="text-txt-tertiary">đang xử lý...</span>
            </div>
          </div>
        )}
        {job.status === "COMPLETED" && (
          <>
            <span className="text-xs text-txt-secondary">{formatNumber(job.totalBlocks)} block</span>
            <span className="text-xs text-txt-secondary">{formatNumber(job.totalPages)} trang</span>
            <span className="text-xs text-txt-secondary">{formatNumber(job.totalChars)} ký tự</span>
            {job.languageDetected && (
              <span className="text-xs text-txt-secondary">{langLabel(job.languageDetected)}</span>
            )}
            {job.aiModelUsed && job.aiModelUsed !== "RULE_BASED" && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                ✦ {aiModelLabel(job.aiModelUsed)}
              </span>
            )}
          </>
        )}
        {job.status === "FAILED" && (
          <div className="ml-auto">
            <button
              className="text-xs font-medium text-white px-3 py-1.5 rounded-md flex items-center gap-1.5 disabled:opacity-60"
              style={{ background: "linear-gradient(135deg, #1a4fa0 0%, #2563eb 100%)" }}
              onClick={handleRetry}
              disabled={isRetrying}
            >
              <IconRotateCw size={12} />
              {isRetrying ? __("Đang tạo...") : __("Chạy lại")}
            </button>
          </div>
        )}
      </div>

      {/* ── Tabs ── */}
      <div className="flex border-b border-border-mid shrink-0 px-6 bg-white overflow-x-auto">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors whitespace-nowrap ${
              activeTab === key
                ? "border-primary text-primary"
                : "border-transparent text-txt-secondary hover:text-txt-primary"
            }`}
            onClick={() => setActiveTab(key)}
          >
            {__(label)}
          </button>
        ))}
      </div>

      {/* ── Tab content ── */}
      <div className="flex-1 overflow-y-auto p-6">

        {/* Overview */}
        {activeTab === "overview" && (
          <div className="max-w-2xl">
            <div className="rounded-xl border border-border-mid overflow-hidden">
              {[
                { label: "Mã job", value: <span className="font-mono text-sm">{job.jobCode}</span> },
                { label: "Trạng thái", value: <Badge variant={statusVariant(job.status)}>{statusLabel(job.status)}</Badge> },
                { label: "Chế độ bóc tách", value: <span className="text-sm">{job.extractionMode}</span> },
                { label: "Loại job", value: <span className="text-sm">{job.jobType === "RE_EXTRACTION" ? "Chạy lại (RE_EXTRACTION)" : "Lần đầu (TEXT_EXTRACTION)"}</span> },
                { label: "Tài liệu", value: <span className="text-sm">{job.document.code} — {job.document.title}</span> },
                { label: "File gốc", value: <span className="text-sm font-mono">{job.documentFile.originalFileName}</span> },
                { label: "Số block", value: <span className="text-sm">{job.status === "COMPLETED" ? formatNumber(job.totalBlocks) : "—"}</span> },
                { label: "Số trang", value: <span className="text-sm">{job.status === "COMPLETED" ? formatNumber(job.totalPages) : "—"}</span> },
                { label: "Số ký tự", value: <span className="text-sm">{job.status === "COMPLETED" ? formatNumber(job.totalChars) : "—"}</span> },
                { label: "Ngôn ngữ", value: <span className="text-sm">{langLabel(job.languageDetected)}</span> },
                { label: "Model làm sạch AI", value: (
                  <span className="text-sm flex items-center gap-2">
                    {aiModelLabel(job.aiModelUsed)}
                    {job.aiModelUsed && job.aiModelUsed !== "RULE_BASED" && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-700">AI</span>
                    )}
                  </span>
                )},
                { label: "Bắt đầu", value: <span className="text-sm">{formatDate(job.startedAt)}</span> },
                { label: "Kết thúc", value: <span className="text-sm">{formatDate(job.finishedAt)}</span> },
                { label: "Tạo lúc", value: <span className="text-sm">{formatDate(job.createdAt)}</span> },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center gap-4 px-4 py-3 border-b border-border-light last:border-0">
                  <span className="w-36 text-xs text-txt-secondary shrink-0">{__(label)}</span>
                  <div className="flex-1 text-txt-primary">{value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* File gốc */}
        {activeTab === "file" && (
          <div className="flex flex-col" style={{ height: "calc(100vh - 220px)", minHeight: "600px" }}>
            {fileUrlLoading ? (
              <div className="flex items-center justify-center py-20 text-sm text-txt-secondary">
                {__("Đang tải file...")}
              </div>
            ) : !fileBlobUrl ? (
              <div className="flex items-center justify-center py-20 text-sm text-txt-secondary">
                {__("Không thể tải file gốc.")}
              </div>
            ) : (
              <div className="flex flex-col h-full gap-2">
                <div className="flex items-center justify-between shrink-0">
                  <span className="text-xs text-txt-secondary font-mono truncate max-w-sm">
                    {job.documentFile.originalFileName}
                  </span>
                  {fileDownloadUrl && (
                    <a
                      href={fileDownloadUrl}
                      download={job.documentFile.originalFileName}
                      className="text-xs font-medium text-primary hover:underline shrink-0 ml-4"
                    >
                      {__("Tải xuống")} ↓
                    </a>
                  )}
                </div>
                <iframe
                  src={fileBlobUrl}
                  title={job.documentFile.originalFileName}
                  className="flex-1 w-full rounded-lg border border-border-mid"
                />
              </div>
            )}
          </div>
        )}

        {/* Text blocks */}
        {activeTab === "text" && (
          <div>
            {job.status !== "COMPLETED" ? (
              <p className="text-sm text-txt-secondary italic text-center py-16">
                {job.status === "RUNNING" || job.status === "QUEUED"
                  ? __("Đang trích xuất văn bản...")
                  : __("Chưa có văn bản trích xuất.")}
              </p>
            ) : textBlocksLoading ? (
              <p className="text-sm text-txt-secondary italic text-center py-16">{__("Đang tải text blocks...")}</p>
            ) : textBlocks.length === 0 ? (
              <p className="text-sm text-txt-secondary italic text-center py-16">{__("Không có text block nào.")}</p>
            ) : (
              <TextBlocksView blocks={textBlocks} total={textBlocksTotal} aiModelUsed={job.aiModelUsed} />
            )}
          </div>
        )}

        {/* Văn bản / OCR */}
        {activeTab === "markdown" && (
          <div className="flex flex-col gap-3 h-full" style={{ minHeight: "500px" }}>
            {job.status === "RUNNING" || job.status === "QUEUED" ? (
              <div className="flex flex-col items-center justify-center py-20 gap-3">
                <div className="flex items-center gap-2 text-sm text-txt-secondary">
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>Đang bóc tách văn bản...</span>
                  <span className="font-mono text-primary font-semibold">{job.progressPercent}%</span>
                  <span className="font-mono text-txt-tertiary">
                    ({elapsedSeconds}s)
                  </span>
                </div>
                <div className="w-64 bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${job.progressPercent}%`,
                      background: "linear-gradient(90deg, #2563eb, #60a5fa)",
                    }}
                  />
                </div>
                <p className="text-xs text-txt-tertiary">Trang sẽ tự động cập nhật khi hoàn thành.</p>
              </div>
            ) : job.status !== "COMPLETED" ? (
              <p className="text-sm text-txt-secondary italic text-center py-16">
                {__("Chưa có văn bản trích xuất.")}
              </p>
            ) : textBlocksLoading ? (
              <p className="text-sm text-txt-secondary italic text-center py-16">{__("Đang tải...")}</p>
            ) : (
              <>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs text-txt-secondary">
                    Nội dung trích xuất{" "}
                    — <strong>{formatNumber(job.totalBlocks)}</strong> block,{" "}
                    <strong>{formatNumber(job.totalChars)}</strong> ký tự
                    {job.extractionMode === "OCR" && job.startedAt && job.finishedAt && (
                      <span className="ml-2 text-txt-tertiary">
                        · {Math.round((new Date(job.finishedAt).getTime() - new Date(job.startedAt).getTime()) / 1000)}s
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-txt-tertiary italic">Nội dung có thể chỉnh sửa</p>
                </div>

                <textarea
                  className="flex-1 w-full rounded-xl border border-border-mid p-4 text-sm font-mono leading-relaxed text-txt-primary resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
                  style={{ minHeight: "420px" }}
                  value={editableText}
                  onChange={(e) => setEditableText(e.target.value)}
                  spellCheck={false}
                />

                <div className="flex items-center gap-3 pt-1">
                  <div className="flex-1">
                    <div className="flex items-center border border-border-mid rounded-lg overflow-hidden">
                      <span className="px-3 py-2 text-xs text-txt-secondary bg-gray-50 border-r border-border-light shrink-0">
                        Tên file
                      </span>
                      <input
                        type="text"
                        className="flex-1 px-3 py-2 text-sm text-txt-primary bg-white focus:outline-none"
                        value={markdownFileName}
                        onChange={(e) => setMarkdownFileName(e.target.value)}
                        placeholder="ocr_result"
                      />
                      <span className="px-3 py-2 text-xs text-txt-secondary bg-gray-50 border-l border-border-light shrink-0">
                        .txt
                      </span>
                    </div>
                  </div>
                  <button
                    className="px-6 py-2 rounded-lg text-sm font-semibold text-white transition-colors shrink-0"
                    style={{ background: "linear-gradient(135deg, #1a4fa0, #2563eb)" }}
                    onClick={() => {
                      const blob = new Blob([editableText], { type: "text/plain;charset=utf-8" });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = `${markdownFileName || "ocr_result"}.txt`;
                      a.click();
                      URL.revokeObjectURL(url);
                    }}
                  >
                    Lưu file (.txt)
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* Log */}
        {activeTab === "log" && (
          <div className="max-w-3xl">
            <div className="text-xs text-txt-secondary font-mono space-y-1.5 bg-gray-50 border border-border-mid rounded-xl p-4">
              {job.startedAt && (
                <p>[{formatDate(job.startedAt)}] Job khởi tạo: {job.jobCode}</p>
              )}
              {(job.status === "RUNNING" || job.status === "QUEUED") && (
                <p className="text-amber-600">[...] Đang xử lý — {job.progressPercent}%</p>
              )}
              {job.status === "COMPLETED" && job.finishedAt && (
                <>
                  <p>[{formatDate(job.finishedAt)}] Hoàn thành — {formatNumber(job.totalBlocks)} blocks, {formatNumber(job.totalPages)} trang</p>
                  {job.warningMessage && (
                    <p className="text-amber-500">Cảnh báo: {job.warningMessage}</p>
                  )}
                </>
              )}
              {job.status === "FAILED" && job.finishedAt && (
                <p className="text-red-500">[{formatDate(job.finishedAt)}] Lỗi: {job.errorMessage}</p>
              )}
              {job.status === "QUEUED" && !job.startedAt && (
                <p className="italic">Đang chờ xử lý...</p>
              )}
            </div>
          </div>
        )}

        {/* Errors */}
        {activeTab === "errors" && (
          <div className="max-w-2xl space-y-3">
            {job.errorMessage ? (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
                <strong>{__("Lỗi")}:</strong> {job.errorMessage}
              </div>
            ) : (
              <p className="text-sm text-txt-secondary italic text-center py-16">
                {__("Không có lỗi.")}
              </p>
            )}
            {job.warningMessage && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-700">
                <strong>{__("Cảnh báo")}:</strong> {job.warningMessage}
              </div>
            )}
          </div>
        )}

        {/* Structure */}
        {activeTab === "structure" && (
          <div className="space-y-8">
            {!canRunViParser && !canRunIcaoParser && (
              <p className="text-sm text-txt-secondary italic text-center py-16">
                {__("Job chưa hoàn thành. Chỉ có thể chạy parser sau khi bóc tách xong.")}
              </p>
            )}

            {canRunViParser && (
              <ParseJobSection
                label={__("Parser văn bản Việt Nam")}
                parseJob={viParseJob}
                loading={viParseJobLoading}
                sectionsLoading={viSectionsLoading}
                sectionTree={viSectionTree}
                selectedNode={viSelectedNode}
                onSelectNode={setViSelectedNode}
                onRun={handleRunViParser}
                isRunning={isRunningViParser}
                runLabel={__("Chạy parser Việt Nam")}
                rerunLabel={__("Chạy lại")}
                notRunLabel={__("Chưa chạy parser văn bản Việt Nam")}
              />
            )}

            {canRunIcaoParser && (
              <ParseJobSection
                label={__("ICAO / Aviation English Parser")}
                parseJob={icaoParseJob}
                loading={icaoParseJobLoading}
                sectionsLoading={icaoSectionsLoading}
                sectionTree={icaoSectionTree}
                selectedNode={icaoSelectedNode}
                onSelectNode={setIcaoSelectedNode}
                onRun={handleRunIcaoParser}
                isRunning={isRunningIcaoParser}
                runLabel={__("Chạy ICAO parser")}
                rerunLabel={__("Chạy lại")}
                notRunLabel={__("Chưa chạy ICAO / Aviation English parser")}
                extraStats={(pj) =>
                  pj.totalChapters != null
                    ? `${pj.totalSections} mục · ${pj.totalChapters} ch. · ${pj.totalParagraphs} para`
                    : `${pj.totalSections} mục`
                }
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default IcpmsIngestionJobDetailPage;
