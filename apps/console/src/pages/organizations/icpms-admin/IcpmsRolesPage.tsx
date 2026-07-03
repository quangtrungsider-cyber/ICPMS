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

import { useToast } from "@probo/ui";
import { use, useState } from "react";

import { CurrentUser } from "#/providers/CurrentUser";
import { useOrganizationId } from "#/hooks/useOrganizationId";
import {
  DEFAULT_PERMISSIONS,
  MODULE_SUPPORTED_ACTIONS,
  type IcpmsAction,
  type IcpmsModule,
  type IcpmsRole,
  type IcpmsScope,
  type PermissionMatrix,
  type RoleModulePermission,
  loadPermissions,
  savePermissions,
} from "#/hooks/useIcpmsPermissions";

// ─── Constants ────────────────────────────────────────────────────────────────

const MODULES: { key: IcpmsModule; label: string; abbr: string }[] = [
  { key: "dashboard",    label: "Tổng quan",           abbr: "dash" },
  { key: "documents",    label: "Tài liệu",            abbr: "docs" },
  { key: "ingestion",    label: "Bóc tách",            abbr: "ingest" },
  { key: "requirements", label: "Yêu cầu",             abbr: "req" },
  { key: "ai-review",    label: "AI Review",           abbr: "ai" },
  { key: "checklist",    label: "Checklist",           abbr: "chk" },
  { key: "assignments",  label: "Giao việc",           abbr: "assign" },
  { key: "evidence",     label: "Bằng chứng",          abbr: "evid" },
  { key: "risks",        label: "Rủi ro",              abbr: "risk" },
  { key: "audits",       label: "Kiểm tra",            abbr: "audit" },
  { key: "reports",      label: "Báo cáo",             abbr: "rpt" },
  { key: "search",       label: "Tra cứu",             abbr: "search" },
  { key: "people",       label: "Người dùng",          abbr: "users" },
  { key: "roles",        label: "Phân quyền",          abbr: "roles" },
  { key: "nhat-ky",      label: "Nhật ký",             abbr: "log" },
  { key: "settings",     label: "Cấu hình",            abbr: "cfg" },
];

const ROLES: { key: IcpmsRole; label: string; subLabel: string }[] = [
  { key: "OWNER",    label: "Admin hệ thống",  subLabel: "OWNER" },
  { key: "ADMIN",    label: "Quản lý",          subLabel: "ADMIN" },
  { key: "VIEWER",   label: "Xem xét",          subLabel: "VIEWER" },
  { key: "EMPLOYEE", label: "Nhân viên",        subLabel: "EMPLOYEE" },
  { key: "AUDITOR",  label: "Kiểm toán",        subLabel: "AUDITOR" },
];

const ACTIONS: { key: IcpmsAction; label: string }[] = [
  { key: "view",    label: "VIEW" },
  { key: "create",  label: "CREATE" },
  { key: "update",  label: "UPDATE" },
  { key: "delete",  label: "DELETE" },
  { key: "approve", label: "APPROVE" },
  { key: "export",  label: "EXPORT" },
];

const SCOPES: { key: IcpmsScope; label: string }[] = [
  { key: "all",         label: "all" },
  { key: "self",        label: "self" },
  { key: "orgSubtree",  label: "orgSubtree" },
];

// Modules that OWNER always has full access — prevent accidental lockout
const OWNER_LOCKED: IcpmsModule[] = ["people", "roles", "nhat-ky", "settings"];

// ─── Sub-components ───────────────────────────────────────────────────────────

function Checkbox({
  checked,
  onChange,
  disabled,
}: {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}) {
  return (
    <input
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={e => !disabled && onChange()}
      style={{ accentColor: "#0d9488", width: 18, height: 18, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1 }}
    />
  );
}

function ScopeSelect({
  value,
  onChange,
  disabled,
}: {
  value: IcpmsScope;
  onChange: (v: IcpmsScope) => void;
  disabled?: boolean;
}) {
  return (
    <select
      value={value}
      disabled={disabled}
      onChange={e => onChange(e.target.value as IcpmsScope)}
      className={[
        "text-xs border rounded px-2 py-1 bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600",
        disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer",
      ].join(" ")}
    >
      {SCOPES.map(s => (
        <option key={s.key} value={s.key}>{s.label}</option>
      ))}
    </select>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export function IcpmsRolesPage() {
  const { role: currentRole } = use(CurrentUser);
  const organizationId = useOrganizationId();
  const { toast } = useToast();
  const isOwner = currentRole === "OWNER";

  const [activeModule, setActiveModule] = useState<IcpmsModule>("dashboard");
  const [matrix, setMatrix] = useState<PermissionMatrix>(() => loadPermissions(organizationId));

  // Track which roles have unsaved changes for the current module
  const [dirtyRoles, setDirtyRoles] = useState<Set<IcpmsRole>>(new Set());

  const handleTabChange = (mod: IcpmsModule) => {
    setActiveModule(mod);
    setDirtyRoles(new Set());
  };

  const updateAction = (role: IcpmsRole, action: IcpmsAction, value: boolean) => {
    if (!MODULE_SUPPORTED_ACTIONS[activeModule].includes(action)) return;
    setMatrix(prev => ({
      ...prev,
      [activeModule]: {
        ...prev[activeModule],
        [role]: {
          ...prev[activeModule][role],
          actions: { ...prev[activeModule][role].actions, [action]: value },
        },
      },
    }));
    setDirtyRoles(prev => new Set(prev).add(role));
  };

  const updateScope = (role: IcpmsRole, scope: IcpmsScope) => {
    setMatrix(prev => ({
      ...prev,
      [activeModule]: {
        ...prev[activeModule],
        [role]: { ...prev[activeModule][role], scope },
      },
    }));
    setDirtyRoles(prev => new Set(prev).add(role));
  };

  const handleSaveRole = (role: IcpmsRole) => {
    savePermissions(organizationId, matrix);
    setDirtyRoles(prev => {
      const next = new Set(prev);
      next.delete(role);
      return next;
    });
    toast({ title: `Đã lưu quyền cho ${ROLES.find(r => r.key === role)?.label ?? role}`, variant: "success" });
  };

  const handleResetAll = () => {
    setMatrix(DEFAULT_PERMISSIONS);
    savePermissions(organizationId, DEFAULT_PERMISSIONS);
    setDirtyRoles(new Set());
    toast({ title: "Đã đặt lại phân quyền về mặc định", variant: "success" });
  };

  const currentMod = MODULES.find(m => m.key === activeModule)!;
  const supportedActions = MODULE_SUPPORTED_ACTIONS[activeModule];

  return (
    <div className="space-y-0">
      {/* ── Page header ── */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h1 className="text-xl font-bold text-txt-primary">Roles &amp; Permission Manager</h1>
          <p className="text-sm text-txt-tertiary mt-0.5">
            RBAC chuẩn enterprise: cấu hình theo module → hành động (View/Create/Update/Approve/Export...)
          </p>
        </div>
        {isOwner && (
          <button
            type="button"
            onClick={handleResetAll}
            className="text-xs border border-slate-300 rounded px-3 py-1.5 text-txt-secondary hover:bg-surface-1 transition-colors"
          >
            Đặt lại mặc định
          </button>
        )}
      </div>

      {/* ── Module tabs ── */}
      <div className="border-b border-mid overflow-x-auto">
        <div className="flex min-w-max">
          {MODULES.map(mod => (
            <button
              key={mod.key}
              type="button"
              onClick={() => handleTabChange(mod.key)}
              className={[
                "px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors",
                activeModule === mod.key
                  ? "border-teal-600 text-teal-700 dark:text-teal-400"
                  : "border-transparent text-txt-secondary hover:text-txt-primary hover:border-slate-300",
              ].join(" ")}
            >
              {mod.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Instruction ── */}
      <div className="py-3 text-sm text-txt-secondary">
        Module hiện tại:{" "}
        <code className="bg-surface-1 border border-mid rounded px-1.5 py-0.5 text-xs font-mono text-txt-primary">
          {currentMod.abbr}
        </code>
        . Tick quyền → bấm <strong>Save</strong> theo từng role.
      </div>

      {!isOwner && (
        <div className="rounded border border-amber-200 bg-amber-50 px-4 py-2.5 text-sm text-amber-800 mb-3">
          Chỉ Admin hệ thống (OWNER) mới có thể chỉnh sửa phân quyền.
        </div>
      )}

      {/* ── Permission table ── */}
      <div className="rounded-lg border border-mid overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-teal-700 text-white">
                <th className="text-left px-4 py-3 font-semibold w-48">ROLE</th>
                <th className="text-left px-4 py-3 font-semibold w-32">SCOPE</th>
                {ACTIONS.map(a => (
                  <th key={a.key} className="px-3 py-3 font-semibold text-center w-20">
                    {a.label}
                  </th>
                ))}
                <th className="px-4 py-3 font-semibold text-center w-20">SAVE</th>
              </tr>
            </thead>
            <tbody>
              {ROLES.map((role, i) => {
                const perm: RoleModulePermission = matrix[activeModule][role.key];
                const isLocked = role.key === "OWNER" && OWNER_LOCKED.includes(activeModule);
                const isDirty = dirtyRoles.has(role.key);
                const rowBg = i % 2 === 0 ? "bg-white dark:bg-transparent" : "bg-slate-50 dark:bg-slate-800/30";

                return (
                  <tr key={role.key} className={rowBg}>
                    {/* Role name */}
                    <td className="px-4 py-3">
                      <div className="font-semibold text-txt-primary">{role.label}</div>
                      <div className="text-xs text-txt-tertiary mt-0.5">{role.subLabel}</div>
                    </td>

                    {/* Scope */}
                    <td className="px-4 py-3">
                      <ScopeSelect
                        value={perm.scope}
                        onChange={scope => updateScope(role.key, scope)}
                        disabled={!isOwner || isLocked}
                      />
                    </td>

                    {/* Action checkboxes */}
                    {ACTIONS.map(action => {
                      const isSupported = supportedActions.includes(action.key);
                      return (
                        <td key={action.key} className="px-3 py-3 text-center">
                          {isSupported ? (
                            <div className="flex justify-center">
                              <Checkbox
                                checked={perm.actions[action.key]}
                                onChange={() => updateAction(role.key, action.key, !perm.actions[action.key])}
                                disabled={!isOwner || isLocked}
                              />
                            </div>
                          ) : (
                            <span style={{ color: "#d1d5db", fontSize: 16, userSelect: "none" }}>—</span>
                          )}
                        </td>
                      );
                    })}

                    {/* Save button */}
                    <td className="px-4 py-3 text-center">
                      <button
                        type="button"
                        disabled={!isOwner || !isDirty}
                        onClick={() => handleSaveRole(role.key)}
                        className={[
                          "px-3 py-1.5 rounded text-sm font-medium transition-colors",
                          isOwner && isDirty
                            ? "bg-teal-600 text-white hover:bg-teal-700"
                            : "bg-slate-200 text-slate-400 dark:bg-slate-700 dark:text-slate-500 cursor-not-allowed",
                        ].join(" ")}
                      >
                        Save
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-xs text-txt-tertiary pt-2">
        * Thay đổi phân quyền có hiệu lực ngay sau khi lưu. Phân quyền lưu cục bộ theo trình duyệt.
      </p>
    </div>
  );
}
