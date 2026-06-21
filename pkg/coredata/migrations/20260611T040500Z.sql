CREATE TABLE icpms_requirement_generation_jobs (
    tenant_id character varying(11) NOT NULL,
    id character varying(32) NOT NULL,
    organization_id character varying(32) NOT NULL,
    parse_job_id character varying(32) NOT NULL,
    status character varying(20) NOT NULL DEFAULT 'PENDING',
    total_candidates integer NOT NULL DEFAULT 0,
    total_created integer NOT NULL DEFAULT 0,
    total_skipped integer NOT NULL DEFAULT 0,
    total_duplicates integer NOT NULL DEFAULT 0,
    error_message text,
    created_by character varying(32),
    started_at timestamp with time zone,
    finished_at timestamp with time zone,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);

ALTER TABLE ONLY icpms_requirement_generation_jobs
    ADD CONSTRAINT icpms_requirement_generation_jobs_pkey PRIMARY KEY (tenant_id, id);

CREATE INDEX icpms_req_gen_jobs_parsejob_idx ON icpms_requirement_generation_jobs USING btree (tenant_id, parse_job_id);
