#!/bin/bash
cd ~/icpms
echo "=== Đang build (lần đầu sẽ mất 5-15 phút) ==="
docker compose -f docker-compose.yml build --no-cache
echo "=== Đang khởi động ==="
docker compose -f docker-compose.yml up -d
echo "=== Hệ thống đã chạy. Truy cập http://$(hostname -I | awk '{print $1}') ==="
docker compose -f docker-compose.yml logs -f app
