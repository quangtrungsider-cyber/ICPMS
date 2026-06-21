// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { lazy } from "@probo/react-lazy";
import { type AppRoute } from "@probo/routes";

import { PageSkeleton } from "#/components/skeletons/PageSkeleton";

export const icpmsChecklistRoutes = [
  {
    path: "checklist",
    Fallback: PageSkeleton,
    Component: lazy(
      () => import("#/pages/organizations/icpms-checklist/IcpmsChecklistPage").then(
        (m) => ({ default: m.IcpmsChecklistPage })
      ),
    ),
  },
] satisfies AppRoute[];
