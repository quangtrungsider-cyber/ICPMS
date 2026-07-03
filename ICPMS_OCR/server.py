"""
ICPMS OCR Service — HTTP wrapper cho ICPMS_OCR library.

Cách chạy (từ thư mục gốc project):
    python ICPMS_OCR/server.py

Hoặc với port tuỳ chỉnh:
    OCR_PORT=8765 python ICPMS_OCR/server.py
"""

import io
import logging
import os
import sys

# Thêm project root vào sys.path để "import ICPMS_OCR" hoạt động
_HERE = os.path.dirname(os.path.abspath(__file__))
_ROOT = os.path.dirname(_HERE)
for _p in (_ROOT, _HERE):
    if _p not in sys.path:
        sys.path.insert(0, _p)

from fastapi import FastAPI, File, HTTPException, UploadFile
import uvicorn

# Patch PIL.Image.ANTIALIAS for Pillow 10+ compatibility
from PIL import Image
if not hasattr(Image, "ANTIALIAS"):
    Image.ANTIALIAS = getattr(Image, "LANCZOS", 1)

# Import helpers từ ICPMS_OCR — model CHƯA load ở bước này
from ICPMS_OCR import _ocr_image, _pdf_to_images_from_bytes

# Ghi log vào file UTF-8 (tránh encoding issue khi chạy ẩn trên Windows)
_LOG_FILE = os.path.join(_ROOT, "ocr_server.log")
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s %(levelname)s [ocr-server] %(message)s",
    handlers=[logging.FileHandler(_LOG_FILE, encoding="utf-8", mode="a")],
)
log = logging.getLogger("icpms-ocr")

app = FastAPI(title="ICPMS OCR Service", version="1.0.0")


# ---------------------------------------------------------------------------
# Health check
# ---------------------------------------------------------------------------

@app.get("/health")
def health():
    return {"status": "ok"}


# ---------------------------------------------------------------------------
# OCR endpoint — Go backend gọi endpoint này
# ---------------------------------------------------------------------------

@app.post("/ocr/upload")
def ocr_upload(file: UploadFile = File(...)):
    """
    Nhận file PDF (scan) hoặc ảnh, trả về text từng trang.

    Request : multipart/form-data, field "file"
    Response:
        {
            "pages": [{"page_number": 1, "text": "...", "char_count": 150}],
            "total_pages": 5,
            "total_chars": 2500
        }
    """
    data = file.file.read()
    filename = file.filename or "upload.pdf"
    ext = os.path.splitext(filename)[-1].lower()

    log.info("Nhận file: %s (%d bytes)", filename, len(data))

    try:
        if ext == ".pdf":
            pages = _run_ocr_pdf(data)
        else:
            # Ảnh đơn (jpg, png, tiff, …)
            from PIL import Image as _Image
            img = _Image.open(io.BytesIO(data)).convert("RGB")
            text = _ocr_image(img)
            pages = [{"page_number": 1, "text": text, "char_count": len(text)}]

        total_chars = sum(p["char_count"] for p in pages)
        log.info("Xong: %d trang, %d ký tự", len(pages), total_chars)

        return {
            "pages": pages,
            "total_pages": len(pages),
            "total_chars": total_chars,
        }

    except Exception as exc:
        log.exception("OCR thất bại: %s", exc)
        raise HTTPException(status_code=500, detail=str(exc))


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def _run_ocr_pdf(pdf_bytes: bytes) -> list:
    """
    Render từng trang PDF thành ảnh rồi chạy VietOCR.
    Model load lần đầu (~30-60 giây), các lần sau dùng cache.
    """
    images = _pdf_to_images_from_bytes(pdf_bytes)
    log.info("PDF có %d trang, bắt đầu OCR…", len(images))

    pages = []
    for i, img in enumerate(images, 1):
        log.info("  Trang %d/%d…", i, len(images))
        try:
            text = _ocr_image(img)
        except Exception as exc:
            log.warning("  Trang %d lỗi: %s — bỏ qua", i, exc)
            text = ""
        pages.append({
            "page_number": i,
            "text": text,
            "char_count": len(text),
        })

    return pages


# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    port = int(os.environ.get("OCR_PORT", "8765"))
    log.info("ICPMS OCR Service khởi động tại port %d", port)
    log.info("Model VietOCR sẽ load lần đầu khi có request đầu tiên.")
    uvicorn.run(app, host="0.0.0.0", port=port, log_level="info")
