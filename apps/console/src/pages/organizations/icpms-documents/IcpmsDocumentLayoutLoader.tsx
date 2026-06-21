// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { Suspense, useEffect } from "react";
import { useQueryLoader } from "react-relay";
import { useParams } from "react-router";

import type { IcpmsDocumentLayoutQuery } from "#/__generated__/core/IcpmsDocumentLayoutQuery.graphql";
import { PageSkeleton } from "#/components/skeletons/PageSkeleton";
import { CoreRelayProvider } from "#/providers/CoreRelayProvider";

import { icpmsDocumentLayoutQuery, IcpmsDocumentLayout } from "./IcpmsDocumentLayout";

function IcpmsDocumentLayoutQueryLoader() {
  const params = useParams();
  const documentId = params.documentId;
  const [queryRef, loadQuery] = useQueryLoader<IcpmsDocumentLayoutQuery>(icpmsDocumentLayoutQuery);

  useEffect(() => {
    if (!queryRef && documentId) {
      loadQuery({ documentId });
    }
  });

  if (!queryRef) return <PageSkeleton />;

  return <IcpmsDocumentLayout queryRef={queryRef} />;
}

export default function Loader() {
  return (
    <CoreRelayProvider>
      <Suspense fallback={<PageSkeleton />}>
        <IcpmsDocumentLayoutQueryLoader />
      </Suspense>
    </CoreRelayProvider>
  );
}
