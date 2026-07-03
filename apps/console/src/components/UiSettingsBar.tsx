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

import { useUiSettings, type UiBgColor, type UiFontSize, type UiTheme } from "#/hooks/useUiSettings";

const THEME_OPTIONS: { value: UiTheme; label: string }[] = [
  { value: "light", label: "Sáng" },
  { value: "dark",  label: "Tối" },
];

const BG_OPTIONS: { value: UiBgColor; label: string }[] = [
  { value: "white", label: "Trắng" },
  { value: "gray",  label: "Xám" },
  { value: "blue",  label: "Xanh nhạt" },
  { value: "cream", label: "Kem" },
];

const FONT_OPTIONS: { value: UiFontSize; label: string }[] = [
  { value: "80",  label: "80%" },
  { value: "90",  label: "90%" },
  { value: "100", label: "100%" },
  { value: "110", label: "110%" },
  { value: "120", label: "120%" },
];

function SettingSelect<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <span
        style={{
          fontSize: 13,
          color: "#555",
          fontWeight: 500,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      <div style={{ position: "relative", display: "inline-block" }}>
        <select
          value={value}
          onChange={e => onChange(e.target.value as T)}
          style={{
            appearance: "none",
            WebkitAppearance: "none",
            border: "1px solid #d1d5db",
            borderRadius: 6,
            paddingLeft: 10,
            paddingRight: 28,
            paddingTop: 3,
            paddingBottom: 3,
            fontSize: 13,
            background: "#fff",
            color: "#111",
            cursor: "pointer",
            outline: "none",
            minWidth: 90,
          }}
        >
          {options.map(o => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        {/* caret icon */}
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          style={{
            position: "absolute",
            right: 6,
            top: "50%",
            transform: "translateY(-50%)",
            width: 14,
            height: 14,
            color: "#6b7280",
            pointerEvents: "none",
          }}
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export function UiSettingsBar() {
  const { settings, update } = useUiSettings();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20,
        background: "#f0f2f5",
        borderTop: "1px solid #dde1e7",
        boxShadow: "0 -1px 3px rgba(0,0,0,0.05)",
      }}
    >
      {/* Left — brand */}
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#0e7490" }}>
          VATM ICPMS
        </span>
        <span style={{ fontSize: 12, color: "#9ca3af" }}>·</span>
        <span style={{ fontSize: 12, color: "#6b7280" }}>
          Hệ thống quản lý tuân thủ, checklist và bằng chứng VATM
        </span>
      </div>

      {/* Center — controls */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <SettingSelect
          label="Giao diện"
          value={settings.theme}
          options={THEME_OPTIONS}
          onChange={v => update("theme", v)}
        />
        <SettingSelect
          label="Màu nền"
          value={settings.bgColor}
          options={BG_OPTIONS}
          onChange={v => update("bgColor", v)}
        />
        <SettingSelect
          label="Cỡ chữ"
          value={settings.fontSize}
          options={FONT_OPTIONS}
          onChange={v => update("fontSize", v)}
        />
      </div>

      {/* Right — version */}
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 12, color: "#9ca3af" }}>
          Phiên bản
        </span>
        <span style={{ fontSize: 12, fontWeight: 600, color: "#374151" }}>
          v6.0
        </span>
        <span style={{ fontSize: 12, color: "#9ca3af" }}>·</span>
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: "#0e7490",
            background: "#cffafe",
            border: "1px solid #a5f3fc",
            borderRadius: 4,
            padding: "1px 6px",
          }}
        >
          enterprise
        </span>
      </div>
    </div>
  );
}
