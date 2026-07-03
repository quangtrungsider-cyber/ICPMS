// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { formatDate } from "@probo/helpers";
import { useTranslate } from "@probo/i18n";
import {
  Badge,
  Button,
  IconChevronDown,
  IconArrowDown,
  IconMagnifyingGlass,
  PageHeader,
  Spinner,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@probo/ui";
import React, { useEffect, useMemo, useState } from "react";
import {
  graphql,
  useFragment,
  usePaginationFragment,
  useQueryLoader,
  usePreloadedQuery,
  type PreloadedQuery,
} from "react-relay";

import type { IcpmsNhatKyPageQuery } from "#/__generated__/iam/IcpmsNhatKyPageQuery.graphql";
import type { IcpmsNhatKyPageFragment$key } from "#/__generated__/iam/IcpmsNhatKyPageFragment.graphql";
import type { IcpmsNhatKyPageRefetchQuery } from "#/__generated__/iam/IcpmsNhatKyPageRefetchQuery.graphql";
import type { IcpmsNhatKyPageRowFragment$key } from "#/__generated__/iam/IcpmsNhatKyPageRowFragment.graphql";
import { useOrganizationId } from "#/hooks/useOrganizationId";
import { IAMRelayProvider } from "#/providers/IAMRelayProvider";

// ── GraphQL ───────────────────────────────────────────────────────────────────

const nhatKyPageQuery = graphql`
  query IcpmsNhatKyPageQuery($organizationId: ID!) {
    organization: node(id: $organizationId) @required(action: THROW) {
      __typename
      ... on Organization {
        profiles(first: 500, orderBy: { field: FULL_NAME, direction: ASC }) {
          edges {
            node {
              id
              fullName
              emailAddress
              identity {
                id
              }
            }
          }
        }
        ...IcpmsNhatKyPageFragment
      }
    }
  }
`;

const nhatKyPageFragment = graphql`
  fragment IcpmsNhatKyPageFragment on Organization
  @refetchable(queryName: "IcpmsNhatKyPageRefetchQuery")
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 50 }
    after: { type: "CursorKey" }
    action: { type: "String" }
    resourceType: { type: "String" }
  ) {
    auditLogEntries(
      first: $first
      after: $after
      filter: { action: $action, resourceType: $resourceType }
      orderBy: { field: CREATED_AT, direction: DESC }
    ) @connection(key: "IcpmsNhatKyPage_auditLogEntries") {
      edges {
        node {
          id
          ...IcpmsNhatKyPageRowFragment
        }
      }
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

const nhatKyRowFragment = graphql`
  fragment IcpmsNhatKyPageRowFragment on AuditLogEntry {
    id
    actorId
    actorType
    action
    resourceType
    resourceId
    metadata
    createdAt
  }
`;

// ── Types ─────────────────────────────────────────────────────────────────────

type Profile = { id: string; fullName: string; emailAddress: string };
type ProfileMap = Map<string, Profile>;

// ── Helpers ───────────────────────────────────────────────────────────────────

function actionColor(action: string): "success" | "danger" | "warning" | "neutral" | "info" {
  const parts = action.split(":");
  const verb = parts[parts.length - 1]?.toLowerCase() ?? "";
  if (["create", "upload", "import", "publish"].includes(verb)) return "success";
  if (["delete", "archive"].includes(verb)) return "danger";
  if (["update", "assign", "unassign", "approve"].includes(verb)) return "warning";
  if (["get", "list", "view"].includes(verb)) return "neutral";
  return "info";
}

function actorLabel(actorType: string, actorId: string, profileMap: ProfileMap): { name: string; sub: string } {
  if (actorType === "SYSTEM") return { name: "(Hệ thống)", sub: "system" };
  if (actorType === "API_KEY") return { name: "API Key", sub: actorId.slice(-8) };
  const p = profileMap.get(actorId);
  if (p) return { name: p.fullName, sub: p.emailAddress };
  return { name: actorId.slice(0, 20) + "…", sub: actorId.slice(-8) };
}

function toCSV(rows: Array<Record<string, string>>): string {
  if (rows.length === 0) return "";
  const headers = Object.keys(rows[0]);
  const escape = (v: string) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  return [
    headers.map(escape).join(","),
    ...rows.map(r => headers.map(h => escape(r[h])).join(",")),
  ].join("\r\n");
}

function downloadCSV(content: string, filename: string) {
  const bom = "﻿"; // UTF-8 BOM for Excel
  const blob = new Blob([bom + content], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// ── Row ───────────────────────────────────────────────────────────────────────

function NhatKyRow({
  entryKey,
  profileMap,
  onView,
}: {
  entryKey: IcpmsNhatKyPageRowFragment$key;
  profileMap: ProfileMap;
  onView: (entry: ReturnType<typeof useFragment<IcpmsNhatKyPageRowFragment$key>>) => void;
}) {
  const entry = useFragment(nhatKyRowFragment, entryKey);
  const actor = actorLabel(entry.actorType, entry.actorId, profileMap);

  return (
    <Tr>
      <Td>
        <span className="text-sm text-txt-secondary whitespace-nowrap">
          {formatDate(entry.createdAt)}
        </span>
      </Td>
      <Td>
        <div>
          <p className="text-sm font-semibold text-txt-primary">{actor.name}</p>
          <p className="text-xs text-txt-tertiary">{actor.sub}</p>
        </div>
      </Td>
      <Td>
        <Badge variant={actionColor(entry.action)} size="sm">
          {entry.action}
        </Badge>
      </Td>
      <Td>
        <div>
          <p className="text-sm text-txt-primary">{entry.resourceType || "—"}</p>
          <p className="text-xs text-txt-tertiary font-mono truncate max-w-40">{entry.resourceId || "—"}</p>
        </div>
      </Td>
      <Td>
        <Button variant="tertiary" size="sm" onClick={() => onView(entry)}>
          Xem
        </Button>
      </Td>
    </Tr>
  );
}

// ── Detail Drawer ─────────────────────────────────────────────────────────────

function DetailDrawer({
  entry,
  profileMap,
  onClose,
}: {
  entry: ReturnType<typeof useFragment<IcpmsNhatKyPageRowFragment$key>> | null;
  profileMap: ProfileMap;
  onClose: () => void;
}) {
  if (!entry) return null;
  const actor = actorLabel(entry.actorType, entry.actorId, profileMap);

  let metaParsed: Record<string, unknown> = {};
  try { metaParsed = JSON.parse(entry.metadata ?? "{}"); } catch {}

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      onClick={onClose}
    >
      <div
        className="w-[520px] h-full bg-level-1 shadow-2xl overflow-y-auto pt-16 px-6 pb-8 border-l border-border-solid"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-base font-semibold">Chi tiết nhật ký</h2>
          <button className="text-txt-tertiary hover:text-txt-primary text-xl leading-none" onClick={onClose}>✕</button>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl bg-level-0 border border-border-solid p-4 space-y-2">
            <Row label="Thời gian" value={formatDate(entry.createdAt)} />
            <Row label="Người dùng" value={`${actor.name} (${actor.sub})`} />
            <Row label="Loại actor" value={entry.actorType} />
            <Row label="Hành động">
              <Badge variant={actionColor(entry.action)} size="sm">{entry.action}</Badge>
            </Row>
            <Row label="Đối tượng" value={entry.resourceType} />
            <Row label="ID đối tượng" value={entry.resourceId} mono />
          </div>

          {Object.keys(metaParsed).length > 0 && (
            <div className="rounded-xl bg-level-0 border border-border-solid p-4">
              <p className="text-xs font-semibold text-txt-tertiary uppercase tracking-wider mb-2">Metadata</p>
              <pre className="text-xs text-txt-secondary whitespace-pre-wrap break-all">
                {JSON.stringify(metaParsed, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  mono,
  children,
}: {
  label: string;
  value?: string;
  mono?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex gap-3 text-sm">
      <span className="text-txt-tertiary min-w-32">{label}</span>
      {children ?? (
        <span className={`text-txt-primary break-all ${mono ? "font-mono text-xs" : ""}`}>
          {value || "—"}
        </span>
      )}
    </div>
  );
}

// ── Inner Page ────────────────────────────────────────────────────────────────

type EntryData = ReturnType<typeof useFragment<IcpmsNhatKyPageRowFragment$key>>;

function NhatKyInner({ queryRef }: { queryRef: PreloadedQuery<IcpmsNhatKyPageQuery> }) {
  const { __ } = useTranslate();
  const [actionFilter, setActionFilter] = useState("");
  const [activeAction, setActiveAction] = useState<string | undefined>();
  const [selectedEntry, setSelectedEntry] = useState<EntryData | null>(null);

  const data = usePreloadedQuery(nhatKyPageQuery, queryRef);
  if (data.organization.__typename === "%other") throw new Error("Not an org");

  // actorId in AuditLogEntry is an Identity GID — index by identity.id for lookup
  const profileMap = useMemo<ProfileMap>(() => {
    const map = new Map<string, Profile>();
    data.organization.profiles?.edges?.forEach(e => {
      if (e?.node) {
        const profile = { id: e.node.id, fullName: e.node.fullName, emailAddress: String(e.node.emailAddress ?? "") };
        if (e.node.identity?.id) map.set(e.node.identity.id, profile);
        map.set(e.node.id, profile);
      }
    });
    return map;
  }, [data.organization]);

  const { data: orgData, loadNext, hasNext, isLoadingNext, refetch } =
    usePaginationFragment<IcpmsNhatKyPageRefetchQuery, IcpmsNhatKyPageFragment$key>(
      nhatKyPageFragment,
      data.organization,
    );

  const entries = orgData.auditLogEntries?.edges?.map(e => e.node) ?? [];
  const totalCount = orgData.auditLogEntries?.totalCount ?? 0;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const a = actionFilter.trim() || undefined;
    setActiveAction(a);
    refetch({ action: a }, { fetchPolicy: "network-only" });
  };

  const handleExport = () => {
    const rows = entries.map(entry => {
      const e = entry as unknown as {
        actorId: string; actorType: string; action: string;
        resourceType: string; resourceId: string; createdAt: string;
      };
      const actor = actorLabel(e.actorType, e.actorId, profileMap);
      return {
        "Thời gian": formatDate(e.createdAt),
        "Người dùng": actor.name,
        "Email/ID": actor.sub,
        "Hành động": e.action,
        "Đối tượng": e.resourceType,
        "ID đối tượng": e.resourceId,
      };
    });
    const now = new Date().toISOString().slice(0, 16).replace("T", "_").replace(":", "");
    downloadCSV(toCSV(rows), `nhat-ky-hoat-dong_${now}.csv`);
  };

  return (
    <div className="space-y-6">
      <PageHeader title="Nhật ký hoạt động">
        <span className="text-sm text-txt-tertiary">
          Lịch sử toàn bộ thao tác trong hệ thống — không thể chỉnh sửa hay xoá
        </span>
      </PageHeader>

      {/* Filter + Export bar */}
      <div className="rounded-xl bg-level-1 border border-border-solid p-4 flex items-center gap-3 flex-wrap">
        <form onSubmit={handleSearch} className="flex items-center gap-2 flex-1 min-w-60">
          <div className="relative flex-1">
            <IconMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-txt-tertiary" />
            <input
              type="text"
              placeholder="Tìm theo hành động (iam:audit-log-entry:list, core:document:get…)"
              value={actionFilter}
              onChange={e => setActionFilter(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm bg-level-0 border border-border-solid rounded-lg outline-none focus:border-teal-500"
            />
          </div>
          <Button type="submit" variant="secondary" size="sm">Tìm</Button>
          {activeAction && (
            <Button
              variant="tertiary"
              size="sm"
              onClick={() => { setActionFilter(""); setActiveAction(undefined); refetch({}, { fetchPolicy: "network-only" }); }}
            >
              Xoá lọc
            </Button>
          )}
        </form>

        <div className="flex items-center gap-2 ml-auto">
          <span className="text-sm text-txt-tertiary">{totalCount} bản ghi</span>
          <Button
            variant="secondary"
            size="sm"
            icon={IconArrowDown}
            onClick={handleExport}
            disabled={entries.length === 0}
          >
            Xuất Excel
          </Button>
        </div>
      </div>

      {/* Table */}
      {entries.length === 0
        ? (
          <div className="rounded-xl bg-level-1 border border-border-solid py-16 text-center">
            <p className="text-sm text-txt-tertiary">Chưa có bản ghi nhật ký nào.</p>
          </div>
        )
        : (
          <div className="rounded-xl bg-level-1 border border-border-solid overflow-hidden">
            <Table>
              <Thead>
                <Tr>
                  <Th>Thời gian</Th>
                  <Th>Người dùng</Th>
                  <Th>Hành động</Th>
                  <Th>Đối tượng</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {entries.map(entry => (
                  <NhatKyRow
                    key={entry.id}
                    entryKey={entry}
                    profileMap={profileMap}
                    onView={e => setSelectedEntry(e)}
                  />
                ))}
              </Tbody>
            </Table>

            {hasNext && (
              <div className="p-4 flex justify-center border-t border-border-solid">
                <Button
                  variant="tertiary"
                  onClick={() => loadNext(50)}
                  disabled={isLoadingNext}
                  icon={isLoadingNext ? Spinner : IconChevronDown}
                >
                  Tải thêm 50 bản ghi
                </Button>
              </div>
            )}
          </div>
        )}

      {/* Detail drawer */}
      {selectedEntry && (
        <DetailDrawer
          entry={selectedEntry}
          profileMap={profileMap}
          onClose={() => setSelectedEntry(null)}
        />
      )}
    </div>
  );
}

// ── Loader wrapper ────────────────────────────────────────────────────────────

function NhatKyLoader() {
  const organizationId = useOrganizationId();
  const [queryRef, loadQuery] = useQueryLoader<IcpmsNhatKyPageQuery>(nhatKyPageQuery);

  useEffect(() => {
    loadQuery({ organizationId });
  }, [loadQuery, organizationId]);

  if (!queryRef) return null;

  return <NhatKyInner queryRef={queryRef} />;
}

export default function IcpmsNhatKyPage() {
  return (
    <IAMRelayProvider>
      <NhatKyLoader />
    </IAMRelayProvider>
  );
}
