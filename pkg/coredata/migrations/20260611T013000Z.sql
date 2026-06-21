CREATE TABLE icpms_ingestion_jobs (
    tenant_id character varying(11) NOT NULL,
    id character varying(32) NOT NULL,
    organization_id character varying(32) NOT NULL,
    document_id character varying(32) NOT NULL,
    document_version_id character varying(32) NOT NULL,
    document_file_id character varying(32) NOT NULL,
    job_code character varying(255) NOT NULL,
    job_type character varying(50) NOT NULL,
    extraction_mode character varying(50) NOT NULL,
    file_name_snapshot character varying(255) NOT NULL,
    file_type_snapshot character varying(50) NOT NULL,
    file_size_snapshot bigint NOT NULL,
    status character varying(50) NOT NULL,
    progress_percent integer NOT NULL DEFAULT 0,
    total_blocks integer NOT NULL DEFAULT 0,
    total_pages integer NOT NULL DEFAULT 0,
    total_chars integer NOT NULL DEFAULT 0,
    language_detected character varying(50),
    started_at timestamp with time zone,
    finished_at timestamp with time zone,
    error_message text,
    warning_message text,
    created_by character varying(32) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone
);

ALTER TABLE ONLY icpms_ingestion_jobs
    ADD CONSTRAINT icpms_ingestion_jobs_pkey PRIMARY KEY (tenant_id, id);

CREATE INDEX icpms_ingestion_jobs_org_id_idx ON icpms_ingestion_jobs USING btree (tenant_id, organization_id);
CREATE INDEX icpms_ingestion_jobs_document_file_id_idx ON icpms_ingestion_jobs USING btree (tenant_id, document_file_id);
