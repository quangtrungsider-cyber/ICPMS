-- Add applicability_note to store AI reasoning for applicability decisions.
-- Also tracks when AI last reviewed the requirement.
ALTER TABLE icpms_requirements ADD COLUMN IF NOT EXISTS applicability_note TEXT;
ALTER TABLE icpms_requirements ADD COLUMN IF NOT EXISTS ai_reviewed_at TIMESTAMP WITH TIME ZONE;
