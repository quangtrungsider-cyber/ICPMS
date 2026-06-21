-- Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.
-- Phase 8: Extend parse jobs table with ICAO-specific section counts and warning_message.

ALTER TABLE icpms_document_parse_jobs
  ADD COLUMN IF NOT EXISTS warning_message TEXT,
  ADD COLUMN IF NOT EXISTS total_chapters    INT NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS total_paragraphs  INT NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS total_subparagraphs INT NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS total_appendices  INT NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS total_tables      INT NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS total_figures     INT NOT NULL DEFAULT 0;
