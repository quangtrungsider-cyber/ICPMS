import logging

PARALLEL_DEVICES = None
try:
    import torch.cuda
    PARALLEL_DEVICES = torch.cuda.device_count()
    logging.info(f"Found {PARALLEL_DEVICES} GPU(s)")
except Exception:
    logging.info("Running on CPU (no CUDA)")
