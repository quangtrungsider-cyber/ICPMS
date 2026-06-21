-- Phase 11: Checklist chính thức
-- Bảng icpms_checklists lưu checklist tuân thủ được tạo từ AI Review hoặc thủ công.

CREATE TABLE IF NOT EXISTS icpms_checklists (
    tenant_id           text NOT NULL,
    id                  text NOT NULL,
    organization_id     text NOT NULL,
    document_id         text NOT NULL,
    document_version_id text NOT NULL,
    requirement_id      text,
    ai_review_job_id    text,
    ai_review_suggestion_id text,

    checklist_code          text NOT NULL,
    checklist_question      text NOT NULL,
    requirement_text        text,
    source_reference        text,
    source_text             text,

    implementation_method   text,
    responsible_unit        text,
    responsible_role        text,
    required_evidence       text,
    current_status_text     text,
    action_plan             text,
    risk_if_not_complied    text,

    priority                text NOT NULL DEFAULT 'MEDIUM',
    compliance_domain       text,
    frequency               text,
    due_days                int,

    status                  text NOT NULL DEFAULT 'NEEDS_REVIEW',
    approval_status         text NOT NULL DEFAULT 'PENDING_REVIEW',

    created_from    text NOT NULL DEFAULT 'MANUAL',
    created_by      text,
    reviewed_by     text,
    reviewed_at     timestamp with time zone,
    approved_by     text,
    approved_at     timestamp with time zone,
    rejected_by     text,
    rejected_at     timestamp with time zone,
    rejection_reason text,

    created_at  timestamp with time zone NOT NULL,
    updated_at  timestamp with time zone NOT NULL,
    deleted_at  timestamp with time zone,

    PRIMARY KEY (id),
    CONSTRAINT icpms_checklists_org_fkey FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_icpms_checklists_org ON icpms_checklists (tenant_id, organization_id, deleted_at);
CREATE INDEX IF NOT EXISTS idx_icpms_checklists_doc ON icpms_checklists (document_id, document_version_id, deleted_at);
CREATE INDEX IF NOT EXISTS idx_icpms_checklists_req ON icpms_checklists (requirement_id, deleted_at);
CREATE INDEX IF NOT EXISTS idx_icpms_checklists_suggestion ON icpms_checklists (ai_review_suggestion_id, deleted_at);
CREATE INDEX IF NOT EXISTS idx_icpms_checklists_status ON icpms_checklists (tenant_id, organization_id, status, approval_status, deleted_at);
