// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { lazy } from "@probo/react-lazy";
import { type AppRoute } from "@probo/routes";

import { PageSkeleton } from "#/components/skeletons/PageSkeleton";

export const icpmsEvidenceRoutes = [
  {
    path: "evidence",
    Fallback: PageSkeleton,
    Component: lazy(
      () =>
        import(
          "#/pages/organizations/icpms-evidence/IcpmsEvidencePage"
        ).then((m) => ({ default: m.IcpmsEvidencePage })),
    ),
  },
] satisfies AppRoute[];
