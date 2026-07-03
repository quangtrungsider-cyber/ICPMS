// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import type { AppRoute } from "@probo/routes";

import { ComingSoonPage } from "../components/ComingSoonPage";
import { UnitsPage } from "../pages/iam/organizations/units/UnitsPage";

export const placeholderRoutes: AppRoute[] = [
  {
    path: "tasks-placeholder",
    Component: () => (
      <ComingSoonPage
        title="Sắp triển khai: Giao việc"
        description="Module Giao việc sẽ được triển khai ở Phase 12. Chức năng dự kiến: giao checklist cho các Ban/đơn vị VATM và theo dõi trạng thái xử lý."
      />
    ),
  },
  {
    path: "reports",
    Component: () => (
      <ComingSoonPage
        title="Sắp triển khai: Báo cáo"
        description="Module Báo cáo sẽ được triển khai ở Phase 15. Chức năng dự kiến: xuất báo cáo Word, Excel, PDF."
      />
    ),
  },
  {
    path: "search",
    Component: () => (
      <ComingSoonPage
        title="Sắp triển khai: Tra cứu"
        description="Chức năng dự kiến: Tra cứu nhanh toàn bộ hệ thống."
      />
    ),
  },
  {
    path: "units",
    Component: UnitsPage,
  },
];
