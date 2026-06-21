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

import { usePageTitle } from "@probo/hooks";
import { useTranslate } from "@probo/i18n";
import {
  Button,
  Card,
  IconMagnifyingGlass,
  IconPlusLarge,
  Input,
} from "@probo/ui";
import { useMemo, useState } from "react";
import { graphql, type PreloadedQuery, usePreloadedQuery } from "react-relay";

import type { MembershipsPageQuery } from "#/__generated__/iam/MembershipsPageQuery.graphql";

import { InvitingOrganizationCard } from "./_components/InvitingOrganizationCard";
import { MembershipCard } from "./_components/MembershipCard";

export const membershipsPageQuery = graphql`
  query MembershipsPageQuery {
    viewer @required(action: THROW) {
      profiles(
        first: 1000
        orderBy: { direction: ASC, field: ORGANIZATION_NAME }
        filter: { state: ACTIVE }
      )
        @connection(key: "MembershipsPage_profiles")
        @required(action: THROW) {
        edges @required(action: THROW) {
          node {
            id
            ...MembershipCardFragment
            organization @required(action: THROW) {
              id
              name
              ...MembershipCard_organizationFragment
            }
          }
        }
      }
      invitingOrganizations {
        id
        ...InvitingOrganizationCardFragment
      }
    }
  }
`;

export function MembershipsPage(props: {
  queryRef: PreloadedQuery<MembershipsPageQuery>;
}) {
  const { __ } = useTranslate();
  const [search, setSearch] = useState("");

  usePageTitle(__("Select an organization"));

  const { queryRef } = props;
  const {
    viewer: {
      profiles: { edges: initialProfiles },
      invitingOrganizations,
    },
  } = usePreloadedQuery<MembershipsPageQuery>(membershipsPageQuery, queryRef);

  const profiles = useMemo(() => {
    if (!search.trim()) {
      return initialProfiles;
    }
    return initialProfiles.filter(({ node }) =>
      node.organization.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [initialProfiles, search]);

  return (
    <div className="min-h-screen bg-level-0 flex justify-center py-14 px-4">
      <div className="space-y-8 w-full max-w-2xl">
        <div className="text-center space-y-1.5">
          <span
            aria-hidden
            className="inline-block h-1 w-10 rounded-full mb-2"
            style={{ background: "linear-gradient(90deg, #0a3d8f 0%, #2563eb 100%)" }}
          />
          <h1 className="text-3xl font-bold tracking-tight text-txt-primary">
            {__("Select an organization")}
          </h1>
          <p className="text-sm text-txt-secondary">
            {__("Choose an organization to continue, or create a new one")}
          </p>
        </div>
        <div className="space-y-6 w-full">
          {invitingOrganizations.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-txt-primary tracking-tight">
                {__("Pending invitations")}
              </h2>
              {invitingOrganizations.map(organization => (
                <InvitingOrganizationCard key={organization.id} fKey={organization} />
              ))}
            </div>
          )}
          {initialProfiles.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-txt-primary tracking-tight">
                {__("Your organizations")}
              </h2>
              <div className="w-full">
                <Input
                  icon={IconMagnifyingGlass}
                  placeholder={__("Search organizations...")}
                  value={search}
                  onValueChange={setSearch}
                />
              </div>
              {profiles.length === 0
                ? (
                  <div className="text-center text-txt-secondary py-4">
                    {__("No organizations found")}
                  </div>
                )
                : (
                  <div className="space-y-3">
                    {profiles.map(({ node }) => (
                      <MembershipCard
                        key={node.id}
                        fKey={node}
                        organizationFragmentRef={node.organization}
                      />
                    ))}
                  </div>
                )}
            </div>
          )}
          <Card padded className="border-dashed">
            <h2 className="text-base font-semibold text-txt-primary mb-1 tracking-tight">
              {__("Create an organization")}
            </h2>
            <p className="text-txt-tertiary text-sm mb-4">
              {__("Add a new organization to your account")}
            </p>
            <Button
              to="/organizations/new"
              variant="quaternary"
              icon={IconPlusLarge}
              className="w-full"
            >
              {__("Create organization")}
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
