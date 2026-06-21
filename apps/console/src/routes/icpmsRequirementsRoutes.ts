// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { lazy } from "@probo/react-lazy";
import { type AppRoute } from "@probo/routes";

import { PageSkeleton } from "#/components/skeletons/PageSkeleton";

export const icpmsRequirementsRoutes = [
  {
    path: "requirements",
    Fallback: PageSkeleton,
    Component: lazy(
      () => import("#/pages/organizations/icpms-requirements/IcpmsRequirementsPage").then(
        (m) => ({ default: m.IcpmsRequirementsPage })
      ),
    ),
  },
] satisfies AppRoute[];
