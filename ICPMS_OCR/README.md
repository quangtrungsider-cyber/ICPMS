# ICPMS_OCR

Module bóc tách văn bản tiếng Việt cho ICPMS AIS.  
Hỗ trợ PDF có text layer, PDF scan, PDF có chữ ký, ảnh (JPG/PNG/...).

---

## Cài đặt trên server

```bash
# 1. Đặt thư mục ICPMS_OCR vào trong thư mục ICPMS
#    Kết quả: ICPMS/ICPMS_OCR/

# 2. Cài dependencies (trong virtual env của ICPMS)
pip install -r ICPMS_OCR/requirements.txt

# 3. (Tùy chọn) Nếu server chưa có VGG19 pretrained, copy từ máy cũ:
#    Nguồn:  C:\Users\<user>\.cache\torch\hub\checkpoints\vgg19_bn-c79401a0.pth
#    Đích:   ~/.cache/torch/hub/checkpoints/vgg19_bn-c79401a0.pth
#    (Nếu không có, sẽ tự download lần đầu chạy ~548MB)
```

---

## Sử dụng trong ICPMS

```python
from ICPMS_OCR import extract_text, extract_text_from_bytes

# --- Từ đường dẫn file ---
text = extract_text("path/to/scan.pdf")
text = extract_text("path/to/image.jpg")

# --- Từ bytes (khi xử lý file upload) ---
with open("scan.pdf", "rb") as f:
    text = extract_text_from_bytes(f.read(), "scan.pdf")

# --- Tích hợp vào luồng xử lý PDF hiện tại của ICPMS ---
import pdfplumber
from ICPMS_OCR import extract_text

def doc_extract(pdf_path: str) -> str:
    # Thử pdfplumber trước (nhanh, không cần model)
    with pdfplumber.open(pdf_path) as pdf:
        text = "\n".join(p.extract_text() or "" for p in pdf.pages)

    if len(text.strip()) < 50:
        # PDF scan hoặc có chữ ký → dùng VietOCR
        text = extract_text(pdf_path)

    return text
```

---

## Cấu trúc thư mục

```
ICPMS_OCR/
├── __init__.py          ← API chính: extract_text(), extract_text_from_bytes()
├── module/              ← Text detection (ONNX) + VietOCR recognition
├── vietocr/             ← Model VietOCR (VGG + seq2seq, ~256MB)
├── onnx/                ← ONNX model files (det, layout, tsr, ~407MB)
├── utils/               ← Utilities rút gọn (không DB, không config phức tạp)
└── requirements.txt
```

---

## Lưu ý

| Tình huống | Hành vi |
|---|---|
| PDF có text layer bình thường | Dùng pdfplumber, không load model → nhanh |
| PDF scan / chữ ký / ảnh nhúng | Load VietOCR, chạy OCR → ~5-15 giây/trang |
| Lần chạy đầu tiên | Load model vào RAM (~1-2 phút), các lần sau instantaneous |
| CPU only | Mặc định. Đặt `CUDA_VISIBLE_DEVICES=0` để dùng GPU |
