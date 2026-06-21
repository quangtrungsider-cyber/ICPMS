CREATE TABLE icpms_parsed_document_sections (
    tenant_id character varying(11) NOT NULL,
    id character varying(32) NOT NULL,
    organization_id character varying(32) NOT NULL,
    parse_job_id character varying(32) NOT NULL,
    document_id character varying(32) NOT NULL,
    document_version_id character varying(32) NOT NULL,
    parent_id character varying(32),
    section_type character varying(50) NOT NULL,
    section_number character varying(255),
    title text NOT NULL,
    full_heading text NOT NULL,
    content_start_line integer NOT NULL DEFAULT 0,
    content_end_line integer NOT NULL DEFAULT 0,
    depth_level integer NOT NULL DEFAULT 0,
    sort_order integer NOT NULL DEFAULT 0,
    confidence_score integer NOT NULL DEFAULT 100,
    raw_text text,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone
);

ALTER TABLE ONLY icpms_parsed_document_sections
    ADD CONSTRAINT icpms_parsed_document_sections_pkey PRIMARY KEY (tenant_id, id);

CREATE INDEX icpms_parsed_document_sections_parse_job_id_idx ON icpms_parsed_document_sections USING btree (tenant_id, parse_job_id);
CREATE INDEX icpms_parsed_document_sections_parent_id_idx ON icpms_parsed_document_sections USING btree (tenant_id, parent_id);
