-- Add ON DELETE CASCADE to organization_id FK on all ICPMS tables so that
-- deleting an organization cascades cleanly without FK violations.

ALTER TABLE icpms_documents
    ADD CONSTRAINT icpms_documents_organization_id_fkey
    FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;

ALTER TABLE icpms_document_versions
    ADD CONSTRAINT icpms_document_versions_organization_id_fkey
    FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;

ALTER TABLE icpms_ingestion_jobs
    ADD CONSTRAINT icpms_ingestion_jobs_organization_id_fkey
    FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;

ALTER TABLE icpms_extracted_text_blocks
    ADD CONSTRAINT icpms_extracted_text_blocks_organization_id_fkey
    FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;

ALTER TABLE icpms_document_parse_jobs
    ADD CONSTRAINT icpms_document_parse_jobs_organization_id_fkey
    FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;

ALTER TABLE icpms_parsed_document_sections
    ADD CONSTRAINT icpms_parsed_document_sections_organization_id_fkey
    FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;

ALTER TABLE icpms_requirements
    ADD CONSTRAINT icpms_requirements_organization_id_fkey
    FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;

ALTER TABLE icpms_requirement_generation_jobs
    ADD CONSTRAINT icpms_requirement_generation_jobs_organization_id_fkey
    FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;

ALTER TABLE icpms_ai_review_jobs
    ADD CONSTRAINT icpms_ai_review_jobs_organization_id_fkey
    FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;

ALTER TABLE icpms_ai_review_suggestions
    ADD CONSTRAINT icpms_ai_review_suggestions_organization_id_fkey
    FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE CASCADE;
