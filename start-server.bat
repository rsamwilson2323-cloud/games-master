@echo off
title OSGames Hub - Local Server
color 0A

echo.
echo  ============================================
echo   ◈  OSGames Hub - Starting Local Server
echo  ============================================
echo.

:: Check if Python is available
python --version >nul 2>&1
if %errorlevel% == 0 (
    goto :python3
)

py -3 --version >nul 2>&1
if %errorlevel% == 0 (
    goto :python3alt
)

:: Try Node.js http-server as fallback
node --version >nul 2>&1
if %errorlevel% == 0 (
    goto :nodeserver
)

echo  [ERROR] Python or Node.js not found.
echo  Please install Python from https://python.org
echo  or Node.js from https://nodejs.org
echo.
pause
exit /b 1

:python3
echo  [OK] Python found.
goto :getip

:python3alt
echo  [OK] Python (py launcher) found.
goto :getip

:getip
:: Get local IP address
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /i "IPv4"') do (
    set IP=%%a
    goto :found_ip
)
:found_ip
set IP=%IP: =%

echo.
echo  ─────────────────────────────────────────────
echo   Access the site at:
echo.
echo    Local:    http://localhost:8080
echo    Network:  http://%IP%:8080
echo  ─────────────────────────────────────────────
echo.
echo  Press Ctrl+C to stop the server.
echo.

:: Start browser automatically after 1.5s
start "" /min cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:8080"

:: Run Python server
python -m http.server 8080 2>nul || py -3 -m http.server 8080
goto :end

:nodeserver
echo  [OK] Node.js found. Using http-server.
echo.

:: Install http-server if needed
npx --yes http-server --version >nul 2>&1

:: Get IP
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /i "IPv4"') do (
    set NODEIP=%%a
    goto :found_nodeip
)
:found_nodeip
set NODEIP=%NODEIP: =%

echo.
echo  ─────────────────────────────────────────────
echo   Access the site at:
echo.
echo    Local:    http://localhost:8080
echo    Network:  http://%NODEIP%:8080
echo  ─────────────────────────────────────────────
echo.
echo  Press Ctrl+C to stop the server.
echo.

start "" /min cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:8080"
npx http-server -p 8080 -c-1 --cors

:end
echo.
echo  Server stopped.
pause
