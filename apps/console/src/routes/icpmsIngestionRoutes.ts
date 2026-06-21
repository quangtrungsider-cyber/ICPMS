// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { lazy } from "@probo/react-lazy";
import { type AppRoute } from "@probo/routes";

import { PageSkeleton } from "#/components/skeletons/PageSkeleton";

export const icpmsIngestionRoutes = [
  {
    path: "ingestion-jobs",
    Fallback: PageSkeleton,
    Component: lazy(
      () => import("#/pages/organizations/icpms-ingestion/IcpmsIngestionJobsPage"),
    ),
  },
  {
    path: "ingestion-jobs/:jobId",
    Fallback: PageSkeleton,
    Component: lazy(
      () => import("#/pages/organizations/icpms-ingestion/IcpmsIngestionJobDetailPage"),
    ),
  },
] satisfies AppRoute[];
