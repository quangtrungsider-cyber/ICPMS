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

import { clsx } from "clsx";

type Props = {
  className?: string;
  withPicto?: boolean;
};

export function Logo({ className, withPicto }: Props) {
  return (
    <div className={clsx(className, "flex items-center gap-3 select-none")}>
      {withPicto && (
        <img
          src="/vatm-logo-transparent.png"
          alt="VATM"
          className="w-10 h-10 object-contain shrink-0"
        />
      )}
      <div className="flex flex-col gap-0.5">
        <span className="font-extrabold text-2xl leading-none tracking-wide text-[#0a3d8f] whitespace-nowrap">
          ICPMS
        </span>
        <span className="h-[3px] w-full rounded-full bg-gradient-to-r from-[#0a3d8f] via-sky-400 to-transparent" />
      </div>
    </div>
  );
}
