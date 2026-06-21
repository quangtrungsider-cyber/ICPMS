# VATM ICPMS - Dev Environment Startup Script
# Chay: .\start-dev.ps1

$ErrorActionPreference = "Stop"

Write-Host "=== VATM ICPMS Dev Environment ===" -ForegroundColor Cyan

$ROOT = $PSScriptRoot

# Tim venv python bang cach scan 2 cap (tranh loi encoding Unicode trong path)
$deepdocDir = Get-ChildItem "D:\Coding\" -Directory -ErrorAction SilentlyContinue | ForEach-Object {
    Get-ChildItem $_.FullName -Directory -ErrorAction SilentlyContinue
} | Where-Object { $_.Name -eq "deepdoc_vietocr" } | Select-Object -First 1
if ($deepdocDir) {
    $VENV_PYTHON = Join-Path $deepdocDir.FullName "venv\Scripts\python.exe"
} else {
    $VENV_PYTHON = ""
}

# -----------------------------------------------------------------------
# 1. Docker stack
# -----------------------------------------------------------------------
Write-Host "`n[1/5] Khoi dong Docker stack..." -ForegroundColor Yellow
docker compose -f "$ROOT\compose.yaml" up -d
if ($LASTEXITCODE -ne 0) {
    Write-Host "Loi: Docker chua chay hoac co van de voi docker compose!" -ForegroundColor Red
    exit 1
}
Write-Host "Docker stack OK" -ForegroundColor Green

# -----------------------------------------------------------------------
# 2. Cho PostgreSQL
# -----------------------------------------------------------------------
Write-Host "`n[2/5] Cho PostgreSQL san sang (5 giay)..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

# -----------------------------------------------------------------------
# 3. OCR server (VietOCR) - dung venv Python co du deps
# -----------------------------------------------------------------------
Write-Host "`n[3/5] Khoi dong OCR server (VietOCR)..." -ForegroundColor Yellow

if (-not $VENV_PYTHON -or -not (Test-Path $VENV_PYTHON)) {
    Write-Host "CANH BAO: Khong tim thay venv Python (deepdoc_vietocr)" -ForegroundColor Red
    Write-Host "OCR server se khong khoi dong. Che do OCR se khong hoat dong." -ForegroundColor Red
} else {
    # Kill server cu neu dang chay
    Get-Process -Name "python" -ErrorAction SilentlyContinue | ForEach-Object {
        $cmdline = (Get-WmiObject Win32_Process -Filter "ProcessId=$($_.Id)" -ErrorAction SilentlyContinue).CommandLine
        if ($cmdline -like "*server.py*" -or $cmdline -like "*ICPMS_OCR*") {
            Stop-Process -Id $_.Id -Force -ErrorAction SilentlyContinue
        }
    }
    Start-Sleep -Seconds 1

    Start-Process -FilePath $VENV_PYTHON `
        -ArgumentList "ICPMS_OCR/server.py" `
        -WorkingDirectory $ROOT `
        -WindowStyle Hidden `
        -RedirectStandardOutput "$ROOT\ocr_server_out.log" `
        -RedirectStandardError "$ROOT\ocr_server_err.log"

    Start-Sleep -Seconds 2
    Write-Host "OCR server da khoi dong an (port 8765)." -ForegroundColor Green
    Write-Host "  Log: $ROOT\ocr_server_out.log" -ForegroundColor DarkGray
}

# -----------------------------------------------------------------------
# 4. Backend probod
# -----------------------------------------------------------------------
Write-Host "`n[4/5] Khoi dong backend probod..." -ForegroundColor Yellow

$probodExe = "$ROOT\probod.exe"
if (-not (Test-Path $probodExe)) {
    Write-Host "Loi: Khong tim thay probod.exe!" -ForegroundColor Red
    Write-Host "Chay 'go build -o probod.exe ./cmd/probod/...' truoc." -ForegroundColor Red
    exit 1
}

Get-Process -Name "probod" -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 1

$cfgArg = "`"$ROOT\cfg\dev.yaml`""
Start-Process -FilePath $probodExe `
    -ArgumentList "-cfg-file $cfgArg" `
    -WorkingDirectory $ROOT `
    -WindowStyle Hidden `
    -RedirectStandardOutput "$ROOT\probod.log" `
    -RedirectStandardError "$ROOT\probod.err.log"

Start-Sleep -Seconds 3
$proc = Get-Process -Name "probod" -ErrorAction SilentlyContinue
if ($proc) {
    Write-Host "probod da khoi dong (PID $($proc.Id))." -ForegroundColor Green
} else {
    Write-Host "CANH BAO: probod khong start duoc. Xem log: $ROOT\probod.err.log" -ForegroundColor Red
}

# -----------------------------------------------------------------------
# 5. Frontend Vite (chay an qua cmd.exe)
# -----------------------------------------------------------------------
Write-Host "`n[5/5] Khoi dong Vite frontend (an)..." -ForegroundColor Yellow

# Kill Vite cu neu dang chay
Get-Process -Name "node" -ErrorAction SilentlyContinue | ForEach-Object {
    $cmdline = (Get-WmiObject Win32_Process -Filter "ProcessId=$($_.Id)" -ErrorAction SilentlyContinue).CommandLine
    if ($cmdline -like "*vite*" -and $cmdline -like "*console*") {
        Stop-Process -Id $_.Id -Force -ErrorAction SilentlyContinue
    }
}
Start-Sleep -Seconds 1

$viteDir = "$ROOT\apps\console"
Start-Process -FilePath "cmd.exe" `
    -ArgumentList "/c npm run dev" `
    -WorkingDirectory $viteDir `
    -WindowStyle Hidden `
    -RedirectStandardOutput "$ROOT\vite.log" `
    -RedirectStandardError "$ROOT\vite.err.log"

Start-Sleep -Seconds 5
$vitelog = Get-Content "$ROOT\vite.log" -ErrorAction SilentlyContinue | Select-String "Local:"
if ($vitelog) {
    $port = ($vitelog | Select-Object -First 1) -replace '.*localhost:', '' -replace '/.*', ''
    Write-Host "Vite da khoi dong: http://localhost:$port" -ForegroundColor Green
} else {
    Write-Host "Vite dang khoi dong... (xem log: $ROOT\vite.log)" -ForegroundColor Green
}

# -----------------------------------------------------------------------
# Tom tat
# -----------------------------------------------------------------------
Write-Host "`n=======================================" -ForegroundColor Cyan
Write-Host "  Backend  : http://localhost:8080" -ForegroundColor Green
Write-Host "  OCR API  : http://localhost:8765" -ForegroundColor Green
Write-Host "  Frontend : http://localhost:5173 (xem vite.log neu doi port)" -ForegroundColor Green
Write-Host "=======================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Tat ca dich vu chay an. Log:" -ForegroundColor DarkGray
Write-Host "  $ROOT\vite.log" -ForegroundColor DarkGray
Write-Host "  $ROOT\probod.log" -ForegroundColor DarkGray
Write-Host "  $ROOT\ocr_server_out.log" -ForegroundColor DarkGray
