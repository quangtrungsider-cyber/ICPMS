-- Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.
-- Phase 8: Extend parsed sections table with content, path, warnings, and source page range.

ALTER TABLE icpms_parsed_document_sections
  ADD COLUMN IF NOT EXISTS content_text    TEXT,
  ADD COLUMN IF NOT EXISTS path            TEXT,
  ADD COLUMN IF NOT EXISTS warnings        TEXT,
  ADD COLUMN IF NOT EXISTS source_page_start INT,
  ADD COLUMN IF NOT EXISTS source_page_end   INT;
