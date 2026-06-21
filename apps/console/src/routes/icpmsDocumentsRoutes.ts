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

import { lazy } from "@probo/react-lazy";
import { type AppRoute } from "@probo/routes";
import { Fragment } from "react";
import { type LoaderFunctionArgs, redirect } from "react-router";

import { LinkCardSkeleton } from "#/components/skeletons/LinkCardSkeleton";
import { PageSkeleton } from "#/components/skeletons/PageSkeleton";

export const icpmsDocumentsRoutes = [
  {
    path: "icpms-documents",
    Fallback: PageSkeleton,
    Component: lazy(() => import("#/pages/organizations/icpms-documents/IcpmsDocumentsPageLoader")),
  },
  {
    path: "icpms-documents/:documentId",
    Fallback: PageSkeleton,
    Component: lazy(() => import("#/pages/organizations/icpms-documents/IcpmsDocumentLayoutLoader")),
    children: [
      {
        path: "",
        loader: ({ params: { organizationId, documentId } }: LoaderFunctionArgs) => {
          // eslint-disable-next-line
          throw redirect(`/organizations/${organizationId}/icpms-documents/${documentId}/description`);
        },
        Component: Fragment,
      },
      {
        path: "description",
        Fallback: LinkCardSkeleton,
        Component: lazy(() => import("#/pages/organizations/icpms-documents/description/IcpmsDocumentDescriptionTabLoader")),
      },
      {
        path: "versions",
        Fallback: LinkCardSkeleton,
        Component: lazy(() => import("#/pages/organizations/icpms-documents/versions/IcpmsDocumentVersionsTabLoader")),
      },
    ],
  },
] satisfies AppRoute[];
