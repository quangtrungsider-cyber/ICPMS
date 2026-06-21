// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { useTranslate } from "@probo/i18n";
import { Badge, Breadcrumb, PageHeader, TabBadge, TabLink, Tabs } from "@probo/ui";
import { useCallback } from "react";
import { type PreloadedQuery, usePreloadedQuery } from "react-relay";
import { Outlet, useNavigate } from "react-router";
import { graphql } from "relay-runtime";

import type { IcpmsDocumentLayoutQuery } from "#/__generated__/core/IcpmsDocumentLayoutQuery.graphql";
import { useOrganizationId } from "#/hooks/useOrganizationId";

export const icpmsDocumentLayoutQuery = graphql`
  query IcpmsDocumentLayoutQuery($documentId: ID!) {
    document: node(id: $documentId) {
      __typename
      ... on IcpmsDocument {
        id
        code
        title
        status
        documentType
        versions(first: 0) {
          totalCount
        }
      }
    }
  }
`;

export function IcpmsDocumentLayout(props: { queryRef: PreloadedQuery<IcpmsDocumentLayoutQuery> }) {
  const { queryRef } = props;
  const organizationId = useOrganizationId();
  const navigate = useNavigate();


  const { __ } = useTranslate();

  const { document } = usePreloadedQuery<IcpmsDocumentLayoutQuery>(icpmsDocumentLayoutQuery, queryRef);
  if (document?.__typename !== "IcpmsDocument") {
    throw new Error("invalid node type");
  }


  const urlPrefix = `/organizations/${organizationId}/icpms-documents/${document.id}`;

  const onRefetch = useCallback(() => {
    navigate(0); // Simple reload for refetch
  }, [navigate]);

  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="flex justify-between items-center mb-4">
        <Breadcrumb
          items={[
            {
              label: __("Tài liệu ICPMS"),
              to: `/organizations/${organizationId}/icpms-documents`,
            },
            {
              label: document.code,
            },
          ]}
        />
      </div>

      <PageHeader
        title={`${document.code} - ${document.title}`}
      >
        <Badge variant={document.status === "ACTIVE" ? "success" : "neutral"}>
          {document.status}
        </Badge>
        <Badge variant="neutral">
          {document.documentType}
        </Badge>
      </PageHeader>

      <Tabs>
        <TabLink to={`${urlPrefix}/description`}>{__("Thông tin chung")}</TabLink>
        <TabLink to={`${urlPrefix}/versions`}>
          {__("Phiên bản")}
          <TabBadge>{document.versions.totalCount}</TabBadge>
        </TabLink>
      </Tabs>

      <Outlet
        context={{
          onRefetch,
          documentId: document.id,
        }}
      />
    </div>
  );
}
