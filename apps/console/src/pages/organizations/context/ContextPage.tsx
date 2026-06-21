// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.
//
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
// REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
// AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
// INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
// LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
// OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
// PERFORMANCE OF THIS SOFTWARE.

import { Card, Option, Select } from "@probo/ui";
import { useState } from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";

import type { ContextPageFragment$key } from "#/__generated__/core/ContextPageFragment.graphql";

const fragment = graphql`
  fragment ContextPageFragment on Organization {
    id
    canUpdateContext: permission(action: "core:organization-context:update")
    context {
      product
      architecture
      team
      processes
      customers
    }
  }
`;

type Props = {
  organization: ContextPageFragment$key;
};

// ─── KPI Card ────────────────────────────────────────────────────────────────

type KpiCardProps = {
  title: string;
  value: string;
  sub: string;
  accentColor: string;
};

function KpiCard({ title, value, sub, accentColor }: KpiCardProps) {
  return (
    <Card padded className="relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
        style={{ backgroundColor: accentColor }}
      />
      <div className="pl-3">
        <p className="text-xs text-txt-tertiary font-semibold uppercase tracking-wide leading-tight">
          {title}
        </p>
        <p className="text-3xl font-bold text-txt-primary mt-1 leading-none">{value}</p>
        <p className="text-xs text-txt-tertiary mt-1.5">{sub}</p>
      </div>
    </Card>
  );
}

// ─── Trend Chart (SVG area/line) ─────────────────────────────────────────────

const TREND_DAYS = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
const TREND_VALUES = [0, 0, 248, 500, 300, 180, 20];

function TrendChart() {
  const W = 340;
  const H = 120;
  const PAD_L = 8;
  const PAD_R = 8;
  const PAD_T = 8;
  const PAD_B = 22; // space for labels
  const chartW = W - PAD_L - PAD_R;
  const chartH = H - PAD_T - PAD_B;
  const maxVal = Math.max(...TREND_VALUES, 1);

  const pts = TREND_DAYS.map((day, i) => ({
    day,
    x: PAD_L + (i / (TREND_DAYS.length - 1)) * chartW,
    y: PAD_T + chartH - (TREND_VALUES[i] / maxVal) * chartH,
    val: TREND_VALUES[i],
  }));

  const linePoints = pts.map(p => `${p.x},${p.y}`).join(" ");
  const areaPath = [
    `M ${pts[0].x},${PAD_T + chartH}`,
    ...pts.map(p => `L ${p.x},${p.y}`),
    `L ${pts[pts.length - 1].x},${PAD_T + chartH}`,
    "Z",
  ].join(" ");

  return (
    <Card padded>
      <p className="text-sm font-semibold text-txt-primary mb-2">
        Xu hướng xử lý yêu cầu
      </p>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 110 }}>
        <defs>
          <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#trendFill)" />
        <polyline
          points={linePoints}
          fill="none"
          stroke="#6366f1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {pts.map(p => (
          <circle key={p.day} cx={p.x} cy={p.y} r="3" fill="#6366f1" />
        ))}
        {pts.map(p => (
          <text
            key={`lbl-${p.day}`}
            x={p.x}
            y={H - 4}
            textAnchor="middle"
            fontSize="9"
            fill="#94a3b8"
          >
            {p.day}
          </text>
        ))}
      </svg>
      <p className="text-xs text-txt-tertiary text-right -mt-1">7 ngày gần nhất</p>
    </Card>
  );
}

// ─── Donut Chart (SVG stroke technique) ──────────────────────────────────────

const STATUS_SEGMENTS = [
  { label: "Chưa xem xét", value: 892, color: "#94a3b8" },
  { label: "Đang xem xét", value: 248, color: "#6366f1" },
  { label: "Đã áp dụng", value: 78, color: "#22c55e" },
  { label: "Không áp dụng", value: 30, color: "#f59e0b" },
];
const STATUS_TOTAL = STATUS_SEGMENTS.reduce((s, d) => s + d.value, 0);
const DONUT_R = 40;
const DONUT_CIRC = 2 * Math.PI * DONUT_R;

function StatusDonutChart() {
  let cumulative = 0;
  const segments = STATUS_SEGMENTS.map(d => {
    const len = (d.value / STATUS_TOTAL) * DONUT_CIRC;
    const seg = { ...d, offset: cumulative, len };
    cumulative += len;
    return seg;
  });

  return (
    <Card padded>
      <p className="text-sm font-semibold text-txt-primary mb-3">Tình trạng yêu cầu</p>
      <div className="flex items-center gap-4">
        <svg viewBox="0 0 100 100" className="flex-shrink-0" style={{ width: 90, height: 90 }}>
          {segments.map(seg => (
            <circle
              key={seg.label}
              cx="50"
              cy="50"
              r={DONUT_R}
              fill="none"
              stroke={seg.color}
              strokeWidth="13"
              strokeDasharray={`${seg.len} ${DONUT_CIRC - seg.len}`}
              strokeDashoffset={-seg.offset}
              transform="rotate(-90 50 50)"
            />
          ))}
          <text
            x="50"
            y="46"
            textAnchor="middle"
            fontSize="12"
            fontWeight="700"
            fill="#1e293b"
          >
            {STATUS_TOTAL.toLocaleString("vi-VN")}
          </text>
          <text x="50" y="57" textAnchor="middle" fontSize="7" fill="#94a3b8">
            yêu cầu
          </text>
        </svg>
        <div className="space-y-2 flex-1 min-w-0">
          {STATUS_SEGMENTS.map(d => (
            <div key={d.label} className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 min-w-0">
                <div
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: d.color }}
                />
                <span className="text-xs text-txt-secondary truncate">{d.label}</span>
              </div>
              <span className="text-xs font-bold text-txt-primary flex-shrink-0">{d.value}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

// ─── Evidence Bar Chart (horizontal progress bars) ───────────────────────────

const EVIDENCE_BARS = [
  { label: "Chờ duyệt", value: 0, color: "#f59e0b" },
  { label: "Đã duyệt", value: 0, color: "#22c55e" },
  { label: "Từ chối", value: 0, color: "#ef4444" },
];

function EvidenceBarChart() {
  const maxVal = Math.max(...EVIDENCE_BARS.map(d => d.value), 1);
  return (
    <Card padded>
      <p className="text-sm font-semibold text-txt-primary mb-3">
        Bằng chứng theo trạng thái
      </p>
      <div className="space-y-4">
        {EVIDENCE_BARS.map(d => (
          <div key={d.label}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-txt-secondary">{d.label}</span>
              <span className="text-xs font-bold text-txt-primary">{d.value}</span>
            </div>
            <div className="h-2 bg-border-low rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(d.value / maxVal) * 100}%`,
                  backgroundColor: d.color,
                  minWidth: d.value > 0 ? "4px" : "0",
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-txt-tertiary text-center mt-5">Chưa có bằng chứng nào</p>
    </Card>
  );
}

// ─── Overdue Tasks Table ──────────────────────────────────────────────────────

function OverdueTasksTable() {
  return (
    <Card padded>
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold text-txt-primary">Việc quá hạn</p>
        <span
          className="text-xs font-semibold px-2 py-0.5 rounded-full"
          style={{ backgroundColor: "#fee2e2", color: "#dc2626" }}
        >
          0
        </span>
      </div>
      <div className="border border-border-low rounded-xl overflow-hidden">
        <div className="grid grid-cols-3 gap-2 px-4 py-2.5 bg-subtle">
          <span className="text-xs font-semibold text-txt-tertiary">Tên việc</span>
          <span className="text-xs font-semibold text-txt-tertiary">Hạn chót</span>
          <span className="text-xs font-semibold text-txt-tertiary">Phụ trách</span>
        </div>
        <div className="px-4 py-10 text-center">
          <p className="text-sm text-txt-tertiary">Không có việc quá hạn</p>
          <p className="text-xs text-txt-tertiary mt-1">Tất cả việc đang trong hạn</p>
        </div>
      </div>
    </Card>
  );
}

// ─── Pending Evidence Table ───────────────────────────────────────────────────

function PendingEvidenceTable() {
  return (
    <Card padded>
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold text-txt-primary">Bằng chứng chờ duyệt</p>
        <span
          className="text-xs font-semibold px-2 py-0.5 rounded-full"
          style={{ backgroundColor: "#fef3c7", color: "#d97706" }}
        >
          0
        </span>
      </div>
      <div className="border border-border-low rounded-xl overflow-hidden">
        <div className="grid grid-cols-3 gap-2 px-4 py-2.5 bg-subtle">
          <span className="text-xs font-semibold text-txt-tertiary">Tên bằng chứng</span>
          <span className="text-xs font-semibold text-txt-tertiary">Ngày nộp</span>
          <span className="text-xs font-semibold text-txt-tertiary">Trạng thái</span>
        </div>
        <div className="px-4 py-10 text-center">
          <p className="text-sm text-txt-tertiary">Không có bằng chứng chờ duyệt</p>
          <p className="text-xs text-txt-tertiary mt-1">Chưa có bằng chứng nào được nộp</p>
        </div>
      </div>
    </Card>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────

const KPI_ROW_1: KpiCardProps[] = [
  {
    title: "Tổng số tài liệu",
    value: "24",
    sub: "+3 so với kỳ trước",
    accentColor: "#6366f1",
  },
  {
    title: "Tổng số phiên bản",
    value: "47",
    sub: "+5 phiên bản mới",
    accentColor: "#8b5cf6",
  },
  {
    title: "Yêu cầu đã bóc tách",
    value: "1.248",
    sub: "Từ 5 tài liệu gốc",
    accentColor: "#22c55e",
  },
  {
    title: "Checklist",
    value: "0",
    sub: "Chưa có checklist",
    accentColor: "#f59e0b",
  },
];

const KPI_ROW_2: KpiCardProps[] = [
  {
    title: "Việc đã giao",
    value: "0",
    sub: "Chưa có việc nào",
    accentColor: "#06b6d4",
  },
  {
    title: "Việc quá hạn",
    value: "0",
    sub: "Không có việc quá hạn",
    accentColor: "#f43f5e",
  },
  {
    title: "Bằng chứng chờ duyệt",
    value: "0",
    sub: "Chưa có bằng chứng",
    accentColor: "#f97316",
  },
  {
    title: "Hoàn thành",
    value: "0%",
    sub: "Chưa có tiến độ",
    accentColor: "#14b8a6",
  },
];

export default function ContextPage(props: Props) {
  useFragment(fragment, props.organization);
  const [period, setPeriod] = useState<string>("month");

  return (
    <div className="space-y-5">
      {/* Subtitle + period filter */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-txt-tertiary">
          Số liệu tổng quan hệ thống VATM ICPMS
        </span>
        <Select<string> value={period} onValueChange={setPeriod}>
          <Option value="week">7 ngày qua</Option>
          <Option value="month">Tháng này</Option>
          <Option value="quarter">Quý này</Option>
          <Option value="year">Năm nay</Option>
        </Select>
      </div>

      {/* KPI Row 1 */}
      <div className="grid grid-cols-4 gap-4">
        {KPI_ROW_1.map(c => (
          <KpiCard key={c.title} {...c} />
        ))}
      </div>

      {/* KPI Row 2 */}
      <div className="grid grid-cols-4 gap-4">
        {KPI_ROW_2.map(c => (
          <KpiCard key={c.title} {...c} />
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-2">
          <TrendChart />
        </div>
        <div className="col-span-2">
          <StatusDonutChart />
        </div>
        <div className="col-span-1">
          <EvidenceBarChart />
        </div>
      </div>

      {/* Tables row */}
      <div className="grid grid-cols-2 gap-4">
        <OverdueTasksTable />
        <PendingEvidenceTable />
      </div>
    </div>
  );
}
