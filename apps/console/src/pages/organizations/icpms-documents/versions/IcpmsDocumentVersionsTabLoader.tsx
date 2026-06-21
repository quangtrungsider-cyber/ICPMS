// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { Suspense, useEffect } from "react";
import { useQueryLoader } from "react-relay";
import { useParams } from "react-router";

import type { IcpmsDocumentVersionsTabQuery } from "#/__generated__/core/IcpmsDocumentVersionsTabQuery.graphql";
import { PageSkeleton } from "#/components/skeletons/PageSkeleton";
import { CoreRelayProvider } from "#/providers/CoreRelayProvider";

import { icpmsDocumentVersionsTabQuery, IcpmsDocumentVersionsTab } from "./IcpmsDocumentVersionsTab";

function IcpmsDocumentVersionsTabQueryLoader() {
  const params = useParams();
  const documentId = params.documentId;
  const [queryRef, loadQuery] = useQueryLoader<IcpmsDocumentVersionsTabQuery>(icpmsDocumentVersionsTabQuery);

  useEffect(() => {
    if (!queryRef && documentId) {
      loadQuery({ documentId });
    }
  });

  if (!queryRef) return <PageSkeleton />;

  return <IcpmsDocumentVersionsTab queryRef={queryRef} />;
}

export default function Loader() {
  return (
    <CoreRelayProvider>
      <Suspense fallback={<PageSkeleton />}>
        <IcpmsDocumentVersionsTabQueryLoader />
      </Suspense>
    </CoreRelayProvider>
  );
}
