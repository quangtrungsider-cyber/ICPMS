@echo off
chcp 65001 >nul
title VATM ICPMS - Toi uu CPU va khoi dong lai
cd /d "%~dp0"

echo ============================================
echo   VATM ICPMS - Toi uu CPU (RAM 16GB)
echo ============================================
echo.

echo [1/6] Cap nhat gioi han RAM cho WSL2 (8GB)...
(
echo [wsl2]
echo memory=8GB
echo processors=4
) > "%USERPROFILE%\.wslconfig"
echo      Done.
echo.

echo [2/6] Tao file gioi han RAM rieng cho container OCR (5GB)...
(
echo services:
echo   icpms-ocr:
echo     deploy:
echo       resources:
echo         limits:
echo           memory: 5G
echo         reservations:
echo           memory: 3G
echo     restart: unless-stopped
) > docker-compose.override.yml
echo      Done.
echo.

echo [3/6] Tang timeout OCR len 10800s (3 gio)...
powershell -NoProfile -Command "(Get-Content 'cfg\docker.yaml') -replace 'timeout-seconds: 900', 'timeout-seconds: 10800' | Set-Content 'cfg\docker.yaml'"
echo      Done.
echo.

echo [4/6] Restart WSL2 de ap dung gioi han RAM moi...
wsl --shutdown
timeout /t 5 /nobreak >nul
echo      Done.
echo.

echo [5/6] Kiem tra Docker Desktop dang chay...
docker info >nul 2>&1
if errorlevel 1 goto docker_not_running
echo      OK - Docker dang chay.
echo.
goto continue_build

:docker_not_running
echo.
echo  LOI: Docker Desktop chua chay. Mo Docker Desktop truoc roi chay lai file nay.
echo.
pause
exit /b 1

:continue_build
echo [6/6] Dung container cu, build va khoi dong lai voi cau hinh moi...
docker compose -f docker-compose.yml -f docker-compose.override.yml down >nul 2>&1
docker compose -f docker-compose.yml -f docker-compose.override.yml up -d --build --remove-orphans
if errorlevel 1 goto build_failed
echo.
goto show_status

:build_failed
echo.
echo  LOI: Khoi dong container khong thanh cong. Xem log o tren de biet chi tiet.
echo.
pause
exit /b 1

:show_status
echo Trang thai container hien tai:
echo.
docker ps --format "table {{.Names}}\t{{.Status}}"
echo.

echo ============================================
echo   HOAN TAT!
echo   Mo trinh duyet va truy cap: http://localhost
echo ============================================
echo.
pause