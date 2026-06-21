// Copyright (c) 2025-2026 VATM ICPMS <sms@vatm.vn>.
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

import type { PropsWithChildren } from "react";
import { Outlet } from "react-router";

import { IAMRelayProvider } from "#/providers/IAMRelayProvider";
import { useTheme } from "#/providers/ThemeProvider";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="absolute top-5 right-5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-sm transition-colors"
    >
      {isDark ? "🌙 Dark" : "☀ Light"}
    </button>
  );
}

export default function AuthLayout(props: PropsWithChildren) {
  const { children } = props;
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url(/atc-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? "linear-gradient(160deg, rgba(8,14,32,0.88) 0%, rgba(15,30,60,0.82) 100%)"
            : "rgba(255,255,255,0.18)",
        }}
      />

      {/* Subtle bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />

      <ThemeToggle />

      {/* Login card */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div
          className="rounded-2xl overflow-hidden shadow-2xl"
          style={{
            background: isDark
              ? "linear-gradient(160deg, rgba(20,32,58,0.85) 0%, rgba(10,18,38,0.85) 100%)"
              : "rgba(255,255,255,0.55)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            border: isDark ? "1px solid rgba(96,165,250,0.35)" : "2px solid #0a3d8f",
            boxShadow: isDark ? "0 8px 40px rgba(37,99,235,0.25)" : undefined,
          }}
        >
          {/* Header */}
          <div
            className="px-8 pt-8 pb-6 flex flex-col items-center gap-1.5"
            style={{
              borderBottom: isDark ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(10,61,143,0.15)",
            }}
          >
            <img
              src="/vatm-logo-transparent.png"
              alt="VATM"
              className="h-28 w-28 object-contain"
            />
            <p
              className="text-xs font-semibold tracking-widest uppercase mt-1"
              style={{ color: isDark ? "#93c5fd" : "#0a3d8f" }}
            >
              Tổng Công Ty Quản Lý Bay Việt Nam
            </p>
            <p
              className="font-extrabold text-3xl tracking-wide leading-none mt-0.5"
              style={{ color: isDark ? "#bfdbfe" : "#0a3d8f" }}
            >
              VATM ICPMS
            </p>
            <p
              className="text-xs font-medium mt-1 text-center"
              style={{ color: isDark ? "#cbd5e1" : "#475569" }}
            >
              Hệ thống quản lý tuân thủ, checklist và bằng chứng VATM
            </p>
          </div>

          {/* Content area */}
          <div className="px-8 pt-3 pb-7">
            <IAMRelayProvider>
              {children ?? <Outlet />}
            </IAMRelayProvider>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-white/60 text-xs mt-5">
          © {new Date().getFullYear()} VATM ICPMS — Hệ thống quản lý tuân thủ nội bộ
        </p>
      </div>
    </div>
  );
}
