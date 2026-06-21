-- Phase 12: Module Giao việc (icpms_assignments)
-- Bảng icpms_assignments lưu việc giao cho các Ban/đơn vị VATM thực hiện checklist.

CREATE TABLE IF NOT EXISTS icpms_assignments (
    tenant_id           text NOT NULL,
    id                  text NOT NULL,
    organization_id     text NOT NULL,

    assignment_code     text NOT NULL,
    assignment_title    text NOT NULL,
    assignment_description text,

    document_id         text,
    document_version_id text,
    requirement_id      text,
    checklist_id        text,

    source_reference    text,
    requirement_text    text,
    checklist_question  text,

    lead_unit_name      text NOT NULL,
    coordination_unit_names text,

    assignee_user_id    text,
    assignee_name       text,
    assigned_by         text,
    assigned_at         timestamp with time zone,

    due_date            timestamp with time zone,
    due_days            int,
    priority            text NOT NULL DEFAULT 'MEDIUM',

    status              text NOT NULL DEFAULT 'DRAFT',
    progress_percent    int NOT NULL DEFAULT 0,

    current_status_text text,
    action_plan_text    text,
    response_note       text,

    requires_evidence   boolean NOT NULL DEFAULT false,
    evidence_status     text NOT NULL DEFAULT 'NOT_REQUIRED',

    created_from        text NOT NULL DEFAULT 'MANUAL',
    ai_review_job_id    text,
    ai_review_suggestion_id text,

    accepted_by_unit_at timestamp with time zone,
    started_at          timestamp with time zone,
    submitted_at        timestamp with time zone,
    completed_at        timestamp with time zone,
    closed_at           timestamp with time zone,
    cancelled_at        timestamp with time zone,

    closed_by           text,
    cancelled_by        text,
    cancel_reason       text,

    created_at          timestamp with time zone NOT NULL,
    updated_at          timestamp with time zone NOT NULL,
    deleted_at          timestamp with time zone,

    PRIMARY KEY (id),
    CONSTRAINT icpms_assignments_org_fkey FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_icpms_assignments_org ON icpms_assignments (tenant_id, organization_id, deleted_at);
CREATE INDEX IF NOT EXISTS idx_icpms_assignments_checklist ON icpms_assignments (checklist_id, deleted_at);
CREATE INDEX IF NOT EXISTS idx_icpms_assignments_lead_unit ON icpms_assignments (tenant_id, organization_id, lead_unit_name, deleted_at);
CREATE INDEX IF NOT EXISTS idx_icpms_assignments_status ON icpms_assignments (tenant_id, organization_id, status, deleted_at);
CREATE INDEX IF NOT EXISTS idx_icpms_assignments_due_date ON icpms_assignments (organization_id, due_date, status, deleted_at);
