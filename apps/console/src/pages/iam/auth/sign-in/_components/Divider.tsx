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
import { useTheme } from "#/providers/ThemeProvider";

export function Divider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const lineColor = isDark ? "rgba(255,255,255,0.18)" : "rgba(10,61,143,0.2)";
  const textColor = isDark ? "#93c5fd" : "#0a3d8f";

  return (
    <div className="relative my-4 flex items-center gap-3 w-full">
      <div className="flex-1 border-t" style={{ borderColor: lineColor }} />
      <span className="text-xs uppercase font-semibold" style={{ color: textColor, letterSpacing: "0.08em" }}>
        {children}
      </span>
      <div className="flex-1 border-t" style={{ borderColor: lineColor }} />
    </div>
  );
}
