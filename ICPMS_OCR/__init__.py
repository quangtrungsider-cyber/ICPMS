"""
ICPMS_OCR — Module bóc tách văn bản tiếng Việt
================================================
Tích hợp vào ICPMS AIS:

    from ICPMS_OCR import extract_text

    text = extract_text("path/to/file.pdf")   # PDF hoặc ảnh
    text = extract_text("path/to/scan.jpg")

Logic tự động:
  - PDF có text layer đầy đủ  → dùng pdfplumber (nhanh)
  - PDF scan / có chữ ký rỗng → dùng VietOCR  (chính xác tiếng Việt)
  - Ảnh (jpg, png, ...)        → dùng VietOCR trực tiếp
"""

import io
import os
import sys
import threading
import numpy as np

# Đảm bảo import đúng từ thư mục ICPMS_OCR
_BASE_DIR = os.path.dirname(os.path.abspath(__file__))
if _BASE_DIR not in sys.path:
    sys.path.insert(0, _BASE_DIR)

os.environ.setdefault("CUDA_VISIBLE_DEVICES", "")  # mặc định CPU

_ocr = None
_lock = threading.Lock()


def _get_ocr():
    global _ocr
    if _ocr is None:
        with _lock:
            if _ocr is None:
                from module.ocr import OCR
                _ocr = OCR()
    return _ocr


def _pdf_extract_native(pdf_path: str) -> str:
    """Trích text từ PDF có text layer bằng pdfplumber."""
    import pdfplumber
    with open(pdf_path, "rb") as f:
        file_bytes = f.read()
    pages_text = []
    with pdfplumber.open(io.BytesIO(file_bytes)) as pdf:
        for page in pdf.pages:
            t = page.extract_text() or ""
            pages_text.append(t)
    return "\n".join(pages_text)


def _pdf_to_images(pdf_path: str, zoom: int = 2):
    """Chuyển PDF sang danh sách PIL Image."""
    import pdfplumber
    from PIL import Image
    with open(pdf_path, "rb") as f:
        file_bytes = f.read()
    images = []
    with pdfplumber.open(io.BytesIO(file_bytes)) as pdf:
        for page in pdf.pages:
            pi = page.to_image(resolution=72 * zoom)
            buf = io.BytesIO()
            pi.save(buf, format="PNG")
            buf.seek(0)
            images.append(Image.open(buf).convert("RGB"))
    return images


def _pdf_to_images_from_bytes(pdf_bytes: bytes, zoom: int = 2):
    """Chuyển PDF bytes sang danh sách PIL Image — 1 phần tử/trang."""
    import pdfplumber
    from PIL import Image
    images = []
    with pdfplumber.open(io.BytesIO(pdf_bytes)) as pdf:
        for page in pdf.pages:
            pi = page.to_image(resolution=72 * zoom)
            buf = io.BytesIO()
            pi.save(buf, format="PNG")
            buf.seek(0)
            images.append(Image.open(buf).convert("RGB"))
    return images


def _remove_watermark(pil_img) -> "Image.Image":
    """
    Loại watermark bằng 3 bước:
      1. Background subtraction (morphological) — pattern/tiled watermark
      2. Normalize — watermark mờ/semi-transparent nhạt đi
      3. Adaptive binarization — nhị phân hóa, loại hẳn watermark nhạt
    """
    import cv2
    arr = np.array(pil_img.convert("RGB"))
    gray = cv2.cvtColor(arr, cv2.COLOR_RGB2GRAY)
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (40, 40))
    background = cv2.dilate(gray, kernel)
    normalized = cv2.divide(gray, background, scale=255)
    binary = cv2.adaptiveThreshold(
        normalized, 255,
        cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
        cv2.THRESH_BINARY,
        blockSize=21, C=5,
    )
    clean = cv2.fastNlMeansDenoising(binary, h=10)
    from PIL import Image as _Image
    return _Image.fromarray(cv2.cvtColor(clean, cv2.COLOR_GRAY2RGB))


def _ocr_image(pil_img, watermark: bool = False) -> str:
    """Chạy VietOCR trên một PIL Image, trả về text."""
    ocr = _get_ocr()
    img = _remove_watermark(pil_img) if watermark else pil_img
    results = ocr(np.array(img))
    if not results:
        return ""
    return "\n".join(text for _, (text, score) in results if text)


def extract_text(
    file_path: str,
    min_chars_per_page: int = 30,
    pdf_zoom: int = 2,
    watermark: bool = False,
) -> str:
    """
    Trích xuất văn bản từ file PDF hoặc ảnh.

    Tham số:
        file_path         : đường dẫn tới file PDF / JPG / PNG / BMP / TIFF
        min_chars_per_page: ngưỡng ký tự tối thiểu/trang để coi là PDF có text.
                            Nếu thấp hơn → tự động dùng OCR.
        pdf_zoom          : độ phóng khi render PDF sang ảnh (mặc định 2 = 144 DPI)
        watermark         : True → áp dụng lọc watermark trước khi OCR

    Trả về:
        str — nội dung văn bản đã trích xuất
    """
    if not os.path.exists(file_path):
        raise FileNotFoundError(f"Không tìm thấy file: {file_path}")

    ext = os.path.splitext(file_path)[-1].lower()

    if ext == ".pdf":
        # Thử pdfplumber trước
        native_text = _pdf_extract_native(file_path)
        pages_native = [p for p in native_text.split("\n") if p.strip()]
        avg_chars = len(native_text) / max(1, len(pages_native))

        if avg_chars >= min_chars_per_page and not watermark:
            return native_text  # PDF có text layer → dùng luôn

        # PDF scan hoặc có chữ ký hoặc có watermark → dùng VietOCR
        images = _pdf_to_images(file_path, zoom=pdf_zoom)
        page_texts = [_ocr_image(img, watermark=watermark) for img in images]
        return "\n\n--- Trang mới ---\n\n".join(page_texts)

    else:
        # Ảnh trực tiếp
        from PIL import Image
        img = Image.open(file_path).convert("RGB")
        return _ocr_image(img, watermark=watermark)


def extract_text_from_bytes(
    file_bytes: bytes,
    filename: str,
    min_chars_per_page: int = 30,
    pdf_zoom: int = 2,
    watermark: bool = False,
) -> str:
    """
    Giống extract_text() nhưng nhận bytes thay vì đường dẫn.
    Tiện dụng khi ICPMS xử lý file upload trong memory.

    Ví dụ:
        with open("scan.pdf", "rb") as f:
            text = extract_text_from_bytes(f.read(), "scan.pdf", watermark=True)
    """
    import tempfile
    ext = os.path.splitext(filename)[-1].lower()
    with tempfile.NamedTemporaryFile(suffix=ext, delete=False) as tmp:
        tmp.write(file_bytes)
        tmp_path = tmp.name
    try:
        return extract_text(tmp_path, min_chars_per_page, pdf_zoom, watermark)
    finally:
        os.unlink(tmp_path)
