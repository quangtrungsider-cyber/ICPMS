CREATE TABLE icpms_document_parse_jobs (
    tenant_id character varying(11) NOT NULL,
    id character varying(32) NOT NULL,
    organization_id character varying(32) NOT NULL,
    document_id character varying(32) NOT NULL,
    document_version_id character varying(32) NOT NULL,
    document_file_id character varying(32) NOT NULL,
    ingestion_job_id character varying(32) NOT NULL,
    parser_type character varying(50) NOT NULL,
    status character varying(50) NOT NULL,
    total_sections integer NOT NULL DEFAULT 0,
    max_depth integer NOT NULL DEFAULT 0,
    language character varying(50) NOT NULL DEFAULT 'vi',
    error_message text,
    started_at timestamp with time zone,
    finished_at timestamp with time zone,
    created_by character varying(32) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone
);

ALTER TABLE ONLY icpms_document_parse_jobs
    ADD CONSTRAINT icpms_document_parse_jobs_pkey PRIMARY KEY (tenant_id, id);

CREATE INDEX icpms_document_parse_jobs_org_id_idx ON icpms_document_parse_jobs USING btree (tenant_id, organization_id);
CREATE INDEX icpms_document_parse_jobs_ingestion_job_id_idx ON icpms_document_parse_jobs USING btree (tenant_id, ingestion_job_id);
