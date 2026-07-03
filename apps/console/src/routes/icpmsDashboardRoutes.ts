// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { lazy } from "@probo/react-lazy";
import { type AppRoute } from "@probo/routes";
import { PageSkeleton } from "#/components/skeletons/PageSkeleton";

export const icpmsDashboardRoutes = [
  {
    path: "icpms-overview",
    Fallback: PageSkeleton,
    Component: lazy(() => import("#/pages/organizations/icpms-overview/IcpmsDashboardPage").then(m => ({ default: m.IcpmsDashboardPage }))),
  },
] satisfies AppRoute[];
