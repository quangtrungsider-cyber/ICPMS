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
import { IconChevronLeft, Input, useToast } from "@probo/ui";
import type { FormEventHandler } from "react";
import { useMutation } from "react-relay";
import { Link, matchPath, useLocation } from "react-router";
import { graphql } from "relay-runtime";

import type { PasswordSignInPageMutation } from "#/__generated__/iam/PasswordSignInPageMutation.graphql";
import { useSafeContinueUrl } from "#/hooks/useSafeContinueUrl";

const signInMutation = graphql`
  mutation PasswordSignInPageMutation($input: SignInInput!) {
    signIn(input: $input) {
      session {
        id
      }
    }
  }
`;

export default function PasswordSignInPage() {
  const location = useLocation();
  const safeContinueUrl = useSafeContinueUrl();

  const { __ } = useTranslate();
  const { toast } = useToast();

  const [signIn, isSigningIn]
    = useMutation<PasswordSignInPageMutation>(signInMutation);

  const handlePasswordLogin: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const emailValue = formData.get("email") ? (formData.get("email") as string).toString() : "";
    const passwordValue = formData.get("password") ? (formData.get("password") as string).toString() : "";

    if (!emailValue || !passwordValue) return;

    const match = matchPath(
      { path: "/organizations/:organizationId", caseSensitive: false, end: false },
      safeContinueUrl.pathname,
    );

    signIn({
      variables: {
        input: {
          email: emailValue,
          password: passwordValue,
          organizationId: match && match.params.organizationId,
        },
      },
      onCompleted: (_, error) => {
        if (error) {
          toast({
            title: __("Error"),
            description: formatError(
              __("Failed to login"),
              error as GraphQLError,
            ),
            variant: "error",
          });
          return;
        }
        window.location.href = safeContinueUrl.href;
      },
      onError: (e) => {
        toast({
          title: __("Error"),
          description: e.message,
          variant: "error",
        });
      },
    });
  };

  return (
    <form className="w-full" onSubmit={handlePasswordLogin}>
      <Link
        to={{ pathname: "/auth/login", search: location.search }}
        className="flex items-center gap-1.5 text-slate-600 hover:text-[#0a3d8f] transition-colors text-sm mb-5"
      >
        <IconChevronLeft size={16} />
        <span>{__("Back")}</span>
      </Link>

      <h2 className="text-xl font-bold text-center text-[#0a3d8f] mb-1">
        {__("Login with Email")}
      </h2>
      <p className="text-center text-sm text-slate-600 mb-6">
        Nhập email và mật khẩu để đăng nhập
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1.5 tracking-wide">
            {__("Email")}
          </label>
          <Input
            required
            placeholder="name@vatm.vn"
            name="email"
            type="email"
            autoFocus
            className="h-11 bg-white text-slate-900 border-slate-300 placeholder:text-slate-400"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1.5 tracking-wide">
            {__("Password")}
          </label>
          <Input
            required
            placeholder="••••••••"
            name="password"
            type="password"
            className="h-11 bg-white text-slate-900 border-slate-300 placeholder:text-slate-400"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSigningIn}
        className="w-full h-11 mt-6 rounded-lg font-semibold text-sm text-white transition-all duration-200 disabled:opacity-60"
        style={{
          background: "linear-gradient(135deg, #1a4fa0 0%, #2563eb 100%)",
          border: "1px solid rgba(255,255,255,0.15)",
          cursor: isSigningIn ? "not-allowed" : "pointer",
        }}
      >
        {isSigningIn ? "Đang đăng nhập..." : "Đăng nhập"}
      </button>

      <div className="flex items-center justify-between mt-5 text-sm text-slate-600">
        <Link
          to={{ pathname: "/auth/register", search: location.search }}
          className="hover:text-[#0a3d8f] transition-colors underline underline-offset-2"
        >
          {__("Register")}
        </Link>
        <Link
          to="/auth/forgot-password"
          className="hover:text-[#0a3d8f] transition-colors underline underline-offset-2"
        >
          {__("Forgot password?")}
        </Link>
      </div>
    </form>
  );
}
