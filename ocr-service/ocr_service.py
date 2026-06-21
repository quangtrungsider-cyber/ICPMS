"""
icpms-ocr-service — microservice OCR cho VATM ICPMS.

Bọc lại logic PP-StructureV3 + VietOCR có sẵn trong vatm_pdf_to_word_app.py
(KHÔNG sửa file gốc, chỉ import và tái sử dụng các hàm xử lý ảnh/OCR), bỏ phần
dựng Word/AI-restructure/GUI vì backend Go chỉ cần TEXT THUẦN theo từng trang.

API:
    POST /ocr/upload
    multipart/form-data, field "file" = nội dung PDF

Trả về (đúng format mà pkg/probo/icpms_text_extractor.go::callOCRService mong đợi):
    {
      "pages": [
        {"page_number": 1, "text": "...", "char_count": 123},
        ...
      ],
      "total_pages": N,
      "total_chars": M
    }
"""

import logging
import os
import tempfile

import cv2
from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.responses import JSONResponse
from pdf2image import convert_from_path
from pydantic import BaseModel

# VietOCR (thư viện cũ) gọi Image.ANTIALIAS khi resize ảnh trước khi nhận diện.
# Pillow >=10 đã xoá hẳn hằng số này (đổi tên thành Image.LANCZOS từ Pillow 9).
# Patch tương thích ở đây, TRƯỚC khi vatm_pdf_to_word_app.py kịp import vietocr
# (import vietocr chỉ xảy ra lazy trong get_vietocr(), nhưng patch sớm ở đây
# vẫn áp dụng đúng lúc vì toàn bộ module này load 1 lần khi service khởi động).
from PIL import Image
if not hasattr(Image, "ANTIALIAS"):
    Image.ANTIALIAS = Image.LANCZOS

# Import nguyên file gốc làm "thư viện" — vatm_pdf_to_word_app.py chỉ tạo cửa sổ
# Tkinter trong khối `if __name__ == "__main__":`, nên import bình thường ở đây
# (chạy như module) là AN TOÀN, không tự mở GUI.
import vatm_pdf_to_word_app as docai

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
log = logging.getLogger("icpms-ocr")

app = FastAPI(title="ICPMS OCR Service", version="1.0.0")


class OCRPage(BaseModel):
    page_number: int
    text: str
    char_count: int


class OCRResponse(BaseModel):
    pages: list[OCRPage]
    total_pages: int
    total_chars: int


def _table_rows_to_text(rows):
    """Chuyển bảng (list[list[str]]) thành text thuần, mỗi dòng 1 hàng, các ô
    nối bằng tab — đủ để các bước xử lý sau (NLP/so khớp checklist) tách lại
    nếu cần, mà vẫn đọc được như văn bản thường."""
    lines = []
    for row in rows:
        line = "\t".join(cell.strip() for cell in row if cell is not None)
        if line.strip():
            lines.append(line)
    return "\n".join(lines)


def _extract_page_text(img_bgr, engine, vietocr_predictor, page_no: int) -> str:
    """Chạy PP-StructureV3 (layout) + VietOCR (nhận diện chữ) cho 1 trang đã
    render thành ảnh, trả về text thuần theo đúng thứ tự đọc trên trang.
    Logic giống process_pdf() trong vatm_pdf_to_word_app.py, bỏ phần ghi Word."""
    img_bgr = docai.suppress_light_watermark(img_bgr)
    parts: list[str] = []

    def _noop_log(msg):
        log.info("  (trang %s) %s", page_no, msg)

    results = engine.predict(img_bgr)
    for res in results:
        blocks = res["parsing_res_list"]
        ocr_res = res["overall_ocr_res"]
        line_boxes = (
            [list(b) for b in ocr_res["rec_boxes"]] if len(ocr_res["rec_boxes"]) else []
        )
        table_res_list = res.get("table_res_list", [])
        table_index = 0
        used_mask = [False] * len(line_boxes)

        for block in blocks:
            label = block.label
            block_box = block.bbox

            if label in docai.TABLE_LABELS:
                table_result = docai.build_table_rows(
                    img_bgr, table_res_list, table_index, line_boxes,
                    vietocr_predictor, _noop_log, used_mask=used_mask, block_box=block_box,
                )
                table_index += 1
                if table_result:
                    rows_data, _font_size, _ratios = table_result
                    table_text = _table_rows_to_text(rows_data)
                    if table_text:
                        parts.append(table_text)
                continue

            content, _font_size = docai.recognize_block_text(
                img_bgr, block_box, line_boxes, vietocr_predictor, used_mask=used_mask,
            )
            if not content:
                continue
            if label in docai.DROP_LABELS:
                continue
            if docai.looks_like_ocr_garbage(content):
                continue
            parts.append(content)

        orphan_indices = [i for i, used in enumerate(used_mask) if not used]
        if orphan_indices:
            for text, _font_size in docai.group_orphan_lines(
                img_bgr, orphan_indices, line_boxes, vietocr_predictor,
            ):
                if docai.looks_like_ocr_garbage(text):
                    continue
                parts.append(text)

    return "\n\n".join(parts)


@app.get("/healthz")
def healthz():
    return {"status": "ok"}


@app.post("/ocr/upload", response_model=OCRResponse)
async def ocr_upload(file: UploadFile = File(...)):
    if not file.filename or not file.filename.lower().endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Chỉ hỗ trợ file PDF")

    data = await file.read()
    if not data:
        raise HTTPException(status_code=400, detail="File rỗng")

    with tempfile.NamedTemporaryFile(suffix=".pdf", delete=False) as tmp:
        tmp.write(data)
        tmp_path = tmp.name

    try:
        log.info("Đang tải model VietOCR / PP-StructureV3 (nếu chưa tải)...")
        vietocr_predictor = docai.get_vietocr()
        engine = docai.get_engine()

        try:
            pil_pages = convert_from_path(tmp_path, dpi=300, poppler_path=docai.POPPLER_PATH)
        except Exception as e:
            raise HTTPException(
                status_code=500,
                detail=f"Không đọc được PDF (thiếu poppler-utils hoặc file lỗi): {e}",
            )

        pages_out: list[OCRPage] = []
        total_chars = 0

        for idx, pil_img in enumerate(pil_pages, start=1):
            img_path = f"{tmp_path}_p{idx}.jpg"
            pil_img.save(img_path, "JPEG")
            try:
                img_bgr = cv2.imread(img_path)
                if img_bgr is None:
                    continue
                text = _extract_page_text(img_bgr, engine, vietocr_predictor, idx)
            finally:
                if os.path.exists(img_path):
                    os.remove(img_path)

            char_count = len(text)
            total_chars += char_count
            pages_out.append(OCRPage(page_number=idx, text=text, char_count=char_count))
            log.info("Trang %d/%d xong (%d ký tự).", idx, len(pil_pages), char_count)

        return OCRResponse(
            pages=pages_out,
            total_pages=len(pages_out),
            total_chars=total_chars,
        )
    finally:
        if os.path.exists(tmp_path):
            os.remove(tmp_path)


@app.exception_handler(Exception)
async def unhandled_exception_handler(request, exc):
    log.exception("Lỗi không bắt được khi xử lý request")
    return JSONResponse(status_code=500, content={"detail": str(exc)})