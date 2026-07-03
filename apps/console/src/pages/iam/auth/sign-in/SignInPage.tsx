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

import { formatError, type GraphQLError } from "@probo/helpers";
import { useTranslate } from "@probo/i18n";
import { useToast } from "@probo/ui";
import { useState, type FormEventHandler } from "react";
import { useMutation } from "react-relay";
import { matchPath, useLocation } from "react-router";
import { graphql } from "relay-runtime";

import type { SignInPageMutation } from "#/__generated__/iam/SignInPageMutation.graphql";
import { useSafeContinueUrl } from "#/hooks/useSafeContinueUrl";
import { useTheme } from "#/providers/ThemeProvider";

const signInMutation = graphql`
  mutation SignInPageMutation($input: SignInInput!) {
    signIn(input: $input) {
      session {
        id
      }
    }
  }
`;

export default function SignInPage() {
  const { __ } = useTranslate();
  const { toast } = useToast();
  const location = useLocation();
  const safeContinueUrl = useSafeContinueUrl();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [showPassword, setShowPassword] = useState(false);

  const [signIn, isSigningIn] = useMutation<SignInPageMutation>(signInMutation);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = (formData.get("email") as string) ?? "";
    const password = (formData.get("password") as string) ?? "";
    if (!email || !password) return;

    const match = matchPath(
      { path: "/organizations/:organizationId", caseSensitive: false, end: false },
      safeContinueUrl.pathname,
    );

    signIn({
      variables: {
        input: {
          email,
          password,
          organizationId: match?.params.organizationId ?? null,
        },
      },
      onCompleted: (_, error) => {
        if (error) {
          toast({
            title: __("Error"),
            description: formatError(__("Failed to login"), error as GraphQLError),
            variant: "error",
          });
          return;
        }
        window.location.href = safeContinueUrl.href;
      },
      onError: (err) => {
        toast({
          title: __("Error"),
          description: err.message,
          variant: "error",
        });
      },
    });
  };

  const inputClass = [
    "w-full h-11 rounded-xl border px-4 text-sm outline-none transition-all duration-200",
    isDark
      ? "bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-blue-400/60 focus:bg-white/8"
      : "bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.08)]",
  ].join(" ");

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <h2
        className="text-xl font-bold text-center mb-0.5"
        style={{ color: isDark ? "#bfdbfe" : "#0a3d8f" }}
      >
        Đăng nhập hệ thống
      </h2>
      <p className="text-center text-sm text-slate-400 font-semibold tracking-[0.2em] uppercase mb-7">
        Login
      </p>

      <div className="space-y-4">
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </span>
          <input
            required
            name="email"
            type="email"
            autoFocus
            autoComplete="username"
            placeholder="Nhập tên đăng nhập..."
            className={inputClass + " pl-10"}
          />
        </div>

        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </span>
          <input
            required
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="Nhập mật khẩu..."
            className={inputClass + " pl-10 pr-10"}
          />
          <button
            type="button"
            onClick={() => setShowPassword(v => !v)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
            tabIndex={-1}
          >
            {showPassword ? (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            ) : (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSigningIn}
        className="w-full h-11 mt-6 rounded-xl font-semibold text-sm text-white transition-all duration-200 disabled:opacity-60"
        style={{
          background: "linear-gradient(135deg, #1a4fa0 0%, #2563eb 100%)",
          border: "1px solid rgba(255,255,255,0.15)",
          cursor: isSigningIn ? "not-allowed" : "pointer",
        }}
      >
        {isSigningIn ? "Đang đăng nhập..." : "Đăng nhập"}
      </button>
    </form>
  );
}
