// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { useTranslate } from "@probo/i18n";
import { usePageTitle } from "@probo/hooks";
import {
  Badge,
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogFooter,
  IconCrossLargeX,
  IconPlusLarge,
  IconRotateCw,
  Option,
  PageHeader,
  Select,
} from "@probo/ui";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useMutation, useRelayEnvironment } from "react-relay";
import { fetchQuery } from "relay-runtime";
import { useToast } from "@probo/ui";

import { graphql } from "relay-runtime";
import { useOrganizationId } from "#/hooks/useOrganizationId";
import createIngestionJobMutation from "../../../__generated__/core/IcpmsDocumentVersionsTabCreateIcpmsIngestionJobMutation.graphql";
import IcpmsDocumentsPageQueryNode from "../../../__generated__/core/IcpmsDocumentsPageQuery.graphql";
import IcpmsDocumentVersionsTabQueryNode from "../../../__generated__/core/IcpmsDocumentVersionsTabQuery.graphql";

const createVietnameseParseJobMutation = graphql`
  mutation IcpmsIngestionJobsPageCreateVietnameseParseJobMutation($input: CreateIcpmsDocumentParseJobInput!) {
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
  mutation IcpmsIngestionJobsPageCreateIcaoParseJobMutation($input: CreateIcpmsDocumentParseJobInput!) {
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

const deleteIngestionJobMutation = graphql`
  mutation IcpmsIngestionJobsPageDeleteJobMutation($input: DeleteIcpmsIngestionJobInput!) {
    deleteIcpmsIngestionJob(input: $input) {
      deletedId
    }
  }
`;

const LatestParseJobQueryNode = graphql`
  query IcpmsIngestionJobsPageLatestParseJobQuery($ingestionJobId: ID!) {
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
  query IcpmsIngestionJobsPageLatestIcaoParseJobQuery($ingestionJobId: ID!) {
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
  query IcpmsIngestionJobsPageParsedSectionsQuery($parseJobId: ID!) {
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

const JobsQueryNode = graphql`
  query IcpmsIngestionJobsPageJobsQuery($organizationId: ID!) {
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
          startedAt
          finishedAt
          createdAt
          document {
            id
            code
            title
          }
          documentVersion {
            id
            versionCode
          }
          documentFile {
            id
            originalFileName
          }
        }
      }
    }
  }
`;

const TextBlocksQueryNode = graphql`
  query IcpmsIngestionJobsPageTextBlocksQuery($jobId: ID!) {
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

// Strips Relay boilerplate ("No data returned for operation `X`, got error(s): <msg>. See the error...") → just <msg>
function extractBackendError(err: Error): string {
  const m = err.message.match(/got error\(s\):\s*(.+?)(?:\s*See the error|$)/s);
  return m ? m[1].trim() : err.message;
}

// ---------------------------------------------------------------------------
// Selector option types
// ---------------------------------------------------------------------------

interface DocOption {
  id: string;
  code: string;
  title: string;
}

interface FileOption {
  id: string;
  originalFileName: string;
}

interface VersionOption {
  id: string;
  versionCode: string;
  versionName: string;
  files: FileOption[];
}

// ---------------------------------------------------------------------------
// Cascading selector — Document combobox
// ---------------------------------------------------------------------------

function DocumentCombobox({
  documents,
  loading,
  value,
  onChange,
}: {
  documents: DocOption[];
  loading: boolean;
  value: DocOption | null;
  onChange: (doc: DocOption | null) => void;
}) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const filtered = documents
    .filter(
      (d) =>
        !search ||
        d.code.toLowerCase().includes(search.toLowerCase()) ||
        d.title.toLowerCase().includes(search.toLowerCase()),
    )
    .slice(0, 25);

  const inputValue = open ? search : value ? `${value.code} — ${value.title}` : "";

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <input
          className="w-full px-3 py-2 pr-8 text-sm border border-border-mid rounded bg-level-1 text-txt-primary focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder={loading ? "Đang tải tài liệu..." : "Tìm theo mã hoặc tên..."}
          value={inputValue}
          disabled={loading}
          onFocus={() => {
            setOpen(true);
            setSearch("");
          }}
          onChange={(e) => {
            setSearch(e.target.value);
            setOpen(true);
          }}
        />
        {value && (
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-txt-secondary hover:text-txt-primary"
            onMouseDown={(e) => {
              e.preventDefault();
              onChange(null);
              setSearch("");
              setOpen(false);
            }}
            tabIndex={-1}
          >
            <IconCrossLargeX size={13} />
          </button>
        )}
      </div>

      {open && (
        <div
          className="absolute z-[9999] top-full mt-1 left-0 right-0 border border-border-mid rounded-lg shadow-xl max-h-72 overflow-y-auto bg-level-1"
        >
          {filtered.length === 0 ? (
            <p className="px-3 py-3 text-sm text-txt-secondary italic">
              {search ? "Không tìm thấy tài liệu phù hợp" : "Chưa có tài liệu"}
            </p>
          ) : (
            filtered.map((doc) => (
              <button
                key={doc.id}
                className="w-full text-left px-3 py-2.5 hover:bg-tertiary-hover transition-colors border-b border-border-solid last:border-0"
                onMouseDown={(e) => {
                  e.preventDefault();
                  onChange(doc);
                  setSearch("");
                  setOpen(false);
                }}
              >
                <span className="text-sm font-medium text-txt-primary">{doc.code}</span>
                <span className="text-xs text-txt-secondary ml-2 line-clamp-1">{doc.title}</span>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}

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
  startedAt: string | null;
  finishedAt: string | null;
  createdAt: string;
  document: { id: string; code: string; title: string };
  documentFile: { id: string; originalFileName: string };
}

interface TextBlock {
  id: string;
  blockIndex: number;
  pageNumber: number | null;
  blockType: string;
  normalizedText: string;
  charCount: number;
  wordCount: number;
  sectionHint: string | null;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// Section type display helpers
// ---------------------------------------------------------------------------

const SECTION_TYPE_LABELS: Record<string, string> = {
  PART: "Part",
  CHAPTER: "Chương",
  SECTION: "Section",
  SUBSECTION: "Subsection",
  PARAGRAPH: "Paragraph",
  SUBPARAGRAPH: "Subparagraph",
  ARTICLE: "Điều",
  CLAUSE: "Khoản",
  POINT: "Điểm",
  APPENDIX: "Appendix",
  ATTACHMENT: "Attachment",
  TABLE: "Bảng",
  FIGURE: "Hình",
  NOTE: "Ghi chú",
  EXAMPLE: "Ví dụ",
  DEFINITION: "Định nghĩa",
  UNKNOWN: "Không xác định",
};

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

function buildSectionTree(sections: ParsedSection[]): SectionTreeNode[] {
  const nodeMap = new Map<string, SectionTreeNode>();
  const roots: SectionTreeNode[] = [];

  for (const s of sections) {
    nodeMap.set(s.id, { ...s, children: [] });
  }

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

  // Build the display text: fullHeading already includes any continuation lines
  // appended by the parser. If there is still contentText (body lines after
  // heading), show a short preview so the user can see truncated sentences.
  const headingText = node.fullHeading || node.title;
  const contentPreview = node.contentText
    ? node.contentText.split("\n").slice(0, 2).join(" ").slice(0, 120)
    : "";

  return (
    <div className={depth > 0 ? "pl-4" : ""}>
      <div
        className={`flex items-start gap-1 py-1 px-1 rounded cursor-pointer transition-colors ${
          isSelected ? "bg-primary/10" : "hover:bg-tertiary-hover"
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
            <span className="text-xs text-txt-secondary ml-1 italic"> {contentPreview}{node.contentText && node.contentText.length > 120 ? "…" : ""}</span>
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
  // Combine fullHeading + contentText to show the full text of this section
  const fullText = node.contentText
    ? `${node.fullHeading}\n\n${node.contentText}`
    : node.fullHeading;
  return (
    <div className="mt-3 border border-border-mid rounded-lg p-3 bg-subtle text-xs space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-txt-primary text-sm">[{typeLabel}] {node.sectionNumber ?? ""}</span>
        <button className="text-txt-secondary hover:text-txt-primary" onClick={onClose}>
          <IconCrossLargeX size={14} />
        </button>
      </div>
      <div className="flex gap-2 flex-wrap">
        <span className="text-txt-secondary">Confidence: {node.confidenceScore}%</span>
        <span className="text-txt-secondary">Depth: {node.depthLevel}</span>
      </div>
      {node.path && (
        <p className="text-txt-secondary italic truncate" title={node.path}>{node.path}</p>
      )}
      {node.warnings && (
        <div className="bg-amber-50 border border-amber-200 rounded p-2 text-amber-700">
          <strong>Cảnh báo:</strong> {node.warnings}
        </div>
      )}
      <div>
        <p className="font-medium text-txt-primary mb-1">Nội dung đầy đủ:</p>
        <pre className="whitespace-pre-wrap font-sans text-txt-secondary leading-relaxed max-h-64 overflow-y-auto bg-level-1 border border-border-solid rounded p-2">
          {fullText}
        </pre>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Reusable parse-job section (shared by Vietnamese and ICAO parsers)
// ---------------------------------------------------------------------------

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
        : `${parseJob.totalSections ?? 0} mục · độ sâu ${parseJob.maxDepth ?? 0}`;

  return (
    <div>
      <h4 className="text-xs font-semibold text-txt-secondary uppercase tracking-wide mb-2">{label}</h4>

      {loading ? (
        <p className="text-sm text-txt-secondary italic text-center py-4">{__("Đang tải...")}</p>
      ) : parseJob == null ? (
        <div className="flex flex-col items-center gap-3 py-6">
          <p className="text-sm text-txt-secondary text-center">
            {notRunLabel ?? __("Chưa chạy parser văn bản Việt Nam")}
          </p>
          <Button icon={IconRotateCw} onClick={onRun} disabled={isRunning}>
            {isRunning ? __("Đang phân tích...") : runLabel}
          </Button>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-2">
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
            <div className="bg-red-50 border border-red-200 rounded p-3 text-xs text-red-700 mb-2">
              {parseJob.errorMessage}
            </div>
          )}

          {parseJob.warningMessage && (
            <div className="bg-amber-50 border border-amber-200 rounded p-2 text-xs text-amber-700 mb-2">
              {parseJob.warningMessage}
            </div>
          )}

          {parseJob.status === "COMPLETED" && (
            <>
              {sectionsLoading ? (
                <p className="text-sm text-txt-secondary italic">{__("Đang tải cấu trúc...")}</p>
              ) : sectionTree.length === 0 ? (
                <p className="text-sm text-txt-secondary italic">{__("Không tìm thấy mục nào.")}</p>
              ) : (
                <div className="border border-border-light rounded overflow-hidden">
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
              )}

              {selectedNode && (
                <SectionDetailPanel node={selectedNode} onClose={() => onSelectNode(null as any)} />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Right panel — Job detail
// ---------------------------------------------------------------------------

export function JobDetailPanel({ job, onClose }: { job: IngestionJob; onClose: () => void }) {
  const { __ } = useTranslate();
  const { toast } = useToast();
  const env = useRelayEnvironment();
  const [activeTab, setActiveTab] = useState<"overview" | "text" | "log" | "errors" | "structure">("overview");

  // Language detection
  const lang = job.languageDetected?.toLowerCase() ?? "";
  const isEnglish = lang.includes("english") || lang === "en" || lang.includes("icao");

  // --- Text blocks state ---
  const [textBlocks, setTextBlocks] = useState<TextBlock[]>([]);
  const [textBlocksLoading, setTextBlocksLoading] = useState(false);
  const [textBlocksTotal, setTextBlocksTotal] = useState(0);
  const textBlocksLoadedForJob = useRef<string | null>(null);

  useEffect(() => {
    if (activeTab !== "text" || job.status !== "COMPLETED") return;
    if (textBlocksLoadedForJob.current === job.id) return;
    setTextBlocksLoading(true);
    (fetchQuery(env, TextBlocksQueryNode as any, { jobId: job.id }) as any)
      .toPromise()
      .then((data: any) => {
        const edges = data?.ingestionJobTextBlocks?.edges ?? [];
        setTextBlocks(edges.map((e: any) => e.node as TextBlock));
        setTextBlocksTotal(data?.ingestionJobTextBlocks?.totalCount ?? 0);
        textBlocksLoadedForJob.current = job.id;
      })
      .catch(() => {})
      .finally(() => setTextBlocksLoading(false));
  }, [activeTab, job.id, job.status, env]);

  // --- Vietnamese parser state ---
  const [viParseJob, setViParseJob] = useState<any>(null);
  const [viParseJobLoading, setViParseJobLoading] = useState(false);
  const [viSections, setViSections] = useState<ParsedSection[]>([]);
  const [viSectionsLoading, setViSectionsLoading] = useState(false);
  const [viSelectedNode, setViSelectedNode] = useState<SectionTreeNode | null>(null);
  const [commitRunViParser, isRunningViParser] = useMutation<any>(createVietnameseParseJobMutation);

  // --- ICAO parser state ---
  const [icaoParseJob, setIcaoParseJob] = useState<any>(null);
  const [icaoParseJobLoading, setIcaoParseJobLoading] = useState(false);
  const [icaoSections, setIcaoSections] = useState<ParsedSection[]>([]);
  const [icaoSectionsLoading, setIcaoSectionsLoading] = useState(false);
  const [icaoSelectedNode, setIcaoSelectedNode] = useState<SectionTreeNode | null>(null);
  const [commitRunIcaoParser, isRunningIcaoParser] = useMutation<any>(createIcaoParseJobMutation);

  const canRunViParser = job.status === "COMPLETED" && !isEnglish;
  const canRunIcaoParser = job.status === "COMPLETED" && isEnglish;

  const loadSections = useCallback((parseJobId: string, setter: (s: ParsedSection[]) => void, setLoading: (v: boolean) => void) => {
    setLoading(true);
    (fetchQuery(env, ParsedSectionsQueryNode as any, { parseJobId }) as any)
      .toPromise()
      .then((sd: any) => setter(sd?.parsedSectionsForJob ?? []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [env]);

  const loadViParseJob = useCallback(() => {
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
  }, [env, job.id, loadSections]);

  const loadIcaoParseJob = useCallback(() => {
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
  }, [env, job.id, loadSections]);

  useEffect(() => {
    if (activeTab === "structure") {
      if (canRunViParser) loadViParseJob();
      if (canRunIcaoParser) loadIcaoParseJob();
    }
  }, [activeTab, canRunViParser, canRunIcaoParser, loadViParseJob, loadIcaoParseJob]);

  const handleRunViParser = () => {
    commitRunViParser({
      variables: { input: { ingestionJobId: job.id } },
      onCompleted: (res: any) => {
        const pj = res?.createAndRunVietnameseParseJob?.parseJob;
        if (pj) {
          setViParseJob(pj);
          toast({
            title: __("Parser Việt Nam đã chạy xong"),
            description: `${pj.totalSections} mục được nhận dạng`,
            variant: "success",
          });
          if (pj.status === "COMPLETED") {
            loadSections(pj.id, setViSections, setViSectionsLoading);
          }
        }
      },
      onError: (err: Error) => {
        toast({ title: __("Lỗi khi chạy parser Việt Nam"), description: err.message, variant: "error" });
      },
    });
  };

  const handleRunIcaoParser = () => {
    commitRunIcaoParser({
      variables: { input: { ingestionJobId: job.id } },
      onCompleted: (res: any) => {
        const pj = res?.createAndRunIcaoParseJob?.parseJob;
        if (pj) {
          setIcaoParseJob(pj);
          toast({
            title: __("ICAO parser đã chạy xong"),
            description: `${pj.totalSections} mục — ${pj.totalChapters} chương`,
            variant: "success",
          });
          if (pj.status === "COMPLETED") {
            loadSections(pj.id, setIcaoSections, setIcaoSectionsLoading);
          }
        }
      },
      onError: (err: Error) => {
        toast({ title: __("Lỗi khi chạy ICAO parser"), description: err.message, variant: "error" });
      },
    });
  };

  const viSectionTree = buildSectionTree(viSections) as SectionTreeNode[];
  const icaoSectionTree = buildSectionTree(icaoSections) as SectionTreeNode[];

  return (
    <div
      className="fixed inset-y-0 right-0 w-[480px] shadow-2xl border-l border-border-mid flex flex-col z-[200] bg-level-1"
    >
      <div className="flex items-center justify-between px-5 py-4 border-b border-border-mid shrink-0">
        <div>
          <h2 className="text-base font-semibold text-txt-primary">{__("Chi tiết job")}</h2>
          <p className="text-xs text-txt-secondary mt-0.5">{job.jobCode}</p>
        </div>
        <button
          className="text-txt-secondary hover:text-txt-primary p-1 rounded"
          onClick={onClose}
          aria-label="Đóng"
        >
          <IconCrossLargeX size={18} />
        </button>
      </div>

      <div className="flex border-b border-border-mid shrink-0 overflow-x-auto">
        {(["overview", "text", "log", "errors", "structure"] as const).map((tab) => {
          const labels: Record<string, string> = {
            overview: "Tổng quan",
            text: "Text trích xuất",
            log: "Log",
            errors: "Lỗi/Cảnh báo",
            structure: "Cấu trúc văn bản",
          };
          return (
            <button
              key={tab}
              className={`px-3 py-2.5 text-xs font-medium border-b-2 -mb-px transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? "border-primary text-primary"
                  : "border-transparent text-txt-secondary hover:text-txt-primary"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {__(labels[tab])}
            </button>
          );
        })}
      </div>

      <div className="flex-1 overflow-y-auto p-5">
        {activeTab === "overview" && (
          <div className="space-y-0">
            {[
              { label: "Mã job", value: job.jobCode },
              { label: "Trạng thái", value: <Badge variant={statusVariant(job.status)}>{statusLabel(job.status)}</Badge> },
              { label: "Chế độ", value: { AUTO: "Tự động", PDF_TEXT: "PDF thường", OCR: "OCR (VietOCR)" }[job.extractionMode] ?? job.extractionMode },
              { label: "Tài liệu", value: `${job.document.code} — ${job.document.title}` },
              { label: "File gốc", value: job.documentFile.originalFileName },
              { label: "Số block", value: job.status === "COMPLETED" ? formatNumber(job.totalBlocks) : "-" },
              { label: "Số trang", value: job.status === "COMPLETED" ? formatNumber(job.totalPages) : "-" },
              { label: "Số ký tự", value: job.status === "COMPLETED" ? formatNumber(job.totalChars) : "-" },
              { label: "Ngôn ngữ", value: langLabel(job.languageDetected) },
              { label: "Bắt đầu", value: formatDate(job.startedAt) },
              { label: "Kết thúc", value: formatDate(job.finishedAt) },
              { label: "Tạo lúc", value: formatDate(job.createdAt) },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-3 py-2 border-b border-border-light last:border-0">
                <span className="w-28 text-xs text-txt-secondary shrink-0">{__(label)}</span>
                <span className="text-sm text-txt-primary">{value}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "text" && (
          <div>
            {job.status !== "COMPLETED" ? (
              <p className="text-sm text-txt-secondary italic text-center py-8">
                {job.status === "RUNNING" || job.status === "QUEUED"
                  ? __("Đang trích xuất văn bản...")
                  : __("Chưa có văn bản trích xuất.")}
              </p>
            ) : textBlocksLoading ? (
              <p className="text-sm text-txt-secondary italic text-center py-8">{__("Đang tải text blocks...")}</p>
            ) : textBlocks.length === 0 ? (
              <p className="text-sm text-txt-secondary italic text-center py-8">{__("Không có text block nào.")}</p>
            ) : (
              <>
                <p className="text-xs text-txt-secondary mb-3">
                  {__("Hiển thị")} <strong>{textBlocks.length}</strong>
                  {textBlocksTotal > textBlocks.length ? ` / ${formatNumber(textBlocksTotal)}` : ""} block
                </p>
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border-mid">
                      <th className="py-2 px-2 text-left text-xs font-medium text-txt-secondary w-10">#</th>
                      <th className="py-2 px-2 text-left text-xs font-medium text-txt-secondary w-16">{__("Trang")}</th>
                      <th className="py-2 px-2 text-left text-xs font-medium text-txt-secondary w-16">{__("Đoạn")}</th>
                      <th className="py-2 px-2 text-left text-xs font-medium text-txt-secondary w-24">{__("Loại")}</th>
                      <th className="py-2 px-2 text-left text-xs font-medium text-txt-secondary">{__("Nội dung")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {textBlocks.map((b) => (
                      <tr key={b.id} className="border-b border-border-light">
                        <td className="py-2 px-2 text-txt-secondary text-xs">{b.blockIndex + 1}</td>
                        <td className="py-2 px-2 text-txt-secondary text-xs">{b.pageNumber ?? "-"}</td>
                        <td className="py-2 px-2 text-txt-secondary text-xs">{b.sectionHint ?? "-"}</td>
                        <td className="py-2 px-2"><Badge variant="neutral">{b.blockType}</Badge></td>
                        <td className="py-2 px-2 text-txt-primary text-xs leading-relaxed whitespace-pre-wrap">{b.normalizedText}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>
        )}

        {activeTab === "log" && (
          <div className="text-xs text-txt-secondary font-mono space-y-1 bg-subtle rounded p-3">
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
        )}

        {activeTab === "errors" && (
          <div className="space-y-3">
            {job.errorMessage ? (
              <div className="bg-red-50 border border-red-200 rounded p-3 text-sm text-red-700">
                <strong>{__("Lỗi")}:</strong> {job.errorMessage}
              </div>
            ) : (
              <p className="text-sm text-txt-secondary italic text-center py-8">
                {__("Không có lỗi.")}
              </p>
            )}
            {job.warningMessage && (
              <div className="bg-amber-50 border border-amber-200 rounded p-3 text-sm text-amber-700">
                <strong>{__("Cảnh báo")}:</strong> {job.warningMessage}
              </div>
            )}
          </div>
        )}

        {activeTab === "structure" && (
          <div className="space-y-5">
            {!canRunViParser && !canRunIcaoParser && (
              <p className="text-sm text-txt-secondary italic text-center py-8">
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
                    ? `${pj.totalSections} mục · ${pj.totalChapters} ch. · ${pj.totalParagraphs} para · ${pj.totalAppendices} app`
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

// ---------------------------------------------------------------------------
// Status strip
// ---------------------------------------------------------------------------

function StatusStrip({ job, onRefresh }: { job: IngestionJob | null; onRefresh?: () => void }) {
  const { __ } = useTranslate();

  if (!job) {
    return (
      <div className="flex items-center gap-3 px-4 py-2.5 bg-subtle border border-border-mid rounded-lg text-sm text-txt-secondary">
        <span className="italic">{__("Chưa bóc tách — chọn tài liệu và bấm Chạy bóc tách")}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 px-4 py-2.5 bg-subtle border border-border-mid rounded-lg">
      <Badge variant={statusVariant(job.status)}>{statusLabel(job.status)}</Badge>
      {(job.status === "RUNNING" || job.status === "QUEUED") && (
        <div className="flex items-center gap-2 flex-1">
          <div className="flex-1 bg-border-mid rounded-full h-1.5 overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${job.progressPercent}%` }} />
          </div>
          <span className="text-xs text-txt-secondary shrink-0">{job.progressPercent}%</span>
        </div>
      )}
      {job.status === "COMPLETED" && (
        <>
          <span className="text-xs text-txt-secondary">{formatNumber(job.totalBlocks)} block</span>
          <span className="text-xs text-txt-secondary">{formatNumber(job.totalPages)} trang</span>
          {job.languageDetected && <span className="text-xs text-txt-secondary">{langLabel(job.languageDetected)}</span>}
        </>
      )}
      {onRefresh && (
        <div className="ml-auto">
          <Button variant="secondary" icon={IconRotateCw} onClick={onRefresh}>{__("Làm mới")}</Button>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

export function IcpmsIngestionJobsPage() {
  usePageTitle("Bóc tách tài liệu");
  const { __ } = useTranslate();
  const { toast } = useToast();
  const organizationId = useOrganizationId();
  const env = useRelayEnvironment();
  const navigate = useNavigate();

  // --- Cascading selector state ---
  const [documents, setDocuments] = useState<DocOption[]>([]);
  const [docsLoading, setDocsLoading] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<DocOption | null>(null);

  const [versions, setVersions] = useState<VersionOption[]>([]);
  const [versionsLoading, setVersionsLoading] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState<VersionOption | null>(null);

  const [selectedFile, setSelectedFile] = useState<FileOption | null>(null);

  const [extractionMode, setExtractionMode] = useState("AUTO");

  // --- Jobs state ---
  const [jobs, setJobs] = useState<IngestionJob[]>([]);
  const [jobsLoading, setJobsLoading] = useState(false);
  const [showRerunConfirm, setShowRerunConfirm] = useState(false);
  const [rerunError, setRerunError] = useState<string | null>(null);
  const [commitCreate, isCreating] = useMutation<any>(createIngestionJobMutation);
  const [commitDelete, isDeleting] = useMutation<any>(deleteIngestionJobMutation);

  // Latest job for the currently selected file (jobs sorted newest first)
  const latestJobForFile = useMemo(() => {
    if (!selectedFile) return null;
    return jobs.find((j) => j.documentFile.id === selectedFile.id) ?? null;
  }, [jobs, selectedFile]);

  // Show all jobs (newest first) — dedup removed so deleting a job doesn't cause an older job to reappear
  const tableJobs = jobs;

  // Load jobs from real API
  const loadJobs = useCallback(() => {
    setJobsLoading(true);
    (fetchQuery(env, JobsQueryNode as any, { organizationId }) as any)
      .toPromise()
      .then((data: any) => {
        const edges = data?.ingestionJobs?.edges ?? [];
        setJobs(
          edges.map((e: any) => ({
            id: e.node.id,
            jobCode: e.node.jobCode,
            jobType: e.node.jobType as JobType,
            extractionMode: e.node.extractionMode,
            status: e.node.status as JobStatus,
            progressPercent: e.node.progressPercent,
            totalBlocks: e.node.totalBlocks,
            totalPages: e.node.totalPages,
            totalChars: e.node.totalChars,
            languageDetected: e.node.languageDetected ?? null,
            errorMessage: e.node.errorMessage ?? null,
            warningMessage: e.node.warningMessage ?? null,
            startedAt: e.node.startedAt ?? null,
            finishedAt: e.node.finishedAt ?? null,
            createdAt: e.node.createdAt,
            document: {
              id: e.node.document.id,
              code: e.node.document.code,
              title: e.node.document.title,
            },
            documentFile: {
              id: e.node.documentFile.id,
              originalFileName: e.node.documentFile.originalFileName,
            },
          })) as IngestionJob[],
        );
      })
      .catch((err: any) => {
        const detail = extractBackendError(err);
        toast({ title: __("Không thể tải danh sách job"), description: detail, variant: "error" });
      })
      .finally(() => setJobsLoading(false));
  }, [env, organizationId]);

  // Load jobs on mount
  useEffect(() => {
    loadJobs();
  }, [loadJobs]);

  // Auto-poll every 3s while any job is QUEUED or RUNNING
  const hasActiveJobs = jobs.some((j) => j.status === "RUNNING" || j.status === "QUEUED");
  useEffect(() => {
    if (!hasActiveJobs) return;
    const timer = setInterval(() => loadJobs(), 3000);
    return () => clearInterval(timer);
  }, [hasActiveJobs, loadJobs]);

  // Load documents on mount
  useEffect(() => {
    setDocsLoading(true);
    (fetchQuery(env, IcpmsDocumentsPageQueryNode as any, { organizationId }) as any)
      .toPromise()
      .then((data: any) => {
        const edges = data?.organization?.icpmsDocuments?.edges ?? [];
        setDocuments(
          edges.map((e: any) => ({
            id: e.node.id,
            code: e.node.code,
            title: e.node.title,
          })),
        );
      })
      .catch(() => {
        toast({ title: __("Không thể tải danh sách tài liệu"), description: "", variant: "error" });
      })
      .finally(() => setDocsLoading(false));
  }, [env, organizationId]);

  // Load versions when document changes
  useEffect(() => {
    setSelectedVersion(null);
    setSelectedFile(null);
    setVersions([]);
    if (!selectedDoc) return;

    setVersionsLoading(true);
    (fetchQuery(env, IcpmsDocumentVersionsTabQueryNode as any, { documentId: selectedDoc.id }) as any)
      .toPromise()
      .then((data: any) => {
        const doc = data?.document;
        if (doc?.__typename !== "IcpmsDocument") return;
        const vers: VersionOption[] = (doc.versions?.edges ?? []).map((e: any) => ({
          id: e.node.id,
          versionCode: e.node.versionCode,
          versionName: e.node.versionName,
          files: (e.node.files?.edges ?? []).map((fe: any) => ({
            id: fe.node.id,
            originalFileName: fe.node.originalFileName,
          })),
        }));
        setVersions(vers);
      })
      .catch(() => {
        toast({ title: __("Không thể tải phiên bản tài liệu"), description: "", variant: "error" });
      })
      .finally(() => setVersionsLoading(false));
  }, [env, selectedDoc]);

  // Auto-select file when version has exactly 1 file
  useEffect(() => {
    setSelectedFile(null);
    if (!selectedVersion) return;
    if (selectedVersion.files.length === 1) {
      setSelectedFile(selectedVersion.files[0]);
    }
  }, [selectedVersion]);

  const doCreate = useCallback((jobType: "TEXT_EXTRACTION" | "RE_EXTRACTION") => {
    if (!selectedDoc || !selectedVersion || !selectedFile) return;
    setRerunError(null);
    commitCreate({
      variables: {
        input: {
          documentId: selectedDoc.id,
          documentVersionId: selectedVersion.id,
          documentFileId: selectedFile.id,
          extractionMode,
          jobType,
        },
      },
      onCompleted: (res: any) => {
        const job = res?.createIcpmsIngestionJob?.job;
        if (!job) {
          if (jobType === "RE_EXTRACTION") {
            setRerunError(__("Không thể tạo job chạy lại. Vui lòng thử lại."));
          } else {
            toast({ title: __("Không thể tạo job bóc tách"), description: "", variant: "error" });
          }
          return;
        }
        toast({
          title: jobType === "RE_EXTRACTION" ? __("Đã tạo job chạy lại bóc tách") : __("Đã tạo job bóc tách tài liệu"),
          description: job.jobCode ?? "",
          variant: "success",
        });
        loadJobs();
        if (job.id) navigate(job.id);
        setSelectedDoc(null);
        setSelectedVersion(null);
        setSelectedFile(null);
        setShowRerunConfirm(false);
        setRerunError(null);
      },
      onError: (err: Error) => {
        if (jobType === "RE_EXTRACTION") {
          setRerunError(extractBackendError(err));
        } else {
          toast({
            title: __("Không thể tạo job bóc tách"),
            description: extractBackendError(err),
            variant: "error",
          });
        }
      },
    });
  }, [selectedDoc, selectedVersion, selectedFile, extractionMode, commitCreate, loadJobs, toast, __]);

  const handleCreate = () => {
    if (!selectedDoc || !selectedVersion || !selectedFile) {
      toast({
        title: __("Thiếu thông tin"),
        description: __("Vui lòng chọn tài liệu, phiên bản và file gốc."),
        variant: "error",
      });
      return;
    }
    doCreate("TEXT_EXTRACTION");
  };

  const handleRerun = () => {
    setRerunError(null);
    setShowRerunConfirm(true);
  };

  const displayJob = jobs[0] ?? null;
  const currentVersionFiles = selectedVersion?.files ?? [];

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col gap-4 p-6 overflow-y-auto">
        {/* PART 1 — Header */}
        <PageHeader
          title={__("Bóc tách tài liệu")}
          description={__(
            "Chạy bóc tách nội dung file gốc để trích xuất văn bản thô, phục vụ bước tạo yêu cầu tuân thủ ở các phase sau.",
          )}
        />

        {/* PART 2 — Create card */}
        <Card>
          <div className="p-4">
            <h3 className="text-sm font-semibold text-txt-primary mb-3">{__("Chạy bóc tách mới")}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end">

              {/* Col 1 — Tài liệu (searchable combobox) */}
              <div className="flex flex-col gap-1">
                <label className="text-xs text-txt-secondary font-medium">{__("Tài liệu")}</label>
                <DocumentCombobox
                  documents={documents}
                  loading={docsLoading}
                  value={selectedDoc}
                  onChange={(doc) => setSelectedDoc(doc)}
                />
              </div>

              {/* Col 2 — Phiên bản */}
              <div className="flex flex-col gap-1">
                <label className="text-xs text-txt-secondary font-medium">{__("Phiên bản")}</label>
                <select
                  className="px-3 py-2 text-sm border border-border-mid rounded bg-level-1 text-txt-primary focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!selectedDoc || versionsLoading || versions.length === 0}
                  value={selectedVersion?.id ?? ""}
                  onChange={(e) => {
                    const v = versions.find((v) => v.id === e.target.value) ?? null;
                    setSelectedVersion(v);
                  }}
                >
                  <option value="">
                    {versionsLoading
                      ? "Đang tải..."
                      : !selectedDoc
                        ? "Chọn tài liệu trước"
                        : versions.length === 0
                          ? "Không có phiên bản"
                          : "-- Chọn phiên bản --"}
                  </option>
                  {versions.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.versionCode}
                      {v.versionName ? ` — ${v.versionName}` : ""}
                      {v.files.length === 0 ? " (chưa có file)" : ""}
                    </option>
                  ))}
                </select>
              </div>

              {/* Col 3 — File gốc */}
              <div className="flex flex-col gap-1">
                <label className="text-xs text-txt-secondary font-medium">{__("File gốc")}</label>
                <select
                  className="px-3 py-2 text-sm border border-border-mid rounded bg-level-1 text-txt-primary focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!selectedVersion || currentVersionFiles.length === 0}
                  value={selectedFile?.id ?? ""}
                  onChange={(e) => {
                    const f = currentVersionFiles.find((f) => f.id === e.target.value) ?? null;
                    setSelectedFile(f);
                  }}
                >
                  <option value="">
                    {!selectedVersion
                      ? "Chọn phiên bản trước"
                      : currentVersionFiles.length === 0
                        ? "Chưa upload file gốc"
                        : "-- Chọn file --"}
                  </option>
                  {currentVersionFiles.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.originalFileName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Col 4 — Chế độ */}
              <div className="flex flex-col gap-1">
                <label className="text-xs text-txt-secondary font-medium">{__("Chế độ")}</label>
                <Select value={extractionMode} onValueChange={(v: string) => setExtractionMode(v)}>
                  <Option value="AUTO">Tự động</Option>
                  <Option value="PDF_TEXT">PDF thường</Option>
                  <Option value="OCR">OCR (VietOCR)</Option>
                </Select>
              </div>

              {/* Col 5 — Action buttons */}
              <div className="flex flex-col gap-2">
                {(() => {
                  const canSelect = !!(selectedDoc && selectedVersion && selectedFile);
                  const st = latestJobForFile?.status;

                  if (!canSelect) {
                    return (
                      <Button icon={IconPlusLarge} disabled className="w-full">
                        {__("Chạy bóc tách")}
                      </Button>
                    );
                  }

                  if (st === "QUEUED" || st === "RUNNING") {
                    return (
                      <Button icon={IconRotateCw} disabled className="w-full animate-pulse">
                        {__("Đang xử lý...")}
                      </Button>
                    );
                  }

                  if (st === "COMPLETED") {
                    return (
                      <>
                        <Button
                          variant="secondary"
                          className="w-full"
                          onClick={() => { if (latestJobForFile) navigate(latestJobForFile.id); }}
                        >
                          {__("Xem kết quả")}
                        </Button>
                        <Button
                          variant="tertiary"
                          icon={IconRotateCw}
                          className="w-full"
                          onClick={handleRerun}
                          disabled={isCreating}
                        >
                          {__("Chạy lại bóc tách")}
                        </Button>
                      </>
                    );
                  }

                  // No job or FAILED/CANCELLED — allow fresh run
                  return (
                    <Button
                      icon={st === "FAILED" || st === "CANCELLED" ? IconRotateCw : IconPlusLarge}
                      onClick={handleCreate}
                      disabled={isCreating}
                      className="w-full"
                    >
                      {isCreating ? __("Đang tạo...") : st === "FAILED" || st === "CANCELLED" ? __("Chạy lại") : __("Chạy bóc tách")}
                    </Button>
                  );
                })()}
              </div>
            </div>

            {/* Hint when version has no file */}
            {selectedVersion && currentVersionFiles.length === 0 && (
              <p className="mt-2 text-xs text-amber-600">
                {__("Phiên bản này chưa có file gốc. Vui lòng upload file trước tại trang Tài liệu.")}
              </p>
            )}

            {/* Status hint for selected file */}
            {selectedFile && latestJobForFile && (
              <p className="mt-2 text-xs text-txt-secondary">
                {latestJobForFile.status === "COMPLETED"
                  ? __("File này đã được bóc tách thành công. Bấm 'Chạy lại bóc tách' nếu muốn tạo job mới.")
                  : latestJobForFile.status === "RUNNING" || latestJobForFile.status === "QUEUED"
                    ? __("File này đang có job bóc tách đang chạy.")
                    : __("Bóc tách trước đó thất bại. Bấm 'Chạy lại' để thử lại.")}
              </p>
            )}
          </div>
        </Card>

        {/* Rerun confirmation dialog */}
        {showRerunConfirm && (
          <Dialog
            defaultOpen
            onClose={() => { setShowRerunConfirm(false); setRerunError(null); }}
            title={__("Xác nhận chạy lại bóc tách")}
            className="max-w-md"
          >
            <DialogContent padded className="space-y-4">
              {/* Warning notice */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center mt-0.5">
                  <IconRotateCw className="w-4 h-4 text-amber-700" />
                </div>
                <p className="text-sm text-amber-800 leading-relaxed">
                  {__("File đã được bóc tách thành công trước đó. Chạy lại sẽ tạo một job RE_EXTRACTION mới — kết quả cũ vẫn được giữ lại trong lịch sử.")}
                </p>
              </div>

              {/* Details table */}
              <div className="rounded-xl border border-border-low overflow-hidden text-sm">
                <div className="divide-y divide-border-low">
                  <div className="flex items-center justify-between gap-4 px-4 py-3">
                    <span className="text-txt-secondary font-medium shrink-0">{__("Tài liệu")}</span>
                    <span className="text-txt-primary font-medium text-right truncate" title={`${selectedDoc?.code} — ${selectedDoc?.title}`}>
                      {selectedDoc?.code} — {selectedDoc?.title}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4 px-4 py-3">
                    <span className="text-txt-secondary font-medium shrink-0">{__("Phiên bản")}</span>
                    <span className="text-txt-primary font-medium">{selectedVersion?.versionCode}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 px-4 py-3">
                    <span className="text-txt-secondary font-medium shrink-0">{__("File gốc")}</span>
                    <span className="text-txt-primary font-mono text-xs text-right truncate max-w-[220px]" title={selectedFile?.originalFileName}>
                      {selectedFile?.originalFileName}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4 px-4 py-3 bg-bg-alt">
                    <span className="text-txt-secondary font-medium shrink-0">{__("Chế độ bóc tách")}</span>
                    <Badge variant="info">{extractionMode}</Badge>
                  </div>
                </div>
              </div>

              {/* Inline error */}
              {rerunError && (
                <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-red-50 border border-red-200">
                  <span className="text-red-500 shrink-0 text-base leading-none mt-0.5">⚠</span>
                  <span className="text-sm text-red-700">{rerunError}</span>
                </div>
              )}
            </DialogContent>

            <DialogFooter exitLabel={__("Hủy")}>
              <Button
                onClick={() => doCreate("RE_EXTRACTION")}
                disabled={isCreating}
                icon={isCreating ? undefined : IconRotateCw}
              >
                {isCreating ? __("Đang tạo...") : __("Xác nhận chạy lại")}
              </Button>
            </DialogFooter>
          </Dialog>
        )}

        {/* PART 3 — Status strip */}
        <StatusStrip job={displayJob} onRefresh={loadJobs} />

        {/* PART 4 — Jobs table */}
        <Card>
          <div className="flex items-center justify-between px-4 py-3 border-b border-border-mid">
            <h3 className="text-sm font-semibold text-txt-primary">
              {__("Danh sách job bóc tách")}
              <span className="ml-2 text-xs font-normal text-txt-secondary">
                ({jobs.length})
              </span>
            </h3>
            <div className="flex items-center gap-3">
              {hasActiveJobs && (
                <span className="text-xs text-amber-600 animate-pulse">{__("Đang cập nhật tự động...")}</span>
              )}
            </div>
          </div>

          {jobsLoading && jobs.length === 0 ? (
            <div className="p-12 text-center text-txt-secondary text-sm">
              {__("Đang tải...")}
            </div>
          ) : tableJobs.length === 0 ? (
            <div className="p-12 text-center text-txt-secondary text-sm">
              {__("Chưa có job bóc tách nào.")}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-border-mid text-txt-secondary text-xs">
                    <th className="py-3 px-4 font-medium">{__("Mã job")}</th>
                    <th className="py-3 px-4 font-medium">{__("Tài liệu")}</th>
                    <th className="py-3 px-4 font-medium">{__("File gốc")}</th>
                    <th className="py-3 px-4 font-medium">{__("Loại")}</th>
                    <th className="py-3 px-4 font-medium">{__("Trạng thái")}</th>
                    <th className="py-3 px-4 font-medium">{__("Tiến độ")}</th>
                    <th className="py-3 px-4 font-medium">{__("Thời gian")}</th>
                    <th className="py-3 px-4 font-medium text-right">{__("Thao tác")}</th>
                  </tr>
                </thead>
                <tbody>
                  {tableJobs.map((job) => {
                    return (
                      <tr
                        key={job.id}
                        className="border-b border-border-mid hover:bg-tertiary-hover cursor-pointer transition-colors"
                        onClick={() => navigate(job.id)}
                      >
                        <td className="py-3 px-4 font-mono text-xs text-txt-primary">{job.jobCode}</td>
                        <td className="py-3 px-4 text-txt-primary max-w-[180px] truncate" title={`${job.document.code} — ${job.document.title}`}>
                          {job.document.code}
                        </td>
                        <td className="py-3 px-4 text-txt-secondary text-xs">{job.documentFile.originalFileName}</td>
                        <td className="py-3 px-4">
                          <span className="text-xs text-txt-secondary">
                            {job.jobType === "RE_EXTRACTION" ? "Chạy lại" : "Lần đầu"}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <Badge variant={statusVariant(job.status)}>{statusLabel(job.status)}</Badge>
                        </td>
                        <td className="py-3 px-4">
                          {(job.status === "RUNNING" || job.status === "QUEUED") ? (
                            <div className="flex items-center gap-2 w-24">
                              <div className="flex-1 bg-border-mid rounded-full h-1.5 overflow-hidden">
                                <div className="h-full bg-primary rounded-full" style={{ width: `${job.progressPercent}%` }} />
                              </div>
                              <span className="text-xs text-txt-secondary">{job.progressPercent}%</span>
                            </div>
                          ) : (
                            <span className="text-xs text-txt-secondary">
                              {job.status === "COMPLETED" ? "100%" : `${job.progressPercent}%`}
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-txt-secondary text-xs">{formatDate(job.createdAt)}</td>
                        <td className="py-3 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                          <button
                            className="text-xs text-red-600 hover:text-red-700 hover:underline px-1"
                            onClick={() => {
                              if (confirm(__("Bạn có chắc chắn muốn xóa job này không? Toàn bộ dữ liệu sẽ bị xóa."))) {
                                commitDelete({
                                  variables: { input: { id: job.id } },
                                  onCompleted: () => {
                                    toast({ title: __("Đã xóa job thành công"), description: "", variant: "success" });
                                    loadJobs();
                                  },
                                  onError: (err: Error) => {
                                    toast({ title: __("Lỗi khi xóa"), description: extractBackendError(err), variant: "error" });
                                  }
                                });
                              }
                            }}
                            disabled={isDeleting}
                          >
                            {__("Xóa")}
                          </button>
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
    </div>
  );
}

export default IcpmsIngestionJobsPage;
