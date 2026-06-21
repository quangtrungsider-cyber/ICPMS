// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { lazy } from "@probo/react-lazy";
import { type AppRoute } from "@probo/routes";

import { PageSkeleton } from "#/components/skeletons/PageSkeleton";

export const icpmsAiReviewRoutes = [
  {
    path: "ai-review",
    Fallback: PageSkeleton,
    Component: lazy(
      () => import("#/pages/organizations/icpms-ai-review/IcpmsAiReviewPage").then(
        (m) => ({ default: m.IcpmsAiReviewPage })
      ),
    ),
  },
] satisfies AppRoute[];
