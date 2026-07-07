@echo off
title VATM ICPMS - Dev Environment

echo.
echo ==============================================
echo         VATM ICPMS - Dev Environment
echo ==============================================
echo.

REM -- 1. Check Docker --------------------------------------------------
echo [1/4] Kiem tra Docker...
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo     [LOI] Docker chua chay. Hay mo Docker Desktop truoc.
    pause
    exit /b 1
)
echo     [OK] Docker dang chay.

REM -- 2. Start Docker services -----------------------------------------
echo.
echo [2/4] Khoi dong Docker services (postgres, pebble, mailpit)...
docker compose -f compose.yaml up -d postgres pebble pebble-challtestsrv mailpit >nul 2>&1
if %errorlevel% neq 0 (
    echo     [LOI] Khong the start Docker containers.
    docker compose -f compose.yaml up -d postgres pebble pebble-challtestsrv mailpit
    pause
    exit /b 1
)
echo     [OK] Docker services da khoi dong.

REM -- MinIO (S3 storage) + tu dong tao bucket icpms-files ---------------
echo     Khoi dong MinIO va tao bucket icpms-files...
docker compose -f docker-compose.yml up -d minio minio-init >nul 2>&1
if %errorlevel% neq 0 (
    echo     [LOI] Khong the start MinIO.
    docker compose -f docker-compose.yml up -d minio minio-init
    pause
    exit /b 1
)
echo     [OK] MinIO san sang.

echo     Cho PostgreSQL san sang...
:wait_pg
timeout /t 2 /nobreak >nul
docker exec vatm-icpms-postgres-1 pg_isready -U probod >nul 2>&1
if %errorlevel% neq 0 goto wait_pg
echo     [OK] PostgreSQL san sang.

REM -- 3. Start Backend (probod) ----------------------------------------
echo.
echo [3/4] Khoi dong Backend (probod)...

taskkill /f /im probod.exe >nul 2>&1
timeout /t 1 /nobreak >nul

if not exist logs mkdir logs
start "ICPMS Backend" /min cmd /c "probod.exe -cfg-file cfg\dev.yaml > logs\backend.log 2>&1"
echo     [OK] Backend dang khoi dong (cua so rieng).

echo     Cho backend san sang...
:wait_backend
timeout /t 2 /nobreak >nul
curl -s http://localhost:8080/healthz >nul 2>&1
if %errorlevel% neq 0 (
    tasklist /fi "imagename eq probod.exe" /fo csv /nh | find "probod.exe" >nul 2>&1
    if %errorlevel% neq 0 (
        echo     [LOI] Backend crash. Kiem tra logs\backend.log
        pause
        exit /b 1
    )
    goto wait_backend
)
echo     [OK] Backend san sang.

REM -- 4. Start Frontend (Vite) -----------------------------------------
echo.
echo [4/4] Khoi dong Frontend (Vite dev server)...
start "ICPMS Frontend" /min cmd /c "cd apps\console && npm run dev"
echo     [OK] Frontend dang khoi dong tai http://localhost:5173

echo     Cho frontend san sang...
:wait_fe
timeout /t 2 /nobreak >nul
curl -s http://localhost:5173 >nul 2>&1
if %errorlevel% neq 0 goto wait_fe

echo.
echo ==============================================
echo   Tat ca service da san sang!
echo.
echo   Frontend : http://localhost:5173
echo   Backend  : http://localhost:8080
echo   Mailpit  : http://localhost:8025
echo ==============================================
echo.
start "" "http://localhost:5173"

echo Bam phim bat ky de thoat script (cac service van chay nen)...
pause >nul
