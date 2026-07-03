// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { fetchQuery, graphql, useRelayEnvironment } from "react-relay";
import { useOrganizationId } from "#/hooks/useOrganizationId";
import { usePageTitle } from "@probo/hooks";
import { useTranslate } from "@probo/i18n";

// ─── GraphQL ─────────────────────────────────────────────────────────────────

const docsQuery = graphql`
  query IcpmsDashboardPageDocsQuery($organizationId: ID!) {
    organization: node(id: $organizationId) {
      ... on Organization {
        icpmsDocuments {
          edges {
            node {
              id
              code
              title
              documentType
              status
              versions { edges { node { id } } }
            }
          }
        }
      }
    }
  }
`;

const ingestionJobsQuery = graphql`
  query IcpmsDashboardPageIngestionJobsQuery($organizationId: ID!) {
    ingestionJobs(organizationId: $organizationId) {
      edges {
        node {
          id
          jobCode
          status
          jobType
          createdAt
          document { code title }
        }
      }
    }
  }
`;

const aiReviewJobsQuery = graphql`
  query IcpmsDashboardPageAiReviewJobsQuery($organizationId: ID!) {
    icpmsAiReviewJobs(organizationId: $organizationId) {
      edges {
        node {
          id
          jobCode
          status
          totalRequirements
          totalSuggestions
          totalAccepted
          totalRejected
          createdAt
          document { code title }
          documentVersion { versionCode }
        }
      }
    }
  }
`;

// ─── Types ───────────────────────────────────────────────────────────────────

interface IcpmsDoc {
  id: string; code: string; title: string; documentType: string; status: string;
  versions: { edges: { node: { id: string } }[] };
}
interface IngestionJob {
  id: string; jobCode: string; status: string; jobType: string; createdAt: string;
  document: { code: string; title: string };
}
interface AiReviewJob {
  id: string; jobCode: string; status: string;
  totalRequirements: number; totalSuggestions: number;
  totalAccepted: number; totalRejected: number;
  createdAt: string;
  document: { code: string; title: string };
  documentVersion: { versionCode: string };
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const JOB_STATUS_VI: Record<string, string> = {
  QUEUED: "Chờ xử lý", RUNNING: "Đang chạy",
  COMPLETED: "Hoàn thành", FAILED: "Thất bại",
  PARTIAL: "Một phần", CANCELLED: "Đã huỷ",
};
const JOB_STATUS_COLOR: Record<string, string> = {
  QUEUED: "#6366f1", RUNNING: "#f59e0b",
  COMPLETED: "#10b981", FAILED: "#ef4444",
  PARTIAL: "#f97316", CANCELLED: "#6b7280",
};
const AI_JOB_STATUS_VI: Record<string, string> = {
  PENDING: "Chờ xử lý", RUNNING: "Đang chạy",
  COMPLETED: "Hoàn thành", FAILED: "Thất bại",
};

function fmtDate(iso: string) {
  if (!iso) return "—";
  const d = new Date(iso);
  return `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")} ${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1).toString().padStart(2, "0")}/${d.getFullYear()}`;
}

function pct(n: number, total: number) {
  if (!total) return 0;
  return Math.round((n / total) * 100);
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function StatCard({
  label, value, sub, color, onClick,
}: {
  label: string; value: string | number; sub?: string;
  color?: string; onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl border border-border-mid px-5 py-4 flex flex-col gap-1 ${onClick ? "cursor-pointer hover:border-primary/40 transition-all" : ""}`}
    >
      <p className="text-xs text-txt-secondary font-medium">{label}</p>
      <p className="text-3xl font-bold tabular-nums" style={{ color: color ?? "#1a4fa0" }}>{value}</p>
      {sub && <p className="text-[11px] text-txt-tertiary">{sub}</p>}
    </div>
  );
}

function SectionHead({ title, note }: { title: string; note?: string }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-sm font-semibold text-txt-primary">{title}</h3>
      {note && <span className="text-[11px] text-txt-tertiary">{note}</span>}
    </div>
  );
}

function BarSegment({ label, value, total, color }: { label: string; value: number; total: number; color: string }) {
  const w = total ? Math.max(2, Math.round((value / total) * 100)) : 0;
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-txt-secondary w-24 shrink-0 truncate">{label}</span>
      <div className="flex-1 h-5 bg-gray-100 rounded overflow-hidden">
        <div className="h-full rounded flex items-center pl-2 transition-all duration-500" style={{ width: `${w}%`, background: color }}>
          {value > 0 && <span className="text-white text-[10px] font-semibold">{value}</span>}
        </div>
      </div>
      <span className="text-xs text-txt-tertiary tabular-nums w-6 text-right">{value}</span>
    </div>
  );
}

function DonutChart({ segments, size = 120 }: {
  segments: { label: string; value: number; color: string }[];
  size?: number;
}) {
  const total = segments.reduce((s, x) => s + x.value, 0);
  const r = 44; const cx = 60; const cy = 60;
  let offset = 0;
  const slices = segments.map(seg => {
    const p = total ? seg.value / total : 0;
    const dash = p * 2 * Math.PI * r;
    const gap = 2 * Math.PI * r - dash;
    const rotation = offset * 360;
    offset += p;
    return { ...seg, dash, gap, rotation };
  });
  return (
    <div className="flex items-center gap-4">
      <svg width={size} height={size} viewBox="0 0 120 120">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f3f4f6" strokeWidth="16" />
        {total === 0 ? (
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#e5e7eb" strokeWidth="16" />
        ) : (
          slices.map((s, i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="none"
              stroke={s.color} strokeWidth="16"
              strokeDasharray={`${s.dash} ${s.gap}`}
              transform={`rotate(${s.rotation - 90} ${cx} ${cy})`}
            />
          ))
        )}
        <text x={cx} y={cy - 6} textAnchor="middle" style={{ fontSize: 18, fontWeight: 700, fill: "#1a4fa0" }}>{total}</text>
        <text x={cx} y={cy + 12} textAnchor="middle" style={{ fontSize: 10, fill: "#9ca3af" }}>tổng</text>
      </svg>
      <div className="space-y-1.5">
        {segments.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: s.color }} />
            <span className="text-xs text-txt-secondary">{s.label}</span>
            <span className="text-xs font-semibold text-txt-primary tabular-nums ml-1">{s.value}</span>
            <span className="text-[10px] text-txt-tertiary">({pct(s.value, total)}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const QUICK_LINKS = [
  { icon: "📄", label: "Tài liệu", path: "icpms-documents", desc: "Quản lý văn bản pháp lý" },
  { icon: "🔬", label: "Bóc tách", path: "ingestion-jobs", desc: "Job OCR & trích xuất" },
  { icon: "📋", label: "Yêu cầu", path: "requirements", desc: "Điều khoản yêu cầu" },
  { icon: "🤖", label: "AI Review", path: "ai-review", desc: "Rà soát & gợi ý AI" },
  { icon: "✅", label: "Checklist", path: "checklist", desc: "Tuân thủ checklist" },
  { icon: "👥", label: "Giao việc", path: "assignments", desc: "Phân công nhiệm vụ" },
  { icon: "📎", label: "Bằng chứng", path: "evidence", desc: "Hồ sơ minh chứng" },
];

// ─── Main page ────────────────────────────────────────────────────────────────

export function IcpmsDashboardPage() {
  const { __ } = useTranslate();
  const env = useRelayEnvironment();
  const organizationId = useOrganizationId();
  const navigate = useNavigate();
  usePageTitle("Tổng quan ICPMS");

  const [docs, setDocs] = useState<IcpmsDoc[]>([]);
  const [ingestionJobs, setIngestionJobs] = useState<IngestionJob[]>([]);
  const [aiJobs, setAiJobs] = useState<AiReviewJob[]>([]);
  const [loading, setLoading] = useState(true);

  const prefix = `/organizations/${organizationId}`;

  const loadAll = useCallback(() => {
    setLoading(true);
    Promise.all([
      (fetchQuery(env, docsQuery as any, { organizationId }, { networkCacheConfig: { force: true } }) as any).toPromise(),
      (fetchQuery(env, ingestionJobsQuery as any, { organizationId }, { networkCacheConfig: { force: true } }) as any).toPromise(),
      (fetchQuery(env, aiReviewJobsQuery as any, { organizationId }, { networkCacheConfig: { force: true } }) as any).toPromise(),
    ]).then(([d, i, a]: any[]) => {
      setDocs((d?.organization?.icpmsDocuments?.edges ?? []).map((e: any) => e.node));
      setIngestionJobs((i?.ingestionJobs?.edges ?? []).map((e: any) => e.node));
      setAiJobs((a?.icpmsAiReviewJobs?.edges ?? []).map((e: any) => e.node));
    }).finally(() => setLoading(false));
  }, [env, organizationId]);

  useEffect(() => { loadAll(); }, [loadAll]);

  // ── Aggregations ──────────────────────────────────────────────────────────

  const ingestionByStatus = useMemo(() => {
    const m: Record<string, number> = {};
    for (const j of ingestionJobs) m[j.status] = (m[j.status] ?? 0) + 1;
    return m;
  }, [ingestionJobs]);

  const totalSuggestions = useMemo(() => aiJobs.reduce((s, j) => s + (j.totalSuggestions ?? 0), 0), [aiJobs]);
  const totalAccepted    = useMemo(() => aiJobs.reduce((s, j) => s + (j.totalAccepted ?? 0), 0), [aiJobs]);
  const totalRejected    = useMemo(() => aiJobs.reduce((s, j) => s + (j.totalRejected ?? 0), 0), [aiJobs]);
  const totalPending     = totalSuggestions - totalAccepted - totalRejected;
  const acceptRate       = pct(totalAccepted, totalSuggestions);

  const recentAiJobs = useMemo(
    () => [...aiJobs].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 6),
    [aiJobs],
  );

  const completedIngestion = ingestionByStatus["COMPLETED"] ?? 0;
  const failedIngestion    = ingestionByStatus["FAILED"] ?? 0;
  const runningIngestion   = (ingestionByStatus["RUNNING"] ?? 0) + (ingestionByStatus["QUEUED"] ?? 0);

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="space-y-6 pb-10">
      {/* ── Header ── */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-txt-primary">Tổng quan ICPMS</h1>
          <p className="text-xs text-txt-tertiary mt-0.5">
            Tổng Công ty Quản lý bay Việt Nam · Hệ thống quản lý tuân thủ ICPMS
          </p>
        </div>
        <button
          onClick={loadAll}
          disabled={loading}
          className="text-xs text-primary hover:underline disabled:opacity-50"
        >
          {loading ? "Đang tải..." : "↺ Làm mới"}
        </button>
      </div>

      {/* ── KPI cards ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <StatCard
          label="Tài liệu"
          value={loading ? "—" : docs.length}
          sub={`${docs.reduce((s, d) => s + (d.versions?.edges?.length ?? 0), 0)} phiên bản`}
          color="#1a4fa0"
          onClick={() => navigate(`${prefix}/icpms-documents`)}
        />
        <StatCard
          label="Job bóc tách"
          value={loading ? "—" : ingestionJobs.length}
          sub={`${completedIngestion} hoàn thành · ${failedIngestion} lỗi`}
          color="#7c3aed"
          onClick={() => navigate(`${prefix}/ingestion-jobs`)}
        />
        <StatCard
          label="Phiên AI Review"
          value={loading ? "—" : aiJobs.length}
          sub={`${aiJobs.filter(j => j.status === "COMPLETED").length} hoàn thành`}
          color="#0891b2"
          onClick={() => navigate(`${prefix}/ai-review`)}
        />
        <StatCard
          label="Gợi ý AI"
          value={loading ? "—" : totalSuggestions}
          sub={`${aiJobs.reduce((s, j) => s + (j.totalRequirements ?? 0), 0)} yêu cầu`}
          color="#059669"
          onClick={() => navigate(`${prefix}/ai-review`)}
        />
        <StatCard
          label="Đã duyệt"
          value={loading ? "—" : totalAccepted}
          sub={`${totalRejected} từ chối · ${totalPending > 0 ? totalPending : 0} chờ`}
          color="#10b981"
          onClick={() => navigate(`${prefix}/checklist`)}
        />
        <StatCard
          label="Tỷ lệ duyệt"
          value={loading ? "—" : `${acceptRate}%`}
          sub={totalSuggestions > 0 ? `${totalAccepted}/${totalSuggestions} gợi ý` : "Chưa có dữ liệu"}
          color={acceptRate >= 70 ? "#10b981" : acceptRate >= 40 ? "#f59e0b" : "#ef4444"}
        />
      </div>

      {/* ── Charts row ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Ingestion jobs by status */}
        <div className="bg-white rounded-xl border border-border-mid p-5">
          <SectionHead title="Job bóc tách theo trạng thái" note={`${ingestionJobs.length} tổng`} />
          {loading ? (
            <div className="h-32 flex items-center justify-center text-sm text-txt-tertiary">Đang tải...</div>
          ) : ingestionJobs.length === 0 ? (
            <div className="h-32 flex items-center justify-center text-sm text-txt-tertiary italic">Chưa có job nào</div>
          ) : (
            <div className="space-y-2.5 mt-2">
              {Object.entries(ingestionByStatus)
                .sort((a, b) => b[1] - a[1])
                .map(([status, count]) => (
                  <BarSegment
                    key={status}
                    label={JOB_STATUS_VI[status] ?? status}
                    value={count}
                    total={ingestionJobs.length}
                    color={JOB_STATUS_COLOR[status] ?? "#6b7280"}
                  />
                ))}
            </div>
          )}
          {!loading && runningIngestion > 0 && (
            <div className="mt-3 flex items-center gap-1.5 text-[11px] text-amber-600 bg-amber-50 rounded-lg px-3 py-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              {runningIngestion} job đang xử lý
            </div>
          )}
        </div>

        {/* AI suggestions donut */}
        <div className="bg-white rounded-xl border border-border-mid p-5">
          <SectionHead title="Gợi ý AI theo trạng thái" note={`${aiJobs.length} phiên`} />
          {loading ? (
            <div className="h-32 flex items-center justify-center text-sm text-txt-tertiary">Đang tải...</div>
          ) : totalSuggestions === 0 ? (
            <div className="h-32 flex items-center justify-center text-sm text-txt-tertiary italic">Chưa có gợi ý nào</div>
          ) : (
            <DonutChart
              segments={[
                { label: "Đã duyệt", value: totalAccepted, color: "#10b981" },
                { label: "Từ chối",  value: totalRejected, color: "#ef4444" },
                { label: "Chờ duyệt", value: Math.max(0, totalPending), color: "#6366f1" },
              ]}
            />
          )}
          {!loading && totalSuggestions > 0 && (
            <div className="mt-4 h-2 rounded-full bg-gray-100 overflow-hidden flex">
              <div className="h-full bg-emerald-500 transition-all" style={{ width: `${pct(totalAccepted, totalSuggestions)}%` }} />
              <div className="h-full bg-red-400 transition-all"    style={{ width: `${pct(totalRejected, totalSuggestions)}%` }} />
              <div className="h-full bg-indigo-400 transition-all" style={{ width: `${pct(Math.max(0, totalPending), totalSuggestions)}%` }} />
            </div>
          )}
        </div>
      </div>

      {/* ── Feed + Quick links ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent AI Review jobs */}
        <div className="bg-white rounded-xl border border-border-mid p-5">
          <SectionHead title="Phiên AI Review gần nhất" note="6 phiên mới nhất" />
          {loading ? (
            <div className="py-8 text-center text-sm text-txt-tertiary">Đang tải...</div>
          ) : recentAiJobs.length === 0 ? (
            <div className="py-8 text-center text-sm text-txt-tertiary italic">Chưa có phiên rà soát nào</div>
          ) : (
            <div className="divide-y divide-border-low">
              {recentAiJobs.map(job => {
                const rate = pct(job.totalAccepted, job.totalSuggestions);
                return (
                  <div
                    key={job.id}
                    className="py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50 -mx-2 px-2 rounded-lg transition-colors"
                    onClick={() => navigate(`${prefix}/ai-review`)}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] text-txt-tertiary">{job.jobCode}</span>
                        <span
                          className="text-[10px] font-medium px-1.5 py-0.5 rounded-full"
                          style={{
                            background: JOB_STATUS_COLOR[job.status] ? `${JOB_STATUS_COLOR[job.status]}20` : "#f3f4f6",
                            color: JOB_STATUS_COLOR[job.status] ?? "#6b7280",
                          }}
                        >
                          {AI_JOB_STATUS_VI[job.status] ?? job.status}
                        </span>
                      </div>
                      <p className="text-xs text-txt-primary font-medium truncate mt-0.5">
                        {job.document.code} · v{job.documentVersion?.versionCode}
                      </p>
                      <p className="text-[11px] text-txt-tertiary">{fmtDate(job.createdAt)}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs font-semibold text-txt-primary">{job.totalSuggestions} gợi ý</p>
                      <p className="text-[11px] text-emerald-600">{job.totalAccepted} ✓ · {job.totalRejected} ✗</p>
                      {job.totalSuggestions > 0 && (
                        <div className="w-16 h-1 bg-gray-100 rounded-full overflow-hidden mt-1">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${rate}%` }} />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Quick links */}
        <div className="bg-white rounded-xl border border-border-mid p-5">
          <SectionHead title="Truy cập nhanh" note="Các module ICPMS" />
          <div className="grid grid-cols-2 gap-2">
            {QUICK_LINKS.map(m => (
              <button
                key={m.path}
                onClick={() => navigate(`${prefix}/${m.path}`)}
                className="flex items-center gap-3 p-3 rounded-lg border border-border-low hover:border-primary/40 hover:bg-blue-50/50 transition-all text-left group"
              >
                <span className="text-xl">{m.icon}</span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-txt-primary group-hover:text-primary">{m.label}</p>
                  <p className="text-[10px] text-txt-tertiary truncate">{m.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats table ── */}
      <div className="bg-white rounded-xl border border-border-mid p-5">
        <SectionHead title="Thống kê hệ thống" />
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border-low">
                <th className="text-left py-2 pr-4 text-txt-tertiary font-medium w-48">Chỉ số</th>
                <th className="text-left py-2 text-txt-tertiary font-medium">Giá trị</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-low">
              {[
                { label: "Tổng tài liệu", value: loading ? "—" : `${docs.length} tài liệu · ${docs.reduce((s, d) => s + (d.versions?.edges?.length ?? 0), 0)} phiên bản` },
                { label: "Job bóc tách hoàn thành", value: loading ? "—" : `${completedIngestion} / ${ingestionJobs.length}` },
                { label: "Job bóc tách thất bại", value: loading ? "—" : String(failedIngestion) },
                { label: "Phiên AI Review", value: loading ? "—" : String(aiJobs.length) },
                { label: "Tổng gợi ý AI", value: loading ? "—" : String(totalSuggestions) },
                { label: "Tổng yêu cầu (từ AI)", value: loading ? "—" : String(aiJobs.reduce((s, j) => s + (j.totalRequirements ?? 0), 0)) },
                { label: "Tỷ lệ duyệt", value: loading ? "—" : `${acceptRate}% (${totalAccepted} / ${totalSuggestions})` },
                { label: "Chưa xử lý", value: loading ? "—" : String(Math.max(0, totalPending)) },
              ].map(row => (
                <tr key={row.label}>
                  <td className="py-2 pr-4 text-txt-secondary">{row.label}</td>
                  <td className="py-2 text-txt-primary font-medium">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
