CREATE TABLE IF NOT EXISTS icpms_ai_review_suggestions (
    tenant_id text NOT NULL,
    id text NOT NULL,
    organization_id text NOT NULL,
    ai_review_job_id text NOT NULL,
    requirement_id text NOT NULL,
    document_id text NOT NULL,
    document_version_id text NOT NULL,

    suggested_implementation_method text,
    suggested_responsible_unit text,
    suggested_responsible_role text,
    suggested_evidence text,
    suggested_current_status text,
    suggested_action_plan text,
    suggested_checklist_question text,
    suggested_risk_if_not_complied text,
    suggested_plain_language_text text,
    suggested_requirement_type text,
    suggested_applicability_status text,
    suggested_priority text,
    suggested_compliance_domain text,

    ai_confidence numeric(4,3) NOT NULL DEFAULT 0,
    status text NOT NULL DEFAULT 'NEEDS_HUMAN_REVIEW',
    accepted_by text,
    accepted_at timestamp with time zone,
    rejected_by text,
    rejected_at timestamp with time zone,
    rejection_reason text,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    deleted_at timestamp with time zone,

    PRIMARY KEY (id),
    CONSTRAINT fk_ai_suggestion_job FOREIGN KEY (ai_review_job_id) REFERENCES icpms_ai_review_jobs(id) ON DELETE CASCADE
    -- No FK on requirement_id: icpms_requirements uses composite PK (tenant_id, id), FK on id alone is unsupported
);

CREATE INDEX IF NOT EXISTS idx_icpms_ai_review_suggestions_job ON icpms_ai_review_suggestions (ai_review_job_id, deleted_at);
CREATE INDEX IF NOT EXISTS idx_icpms_ai_review_suggestions_req ON icpms_ai_review_suggestions (requirement_id, deleted_at);
