// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.

import { Suspense, useEffect } from "react";
import { useQueryLoader } from "react-relay";
import { useParams } from "react-router";

import type { IcpmsDocumentDescriptionTabQuery } from "#/__generated__/core/IcpmsDocumentDescriptionTabQuery.graphql";
import { PageSkeleton } from "#/components/skeletons/PageSkeleton";
import { CoreRelayProvider } from "#/providers/CoreRelayProvider";

import { icpmsDocumentDescriptionTabQuery, IcpmsDocumentDescriptionTab } from "./IcpmsDocumentDescriptionTab";

function IcpmsDocumentDescriptionTabQueryLoader() {
  const params = useParams();
  const documentId = params.documentId;
  const [queryRef, loadQuery] = useQueryLoader<IcpmsDocumentDescriptionTabQuery>(icpmsDocumentDescriptionTabQuery);

  useEffect(() => {
    if (!queryRef && documentId) {
      loadQuery({ documentId });
    }
  });

  if (!queryRef) return <PageSkeleton />;

  return <IcpmsDocumentDescriptionTab queryRef={queryRef} />;
}

export default function Loader() {
  return (
    <CoreRelayProvider>
      <Suspense fallback={<PageSkeleton />}>
        <IcpmsDocumentDescriptionTabQueryLoader />
      </Suspense>
    </CoreRelayProvider>
  );
}
