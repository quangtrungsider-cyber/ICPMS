-- Copyright (c) 2026 Probo Inc <hello@getprobo.com>.
--
-- Permission to use, copy, modify, and/or distribute this software for any
-- purpose with or without fee is hereby granted, provided that the above
-- copyright notice and this permission notice appear in all copies.
--
-- THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
-- REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
-- AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
-- INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
-- LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
-- OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
-- PERFORMANCE OF THIS SOFTWARE.

CREATE TABLE IF NOT EXISTS icpms_documents (
    id character varying(27) NOT NULL,
    tenant_id character varying(27) NOT NULL,
    organization_id character varying(27) NOT NULL,
    code character varying(255) NOT NULL,
    title text NOT NULL,
    document_type character varying(64) NOT NULL,
    document_group character varying(64),
    source_organization character varying(255),
    issuer character varying(255),
    main_domain character varying(255),
    page_count integer,
    issued_date timestamp with time zone,
    effective_date timestamp with time zone,
    language character varying(64),
    classification character varying(64),
    applicable_to_vatm character varying(64),
    priority character varying(64),
    status character varying(64) NOT NULL,
    description text,
    notes text,
    owning_unit_id character varying(27),
    created_by character varying(27) NOT NULL,
    updated_by character varying(27) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,
    CONSTRAINT icpms_documents_pkey PRIMARY KEY (id),
    CONSTRAINT icpms_documents_organization_code_unique UNIQUE (organization_id, code)
);

CREATE INDEX IF NOT EXISTS icpms_documents_tenant_id_idx ON icpms_documents USING btree (tenant_id);
CREATE INDEX IF NOT EXISTS icpms_documents_organization_id_idx ON icpms_documents USING btree (organization_id);
