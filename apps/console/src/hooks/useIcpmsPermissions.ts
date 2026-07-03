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

export type IcpmsRole = "OWNER" | "ADMIN" | "VIEWER" | "EMPLOYEE" | "AUDITOR";

export type IcpmsModule =
  | "dashboard"
  | "documents"
  | "ingestion"
  | "requirements"
  | "ai-review"
  | "checklist"
  | "assignments"
  | "evidence"
  | "risks"
  | "audits"
  | "reports"
  | "search"
  | "people"
  | "roles"
  | "nhat-ky"
  | "settings";

export type IcpmsAction = "view" | "create" | "update" | "delete" | "approve" | "export";
export type IcpmsScope = "all" | "self" | "orgSubtree";

export type RoleModulePermission = {
  scope: IcpmsScope;
  actions: Record<IcpmsAction, boolean>;
};

export type PermissionMatrix = Record<IcpmsModule, Record<IcpmsRole, RoleModulePermission>>;

function p(
  scope: IcpmsScope,
  view: boolean,
  create: boolean,
  update: boolean,
  del: boolean,
  approve: boolean,
  exp: boolean,
): RoleModulePermission {
  return { scope, actions: { view, create, update, delete: del, approve, export: exp } };
}

// Supported actions per module — N/A in UI for actions not listed.
// view/create/update/delete/approve/export
export const MODULE_SUPPORTED_ACTIONS: Record<IcpmsModule, IcpmsAction[]> = {
  dashboard:    ["view",                              "export"],
  documents:    ["view", "create", "update", "delete", "approve", "export"],
  ingestion:    ["view", "create",           "delete", "approve"          ],
  requirements: ["view", "create", "update", "delete", "approve", "export"],
  "ai-review":  ["view", "create",                    "approve", "export"],
  checklist:    ["view",           "update",           "approve", "export"],
  assignments:  ["view", "create", "update", "delete", "approve", "export"],
  evidence:     ["view", "create", "update", "delete", "approve", "export"],
  risks:        ["view", "create", "update", "delete", "approve", "export"],
  audits:       ["view", "create", "update", "delete", "approve", "export"],
  reports:      ["view",                                          "export"],
  search:       ["view"                                                   ],
  people:       ["view", "create", "update", "delete",           "export"],
  roles:        ["view",           "update"                               ],
  "nhat-ky":    ["view",                                          "export"],
  settings:     ["view",           "update"                               ],
};

export const DEFAULT_PERMISSIONS: PermissionMatrix = {
  //                          view   create update delete approve export
  dashboard: {
    OWNER:    p("all",  true,  false, false, false, false, true),
    ADMIN:    p("all",  true,  false, false, false, false, true),
    VIEWER:   p("all",  true,  false, false, false, false, false),
    EMPLOYEE: p("self", true,  false, false, false, false, false),
    AUDITOR:  p("all",  true,  false, false, false, false, true),
  },
  documents: {
    OWNER:    p("all",  true,  true,  true,  true,  true,  true),
    ADMIN:    p("all",  true,  true,  true,  false, true,  true),
    VIEWER:   p("all",  true,  false, false, false, false, false),
    EMPLOYEE: p("self", false, false, false, false, false, false),
    AUDITOR:  p("all",  true,  false, false, false, false, true),
  },
  ingestion: {
    // create = khởi chạy job bóc tách; delete = huỷ job; approve = xác nhận kết quả
    OWNER:    p("all",  true,  true,  false, true,  true,  false),
    ADMIN:    p("all",  true,  true,  false, false, true,  false),
    VIEWER:   p("all",  false, false, false, false, false, false),
    EMPLOYEE: p("self", false, false, false, false, false, false),
    AUDITOR:  p("all",  false, false, false, false, false, false),
  },
  requirements: {
    OWNER:    p("all",  true,  true,  true,  true,  true,  true),
    ADMIN:    p("all",  true,  true,  true,  false, true,  true),
    VIEWER:   p("all",  true,  false, false, false, false, false),
    EMPLOYEE: p("self", false, false, false, false, false, false),
    AUDITOR:  p("all",  true,  false, false, false, false, true),
  },
  "ai-review": {
    // create = chạy AI review; approve = chấp nhận/từ chối kết quả AI
    OWNER:    p("all",  true,  true,  false, false, true,  true),
    ADMIN:    p("all",  true,  true,  false, false, true,  true),
    VIEWER:   p("all",  true,  false, false, false, false, false),
    EMPLOYEE: p("self", false, false, false, false, false, false),
    AUDITOR:  p("all",  true,  false, false, false, false, true),
  },
  checklist: {
    // update = cập nhật trạng thái; approve = xác nhận tuân thủ
    // Không có create/delete vì checklist item sinh ra từ requirements
    OWNER:    p("all",  true,  false, true,  false, true,  true),
    ADMIN:    p("all",  true,  false, true,  false, true,  true),
    VIEWER:   p("all",  true,  false, false, false, false, false),
    EMPLOYEE: p("self", true,  false, true,  false, true,  false),
    AUDITOR:  p("all",  true,  false, false, false, false, true),
  },
  assignments: {
    // create = giao việc; approve = đóng/hoàn thành nhiệm vụ
    OWNER:    p("all",  true,  true,  true,  true,  true,  true),
    ADMIN:    p("all",  true,  true,  true,  false, true,  true),
    VIEWER:   p("all",  false, false, false, false, false, false),
    EMPLOYEE: p("self", true,  true,  true,  false, false, false),
    AUDITOR:  p("all",  false, false, false, false, false, false),
  },
  evidence: {
    // create = nộp bằng chứng; approve = chấp nhận/từ chối bằng chứng
    OWNER:    p("all",  true,  true,  true,  true,  true,  true),
    ADMIN:    p("all",  true,  true,  true,  false, true,  true),
    VIEWER:   p("all",  false, false, false, false, false, false),
    EMPLOYEE: p("self", true,  true,  true,  false, false, true),
    AUDITOR:  p("all",  true,  false, false, false, false, true),
  },
  risks: {
    // approve = chấp nhận rủi ro (risk acceptance)
    OWNER:    p("all",  true,  true,  true,  true,  true,  true),
    ADMIN:    p("all",  true,  true,  true,  false, true,  true),
    VIEWER:   p("all",  true,  false, false, false, false, false),
    EMPLOYEE: p("self", false, false, false, false, false, false),
    AUDITOR:  p("all",  true,  false, false, false, false, true),
  },
  audits: {
    // approve = đóng/kết thúc đợt kiểm tra
    OWNER:    p("all",  true,  true,  true,  true,  true,  true),
    ADMIN:    p("all",  true,  true,  true,  false, true,  true),
    VIEWER:   p("all",  true,  false, false, false, false, false),
    EMPLOYEE: p("self", false, false, false, false, false, false),
    AUDITOR:  p("all",  true,  false, false, false, false, true),
  },
  reports: {
    // Báo cáo chỉ xem và xuất, không tạo/sửa/xoá thủ công
    OWNER:    p("all",  true,  false, false, false, false, true),
    ADMIN:    p("all",  true,  false, false, false, false, true),
    VIEWER:   p("all",  true,  false, false, false, false, false),
    EMPLOYEE: p("self", false, false, false, false, false, false),
    AUDITOR:  p("all",  true,  false, false, false, false, true),
  },
  search: {
    // Tra cứu chỉ xem — không có action khác
    OWNER:    p("all",  true,  false, false, false, false, false),
    ADMIN:    p("all",  true,  false, false, false, false, false),
    VIEWER:   p("all",  true,  false, false, false, false, false),
    EMPLOYEE: p("self", false, false, false, false, false, false),
    AUDITOR:  p("all",  true,  false, false, false, false, false),
  },
  people: {
    // Không có approve vì user không cần phê duyệt
    OWNER:    p("all",  true,  true,  true,  true,  false, true),
    ADMIN:    p("all",  true,  true,  true,  false, false, true),
    VIEWER:   p("all",  false, false, false, false, false, false),
    EMPLOYEE: p("self", false, false, false, false, false, false),
    AUDITOR:  p("all",  false, false, false, false, false, false),
  },
  roles: {
    // Chỉ view và update cấu hình — không create/delete role mới
    OWNER:    p("all",  true,  false, true,  false, false, false),
    ADMIN:    p("all",  true,  false, false, false, false, false),
    VIEWER:   p("all",  false, false, false, false, false, false),
    EMPLOYEE: p("self", false, false, false, false, false, false),
    AUDITOR:  p("all",  false, false, false, false, false, false),
  },
  "nhat-ky": {
    // Nhật ký chỉ đọc và xuất — bất biến
    OWNER:    p("all",  true,  false, false, false, false, true),
    ADMIN:    p("all",  true,  false, false, false, false, true),
    VIEWER:   p("all",  false, false, false, false, false, false),
    EMPLOYEE: p("self", false, false, false, false, false, false),
    AUDITOR:  p("all",  true,  false, false, false, false, true),
  },
  settings: {
    // Cấu hình: view + update, không create/delete role
    OWNER:    p("all",  true,  false, true,  false, false, false),
    ADMIN:    p("all",  false, false, false, false, false, false),
    VIEWER:   p("all",  false, false, false, false, false, false),
    EMPLOYEE: p("self", false, false, false, false, false, false),
    AUDITOR:  p("all",  false, false, false, false, false, false),
  },
};

function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj)) as T;
}

function storageKey(orgId: string) {
  return `icpms_permissions_v2_${orgId}`;
}

export function loadPermissions(orgId: string): PermissionMatrix {
  try {
    const raw = localStorage.getItem(storageKey(orgId));
    if (!raw) return deepClone(DEFAULT_PERMISSIONS);
    const parsed = JSON.parse(raw) as Partial<PermissionMatrix>;
    const result = deepClone(DEFAULT_PERMISSIONS);
    for (const mod of Object.keys(result) as IcpmsModule[]) {
      const saved = parsed[mod];
      if (!saved) continue;
      for (const role of Object.keys(result[mod]) as IcpmsRole[]) {
        const savedRole = saved[role];
        if (!savedRole) continue;
        result[mod][role] = {
          scope: savedRole.scope ?? result[mod][role].scope,
          actions: { ...result[mod][role].actions, ...(savedRole.actions ?? {}) },
        };
      }
    }
    return result;
  } catch {
    return deepClone(DEFAULT_PERMISSIONS);
  }
}

export function savePermissions(orgId: string, matrix: PermissionMatrix) {
  localStorage.setItem(storageKey(orgId), JSON.stringify(matrix));
}

export function canAccess(matrix: PermissionMatrix, mod: IcpmsModule, role: IcpmsRole): boolean {
  return matrix[mod]?.[role]?.actions?.view ?? false;
}
