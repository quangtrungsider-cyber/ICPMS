@echo off
chcp 65001 >nul
title VATM ICPMS - Khởi động môi trường Dev

echo.
echo ╔══════════════════════════════════════════════╗
echo ║        VATM ICPMS - Dev Environment          ║
echo ╚══════════════════════════════════════════════╝
echo.

:: ── 1. Kiểm tra Docker ──────────────────────────────────────────────────────
echo [1/4] Kiểm tra Docker...
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo     [LOI] Docker chưa chạy. Hãy khởi động Docker Desktop trước.
    pause
    exit /b 1
)
echo     [OK] Docker đang chạy.

:: ── 2. Khởi động Docker services ────────────────────────────────────────────
echo.
echo [2/4] Khởi động Docker services (postgres, pebble, mailpit)...
docker compose -f compose.yaml up -d postgres pebble pebble-challtestsrv mailpit >nul 2>&1
if %errorlevel% neq 0 (
    echo     [LOI] Không thể start Docker containers.
    docker compose -f compose.yaml up -d postgres pebble pebble-challtestsrv mailpit
    pause
    exit /b 1
)
echo     [OK] Docker services đã khởi động.

:: Chờ PostgreSQL sẵn sàng
echo     Chờ PostgreSQL sẵn sàng...
:wait_pg
timeout /t 2 /nobreak >nul
docker exec vatm-icpms-postgres-1 pg_isready -U probod >nul 2>&1
if %errorlevel% neq 0 goto wait_pg
echo     [OK] PostgreSQL sẵn sàng.

:: ── 3. Khởi động Backend (probod) ───────────────────────────────────────────
echo.
echo [3/4] Khởi động Backend (probod)...

:: Dừng instance cũ nếu đang chạy
taskkill /f /im probod.exe >nul 2>&1
timeout /t 1 /nobreak >nul

if not exist logs mkdir logs
start "ICPMS Backend" /min cmd /c "probod.exe -cfg-file cfg\dev.yaml > logs\backend.log 2>&1"
echo     [OK] Backend đang khởi động (cửa sổ riêng).

:: Chờ backend lên (kiểm tra port GraphQL)
echo     Chờ backend sẵn sàng...
:wait_backend
timeout /t 2 /nobreak >nul
curl -s http://localhost:8080/healthz >nul 2>&1
if %errorlevel% neq 0 (
    tasklist /fi "imagename eq probod.exe" /fo csv /nh | find "probod.exe" >nul 2>&1
    if %errorlevel% neq 0 (
        echo     [LOI] Backend crash. Kiểm tra logs\backend.log
        pause
        exit /b 1
    )
    goto wait_backend
)
echo     [OK] Backend sẵn sàng.

:: ── 4. Khởi động Frontend (Vite) ────────────────────────────────────────────
echo.
echo [4/4] Khởi động Frontend (Vite dev server)...
start "ICPMS Frontend" /min cmd /c "cd apps\console && npm run dev"
echo     [OK] Frontend đang khởi động tại http://localhost:5173

:: Chờ frontend lên
echo     Chờ frontend sẵn sàng...
:wait_fe
timeout /t 2 /nobreak >nul
curl -s http://localhost:5173 >nul 2>&1
if %errorlevel% neq 0 goto wait_fe

:: ── Mở trình duyệt ──────────────────────────────────────────────────────────
echo.
echo ══════════════════════════════════════════════
echo   Tất cả service đã sẵn sàng!
echo.
echo   Frontend : http://localhost:5173
echo   Backend  : http://localhost:8080
echo   Mailpit  : http://localhost:8025
echo ══════════════════════════════════════════════
echo.
start "" "http://localhost:5173"

echo Bấm phím bất kỳ để thoát script (các service vẫn chạy nền)...
pause >nul
