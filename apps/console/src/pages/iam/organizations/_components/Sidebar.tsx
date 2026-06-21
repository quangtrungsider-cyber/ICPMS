// Copyright (c) 2025-2026 VATM ICPMS <sms@vatm.vn>.
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


import {
  IconBook,
  
  IconCircleProgress,
  IconFire3,
  IconGroup1,
  IconInboxEmpty,

  IconMagnifyingGlass,
  IconMedal,
  IconPageCheck,
  IconPageTextLine,
  IconPageTextSolid,
  IconSettingsGear2,
  IconTodo,
  SidebarItem,
} from "@probo/ui";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";

import type { SidebarFragment$key } from "#/__generated__/iam/SidebarFragment.graphql";
import { useOrganizationId } from "#/hooks/useOrganizationId";

const fragment = graphql`
    fragment SidebarFragment on Organization {
        canGetContext: permission(action: "core:organization-context:get")
        canListTasks: permission(action: "core:task:list")
        canListMeasures: permission(action: "core:measure:list")
        canListRisks: permission(action: "core:risk:list")

        canListFrameworks: permission(action: "core:framework:list")
        canListMembers: permission(action: "iam:membership:list")
        canListThirdParties: permission(action: "core:thirdParty:list")
        canListDocuments: permission(action: "core:document:list")
        canListAssets: permission(action: "core:asset:list")
        canListData: permission(action: "core:datum:list")
        canListAudits: permission(action: "core:audit:list")
        canListFindings: permission(action: "core:finding:list")
        canListObligations: permission(action: "core:obligation:list")
        canListProcessingActivities: permission(
            action: "core:processing-activity:list"
        )
        canListRightsRequests: permission(action: "core:rights-request:list")
        canGetTrustCenter: permission(action: "core:trust-center:get")
        canListCookieBanners: permission(action: "core:cookie-banner:list")
        canUpdateOrganization: permission(action: "iam:organization:update")
        canListStatementsOfApplicability: permission(
            action: "core:statement-of-applicability:list"
        )
        canListAccessReviewCampaigns: permission(
            action: "core:access-review-campaign:list"
        )
    }
`;

export function Sidebar(props: { fKey: SidebarFragment$key }) {
  const { fKey } = props;

  const organizationId = useOrganizationId();

  const organization = useFragment<SidebarFragment$key>(fragment, fKey);

  const prefix = `/organizations/${organizationId}`;

  return (
    <ul className="space-y-[2px]">
      {organization.canGetContext && (
        <SidebarItem
          label="Tổng quan"
          icon={IconPageTextSolid}
          to={`${prefix}/context`}
        />
      )}
      {organization.canListDocuments && (
        <SidebarItem
          label="Tài liệu"
          icon={IconPageTextLine}
          to={`${prefix}/icpms-documents`}
        />
      )}

      <SidebarItem
        label="Bóc tách tài liệu"
        icon={IconSettingsGear2}
        to={`${prefix}/ingestion-jobs`}
      />
      <SidebarItem
        label="Yêu cầu"
        icon={IconTodo}
        to={`${prefix}/requirements`}
      />
      <SidebarItem
        label="AI Review"
        icon={IconMagnifyingGlass}
        to={`${prefix}/ai-review`}
      />
      <SidebarItem
        label="Checklist"
        icon={IconBook}
        to={`${prefix}/checklist`}
      />
      <SidebarItem
        label="Giao việc"
        icon={IconInboxEmpty}
        to={`${prefix}/assignments`}
      />
      <SidebarItem
        label="Bằng chứng"
        icon={IconPageCheck}
        to={`${prefix}/evidence-placeholder`}
      />
      {organization.canListRisks && (
        <SidebarItem
          label="Rủi ro an toàn"
          icon={IconFire3}
          to={`${prefix}/risks`}
        />
      )}
      {organization.canListAudits && (
        <SidebarItem
          label="Kiểm tra / Đánh giá"
          icon={IconMedal}
          to={`${prefix}/audits`}
        />
      )}
      <SidebarItem
        label="Báo cáo"
        icon={IconCircleProgress}
        to={`${prefix}/reports`}
      />
      <SidebarItem
        label="Tra cứu"
        icon={IconMagnifyingGlass}
        to={`${prefix}/search`}
      />
      {organization.canUpdateOrganization && (
        <SidebarItem
          label="Cấu hình"
          icon={IconSettingsGear2}
          to={`${prefix}/settings`}
        />
      )}
      {organization.canListMembers && (
        <SidebarItem
          label="Người dùng"
          icon={IconGroup1}
          to={`${prefix}/people`}
        />
      )}

      {/* Hidden modules from Probo 
      {organization.canListTasks && (
        <SidebarItem
          label={__("Tasks (Old)")}
          icon={IconInboxEmpty}
          to={`${prefix}/tasks`}
        />
      )}
      {organization.canListMeasures && (
        <SidebarItem
          label={__("Measures (Old)")}
          icon={IconTodo}
          to={`${prefix}/measures`}
        />
      )}
      {organization.canListObligations && (
        <SidebarItem
          label={__("Obligations (Old)")}
          icon={IconBook}
          to={`${prefix}/obligations`}
        />
      )}
      {organization.canListFrameworks && (
        <SidebarItem
          label={__("Frameworks")}
          icon={IconBank}
          to={`${prefix}/frameworks`}
        />
      )}
      {organization.canListThirdParties && (
        <SidebarItem
          label={__("Third parties")}
          icon={IconStore}
          to={`${prefix}/third-parties`}
        />
      )}
      {organization.canListAssets && (
        <SidebarItem
          label={__("Assets")}
          icon={IconBox}
          to={`${prefix}/assets`}
        />
      )}
      {organization.canListData && (
        <SidebarItem
          label={__("Data")}
          icon={IconListStack}
          to={`${prefix}/data`}
        />
      )}
      {organization.canListFindings && (
        <SidebarItem
          label={__("Findings")}
          icon={IconMagnifyingGlass}
          to={`${prefix}/findings`}
        />
      )}
      {organization.canListProcessingActivities && (
        <SidebarItem
          label={__("Processing Activities")}
          icon={IconCircleProgress}
          to={`${prefix}/processing-activities`}
        />
      )}
      {organization.canListStatementsOfApplicability && (
        <SidebarItem
          label={__("Statements of Applicability")}
          icon={IconPageCheck}
          to={`${prefix}/statements-of-applicability`}
        />
      )}
      {organization.canListRightsRequests && (
        <SidebarItem
          label={__("Rights Requests")}
          icon={IconLock}
          to={`${prefix}/rights-requests`}
        />
      )}
      {organization.canListAccessReviewCampaigns && (
        <SidebarItem
          label={__("Access Reviews")}
          icon={IconKey}
          to={`${prefix}/access-reviews`}
        />
      )}
      {organization.canGetTrustCenter && (
        <SidebarItem
          label={__("Compliance Page")}
          icon={IconShield}
          to={`${prefix}/compliance-page`}
        />
      )}
      {organization.canListCookieBanners && (
        <SidebarItem
          label={__("Cookie Banners")}
          icon={CookieIcon}
          to={`${prefix}/cookie-banners`}
        />
      )}
      */}
    </ul>
  );
}
