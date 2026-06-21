// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { lazy } from "@probo/react-lazy";
import { type AppRoute } from "@probo/routes";

import { PageSkeleton } from "#/components/skeletons/PageSkeleton";

export const icpmsAssignmentRoutes = [
  {
    path: "assignments",
    Fallback: PageSkeleton,
    Component: lazy(
      () =>
        import(
          "#/pages/organizations/icpms-assignments/IcpmsAssignmentsPage"
        ).then((m) => ({ default: m.IcpmsAssignmentsPage })),
    ),
  },
] satisfies AppRoute[];
