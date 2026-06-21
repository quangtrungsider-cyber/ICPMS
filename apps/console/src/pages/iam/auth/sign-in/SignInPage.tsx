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

import { useTranslate } from "@probo/i18n";
import { type PreloadedQuery, usePreloadedQuery } from "react-relay";
import { Link, useLocation } from "react-router";
import { graphql } from "relay-runtime";

import type { SignInPageQuery } from "#/__generated__/iam/SignInPageQuery.graphql";
import { useTheme } from "#/providers/ThemeProvider";

import { Divider } from "./_components/Divider";
import { OIDCButton } from "./_components/OIDCButton";

export const signInPageQuery = graphql`
  query SignInPageQuery {
    oidcProviders {
      ...OIDCButtonFragment
    }
  }
`;

type Props = {
  queryRef: PreloadedQuery<SignInPageQuery>;
};

export default function SignInPage(props: Props) {
  const { __ } = useTranslate();
  const location = useLocation();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const data = usePreloadedQuery<SignInPageQuery>(signInPageQuery, props.queryRef);

  return (
    <div className="w-full">
      <h2
        className="text-xl font-bold text-center mb-0.5"
        style={{ color: isDark ? "#bfdbfe" : "#0a3d8f" }}
      >
        Đăng nhập hệ thống
      </h2>
      <p className="text-center text-sm text-slate-400 font-semibold tracking-[0.2em] uppercase mb-5">
        Login
      </p>
      <div className="space-y-3">
        {data.oidcProviders.map((providerRef, index) => (
          <OIDCButton key={index} providerRef={providerRef} />
        ))}

        <Link
          to={{ pathname: "/auth/sso-login", search: location.search }}
          className="flex items-center justify-center w-full h-11 rounded-lg font-semibold text-sm transition-all duration-200"
          style={{
            background: "linear-gradient(135deg, #f5b400 0%, #ffd54f 100%)",
            border: "1px solid rgba(0,0,0,0.08)",
            color: "#3a2a00",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #e0a300 0%, #ffc107 100%)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #f5b400 0%, #ffd54f 100%)";
          }}
        >
          {__("Sign in with SSO")}
        </Link>

        <Divider>{__("Or")}</Divider>

        <Link
          to={{ pathname: "/auth/password-login", search: location.search }}
          className="flex items-center justify-center w-full h-11 rounded-lg font-semibold text-sm transition-all duration-200"
          style={{
            background: isDark
              ? "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)"
              : "linear-gradient(135deg, #1a4fa0 0%, #2563eb 100%)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#fff",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #1e5cc0 0%, #3b7aff 100%)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = isDark
              ? "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)"
              : "linear-gradient(135deg, #1a4fa0 0%, #2563eb 100%)";
          }}
        >
          {__("Sign in with email")}
        </Link>
      </div>

      <p
        className="mt-6 text-center text-sm"
        style={{ color: isDark ? "#cbd5e1" : "#475569" }}
      >
        Mới sử dụng VATM ICPMS?{" "}
        <Link
          to={{ pathname: "/auth/register", search: location.search }}
          className="underline underline-offset-2 transition-colors"
          style={{ color: isDark ? "#93c5fd" : "#2563eb" }}
        >
          {__("Create account")}
        </Link>
      </p>
    </div>
  );
}
