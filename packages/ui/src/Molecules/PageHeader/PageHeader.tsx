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
import type { PropsWithChildren, ReactNode } from "react";
type Props = PropsWithChildren<{
  title: ReactNode;
  description?: ReactNode;
}>;
export function PageHeader({ title, description, children }: Props) {
  return (
    <div className="flex justify-between items-start w-full pb-1">
      <div className="flex gap-3 items-start">
        <span
          aria-hidden
          className="mt-1.5 h-7 w-[3px] rounded-full shrink-0"
          style={{ background: "linear-gradient(180deg, #0a3d8f 0%, #2563eb 100%)" }}
        />
        <div className="space-y-1.5">
          <h1 className="text-3xl font-bold tracking-tight flex gap-3 items-center" style={{ color: "#0a3d8f" }}>
            {title}
          </h1>
          {description && (
            <p className="text-sm text-txt-secondary leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-3 shrink-0">{children}</div>
    </div>
  );
}
