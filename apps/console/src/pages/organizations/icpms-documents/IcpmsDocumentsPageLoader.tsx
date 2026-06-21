// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { Suspense, useEffect } from "react";
import { useQueryLoader } from "react-relay";

import type { IcpmsDocumentsPageQuery } from "#/__generated__/core/IcpmsDocumentsPageQuery.graphql";
import { PageSkeleton } from "#/components/skeletons/PageSkeleton";
import { useOrganizationId } from "#/hooks/useOrganizationId";
import { CoreRelayProvider } from "#/providers/CoreRelayProvider";

import { icpmsDocumentsPageQuery, IcpmsDocumentsPage } from "./IcpmsDocumentsPage";

function IcpmsDocumentsPageQueryLoader() {
  const organizationId = useOrganizationId();
  const [queryRef, loadQuery] = useQueryLoader<IcpmsDocumentsPageQuery>(icpmsDocumentsPageQuery);

  useEffect(() => {
    if (!queryRef) {
      loadQuery({ organizationId });
    }
  });

  if (!queryRef) return <PageSkeleton />;

  return <IcpmsDocumentsPage queryRef={queryRef} />;
}

export default function Loader() {
  return (
    <CoreRelayProvider>
      <Suspense fallback={<PageSkeleton />}>
        <IcpmsDocumentsPageQueryLoader />
      </Suspense>
    </CoreRelayProvider>
  );
}
