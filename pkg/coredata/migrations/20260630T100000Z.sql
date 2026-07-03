-- Thêm ai_model_used vào icpms_ingestion_jobs để theo dõi model AI đã dùng làm sạch văn bản.
-- Giá trị: "RULE_BASED" (mặc định), hoặc tên model Gemini (vd: "gemini-2.5-flash").
ALTER TABLE icpms_ingestion_jobs ADD COLUMN IF NOT EXISTS ai_model_used text;
