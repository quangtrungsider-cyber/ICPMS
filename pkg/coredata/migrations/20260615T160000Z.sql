-- Phase: Business code system
-- Thêm document_code chuẩn hóa vào tài liệu và bảng sequence tự tăng.

-- 1. document_code trên icpms_documents
--    Regex hợp lệ: ^[A-Z0-9]+(-[A-Z0-9]+)*$  (ví dụ: ND125, ANX11, QC-VATM)
ALTER TABLE icpms_documents
    ADD COLUMN IF NOT EXISTS document_code text;

CREATE UNIQUE INDEX IF NOT EXISTS idx_icpms_documents_document_code
    ON icpms_documents (tenant_id, organization_id, document_code)
    WHERE document_code IS NOT NULL;

-- 2. Bảng sequence sinh số thứ tự nghiệp vụ.
--    Khoá: (tenant_id, organization_id, module, document_code, year)
--    Tăng atomically bằng ON CONFLICT DO UPDATE.
CREATE TABLE IF NOT EXISTS icpms_code_sequences (
    tenant_id       text NOT NULL,
    organization_id text NOT NULL,
    module          text NOT NULL,   -- 'ING' | 'REQ' | 'AIR' | 'CHK'
    document_code   text NOT NULL,
    year            int  NOT NULL,
    next_val        int  NOT NULL DEFAULT 1,
    PRIMARY KEY (tenant_id, organization_id, module, document_code, year)
);
