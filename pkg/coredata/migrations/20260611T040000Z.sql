CREATE TABLE icpms_requirements (
    tenant_id character varying(11) NOT NULL,
    id character varying(32) NOT NULL,
    organization_id character varying(32) NOT NULL,
    document_id character varying(32) NOT NULL,
    document_version_id character varying(32) NOT NULL,
    parse_job_id character varying(32) NOT NULL,
    source_section_id character varying(32),
    requirement_code character varying(50) NOT NULL,
    title text NOT NULL,
    description text,
    requirement_type character varying(50) NOT NULL DEFAULT 'OTHER',
    applicability_status character varying(50) NOT NULL DEFAULT 'UNKNOWN',
    review_status character varying(50) NOT NULL DEFAULT 'CANDIDATE',
    priority character varying(20) NOT NULL DEFAULT 'MEDIUM',
    candidate_score integer NOT NULL DEFAULT 0,
    keyword_matches text,
    is_auto_generated boolean NOT NULL DEFAULT TRUE,
    is_deleted boolean NOT NULL DEFAULT FALSE,
    created_by character varying(32),
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);

ALTER TABLE ONLY icpms_requirements
    ADD CONSTRAINT icpms_requirements_pkey PRIMARY KEY (tenant_id, id);

CREATE INDEX icpms_requirements_org_idx ON icpms_requirements USING btree (tenant_id, organization_id) WHERE NOT is_deleted;
CREATE INDEX icpms_requirements_parsejob_idx ON icpms_requirements USING btree (tenant_id, parse_job_id) WHERE NOT is_deleted;
