import os
import sys
import tempfile
import asyncio
import json
from concurrent.futures import ProcessPoolExecutor, BrokenExecutor

# Must be set before paddle loads
os.environ['OMP_NUM_THREADS'] = '1'
os.environ['MKL_NUM_THREADS'] = '1'

import logging
from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.responses import StreamingResponse

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    stream=sys.stdout,
    force=True,
)
log = logging.getLogger("icpms-ocr")


# ---------------------------------------------------------------------------
# Executor — recreated automatically when subprocess is killed (OOM, crash)
# ---------------------------------------------------------------------------

_executor: ProcessPoolExecutor | None = None


def _get_executor() -> ProcessPoolExecutor:
    global _executor
    if _executor is None or _executor._broken:
        if _executor is not None:
            log.warning("ProcessPoolExecutor broken — recreating.")
            try:
                _executor.shutdown(wait=False, cancel_futures=True)
            except Exception:
                pass
        _executor = ProcessPoolExecutor(max_workers=1)
    return _executor


# ---------------------------------------------------------------------------
# OCR helpers — defined at module level so subprocess can pickle them
# ---------------------------------------------------------------------------

def _table_rows_to_text(rows) -> str:
    lines = []
    for row in rows:
        line = "\t".join(cell.strip() for cell in row if cell is not None)
        if line.strip():
            lines.append(line)
    return "\n".join(lines)


def _extract_page_text(img_bgr, engine, vietocr_predictor, page_no: int) -> str:
    """
    Dùng PP-StructureV3 để phát hiện vị trí các dòng text, sau đó VietOCR
    nhận dạng từng dòng. Tránh dùng latin_PP-OCRv5_mobile_rec (không hỗ trợ
    tiếng Việt có dấu đầy đủ).
    """
    import cv2 as _cv2
    from PIL import Image
    import vatm_pdf_to_word_app as docai

    img_bgr = docai.suppress_light_watermark(img_bgr)

    results = engine.predict(img_bgr)
    all_texts: list[str] = []

    for res in results:
        ocr_res = res["overall_ocr_res"]
        rec_boxes = ocr_res.get("rec_boxes", [])

        log.info("Page %d: detected %d text boxes.", page_no, len(rec_boxes))

        if len(rec_boxes) == 0:
            continue

        # Sort boxes in reading order: top-to-bottom, then left-to-right.
        # rec_boxes contains [x1, y1, x2, y2] or polygon coords.
        def _box_top_left(b):
            pts = list(b)
            if len(pts) == 4 and not isinstance(pts[0], (list, tuple)):
                # [x1, y1, x2, y2] flat
                return (pts[1], pts[0])
            # polygon [[x,y], [x,y], ...] → top-left
            ys = [p[1] for p in pts]
            xs = [p[0] for p in pts]
            return (min(ys), min(xs))

        sorted_boxes = sorted(rec_boxes, key=_box_top_left)

        h, w = img_bgr.shape[:2]
        for box in sorted_boxes:
            pts = list(box)
            if len(pts) == 4 and not isinstance(pts[0], (list, tuple)):
                x1, y1, x2, y2 = int(pts[0]), int(pts[1]), int(pts[2]), int(pts[3])
            else:
                xs = [int(p[0]) for p in pts]
                ys = [int(p[1]) for p in pts]
                x1, y1, x2, y2 = min(xs), min(ys), max(xs), max(ys)

            # Add small padding around the crop to improve VietOCR accuracy
            pad = 4
            x1, y1 = max(0, x1 - pad), max(0, y1 - pad)
            x2, y2 = min(w, x2 + pad), min(h, y2 + pad)

            if x2 <= x1 or y2 <= y1:
                continue

            crop = img_bgr[y1:y2, x1:x2]
            pil_crop = Image.fromarray(_cv2.cvtColor(crop, _cv2.COLOR_BGR2RGB))

            try:
                result = vietocr_predictor.predict(pil_crop)
                # VietOCR trả về string hoặc (text, prob) tuỳ version/config
                text = result[0] if isinstance(result, (tuple, list)) else result
                if text and str(text).strip():
                    all_texts.append(str(text).strip())
            except Exception as exc:
                log.warning("Page %d VietOCR failed on box: %s", page_no, exc)

    return "\n".join(all_texts)


def process_pdf_sync(pdf_path: str) -> dict:
    """Chạy trong worker process riêng — load models + OCR từng trang."""
    import cv2
    from pdf2image import convert_from_path, pdfinfo_from_path
    from PIL import Image
    if not hasattr(Image, "ANTIALIAS"):
        Image.ANTIALIAS = Image.LANCZOS

    import vatm_pdf_to_word_app as docai

    log.info("Worker: loading models...")
    vietocr_predictor = docai.get_vietocr()
    engine = docai.get_engine()
    log.info("Worker: models loaded.")

    # Detect page count first
    try:
        info = pdfinfo_from_path(pdf_path, poppler_path=docai.POPPLER_PATH)
        total_pages = info["Pages"]
    except Exception as e:
        raise RuntimeError(f"Không đọc được thông tin PDF: {e}") from e

    log.info("Worker: PDF has %d pages.", total_pages)

    pages_out = []
    total_chars = 0

    # Process one page at a time to limit peak RAM usage.
    # DPI 200: good balance between quality and memory (each page ~15 MB vs 60 MB at 300).
    for page_no in range(1, total_pages + 1):
        try:
            pil_pages = convert_from_path(
                pdf_path,
                dpi=200,
                first_page=page_no,
                last_page=page_no,
                poppler_path=docai.POPPLER_PATH,
            )
        except Exception as e:
            log.warning("Worker: page %d conversion failed: %s — skipping.", page_no, e)
            continue

        if not pil_pages:
            continue

        img_path = f"{pdf_path}_p{page_no}.jpg"
        pil_pages[0].save(img_path, "JPEG")
        try:
            img_bgr = cv2.imread(img_path)
            if img_bgr is None:
                log.warning("Worker: page %d could not be read as image — skipping.", page_no)
                continue
            text = _extract_page_text(img_bgr, engine, vietocr_predictor, page_no)
        finally:
            if os.path.exists(img_path):
                os.remove(img_path)

        char_count = len(text)
        total_chars += char_count
        pages_out.append({"page_number": page_no, "text": text, "char_count": char_count})
        log.info("Worker: page %d/%d done (%d chars).", page_no, total_pages, char_count)

    return {
        "pages": pages_out,
        "total_pages": len(pages_out),
        "total_chars": total_chars,
    }


# ---------------------------------------------------------------------------
# FastAPI app
# ---------------------------------------------------------------------------

app = FastAPI(title="VATM ICPMS OCR Microservice")


@app.get("/healthz")
def healthz():
    return {"status": "ok"}


@app.post("/ocr/upload")
async def ocr_upload(file: UploadFile = File(...)):
    if not file.filename or not file.filename.lower().endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Chỉ hỗ trợ file PDF")

    data = await file.read()
    if not data:
        raise HTTPException(status_code=400, detail="File rỗng")

    tmp = tempfile.NamedTemporaryFile(suffix=".pdf", delete=False)
    tmp.write(data)
    tmp.close()
    tmp_path = tmp.name

    log.info("Received PDF: %d bytes → %s", len(data), tmp_path)

    async def generate_response():
        loop = asyncio.get_running_loop()
        executor = _get_executor()

        try:
            future = loop.run_in_executor(executor, process_pdf_sync, tmp_path)
        except BrokenExecutor:
            # Pool was broken between check and use — recreate once and retry
            executor = _get_executor()
            future = loop.run_in_executor(executor, process_pdf_sync, tmp_path)

        # Heartbeat: send whitespace every 5 s so the TCP connection stays alive.
        # Go's json.NewDecoder skips leading whitespace, so this is transparent.
        while not future.done():
            yield b" "
            try:
                await asyncio.wait_for(asyncio.shield(future), timeout=5.0)
            except asyncio.TimeoutError:
                pass
            except Exception:
                break

        try:
            result = future.result()
            log.info(
                "OCR complete: %d pages, %d chars.", result["total_pages"], result["total_chars"]
            )
            yield json.dumps(result).encode("utf-8")
        except BrokenExecutor:
            log.error("OCR worker process was killed (OOM?). Will recreate pool on next request.")
            _get_executor()  # force recreation for next request
            # Can't raise HTTPException after headers sent — yield sentinel that Go detects
            yield json.dumps({"ocr_error": "OCR worker bị kill (OOM). Thử lại."}).encode("utf-8")
        except Exception as exc:
            log.exception("OCR worker failed: %s", exc)
            yield json.dumps({"ocr_error": str(exc)}).encode("utf-8")
        finally:
            if os.path.exists(tmp_path):
                os.remove(tmp_path)

    return StreamingResponse(generate_response(), media_type="application/json")
