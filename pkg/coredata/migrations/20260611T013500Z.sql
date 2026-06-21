CREATE TABLE icpms_extracted_text_blocks (
    tenant_id character varying(11) NOT NULL,
    id character varying(32) NOT NULL,
    organization_id character varying(32) NOT NULL,
    ingestion_job_id character varying(32) NOT NULL,
    document_id character varying(32) NOT NULL,
    document_version_id character varying(32) NOT NULL,
    document_file_id character varying(32) NOT NULL,
    block_index integer NOT NULL,
    page_number integer,
    source_order integer NOT NULL,
    section_number character varying(255),
    section_hint character varying(500),
    block_type character varying(50) NOT NULL,
    raw_text text NOT NULL,
    normalized_text text NOT NULL,
    language_detected character varying(50),
    char_count integer NOT NULL DEFAULT 0,
    word_count integer NOT NULL DEFAULT 0,
    hash character varying(255),
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);

ALTER TABLE ONLY icpms_extracted_text_blocks
    ADD CONSTRAINT icpms_extracted_text_blocks_pkey PRIMARY KEY (tenant_id, id);

CREATE INDEX icpms_extracted_text_blocks_job_id_idx ON icpms_extracted_text_blocks USING btree (tenant_id, ingestion_job_id);
CREATE INDEX icpms_extracted_text_blocks_org_id_idx ON icpms_extracted_text_blocks USING btree (tenant_id, organization_id);
