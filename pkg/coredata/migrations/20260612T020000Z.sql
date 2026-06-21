CREATE TABLE IF NOT EXISTS icpms_ai_review_jobs (
    tenant_id text NOT NULL,
    id text NOT NULL,
    organization_id text NOT NULL,
    document_id text NOT NULL,
    document_version_id text NOT NULL,
    job_code text NOT NULL,
    review_scope text NOT NULL DEFAULT 'ALL',
    status text NOT NULL DEFAULT 'QUEUED',
    progress_percent integer NOT NULL DEFAULT 0,
    total_requirements integer NOT NULL DEFAULT 0,
    processed_requirements integer NOT NULL DEFAULT 0,
    total_suggestions integer NOT NULL DEFAULT 0,
    total_accepted integer NOT NULL DEFAULT 0,
    total_rejected integer NOT NULL DEFAULT 0,
    ai_provider text NOT NULL DEFAULT 'RULE_BASED',
    ai_model text,
    error_message text,
    warning_message text,
    created_by text NOT NULL,
    started_at timestamp with time zone,
    finished_at timestamp with time zone,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,

    PRIMARY KEY (id)
);

CREATE INDEX IF NOT EXISTS idx_icpms_ai_review_jobs_org ON icpms_ai_review_jobs (organization_id, deleted_at);
CREATE INDEX IF NOT EXISTS idx_icpms_ai_review_jobs_version ON icpms_ai_review_jobs (document_version_id, deleted_at);
