-- Phase 13: Cấu hình AI cho tổ chức (icpms_ai_configs)
-- Lưu API key và model mặc định cho từng nhà cung cấp AI, theo phạm vi tổ chức.

CREATE TABLE IF NOT EXISTS icpms_ai_configs (
    tenant_id       text NOT NULL,
    organization_id text NOT NULL,
    provider        text NOT NULL,
    api_key         text,
    default_model   text,
    is_enabled      boolean NOT NULL DEFAULT true,
    created_at      timestamp with time zone NOT NULL,
    updated_at      timestamp with time zone NOT NULL,
    PRIMARY KEY (tenant_id, organization_id, provider),
    CONSTRAINT icpms_ai_configs_org_fkey FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_icpms_ai_configs_org ON icpms_ai_configs (tenant_id, organization_id);
